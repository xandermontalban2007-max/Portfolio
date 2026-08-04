import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import portfolioData from "../../data/portfolioData";
import NavItem from "./NavItem";

export default function DesktopNav({
  mobile = false,
  activeSection,
  onNavigate,
}) {
  const navRef = useRef(null);
  const itemRefs = useRef({});
  const [indicator, setIndicator] = useState(null);

  useLayoutEffect(() => {
    if (mobile) return undefined;

    const measureIndicator = () => {
      const nav = navRef.current;
      const item = itemRefs.current[activeSection]?.querySelector("a");

      if (!nav || !item) return;

      const navRect = nav.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const nextIndicator = {
        x: itemRect.left - navRect.left - nav.clientLeft,
        y: itemRect.top - navRect.top - nav.clientTop,
        width: itemRect.width,
        height: itemRect.height,
      };

      setIndicator((current) => {
        if (
          current &&
          Math.abs(current.x - nextIndicator.x) < 0.5 &&
          Math.abs(current.y - nextIndicator.y) < 0.5 &&
          Math.abs(current.width - nextIndicator.width) < 0.5 &&
          Math.abs(current.height - nextIndicator.height) < 0.5
        ) {
          return current;
        }

        return nextIndicator;
      });
    };

    measureIndicator();

    const resizeObserver =
      "ResizeObserver" in window
        ? new ResizeObserver(measureIndicator)
        : null;

    if (navRef.current) {
      resizeObserver?.observe(navRef.current);
    }

    window.addEventListener("resize", measureIndicator);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", measureIndicator);
    };
  }, [activeSection, mobile]);

  return (
    <nav
      ref={navRef}
      aria-label="Primary navigation"
      className={
        mobile
          ? "grid gap-1"
          : "relative hidden items-center gap-1 overflow-hidden rounded-full border border-white/10 bg-black/12 p-1.5 shadow-[inset_0_1px_3px_rgba(255,255,255,0.025)] lg:flex"
      }
    >
      {!mobile && indicator && (
        <motion.span
          aria-hidden="true"
          initial={false}
          animate={{
            x: indicator.x,
            y: indicator.y,
            width: indicator.width,
            height: indicator.height,
            opacity: 1,
          }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute left-0 top-0 z-0 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/25 to-cyan-400/20 shadow-[0_5px_14px_rgba(79,70,229,0.16)] will-change-[transform,width]"
        />
      )}

      {portfolioData.navigation.map((item) => (
        <div
          key={item.id}
          ref={(node) => {
            if (node) {
              itemRefs.current[item.id] = node;
            } else {
              delete itemRefs.current[item.id];
            }
          }}
          className="relative z-10"
        >
          <NavItem
            to={item.id}
            label={item.label}
            mobile={mobile}
            active={activeSection === item.id}
            showActiveBackground={mobile}
            onClick={(event) => onNavigate?.(event, item.id)}
          />
        </div>
      ))}
    </nav>
  );
}
