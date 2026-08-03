import { motion } from "framer-motion";
import {
  HiOutlineClock,
  HiOutlineFolder,
  HiOutlineTableCells,
} from "react-icons/hi2";

import profile from "../../assets/profile.png";

const details = [
  { icon: HiOutlineTableCells, value: "Data", label: "Entry" },
  { icon: HiOutlineFolder, value: "Admin", label: "Support" },
  { icon: HiOutlineClock, value: "GMT+8", label: "Timezone" },
];

export default function HeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] lg:mx-0">
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-blue-300/25 via-indigo-300/15 to-cyan-200/25 blur-3xl" />

      <div
        className="group relative mx-auto h-[485px] w-full max-w-[430px] overflow-hidden rounded-[2.5rem] border border-white/90 bg-gradient-to-br from-[#eaf2ff] via-[#f5f7ff] to-[#dce7ff] shadow-[0_35px_90px_rgba(30,64,175,0.18)] sm:h-[585px] sm:max-w-[500px] sm:rounded-[3rem]"
        style={{
          position: "relative",
          width: "min(100%, 500px)",
          height: "clamp(370px, 29vw, 405px)",
          overflow: "hidden",
          borderRadius: "3rem",
          border: "1px solid rgba(255, 255, 255, 0.9)",
          background: "linear-gradient(135deg, #eaf2ff 0%, #f5f7ff 52%, #dce7ff 100%)",
          boxShadow: "0 35px 90px rgba(30, 64, 175, 0.18)",
        }}
      >
        <div className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full bg-indigo-400/25 blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-cyan-300/25 blur-[75px]" />

        <div
          className="absolute left-5 top-5 z-30 inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/80 px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-700 shadow-sm backdrop-blur-xl sm:left-7 sm:top-7 sm:text-xs"
          style={{
            position: "absolute",
            top: "22px",
            left: "22px",
            zIndex: 30,
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]" />
          Available to work
        </div>

        <div
          className="absolute right-5 top-5 z-30 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-white/60 text-[11px] font-black tracking-[0.08em] text-indigo-700 shadow-sm backdrop-blur-xl sm:right-7 sm:top-7 sm:h-14 sm:w-14"
          style={{
            position: "absolute",
            top: "22px",
            right: "22px",
            zIndex: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          DAM
        </div>

        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            position: "absolute",
            left: "50%",
            top: "47%",
            width: "min(76%, 300px)",
            aspectRatio: "1",
            transform: "translate(-50%, -50%)",
            borderRadius: "9999px",
            border: "1px solid rgba(165, 180, 252, 0.5)",
            background: "rgba(255, 255, 255, 0.3)",
            boxShadow: "inset 0 0 70px rgba(255, 255, 255, 0.72)",
          }}
        />

        <div
          className="pointer-events-none absolute bottom-0 left-1/2 z-10"
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            zIndex: 10,
            transform: "translateX(-50%)",
          }}
        >
          <motion.img
            src={profile}
            alt="Daniel Alexander Montalban"
            draggable={false}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            className="h-[430px] w-auto max-w-none select-none object-contain drop-shadow-[0_30px_38px_rgba(15,23,42,0.25)] sm:h-[535px]"
            style={{
              display: "block",
              width: "auto",
              maxWidth: "none",
              height: "clamp(345px, 27vw, 375px)",
            }}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-[#dce7ff] via-[#dce7ff]/90 to-transparent"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 20,
            height: "76px",
            background: "linear-gradient(to top, #dce7ff 0%, rgba(220, 231, 255, 0.9) 45%, transparent 100%)",
          }}
        />

        <div
          className="absolute bottom-7 left-1/2 z-30 w-full text-center sm:bottom-8"
          style={{
            position: "absolute",
            left: "50%",
            bottom: "16px",
            zIndex: 30,
            width: "100%",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-indigo-600/80 sm:text-xs">
            Focused · Organized · Reliable
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="relative z-40 mx-auto -mt-5 grid w-[calc(100%-1rem)] max-w-[480px] grid-cols-3 overflow-hidden rounded-[1.6rem] border border-white/90 bg-white/90 p-2 shadow-[0_22px_55px_rgba(30,64,175,0.16)] backdrop-blur-2xl sm:-mt-6 sm:rounded-[1.8rem] sm:p-2.5"
        style={{
          position: "relative",
          zIndex: 40,
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          width: "calc(100% - 1rem)",
          maxWidth: "480px",
          margin: "-14px auto 0",
        }}
      >
        {details.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className={`group flex min-w-0 items-center justify-center gap-2 rounded-2xl px-2 py-3 sm:gap-3 sm:px-3 sm:py-3.5 ${
                index > 0 ? "border-l border-slate-200/80" : ""
              }`}
            >
              <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 text-indigo-600 shadow-sm sm:flex">
                <Icon size={19} />
              </span>
              <span className="min-w-0 text-left">
                <span className="block truncate text-xs font-extrabold text-slate-800 sm:text-sm">
                  {item.value}
                </span>
                <span className="mt-0.5 block truncate text-[9px] font-semibold uppercase tracking-[0.08em] text-slate-400 sm:text-[10px]">
                  {item.label}
                </span>
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
