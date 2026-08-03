import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import {
  HiArrowRight,
  HiCheckCircle,
  HiOutlineArrowDown,
} from "react-icons/hi";
import { HiOutlineClock, HiOutlineMapPin } from "react-icons/hi2";
import { SiUpwork } from "react-icons/si";

import portfolioData from "../../data/portfolioData";
import HeroImage from "./HeroImage";

const strengths = ["Detail-focused", "Highly organized", "Reliable support"];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function Hero() {
  const { personal, socialLinks } = portfolioData;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-[#f8faff]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-blue-200/35 blur-[135px]" />
        <div className="absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full bg-indigo-200/35 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[320px] w-[420px] rounded-full bg-cyan-100/45 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0,rgba(248,250,255,0.82)_72%)]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#4f46e5_1px,transparent_1px),linear-gradient(to_right,#4f46e5_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_86%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-20 pt-14 sm:px-8 sm:pt-16 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-10 lg:pb-8 lg:pt-6 xl:gap-16">
        <div className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="flex justify-center lg:justify-start"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-200/80 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald-800 shadow-[0_8px_28px_rgba(16,185,129,0.08)] backdrop-blur-xl sm:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Open to part-time opportunities
            </div>
          </motion.div>

          <motion.div
            custom={0.08}
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mt-3 flex items-center justify-center gap-3 lg:justify-start"
          >
            <span className="h-px w-8 bg-gradient-to-r from-blue-600 to-indigo-500" />
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-indigo-700 sm:text-sm">
              Virtual Assistant
            </p>
            <span className="h-px w-8 bg-gradient-to-r from-indigo-500 to-blue-600" />
          </motion.div>

          <motion.h1
            custom={0.14}
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mt-2 text-[2.55rem] font-black leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-[3.4rem] lg:text-[3.4rem] xl:text-[3.7rem]"
          >
            Daniel Alexander
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text pb-1 text-transparent">
              Montalban
            </span>
          </motion.h1>

          <motion.p
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mx-auto mt-3 max-w-xl text-base leading-7 text-slate-600 sm:text-[1.05rem] lg:mx-0"
          >
            I help keep day-to-day work clear and under control through
            <span className="font-semibold text-slate-900"> accurate data entry</span>,
            <span className="font-semibold text-slate-900"> organized admin support</span>,
            and dependable online research.
          </motion.p>

          <motion.div
            custom={0.26}
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mt-3 flex flex-wrap justify-center gap-2.5 lg:justify-start"
          >
            {strengths.map((strength) => (
              <span
                key={strength}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-lg sm:text-sm"
              >
                <HiCheckCircle className="text-indigo-600" size={17} />
                {strength}
              </span>
            ))}
          </motion.div>

          <motion.div
            custom={0.32}
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mt-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 font-bold text-white shadow-[0_14px_35px_rgba(79,70,229,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(79,70,229,0.36)] active:translate-y-0"
            >
              Let&apos;s work together
              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
            </button>

            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-2xl border border-slate-200 bg-white/75 px-5 py-3.5 font-bold text-slate-800 shadow-[0_10px_28px_rgba(15,23,42,0.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:text-indigo-700 hover:shadow-[0_16px_36px_rgba(79,70,229,0.12)]"
            >
              View my work
              <HiOutlineArrowDown className="transition-transform duration-300 group-hover:translate-y-1" size={17} />
            </button>

            <div className="ml-0 flex items-center gap-2 sm:ml-1">
              {socialLinks?.upwork && (
                <a
                  href={socialLinks.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Daniel's Upwork profile"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/75 text-slate-600 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <SiUpwork size={20} />
                </a>
              )}

              {socialLinks?.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Daniel's LinkedIn profile"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/75 text-slate-600 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <FaLinkedinIn size={19} />
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            custom={0.38}
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-500 sm:text-sm lg:justify-start"
          >
            <span className="flex items-center gap-2">
              <HiOutlineMapPin className="text-indigo-600" size={18} />
              {personal.location || "Batangas City, Philippines"}
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
            <span className="flex items-center gap-2">
              <HiOutlineClock className="text-indigo-600" size={18} />
              GMT+8 Â· Philippine Time
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.12, ease: "easeOut" }}
          className="flex w-full items-center justify-center lg:justify-end"
        >
          <HeroImage />
        </motion.div>
      </div>
    </section>
  );
}











































