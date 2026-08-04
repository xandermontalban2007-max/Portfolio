import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineBolt,
  HiOutlineCheckBadge,
  HiOutlineDocumentText,
  HiOutlineFolder,
  HiOutlineMagnifyingGlass,
  HiOutlineShieldCheck,
  HiOutlineTableCells,
} from "react-icons/hi2";

import SectionTitle from "../../components/ui/SectionTitle";

const strengths = [
  {
    icon: HiOutlineCheckBadge,
    title: "Detail-Oriented",
    description: "Careful with every entry and document",
  },
  {
    icon: HiOutlineFolder,
    title: "Organized",
    description: "Keeps files and tasks easy to follow",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Reliable",
    description: "Finishes work with care",
  },
  {
    icon: HiOutlineBolt,
    title: "Fast Learner",
    description: "Open to new tools and new ways of working",
  },
];

const storyItems = [
  {
    icon: HiOutlineAcademicCap,
    title: "How I Started",
    description:
      "I became interested in digital work while organizing school files, research, and spreadsheets",
  },
  {
    icon: HiOutlineFolder,
    title: "What I Enjoy",
    description:
      "I enjoy turning messy information into clean and easy-to-use files",
  },
  {
    icon: HiOutlineCheckBadge,
    title: "My Goal",
    description:
      "I want to gain work experience, help a good team, and become someone clients can trust",
  },
];

const learning = [
  {
    icon: HiOutlineTableCells,
    title: "Data Entry",
    description:
      "Learning data validation, data cleanup, and ways to handle larger spreadsheets",
  },
  {
    icon: HiOutlineCheckBadge,
    title: "Virtual Assistance",
    description: "Learning inbox automation and calendar coordination",
  },
  {
    icon: HiOutlineDocumentText,
    title: "Microsoft Office",
    description:
      "Learning advanced Excel formulas, PivotTables, mail merge, and better presentation design",
  },
  {
    icon: HiOutlineFolder,
    title: "Google Workspace",
    description:
      "Learning advanced Sheets formulas, Apps Script basics, Forms automation, and connected spreadsheets",
  },
  {
    icon: HiOutlineMagnifyingGlass,
    title: "Internet Research",
    description:
      "Learning advanced search operators, checking archived pages, and cross-checking hard-to-find information",
  },
  {
    icon: HiOutlineDocumentText,
    title: "Document Formatting",
    description: "Practicing clear layouts and consistent document styles",
  },
];

const tabs = [
  {
    id: "story",
    label: "My Story",
    eyebrow: "Background",
    icon: HiOutlineAcademicCap,
  },
  {
    id: "strengths",
    label: "Strengths",
    eyebrow: "Working Style",
    icon: HiOutlineCheckBadge,
  },
  {
    id: "learning",
    label: "Learning",
    eyebrow: "Growth Areas",
    icon: HiOutlineBolt,
  },
];

const groups = {
  story: { label: "My Story", items: storyItems },
  strengths: { label: "My Strengths", items: strengths },
  learning: { label: "What I Am Learning", items: learning },
};

export default function About() {
  const [activeTab, setActiveTab] = useState("story");
  const [activeItem, setActiveItem] = useState(0);

  const activeGroup = groups[activeTab];
  const selectedItem = activeGroup.items[activeItem] || activeGroup.items[0];
  const SelectedIcon = selectedItem.icon;

  const selectTab = (tabId) => {
    setActiveTab(tabId);
    setActiveItem(0);
  };

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#0b1020] py-16"
    >
      {/* Layered section background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-44 top-8 h-[430px] w-[430px] rounded-full bg-cyan-500/10 blur-[125px]" />
        <div className="absolute -right-48 bottom-[-4rem] h-[520px] w-[520px] rounded-full bg-indigo-500/12 blur-[145px]" />
        <div className="absolute left-[43%] top-[32%] h-72 w-72 rounded-full bg-blue-500/[0.07] blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(to_right,#ffffff_1px,transparent_1px)] [background-size:68px_68px]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#090e1c] to-transparent sm:h-36" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#0a141f] sm:h-36" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionTitle
          label="ABOUT ME"
          title="Always learning and"
          highlight="ready to help"
          subtitle="Get to know how I work and what I am learning."
          compact
          dark
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9"
        >
          {/* Full-width category control */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#10182b]/92 p-3 shadow-[0_20px_55px_rgba(0,0,0,0.22)] ring-1 ring-white/[0.04] sm:p-4">
            <div className="pointer-events-none absolute -left-16 -top-24 h-52 w-52 rounded-full bg-indigo-500/15 blur-[65px]" />
            <div className="pointer-events-none absolute -right-16 -bottom-24 h-52 w-52 rounded-full bg-cyan-500/10 blur-[65px]" />
            <div className="pointer-events-none absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent" />

            <div className="relative grid gap-2.5 sm:grid-cols-3">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => selectTab(tab.id)}
                    aria-pressed={isActive}
                    className={`group relative isolate flex min-h-[86px] items-center gap-3.5 overflow-hidden rounded-[1.35rem] border px-4 py-3 text-left transition-[background-color,border-color,color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
                      isActive
                        ? "border-slate-900 text-white shadow-[0_16px_34px_rgba(15,23,42,0.2)]"
                        : "border-white/[0.08] bg-white/[0.035] text-slate-300 hover:border-indigo-400/25 hover:bg-white/[0.065] hover:shadow-[0_12px_28px_rgba(0,0,0,0.16)]"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 -z-10 rounded-[1.35rem] bg-slate-950 transition-[opacity,transform] duration-200 ease-out motion-reduce:transform-none ${
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-[0.985] opacity-0"
                      }`}
                    />

                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.9rem] border transition-[transform,color,background-color,border-color] duration-200 group-hover:scale-105 motion-reduce:transform-none ${
                        isActive
                          ? "border-white/10 bg-white/[0.08] text-cyan-300"
                          : "border-white/10 bg-white/[0.06] text-indigo-300 shadow-[0_7px_18px_rgba(0,0,0,0.16)]"
                      }`}
                    >
                      <Icon size={22} />
                    </span>

                    <span className="min-w-0 flex-1 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none">
                      <span
                        className={`block text-[9px] font-black uppercase tracking-[0.18em] transition-colors duration-200 ${
                          isActive ? "text-cyan-300" : "text-slate-500"
                        }`}
                      >
                        {tab.eyebrow}
                      </span>
                      <span className="mt-1.5 block text-[15px] font-black tracking-[-0.02em]">
                        {tab.label}
                      </span>
                    </span>

                    <span
                      className={`self-start rounded-full px-2 py-1 font-mono text-[10px] font-black transition-[color,background-color] duration-200 ${
                        isActive
                          ? "bg-white/[0.07] text-white/45"
                          : "bg-white/[0.055] text-slate-500 shadow-sm"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive bento workspace */}
          <div className="mt-5 grid items-stretch gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            {/* Selected item spotlight */}
            <div className="relative min-h-[350px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#070d1d] p-6 text-white shadow-[0_28px_75px_rgba(0,0,0,0.26)] sm:p-7 lg:min-h-[370px]">
              <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-[85px]" />
              <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[80px]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(to_right,#ffffff_1px,transparent_1px)] [background-size:44px_44px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-[68%] bg-indigo-600" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-1 w-[32%] bg-cyan-400" />

              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={`${activeTab}-${selectedItem.title}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex h-full min-h-[298px] flex-col lg:min-h-[314px]"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-cyan-300 shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
                      <SelectedIcon size={27} />
                    </span>

                    <div className="text-right">
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-300">
                        {activeGroup.label}
                      </p>
                      <p className="mt-2 font-mono text-xs font-bold text-white/35">
                        {String(activeItem + 1).padStart(2, "0")} / {" "}
                        {String(activeGroup.items.length).padStart(2, "0")}
                      </p>
                    </div>
                  </div>

                  <div className="my-auto py-7">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-indigo-300">
                      Selected Detail
                    </p>

                    <h3 className="mt-3 max-w-xl text-2xl font-black leading-[1.08] tracking-[-0.04em] sm:text-3xl">
                      {selectedItem.heading || selectedItem.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/70 sm:text-base">
                      {selectedItem.description}
                    </p>

                    {selectedItem.value && (
                      <span className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-xs font-bold text-white">
                        {selectedItem.value}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-end border-t border-white/10 pt-5">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      {activeGroup.items.map((item, index) => (
                        <span
                          key={item.title}
                          className={`h-1.5 rounded-full transition-[width,background-color] duration-200 ${
                            activeItem === index
                              ? "w-7 bg-gradient-to-r from-indigo-500 to-cyan-400"
                              : "w-1.5 bg-white/15"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Interactive item directory */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111a2e]/95 p-5 shadow-[0_24px_65px_rgba(0,0,0,0.22)] ring-1 ring-white/[0.04]">
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-500/10 blur-[65px]" />

              <div className="relative flex items-end justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-300">
                    Item Directory
                  </p>
                  <h3 className="mt-2 text-xl font-black tracking-[-0.03em] text-slate-50">
                    {activeGroup.label}
                  </h3>
                </div>

                <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-black text-slate-400">
                  {activeGroup.items.length} items
                </span>
              </div>

              <div className="relative mt-4 sm:min-h-[248px]">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className={`grid w-full gap-2.5 ${
                      activeTab === "story" ? "grid-cols-1" : "sm:grid-cols-2"
                    }`}
                  >
                  {activeGroup.items.map((item, index) => {
                    const Icon = item.icon;
                    const isSelected = activeItem === index;

                    return (
                      <motion.button
                        key={item.title}
                        type="button"
                        onClick={() => setActiveItem(index)}
                        whileTap={{ scale: 0.985 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        aria-pressed={isSelected}
                        className={`group relative isolate flex min-h-[76px] items-center gap-3 overflow-hidden rounded-2xl border p-3 text-left transition-[background-color,border-color,color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
                          isSelected
                            ? "border-indigo-400/35 text-indigo-100 shadow-[0_12px_26px_rgba(79,70,229,0.15)]"
                            : "border-white/[0.08] bg-white/[0.025] text-slate-300 hover:border-indigo-400/25 hover:bg-white/[0.055] hover:shadow-[0_10px_26px_rgba(0,0,0,0.18)]"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/10 transition-[opacity,transform] duration-200 ease-out ${
                            isSelected
                              ? "scale-100 opacity-100"
                              : "scale-[0.985] opacity-0"
                          }`}
                        />

                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-white/[0.06] shadow-sm transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none ${
                            isSelected
                              ? "border-indigo-400/25 text-indigo-300"
                              : "border-white/10 text-slate-400"
                          }`}
                        >
                          <Icon size={21} />
                        </span>

                        <span className="min-w-0 flex-1 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none">
                          <span className="block text-sm font-black leading-snug">
                            {item.title}
                          </span>
                          <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                            View details
                          </span>
                        </span>

                        <span
                          className={`h-2 w-2 shrink-0 rounded-full transition-[background-color,box-shadow] duration-200 ${
                            isSelected
                              ? "bg-cyan-400 shadow-[0_0_0_4px_rgba(34,211,238,0.12)]"
                              : "bg-slate-700"
                          }`}
                        />
                      </motion.button>
                    );
                  })}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
