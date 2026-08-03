import { motion } from "framer-motion";

const sectionProfiles = {
  "ABOUT ME": {
    number: "01",
    accent: "from-indigo-600 to-cyan-400",
    glow: "bg-indigo-200/55",
  },
  SERVICES: {
    number: "02",
    accent: "from-blue-600 to-cyan-400",
    glow: "bg-cyan-200/55",
  },
  SKILLS: {
    number: "03",
    accent: "from-violet-600 to-indigo-500",
    glow: "bg-violet-200/50",
  },
  PROJECTS: {
    number: "04",
    accent: "from-cyan-500 to-blue-600",
    glow: "bg-blue-200/50",
  },
  EDUCATION: {
    number: "05",
    accent: "from-amber-400 to-orange-500",
    glow: "bg-amber-200/45",
  },
  CONTACT: {
    number: "06",
    accent: "from-emerald-500 to-cyan-500",
    glow: "bg-emerald-200/45",
  },
};

const defaultProfile = {
  number: "00",
  accent: "from-indigo-600 to-cyan-400",
  glow: "bg-indigo-200/50",
};

export default function SectionTitle({
  label,
  title,
  highlight,
  subtitle,
  description,
}) {
  const text = subtitle || description;
  const titleWords = String(title).trim().split(/\s+/);
  const automaticHighlight = titleWords.pop();
  const mainTitle = highlight ? title : titleWords.join(" ");
  const highlightedText = highlight || automaticHighlight;
  const profile = sectionProfiles[String(label).toUpperCase()] || defaultProfile;
  const completeTitle = `${title} ${highlight || ""}`.trim();
  const breakHighlight = Boolean(highlight) && completeTitle.length > 24;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2 }}
      className="group relative w-full overflow-hidden rounded-[2.1rem] border border-white/90 bg-white/[0.84] px-6 py-7 shadow-[0_22px_60px_rgba(30,64,175,0.1)] ring-1 ring-slate-100 backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_28px_70px_rgba(30,64,175,0.14)] sm:px-8 sm:py-8 lg:px-10 lg:py-9"
    >
      <div
        className={`pointer-events-none absolute -left-24 -top-28 h-72 w-72 rounded-full ${profile.glow} blur-[90px] transition-opacity duration-300 group-hover:opacity-90`}
      />
      <div className="pointer-events-none absolute -bottom-36 right-[-3rem] h-80 w-80 rounded-full bg-cyan-200/35 blur-[95px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.024] [background-image:linear-gradient(#4f46e5_1px,transparent_1px),linear-gradient(to_right,#4f46e5_1px,transparent_1px)] [background-size:42px_42px]" />
      <span className="pointer-events-none absolute right-7 top-1/2 -translate-y-1/2 font-mono text-[92px] font-black tracking-[-0.12em] text-slate-950/[0.035] transition-all duration-500 group-hover:-translate-x-1 group-hover:text-slate-950/[0.055] sm:right-10 sm:text-[118px]">
        {profile.number}
      </span>

      <div className="relative">
        <div className="flex items-center justify-between gap-5">
          {label && (
            <div className="inline-flex items-center gap-2.5 rounded-full border border-indigo-100 bg-white/80 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 shadow-sm">
              <span
                className={`h-2 w-2 rounded-full bg-gradient-to-r ${profile.accent} shadow-[0_0_0_4px_rgba(99,102,241,0.1)]`}
              />
              {label}
            </div>
          )}

          <span className="font-mono text-xs font-black tracking-[0.18em] text-slate-300 sm:hidden">
            {profile.number}
          </span>
        </div>

        <h2 className="mt-5 max-w-5xl text-3xl font-black leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-[40px] lg:text-[48px]">
          {mainTitle && <span>{mainTitle}</span>}
          <span
            className={`bg-gradient-to-r ${profile.accent} bg-clip-text text-transparent ${
              breakHighlight ? "mt-1 block" : "ml-2 inline"
            }`}
          >
            {highlightedText}
          </span>
        </h2>

        <div className="mt-6 border-t border-slate-200/80 pt-5">
          {text && (
            <p className="max-w-2xl text-sm font-medium leading-6 text-slate-600 sm:text-[15px]">
              {text}
            </p>
          )}
        </div>
      </div>

      <div
        className={`pointer-events-none absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r ${profile.accent} transition-transform duration-500 group-hover:scale-x-[1.02]`}
      />
    </motion.div>
  );
}
