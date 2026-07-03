"use client";

import { useEffect, useState } from "react";

const LEVELS = [
  { label: "50 %", value: 0.5 },
  { label: "75 %", value: 0.75 },
  { label: "100 % (export)", value: 1 },
];

export default function BannerZoom() {
  const [zoom, setZoom] = useState(0.5);

  useEffect(() => {
    document.documentElement.style.setProperty("--banner-zoom", String(zoom));
  }, [zoom]);

  return (
    <div className="sticky top-4 z-50 mb-10 inline-flex items-center gap-1 rounded-full bg-ink p-1.5 shadow-lg">
      {LEVELS.map((l) => (
        <button
          key={l.value}
          onClick={() => setZoom(l.value)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            zoom === l.value ? "bg-enervit text-white" : "text-white/70 hover:text-white"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
