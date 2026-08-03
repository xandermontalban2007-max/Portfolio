import { FaArrowUp, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { Link } from "react-scroll";

import portfolioData from "../../data/portfolioData";

const footerLinks = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Services", target: "services" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

export default function Footer() {
  const { personal, socialLinks } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t border-slate-800 bg-slate-950 text-white">
      {/* Background decoration only */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-52 h-[420px] w-[420px] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-[-16rem] h-[470px] w-[470px] rounded-full bg-cyan-500/15 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#94a3b8_1px,transparent_1px),linear-gradient(to_right,#94a3b8_1px,transparent_1px)] [background-size:58px_58px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 py-11 sm:px-8 lg:px-10 lg:py-12">
        {/* Compact footer navigation */}
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex select-text items-center justify-center gap-3 lg:justify-start">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-sm font-black tracking-tight text-white shadow-[0_12px_28px_rgba(59,130,246,0.24)]">
              DAM
            </span>

            <div>
              <h3 className="text-base font-black tracking-[-0.025em] text-white sm:text-lg">
                {personal.name}
              </h3>
              <span className="mt-1 flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-[0.18em] text-slate-500 lg:justify-start">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open to opportunities
              </span>
            </div>
          </div>

          <nav
            aria-label="Footer navigation"
            className="mx-auto flex select-text flex-wrap items-center justify-center gap-1 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-1.5"
          >
            {footerLinks.map((item) => (
              <Link
                key={item.target}
                to={item.target}
                smooth
                duration={500}
                offset={-90}
                className="group relative isolate cursor-pointer overflow-visible rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-400 transition-colors duration-200 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span className="pointer-events-none absolute -inset-1 -z-20 rounded-xl bg-cyan-400/0 blur-lg transition-colors duration-300 group-hover:bg-cyan-400/15" />
                <span className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-white/0 transition-colors duration-200 group-hover:bg-white/[0.065]" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-3 lg:justify-end">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile"
              className="group relative isolate flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.055] text-slate-300 transition-all duration-200 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-blue-300 hover:shadow-[0_12px_28px_rgba(59,130,246,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span className="pointer-events-none absolute -inset-2 -z-10 rounded-xl bg-blue-400/0 blur-xl transition-colors duration-300 group-hover:bg-blue-400/20" />
              <FaLinkedin size={19} />
            </a>

            <a
              href={socialLinks.upwork}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Upwork profile"
              className="group relative isolate flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.055] text-slate-300 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300 hover:shadow-[0_12px_28px_rgba(16,185,129,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <span className="pointer-events-none absolute -inset-2 -z-10 rounded-xl bg-emerald-400/0 blur-xl transition-colors duration-300 group-hover:bg-emerald-400/20" />
              <SiUpwork size={19} />
            </a>

            <Link
              to="home"
              smooth
              duration={600}
              aria-label="Back to top"
              className="group relative isolate flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-[0_10px_24px_rgba(37,99,235,0.2)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(37,99,235,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span className="pointer-events-none absolute -inset-2 -z-10 rounded-xl bg-blue-500/0 blur-xl transition-colors duration-300 group-hover:bg-blue-500/25" />
              <FaArrowUp
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="select-text text-xs font-medium text-slate-500 sm:text-sm">
            &copy; {year} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
