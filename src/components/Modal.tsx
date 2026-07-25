"use client";

import { useEffect } from "react";
import type { ModalData } from "@/lib/types";

export default function Modal({
  data,
  onClose,
}: {
  data: ModalData;
  onClose: () => void;
}) {
  // Chiusura con Esc + blocco dello scroll del body mentre è aperta.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="pf-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={data.title}
    >
      <div className="pf-modal" onClick={(e) => e.stopPropagation()}>
        <div className="pf-modal-head">
          <div>
            <div className="pf-modal-title">{data.title}</div>
            <div className="pf-modal-sub">
              {data.subtitle} {data.period}
            </div>
          </div>
          <button
            className="pf-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="pf-modal-body">
          {data.sections.map((sec, i) => (
            <div className="pf-modal-section" key={i}>
              <div className="pf-modal-sec-head">
                <span className="pf-modal-sec-heading">{sec.heading}</span>
                {sec.period && (
                  <span className="pf-modal-sec-period">{sec.period}</span>
                )}
              </div>
              {sec.text.map((par, k) => (
                <p className="pf-modal-text" key={k}>
                  {par}
                </p>
              ))}
              {sec.bullets.map((b, j) => (
                <div className="pf-modal-bullet" key={j}>
                  <div className="pf-modal-bullet-label">{b.label}</div>
                  <div className="pf-modal-bullet-items">
                    {b.items.map((li, k) => (
                      <div className="pf-modal-li" key={k}>
                        <span className="mark">▹</span>
                        <span>{li}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div className="pf-modal-foot">
            {data.tags.map((tag) => (
              <span className="pf-modal-tag" key={tag}>
                {tag}
              </span>
            ))}
            {data.hasLink && (
              <a
                className="pf-modal-link"
                href={data.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.linkLabel} ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
