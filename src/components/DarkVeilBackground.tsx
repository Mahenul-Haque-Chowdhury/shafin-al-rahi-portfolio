"use client";

import DarkVeil from "./DarkVeil";

export default function DarkVeilBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="h-full w-full">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
        />
      </div>
    </div>
  );
}
