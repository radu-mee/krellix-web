"use client";

import { useEffect, useRef } from "react";

interface Ascii404BurstProps {
  size?: number;
  className?: string;
}

const ASCII_CHARS = " .,:-=+*#%@";
const BAYER_4X4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
] as const;

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function fract(value: number): number {
  return value - Math.floor(value);
}

function hash2(x: number, y: number): number {
  return fract(Math.sin(x * 127.1 + y * 311.7) * 43758.5453123);
}

export default function Ascii404Burst({
  size = 250,
  className = "",
}: Ascii404BurstProps) {
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

    const columns = 36;
    const rows = 22;
    const fontSize = 10;

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
        Math.max(context.measureText("@").width + 2.6, fontSize + 1),
      );
      lineHeight = Math.min(maxVerticalPitch, fontSize + 1.4);
      offsetX = (size - columns * charAdvanceX) * 0.5;
      offsetY = (size - rows * lineHeight) * 0.5;
    };

    const sampleFracture = (column: number, row: number, time: number): number => {
      const x = column / Math.max(1, columns - 1);
      const y = row / Math.max(1, rows - 1);
      const cx = (x - 0.5) * 2.2;
      const cy = (y - 0.5) * 2;
      const distance = Math.hypot(cx, cy);
      const angle = Math.atan2(cy, cx);

      const ring = Math.exp(-Math.pow(distance - 0.58, 2) / 0.022);
      const split = Math.sin(angle * 6.4 - time * 1.3 + distance * 9.2) * 0.5 + 0.5;
      const fracture = Math.sin(cx * 9.8 - cy * 7.2 + time * 1.1) * 0.5 + 0.5;
      const hole = Math.exp(-Math.pow(distance, 2) / 0.07);

      const gapNoise = hash2(
        Math.floor((x + 0.5) * 26),
        Math.floor((y + 0.5) * 26),
      );
      let shell = ring * (0.35 + split * 0.65) * clamp(fracture * 1.25 - 0.12, 0, 1);
      if (gapNoise > 0.73) {
        shell *= 0.22;
      }

      const dustNoise = hash2(x * 52 + time * 1.3, y * 61 - time * 1.7);
      const innerDust = hole * clamp(dustNoise * 1.45 - 0.42, 0, 1) * 0.46;

      const sparkBand = Math.exp(-Math.pow(distance - 0.7, 2) / 0.011);
      const sparkNoise = hash2(x * 90 + time * 3.1, y * 80 - time * 2.7);
      const sparks = sparkBand * clamp((sparkNoise - 0.82) * 5.1, 0, 1) * 0.95;

      const brokenSweep = Math.exp(
        -(Math.pow(cx * 1.2 + 0.15, 2) + Math.pow(cy * 2.4 - 0.06, 2)) / 0.25,
      );
      const sweepPulse = Math.sin(time * 0.9 + cx * 4.6 - cy * 3.7) * 0.5 + 0.5;
      const sweep = brokenSweep * sweepPulse * 0.31;

      const edgeNoise = hash2(x * 33 - time * 0.42, y * 35 + time * 0.5) * 0.08;
      const contour = 0.95 + edgeNoise;
      const mask = clamp((contour - distance) / 0.18, 0, 1);
      const organicMask = Math.pow(mask, 1.45);

      return clamp((shell + innerDust + sparks + sweep) * organicMask, 0, 1);
    };

    const renderFrame = (timeMs: number) => {
      if (!isVisible) {
        frameId = window.requestAnimationFrame(renderFrame);
        return;
      }

      const targetInterval = reduceMotion ? 220 : 90;
      if (previousFrameMs !== 0 && timeMs - previousFrameMs < targetInterval) {
        frameId = window.requestAnimationFrame(renderFrame);
        return;
      }
      previousFrameMs = timeMs;

      const time = timeMs * 0.001;
      context.clearRect(0, 0, size, size);
      context.font = `400 ${fontSize}px 'JetBrains Mono', monospace`;
      context.textBaseline = "top";
      context.textAlign = "left";

      const pulse = reduceMotion ? 0 : time * 0.48;
      const centerX = size * (0.5 + Math.sin(pulse) * 0.08);
      const centerY = size * (0.42 + Math.cos(pulse * 0.83) * 0.06);
      const innerRadius = size * 0.09;
      const outerRadius = size * 0.56;

      const gradient = context.createRadialGradient(
        centerX,
        centerY,
        innerRadius,
        size * 0.5,
        size * 0.46,
        outerRadius,
      );
      if (currentTheme === "dark") {
        gradient.addColorStop(0, "#ffb066");
        gradient.addColorStop(0.58, "#9b6dff");
        gradient.addColorStop(1, "#ff4f63");
      } else {
        gradient.addColorStop(0, "#e38c3a");
        gradient.addColorStop(0.58, "#7b54da");
        gradient.addColorStop(1, "#dc415d");
      }
      context.fillStyle = gradient;

      const lines: string[] = [];
      for (let row = 0; row < rows; row += 1) {
        let line = "";
        for (let column = 0; column < columns; column += 1) {
          const value = sampleFracture(column, row, time);
          const dither = (BAYER_4X4[row & 3][column & 3] - 7.5) / 16;
          const mapped = clamp(value + dither * 0.15, 0, 1);
          if (mapped < 0.065) {
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

      context.shadowBlur = 14;
      context.shadowColor =
        currentTheme === "dark"
          ? "rgba(175, 113, 255, 0.45)"
          : "rgba(161, 102, 228, 0.28)";
      context.globalAlpha = currentTheme === "dark" ? 0.58 : 0.47;
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
  }, [size]);

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

