import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import portfolioData from "../../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navShellRef = useRef(null);

  useEffect(() => {
    const sectionIds = portfolioData.navigation.map((item) => item.id);
    let animationFrame = null;
    let sectionAnchors = [];
    let pageEnd = 0;

    const readScrollPosition = () => {
      animationFrame = null;

      const scrollY = window.scrollY;
      let scrollPosition = 0;

      for (let index = 0; index < sectionAnchors.length; index += 1) {
        const currentAnchor = sectionAnchors[index];
        const nextAnchor = sectionAnchors[index + 1];

        if (scrollY < currentAnchor.top) break;
        scrollPosition = index;

        if (nextAnchor && scrollY < nextAnchor.top) {
          const distance = Math.max(1, nextAnchor.top - currentAnchor.top);
          const progress = Math.min(
            1,
            Math.max(0, (scrollY - currentAnchor.top) / distance),
          );

          scrollPosition = index + progress;
          break;
        }
      }

      if (scrollY >= pageEnd && sectionAnchors.length > 0) {
        scrollPosition = sectionAnchors.length - 1;
      }

      const activeIndex = Math.min(
        sectionIds.length - 1,
        Math.max(0, Math.round(scrollPosition)),
      );
      const currentSection = sectionIds[activeIndex] || "home";

      setScrolled((current) => {
        const next = scrollY > 20;
        return current === next ? current : next;
      });
      setActiveSection((current) =>
        current === currentSection ? current : currentSection,
      );
    };

    const scheduleScrollRead = () => {
      if (animationFrame !== null) return;
      animationFrame = window.requestAnimationFrame(readScrollPosition);
    };

    const measureSections = () => {
      const navBottom = navShellRef.current?.getBoundingClientRect().bottom || 88;
      pageEnd = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      sectionAnchors = sectionIds
        .map((id) => {
          const section = document.getElementById(id);
          return section
            ? {
                id,
                top: Math.min(
                  pageEnd,
                  Math.max(
                    0,
                    section.getBoundingClientRect().top + window.scrollY - navBottom - 8,
                  ),
                ),
              }
            : null;
        })
        .filter(Boolean);

      scheduleScrollRead();
    };

    measureSections();
    window.addEventListener("scroll", scheduleScrollRead, { passive: true });
    window.addEventListener("resize", measureSections);

    const mainContent = document.querySelector("main");
    const resizeObserver =
      mainContent && "ResizeObserver" in window
        ? new ResizeObserver(measureSections)
        : null;

    resizeObserver?.observe(mainContent);

    return () => {
      window.removeEventListener("scroll", scheduleScrollRead);
      window.removeEventListener("resize", measureSections);
      resizeObserver?.disconnect();

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);

    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const handleNavigate = (_label, id) => {
    if (id) {
      setActiveSection(id);
    }
  };

  const handleMobileNavClick = (label, id) => {
    setMenuOpen(false);
    handleNavigate(label, id);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-2 sm:px-5 sm:pt-3 lg:px-8">
      <motion.div
        ref={navShellRef}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
        className={`
          pointer-events-auto
          transform-gpu
          relative
          mx-auto
          flex
          min-h-16
          max-w-7xl
          items-center
          justify-between
          overflow-hidden
          rounded-[1.35rem]
          border
          px-3.5
          py-2
          backdrop-blur-xl
          sm:px-5
          lg:px-6
          transition-[background-color,border-color,box-shadow]
          duration-200
          ${
            scrolled
              ? "border-white/10 bg-[#080d19]/78 shadow-[0_14px_38px_rgba(0,0,0,0.32)]"
              : "border-white/10 bg-[#080d19]/66 shadow-[0_12px_34px_rgba(0,0,0,0.24)]"
          }
        `}
      >
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
        <div className="pointer-events-none absolute -left-16 -top-20 h-36 w-36 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-12 -bottom-24 h-36 w-36 rounded-full bg-indigo-500/15 blur-3xl" />

        <Logo onNavigate={handleNavigate} />
        <DesktopNav
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="group relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-slate-200 shadow-sm transition-[background-color,border-color,color,box-shadow] duration-200 hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-blue-300 hover:shadow-[0_10px_26px_rgba(59,130,246,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080d19] lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span className="transition-transform duration-200 ease-out group-hover:scale-110 motion-reduce:transform-none">
            {menuOpen ? <HiOutlineXMark size={23} /> : <HiOutlineBars3 size={24} />}
          </span>
        </button>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto mx-auto mt-2 max-w-7xl overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#080d19]/84 p-2 shadow-[0_16px_42px_rgba(0,0,0,0.34)] backdrop-blur-xl lg:hidden"
          >
            <DesktopNav
              mobile
              activeSection={activeSection}
              onNavigate={handleMobileNavClick}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
