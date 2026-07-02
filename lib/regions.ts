export type Rep = {
  name: string;
  region: string;
};

export const REPS: Record<string, Rep> = {
  karolina: { name: "Karolína Čalda", region: "Čechy" },
  jiri: { name: "Jiří Gois", region: "Morava, kluby a oddíly" },
  stepan: { name: "Štěpán Fryšara", region: "Slovensko" },
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
  "E-shop",
  "Jiné",
];

export function repForRegion(regionValue: string): Rep | null {
  const region = REGIONS.find((r) => r.value === regionValue);
  return region ? REPS[region.rep] : null;
}
