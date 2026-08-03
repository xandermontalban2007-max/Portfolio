import { useLayoutEffect, useRef, useState } from "react";

import portfolioData from "../../data/portfolioData";
import NavItem from "./NavItem";

export default function DesktopNav({
  mobile = false,
  activeSection,
  scrollPosition = 0,
  onNavigate,
}) {
  const itemRefs = useRef([]);
  const [indicator, setIndicator] = useState({ x: 0, width: 0 });

  useLayoutEffect(() => {
    if (mobile) {
      return undefined;
    }

    const updateIndicator = () => {
      const maxIndex = portfolioData.navigation.length - 1;
      const position = Math.min(maxIndex, Math.max(0, scrollPosition));
      const firstIndex = Math.floor(position);
      const secondIndex = Math.min(maxIndex, firstIndex + 1);
      const progress = position - firstIndex;
      const firstItem = itemRefs.current[firstIndex];
      const secondItem = itemRefs.current[secondIndex] || firstItem;

      if (!firstItem || !secondItem) {
        return;
      }

      const x =
        firstItem.offsetLeft +
        (secondItem.offsetLeft - firstItem.offsetLeft) * progress;
      const width =
        firstItem.offsetWidth +
        (secondItem.offsetWidth - firstItem.offsetWidth) * progress;

      setIndicator((current) =>
        Math.abs(current.x - x) < 0.1 && Math.abs(current.width - width) < 0.1
          ? current
          : { x, width },
      );
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [mobile, scrollPosition]);

  return (
    <nav
      aria-label="Primary navigation"
      className={
        mobile
          ? "grid gap-1"
          : "relative hidden items-center gap-1 overflow-hidden rounded-full border border-white/80 bg-slate-950/[0.035] p-1.5 shadow-inner lg:flex"
      }
    >
      {!mobile && indicator.width > 0 && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-1.5 left-0 z-0 rounded-full bg-gradient-to-r from-blue-50 via-indigo-50 to-cyan-50 shadow-[0_5px_14px_rgba(79,70,229,0.08)]"
          style={{
            width: `${indicator.width}px`,
            transform: `translate3d(${indicator.x}px, 0, 0)`,
          }}
        />
      )}

      {portfolioData.navigation.map((item, index) => (
        <div
          key={item.id}
          ref={(element) => {
            itemRefs.current[index] = element;
          }}
          className="relative z-10"
        >
          <NavItem
            to={item.id}
            label={item.label}
            mobile={mobile}
            active={activeSection === item.id}
            showActiveBackground={mobile}
            onClick={() => onNavigate?.(item.label, item.id)}
          />
        </div>
      ))}
    </nav>
  );
}
