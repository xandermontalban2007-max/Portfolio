import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from "react";

import portfolioData from "../../data/portfolioData";
import NavItem from "./NavItem";

const DesktopNav = forwardRef(function DesktopNav(
  { mobile = false, activeSection, onNavigate },
  ref,
) {
  const navRef = useRef(null);
  const itemRefs = useRef([]);
  const indicatorRef = useRef(null);
  const itemMetricsRef = useRef([]);
  const lastPositionRef = useRef(null);

  const setScrollPosition = useCallback(
    (position) => {
      lastPositionRef.current = position;

      if (mobile) return;

      const metrics = itemMetricsRef.current;
      const indicator = indicatorRef.current;

      if (!indicator || metrics.length === 0) return;

      const maxIndex = metrics.length - 1;
      const boundedPosition = Math.min(maxIndex, Math.max(0, position));
      const firstIndex = Math.floor(boundedPosition);
      const secondIndex = Math.min(maxIndex, firstIndex + 1);
      const progress = boundedPosition - firstIndex;
      const firstItem = metrics[firstIndex];
      const secondItem = metrics[secondIndex] || firstItem;

      if (!firstItem || !secondItem) return;

      const x = firstItem.x + (secondItem.x - firstItem.x) * progress;
      const width =
        firstItem.width + (secondItem.width - firstItem.width) * progress;

      indicator.style.opacity = "1";
      indicator.style.transform = `translate3d(${x}px, 0, 0) scaleX(${width})`;
    },
    [mobile],
  );

  useImperativeHandle(ref, () => ({ setScrollPosition }), [setScrollPosition]);

  useLayoutEffect(() => {
    if (mobile) return undefined;

    const measureItems = () => {
      const activeIndex = Math.max(
        0,
        portfolioData.navigation.findIndex((item) => item.id === activeSection),
      );
      itemMetricsRef.current = itemRefs.current.map((item) => ({
        x: item?.offsetLeft || 0,
        width: item?.offsetWidth || 0,
      }));

      setScrollPosition(lastPositionRef.current ?? activeIndex);
    };

    measureItems();
    window.addEventListener("resize", measureItems);

    const resizeObserver =
      navRef.current && "ResizeObserver" in window
        ? new ResizeObserver(measureItems)
        : null;

    resizeObserver?.observe(navRef.current);

    return () => {
      window.removeEventListener("resize", measureItems);
      resizeObserver?.disconnect();
    };
  }, [activeSection, mobile, setScrollPosition]);

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
      {!mobile && (
        <span
          ref={indicatorRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-1.5 left-0 z-0 w-px origin-left rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/25 to-cyan-400/20 opacity-0 shadow-[0_4px_14px_rgba(79,70,229,0.16)] transition-opacity duration-150 will-change-transform motion-reduce:transition-none"
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
});

export default DesktopNav;
