import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mario Rossi — Portfolio",
  description:
    "Portfolio personale di Mario Rossi, Full-Stack Developer & Team Leader.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // La lingua effettiva (it/en) è gestita dai segmenti /it e /en; qui teniamo
  // "it" come default per l'attributo <html lang> a livello di documento.
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
