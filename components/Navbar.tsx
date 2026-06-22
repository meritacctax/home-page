"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { key: "services" as const, href: "#services" },
  { key: "why" as const, href: "#why" },
  { key: "industries" as const, href: "#industries" },
  { key: "process" as const, href: "#process" },
  { key: "contact" as const, href: "#contact" },
];

export default function Navbar() {
  const { t, toggle } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="font-bold text-xl tracking-tight text-black select-none"
            style={{ letterSpacing: "-0.02em" }}
          >
            MERIT ACC TAX
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.key}
                label={t.nav[link.key]}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
              />
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggle}
              className="text-sm font-medium px-3 py-1.5 rounded-md border transition-all duration-200 hover:bg-[var(--muted)]"
              style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
            >
              {t.lang.toggle}
            </button>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="text-sm font-medium px-4 py-2 rounded-lg bg-black text-white transition-all duration-200 hover:bg-[#1a1a1a] active:scale-[0.98]"
            >
              {t.nav.consult}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-[var(--muted)]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.key}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-medium py-3 px-3 rounded-lg transition-colors hover:bg-[var(--muted)]"
                >
                  {t.nav[link.key]}
                </button>
              ))}
              <div className="flex items-center gap-3 pt-3 border-t mt-2" style={{ borderColor: "var(--border)" }}>
                <button
                  onClick={() => { toggle(); setMenuOpen(false); }}
                  className="text-sm font-medium px-3 py-2 rounded-md border transition-all"
                  style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
                >
                  {t.lang.toggle}
                </button>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                  className="text-sm font-medium px-5 py-2 rounded-lg bg-black text-white active:scale-[0.98] transition-transform"
                >
                  {t.nav.consult}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative text-sm font-medium px-3 py-2 rounded-lg transition-colors hover:bg-[var(--muted)] group"
      style={{ color: "var(--muted-foreground)" }}
    >
      {label}
      <span
        className="absolute bottom-1 left-3 right-3 h-px bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
      />
    </button>
  );
}
