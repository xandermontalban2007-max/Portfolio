import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Logo({ onNavigate }) {
  return (
    <Link
      to="home"
      smooth="easeInOutCubic"
      duration={150}
      delay={0}
      offset={-88}
      isDynamic={true}
      onClick={() => onNavigate?.("Home", "home")}
      className="group relative z-10 flex min-w-0 cursor-pointer items-center gap-3 select-none active:scale-[0.98] sm:gap-3.5"
      aria-label="Go to home section"
    >
      <motion.div
        whileHover={{ y: -2, rotate: 2, scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[1rem] border border-white/80 bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 shadow-[0_9px_25px_rgba(79,70,229,0.28)] transition-all duration-200 group-hover:shadow-[0_13px_34px_rgba(79,70,229,0.38)]"
      >
        <span className="pointer-events-none absolute -left-8 top-0 h-full w-7 skew-x-[-18deg] bg-white/35 transition-transform duration-500 group-hover:translate-x-20" />
        <span className="relative text-[13px] font-black tracking-[0.09em] text-white drop-shadow-sm">
          DAM
        </span>
      </motion.div>

      <div className="min-w-0 leading-tight">
        <p className="max-w-[190px] truncate text-[13px] font-extrabold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-indigo-700 sm:max-w-none sm:text-[15px]">
          Daniel Alexander Montalban
        </p>

        <div className="mt-1 hidden items-center gap-2 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.12)]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
            Virtual Assistant
          </span>
        </div>
      </div>
    </Link>
  );
}
