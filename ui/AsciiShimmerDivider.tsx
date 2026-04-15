"use client";

import { useEffect, useRef } from "react";

interface AsciiShimmerDividerProps {
  className?: string;
}

const ASCII_SHIMMER_TEXT = [
  "   .:                             .  .      ........    ......:::::::::::::::--=+++++****#####*****++++======::::::::::::....",
  ".. ....:...:.::-:::::::--:---:-==--++****+***+++++++++***##***+++++++++++==::.:...........................               ::.:......",
  "   ......::::.:-=========++=+++####%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%***++++++=------------:::::::........:...:..........",
  "  :::::::::::=====**++++######%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%##=*+=+=====----::::::------::...........:::......",
  "      ....:::::::::::--:--------++++++**#######%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%####**##**+*++============-------::",
  "....................:...     .:----===++=+===++**++*++++++++++++++*######################%%%%%%%%%%%%%%%%#******+++====",
  "....              .      : ............:--=====================#############*######*==========-=--:::::::::::..",
  "               .. :.......:-:---====-----*******+++++####*####**#**+++======-=---::::::::::::............",
  "         ...... . ..........:-------++++++++++++++**************+++#########**+=========:::::::..",
  "....              ...................--====++++++*+++*######*******+=====----::::::.................                  ...",
].join("\n");

export default function AsciiShimmerDivider({
  className = "",
}: AsciiShimmerDividerProps) {
  const shimmerRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const element = shimmerRef.current;
    if (!element) {
      return;
    }

    const durationMs = 3000;
    const shimmerHalfWidth = 40;
    const coreHalfWidth = 16;
    let frameId = 0;
    let textWidth = element.getBoundingClientRect().width;

    const handleResize = () => {
      textWidth = element.getBoundingClientRect().width;
    };

    const tick = (now: number) => {
      const progress = (now % durationMs) / durationMs;
      const travelDistance = textWidth + shimmerHalfWidth * 2;
      const pos = -shimmerHalfWidth + travelDistance * progress;

      element.style.backgroundImage = `linear-gradient(90deg,
        transparent ${pos - shimmerHalfWidth}px,
        var(--ascii-highlight-outer) ${pos - 24}px,
        var(--ascii-highlight-inner) ${pos - coreHalfWidth}px,
        var(--ascii-highlight-core) ${pos}px,
        var(--ascii-highlight-inner) ${pos + coreHalfWidth}px,
        var(--ascii-highlight-outer) ${pos + 24}px,
        transparent ${pos + shimmerHalfWidth}px)`;

      frameId = window.requestAnimationFrame(tick);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className={`ascii-divider ${className}`.trim()} aria-hidden="true">
      <pre className="ascii-divider__text">{ASCII_SHIMMER_TEXT}</pre>
      <pre
        ref={shimmerRef}
        className="ascii-divider__text ascii-divider__text--shimmer"
      >
        {ASCII_SHIMMER_TEXT}
      </pre>
    </div>
  );
}