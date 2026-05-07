"use client";

import type { ReactNode } from "react";
import { Warp } from "@paper-design/shaders-react";

const defaultColors = [
  "hsl(220, 10%, 10%)",
  "hsl(220, 12%, 18%)",
  "hsl(220, 14%, 28%)",
  "hsl(210, 18%, 82%)",
];

type BackgroundShadersProps = {
  children: ReactNode;
  colors?: string[];
  speed?: number;
  distortion?: number;
  swirl?: number;
  softness?: number;
  className?: string;
};

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function BackgroundShaders({
  children,
  colors: colorsProp = colors,
  speed = 1,
  distortion = 0.25,
  swirl = 0.8,
  softness = 1,
  className,
}: BackgroundShadersProps) {
  return (
    <div
      className={cn(
        "relative isolate min-h-screen overflow-hidden bg-black text-white",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
      >
        <Warp
          colors={colors}
          proportion={0.45}
          softness={softness}
          distortion={distortion}
          swirl={swirl}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={speed}
          fit="cover"
          style={{ width: "100vw", height: "100vh" }}
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-black/45"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.16)_42%,rgba(0,0,0,0.72)_100%)]"
      />

      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  );
}
