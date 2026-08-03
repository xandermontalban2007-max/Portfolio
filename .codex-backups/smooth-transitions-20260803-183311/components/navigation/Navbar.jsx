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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [transitionLabel, setTransitionLabel] = useState("");
  const transitionTimer = useRef(null);
  const navShellRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = portfolioData.navigation.map((item) => item.id);
    let animationFrame = null;

    const updateActiveSection = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      animationFrame = window.requestAnimationFrame(() => {
        const viewportTop =
          (navShellRef.current?.getBoundingClientRect().bottom || 88) + 8;
        const viewportBottom = window.innerHeight;
        const usableHeight = Math.max(1, viewportBottom - viewportTop);
        let currentSection = sectionIds[0] || "home";
        let bestVisibleHeight = -1;
        let bestCenterDistance = Number.POSITIVE_INFINITY;

        sectionIds.forEach((id) => {
          const section = document.getElementById(id);

          if (!section) {
            return;
          }

          const rect = section.getBoundingClientRect();
          const visibleTop = Math.max(rect.top, viewportTop);
          const visibleBottom = Math.min(rect.bottom, viewportBottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibleCenter = visibleTop + visibleHeight / 2;
          const screenCenter = viewportTop + usableHeight / 2;
          const centerDistance = Math.abs(visibleCenter - screenCenter);

          if (
            visibleHeight > bestVisibleHeight + 1 ||
            (Math.abs(visibleHeight - bestVisibleHeight) <= 1 &&
              centerDistance < bestCenterDistance)
          ) {
            bestVisibleHeight = visibleHeight;
            bestCenterDistance = centerDistance;
            currentSection = id;
          }
        });

        if (window.scrollY <= 4) {
          currentSection = sectionIds[0] || "home";
        }

        const pageBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 4;

        if (pageBottom && sectionIds.length > 0) {
          currentSection = sectionIds[sectionIds.length - 1];
        }

        const sectionAnchors = sectionIds
          .map((id, index) => {
            const section = document.getElementById(id);
            return section
              ? {
                  index,
                  top: Math.max(
                    0,
                    section.getBoundingClientRect().top +
                      window.scrollY -
                      viewportTop,
                  ),
                }
              : null;
          })
          .filter(Boolean);
        const readingPosition = window.scrollY;
        let nextScrollPosition = 0;

        for (let index = 0; index < sectionAnchors.length; index += 1) {
          const currentAnchor = sectionAnchors[index];
          const nextAnchor = sectionAnchors[index + 1];

          if (readingPosition < currentAnchor.top) {
            break;
          }

          nextScrollPosition = currentAnchor.index;

          if (nextAnchor && readingPosition < nextAnchor.top) {
            const distance = Math.max(1, nextAnchor.top - currentAnchor.top);
            const progress = Math.min(
              1,
              Math.max(0, (readingPosition - currentAnchor.top) / distance),
            );

            nextScrollPosition =
              currentAnchor.index +
              (nextAnchor.index - currentAnchor.index) * progress;
            break;
          }
        }

        if (pageBottom && sectionAnchors.length > 0) {
          nextScrollPosition = sectionAnchors[sectionAnchors.length - 1].index;
        }

        setActiveSection((current) =>
          current === currentSection ? current : currentSection,
        );
        setScrollPosition((current) =>
          Math.abs(current - nextScrollPosition) < 0.001
            ? current
            : nextScrollPosition,
        );
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);

    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  useEffect(
    () => () => {
      if (transitionTimer.current) {
        window.clearTimeout(transitionTimer.current);
      }
    },
    [],
  );

  const showPageTransition = (label) => {
    if (transitionTimer.current) {
      window.clearTimeout(transitionTimer.current);
    }

    setTransitionLabel(label);

    transitionTimer.current = window.setTimeout(() => {
      setTransitionLabel("");
    }, 260);
  };

  const handleNavigate = (label, id) => {
    if (id) {
      setActiveSection(id);
    }

    showPageTransition(label);
  };

  const handleMobileNavClick = (label, id) => {
    setMenuOpen(false);
    handleNavigate(label, id);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5 lg:px-8">
      <motion.div
        ref={navShellRef}
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`
          pointer-events-auto
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
          sm:px-5
          lg:px-6
          transition-all
          duration-500
          ${
            scrolled
              ? "border-white/75 bg-white/82 shadow-[0_20px_55px_rgba(15,23,42,0.13)] backdrop-blur-2xl"
              : "border-white/70 bg-white/62 shadow-[0_14px_40px_rgba(37,99,235,0.09)] backdrop-blur-2xl"
          }
        `}
      >
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="pointer-events-none absolute -left-16 -top-20 h-36 w-36 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-12 -bottom-24 h-36 w-36 rounded-full bg-indigo-300/20 blur-3xl" />

        <Logo onNavigate={handleNavigate} />
        <DesktopNav
          activeSection={activeSection}
          scrollPosition={scrollPosition}
          onNavigate={handleNavigate}
        />

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100/80 bg-white/75 text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiOutlineXMark size={23} /> : <HiOutlineBars3 size={24} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-auto mx-auto mt-2 max-w-7xl overflow-hidden rounded-[1.35rem] border border-white/80 bg-white/90 p-2 shadow-[0_20px_55px_rgba(15,23,42,0.14)] backdrop-blur-2xl lg:hidden"
          >
            <DesktopNav
              mobile
              activeSection={activeSection}
              scrollPosition={scrollPosition}
              onNavigate={handleMobileNavClick}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {transitionLabel && (
          <motion.div
            key={transitionLabel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center overflow-hidden"
            aria-hidden="true"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-white/35 to-indigo-500/[0.1] backdrop-blur-[2px]"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.82, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.08, y: -5 }}
              transition={{ duration: 0.14, ease: "easeOut" }}
              className="relative flex items-center gap-3 rounded-2xl border border-white/90 bg-white/88 px-5 py-3.5 shadow-[0_20px_55px_rgba(79,70,229,0.2)] backdrop-blur-2xl"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600" />
              </span>
              <span className="text-sm font-extrabold tracking-wide text-slate-800">
                {transitionLabel}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
