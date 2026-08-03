import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function NavItem({
  to,
  label,
  onClick,
  mobile = false,
  active = false,
  showActiveBackground = true,
}) {
  return (
    <Link
      to={to}
      smooth="easeInOutCubic"
      offset={-88}
      duration={150}
      delay={0}
      isDynamic={true}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`
        group
        isolate
        relative
        cursor-pointer
        overflow-hidden
        ${mobile ? "rounded-2xl px-4 py-3 text-left" : "rounded-full px-4 py-2.5"}
        text-sm
        font-semibold
        text-slate-600
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:text-indigo-700
        active:scale-95
        active:bg-indigo-100
        active:text-indigo-800
        ${active ? "active-nav" : ""}
      `}
    >
      {active && showActiveBackground && (
        <motion.span
          layoutId={mobile ? "mobile-active-nav" : "desktop-active-nav"}
          className={`absolute inset-0 -z-10 bg-gradient-to-r from-blue-50 via-indigo-50 to-cyan-50 shadow-[0_5px_14px_rgba(79,70,229,0.08)] ${
            mobile ? "rounded-2xl" : "rounded-full"
          }`}
          transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      <span
        className="
          absolute
          inset-0
          -z-10
          scale-90
          rounded-full
          bg-gradient-to-r
          from-blue-50
          via-indigo-50
          to-cyan-50
          opacity-0
          transition-all
          duration-200
          group-hover:scale-100
          group-hover:opacity-100
        "
      />

      <span
        className="
          relative
          transition-colors
          duration-200
          group-[.active-nav]:font-semibold
          group-[.active-nav]:text-indigo-700
        "
      >
        {label}
      </span>

      <span
        className="
          absolute
          bottom-1
          left-1/2
          h-1
          w-1
          -translate-x-1/2
          rounded-full
          bg-gradient-to-r
          from-blue-600
          to-indigo-500
          opacity-0
          transition-all
          duration-200
          group-[.active-nav]:opacity-100
        "
      />
    </Link>
  );
}
