"use client";

import { useEffect, useRef } from "react";

interface AsciiCubeSpinnerProps {
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

const GRID_COLUMNS = 32;
const GRID_ROWS = 32;
const SHAPE_COLUMNS = GRID_COLUMNS;
const SHAPE_ROWS = GRID_ROWS;

type Vec3 = [number, number, number];
type Vec2 = [number, number];

const CUBE_VERTICES: readonly Vec3[] = [
  [-1, -1, -1],
  [1, -1, -1],
  [1, 1, -1],
  [-1, 1, -1],
  [-1, -1, 1],
  [1, -1, 1],
  [1, 1, 1],
  [-1, 1, 1],
] as const;

const CUBE_FACES: readonly [number, number, number][] = [
  [4, 5, 6],
  [4, 6, 7],
  [1, 0, 3],
  [1, 3, 2],
  [0, 4, 7],
  [0, 7, 3],
  [5, 1, 2],
  [5, 2, 6],
  [3, 7, 6],
  [3, 6, 2],
  [0, 1, 5],
  [0, 5, 4],
] as const;

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function normalize(vector: Vec3): Vec3 {
  const length = Math.hypot(vector[0], vector[1], vector[2]) || 1;
  return [vector[0] / length, vector[1] / length, vector[2] / length];
}

function subtract(a: Vec3, b: Vec3): Vec3 {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function cross(a: Vec3, b: Vec3): Vec3 {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

function dot(a: Vec3, b: Vec3): number {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function rotateX(vector: Vec3, angle: number): Vec3 {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [
    vector[0],
    vector[1] * cos - vector[2] * sin,
    vector[1] * sin + vector[2] * cos,
  ];
}

function rotateY(vector: Vec3, angle: number): Vec3 {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [
    vector[0] * cos + vector[2] * sin,
    vector[1],
    -vector[0] * sin + vector[2] * cos,
  ];
}

const LIGHT_DIRECTION = normalize([0.27, 0.73, 0.62]);

export default function AsciiCubeSpinner({
  size = 300,
  className = "",
}: AsciiCubeSpinnerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const outputCanvas = canvasRef.current;
    if (!outputCanvas) {
      return;
    }

    const outputContext = outputCanvas.getContext("2d");
    if (!outputContext) {
      return;
    }

    const sampleCanvas = document.createElement("canvas");
    const sampleContext = sampleCanvas.getContext("2d", {
      willReadFrequently: true,
    });
    if (!sampleContext) {
      return;
    }

    let dpr = window.devicePixelRatio || 1;
    let outputColumns = GRID_COLUMNS;
    let outputRows = GRID_ROWS;
    let shapeColumns = SHAPE_COLUMNS;
    let shapeRows = SHAPE_ROWS;
    let characterAdvanceX = 0;
    const fontSize = 10;
    let lineHeight = 0;
    let offsetX = 0;
    let offsetY = 0;
    let frameId = 0;

    let previousFrameTime = 0;
    const targetFps = 30;
    const frameInterval = 1000 / targetFps;
    const cameraDistance = 3.35;
    const shapeScale = 1.3;

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
      outputContext.setTransform(dpr, 0, 0, dpr, 0, 0);

      outputColumns = GRID_COLUMNS;
      outputRows = GRID_ROWS;
      shapeColumns = SHAPE_COLUMNS;
      shapeRows = SHAPE_ROWS;

      outputContext.font = `400 ${fontSize}px 'JetBrains Mono', monospace`;
      const maxHorizontalPitch = size / outputColumns;
      const maxVerticalPitch = size / outputRows;
      characterAdvanceX = Math.min(
        maxHorizontalPitch,
        Math.max(outputContext.measureText("@").width + 2.4, fontSize + 1),
      );
      lineHeight = Math.min(maxVerticalPitch, fontSize + 1.2);

      offsetX = (size - outputColumns * characterAdvanceX) * 0.5;
      offsetY = (size - outputRows * lineHeight) * 0.5;

      sampleCanvas.width = shapeColumns;
      sampleCanvas.height = shapeRows;
    };

    const renderShape = (
      verticalAngle: number,
      horizontalAngle: number,
      time: number,
    ) => {
      sampleContext.clearRect(0, 0, shapeColumns, shapeRows);

      const transformed: Vec3[] = CUBE_VERTICES.map((vertex) => {
        const scaled: Vec3 = [
          vertex[0] * shapeScale,
          vertex[1] * shapeScale,
          vertex[2] * shapeScale,
        ];
        return rotateY(rotateX(scaled, verticalAngle), horizontalAngle);
      });

      let maxAbsProjectedX = 0;
      let maxAbsProjectedY = 0;
      for (let index = 0; index < transformed.length; index += 1) {
        const point = transformed[index];
        const depth = cameraDistance - point[2];
        if (depth <= 0.05) {
          continue;
        }
        const projectedX = Math.abs(point[0] / depth);
        const projectedY = Math.abs(point[1] / depth);
        if (projectedX > maxAbsProjectedX) {
          maxAbsProjectedX = projectedX;
        }
        if (projectedY > maxAbsProjectedY) {
          maxAbsProjectedY = projectedY;
        }
      }

      const safeMaxX = Math.max(0.0001, maxAbsProjectedX);
      const safeMaxY = Math.max(0.0001, maxAbsProjectedY);
      const targetHalfWidth = shapeColumns * 0.5 * 0.86;
      const targetHalfHeight = shapeRows * 0.5 * 0.96;
      const projectionScale = Math.min(
        targetHalfWidth / safeMaxX,
        targetHalfHeight / safeMaxY,
      );

      const facesToDraw: {
        points: [Vec2, Vec2, Vec2];
        depth: number;
        brightness: number;
        alpha: number;
      }[] = [];

      for (let index = 0; index < CUBE_FACES.length; index += 1) {
        const [a, b, c] = CUBE_FACES[index];
        const va = transformed[a];
        const vb = transformed[b];
        const vc = transformed[c];

        const edgeA = subtract(vb, va);
        const edgeB = subtract(vc, va);
        const normal = normalize(cross(edgeA, edgeB));

        const center: Vec3 = [
          (va[0] + vb[0] + vc[0]) / 3,
          (va[1] + vb[1] + vc[1]) / 3,
          (va[2] + vb[2] + vc[2]) / 3,
        ];

        const viewVector = normalize([
          0 - center[0],
          0 - center[1],
          cameraDistance - center[2],
        ]);
        const facing = dot(normal, viewVector);
        if (facing <= -0.18) {
          continue;
        }

        const project = (point: Vec3): Vec2 | null => {
          const depth = cameraDistance - point[2];
          if (depth <= 0.05) {
            return null;
          }
          const perspectiveX = point[0] / depth;
          const perspectiveY = point[1] / depth;
          return [
            shapeColumns * 0.5 + perspectiveX * projectionScale,
            shapeRows * 0.5 - perspectiveY * projectionScale,
          ];
        };

        const pa = project(va);
        const pb = project(vb);
        const pc = project(vc);
        if (!pa || !pb || !pc) {
          continue;
        }

        const directional = dot(normal, LIGHT_DIRECTION);
        const rotatingAmbient = 0.08 * Math.sin(time * 0.9 + index * 0.7);
        const visibility = clamp((facing + 0.18) / 1.18, 0, 1);
        const brightness = clamp(0.2 + directional * 0.8 + rotatingAmbient, 0.08, 1);
        const alpha = clamp(0.16 + visibility * 0.84, 0.16, 1);

        facesToDraw.push({
          points: [pa, pb, pc],
          depth: center[2],
          brightness,
          alpha,
        });
      }

      facesToDraw.sort((first, second) => first.depth - second.depth);
      for (let index = 0; index < facesToDraw.length; index += 1) {
        const face = facesToDraw[index];
        const value = Math.floor(255 * face.brightness);
        sampleContext.fillStyle = `rgba(${value}, ${value}, ${value}, ${face.alpha})`;
        sampleContext.beginPath();
        sampleContext.moveTo(face.points[0][0], face.points[0][1]);
        sampleContext.lineTo(face.points[1][0], face.points[1][1]);
        sampleContext.lineTo(face.points[2][0], face.points[2][1]);
        sampleContext.closePath();
        sampleContext.fill();

        const strokeValue = Math.min(255, value + 48);
        sampleContext.strokeStyle = `rgba(${strokeValue}, ${strokeValue}, ${strokeValue}, ${clamp(face.alpha * 0.62, 0.2, 0.78)})`;
        sampleContext.lineWidth = 0.72;
        sampleContext.stroke();
      }
    };

    const renderAsciiFrame = (timeMs: number) => {
      if (!isVisible) {
        frameId = window.requestAnimationFrame(renderAsciiFrame);
        return;
      }

      if (!reduceMotion && previousFrameTime !== 0 && timeMs - previousFrameTime < frameInterval) {
        frameId = window.requestAnimationFrame(renderAsciiFrame);
        return;
      }
      previousFrameTime = timeMs;

      const time = timeMs * 0.001;
      const fixedVerticalAngle = 0;
      const horizontalRotation = reduceMotion
        ? Math.PI / 4
        : Math.PI / 4 + time * 0.42;

      renderShape(fixedVerticalAngle, horizontalRotation, time);

      const pixels = sampleContext.getImageData(0, 0, shapeColumns, shapeRows).data;

      outputContext.clearRect(0, 0, size, size);
      outputContext.font = `400 ${fontSize}px 'JetBrains Mono', monospace`;
      outputContext.textBaseline = "top";
      outputContext.textAlign = "left";

      const pulse = reduceMotion ? 0 : time * 0.56;
      const centerX = size * (0.5 + Math.sin(pulse) * 0.15);
      const centerY = size * (0.5 + Math.cos(pulse * 0.74) * 0.15);
      const innerRadius = size * 0.07;
      const outerRadius = size * 0.58;

      const gradient = outputContext.createRadialGradient(
        centerX,
        centerY,
        innerRadius,
        size * 0.5,
        size * 0.5,
        outerRadius,
      );
      if (currentTheme === "dark") {
        gradient.addColorStop(0, "#23d0ac");
        gradient.addColorStop(0.56, "#5f90ff");
        gradient.addColorStop(1, "#946bff");
      } else {
        gradient.addColorStop(0, "#1b9f86");
        gradient.addColorStop(0.56, "#4f73d5");
        gradient.addColorStop(1, "#7f5acc");
      }
      outputContext.fillStyle = gradient;

      const lines: string[] = [];
      for (let row = 0; row < outputRows; row += 1) {
        let line = "";
        for (let column = 0; column < outputColumns; column += 1) {
          const pixelIndex = (row * shapeColumns + column) * 4;
          const red = pixels[pixelIndex] / 255;
          const green = pixels[pixelIndex + 1] / 255;
          const blue = pixels[pixelIndex + 2] / 255;
          const alpha = pixels[pixelIndex + 3] / 255;

          if (alpha < 0.07) {
            line += " ";
            continue;
          }

          const luminance = red * 0.2126 + green * 0.7152 + blue * 0.0722;
          const dither = (BAYER_4X4[row & 3][column & 3] - 7.5) / 16;
          const mapped = clamp(Math.pow(luminance, 0.9) + dither * 0.17, 0, 1);
          const charIndex = Math.floor(mapped * (ASCII_CHARS.length - 1));
          line += ASCII_CHARS[charIndex];
        }
        lines.push(line);
      }

      const drawLines = () => {
        for (let row = 0; row < outputRows; row += 1) {
          const y = offsetY + row * lineHeight;
          const line = lines[row];
          for (let column = 0; column < outputColumns; column += 1) {
            const char = line[column];
            if (char === " ") {
              continue;
            }
            const x = offsetX + column * characterAdvanceX;
            outputContext.fillText(char, x, y);
          }
        }
      };

      outputContext.shadowBlur = 12;
      outputContext.shadowColor =
        currentTheme === "dark"
          ? "rgba(167, 151, 255, 0.48)"
          : "rgba(123, 110, 195, 0.26)";
      outputContext.globalAlpha = currentTheme === "dark" ? 0.58 : 0.45;
      drawLines();

      outputContext.shadowBlur = 0;
      outputContext.globalAlpha = 1;
      drawLines();

      frameId = window.requestAnimationFrame(renderAsciiFrame);
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
      previousFrameTime = 0;
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
    frameId = window.requestAnimationFrame(renderAsciiFrame);

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
