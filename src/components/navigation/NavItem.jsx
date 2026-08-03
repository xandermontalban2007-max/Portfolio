import { motion } from "framer-motion";

export default function NavItem({
  to,
  label,
  onClick,
  mobile = false,
  active = false,
  showActiveBackground = true,
}) {
  return (
    <a
      href={`#${to}`}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`group isolate relative cursor-pointer overflow-hidden ${
        mobile ? "rounded-2xl px-4 py-3 text-left" : "rounded-full px-4 py-2.5"
      } text-sm font-semibold text-slate-300 transition-[color,background-color] duration-150 ease-out hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#080d19] active:bg-indigo-400/15 active:text-cyan-200 ${
        active ? "active-nav" : ""
      }`}
    >
      {active && showActiveBackground && (
        <motion.span
          layoutId={mobile ? "mobile-active-nav" : "desktop-active-nav"}
          className={`absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 via-indigo-500/25 to-cyan-400/20 shadow-[0_5px_14px_rgba(79,70,229,0.16)] ${
            mobile ? "rounded-2xl" : "rounded-full"
          }`}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      <span
        className={`absolute inset-0 -z-10 scale-95 bg-gradient-to-r from-white/[0.05] via-indigo-400/10 to-cyan-400/[0.07] opacity-0 transition-[transform,opacity] duration-150 ease-out group-hover:scale-100 group-hover:opacity-100 ${
          mobile ? "rounded-2xl" : "rounded-full"
        }`}
      />

      <span className="relative inline-block transition-[transform,color] duration-150 ease-out group-hover:scale-[1.02] group-[.active-nav]:font-semibold group-[.active-nav]:text-cyan-300 motion-reduce:transform-none">
        {label}
      </span>

      <span className="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-0 transition-opacity duration-150 group-[.active-nav]:opacity-100" />
    </a>
  );
}
