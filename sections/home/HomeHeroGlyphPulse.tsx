"use client";

import { useEffect, useRef } from "react";
import { jetbrainsMono } from "@/lib/fonts";

const SIGNS = ".:·-+=*/<>[]#%";
const LETTERS = "ACEHKMNRSTVWXYZ";
const GLYPH_SIZE = 10;
const COLUMN_STEP = GLYPH_SIZE * .97;
const ROW_STEP = GLYPH_SIZE * 1.24;
// About 20 paints per second: the glyphs drift only a few pixels per second, so
// more paints don't look smoother, they just cost CPU. 45ms (not 50) lands on
// every 3rd frame at 60Hz instead of jittering between the 3rd and 4th.
const MIN_PAINT_INTERVAL_MS = 45;
const MESSAGES = [
  { height: .055, inset: .43, text: "[DRAFT-THE-AGENDA]" },
  { height: .11, inset: .30, text: "[SUMMARIZE-THE-CALL]" },
  { height: .165, inset: .19, text: "[THE-PILOT-IS-ON-TRACK]" },
  { height: .22, inset: .50, text: "[TWO-ACTION-ITEMS]" },
  { height: .275, inset: .34, text: "[COMPARE-THE-DRAFTS]" },
  { height: .33, inset: .24, text: "[DRAFT-A-FOLLOW-UP]" },
  { height: .385, inset: .45, text: "[THE-REVIEW-IS-PENDING]" },
  { height: .44, inset: .39, text: "[READY-FOR-REVIEW]" },
  { height: .49, inset: .20, text: "[FIND-A-TIME-TO-MEET]" },
  { height: .54, inset: .27, text: "[WHAT-CHANGED?]" },
  { height: .64, inset: .23, text: "[THE-LAUNCH-MOVED]" },
];

function smoothFade(value: number) {
  const t = Math.max(0, Math.min(1, value));
  return t * t * (3 - 2 * t);
}

function glyphSeed(row: number, column: number) {
  const mixed = Math.imul(row + 1, 374761393) ^ Math.imul(column, 668265263);
  const hash = Math.imul(mixed ^ (mixed >>> 13), 1274126177);
  return (hash ^ (hash >>> 16)) >>> 0;
}

// Always JetBrains Mono, independent of the heading font (see lib/fonts.ts).
const GLYPH_FONT_FAMILY = `${jetbrainsMono.style.fontFamily}, monospace`;

function createScene(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const messageRows = new Map<number, { text: string; start: number }>();
  let width = 0;
  let height = 0;
  let baseRadius = 0;
  let messagePeriod = 1;

  return {
    resize() {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      if (!width || !height) return;

      const scale = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(width * scale));
      canvas.height = Math.max(1, Math.round(height * scale));
      ctx.setTransform(canvas.width / width, 0, 0, canvas.height / height, 0, 0);

      baseRadius = Math.min(width, height) * .96;
      messagePeriod = Math.max(24, Math.ceil(baseRadius / COLUMN_STEP) + 4);
      messageRows.clear();
      const clippedTop = Math.max(0, (canvas.parentElement?.getBoundingClientRect().top ?? bounds.top) - bounds.top);
      const visibleHeight = Math.max(0, baseRadius - clippedTop);

      for (const message of MESSAGES) {
        const row = Math.round((clippedTop + message.height * visibleHeight) / ROW_STEP);
        const centeredAt = -Math.round(message.inset * baseRadius / COLUMN_STEP);
        const start = Math.min(-message.text.length, centeredAt - Math.floor(message.text.length / 2));
        const initialShift = Math.floor(row * 3.7 / COLUMN_STEP);
        messageRows.set(row, { text: message.text, start: start - initialShift });
      }
    },

    paint(elapsed: number, color: string, fontFamily: string) {
      if (!width || !height) return;

      const breath = Math.sin(elapsed * 1.3);
      const radius = baseRadius * (1 + .035 * breath);
      const feather = radius * .43;
      const lastRow = Math.ceil(radius / ROW_STEP);
      const bandCenter = .55 + .08 * breath;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;
      ctx.font = `${GLYPH_SIZE}px ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let row = 0; row <= lastRow; row++) {
        const rowY = row * ROW_STEP + ROW_STEP * .12;
        const y = rowY / radius;
        const drift = elapsed * (4 + 11 * Math.sin(row * .31 + .4)) + row * 3.7;
        const passedColumns = Math.floor(drift / COLUMN_STEP);
        const shift = drift - passedColumns * COLUMN_STEP;
        const rowRadius = radius * Math.sqrt(Math.max(0, 1 - y * y));
        const firstColumn = Math.floor((-rowRadius - shift) / COLUMN_STEP);
        const message = messageRows.get(row);

        for (let column = firstColumn; column <= 0; column++) {
          const columnX = width + column * COLUMN_STEP + shift;
          const x = (columnX - width) / radius;
          const distanceSquared = x * x + y * y;
          if (distanceSquared >= 1) continue;

          const coverage = smoothFade(radius * (1 - Math.sqrt(distanceSquared)) / feather);
          if (coverage < .02) continue;

          const textColumn = column - passedColumns;
          const seed = glyphSeed(row, textColumn);
          let character: string | undefined;
          if (message) {
            const offset = (textColumn - message.start) % messagePeriod;
            character = message.text[offset < 0 ? offset + messagePeriod : offset];
          }

          const depth = Math.sqrt(1 - distanceSquared);
          const band = smoothFade(1 - Math.abs(-.8 * x + .68 * y - bandCenter) / .23);
          const variation = character ? .97 : .48 + (seed & 255) / 490;
          const shimmer = .84 + .16 * Math.sin(elapsed * 1.7 + (seed >>> 16) * .11);
          const brightness = (.23 + .31 * depth + .20 * band) * (1 + .13 * breath);
          const alphabet = (seed & 3) === 0 ? LETTERS : SIGNS;
          ctx.globalAlpha = coverage * brightness * variation * shimmer;
          ctx.fillText(character ?? alphabet[(seed >>> 8) % alphabet.length], columnX, rowY);
        }
      }
      ctx.globalAlpha = 1;
    },
  };
}

export default function HomeHeroGlyphPulse() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const scene = createScene(canvas);
    if (!scene) return;

    const root = document.documentElement;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let frame = 0;
    let elapsed = 0;
    let previousPaint = 0;
    let color = "#c9c9c9";
    const fontFamily = GLYPH_FONT_FAMILY;

    function tick(now: number) {
      const delta = now - previousPaint;
      if (delta >= MIN_PAINT_INTERVAL_MS) {
        previousPaint = now;
        elapsed += Math.min(delta, 80) * .6 / 1000;
        scene?.paint(elapsed, color, fontFamily);
      }
      frame = requestAnimationFrame(tick);
    }

    function syncPlayback() {
      if (!visible || motion.matches || document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else if (!frame) {
        previousPaint = performance.now();
        frame = requestAnimationFrame(tick);
      }
    }

    const resize = () => {
      scene.resize();
      scene.paint(elapsed, color, fontFamily);
    };
    const applyTheme = () => {
      color = root.dataset.theme === "dark" ? "#c9c9c9" : "#8d765d";
      scene.paint(elapsed, color, fontFamily);
    };
    const sizeObserver = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    });
    const themeObserver = new MutationObserver(applyTheme);

    applyTheme();
    resize();
    // Canvas text doesn't swap in a web font by itself: repaint once it's ready
    // (it's preloaded, so this is usually immediate).
    let disposed = false;
    document.fonts
      .load(`${GLYPH_SIZE}px ${fontFamily}`)
      .then(() => {
        if (!disposed) scene.paint(elapsed, color, fontFamily);
      })
      .catch(() => {});
    sizeObserver.observe(canvas);
    visibilityObserver.observe(canvas);
    themeObserver.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    motion.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      sizeObserver.disconnect();
      visibilityObserver.disconnect();
      themeObserver.disconnect();
      motion.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="home-hero-glyph-pulse" />;
}
