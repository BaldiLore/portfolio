# Portfolio — Lorenzo Baldi

Portfolio personale bilingue (IT/EN) sviluppato in **Next.js 16 (App Router) +
TypeScript**, esportato come **sito statico** e pubblicato su **Firebase Hosting**.

## Architettura

Sito **statico** (SSG): `next build` genera HTML già completi dei contenuti, ottimi
per la SEO, serviti come file statici da Firebase Hosting.

- I contenuti vivono nel codice, tipizzati, in `src/lib/content.ts` (dizionari IT/EN).
- `next build` con `output: "export"` produce il sito in `out/`.
- Aggiornare i contenuti = modifica `content.ts`, poi `npm run deploy`.

## Stack

- **Next.js 16** (App Router, React 19), `output: "export"` → sito statico.
- **TypeScript**.
- **CSS** vanilla in `src/app/globals.css`.
- **Firebase Hosting** (config in `firebase.json`).

## Requisiti

- Node.js 20+
- npm

## Avvio in locale

```bash
npm install       # la prima volta, installa le dipendenze
npm run dev       # server di sviluppo con hot-reload
```

Apri **http://localhost:3000/it** (o `/en`).

> Nota: la root `/` in locale dà 404 perché il redirect `/` → `/it` è gestito da
> Firebase Hosting (`firebase.json`), non dal dev server. In sviluppo apri
> direttamente `/it` o `/en`. In produzione il redirect funziona.

## Comandi

```bash
npm run dev       # sviluppo su http://localhost:3000
npm run build     # genera il sito statico in out/
npm run preview   # anteprima locale della build statica (out/)
npm run deploy    # build + firebase deploy --only hosting
```

## Struttura

```
src/
├─ app/
│  ├─ layout.tsx          # shell HTML + import Google Fonts (via globals.css)
│  ├─ globals.css         # tutti gli stili
│  └─ [lang]/page.tsx     # pagina portfolio, generata staticamente per it/en
├─ components/
│  ├─ Portfolio.tsx       # client: interazioni (lingua, modali, filtri, barre, glow)
│  └─ Modal.tsx           # modale condivisa esperienza/progetto (chiusura Esc/overlay)
├─ lib/
│  ├─ types.ts            # tipi del contenuto
│  ├─ content.ts          # dizionari IT/EN (i dati del portfolio)
│  └─ config.ts           # anno di nascita / inizio carriera (età e anni auto-calcolati)
public/logos/             # loghi delle aziende
firebase.json             # config Firebase Hosting (public: out, redirect / → /it)
```

## Deploy su Firebase Hosting

### Setup iniziale (una tantum)

```bash
npm install -g firebase-tools
firebase login
firebase use --add        # scegli il progetto Firebase, alias "default" → crea .firebaserc
```

### Pubblicazione

```bash
npm run deploy            # esegue "next build" e poi "firebase deploy --only hosting"
```

`npm run deploy` è solo una scorciatoia: builda il sito e carica la cartella `out/`
sull'hosting. In alternativa si possono eseguire i due passi a mano:

```bash
npm run build
firebase deploy --only hosting
```

### Anteprima prima di andare live (opzionale)

```bash
npm run build
firebase hosting:channel:deploy anteprima
```

Genera un URL temporaneo (valido 7 giorni) senza toccare il sito in produzione.

## Contenuti

Tutti i testi sono in `src/lib/content.ts`, come oggetti tipizzati `it` ed `en`.
Per aggiungere/modificare esperienze, progetti, certificazioni ecc. si edita quel file
e si rilancia `npm run deploy`. Età e anni di esperienza si calcolano da soli, all'apertura
del sito, a partire dalle date in `src/lib/config.ts`.
