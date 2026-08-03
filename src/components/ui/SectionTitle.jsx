import { motion } from "framer-motion";

const sectionProfiles = {
  "ABOUT ME": {
    number: "01",
    accent: "from-indigo-600 to-cyan-400",
    glow: "bg-indigo-200/55",
    darkGlow: "bg-indigo-500/15",
    darkSecondaryGlow: "bg-cyan-500/[0.08]",
    darkPanel:
      "border-indigo-400/15 bg-[#10182b]/95 shadow-[0_22px_60px_rgba(0,0,0,0.24)] ring-1 ring-indigo-400/[0.05]",
    darkBadge:
      "border-indigo-400/20 bg-indigo-400/[0.07] text-indigo-300",
  },
  SERVICES: {
    number: "02",
    accent: "from-blue-600 to-cyan-400",
    glow: "bg-cyan-200/55",
    darkGlow: "bg-blue-500/12",
    darkSecondaryGlow: "bg-cyan-500/[0.08]",
    darkPanel:
      "border-cyan-400/15 bg-[#0d1c28]/95 shadow-[0_22px_60px_rgba(0,0,0,0.24)] ring-1 ring-cyan-400/[0.05]",
    darkBadge:
      "border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300",
  },
  SKILLS: {
    number: "03",
    accent: "from-violet-600 to-indigo-500",
    glow: "bg-violet-200/50",
    darkGlow: "bg-violet-500/15",
    darkSecondaryGlow: "bg-indigo-500/10",
    darkPanel:
      "border-violet-400/15 bg-[#17162d]/95 shadow-[0_22px_60px_rgba(0,0,0,0.24)] ring-1 ring-violet-400/[0.05]",
    darkBadge:
      "border-violet-400/20 bg-violet-400/[0.07] text-violet-300",
  },
  PROJECTS: {
    number: "04",
    accent: "from-cyan-500 to-blue-600",
    glow: "bg-blue-200/50",
    darkGlow: "bg-cyan-500/12",
    darkSecondaryGlow: "bg-blue-500/10",
    darkPanel:
      "border-cyan-400/15 bg-[#101b2e]/95 shadow-[0_22px_60px_rgba(0,0,0,0.24)] ring-1 ring-cyan-400/[0.05]",
    darkBadge:
      "border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300",
  },
  EDUCATION: {
    number: "05",
    accent: "from-amber-400 to-orange-500",
    glow: "bg-amber-200/45",
    darkGlow: "bg-amber-500/15",
    darkSecondaryGlow: "bg-orange-500/[0.08]",
    darkPanel:
      "border-amber-400/15 bg-[#1a160f]/95 shadow-[0_22px_60px_rgba(0,0,0,0.24)] ring-1 ring-amber-400/[0.05]",
    darkBadge:
      "border-amber-400/20 bg-amber-400/[0.07] text-amber-300",
  },
  CONTACT: {
    number: "06",
    accent: "from-emerald-500 to-cyan-500",
    glow: "bg-emerald-200/45",
    darkGlow: "bg-emerald-500/15",
    darkSecondaryGlow: "bg-cyan-500/[0.08]",
    darkPanel:
      "border-emerald-400/15 bg-[#0b211b]/95 shadow-[0_22px_60px_rgba(0,0,0,0.24)] ring-1 ring-emerald-400/[0.05]",
    darkBadge:
      "border-emerald-400/20 bg-emerald-400/[0.07] text-emerald-300",
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
  compact = false,
  dark = false,
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
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full overflow-hidden rounded-[2.1rem] border ${
        dark
          ? profile.darkPanel ||
            "border-white/10 bg-[#10182b]/95 shadow-[0_22px_60px_rgba(0,0,0,0.24)] ring-1 ring-white/[0.04]"
          : "border-white/90 bg-white/[0.94] shadow-[0_22px_60px_rgba(30,64,175,0.1)] ring-1 ring-slate-100"
      } ${
        compact
          ? "px-5 py-5 sm:px-7 sm:py-6 lg:px-8"
          : "px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-9"
      }`}
    >
      <div
        className={`pointer-events-none absolute -left-24 -top-28 h-72 w-72 rounded-full ${
          dark ? profile.darkGlow || "bg-indigo-500/15" : `${profile.glow} opacity-70`
        } blur-[90px]`}
      />
      <div
        className={`pointer-events-none absolute -bottom-36 right-[-3rem] h-80 w-80 rounded-full blur-[95px] ${
          dark
            ? profile.darkSecondaryGlow || "bg-cyan-500/10"
            : "bg-cyan-200/35"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-0 [background-size:42px_42px] ${
          dark
            ? "opacity-[0.035] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(to_right,#ffffff_1px,transparent_1px)]"
            : "opacity-[0.024] [background-image:linear-gradient(#4f46e5_1px,transparent_1px),linear-gradient(to_right,#4f46e5_1px,transparent_1px)]"
        }`}
      />
      {!compact && (
        <span
          className={`pointer-events-none absolute right-7 top-1/2 -translate-y-1/2 font-mono text-[92px] font-black tracking-[-0.12em] sm:right-10 sm:text-[118px] ${
            dark ? "text-white/[0.035]" : "text-slate-950/[0.035]"
          }`}
        >
          {profile.number}
        </span>
      )}

      <div
        className={`relative ${
          compact
            ? "lg:grid lg:grid-cols-[160px_minmax(0,1fr)_minmax(240px,0.65fr)] lg:items-center lg:gap-7"
            : ""
        }`}
      >
        <div className="flex items-center justify-between gap-5">
          {label && (
            <div
              className={`inline-flex items-center rounded-full border text-[10px] font-black uppercase tracking-[0.2em] shadow-sm ${
                dark
                  ? profile.darkBadge ||
                    "border-indigo-400/20 bg-white/[0.055] text-indigo-300"
                  : "border-indigo-100 bg-white/80 text-indigo-600"
              } ${
                compact ? "gap-2 px-3 py-1.5" : "gap-2.5 px-3.5 py-2"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full bg-gradient-to-r ${profile.accent} shadow-[0_0_0_4px_rgba(99,102,241,0.1)]`}
              />
              {label}
            </div>
          )}

          <span
            className={`font-mono text-xs font-black tracking-[0.18em] ${
              dark ? "text-slate-500" : "text-slate-300"
            } ${
              compact ? "" : "sm:hidden"
            }`}
          >
            {profile.number}
          </span>
        </div>

        <h2
          className={`max-w-5xl font-black leading-[1.05] tracking-[-0.045em] ${
            dark ? "text-slate-50" : "text-slate-950"
          } ${
            compact
              ? "mt-4 text-3xl sm:text-[36px] lg:mt-0 lg:text-[38px]"
              : "mt-5 text-3xl sm:text-[40px] lg:text-[48px]"
          }`}
        >
          {mainTitle && <span>{mainTitle}</span>}
          <span
            className={`bg-gradient-to-r ${profile.accent} bg-clip-text text-transparent ${
              breakHighlight ? "mt-1 block" : "ml-2 inline"
            }`}
          >
            {highlightedText}
          </span>
        </h2>

        <div
          className={`border-t ${dark ? "border-white/10" : "border-slate-200/80"} ${
            compact
              ? "mt-4 pt-4 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0"
              : "mt-6 pt-5"
          }`}
        >
          {text && (
            <p
              className={`max-w-2xl text-sm font-medium leading-6 sm:text-[15px] ${
                dark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {text}
            </p>
          )}
        </div>
      </div>

      <div
        className={`pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${profile.accent}`}
      />
    </motion.div>
  );
}
