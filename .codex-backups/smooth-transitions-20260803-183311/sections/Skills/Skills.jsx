import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFileExcel,
  FaFilePowerpoint,
  FaFileWord,
  FaGoogle,
  FaMicrosoft,
} from "react-icons/fa";
import {
  HiOutlineClipboardDocument,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";

import SectionTitle from "../../components/ui/SectionTitle";

const skills = [
  {
    icon: FaMicrosoft,
    title: "Microsoft Office",
    description:
      "Used Word, Excel, and PowerPoint to prepare and organize documents, spreadsheets, and presentations.",
    type: "Tool",
    accent: "from-blue-600 to-cyan-500",
    iconStyle: "bg-blue-50 text-blue-600",
    details: [
      "Word document preparation",
      "Excel organization",
      "PowerPoint presentations",
    ],
  },
  {
    icon: FaGoogle,
    title: "Google Workspace",
    description:
      "Used Google Docs and Google Drive for document preparation, structured filing, and easier file access.",
    type: "Tool",
    accent: "from-red-500 via-amber-400 to-blue-500",
    iconStyle: "bg-red-50 text-red-500",
    details: [
      "Google Docs formatting",
      "Google Drive organization",
      "Accessible digital files",
    ],
  },
  {
    icon: FaFileWord,
    title: "Document Formatting",
    description:
      "Prepared clean documents with accurate formatting, consistent structure, and careful review.",
    type: "Skill",
    accent: "from-indigo-500 to-blue-600",
    iconStyle: "bg-indigo-50 text-indigo-600",
    details: ["Page layout", "Consistent formatting", "Accuracy review"],
  },
  {
    icon: FaFilePowerpoint,
    title: "Microsoft PowerPoint",
    description:
      "Created organized presentations with clear content structure for school and research tasks.",
    type: "Skill",
    accent: "from-orange-500 to-red-500",
    iconStyle: "bg-orange-50 text-orange-600",
    details: ["Slide preparation", "Content organization", "Visual clarity"],
  },
  {
    icon: FaFileExcel,
    title: "Spreadsheet Management",
    description:
      "Used Microsoft Excel to organize information while maintaining accuracy and consistency.",
    type: "Skill",
    accent: "from-emerald-500 to-teal-500",
    iconStyle: "bg-emerald-50 text-emerald-600",
    details: ["Basic formulas", "Organized tables", "Accuracy checking"],
  },
  {
    icon: HiOutlineClipboardDocument,
    title: "Data Entry",
    description:
      "Organized spreadsheet records carefully with consistent entries and close attention to detail.",
    type: "Skill",
    accent: "from-violet-500 to-indigo-600",
    iconStyle: "bg-violet-50 text-violet-600",
    details: ["Record organization", "Consistent entries", "Detail review"],
  },
  {
    icon: HiOutlineMagnifyingGlass,
    title: "Internet Research",
    description:
      "Conducted online research to gather reliable information and support accurate documentation.",
    type: "Skill",
    accent: "from-cyan-500 to-blue-600",
    iconStyle: "bg-cyan-50 text-cyan-700",
    details: ["Information gathering", "Source review", "Research notes"],
  },
];

export default function Skills() {
  const [filter, setFilter] = useState("Skill");
  const filters = ["Skill", "Tool"];
  const visibleSkills = skills.filter((skill) => skill.type === filter);

  const selectFilter = (item) => {
    setFilter(item);
  };

  return (
    <section
      id="skills"
      className="relative isolate scroll-mt-24 overflow-hidden bg-slate-50 py-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-100/45 blur-[125px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-[125px]" />
        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(#4f46e5_1px,transparent_1px),linear-gradient(to_right,#4f46e5_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionTitle
          label="SKILLS"
          title="Practical"
          highlight="capabilities."
          subtitle="Built through schoolwork, research, and continuous practice."
        />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-7 overflow-hidden rounded-[2.4rem] border border-white/90 bg-white/75 p-3 shadow-[0_26px_75px_rgba(30,64,175,0.1)] ring-1 ring-slate-100 backdrop-blur-xl sm:p-4"
        >
          <div className="pointer-events-none absolute -left-20 -top-24 h-60 w-60 rounded-full bg-violet-200/35 blur-[75px]" />
          <div className="pointer-events-none absolute -bottom-28 right-0 h-64 w-64 rounded-full bg-cyan-200/30 blur-[80px]" />

          <div className="relative flex justify-center border-b border-slate-100 pb-4 sm:justify-start">
            <div
              className="flex items-center gap-1.5 rounded-2xl border border-slate-100 bg-slate-50/85 p-1.5"
              aria-label="Skill category"
            >
              {filters.map((item) => {
                const isActive = filter === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => selectFilter(item)}
                    aria-pressed={isActive}
                    className={`relative isolate min-w-[82px] cursor-pointer overflow-hidden rounded-xl px-4 py-2.5 text-xs font-extrabold outline-none transition-colors duration-150 focus-visible:ring-4 focus-visible:ring-indigo-200 ${
                      isActive
                        ? "text-white"
                        : "text-slate-500 hover:text-indigo-600"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="skills-active-filter"
                        className="absolute inset-0 -z-10 rounded-xl bg-slate-950"
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                    {`${item}s`}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skill lanes: each title and its content live in one place only */}
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative mt-4 space-y-2.5"
          >
            {visibleSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <article
                  key={skill.title}
                  className="relative isolate w-full overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white/85 px-4 py-4 text-slate-800 shadow-[0_8px_24px_rgba(30,64,175,0.055)] sm:px-5"
                >
                  <span
                    className={`absolute inset-y-4 left-0 w-1 rounded-r-full bg-gradient-to-b ${skill.accent}`}
                    aria-hidden="true"
                  />

                  <div className="grid min-h-[82px] items-center gap-4 sm:grid-cols-[minmax(220px,0.82fr)_minmax(0,1.18fr)] lg:grid-cols-[minmax(220px,0.72fr)_minmax(300px,1.08fr)_minmax(250px,0.9fr)]">
                    <div className="flex min-w-0 items-center gap-3.5">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.9rem] border border-white ${skill.iconStyle} shadow-[0_7px_18px_rgba(15,23,42,0.07)]`}
                      >
                        <Icon size={21} />
                      </span>

                      <div className="min-w-0">
                        <span className="block font-mono text-[9px] font-black tracking-[0.16em] text-slate-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-1 truncate text-sm font-black tracking-[-0.02em] sm:text-base">
                          {skill.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs leading-6 text-slate-500 sm:text-[13px]">
                      {skill.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:col-span-2 lg:col-span-1 lg:justify-end">
                      {skill.details.map((detail) => (
                        <span
                          key={detail}
                          className="rounded-full border border-slate-100 bg-slate-50/90 px-2.5 py-1.5 text-[10px] font-semibold text-slate-500"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
