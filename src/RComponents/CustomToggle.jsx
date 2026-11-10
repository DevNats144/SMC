import { useEffect, useRef, useState } from "react";
import "./CustomToggle.css";

function CustomToggle({ title = "Sobre nós", children }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const id = setTimeout(() => {
      if (!contentRef.current) return;

      const rect = contentRef.current.getBoundingClientRect();
      const navbarEl = document.querySelector(".navbar");
      const navbarHeight = navbarEl ? navbarEl.getBoundingClientRect().height : 90;
      const targetTop = Math.max(0, window.scrollY + rect.top - navbarHeight - 16);

      window.scrollTo({ top: targetTop, behavior: "smooth" });
    }, 50);

    return () => clearTimeout(id);
  }, [open]);

  const panel = (
    <div
      id="smc-toggle-panel"
      className={`smc-toggle-panel ${open ? "open" : ""}`}
      ref={contentRef}
      role="region"
      aria-hidden={!open}
    >
      <div className="smc-toggle-panel-inner">
        <div className="smc-toggle-panel-heading">
          <h2>{title}</h2>
          <button
            className="smc-toggle-close"
            onClick={() => {
              setOpen(false);
              triggerRef.current?.focus();
            }}
            type="button"
            aria-label={`Fechar painel: ${title}`}
          >
            <span aria-hidden="true">&times;</span>
            <span>Fechar</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  );

  return (
    <div className="smc-custom-toggle">
      <button
        ref={triggerRef}
        className="smc-toggle-btn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="smc-toggle-panel"
        type="button"
      >
        <span className="smc-toggle-title">{title}</span>
        <span className={`smc-toggle-icon ${open ? "open" : ""}`}></span>
      </button>

      {panel}
    </div>
  );
}

export default CustomToggle;
