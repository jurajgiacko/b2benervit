import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://b2b.enervit.online"),
  title: "Staňte se partnerem Enervit | B2B program pro specializované prodejny",
  description:
    "Prodávejte sportovní výživu, se kterou se vyhrává Tour de France. Marže 40–55 %, startovací balíček, osobní obchodní zástupce a poptávka z největších závodů v ČR a SR.",
  openGraph: {
    title: "Enervit B2B — partnerský program pro specializované prodejny",
    description:
      "Marže 40–55 %, poptávka z největších závodů v ČR/SR a osobní podpora. Přidejte se ke 120+ prodejnám.",
    images: ["/img/lifestyle-3.jpg"],
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${inter.variable} ${barlow.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
