import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
      "This study explored the daily commuting experiences of six Grade 11 and Grade 12 students. It looked at comfort, travel time, cost, safety, stress, and the effects of commuting on school life",
    method:
      "The study used a qualitative phenomenological design. Data came from semi-structured interviews and follow-up questions, then the responses were reviewed through thematic analysis",
    result:
      "Students had mixed experiences. Public transport was useful and affordable for some, while others faced crowded vehicles, heat, traffic, long waiting times, tiredness, and safety concerns",
    role:
      "As team leader, I helped organize the research plan, interview questions, schedules, assigned tasks, documentation, analysis, writing, and presentation",
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
      "This study examined the availability and use of tools and equipment in the EIM laboratory. It also looked at the problems students faced while completing practical activities",
    method:
      "The study used a descriptive quantitative design with 37 respondents. Data came from a validated survey and were analyzed using frequency, percentage, ranking, and weighted mean",
    result:
      "Students generally used tools safely, but limited equipment, tool sharing, and difficulty using some tools caused delays. The findings became the basis for Project SORT",
    role:
      "As team leader, I helped coordinate planning, task assignment, survey preparation, data gathering, analysis, paper checking, and presentation",
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
    iconStyle: "bg-blue-50 text-blue-600",
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
    iconStyle: "bg-violet-50 text-violet-600",
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
    iconStyle: "bg-emerald-50 text-emerald-600",
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
  const [panelHeight, setPanelHeight] = useState(null);
  const panelContentRef = useRef(null);
  const previewOpen = previewType !== null && previewProject !== null;
  const project = researchProjects[activeProject];

  const openPreview = (type, selectedProject = project) => {
    setPreviewProject(selectedProject);
    setPreviewType(type);
  };

  useLayoutEffect(() => {
    const panelContent = panelContentRef.current;

    if (!panelContent) {
      return undefined;
    }

    let animationFrame;

    const updatePanelHeight = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setPanelHeight(
          Math.ceil(panelContent.getBoundingClientRect().height) + 2,
        );
      });
    };

    updatePanelHeight();

    const resizeObserver = new ResizeObserver(updatePanelHeight);
    resizeObserver.observe(panelContent);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, []);

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

    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewOpen]);

  return (
    <section
      id="projects"
      className="relative isolate scroll-mt-24 overflow-hidden bg-white py-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-100/45 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-100/45 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(#4f46e5_1px,transparent_1px),linear-gradient(to_right,#4f46e5_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionTitle
          label="PROJECTS"
          title="Projects and Research"
          subtitle="Research studies and technical documents completed during senior high school"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
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
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.985 }}
                  aria-pressed={isActive}
                  className={`group relative w-full overflow-hidden rounded-[1.75rem] border p-5 text-left transition-colors duration-200 sm:p-6 ${
                    isActive
                      ? "border-indigo-200 bg-slate-950 text-white shadow-[0_20px_45px_rgba(15,23,42,0.2)]"
                      : "border-slate-100 bg-white/90 text-slate-900 shadow-[0_14px_35px_rgba(30,64,175,0.07)] hover:border-indigo-100"
                  }`}
                >
                  <div
                    className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${item.accent}`}
                  />
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`text-xs font-black tracking-[0.16em] ${
                        isActive ? "text-cyan-300" : "text-indigo-600"
                      }`}
                    >
                      {item.number}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] ${
                        isActive
                          ? "border border-white/10 bg-white/[0.08] text-blue-100"
                          : "border border-indigo-100 bg-indigo-50 text-indigo-600"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-black leading-snug tracking-[-0.025em]">
                    {item.shortTitle}
                  </h3>
                  <p
                    className={`mt-3 text-xs font-semibold ${
                      isActive ? "text-blue-100/65" : "text-slate-500"
                    }`}
                  >
                    {item.schoolYear} &middot; {item.team}
                  </p>

                  <div className="mt-5 flex items-center gap-2" aria-hidden="true">
                    <span
                      className={`h-1.5 rounded-full transition-all duration-200 ${
                        isActive ? "w-10 bg-cyan-400" : "w-5 bg-indigo-300"
                      }`}
                    />
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isActive ? "bg-indigo-400" : "bg-slate-200"
                      }`}
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>

          <motion.article
            initial={false}
            animate={panelHeight ? { height: panelHeight } : undefined}
            transition={{
              height: {
                type: "tween",
                duration: 0.5,
                ease: [0.33, 1, 0.68, 1],
              },
            }}
            style={{
              willChange: "height",
              contain: "layout",
            }}
            className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-[0_24px_65px_rgba(30,64,175,0.11)] lg:col-span-8"
          >
            <div ref={panelContentRef}>
            <div className="relative overflow-hidden bg-slate-950 p-6 text-white sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-indigo-500/20 blur-[70px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-2/3 bg-indigo-600" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-1 w-1/3 bg-cyan-400" />

              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.12, ease: "easeOut" },
                  }}
                  transition={{
                    duration: 0.28,
                    delay: 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ willChange: "opacity, transform" }}
                  className="relative"
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

                  <motion.div
                    layout="position"
                    className="mt-5 flex flex-wrap gap-2"
                    transition={{
                      layout: {
                        duration: 0.22,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                  >
                    {project.recognition.map((item, index) => (
                      <motion.span
                        key={item}
                        layout
                        initial={{ opacity: 0, y: 4, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.28,
                          delay: 0.045 + index * 0.055,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{ willChange: "opacity, transform" }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-xs font-bold text-blue-50"
                      >
                        <FaAward className="text-amber-400" />
                        {item}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="border-b border-slate-100 p-3 sm:px-6 sm:py-4">
              <div className="grid grid-cols-4 gap-1 rounded-2xl bg-slate-50 p-1.5">
                {detailTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeDetail === tab.id;

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveDetail(tab.id)}
                      aria-pressed={isActive}
                      className={`relative isolate flex items-center justify-center gap-2 rounded-xl px-2 py-2.5 text-[11px] font-extrabold transition-colors duration-150 sm:text-xs ${
                        isActive ? "text-white" : "text-slate-500 hover:text-indigo-600"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="research-active-detail"
                          className="absolute inset-0 -z-10 rounded-xl bg-slate-950"
                          transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                        />
                      )}
                      <Icon size={16} className="hidden sm:block" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="min-h-[118px]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={`${project.id}-${activeDetail}`}
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.1, ease: "easeOut" },
                    }}
                    transition={{
                      duration: 0.2,
                      delay: 0.035,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ willChange: "opacity, transform" }}
                  >
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-600">
                      {detailTabs.find((tab) => tab.id === activeDetail)?.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {project[activeDetail]}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-100 bg-slate-50 px-3 py-2 text-[10px] font-bold text-slate-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => openPreview("document")}
                  className="group flex items-center gap-4 rounded-2xl border border-indigo-100 bg-indigo-50/65 p-4 text-left transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                    <HiOutlineDocumentText size={22} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-black text-slate-900">
                      Research Profile
                    </span>
                    <span className="mt-0.5 block text-[11px] text-slate-500">
                      Open the one-page summary
                    </span>
                  </span>
                  <HiOutlineArrowTopRightOnSquare className="text-indigo-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  type="button"
                  onClick={() => openPreview("presentation")}
                  className="group flex items-center gap-4 rounded-2xl border border-cyan-100 bg-cyan-50/65 p-4 text-left transition duration-200 hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-cyan-700 shadow-sm">
                    <HiOutlinePresentationChartBar size={22} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-black text-slate-900">
                      Presentation Preview
                    </span>
                    <span className="mt-0.5 block text-[11px] text-slate-500">
                      View all {project.slideCount} slides
                    </span>
                  </span>
                  <span className="text-lg text-cyan-600 transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </button>
              </div>
            </div>
            </div>
          </motion.article>
        </div>

        <div className="mt-16 border-t border-slate-200/80 pt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">
                Practical documentation
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-[-0.035em] text-slate-950 sm:text-3xl">
                Technical and administrative work
              </h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-right">
              Immersion records, proposal planning, and inspection data prepared as clear, reviewable documents.
            </p>
          </div>

          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {additionalProjects.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-[0_18px_45px_rgba(30,64,175,0.08)]"
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
                      <span className="block text-[10px] font-black tracking-[0.18em] text-slate-300">
                        {item.number}
                      </span>
                      <span className="mt-1 block text-[9px] font-black uppercase tracking-[0.14em] text-indigo-600">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <h4 className="mt-5 text-xl font-black leading-tight tracking-[-0.03em] text-slate-950">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[11px] font-bold leading-5 text-slate-400">
                    {item.meta}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {item.summary}
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {item.evidence.map((detail) => (
                      <span
                        key={detail}
                        className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-[10px] font-extrabold leading-4 text-slate-600"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-100 pt-5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-500"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => openPreview("document", item)}
                    className="mt-6 flex w-full items-center justify-between rounded-2xl bg-slate-950 px-4 py-3.5 text-left text-xs font-black text-white transition duration-200 hover:bg-indigo-600"
                  >
                    <span className="inline-flex items-center gap-2">
                      <HiOutlineDocumentText size={18} />
                      Preview document
                    </span>
                    <HiOutlineArrowTopRightOnSquare size={17} />
                  </button>
                </motion.article>
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
            transition={{ duration: 0.12, ease: "easeOut" }}
            className="fixed inset-0 z-[80] flex items-start justify-center bg-slate-950/75 p-3 backdrop-blur-[2px] sm:p-5"
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
              transition={{ duration: 0.16, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              className="flex h-[calc(100dvh-1.5rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[1.75rem] border border-white/15 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:h-[calc(100dvh-2.5rem)]"
            >
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-4 sm:px-6">
                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-indigo-600">
                    {previewType === "document"
                      ? "Document Preview"
                      : "Presentation Preview"}
                  </p>
                  <h3 className="mt-1 truncate text-base font-black text-slate-900 sm:text-lg">
                    {previewProject.shortTitle}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewType(null)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                  aria-label={`Close ${
                    previewType === "document" ? "document" : "presentation"
                  } preview`}
                >
                  <HiOutlineXMark size={22} />
                </button>
              </div>

              <div
                className="min-h-0 flex-1 overflow-auto bg-slate-100"
              >
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
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-slate-100 px-4 py-3 sm:px-6">
                <span className="hidden text-xs font-semibold text-slate-500 sm:block">
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
                  className="ml-auto inline-flex items-center gap-2 text-xs font-black text-indigo-600 transition hover:text-indigo-800"
                >
                  {previewType === "document"
                    ? "Open in Google Docs"
                    : "Open in Google Drive"}
                  <HiOutlineArrowTopRightOnSquare size={16} />
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
