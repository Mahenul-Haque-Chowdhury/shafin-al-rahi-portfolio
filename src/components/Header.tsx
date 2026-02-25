"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import SmoothScrollLink from "@/components/SmoothScrollLink";

const NAV_ITEMS = ["About", "Experience", "Skills", "Contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const prevY = useRef(0);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Scroll handler — this only re-renders <Header>, never the heavy page
  useEffect(() => {
    prevY.current = window.scrollY;

    function onScroll() {
      const y = window.scrollY;

      // Background state
      setScrolled(y > 40);

      // Always show near top or if menu is open
      if (y < 80 || menuOpen) {
        setVisible(true);
        prevY.current = y;
        return;
      }

      const delta = y - prevY.current;

      if (delta > 6) {
        // Scrolling down → hide
        setVisible(false);
        prevY.current = y;
      } else if (delta < -6) {
        // Scrolling up → show
        setVisible(true);
        prevY.current = y;
      }
      // Small delta → ignore, accumulate
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      {/* ── Sticky header bar ── */}
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50",
          "transition-transform duration-300 ease-in-out",
          visible ? "translate-y-0" : "-translate-y-full",
          scrolled
            ? "border-b border-zinc-800 bg-zinc-950/80 py-2 sm:py-3 backdrop-blur-md"
            : "bg-transparent py-3 sm:py-4 md:py-5",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Brand */}
          <SmoothScrollLink
            href="#about"
            className="text-lg font-bold tracking-tighter text-white sm:text-xl"
          >
            Shafin Al Rahi
          </SmoothScrollLink>

          {/* Desktop nav */}
          <nav className="hidden gap-8 text-sm font-medium text-zinc-400 md:flex">
            {NAV_ITEMS.map((item) => (
              <SmoothScrollLink
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors hover:text-amber-500"
              >
                {item}
              </SmoothScrollLink>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="rounded-md p-1 text-zinc-300 transition-colors hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-70 bg-black/70 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <aside
            className="absolute right-3 top-[calc(3.5rem+env(safe-area-inset-top))] max-h-[calc(100dvh-5rem)] w-[min(18rem,calc(100vw-1.5rem))] overflow-auto rounded-2xl border border-zinc-700 bg-zinc-900 p-4 shadow-2xl sm:right-4 sm:top-[calc(4rem+env(safe-area-inset-top))] sm:w-[min(19rem,calc(100vw-2rem))]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 px-2 text-sm font-semibold uppercase tracking-wide text-zinc-300">
              Menu
            </div>
            <nav className="flex flex-col gap-2" aria-label="Mobile links">
              {NAV_ITEMS.map((item) => (
                <SmoothScrollLink
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-lg font-semibold text-white transition-colors hover:border-amber-500/50 hover:text-amber-300"
                >
                  {item}
                </SmoothScrollLink>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
