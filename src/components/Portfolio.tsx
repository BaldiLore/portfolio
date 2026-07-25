"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import type {
  Experience,
  Lang,
  ModalData,
  PortfolioContent,
  Project,
  ProjectKind,
} from "@/lib/types";
import Modal from "./Modal";
import { BIRTH_YEAR, CAREER_START_YEAR } from "@/lib/config";

type Filter = "all" | ProjectKind;

// Normalizza il testo esteso in paragrafi: stringa → [stringa], array → invariato.
const toParagraphs = (v: string | string[]): string[] =>
  Array.isArray(v) ? v : [v];

export default function Portfolio({
  content: c,
  lang,
  initialYear,
}: {
  content: PortfolioContent;
  lang: Lang;
  initialYear: number;
}) {
  // Anno corrente: parte dal valore del build (per un HTML statico coerente),
  // poi all'apertura del sito viene ricalcolato sulla data del visitatore.
  const [year, setYear] = useState(initialYear);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  const age = year - BIRTH_YEAR;
  const yearsExp = year - CAREER_START_YEAR;
  // Sostituisce i segnaposto {age} / {years} nelle stringhe dei contenuti.
  const fill = (s: string) =>
    s.replaceAll("{age}", String(age)).replaceAll("{years}", String(yearsExp));
  const [modal, setModal] = useState<ModalData | null>(null);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [projectFilter, setProjectFilter] = useState<Filter>("all");
  const [barsReady, setBarsReady] = useState(false);

  // Barre competenze: animazione una tantum al mount (come nel prototipo).
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const t = setTimeout(() => setBarsReady(true), 280);
      return () => clearTimeout(t);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // Glow lime che segue il cursore, solo nella hero.
  const heroMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  // Costruttori delle modali (usano le etichette localizzate).
  const buildExpModal = (x: Experience): ModalData => ({
    title: x.company,
    subtitle: x.period,
    period: "",
    sections: x.roles.map((r) => ({
      heading: r.title,
      period: r.period,
      text: toParagraphs(r.long ?? r.desc),
      bullets: [
        { label: c.respLabel, items: r.responsibilities ?? [] },
        { label: c.resultLabel, items: r.results ?? [] },
      ].filter((b) => b.items.length > 0),
    })),
    tags: x.tags ?? [],
    hasLink: !!x.hasLink,
    linkUrl: x.linkUrl ?? "#",
    linkLabel: x.linkLabel ?? "",
  });

  const buildProjModal = (p: Project): ModalData => ({
    title: p.title,
    subtitle: p.client,
    period: `· ${p.period}`,
    sections: [
      {
        heading: c.overviewLabel,
        period: "",
        text: toParagraphs(p.long ?? p.desc),
        bullets:
          p.highlights && p.highlights.length
            ? [{ label: c.doneLabel, items: p.highlights }]
            : [],
      },
    ],
    tags: p.tags ?? [],
    hasLink: !!p.linkUrl,
    linkUrl: p.linkUrl ?? "#",
    linkLabel: p.linkLabel || c.detailsLabel,
  });

  const filteredProjects = c.projects.filter((p) =>
    projectFilter === "all" ? true : p.kind === projectFilter
  );

  const certsMoreFirst = c.certsMore.slice(0, 3);
  const certsMoreRest = c.certsMore.slice(3);
  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: c.filterLabels.all },
    { key: "pro", label: c.filterLabels.pro },
    { key: "perso", label: c.filterLabels.perso },
  ];

  return (
    <div className="pf-root">
      {/* ---------- Top bar ---------- */}
      <header className="pf-topbar">
        <a className="pf-brand" href="#hero" aria-label={c.heroName}>
          <span className="pf-brand-mark" aria-hidden="true">
            <span className="l">L</span>
            <span className="b">B</span>
          </span>
        </a>
        <nav className="pf-nav">
          {c.nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="pf-topbar-right">
          <div className="pf-lang">
            <Link href="/it" className={lang === "it" ? "active" : ""}>
              IT
            </Link>
            <Link href="/en" className={lang === "en" ? "active" : ""}>
              EN
            </Link>
          </div>
          {false && <a
            className="pf-cv"
            href={c.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            ↓ {c.cvLabel}
          </a>}
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section id="hero" className="pf-hero" onMouseMove={heroMove}>
        <div className="pf-hero-glow" />
        <div className="pf-ghost">{c.heroLastName}</div>
        <div className="pf-hero-inner">
          <div className="pf-kicker">
            <span className="line" />
            {c.heroKicker}
          </div>
          <h1 className="pf-h1">
            {c.heroFirstName}
            <br />
            <span className="accent">{c.heroLastName}</span>
          </h1>
          <div className="pf-hero-role">{c.heroRole}</div>
          <div className="pf-manifesto-group">
            {c.manifesto.map((par, i) => (
              <p className="pf-manifesto" key={i}>
                {fill(par)}
              </p>
            ))}
          </div>
          <div className="pf-cta-row">
            <a href="#contatti" className="pf-cta-primary">
              {c.ctaContact} →
            </a>
            {false && <a
              href={c.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pf-cta-ghost"
            >
              ↓ {c.cvLabel}
            </a>}
          </div>
          <div className="pf-islands">
            {c.heroData.map((d) => (
              <div className="pf-island" key={d.label}>
                <span className="label">{d.label}</span>
                <span className="value">{fill(d.value)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Esperienza ---------- */}
      <section id="esperienza" className="pf-section">
        <div className="pf-sec-head">
          <span className="pf-sec-num">01</span>
          <h2 className="pf-sec-title">{c.titleExperience}</h2>
        </div>
        <div className="pf-exp-list">
          {c.experience.map((x) => (
            <div
              key={x.company}
              className={`pf-exp-card${x.current ? " current" : ""}`}
              onClick={() => setModal(buildExpModal(x))}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  setModal(buildExpModal(x));
              }}
            >
              <div className="pf-exp-head">
                <div className="pf-logo">
                  {x.logo ? (
                    <img src={x.logo} alt={`${x.company} logo`} />
                  ) : (
                    x.initials
                  )}
                </div>
                <span className="pf-company">{x.company}</span>
                {x.current && <span className="pf-badge">{c.currentBadge}</span>}
                <span className="pf-period">{x.period}</span>
              </div>
              <div className="pf-timeline">
                <div className="pf-timeline-line" />
                {x.roles.map((r, i) => (
                  <div className="pf-role" key={i}>
                    <div className="pf-role-dot" />
                    <div className="pf-role-head">
                      <span className="pf-role-title">{r.title}</span>
                      <span className="pf-role-period">{r.period}</span>
                    </div>
                    <div className="pf-role-desc">{r.desc}</div>
                  </div>
                ))}
              </div>
              <div className="pf-exp-foot">
                <div className="pf-tags">
                  {x.tags.map((tag) => (
                    <span className="pf-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="pf-proj-details">{c.detailsLabel} →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Istruzione ---------- */}
      <section id="istruzione" className="pf-section">
        <div className="pf-sec-head">
          <span className="pf-sec-num">02</span>
          <h2 className="pf-sec-title">{c.titleEducation}</h2>
        </div>
        <div className="pf-edu-grid">
          {c.education.map((e) => (
            <div className="pf-edu-card" key={e.title}>
              <div className="pf-edu-period">{e.period}</div>
              <div className="pf-edu-title">{e.title}</div>
              <div className="pf-edu-place">{e.place}</div>
              <div className="pf-edu-desc">{e.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Certificazioni ---------- */}
      <section id="certificazioni" className="pf-section">
        <div className="pf-sec-head">
          <span className="pf-sec-num">03</span>
          <h2 className="pf-sec-title">{c.titleCert}</h2>
        </div>
        <div className="pf-cert-featured-grid">
          {c.certsFeatured.map((cert) => {
            const inner = (
              <>
                <div className="pf-cert-featured-label">★ {c.featuredLabel}</div>
                <div className="pf-cert-featured-name">{cert.name}</div>
                <div className="pf-cert-featured-foot">
                  <span className="pf-cert-issuer">
                    {cert.issuer} · {cert.date}
                  </span>
                  {cert.url && (
                    <span className="pf-cert-featured-details">
                      {c.detailsLabel} →
                    </span>
                  )}
                </div>
              </>
            );
            return cert.url ? (
              <a
                key={cert.name}
                className="pf-cert-featured"
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {inner}
              </a>
            ) : (
              <div key={cert.name} className="pf-cert-featured">
                {inner}
              </div>
            );
          })}
        </div>
        <div className="pf-cert-list">
          {[...certsMoreFirst, ...(showAllCerts ? certsMoreRest : [])].map(
            (cert) => {
              const inner = (
                <>
                  <div className="pf-cert-row-head">
                    <span className="pf-cert-row-name">{cert.name}</span>
                    <span className="pf-cert-row-issuer">
                      {cert.issuer} · {cert.date}
                    </span>
                  </div>
                  {cert.url && (
                    <div className="pf-cert-row-details-wrap">
                      <span className="pf-cert-row-details">
                        {c.detailsLabel} →
                      </span>
                    </div>
                  )}
                </>
              );
              return cert.url ? (
                <a
                  key={cert.name}
                  className="pf-cert-row"
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <div key={cert.name} className="pf-cert-row">
                  {inner}
                </div>
              );
            }
          )}
        </div>
        {certsMoreRest.length > 0 && (
          <button
            className="pf-cert-toggle"
            onClick={() => setShowAllCerts((s) => !s)}
          >
            {showAllCerts ? c.showLess : c.showMore}
          </button>
        )}
      </section>

      {/* ---------- Progetti ---------- */}
      <section id="progetti" className="pf-section">
        <div className="pf-sec-head">
          <span className="pf-sec-num">04</span>
          <h2 className="pf-sec-title">{c.titleProjects}</h2>
        </div>
        <div className="pf-proj-filters">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`pf-filter${projectFilter === f.key ? " active" : ""}`}
              onClick={() => setProjectFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="pf-proj-grid">
          {filteredProjects.map((p) => (
            <div
              key={p.title}
              className="pf-proj-card"
              onClick={() => setModal(buildProjModal(p))}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  setModal(buildProjModal(p));
              }}
            >
              <div className="pf-proj-top">
                <span
                  className="pf-proj-kind"
                  style={{ color: p.kind === "perso" ? "#c6f432" : "#8b948a" }}
                >
                  {p.kind === "pro" ? c.filterLabels.pro : c.filterLabels.perso}
                </span>
                <span className="pf-proj-date">{p.dateRange}</span>
              </div>
              <div className="pf-proj-title">{p.title}</div>
              <div className="pf-proj-client">{p.client}</div>
              <div className="pf-proj-desc">{p.desc}</div>
              <div className="pf-proj-tags">
                {p.tags.map((tag) => (
                  <span className="pf-proj-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pf-proj-details-wrap">
                <span className="pf-proj-details">{c.detailsLabel} →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Competenze ---------- */}
      <section id="competenze" className="pf-section">
        <div className="pf-sec-head">
          <span className="pf-sec-num">05</span>
          <h2 className="pf-sec-title">{c.titleSkills}</h2>
        </div>
        <div className="pf-skills-grid">
          <div>
            <div className="pf-col-label">{c.digitalLabel}</div>
            <div className="pf-skills-list">
              {c.skills.map((s) => (
                <div key={s.name}>
                  <div className="pf-skill-head">
                    <span className="pf-skill-name">{s.name}</span>
                    <span className="pf-skill-level">{s.levelLabel}</span>
                  </div>
                  <div className="pf-skill-track">
                    <div
                      className="pf-skill-fill"
                      style={{ width: barsReady ? `${s.pct}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="pf-col-label">{c.langLabel}</div>
            <div className="pf-lang-list">
              {c.languages.map((l) => (
                <div className="pf-lang-card" key={l.name}>
                  <div className="pf-lang-head">
                    <span className="pf-lang-name">{l.name}</span>
                    <span className="pf-lang-level">{l.level}</span>
                  </div>
                  <div className="pf-lang-detail">{l.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Contatti ---------- */}
      <section id="contatti" className="pf-contact">
        <div className="pf-contact-glow" />
        <div className="pf-contact-inner">
          <div className="pf-contact-kicker">06 — {c.titleContact}</div>
          <h2 className="pf-contact-h2">{c.contactHeadline}</h2>
          <p className="pf-contact-sub">{c.contactSub}</p>
          <div className="pf-contact-btns">
            {c.contacts.map((ct) => (
              <a
                key={ct.label}
                className="pf-contact-btn"
                href={ct.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ct.label}
              </a>
            ))}
          </div>
          <div className="pf-footer">{c.footer}</div>
        </div>
      </section>

      {modal && <Modal data={modal} onClose={() => setModal(null)} />}
    </div>
  );
}
