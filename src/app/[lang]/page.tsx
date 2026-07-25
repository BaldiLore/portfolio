import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent, isLang, LANGS } from "@/lib/content";
import { CAREER_START_YEAR } from "@/lib/config";
import Portfolio from "@/components/Portfolio";

// Genera staticamente /it e /en a build-time. Con i dati provenienti da
// Firestore (step 3), questo diventerà il punto in cui leggere il DB.
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

// Rifiuta qualsiasi lingua fuori da /it, /en.
export const dynamicParams = false;

type Params = { lang: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const c = getContent(lang);
  // La meta description è una stringa: unisco i paragrafi e risolvo {years}.
  const years = new Date().getFullYear() - CAREER_START_YEAR;
  return {
    title: `${c.heroName} — Portfolio`,
    description: c.manifesto.join(" ").replaceAll("{years}", String(years)),
    alternates: {
      languages: { it: "/it", en: "/en" },
    },
  };
}

export default async function LangPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const content = getContent(lang);
  // Anno "di partenza" per l'HTML statico; il client lo ricalcola all'apertura.
  return <Portfolio content={content} lang={lang} initialYear={new Date().getFullYear()} />;
}
