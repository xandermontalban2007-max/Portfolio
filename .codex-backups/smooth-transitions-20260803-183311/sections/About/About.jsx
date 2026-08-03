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
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#f7f9ff] py-16"
    >
      {/* Layered section background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-44 top-8 h-[430px] w-[430px] rounded-full bg-cyan-200/35 blur-[125px]" />
        <div className="absolute -right-48 bottom-[-4rem] h-[520px] w-[520px] rounded-full bg-indigo-200/35 blur-[145px]" />
        <div className="absolute left-[43%] top-[32%] h-72 w-72 rounded-full bg-blue-100/30 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.024] [background-image:linear-gradient(#4f46e5_1px,transparent_1px),linear-gradient(to_right,#4f46e5_1px,transparent_1px)] [background-size:68px_68px]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/70 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionTitle
          label="ABOUT ME"
          title="Always learning and"
          highlight="ready to help."
          subtitle="Get to know how I work and what I am learning."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9"
        >
          {/* Full-width category control */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/90 bg-white/85 p-3 shadow-[0_20px_55px_rgba(30,64,175,0.09)] ring-1 ring-slate-100 backdrop-blur-xl sm:p-4">
            <div className="pointer-events-none absolute -left-16 -top-24 h-52 w-52 rounded-full bg-indigo-200/45 blur-[65px]" />
            <div className="pointer-events-none absolute -right-16 -bottom-24 h-52 w-52 rounded-full bg-cyan-200/40 blur-[65px]" />
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
                    className={`group relative isolate flex min-h-[86px] items-center gap-3.5 overflow-hidden rounded-[1.35rem] border px-4 py-3 text-left transition-colors duration-200 ${
                      isActive
                        ? "border-slate-900 text-white shadow-[0_16px_34px_rgba(15,23,42,0.2)]"
                        : "border-slate-100 bg-slate-50/80 text-slate-700 hover:border-indigo-100 hover:bg-white hover:shadow-[0_12px_28px_rgba(79,70,229,0.08)]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="about-category-background"
                        className="absolute inset-0 -z-10 rounded-[1.35rem] bg-slate-950"
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}

                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.9rem] border transition-all duration-200 group-hover:scale-105 ${
                        isActive
                          ? "border-white/10 bg-white/[0.08] text-cyan-300"
                          : "border-white bg-white text-indigo-600 shadow-[0_7px_18px_rgba(15,23,42,0.07)]"
                      }`}
                    >
                      <Icon size={22} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-[9px] font-black uppercase tracking-[0.18em] ${
                          isActive ? "text-cyan-300" : "text-slate-400"
                        }`}
                      >
                        {tab.eyebrow}
                      </span>
                      <span className="mt-1.5 block text-[15px] font-black tracking-[-0.02em]">
                        {tab.label}
                      </span>
                    </span>

                    <span
                      className={`self-start rounded-full px-2 py-1 font-mono text-[10px] font-black ${
                        isActive
                          ? "bg-white/[0.07] text-white/45"
                          : "bg-white text-slate-300 shadow-sm"
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
            <div className="relative min-h-[350px] overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-[0_28px_75px_rgba(15,23,42,0.2)] sm:p-7 lg:min-h-[370px]">
              <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-[85px]" />
              <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[80px]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(to_right,#ffffff_1px,transparent_1px)] [background-size:44px_44px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-[68%] bg-indigo-600" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-1 w-[32%] bg-cyan-400" />

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${activeTab}-${selectedItem.title}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
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
                          className={`h-1.5 rounded-full transition-all duration-200 ${
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
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white/90 p-5 shadow-[0_24px_65px_rgba(30,64,175,0.1)] ring-1 ring-slate-100 backdrop-blur-xl">
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-100/70 blur-[65px]" />

              <div className="relative flex items-end justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-600">
                    Item Directory
                  </p>
                  <h3 className="mt-2 text-xl font-black tracking-[-0.03em] text-slate-950">
                    {activeGroup.label}
                  </h3>
                </div>

                <span className="rounded-full border border-slate-100 bg-slate-50 px-3 py-1.5 text-[10px] font-black text-slate-500">
                  {activeGroup.items.length} items
                </span>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`relative mt-4 grid gap-2.5 ${
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
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.985 }}
                        transition={{ duration: 0.16, ease: "easeOut" }}
                        aria-pressed={isSelected}
                        className={`group relative isolate flex min-h-[76px] items-center gap-3 overflow-hidden rounded-2xl border p-3 text-left transition-colors duration-200 ${
                          isSelected
                            ? "border-indigo-200 text-indigo-800 shadow-[0_12px_26px_rgba(79,70,229,0.11)]"
                            : "border-slate-100 bg-slate-50/75 text-slate-700 hover:border-indigo-100 hover:bg-white"
                        }`}
                      >
                        {isSelected && (
                          <motion.span
                            layoutId="about-selected-item"
                            className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50"
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          />
                        )}

                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-white shadow-sm transition-all duration-200 group-hover:scale-105 ${
                            isSelected
                              ? "border-indigo-100 text-indigo-600"
                              : "border-white text-slate-500"
                          }`}
                        >
                          <Icon size={21} />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-black leading-snug">
                            {item.title}
                          </span>
                          <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                            View details
                          </span>
                        </span>

                        <span
                          className={`h-2 w-2 shrink-0 rounded-full transition-all duration-200 ${
                            isSelected
                              ? "bg-cyan-400 shadow-[0_0_0_4px_rgba(34,211,238,0.12)]"
                              : "bg-slate-200"
                          }`}
                        />
                      </motion.button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
