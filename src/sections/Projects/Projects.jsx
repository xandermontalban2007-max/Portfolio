import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { FaAward } from "react-icons/fa";
import {
  HiOutlineArrowTopRightOnSquare,
  HiOutlineChartBar,
  HiOutlineCheckBadge,
  HiOutlineDocumentText,
  HiOutlinePresentationChartBar,
  HiOutlineUserGroup,
  HiOutlineXMark,
} from "react-icons/hi2";

import SectionTitle from "../../components/ui/SectionTitle";

const researchProjects = [
  {
    id: "qualitative",
    number: "01",
    type: "Qualitative Study",
    schoolYear: "SY 2023\u20132024",
    title:
      "Navigating Challenges: The Commuting Experiences of Gulod Senior High School Students",
    shortTitle: "Student Commuting Experiences",
    team: "6-member research team",
    summary:
      "This study explored the daily commuting experiences of six Grade 11 and Grade 12 students. It looked at comfort, travel time, cost, safety, stress, and the effects of commuting on school life.",
    method:
      "The study used a qualitative phenomenological design. Data came from semi-structured interviews and follow-up questions, then the responses were reviewed through thematic analysis.",
    result:
      "Students had mixed experiences. Public transport was useful and affordable for some, while others faced crowded vehicles, heat, traffic, long waiting times, tiredness, and safety concerns.",
    role:
      "As team leader, I helped organize the research plan, interview questions, schedules, assigned tasks, documentation, analysis, writing, and presentation.",
    recognition: ["Presented and evaluated at Gulod Senior High School"],
    tools: ["Microsoft Word", "Microsoft PowerPoint", "Interview Guide", "Thematic Analysis"],
    paperUrl:
      "https://docs.google.com/document/d/19yz3E0ulsLfQg5nnt-HTTO5-dQ34yJFY/edit?usp=sharing",
    presentationUrl:
      "https://drive.google.com/file/d/1dNbJHhjFdpEHmjZ3pPqqBfTaGeW8U2U5/view?usp=sharing",
    presentationPreview:
      "https://drive.google.com/file/d/1dNbJHhjFdpEHmjZ3pPqqBfTaGeW8U2U5/preview",
    slideCount: 10,
    accent: "from-cyan-400 to-blue-600",
  },
  {
    id: "quantitative",
    number: "02",
    type: "Quantitative Study",
    schoolYear: "SY 2024\u20132025",
    title:
      "Optimizing Tools and Equipment Availability in Electrical Installation and Maintenance Laboratory in Gulod Senior High School",
    shortTitle: "Tools and Equipment Availability",
    team: "9-member research team",
    summary:
      "This study examined the availability and use of tools and equipment in the EIM laboratory. It also looked at the problems students faced while completing practical activities.",
    method:
      "The study used a descriptive quantitative design with 37 respondents. Data came from a validated survey and were analyzed using frequency, percentage, ranking, and weighted mean.",
    result:
      "Students generally used tools safely, but limited equipment, tool sharing, and difficulty using some tools caused delays. The findings became the basis for Project SORT.",
    role:
      "As team leader, I helped coordinate planning, task assignment, survey preparation, data gathering, analysis, paper checking, and presentation.",
    recognition: ["1st Best Research Paper", "Best Research Output"],
    tools: ["Microsoft Word", "Microsoft PowerPoint", "Survey", "Data Analysis"],
    paperUrl:
      "https://docs.google.com/document/d/1NEk3TejyZxWJDiG2T8ZYaPlcAy10NZ9a/edit?usp=sharing",
    presentationUrl:
      "https://drive.google.com/file/d/1UDBPZNffLMWUJXBiJkLm2-oKdfgU12LF/view?usp=sharing",
    presentationPreview:
      "https://drive.google.com/file/d/1UDBPZNffLMWUJXBiJkLm2-oKdfgU12LF/preview",
    slideCount: 14,
    accent: "from-indigo-500 to-violet-600",
  },
];

const additionalProjects = [
  {
    id: "work-immersion",
    number: "03",
    type: "Work Immersion",
    title: "Narrative Report on Work Immersion",
    shortTitle: "10-Day Work Immersion",
    meta: "Individual documentation · September 18–October 3, 2024",
    summary:
      "A day-by-day record of lighting, outlet, CCTV, inventory, tool-organization, and school-facility maintenance completed in a supervised EIM setting.",
    evidence: ["10 immersion days", "Daily photo records", "EIM maintenance work"],
    skills: [
      "Activity documentation",
      "Inventory organization",
      "Time management",
      "Problem solving",
    ],
    paperUrl:
      "https://docs.google.com/document/d/1NvEkLz8wAFHyrtHVM6qeeFLCTtau1Nb2/edit?usp=sharing&ouid=116372197746287471286&rtpof=true&sd=true",
    documentLabel: "Work immersion narrative",
    icon: HiOutlineDocumentText,
    accent: "from-blue-600 to-cyan-400",
    iconStyle: "bg-blue-400/10 text-blue-300",
  },
  {
    id: "project-bright",
    number: "04",
    type: "Academic Proposal",
    title: "Project BRIGHT",
    shortTitle: "Project BRIGHT",
    meta: "Collaborative proposal · October 2024 budget basis",
    summary:
      "A structured electrical-system improvement proposal covering objectives, materials, logistics, labor estimates, and phased implementation for four school buildings.",
    evidence: ["56 rooms", "₱4,909,700 estimate", "October 2024–September 2025"],
    skills: [
      "Budget tables",
      "Cost validation",
      "Phase scheduling",
      "Proposal formatting",
    ],
    paperUrl:
      "https://docs.google.com/document/d/13QJl5fndTIAOkmrY8IymupKhnmzhwAI9/edit?usp=sharing&ouid=116372197746287471286&rtpof=true&sd=true",
    documentLabel: "Academic proposal",
    icon: HiOutlineChartBar,
    accent: "from-violet-600 to-indigo-500",
    iconStyle: "bg-violet-400/10 text-violet-300",
  },
  {
    id: "outlet-inspection",
    number: "05",
    type: "Inspection Report",
    title: "Electrical Outlet Condition Report for Building C",
    shortTitle: "Electrical Outlet Condition Report",
    meta: "Collaborative academic report · November 2024",
    summary:
      "A room-by-room condition review supported by a five-item survey, with encoded responses, ranked results, and documented repair priorities.",
    evidence: ["10 respondents", "6 problem outlets", "3.46 composite mean"],
    skills: [
      "Survey encoding",
      "Frequency counting",
      "Weighted-mean tables",
      "Results checking",
    ],
    paperUrl:
      "https://docs.google.com/document/d/1GBOm0crvkZkt1bRVRQVQhiRdCSJXW8pR/edit?usp=sharing&ouid=116372197746287471286&rtpof=true&sd=true",
    documentLabel: "Inspection report",
    icon: HiOutlineCheckBadge,
    accent: "from-emerald-500 to-cyan-400",
    iconStyle: "bg-emerald-400/10 text-emerald-300",
  },
];

const detailTabs = [
  { id: "summary", label: "Summary", icon: HiOutlineDocumentText },
  { id: "method", label: "Method", icon: HiOutlineChartBar },
  { id: "result", label: "Result", icon: HiOutlineCheckBadge },
  { id: "role", label: "My Role", icon: HiOutlineUserGroup },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeDetail, setActiveDetail] = useState("summary");
  const [previewType, setPreviewType] = useState(null);
  const [previewProject, setPreviewProject] = useState(researchProjects[0]);
  const [previewReady, setPreviewReady] = useState(false);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);
  const previewOpen = previewType !== null && previewProject !== null;
  const project = researchProjects[activeProject];

  const openPreview = (type, selectedProject = project) => {
    previousFocusRef.current = document.activeElement;
    setPreviewReady(false);
    setPreviewProject(selectedProject);
    setPreviewType(type);
  };

  useEffect(() => {
    if (!previewOpen) {
      return undefined;
    }

    const oldOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setPreviewType(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, [previewOpen]);

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#0b1628] pb-20 pt-4"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.09] blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(to_right,#ffffff_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0e1326] to-transparent sm:h-36" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#11151c] sm:h-36" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionTitle
          label="PROJECTS"
          title="Projects and Research"
          subtitle="Research studies and technical documents completed during senior high school"
          compact
          dark
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="grid gap-4 lg:col-span-12 lg:grid-cols-2">
            {researchProjects.map((item, index) => {
              const isActive = activeProject === index;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveProject(index);
                    setActiveDetail("summary");
                  }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  aria-pressed={isActive}
                  className={`group relative h-full w-full cursor-pointer overflow-hidden rounded-[1.75rem] border p-5 text-left transition-[background-color,border-color,color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1628] sm:p-6 ${
                    isActive
                      ? "border-indigo-400/40 bg-[#070f20] text-white shadow-[0_20px_45px_rgba(0,0,0,0.24)]"
                      : "border-white/[0.08] bg-[#111d31]/90 text-slate-200 shadow-[0_14px_35px_rgba(0,0,0,0.18)] hover:border-indigo-400/25 hover:shadow-[0_18px_42px_rgba(79,70,229,0.12)]"
                  }`}
                >
                  <div
                    className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${item.accent}`}
                  />
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 scale-[0.985] opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover:scale-100 group-hover:opacity-100 motion-reduce:transform-none ${
                      isActive
                        ? "bg-gradient-to-br from-white/[0.07] via-transparent to-cyan-300/[0.06]"
                        : "bg-gradient-to-br from-indigo-500/15 via-transparent to-cyan-500/10"
                    }`}
                  />
                  <div className="relative flex h-full flex-col transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transform-none">
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`text-xs font-black tracking-[0.16em] ${
                          isActive ? "text-cyan-300" : "text-indigo-300"
                        }`}
                      >
                        {item.number}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] ${
                          isActive
                            ? "border border-white/10 bg-white/[0.08] text-blue-100"
                            : "border border-indigo-400/20 bg-indigo-400/[0.08] text-indigo-300"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>

                    <div className="py-5">
                      <h3 className="text-lg font-black leading-snug tracking-[-0.025em]">
                        {item.shortTitle}
                      </h3>
                      <p
                        className={`mt-3 text-xs font-semibold ${
                          isActive ? "text-blue-100/65" : "text-slate-400"
                        }`}
                      >
                        {item.schoolYear} &middot; {item.team}
                      </p>
                    </div>

                    <div className="flex items-center gap-2" aria-hidden="true">
                      <span
                        className={`h-1.5 rounded-full transition-[width,background-color] duration-200 ${
                          isActive
                            ? "w-10 bg-cyan-400"
                            : "w-5 bg-indigo-300 group-hover:w-10 group-hover:bg-indigo-500"
                        }`}
                      />
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                          isActive
                            ? "bg-indigo-400"
                            : "bg-slate-700 group-hover:bg-cyan-400"
                        }`}
                      />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <motion.article
            layout="size"
            layoutDependency={`${project.id}-${activeDetail}`}
            transition={{ layout: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
            className="origin-top transform-gpu overflow-hidden rounded-[2rem] border border-white/10 bg-[#111b2f] shadow-[0_24px_65px_rgba(0,0,0,0.24)] will-change-transform lg:col-span-12"
          >
            <div>
            <div className="relative overflow-hidden bg-[#070f20] p-6 text-white sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-indigo-500/20 blur-[70px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-2/3 bg-indigo-600" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-1 w-1/3 bg-cyan-400" />

              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative transform-gpu"
              >
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-cyan-300">
                      {project.type}
                    </span>
                    <span className="text-xs font-bold text-blue-100/60">
                      {project.schoolYear}
                    </span>
                  </div>

                  <h3 className="mt-5 max-w-4xl text-2xl font-black leading-tight tracking-[-0.035em] sm:text-3xl">
                    {project.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.recognition.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-xs font-bold text-blue-50"
                      >
                        <FaAward className="text-amber-400" />
                        {item}
                      </span>
                    ))}
                  </div>
              </motion.div>
            </div>

            <div className="border-b border-white/10 p-3 sm:px-6 sm:py-4">
              <div className="grid grid-cols-4 gap-1 rounded-2xl bg-black/15 p-1.5">
                {detailTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeDetail === tab.id;

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveDetail(tab.id)}
                      aria-pressed={isActive}
                      className={`group relative isolate flex items-center justify-center gap-2 rounded-xl px-2 py-2.5 text-[11px] font-extrabold transition-[background-color,color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#111b2f] sm:text-xs ${
                        isActive ? "text-white" : "text-slate-400 hover:bg-white/[0.055] hover:text-indigo-300 hover:shadow-[0_6px_18px_rgba(79,70,229,0.11)]"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute inset-0 -z-10 rounded-xl bg-[#070f20] transition-[opacity,transform] duration-200 ease-out ${
                          isActive
                            ? "scale-100 opacity-100"
                            : "scale-[0.97] opacity-0"
                        }`}
                      />
                      <Icon
                        size={16}
                        className="hidden transition-transform duration-200 ease-out group-hover:scale-110 motion-reduce:transform-none sm:block"
                      />
                      <span className="transition-transform duration-200 ease-out group-hover:scale-[1.03] motion-reduce:transform-none">
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="relative min-h-[118px]">
                <motion.div
                  key={`${project.id}-${activeDetail}`}
                  initial={{ opacity: 0, y: 2 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="transform-gpu"
                >
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-300">
                      {detailTabs.find((tab) => tab.id === activeDetail)?.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                      {project[activeDetail]}
                    </p>
                </motion.div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-[10px] font-bold text-slate-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => openPreview("document")}
                  className="group flex items-center gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.065] p-4 text-left transition-[background-color,border-color,box-shadow] duration-200 hover:border-cyan-400/35 hover:bg-white/[0.055] hover:shadow-[0_12px_30px_rgba(8,145,178,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111b2f]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.065] text-cyan-300 shadow-sm transition-transform duration-200 ease-out group-hover:scale-105 motion-reduce:transform-none">
                    <HiOutlineDocumentText size={22} />
                  </span>
                  <span className="min-w-0 flex-1 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none">
                    <span className="block text-sm font-black text-slate-100">
                      Research Profile
                    </span>
                    <span className="mt-0.5 block text-[11px] text-slate-400">
                      Open the one-page summary
                    </span>
                  </span>
                  <HiOutlineArrowTopRightOnSquare className="text-cyan-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
                </button>

                <button
                  type="button"
                  onClick={() => openPreview("presentation")}
                  className="group flex items-center gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.065] p-4 text-left transition-[background-color,border-color,box-shadow] duration-200 hover:border-cyan-400/35 hover:bg-white/[0.055] hover:shadow-[0_12px_30px_rgba(8,145,178,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111b2f]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.065] text-cyan-300 shadow-sm transition-transform duration-200 ease-out group-hover:scale-105 motion-reduce:transform-none">
                    <HiOutlinePresentationChartBar size={22} />
                  </span>
                  <span className="min-w-0 flex-1 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none">
                    <span className="block text-sm font-black text-slate-100">
                      Presentation Preview
                    </span>
                    <span className="mt-0.5 block text-[11px] text-slate-400">
                      View all {project.slideCount} slides
                    </span>
                  </span>
                  <HiOutlineArrowTopRightOnSquare className="text-cyan-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
                </button>
              </div>
            </div>
            </div>
          </motion.article>
        </div>

        <div className="mt-12 border-t border-white/10 pt-7">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(280px,0.55fr)] sm:items-center sm:gap-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300">
                Practical documentation
              </p>
              <h3 className="mt-1.5 text-xl font-black tracking-[-0.035em] text-slate-50 sm:text-2xl">
                Technical and administrative work
              </h3>
            </div>
            <p className="border-t border-white/10 pt-3 text-sm leading-6 text-slate-400 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 sm:text-right">
              Immersion records, proposal planning, and inspection data prepared as clear, reviewable documents.
            </p>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            {additionalProjects.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.id}
                  className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#101b2e] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.2)]"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`}
                    aria-hidden="true"
                  />

                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.iconStyle}`}
                    >
                      <Icon size={22} />
                    </span>
                    <div className="text-right">
                      <span className="block text-[10px] font-black tracking-[0.18em] text-slate-500">
                        {item.number}
                      </span>
                      <span className="mt-1 block text-[9px] font-black uppercase tracking-[0.14em] text-indigo-300">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <h4 className="mt-5 text-xl font-black leading-tight tracking-[-0.03em] text-slate-50">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[11px] font-bold leading-5 text-slate-500">
                    {item.meta}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {item.summary}
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {item.evidence.map((detail) => (
                      <span
                        key={detail}
                        className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-[10px] font-extrabold leading-4 text-slate-400"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/[0.08] pt-5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-400"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => openPreview("document", item)}
                    className="group mt-6 flex w-full items-center justify-between rounded-2xl bg-[#070f20] px-4 py-3.5 text-left text-xs font-black text-white transition-[background-color,box-shadow] duration-200 hover:bg-indigo-600 hover:shadow-[0_12px_30px_rgba(79,70,229,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101b2e]"
                  >
                    <span className="inline-flex items-center gap-2 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none">
                      <HiOutlineDocumentText size={18} />
                      Preview document
                    </span>
                    <HiOutlineArrowTopRightOnSquare
                      size={17}
                      className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                    />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {previewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[80] flex items-start justify-center bg-indigo-950/30 p-3 backdrop-blur-md sm:p-5"
            onClick={() => setPreviewType(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${previewProject.shortTitle} ${
                  previewType === "document" ? "document" : "presentation"
                } preview`}
              initial={{ opacity: 0, y: 16, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onAnimationComplete={() => setPreviewReady(true)}
              onClick={(event) => event.stopPropagation()}
              className="flex h-[calc(100dvh-1.5rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0e1728] shadow-[0_30px_100px_rgba(0,0,0,0.42)] sm:h-[calc(100dvh-2.5rem)]"
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-indigo-300">
                    {previewType === "document"
                      ? "Document Preview"
                      : "Presentation Preview"}
                  </p>
                  <h3 className="mt-1 truncate text-base font-black text-slate-100 sm:text-lg">
                    {previewProject.shortTitle}
                  </h3>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setPreviewType(null)}
                  className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.055] text-slate-300 transition-[background-color,color,box-shadow] duration-200 hover:bg-white/10 hover:text-white hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e1728]"
                  aria-label={`Close ${
                    previewType === "document" ? "document" : "presentation"
                  } preview`}
                >
                  <HiOutlineXMark
                    size={22}
                    className="transition-transform duration-200 ease-out group-hover:rotate-6 group-hover:scale-110 motion-reduce:transform-none"
                  />
                </button>
              </div>

              <div
                className="min-h-0 flex-1 overflow-auto bg-slate-100"
              >
                {previewReady ? (
                  <iframe
                    src={
                      previewType === "document"
                        ? previewProject.paperUrl.replace(
                            /\/edit(?:\?.*)?$/,
                            "/preview",
                          )
                        : previewProject.presentationPreview
                    }
                    title={`${previewProject.shortTitle} ${
                      previewType === "document"
                        ? "document"
                        : "presentation"
                    }`}
                    className="block h-full w-full border-0 bg-slate-100"
                    allow="autoplay"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center" role="status">
                    <span className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-indigo-600 motion-reduce:animate-none" />
                    <span className="sr-only">Loading preview</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3 sm:px-6">
                <span className="hidden text-xs font-semibold text-slate-400 sm:block">
                  {previewType === "document"
                    ? previewProject.documentLabel || "Research document"
                    : `${previewProject.slideCount} slides`}
                </span>

                <a
                  href={
                    previewType === "document"
                      ? previewProject.paperUrl
                      : previewProject.presentationUrl
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group ml-auto inline-flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-black text-indigo-300 transition-[background-color,color,box-shadow] duration-200 hover:bg-indigo-400/10 hover:text-indigo-200 hover:shadow-[0_5px_16px_rgba(79,70,229,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  {previewType === "document"
                    ? "Open in Google Docs"
                    : "Open in Google Drive"}
                  <HiOutlineArrowTopRightOnSquare
                    size={16}
                    className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                  />
                </a>
              </div>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  );
}
