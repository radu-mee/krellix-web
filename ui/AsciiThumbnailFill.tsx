"use client";

import { useEffect, useRef } from "react";

export type AsciiThumbnailEffect =
  | "waveField"
  | "noiseCloud"
  | "pulseGrid"
  | "topographic"
  | "particleSwarm"
  | "helixBands"
  | "driftStrata"
  | "vectorBloom"
  | "prismTide"
  | "auroraMesh"
  | "quantumRipple";

export type AsciiThumbnailGradientStyle =
  | "mintBlueViolet"
  | "cyanMagentaAmber"
  | "greenBluePurple"
  | "sunsetCoralGold"
  | "neonLimeCyan"
  | "electricRoseBlue"
  | "emberVioletCyan"
  | "tealIndigoRose"
  | "limeGoldSky"

interface AsciiThumbnailFillProps {
  effect: AsciiThumbnailEffect;
  gradientStyle: AsciiThumbnailGradientStyle;
  className?: string;
  characterCellSize?: number;
}

const ASCII_CHARS = " .,:-=+*#%@";
const BAYER_4X4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
] as const;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function fract(value: number): number {
  return value - Math.floor(value);
}

function hash2(x: number, y: number): number {
  return fract(Math.sin(x * 127.1 + y * 311.7) * 43758.5453123);
}

function applyGradientStops(
  gradient: CanvasGradient,
  style: AsciiThumbnailGradientStyle,
  theme: "light" | "dark",
) {
  if (theme === "light") {
    switch (style) {
      case "mintBlueViolet":
        gradient.addColorStop(0, "#1b9f86");
        gradient.addColorStop(0.54, "#4f73d5");
        gradient.addColorStop(1, "#7f5acc");
        return;
      case "cyanMagentaAmber":
        gradient.addColorStop(0, "#1b7e9f");
        gradient.addColorStop(0.55, "#8056d6");
        gradient.addColorStop(1, "#b46a2f");
        return;
      case "greenBluePurple":
        gradient.addColorStop(0, "#2a8f68");
        gradient.addColorStop(0.58, "#3f74bd");
        gradient.addColorStop(1, "#6e4ec6");
        return;
      case "sunsetCoralGold":
        gradient.addColorStop(0, "#9a4f9f");
        gradient.addColorStop(0.56, "#4f70c6");
        gradient.addColorStop(1, "#be9d52");
        return;
      case "neonLimeCyan":
        gradient.addColorStop(0, "#5a53bf");
        gradient.addColorStop(0.56, "#2f9f98");
        gradient.addColorStop(1, "#67ab62");
        return;
      case "electricRoseBlue":
        gradient.addColorStop(0, "#9b3c7d");
        gradient.addColorStop(0.52, "#6d4ec8");
        gradient.addColorStop(1, "#2d86c2");
        return;
      case "emberVioletCyan":
        gradient.addColorStop(0, "#a0502f");
        gradient.addColorStop(0.5, "#6e4bc7");
        gradient.addColorStop(1, "#2f8fa0");
        return;
      case "tealIndigoRose":
        gradient.addColorStop(0, "#2f9b88");
        gradient.addColorStop(0.52, "#4f62c8");
        gradient.addColorStop(1, "#a14f8b");
        return;
      case "limeGoldSky":
        gradient.addColorStop(0, "#6556bf");
        gradient.addColorStop(0.52, "#318ea6");
        gradient.addColorStop(1, "#b9a55f");
        return;
        return;
      default:
        gradient.addColorStop(0, "#1b9f86");
        gradient.addColorStop(0.54, "#4f73d5");
        gradient.addColorStop(1, "#7f5acc");
    }

    return;
  }

  switch (style) {
    case "mintBlueViolet":
      gradient.addColorStop(0, "#23d0ac");
      gradient.addColorStop(0.54, "#5f90ff");
      gradient.addColorStop(1, "#946bff");
      return;
    case "cyanMagentaAmber":
      gradient.addColorStop(0, "#5be3ff");
      gradient.addColorStop(0.55, "#9a6dff");
      gradient.addColorStop(1, "#ff8d41");
      return;
    case "greenBluePurple":
      gradient.addColorStop(0, "#31cd89");
      gradient.addColorStop(0.58, "#4d8fff");
      gradient.addColorStop(1, "#9f68ff");
      return;
    case "sunsetCoralGold":
      gradient.addColorStop(0, "#ff7fd8");
      gradient.addColorStop(0.56, "#72a6ff");
      gradient.addColorStop(1, "#ffd775");
      return;
    case "neonLimeCyan":
      gradient.addColorStop(0, "#907fff");
      gradient.addColorStop(0.56, "#4ad9c7");
      gradient.addColorStop(1, "#85ea75");
      return;
    case "electricRoseBlue":
      gradient.addColorStop(0, "#ff5ec4");
      gradient.addColorStop(0.52, "#8d72ff");
      gradient.addColorStop(1, "#42b5ff");
      return;
    case "emberVioletCyan":
      gradient.addColorStop(0, "#ff7a4e");
      gradient.addColorStop(0.5, "#9a71ff");
      gradient.addColorStop(1, "#55dcff");
      return;
    case "tealIndigoRose":
      gradient.addColorStop(0, "#39d1b6");
      gradient.addColorStop(0.52, "#6f84ff");
      gradient.addColorStop(1, "#ff76bc");
      return;
    case "limeGoldSky":
      gradient.addColorStop(0, "#a08bff");
      gradient.addColorStop(0.52, "#58c8de");
      gradient.addColorStop(1, "#ffe17d");
      return;
      return;
    default:
      gradient.addColorStop(0, "#23d0ac");
      gradient.addColorStop(0.54, "#5f90ff");
      gradient.addColorStop(1, "#946bff");
  }
}

export default function AsciiThumbnailFill({
  effect,
  gradientStyle,
  className = "",
  characterCellSize = 9,
}: AsciiThumbnailFillProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const particleCount = 56;
    const particles: Particle[] = Array.from({ length: particleCount }, (_, index) => ({
      x: hash2(index * 1.31, 0.19 + index * 0.27),
      y: hash2(index * 0.87, 0.51 + index * 0.21),
      vx: 0,
      vy: 0,
      phase: index * 0.31,
    }));

    let dpr = window.devicePixelRatio || 1;
    let width = 1;
    let height = 1;
    let columns = 42;
    let rows = 22;
    let characterAdvanceX = 0;
    let lineHeight = 0;
    const fontSize = Math.max(8, Math.min(11, characterCellSize + 1));

    let frameId = 0;
    let previousFrameMs = 0;

    let isVisible = true;
    let reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let currentTheme: "light" | "dark" =
      document.documentElement.dataset.theme === "dark" ? "dark" : "light";

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));

      dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = clamp(Math.floor(width / characterCellSize), 34, 220);
      rows = clamp(Math.floor(height / (characterCellSize + 1)), 16, 120);

      context.font = `400 ${fontSize}px 'JetBrains Mono', monospace`;
      characterAdvanceX = width / columns;
      lineHeight = height / rows;
    };

    const updateParticles = (time: number) => {
      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        const swirl = time * 0.86 + particle.phase;
        const ax = Math.cos(swirl) * 0.0018 + (0.5 - particle.x) * 0.0012;
        const ay = Math.sin(swirl * 1.11) * 0.0018 + (0.5 - particle.y) * 0.0012;

        particle.vx = particle.vx * 0.94 + ax;
        particle.vy = particle.vy * 0.94 + ay;
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x += 1;
        if (particle.x > 1) particle.x -= 1;
        if (particle.y < 0) particle.y += 1;
        if (particle.y > 1) particle.y -= 1;
      }
    };

    const sampleEffect = (column: number, row: number, time: number): number => {
      const x = column / Math.max(1, columns - 1);
      const y = row / Math.max(1, rows - 1);
      const cx = x - 0.5;
      const cy = y - 0.5;

      let raw = 0;

      switch (effect) {
        case "waveField": {
          const primary = Math.sin(x * 10 + time * 2.1 + Math.sin(y * 7 + time * 0.8));
          const secondary = Math.cos(y * 9 - time * 1.45 + x * 2.1);
          raw = clamp((primary * 0.62 + secondary * 0.38 + 1) * 0.5, 0, 1);
          break;
        }

        case "noiseCloud": {
          const n1 = Math.sin(x * 11.2 + time * 0.9 + Math.cos(y * 8.1 - time * 0.7));
          const n2 = Math.cos(y * 10.7 - time * 0.5 + Math.sin(x * 7.6 + time * 0.8));
          const n3 = Math.sin((x + y) * 9.4 - time * 1.05);
          raw = clamp((n1 * 0.45 + n2 * 0.35 + n3 * 0.2 + 1) * 0.5, 0, 1);
          break;
        }

        case "pulseGrid": {
          const dist = Math.hypot(cx, cy);
          const rings = Math.sin(dist * 34 - time * 2.4) * 0.5 + 0.5;
          const falloff = Math.exp(-dist * 2.8);
          const lattice = Math.sin(x * 38 + time * 0.5) * Math.sin(y * 34 + time * 0.5);
          raw = clamp(rings * falloff + lattice * 0.16 + 0.08, 0, 1);
          break;
        }

        case "topographic": {
          const field =
            Math.sin(x * 9.3 + time * 0.7) +
            Math.cos(y * 8.4 - time * 0.6) +
            Math.sin((x + y) * 7.1 + time * 0.35);
          const contour = Math.abs(Math.sin(field * 4.3));
          const base = 0.5 + 0.5 * Math.sin((x * 2 - y * 1.8) * Math.PI + time * 0.22);
          raw = clamp(contour * 0.78 + base * 0.22, 0, 1);
          break;
        }

        case "particleSwarm": {
          let influence = 0;
          for (let index = 0; index < particles.length; index += 1) {
            const particle = particles[index];
            const px = x - particle.x;
            const py = y - particle.y;
            const distanceSquared = px * px + py * py;
            influence += Math.exp(-distanceSquared * 100);
          }
          raw = clamp(influence * 0.54, 0, 1);
          break;
        }

        case "helixBands": {
          const dist = Math.hypot(cx, cy);
          const angle = Math.atan2(cy, cx);
          const spiral = Math.sin(angle * 6 + dist * 22 - time * 1.8) * 0.5 + 0.5;
          const rings = Math.cos(dist * 30 - time * 1.2) * 0.5 + 0.5;
          raw = clamp(spiral * 0.62 + rings * 0.38, 0, 1);
          break;
        }

        case "driftStrata": {
          const layerA = Math.sin(y * 40 + time * 1.4 + Math.sin(x * 8 + time * 0.5) * 3) * 0.5 + 0.5;
          const layerB = Math.cos(y * 26 - time * 1.1 + x * 5) * 0.5 + 0.5;
          const shear = Math.sin((x + y) * 10 - time * 0.8) * 0.5 + 0.5;
          raw = clamp(layerA * 0.5 + layerB * 0.32 + shear * 0.18, 0, 1);
          break;
        }

        case "vectorBloom": {
          const dist = Math.hypot(cx, cy) + 0.0001;
          const vx = -cy / dist;
          const vy = cx / dist;
          const flow = Math.sin((vx * x + vy * y) * 48 + time * 2) * 0.5 + 0.5;
          const bloom = Math.exp(-dist * 3.2);
          const turbulence = Math.cos((x * 12 - y * 14) + time * 1.3) * 0.5 + 0.5;
          raw = clamp(flow * 0.46 + bloom * 0.34 + turbulence * 0.2, 0, 1);
          break;
        }

        case "prismTide": {
          const ridges = Math.sin(x * 46 + time * 1.6) * 0.5 + 0.5;
          const swell = Math.cos(y * 18 - time * 1.15 + Math.sin(x * 7 + time * 0.42) * 2.1) * 0.5 + 0.5;
          const diagonal = Math.sin((x - y) * 22 + time * 0.9) * 0.5 + 0.5;
          raw = clamp(ridges * 0.44 + swell * 0.38 + diagonal * 0.18, 0, 1);
          break;
        }

        case "auroraMesh": {
          const mesh = Math.sin(x * 26 + time * 1.1) * Math.cos(y * 26 - time * 0.9);
          const curtain = Math.cos((x * 9 + y * 13) + Math.sin(time * 0.6) * 3.2) * 0.5 + 0.5;
          const halo = Math.exp(-Math.hypot(cx * 1.15, cy * 0.82) * 2.3);
          raw = clamp((mesh * 0.5 + 0.5) * 0.42 + curtain * 0.34 + halo * 0.24, 0, 1);
          break;
        }

        case "quantumRipple": {
          const dist = Math.hypot(cx * 1.15, cy * 0.82);
          const core = Math.sin(dist * 44 - time * 2.1) * 0.5 + 0.5;
          const ring = Math.cos(dist * 18 + time * 1.25) * 0.5 + 0.5;
          const spin = Math.sin(Math.atan2(cy, cx) * 8 + time * 0.8) * 0.5 + 0.5;
          raw = clamp(core * 0.46 + ring * 0.34 + spin * 0.2, 0, 1);
          break;
        }

        default:
          raw = 0;
      }

      const grain = hash2(column * 0.71 + time * 0.21, row * 0.97 + time * 0.18) * 0.08;
      return clamp(raw * 0.94 + grain, 0, 1);
    };

    const renderFrame = (timeMs: number) => {
      if (!isVisible) {
        frameId = window.requestAnimationFrame(renderFrame);
        return;
      }

      const targetInterval = reduceMotion ? 240 : 95;
      if (previousFrameMs !== 0 && timeMs - previousFrameMs < targetInterval) {
        frameId = window.requestAnimationFrame(renderFrame);
        return;
      }
      previousFrameMs = timeMs;

      const time = timeMs * 0.001;
      if (effect === "particleSwarm") {
        updateParticles(time);
      }

      context.clearRect(0, 0, width, height);
      context.font = `400 ${fontSize}px 'JetBrains Mono', monospace`;
      context.textBaseline = "top";
      context.textAlign = "left";

      const pulse = reduceMotion ? 0 : time * 0.38;
      const centerX = width * (0.5 + Math.sin(pulse) * 0.1);
      const centerY = height * (0.5 + Math.cos(pulse * 0.77) * 0.1);
      const innerRadius = Math.min(width, height) * 0.08;
      const outerRadius = Math.max(width, height) * 0.72;

      const gradient = context.createRadialGradient(
        centerX,
        centerY,
        innerRadius,
        width * 0.5,
        height * 0.5,
        outerRadius,
      );
      applyGradientStops(gradient, gradientStyle, currentTheme);
      context.fillStyle = gradient;

      for (let row = 0; row < rows; row += 1) {
        const y = row * lineHeight;
        for (let column = 0; column < columns; column += 1) {
          const x = column * characterAdvanceX;
          const value = sampleEffect(column, row, time);
          const dither = (BAYER_4X4[row & 3][column & 3] - 7.5) / 16;
          const mapped = clamp(value + dither * 0.1, 0, 1);
          const charIndex = Math.max(1, Math.floor(mapped * (ASCII_CHARS.length - 1)));
          context.fillText(ASCII_CHARS[charIndex], x, y);
        }
      }

      frameId = window.requestAnimationFrame(renderFrame);
    };

    const themeObserver = new MutationObserver(() => {
      currentTheme =
        document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.01 },
    );
    visibilityObserver.observe(canvas);

    const onVisibilityChange = () => {
      if (document.visibilityState !== "visible") {
        isVisible = false;
        return;
      }
      isVisible = true;
      previousFrameMs = 0;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionPreferenceChange = (event: MediaQueryListEvent) => {
      reduceMotion = event.matches;
    };
    if (typeof reduceMotionQuery.addEventListener === "function") {
      reduceMotionQuery.addEventListener("change", onMotionPreferenceChange);
    } else {
      reduceMotionQuery.addListener(onMotionPreferenceChange);
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
      previousFrameMs = 0;
    });
    resizeObserver.observe(canvas);

    resize();
    frameId = window.requestAnimationFrame(renderFrame);

    return () => {
      if (typeof reduceMotionQuery.removeEventListener === "function") {
        reduceMotionQuery.removeEventListener("change", onMotionPreferenceChange);
      } else {
        reduceMotionQuery.removeListener(onMotionPreferenceChange);
      }
      themeObserver.disconnect();
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.cancelAnimationFrame(frameId);
    };
  }, [effect, gradientStyle, characterCellSize]);

  return (
    <canvas
      ref={canvasRef}
      className={`block h-full w-full ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
