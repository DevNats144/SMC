import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./CustomToggle.css";

function CustomToggle({ title = "Sobre nòs", children }) {
  const [open, setOpen] = useState(false);
  const [portalRoot, setPortalRoot] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const root = document.getElementById("about-panel-root");
    if (!root) return;

    const handle = requestAnimationFrame(() => setPortalRoot(root));
    return () => cancelAnimationFrame(handle);
  }, []);

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
      <div className="smc-toggle-panel-inner">{children}</div>
    </div>
  );

  return (
    <div className="smc-custom-toggle">
      <button
        className="smc-toggle-btn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="smc-toggle-panel"
        type="button"
      >
        <span className="smc-toggle-title">{title}</span>
        <span className={`smc-toggle-icon ${open ? "open" : ""}`}></span>
      </button>

      {portalRoot ? createPortal(panel, portalRoot) : panel}
    </div>
  );
}

export default CustomToggle;
