import { FaArrowUp, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

import portfolioData from "../../data/portfolioData";

const footerLinks = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Services", target: "services" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Education", target: "education" },
  { label: "Contact", target: "contact" },
];

export default function Footer() {
  const { personal, socialLinks } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t border-slate-800 bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />

      {/* Background decoration only */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-52 h-[420px] w-[420px] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-[-16rem] h-[470px] w-[470px] rounded-full bg-cyan-500/15 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#94a3b8_1px,transparent_1px),linear-gradient(to_right,#94a3b8_1px,transparent_1px)] [background-size:58px_58px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 py-9 sm:px-8 lg:px-10 lg:py-10">
        {/* Compact footer navigation */}
        <div className="grid rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.055] via-white/[0.025] to-cyan-400/[0.035] p-5 shadow-[0_20px_55px_rgba(0,0,0,0.16)] sm:p-6 lg:grid-cols-[minmax(240px,1fr)_minmax(0,2fr)_minmax(150px,0.55fr)]">
          <div className="flex select-text items-center justify-start gap-3 border-b border-white/[0.08] pb-5 lg:border-b-0 lg:pb-0 lg:pr-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-sm font-black tracking-tight text-white shadow-[0_12px_28px_rgba(59,130,246,0.24)]">
              DAM
            </span>

            <div>
              <h3 className="max-w-[270px] text-base font-black leading-tight tracking-[-0.025em] text-white">
                {personal.name}
              </h3>
              <span className="mt-1 flex items-center justify-start gap-2 text-[9px] font-black uppercase tracking-[0.18em] text-slate-500">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open to opportunities
              </span>
            </div>
          </div>

          <nav
            aria-label="Footer navigation"
            className="border-b border-white/[0.08] py-5 lg:flex lg:items-center lg:border-b-0 lg:border-l lg:px-3 lg:py-0"
          >
            <div className="flex select-text flex-wrap items-center justify-start gap-1 rounded-2xl border border-white/[0.07] bg-slate-950/35 p-1.5 lg:w-full lg:flex-nowrap lg:justify-center lg:gap-1.5">
              {footerLinks.map((item) => (
                <a
                  key={item.target}
                  href={`#${item.target}`}
                  className="group relative isolate cursor-pointer overflow-visible rounded-xl px-3 py-2.5 text-xs font-bold text-slate-400 transition-colors duration-200 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 lg:px-2.5"
                >
                  <span className="pointer-events-none absolute -inset-1 -z-20 rounded-xl bg-cyan-400/0 blur-lg transition-colors duration-300 group-hover:bg-cyan-400/15" />
                  <span className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-white/0 transition-colors duration-200 group-hover:bg-white/[0.065]" />
                  <span className="relative inline-block transition-transform duration-200 ease-out group-hover:scale-[1.04] motion-reduce:transform-none">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </nav>

          <div className="pt-5 lg:border-l lg:border-white/[0.08] lg:pl-7 lg:pt-0">
            <p className="text-center text-[9px] font-black uppercase tracking-[0.2em] text-slate-600">
              Connect
            </p>
            <div className="mt-3 flex items-center justify-start gap-3 lg:justify-end">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile"
              className="group relative isolate flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.055] text-slate-300 transition-[background-color,border-color,color,box-shadow] duration-150 ease-out hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-blue-300 hover:shadow-[0_12px_28px_rgba(59,130,246,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span className="pointer-events-none absolute -inset-2 -z-10 rounded-xl bg-blue-400/0 blur-xl transition-colors duration-300 group-hover:bg-blue-400/20" />
              <FaLinkedin
                size={19}
                className="transition-transform duration-200 ease-out group-hover:scale-110 motion-reduce:transform-none"
              />
            </a>

            <a
              href={socialLinks.upwork}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Upwork profile"
              className="group relative isolate flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.055] text-slate-300 transition-[background-color,border-color,color,box-shadow] duration-150 ease-out hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300 hover:shadow-[0_12px_28px_rgba(16,185,129,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <span className="pointer-events-none absolute -inset-2 -z-10 rounded-xl bg-emerald-400/0 blur-xl transition-colors duration-300 group-hover:bg-emerald-400/20" />
              <SiUpwork
                size={19}
                className="transition-transform duration-200 ease-out group-hover:scale-110 motion-reduce:transform-none"
              />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="group relative isolate flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-[0_10px_24px_rgba(37,99,235,0.2)] transition-shadow duration-150 ease-out hover:shadow-[0_14px_30px_rgba(37,99,235,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span className="pointer-events-none absolute -inset-2 -z-10 rounded-xl bg-blue-500/0 blur-xl transition-colors duration-300 group-hover:bg-blue-500/25" />
              <FaArrowUp
                size={16}
                className="transition-transform duration-200 ease-out group-hover:-translate-y-1 motion-reduce:transform-none"
              />
            </a>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5 text-left sm:flex-row sm:items-center sm:justify-between">
          <p className="select-text text-xs font-medium text-slate-400 sm:text-sm">
            &copy; {year} {personal.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-600">
            <span>{personal.location}</span>
            <span className="sm:border-l sm:border-white/10 sm:pl-6">
              {personal.timezone}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
