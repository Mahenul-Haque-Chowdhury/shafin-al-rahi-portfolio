"use client";

import DarkVeil from "./DarkVeil";

export default function DarkVeilBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ backgroundColor: "#060010" }}
    >
      <div className="h-full w-full">
        <DarkVeil
          hueShift={10}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={1.5}
          scanlineFrequency={10}
          warpAmount={0.25}
          resolutionScale={1.5}
        />
      </div>
    </div>
  );
}
