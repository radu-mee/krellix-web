"use client";

import { useEffect, useRef } from "react";

export type AsciiEffectType =
  | "waveField"
  | "noiseCloud"
  | "pulseGrid"
  | "topographic"
  | "topographicTriangle"
  | "particleSwarm";

export type AsciiEffectPalette =
  | "mintBlueViolet"
  | "cyanMagentaAmber"
  | "sunsetCoralGold"
  | "tealIndigoRose"
  | "limeGoldSky";

interface AsciiEffectDemoProps {
  effect: AsciiEffectType;
  size?: number;
  className?: string;
  palette?: AsciiEffectPalette;
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
  palette: AsciiEffectPalette,
  theme: "light" | "dark",
) {
  if (theme === "light") {
    switch (palette) {
      case "mintBlueViolet":
        gradient.addColorStop(0, "#1b9f86");
        gradient.addColorStop(0.56, "#4f73d5");
        gradient.addColorStop(1, "#7f5acc");
        return;
      case "cyanMagentaAmber":
        gradient.addColorStop(0, "#1b7e9f");
        gradient.addColorStop(0.55, "#8056d6");
        gradient.addColorStop(1, "#b46a2f");
        return;
      case "sunsetCoralGold":
        gradient.addColorStop(0, "#9a4f9f");
        gradient.addColorStop(0.56, "#4f70c6");
        gradient.addColorStop(1, "#be9d52");
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
      default:
        gradient.addColorStop(0, "#1b9f86");
        gradient.addColorStop(0.56, "#4f73d5");
        gradient.addColorStop(1, "#7f5acc");
    }

    return;
  }

  switch (palette) {
    case "mintBlueViolet":
      gradient.addColorStop(0, "#23d0ac");
      gradient.addColorStop(0.56, "#5f90ff");
      gradient.addColorStop(1, "#946bff");
      return;
    case "cyanMagentaAmber":
      gradient.addColorStop(0, "#5be3ff");
      gradient.addColorStop(0.55, "#9a6dff");
      gradient.addColorStop(1, "#ff8d41");
      return;
    case "sunsetCoralGold":
      gradient.addColorStop(0, "#ff7fd8");
      gradient.addColorStop(0.56, "#72a6ff");
      gradient.addColorStop(1, "#ffd775");
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
    default:
      gradient.addColorStop(0, "#23d0ac");
      gradient.addColorStop(0.56, "#5f90ff");
      gradient.addColorStop(1, "#946bff");
  }
}

export default function AsciiEffectDemo({
  effect,
  size = 220,
  className = "",
  palette = "mintBlueViolet",
}: AsciiEffectDemoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const outputCanvas = canvasRef.current;
    if (!outputCanvas) {
      return;
    }

    const context = outputCanvas.getContext("2d");
    if (!context) {
      return;
    }

    const columns = 30;
    const rows = 30;
    const fontSize = 10;
    const particleCount = 44;

    const particles: Particle[] = Array.from({ length: particleCount }, (_, index) => ({
      x: hash2(index * 1.31, 0.19 + index * 0.27),
      y: hash2(index * 0.87, 0.51 + index * 0.21),
      vx: 0,
      vy: 0,
      phase: index * 0.31,
    }));

    let dpr = window.devicePixelRatio || 1;
    let charAdvanceX = 0;
    let lineHeight = 0;
    let offsetX = 0;
    let offsetY = 0;
    let frameId = 0;
    let previousFrameMs = 0;

    let isVisible = true;
    let reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let currentTheme: "light" | "dark" =
      document.documentElement.dataset.theme === "dark" ? "dark" : "light";

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      outputCanvas.width = Math.floor(size * dpr);
      outputCanvas.height = Math.floor(size * dpr);
      outputCanvas.style.width = `${size}px`;
      outputCanvas.style.height = `${size}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      context.font = `400 ${fontSize}px 'JetBrains Mono', monospace`;
      const maxHorizontalPitch = size / columns;
      const maxVerticalPitch = size / rows;
      charAdvanceX = Math.min(
        maxHorizontalPitch,
        Math.max(context.measureText("@").width + 2.8, fontSize + 1),
      );
      lineHeight = Math.min(maxVerticalPitch, fontSize + 1.4);
      offsetX = (size - columns * charAdvanceX) * 0.5;
      offsetY = (size - rows * lineHeight) * 0.5;
    };

    const updateParticles = (time: number) => {
      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        const swirl = time * 0.8 + particle.phase;
        const ax = Math.cos(swirl) * 0.0019 + (0.5 - particle.x) * 0.0012;
        const ay = Math.sin(swirl * 1.13) * 0.0019 + (0.5 - particle.y) * 0.0012;

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
      const dx = x - 0.5;
      const dy = y - 0.5;
      const dist = Math.hypot(dx, dy);

      let raw = 0;

      switch (effect) {
        case "waveField": {
          const primary = Math.sin(x * 10 + time * 2.2 + Math.sin(y * 7 + time * 0.8));
          const secondary = Math.cos(y * 9 - time * 1.5 + x * 2);
          raw = clamp((primary * 0.62 + secondary * 0.38 + 1) * 0.5, 0, 1);
          break;
        }

        case "noiseCloud": {
          const n1 = Math.sin(x * 11.2 + time * 0.9 + Math.cos(y * 8.1 - time * 0.7));
          const n2 = Math.cos(y * 10.7 - time * 0.5 + Math.sin(x * 7.6 + time * 0.8));
          const n3 = Math.sin((x + y) * 9.4 - time * 1.1);
          raw = clamp((n1 * 0.45 + n2 * 0.35 + n3 * 0.2 + 1) * 0.5, 0, 1);
          break;
        }

        case "pulseGrid": {
          const rings = Math.sin(dist * 34 - time * 2.6) * 0.5 + 0.5;
          const falloff = Math.exp(-dist * 3.7);
          const lattice = Math.sin(x * 40 + time * 0.4) * Math.sin(y * 40 + time * 0.4);
          raw = clamp(rings * falloff + lattice * 0.1 + 0.08, 0, 1);
          break;
        }

        case "topographic": {
          const field =
            Math.sin(x * 9.3 + time * 0.7) +
            Math.cos(y * 8.4 - time * 0.6) +
            Math.sin((x + y) * 7.1 + time * 0.35);
          const contour = Math.abs(Math.sin(field * 4.3));
          const base = 0.5 + 0.5 * Math.sin((x * 2 - y * 1.8) * Math.PI + time * 0.2);
          raw = clamp(contour * 0.78 + base * 0.22, 0, 1);
          break;
        }

        case "topographicTriangle": {
          const field =
            Math.sin(x * 9.3 + time * 0.7) +
            Math.cos(y * 8.4 - time * 0.6) +
            Math.sin((x + y) * 7.1 + time * 0.35);
          const contour = Math.abs(Math.sin(field * 4.3));
          const base = 0.5 + 0.5 * Math.sin((x * 2 - y * 1.8) * Math.PI + time * 0.2);
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
            influence += Math.exp(-distanceSquared * 110);
          }
          raw = clamp(influence * 0.6, 0, 1);
          break;
        }

        default:
          raw = 0;
      }

      const wobble = 0.06 * Math.sin(time * 0.7 + x * 5.2 - y * 4.7);
      const edgeNoise = hash2(column * 0.7 + time * 0.22, row * 0.9 + time * 0.18) * 0.12;
      const radius = 0.47 + wobble + edgeNoise;
      const fadeBand = 0.11;
      const edgeMask = clamp((radius - dist) / fadeBand, 0, 1);
      const shapedMask = Math.pow(edgeMask, 1.8);

      if (effect === "topographicTriangle") {
        const apex = { x: 0.5, y: 0.08 };
        const right = { x: 0.9, y: 0.88 };
        const left = { x: 0.1, y: 0.88 };

        const edge0 = (x - apex.x) * (right.y - apex.y) - (y - apex.y) * (right.x - apex.x);
        const edge1 = (x - right.x) * (left.y - right.y) - (y - right.y) * (left.x - right.x);
        const edge2 = (x - left.x) * (apex.y - left.y) - (y - left.y) * (apex.x - left.x);

        const softness = 0.03;
        const triangleMask = clamp(Math.min(-edge0, -edge1, -edge2) / softness, 0, 1);
        const combinedMask = Math.pow(triangleMask, 1.4);

        return clamp(raw * combinedMask, 0, 1);
      }

      return clamp(raw * shapedMask, 0, 1);
    };

    const renderFrame = (timeMs: number) => {
      if (!isVisible) {
        frameId = window.requestAnimationFrame(renderFrame);
        return;
      }

      const targetInterval = reduceMotion ? 220 : 120;
      if (previousFrameMs !== 0 && timeMs - previousFrameMs < targetInterval) {
        frameId = window.requestAnimationFrame(renderFrame);
        return;
      }
      previousFrameMs = timeMs;

      const time = timeMs * 0.001;
      if (effect === "particleSwarm") {
        updateParticles(time);
      }

      context.clearRect(0, 0, size, size);
      context.font = `400 ${fontSize}px 'JetBrains Mono', monospace`;
      context.textBaseline = "top";
      context.textAlign = "left";

      const pulse = reduceMotion ? 0 : time * 0.45;
      const centerX = size * (0.5 + Math.sin(pulse) * 0.09);
      const centerY = size * (0.5 + Math.cos(pulse * 0.81) * 0.09);
      const innerRadius = size * 0.09;
      const outerRadius = size * 0.57;

      const gradient = context.createRadialGradient(
        centerX,
        centerY,
        innerRadius,
        size * 0.5,
        size * 0.5,
        outerRadius,
      );
      applyGradientStops(gradient, palette, currentTheme);
      context.fillStyle = gradient;

      const lines: string[] = [];
      for (let row = 0; row < rows; row += 1) {
        let line = "";
        for (let column = 0; column < columns; column += 1) {
          const value = sampleEffect(column, row, time);
          const dither = (BAYER_4X4[row & 3][column & 3] - 7.5) / 16;
          const mapped = clamp(value + dither * 0.12, 0, 1);
          if (mapped < 0.07) {
            line += " ";
            continue;
          }
          const charIndex = Math.floor(mapped * (ASCII_CHARS.length - 1));
          line += ASCII_CHARS[charIndex];
        }
        lines.push(line);
      }

      const drawLines = () => {
        for (let row = 0; row < rows; row += 1) {
          const y = offsetY + row * lineHeight;
          const line = lines[row];
          for (let column = 0; column < columns; column += 1) {
            const char = line[column];
            if (char === " ") {
              continue;
            }
            const x = offsetX + column * charAdvanceX;
            context.fillText(char, x, y);
          }
        }
      };

      context.shadowBlur = 10;
      context.shadowColor =
        currentTheme === "dark"
          ? "rgba(167, 151, 255, 0.42)"
          : "rgba(123, 110, 195, 0.23)";
      context.globalAlpha = currentTheme === "dark" ? 0.56 : 0.43;
      drawLines();

      context.shadowBlur = 0;
      context.globalAlpha = 1;
      drawLines();

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
    visibilityObserver.observe(outputCanvas);

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

    const onResize = () => {
      resize();
    };

    resize();
    window.addEventListener("resize", onResize);
    frameId = window.requestAnimationFrame(renderFrame);

    return () => {
      window.removeEventListener("resize", onResize);
      if (typeof reduceMotionQuery.removeEventListener === "function") {
        reduceMotionQuery.removeEventListener("change", onMotionPreferenceChange);
      } else {
        reduceMotionQuery.removeListener(onMotionPreferenceChange);
      }
      themeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.cancelAnimationFrame(frameId);
    };
  }, [effect, size, palette]);

  return (
    <canvas
      ref={canvasRef}
      className={`block ${className}`.trim()}
      width={size}
      height={size}
      aria-hidden="true"
    />
  );
}



