import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentText,
  HiOutlineMagnifyingGlass,
  HiOutlineTableCells,
} from "react-icons/hi2";

import SectionTitle from "../../components/ui/SectionTitle";

const services = [
  {
    icon: HiOutlineClipboardDocumentList,
    title: "Virtual Assistance",
    description:
      "Administrative support focused on organizing digital files through Google Drive and structured filing practices.",
    gradient: "from-blue-500 to-indigo-600",
    iconStyle: "bg-blue-400/10 text-blue-300",
    glow: "bg-blue-500/20",
    tasks: [
      "Google Drive management",
      "Structured filing practices",
      "Digital file organization",
      "Accessible document records",
    ],
  },
  {
    icon: HiOutlineTableCells,
    title: "Data Entry",
    description:
      "Organizing and reviewing spreadsheet information in Microsoft Excel with accuracy, consistency, and attention to detail.",
    gradient: "from-indigo-500 to-violet-600",
    iconStyle: "bg-indigo-400/10 text-indigo-300",
    glow: "bg-indigo-500/20",
    tasks: [
      "Microsoft Excel",
      "Organized spreadsheet records",
      "Accuracy and consistency checks",
      "Careful error review",
    ],
  },
  {
    icon: HiOutlineMagnifyingGlass,
    title: "Internet Research",
    description:
      "Conducting internet research to gather reliable information and strengthen the accuracy of documentation.",
    gradient: "from-cyan-500 to-blue-600",
    iconStyle: "bg-cyan-400/10 text-cyan-300",
    glow: "bg-cyan-500/20",
    tasks: [
      "Reliable information gathering",
      "Online source review",
      "Organized research findings",
      "Documentation support",
    ],
  },
  {
    icon: HiOutlineDocumentText,
    title: "Document Formatting",
    description:
      "Preparing and formatting professional documents with Microsoft Word, Google Docs, Excel, and PowerPoint while maintaining accuracy and consistency.",
    gradient: "from-violet-500 to-indigo-600",
    iconStyle: "bg-violet-400/10 text-violet-300",
    glow: "bg-violet-500/20",
    tasks: [
      "Microsoft Word",
      "Google Docs",
      "Microsoft Excel",
      "Microsoft PowerPoint",
    ],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const selectedService = services[activeService];
  const SelectedIcon = selectedService.icon;

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#091721] pb-16 pt-4"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-16 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/[0.08] blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(to_right,#ffffff_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0a141f] to-transparent sm:h-36" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#0d141f] sm:h-36" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionTitle
          label="SERVICES"
          title="How I can"
          highlight="help"
          subtitle="Practical support that keeps everyday work clear, organized, and easier to manage."
          compact
          dark
        />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 grid items-stretch gap-5 lg:grid-cols-[1.04fr_0.96fr]"
        >
          {/* Active service panel */}
          <div className="relative min-h-[430px] overflow-hidden rounded-[2.2rem] border border-white/[0.08] bg-[#06131d] p-6 text-white shadow-[0_28px_75px_rgba(0,0,0,0.28)] sm:h-[470px] sm:p-8 lg:h-[460px]">
            <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-indigo-500/25 blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-36 -left-20 h-80 w-80 rounded-full bg-cyan-500/15 blur-[90px]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(to_right,#ffffff_1px,transparent_1px)] [background-size:44px_44px]" />

            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={selectedService.title}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex h-full min-h-[382px] flex-col sm:min-h-0"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-cyan-300 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                    <SelectedIcon size={27} />
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 font-mono text-[10px] font-black tracking-[0.14em] text-white/45">
                    SERVICE {String(activeService + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="my-auto py-7">
                  <h3 className="max-w-xl text-3xl font-black leading-[1.04] tracking-[-0.05em] sm:text-4xl">
                    {selectedService.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/70 sm:text-base">
                    {selectedService.description}
                  </p>

                  <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
                    {selectedService.tasks.map((task) => (
                      <div
                        key={task}
                        className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.055] px-3.5 py-3 text-xs font-semibold text-white/80"
                      >
                        <HiOutlineCheckCircle
                          size={18}
                          className="shrink-0 text-cyan-300"
                        />
                        {task}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-1.5 border-t border-white/10 pt-5" aria-hidden="true">
                  {services.map((service, index) => (
                    <span
                      key={service.title}
                      className={`h-1.5 rounded-full transition-[width,background-color] duration-200 ${
                        activeService === index
                          ? "w-8 bg-gradient-to-r from-indigo-500 to-cyan-400"
                          : "w-1.5 bg-white/15"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-[64%] bg-indigo-500" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-1 w-[36%] bg-cyan-400" />
          </div>

          {/* Interactive service selector */}
          <div className="grid gap-3.5 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === index;

              return (
                <motion.button
                  key={service.title}
                  type="button"
                  onClick={() => setActiveService(index)}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  aria-pressed={isActive}
                  className={`group relative isolate min-h-[205px] cursor-pointer overflow-hidden rounded-[1.8rem] border p-5 text-left outline-none transition-[border-color,box-shadow] duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#091721] sm:p-6 ${
                    isActive
                      ? "border-cyan-400/45 text-slate-50 shadow-[0_22px_52px_rgba(6,182,212,0.12)] ring-4 ring-cyan-400/[0.08]"
                      : "border-white/[0.08] bg-[#101e2a]/90 text-slate-200 shadow-[0_12px_32px_rgba(0,0,0,0.18)] hover:border-cyan-400/25 hover:shadow-[0_18px_42px_rgba(6,182,212,0.1)]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 -z-10 rounded-[1.8rem] bg-gradient-to-br from-blue-500/20 via-[#111c2b] to-cyan-500/10 transition-[opacity,transform] duration-200 ease-out ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-[0.985] opacity-0"
                    }`}
                  />

                  <div
                    className={`pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full ${service.glow} opacity-0 blur-[55px] transition-opacity duration-200 group-hover:opacity-70 ${
                      isActive ? "opacity-60" : ""
                    }`}
                  />

                  <div className="relative flex h-full min-h-[163px] flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-[0.9rem] border border-white/10 ${service.iconStyle} shadow-[0_8px_20px_rgba(0,0,0,0.16)] transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none`}
                      >
                        <Icon size={21} />
                      </span>

                      <span
                        className={`rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] transition-[color,background-color,border-color,box-shadow] duration-200 ${
                          isActive
                            ? "bg-indigo-600 text-white shadow-[0_6px_16px_rgba(79,70,229,0.22)]"
                            : "border border-white/10 bg-white/[0.05] text-slate-500"
                        }`}
                      >
                        {isActive
                          ? "Active"
                          : String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-auto pt-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none">
                      <h3 className="text-base font-black tracking-[-0.02em] sm:text-lg">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs leading-5 text-slate-400">
                        {service.tasks[0]}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span
                        className={`block h-1.5 rounded-full bg-gradient-to-r ${service.gradient} transition-[width] duration-200 ${
                          isActive ? "w-12" : "w-7 group-hover:w-10"
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={`text-[9px] font-black uppercase tracking-[0.16em] transition-colors duration-200 ${
                          isActive
                            ? "text-cyan-300"
                            : "text-slate-500 group-hover:text-cyan-300"
                        }`}
                      >
                        {isActive ? "Selected" : "View"}
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
