export type Rep = {
  name: string;
  region: string;
  email: string;
  phone: string;
};

// Kontakty jsou veřejné na enervit.cz/kontakty
export const REPS: Record<string, Rep> = {
  karolina: {
    name: "Karolína Calda",
    region: "Sever a západ ČR, Praha",
    email: "calda.karolina@enervit.cz",
    phone: "+420 724 963 739",
  },
  jiri: {
    name: "Jiří Goiš",
    region: "Jih a východ ČR, kluby a oddíly",
    email: "gois.jiri@enervit.cz",
    phone: "+420 601 690 754",
  },
  stepan: {
    name: "Štěpán Fryšara",
    region: "Slovensko",
    email: "frysara.stepan@enervit.cz",
    phone: "+420 606 048 557",
  },
};

export const REGIONS: { value: string; label: string; rep: keyof typeof REPS }[] = [
  { value: "praha", label: "Praha", rep: "karolina" },
  { value: "stredocesky", label: "Středočeský kraj", rep: "karolina" },
  { value: "jihocesky", label: "Jihočeský kraj", rep: "karolina" },
  { value: "plzensky", label: "Plzeňský kraj", rep: "karolina" },
  { value: "karlovarsky", label: "Karlovarský kraj", rep: "karolina" },
  { value: "ustecky", label: "Ústecký kraj", rep: "karolina" },
  { value: "liberecky", label: "Liberecký kraj", rep: "karolina" },
  { value: "kralovehradecky", label: "Královéhradecký kraj", rep: "karolina" },
  { value: "pardubicky", label: "Pardubický kraj", rep: "karolina" },
  { value: "vysocina", label: "Kraj Vysočina", rep: "jiri" },
  { value: "jihomoravsky", label: "Jihomoravský kraj", rep: "jiri" },
  { value: "olomoucky", label: "Olomoucký kraj", rep: "jiri" },
  { value: "zlinsky", label: "Zlínský kraj", rep: "jiri" },
  { value: "moravskoslezsky", label: "Moravskoslezský kraj", rep: "jiri" },
  { value: "slovensko", label: "Slovensko", rep: "stepan" },
];

export const STORE_TYPES = [
  "Cyklo prodejna",
  "Běžecká prodejna",
  "Fitness / posilovna",
  "Prodejna sportovní výživy",
  "Lékárna",
  "Sportovní klub / oddíl",
  "Obchodní síť",
  "E-shop",
  "Jiné",
];

export const STORE_TYPES_SK = [
  "Cyklo predajňa",
  "Bežecká predajňa",
  "Fitness / posilňovňa",
  "Predajňa športovej výživy",
  "Lekáreň",
  "Športový klub / oddiel",
  "Obchodná sieť",
  "E-shop",
  "Iné",
];

export function repForRegion(regionValue: string): Rep | null {
  const region = REGIONS.find((r) => r.value === regionValue);
  return region ? REPS[region.rep] : null;
}
