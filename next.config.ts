import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Export statico: `next build` genera HTML/CSS/JS puri nella cartella `out/`,
  // da servire su Firebase Hosting classico (gratis, senza server).
  output: "export",

  // L'ottimizzazione immagini di Next richiede un server: con l'export va
  // disattivata. (Al momento non usiamo <Image>, ma è a prova di futuro.)
  images: { unoptimized: true },

  // Ancora la root del workspace a questa cartella: evita che Next scelga per
  // sbaglio un package-lock.json presente più in alto (es. nella home).
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
