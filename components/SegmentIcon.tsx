// Ikonografie segmentů. Brand guidelines Enervit řeší jen logo (červený obdélník,
// Trade Gothic / Digital Serial Bold Oblique) — ikonový systém definovaný nemá.
// Navazujeme proto na signature webu: šikmá "startovní čísla" (skewX -8°, .tag-bib),
// bílá kresba na brandové červené. Kresba zůstává rovná, naklání se jen podložka.

export type SegmentIconName = "store" | "gym" | "club" | "retail";

const PATHS: Record<SegmentIconName, React.ReactNode> = {
  // Specializované prodejny — kolo (diamantový rám, přesahy = sedlo a řídítka)
  store: (
    <>
      <circle cx="7" cy="23" r="5.5" />
      <circle cx="25" cy="23" r="5.5" />
      <path d="M10 11h13" />
      <path d="M12 11L7 23" />
      <path d="M20 11l5 12" />
      <path d="M20 11l-6 12H7" />
    </>
  ),
  // Fitness & gymy — činka
  gym: (
    <>
      <path d="M11 16h10" />
      <rect x="7" y="10" width="4" height="12" rx="1.2" />
      <rect x="21" y="10" width="4" height="12" rx="1.2" />
      <path d="M4 13v6M28 13v6" />
    </>
  ),
  // Kluby a oddíly — dres
  club: (
    <>
      <path d="M12 5L5 8.5 3 13l4.5 2.5L10 14v13h12V14l2.5 1.5L29 13l-2-4.5L20 5" />
      <path d="M12 5c1.5 3 6.5 3 8 0" />
    </>
  ),
  // Obchodní sítě a lékárny — prodejna s markýzou
  retail: (
    <>
      <path d="M4 12l2.5-6h19L28 12" />
      <path d="M6 12v15h20V12" />
      <path d="M4 12h24" />
      <path d="M13 27v-7h6v7" />
    </>
  ),
};

export default function SegmentIcon({ name }: { name: SegmentIconName }) {
  return (
    <span
      aria-hidden="true"
      className="flex h-16 w-16 skew-x-[-8deg] items-center justify-center bg-enervit"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-9 w-9 skew-x-[8deg] text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {PATHS[name]}
      </svg>
    </span>
  );
}
