import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiOutlineArrowDown,
} from "react-icons/hi";
import { HiOutlineClock, HiOutlineMapPin } from "react-icons/hi2";

import portfolioData from "../../data/portfolioData";
import HeroImage from "./HeroImage";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative isolate -mt-20 min-h-[calc(100svh-5rem)] overflow-hidden bg-[#070b18] pt-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-blue-600/15 blur-[135px]" />
        <div className="absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full bg-indigo-500/18 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[320px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(7,11,24,0)_0,rgba(7,11,24,0.88)_74%)]" />
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(#60a5fa_1px,transparent_1px),linear-gradient(to_right,#60a5fa_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_86%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#090e1c] sm:h-36" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pt-14 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.06fr_0.94fr] lg:gap-14 lg:px-10 lg:pb-14 lg:pt-0 xl:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-emerald-300 shadow-[0_8px_24px_rgba(16,185,129,0.08)] sm:text-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]" />
              Open to part-time opportunities
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-px w-8 bg-gradient-to-r from-blue-400 to-indigo-400" />
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-indigo-300 sm:text-sm">
              Virtual Assistant
            </p>
          </div>

          <h1 className="mt-3 text-[2.55rem] font-black leading-[0.98] tracking-[-0.055em] text-slate-50 sm:text-[3.4rem] lg:text-[3.45rem] xl:text-[3.75rem]">
            Daniel Alexander
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-300 bg-clip-text pb-1 text-transparent">
              Montalban
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-[1.05rem] lg:mx-0">
            I help keep day-to-day work clear and under control through
            <span className="font-semibold text-slate-100"> accurate data entry</span>,
            <span className="font-semibold text-slate-100"> organized admin support</span>,
            and dependable online research.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#contact"
              className="group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 font-bold text-white shadow-[0_14px_32px_rgba(79,70,229,0.32)] transition-shadow duration-200 ease-out hover:shadow-[0_18px_40px_rgba(79,70,229,0.44)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b18]"
            >
              <span className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none">
                Let&apos;s work together
              </span>
              <HiArrowRight
                className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
                size={18}
              />
            </a>

            <a
              href="#projects"
              className="group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.08] px-5 py-3.5 font-bold text-slate-200 shadow-[0_9px_24px_rgba(0,0,0,0.18)] transition-[box-shadow,border-color,color] duration-200 ease-out hover:border-cyan-300/40 hover:text-cyan-200 hover:shadow-[0_13px_30px_rgba(79,70,229,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b18]"
            >
              <span className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 motion-reduce:transform-none">
                View my work
              </span>
              <HiOutlineArrowDown
                className="transition-transform duration-200 group-hover:translate-y-1 motion-reduce:transform-none"
                size={17}
              />
            </a>

          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-400 sm:text-sm lg:justify-start">
            <span className="flex items-center gap-2">
              <HiOutlineMapPin className="text-indigo-400" size={18} />
              {personal.location || "Batangas City, Philippines"}
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
            <span className="flex items-center gap-2">
              <HiOutlineClock className="text-indigo-400" size={18} />
              GMT+8 · Philippine Time
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full items-center justify-center lg:justify-end"
        >
          <HeroImage />
        </motion.div>
      </div>
    </section>
  );
}
