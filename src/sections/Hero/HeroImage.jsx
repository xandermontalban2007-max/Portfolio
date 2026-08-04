import { motion } from "framer-motion";
import {
  HiOutlineClock,
  HiOutlineFolder,
  HiOutlineTableCells,
} from "react-icons/hi2";

import profile from "../../assets/profile.png";

const premiumEase = [0.16, 1, 0.3, 1];

const imageSequence = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.24,
      staggerChildren: 0.16,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, x: 34, scale: 0.985 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: premiumEase,
      delayChildren: 0.18,
      staggerChildren: 0.1,
    },
  },
};

const detailReveal = {
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.62, ease: premiumEase },
  },
};

const portraitReveal = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.95, ease: premiumEase },
  },
};

const statsReveal = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      delay: 0.42,
      ease: premiumEase,
      delayChildren: 0.2,
      staggerChildren: 0.08,
    },
  },
};

const details = [
  { icon: HiOutlineTableCells, value: "Data", label: "Entry" },
  { icon: HiOutlineFolder, value: "Admin", label: "Support" },
  { icon: HiOutlineClock, value: "GMT+8", label: "Timezone" },
];

export default function HeroImage() {
  return (
    <motion.div
      variants={imageSequence}
      initial="hidden"
      animate="visible"
      className="relative mx-auto w-full max-w-[470px] pb-4 lg:mx-0 lg:max-w-[500px] lg:pb-8"
    >
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-cyan-500/10 via-blue-500/[0.08] to-indigo-500/12 blur-3xl" />

      <motion.div
        variants={cardReveal}
        className="relative h-[360px] overflow-hidden rounded-[2.6rem] border border-white/10 bg-gradient-to-br from-[#0b1224] via-[#0c1428] to-[#0b1a2a] shadow-[0_28px_75px_rgba(0,0,0,0.34)] sm:h-[390px] lg:h-[410px] xl:h-[430px]"
      >
        <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full bg-indigo-500/16 blur-[78px]" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-60 w-60 rounded-full bg-cyan-500/11 blur-[72px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#93c5fd_1px,transparent_1px),linear-gradient(to_right,#93c5fd_1px,transparent_1px)] [background-size:46px_46px]" />

        <motion.div
          variants={detailReveal}
          className="absolute left-5 top-5 z-30 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#080d19]/78 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-slate-300 shadow-[0_8px_24px_rgba(0,0,0,0.22)] sm:left-6 sm:top-6"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.11)]" />
          Available to work
        </motion.div>

        <motion.div
          variants={detailReveal}
          className="absolute right-5 top-5 z-30 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#080d19]/76 text-[11px] font-black tracking-[0.1em] text-indigo-300 shadow-[0_8px_24px_rgba(0,0,0,0.22)] sm:right-6 sm:top-6"
        >
          DAM
        </motion.div>

        <motion.div
          variants={detailReveal}
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-1/2 top-[49%] h-[255px] w-[255px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/20 bg-white/[0.045] shadow-[inset_0_0_80px_rgba(96,165,250,0.1)] sm:h-[290px] sm:w-[290px] lg:h-[305px] lg:w-[305px] xl:h-[325px] xl:w-[325px]" />
        </motion.div>

        <motion.div
          variants={portraitReveal}
          className="pointer-events-none absolute inset-0 z-10"
        >
          <img
            src={profile}
            alt="Daniel Alexander Montalban"
            width={439}
            height={568}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable={false}
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 72%, rgba(0,0,0,0.96) 80%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, black 0%, black 72%, rgba(0,0,0,0.96) 80%, transparent 100%)",
            }}
            className="absolute bottom-0 left-1/2 h-[315px] w-auto max-w-none -translate-x-1/2 select-none object-contain drop-shadow-[0_22px_28px_rgba(0,0,0,0.34)] sm:h-[350px] lg:h-[370px] xl:h-[392px]"
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[#080f1d] via-[#0b1828]/72 to-transparent" />
        <div className="pointer-events-none absolute bottom-8 left-1/2 z-20 h-12 w-64 -translate-x-1/2 rounded-full bg-blue-200/10 blur-xl" />

        <motion.p
          variants={detailReveal}
          className="absolute inset-x-0 bottom-5 z-30 text-center text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300 sm:text-xs"
        >
          Focused <span className="text-indigo-500">·</span> Organized{" "}
          <span className="text-indigo-500">·</span> Reliable
        </motion.p>
      </motion.div>

      <motion.div
        variants={statsReveal}
        className="relative z-40 mx-2 -mt-1 grid grid-cols-3 overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#080d19]/88 p-1.5 shadow-[0_18px_45px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:mx-3 sm:-mt-2"
      >
        {details.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              variants={detailReveal}
              className={`flex min-w-0 items-center justify-center gap-2 px-2 py-3 sm:gap-3 sm:px-3 ${
                index > 0 ? "border-l border-white/10" : ""
              }`}
            >
              <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400/10 to-indigo-400/12 text-cyan-300 shadow-sm sm:flex">
                <Icon size={18} />
              </span>
              <span className="min-w-0 text-left">
                <span className="block truncate text-xs font-black text-slate-100 sm:text-sm">
                  {item.value}
                </span>
                <span className="mt-0.5 block truncate text-[8px] font-bold uppercase tracking-[0.1em] text-slate-500 sm:text-[9px]">
                  {item.label}
                </span>
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
