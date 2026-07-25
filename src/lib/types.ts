// Tipi del contenuto del portfolio.
// La forma è identica per ogni lingua: una lettura = tutta la pagina.
// In futuro questi stessi tipi descriveranno i documenti Firestore `content/{lang}`.

export type Lang = 'it' | 'en';

export interface NavItem {
  label: string;
  href: string; // anchor verso una sezione, es. "#esperienza"
}

export interface HeroDatum {
  label: string;
  value: string;
}

export interface Role {
  title: string;
  period: string;
  desc: string;
  /** Testo esteso per la modale: una stringa = un paragrafo; un array = più paragrafi. */
  long?: string | string[];
  responsibilities?: string[];
  results?: string[];
}

export interface Experience {
  company: string;
  initials: string;
  /** Percorso del logo aziendale (es. "/logos/azienda.svg"). Se assente, si usano le iniziali. */
  logo?: string;
  current: boolean;
  period: string;
  roles: Role[];
  tags: string[];
  hasLink?: boolean;
  linkUrl?: string;
  linkLabel?: string;
}

export interface Education {
  period: string;
  title: string;
  place: string;
  desc: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export type ProjectKind = 'pro' | 'perso';

export interface Project {
  kind: ProjectKind;
  title: string;
  client: string;
  period: string;
  dateRange: string;
  desc: string;
  tags: string[];
  /** Testo esteso per la modale: una stringa = un paragrafo; un array = più paragrafi. */
  long?: string | string[];
  highlights?: string[];
  /** Link esterno opzionale mostrato nella modale (es. articolo, repo, demo). */
  linkUrl?: string;
  linkLabel?: string;
}

export interface Skill {
  name: string;
  pct: number;
  levelLabel: string;
}

export interface Language {
  name: string;
  level: string;
  detail: string;
}

export interface Contact {
  label: string;
  href: string;
}

export interface FilterLabels {
  all: string;
  pro: string;
  perso: string;
}

export interface PortfolioContent {
  // hero
  heroKicker: string;
  heroName: string;
  heroFirstName: string;
  heroLastName: string;
  heroRole: string;
  /** Un elemento per paragrafo: renderizzati come <p> separati. */
  manifesto: string[];
  heroData: HeroDatum[];

  // etichette globali
  ctaContact: string;
  cvUrl: string;
  cvLabel: string;
  detailsLabel: string;
  currentBadge: string;
  featuredLabel: string;
  respLabel: string;
  resultLabel: string;
  overviewLabel: string;
  doneLabel: string;
  showMore: string;
  showLess: string;

  // navigazione + titoli sezione
  nav: NavItem[];
  titleExperience: string;
  titleEducation: string;
  titleCert: string;
  titleProjects: string;
  titleSkills: string;
  titleContact: string;
  digitalLabel: string;
  langLabel: string;

  // sezioni
  experience: Experience[];
  education: Education[];
  certsFeatured: Certification[];
  certsMore: Certification[];
  filterLabels: FilterLabels;
  projects: Project[];
  skills: Skill[];
  languages: Language[];

  // contatti
  contactHeadline: string;
  contactSub: string;
  contacts: Contact[];
  footer: string;
}

// Forma della modale condivisa (esperienza / progetto).
export interface ModalSection {
  heading: string;
  period: string;
  text: string[];
  bullets: { label: string; items: string[] }[];
}

export interface ModalData {
  title: string;
  subtitle: string;
  period: string;
  sections: ModalSection[];
  tags: string[];
  hasLink: boolean;
  linkUrl: string;
  linkLabel: string;
}
