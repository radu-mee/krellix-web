"use client";

import { useEffect, useRef } from "react";
import styles from "./WelcomeBadge.module.css";

const AVATAR_PAIRS = [
  ["/images/agent-avatar-1-64.webp", "/images/agent-avatar-4-64.webp"],
  ["/images/agent-avatar-2-64.webp", "/images/agent-avatar-5-64.webp"],
  ["/images/agent-avatar-3-64.webp", "/images/agent-avatar-6-64.webp"],
] as const;

// Collapsed track: three 32px avatars overlapping by 14px.
const TRACK_WIDTH = 68;
// How much wider the track gets when the avatars fan out.
const MAX_SPREAD = 44;
// The right-hand spring overshoots its target by ~15% before settling.
const SPRING_OVERSHOOT = 1.2;

/** Runs the avatar loop. Returns a function that stops it and clears its inline styles. */
function runAvatarLoop(
  badge: HTMLElement,
  track: HTMLElement,
  avatars: HTMLElement[],
  flippers: HTMLElement[],
) {
  let disposed = false;
  const pending = new Set<() => void>();
  const stopEffects: Array<() => void> = [];
  const destroyValues: Array<() => void> = [];

  // Resolves true when `done` is called, or false if the loop is stopped first.
  // `setup` registers whatever it waits on and returns its teardown.
  const wait = (setup: (done: () => void) => () => void) =>
    new Promise<boolean>((resolve) => {
      let finished = false;
      let teardown = () => {};
      const finish = (ok: boolean) => {
        if (finished) return;
        finished = true;
        teardown();
        pending.delete(cancel);
        resolve(ok && !disposed);
      };
      const cancel = () => finish(false);
      pending.add(cancel);
      teardown = setup(() => finish(true));
      if (finished) teardown();
    });

  const pause = (ms: number) =>
    wait((done) => {
      const timer = window.setTimeout(done, ms);
      return () => window.clearTimeout(timer);
    });

  // Only animate while the badge is on screen and the tab is visible.
  let onScreen = false;
  const visibilityWaiters = new Set<() => void>();
  const notifyVisibility = () => visibilityWaiters.forEach((check) => check());
  const observer = new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
    notifyVisibility();
  });
  observer.observe(badge);
  document.addEventListener("visibilitychange", notifyVisibility);

  const untilVisible = () =>
    wait((done) => {
      const check = () => {
        if (onScreen && !document.hidden) done();
      };
      visibilityWaiters.add(check);
      check();
      return () => visibilityWaiters.delete(check);
    });

  const start = async () => {
    // Load the physics engine after the badge has rendered.
    const { motionValue, springValue, styleEffect, transformValue } = await import("motion");
    if (disposed) return;

    // The middle avatar follows the impulse. The outer two follow it with
    // different weights, so their movement stays connected without matching.
    const impulse = motionValue(0);
    const middle = springValue(impulse, { stiffness: 250, damping: 19, mass: 0.8 });
    const left = springValue(middle, { stiffness: 225, damping: 16, mass: 0.8 });
    const right = springValue(middle, { stiffness: 190, damping: 15, mass: 0.9 });
    // 1 = full fan-out. Lowered on narrow screens so the badge never overflows.
    const spread = motionValue(1);
    const leftX = transformValue(() => -3 * spread.get() * left.get());
    const middleX = transformValue(() => 19 * spread.get() * middle.get());
    const rightX = transformValue(() => 41 * spread.get() * right.get());
    const trackWidth = transformValue(() => TRACK_WIDTH + MAX_SPREAD * spread.get() * right.get());

    const values = [impulse, middle, left, right, spread, leftX, middleX, rightX, trackWidth];
    destroyValues.push(...values.map((value) => () => value.destroy()));
    stopEffects.push(styleEffect(track, { width: trackWidth }));
    stopEffects.push(styleEffect(avatars[0], { x: leftX }));
    stopEffects.push(styleEffect(avatars[1], { x: middleX }));
    stopEffects.push(styleEffect(avatars[2], { x: rightX }));

    const until = (value: typeof middle, reached: (latest: number) => boolean) =>
      wait((done) => {
        if (reached(value.get())) {
          done();
          return () => {};
        }
        return value.on("change", (latest) => {
          if (reached(latest)) done();
        });
      });

    // Wait until every follower spring has come to rest at the expanded position.
    const followers = [middle, left, right];
    const untilExpanded = () =>
      wait((done) => {
        const check = () => {
          const settled = followers.every(
            (value) => Math.abs(value.get() - 1) < 0.01 && !value.isAnimating(),
          );
          if (settled) done();
        };
        const unsubscribe = followers.map((value) => value.on("animationComplete", check));
        check();
        return () => unsubscribe.forEach((off) => off());
      });

    // Measured while collapsed: how much room the badge has to grow into.
    const fitSpread = () => {
      const parent = badge.parentElement;
      if (!parent) return;
      const parentStyle = getComputedStyle(parent);
      const available =
        parent.clientWidth -
        parseFloat(parentStyle.paddingLeft) -
        parseFloat(parentStyle.paddingRight);
      const collapsedWidth = badge.offsetWidth - (track.offsetWidth - TRACK_WIDTH);
      const room = available - collapsedWidth;
      spread.set(Math.max(0, Math.min(1, room / (MAX_SPREAD * SPRING_OVERSHOOT))));
    };

    let flipCount = 0;
    while (!disposed) {
      if (!(await pause(950))) break;
      if (!(await untilVisible())) break;
      fitSpread();

      impulse.set(-0.18);
      if (!(await until(middle, (progress) => progress <= -0.12))) break;
      impulse.set(1);
      if (!(await until(middle, (progress) => progress >= 0.56))) break;

      flipCount += 1;
      const angle = `${flipCount * 180}deg`;
      flippers[1].style.transform = `rotateX(${angle})`;
      if (!(await pause(95))) break;
      if (!(await until(left, (progress) => progress >= 0.58))) break;
      flippers[0].style.transform = `rotateX(${angle})`;
      if (!(await pause(95))) break;
      if (!(await until(right, (progress) => progress >= 0.58))) break;
      flippers[2].style.transform = `rotateX(${angle})`;
      if (!(await pause(480))) break;
      if (!(await untilExpanded())) break;
      if (!(await pause(1000))) break;

      impulse.set(0);
      if (!(await until(right, (progress) => progress <= 0.12))) break;
    }
  };

  // If the motion chunk fails to load, the badge simply stays static.
  start().catch(() => {});

  return () => {
    disposed = true;
    [...pending].forEach((cancel) => cancel());
    observer.disconnect();
    document.removeEventListener("visibilitychange", notifyVisibility);
    stopEffects.forEach((stop) => stop());
    destroyValues.forEach((destroy) => destroy());
    track.style.width = "";
    [...avatars, ...flippers].forEach((element) => {
      element.style.transform = "";
    });
  };
}

export default function WelcomeBadge() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLSpanElement>(null);
  const avatarRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const flipperRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const badge = badgeRef.current;
    const track = trackRef.current;
    const avatars = avatarRefs.current.filter((el): el is HTMLSpanElement => el !== null);
    const flippers = flipperRefs.current.filter((el): el is HTMLSpanElement => el !== null);
    if (
      !badge ||
      !track ||
      avatars.length !== AVATAR_PAIRS.length ||
      flippers.length !== AVATAR_PAIRS.length
    ) return;

    // Follow the reduced-motion setting live, not just on first load.
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stopLoop: (() => void) | null = null;
    const sync = () => {
      if (reducedMotion.matches) {
        stopLoop?.();
        stopLoop = null;
      } else if (!stopLoop) {
        stopLoop = runAvatarLoop(badge, track, avatars, flippers);
      }
    };

    sync();
    reducedMotion.addEventListener("change", sync);
    return () => {
      reducedMotion.removeEventListener("change", sync);
      stopLoop?.();
    };
  }, []);

  return (
    <div className={styles.badge} ref={badgeRef}>
      <img
        className={styles.symbol}
        src="/images/Welcome-badge-16x16.svg"
        alt=""
        width={16}
        height={16}
      />
      <span className={styles.label}>Welcome to Krellix</span>
      <span className={styles.avatarTrack} aria-hidden="true" ref={trackRef}>
        {AVATAR_PAIRS.map(([front, back], index) => (
          <span
            className={`${styles.avatar} ${styles[`avatar${index + 1}`]}`}
            key={front}
            ref={(element) => { avatarRefs.current[index] = element; }}
          >
            <span
              className={styles.flipper}
              ref={(element) => { flipperRefs.current[index] = element; }}
            >
              <img className={styles.face} src={front} alt="" width={32} height={32} />
              <img
                className={`${styles.face} ${styles.back}`}
                src={back}
                alt=""
                width={32}
                height={32}
              />
            </span>
          </span>
        ))}
      </span>
    </div>
  );
}
