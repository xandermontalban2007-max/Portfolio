import { motion } from "framer-motion";
import { FaGraduationCap, FaTools } from "react-icons/fa";
import {
  HiOutlineChartBar,
  HiOutlineDocumentText,
  HiOutlineMapPin,
  HiOutlinePresentationChartBar,
} from "react-icons/hi2";

import SectionTitle from "../../components/ui/SectionTitle";
import portfolioData from "../../data/portfolioData";

const collegeFocus = [
  "Computing systems",
  "Digital productivity",
  "Technical problem-solving",
];

const portfolioGroups = [
  {
    label: "Research",
    detail: "Qualitative and quantitative studies",
    icon: HiOutlineChartBar,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    label: "Documentation",
    detail: "Work immersion, proposal, and inspection reports",
    icon: HiOutlineDocumentText,
    color: "bg-cyan-50 text-cyan-700",
  },
  {
    label: "Presentation",
    detail: "Research slides and team-led delivery",
    icon: HiOutlinePresentationChartBar,
    color: "bg-amber-50 text-amber-700",
  },
];

export default function Education() {
  const college = portfolioData.education[0];

  return (
    <section
      id="education"
      className="relative isolate scroll-mt-24 overflow-hidden bg-white py-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-12 h-96 w-96 rounded-full bg-amber-100/35 blur-[135px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-100/40 blur-[135px]" />
        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(#4f46e5_1px,transparent_1px),linear-gradient(to_right,#4f46e5_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionTitle
          label="EDUCATION"
          title="Learning"
          highlight="journey."
          subtitle="A practical foundation that continues to shape how I learn and work."
        />

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-12">
          <motion.article
            whileHover={{ y: -4 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-900 bg-slate-950 text-white shadow-[0_24px_65px_rgba(15,23,42,0.2)] transition-[box-shadow,border-color] duration-200 hover:border-indigo-400/60 hover:shadow-[0_30px_80px_rgba(15,23,42,0.28)] lg:col-span-5"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-500/25 opacity-70 blur-[80px] transition-opacity duration-300 group-hover:opacity-100" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-cyan-500/10 opacity-70 blur-[80px] transition-opacity duration-300 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(to_right,#ffffff_1px,transparent_1px)] [background-size:44px_44px]" />

            <div className="relative flex flex-1 flex-col p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-cyan-300 transition-transform duration-200 ease-out group-hover:-rotate-3 group-hover:scale-105 motion-reduce:transform-none">
                  <FaGraduationCap size={22} />
                </span>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-300">
                    Current education
                  </p>
                  <span className="mt-2 block h-1 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
                </div>
              </div>

              <h3 className="mt-5 text-2xl font-black leading-tight tracking-[-0.04em] sm:text-3xl">
                {college.program}
              </h3>

              <div className="mt-5 border-l-2 border-cyan-400/70 pl-4">
                <p className="text-sm font-black text-white">
                  {college.school}
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/45">
                  <HiOutlineMapPin size={15} />
                  {college.location}
                </p>
              </div>

              <p className="mt-6 text-sm leading-7 text-blue-100/65">
                Building on my technical foundation through formal study in computer and engineering technology.
              </p>

              <div className="mt-6 flex flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045]">
                {collegeFocus.map((focus, index) => (
                  <div
                    key={focus}
                    className={`relative flex min-h-[58px] flex-1 items-center gap-4 px-4 py-3.5 transition-colors duration-200 hover:bg-white/[0.07] ${
                      index < collegeFocus.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-[10px] font-black tracking-[0.08em] text-cyan-300">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-bold leading-5 text-blue-50/80">
                      {focus}
                    </span>
                    <span className="ml-auto h-1.5 w-7 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
                  </div>
                ))}
              </div>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-[filter] duration-300 group-hover:brightness-125" />
          </motion.article>

          <motion.article
            whileHover={{ y: -4 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-amber-100 bg-white shadow-[0_24px_65px_rgba(30,64,175,0.1)] transition-[box-shadow,border-color] duration-200 hover:border-amber-300 hover:shadow-[0_30px_80px_rgba(30,64,175,0.16)] lg:col-span-7"
          >
            <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-amber-100/75 opacity-70 blur-[90px] transition-opacity duration-300 group-hover:opacity-100" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-cyan-100/50 opacity-70 blur-[90px] transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative flex flex-1 flex-col p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-100 bg-amber-50 text-amber-700 shadow-sm transition-transform duration-200 ease-out group-hover:rotate-3 group-hover:scale-105 motion-reduce:transform-none">
                    <FaTools size={20} />
                  </span>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-indigo-600">
                      Portfolio foundation
                    </p>
                    <p className="mt-1 text-xs font-bold text-slate-400">
                      Senior High School · Completed
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-100 bg-white/80 px-3 py-2 text-[10px] font-bold text-slate-500 shadow-sm">
                  <HiOutlineMapPin size={15} />
                  Batangas City, Philippines
                </span>
              </div>

              <h3 className="mt-7 text-3xl font-black leading-tight tracking-[-0.045em] text-slate-950 sm:text-4xl">
                Gulod Senior High School
              </h3>

              <div className="mt-6 grid overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/75 sm:grid-cols-2">
                <div className="p-4 sm:p-5">
                  <p className="text-[9px] font-black uppercase tracking-[0.17em] text-slate-400">
                    Track
                  </p>
                  <p className="mt-2 text-sm font-black leading-6 text-slate-900">
                    Technical-Vocational-Livelihood (TVL)
                  </p>
                </div>
                <div className="border-t border-slate-100 p-4 sm:border-l sm:border-t-0 sm:p-5">
                  <p className="text-[9px] font-black uppercase tracking-[0.17em] text-slate-400">
                    Specialization
                  </p>
                  <p className="mt-2 text-sm font-black leading-6 text-amber-800">
                    Electrical Installation and Maintenance (EIM)
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600">
                The academic and technical work featured in this portfolio was completed during this period.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {portfolioGroups.map((group) => {
                  const Icon = group.icon;

                  return (
                    <div
                      key={group.label}
                      className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-[0_10px_28px_rgba(30,64,175,0.05)] transition-[box-shadow,border-color] duration-200 hover:border-indigo-100 hover:shadow-[0_16px_34px_rgba(30,64,175,0.1)]"
                    >
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-xl ${group.color}`}
                      >
                        <Icon size={18} />
                      </span>
                      <p className="mt-4 text-xs font-black text-slate-900">
                        {group.label}
                      </p>
                      <p className="mt-1.5 text-[11px] leading-5 text-slate-500">
                        {group.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-indigo-500 to-cyan-400 transition-[filter] duration-300 group-hover:brightness-110" />
          </motion.article>
        </div>
      </div>
    </section>
  );
}
