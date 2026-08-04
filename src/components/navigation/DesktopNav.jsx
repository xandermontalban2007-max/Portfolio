import { useLayoutEffect, useRef, useState } from "react";

import portfolioData from "../../data/portfolioData";
import NavItem from "./NavItem";

export default function DesktopNav({
  mobile = false,
  activeSection,
  scrollProgress = 0,
  onNavigate,
}) {
  const navRef = useRef(null);
  const itemRefs = useRef({});
  const [itemMetrics, setItemMetrics] = useState([]);

  useLayoutEffect(() => {
    if (mobile) return undefined;

    const measureItems = () => {
      const nav = navRef.current;
      if (!nav) return;

      const navRect = nav.getBoundingClientRect();
      const nextMetrics = portfolioData.navigation
        .map((item) => itemRefs.current[item.id]?.querySelector("a"))
        .filter(Boolean)
        .map((item) => {
          const itemRect = item.getBoundingClientRect();

          return {
            x: itemRect.left - navRect.left - nav.clientLeft,
            y: itemRect.top - navRect.top - nav.clientTop,
            width: itemRect.width,
            height: itemRect.height,
          };
        });

      if (nextMetrics.length !== portfolioData.navigation.length) return;

      setItemMetrics((current) => {
        if (
          current.length === nextMetrics.length &&
          current.every(
            (metric, index) =>
              Math.abs(metric.x - nextMetrics[index].x) < 0.5 &&
              Math.abs(metric.y - nextMetrics[index].y) < 0.5 &&
              Math.abs(metric.width - nextMetrics[index].width) < 0.5 &&
              Math.abs(metric.height - nextMetrics[index].height) < 0.5,
          )
        ) {
          return current;
        }

        return nextMetrics;
      });
    };

    measureItems();

    const resizeObserver =
      "ResizeObserver" in window
        ? new ResizeObserver(measureItems)
        : null;

    if (navRef.current) {
      resizeObserver?.observe(navRef.current);
    }

    window.addEventListener("resize", measureItems);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", measureItems);
    };
  }, [mobile]);

  const lastMetricIndex = itemMetrics.length - 1;
  const safeProgress = Math.min(
    Math.max(scrollProgress, 0),
    Math.max(lastMetricIndex, 0),
  );
  const startIndex = Math.floor(safeProgress);
  const endIndex = Math.min(startIndex + 1, Math.max(lastMetricIndex, 0));
  const amount = safeProgress - startIndex;
  const startMetric = itemMetrics[startIndex];
  const endMetric = itemMetrics[endIndex];
  const interpolate = (start, end) => start + (end - start) * amount;
  const indicator =
    startMetric && endMetric
      ? {
          x: interpolate(startMetric.x, endMetric.x),
          y: interpolate(startMetric.y, endMetric.y),
          width: interpolate(startMetric.width, endMetric.width),
          height: interpolate(startMetric.height, endMetric.height),
        }
      : null;

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
        <span
          aria-hidden="true"
          style={{
            width: indicator.width,
            height: indicator.height,
            transform: `translate3d(${indicator.x}px, ${indicator.y}px, 0)`,
          }}
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
