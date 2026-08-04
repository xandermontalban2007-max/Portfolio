import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { MdAccessTime, MdEmail, MdLocationOn } from "react-icons/md";

import SectionTitle from "../../components/ui/SectionTitle";
import portfolioData from "../../data/portfolioData";

export default function Contact() {
  const { personal, socialLinks } = portfolioData;
  const contactItems = [
    {
      label: "Location",
      value: personal.location,
      icon: MdLocationOn,
      iconStyle: "bg-indigo-400/10 text-indigo-300",
    },
    {
      label: "Timezone",
      value: personal.timezone,
      icon: MdAccessTime,
      iconStyle: "bg-blue-400/10 text-blue-300",
    },
    {
      label: "Email",
      value: personal.email,
      icon: MdEmail,
      iconStyle: "bg-cyan-400/10 text-cyan-300",
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}`,
      external: true,
    },
    {
      label: "Phone",
      value: personal.phone,
      icon: FaPhoneAlt,
      iconStyle: "bg-emerald-400/10 text-emerald-300",
      href: `tel:${personal.phone}`,
    },
  ];
  const profiles = [
    {
      label: "Upwork",
      description: "View my freelancer profile",
      href: socialLinks.upwork,
      icon: SiUpwork,
      iconStyle: "bg-emerald-400/10 text-emerald-300",
      hoverStyle:
        "hover:border-emerald-400/30 hover:bg-emerald-400/[0.07] hover:shadow-[0_12px_28px_rgba(16,185,129,0.12)]",
    },
    {
      label: "LinkedIn",
      description: "View my professional profile",
      href: socialLinks.linkedin,
      icon: FaLinkedin,
      iconStyle: "bg-blue-400/10 text-blue-300",
      hoverStyle:
        "hover:border-blue-400/30 hover:bg-blue-400/[0.07] hover:shadow-[0_12px_28px_rgba(59,130,246,0.12)]",
    },
  ];

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#071612] pb-16 pt-4"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-12 h-96 w-96 rounded-full bg-emerald-500/10 blur-[125px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/[0.08] blur-[125px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(to_right,#ffffff_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0f150f] to-transparent sm:h-36" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionTitle
          label="CONTACT"
          title="Let's Work Together"
          subtitle="Reach out if you need part-time support"
          compact
          dark
        />

        <div className="relative mt-7 overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#0d211d]/92 shadow-[0_26px_70px_rgba(0,0,0,0.24)] ring-1 ring-white/[0.04]">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-1 bg-gradient-to-r from-indigo-600 via-blue-500 to-emerald-400" />
          <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-emerald-500/12 blur-[75px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-60 w-60 rounded-full bg-cyan-500/[0.08] blur-[80px]" />

          <div className="relative grid lg:grid-cols-[1.04fr_0.96fr]">
            <article className="p-5 sm:p-6 lg:p-7">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-300">
                  Direct contact
                </p>
                <h3 className="mt-1.5 text-xl font-black tracking-[-0.025em] text-slate-50">
                  Contact Information
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Reach me through the details below.
                </p>
              </div>

              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const sharedClasses =
                    "group flex min-h-[88px] items-center gap-3 rounded-[1.25rem] border border-white/[0.08] bg-white/[0.035] p-3.5 text-left";
                  const content = (
                    <>
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 shadow-sm ${item.iconStyle}`}
                      >
                        <Icon size={20} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] font-black text-slate-200">
                          {item.label}
                        </span>
                        <span className="mt-1 block break-words text-[11px] leading-[1.35rem] tracking-[-0.01em] text-slate-400 xl:text-xs">
                          {item.value}
                        </span>
                      </span>
                    </>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className={`${sharedClasses} cursor-pointer transition-[background-color,border-color,box-shadow] duration-200 hover:border-blue-400/30 hover:bg-blue-400/[0.07] hover:shadow-[0_10px_26px_rgba(59,130,246,0.11)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d211d]`}
                    >
                      <span className="flex w-full items-center gap-3 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none">
                        {content}
                      </span>
                    </a>
                  ) : (
                    <div key={item.label} className={sharedClasses}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </article>

            <article className="border-t border-white/10 bg-gradient-to-br from-white/[0.025] via-transparent to-cyan-400/[0.035] p-5 sm:p-6 lg:border-l lg:border-t-0 lg:p-7">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-300">
                  Professional profiles
                </p>
                <h3 className="mt-1.5 text-xl font-black tracking-[-0.025em] text-slate-50">
                  Connect With Me
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  View my work profiles or start a conversation.
                </p>
              </div>

              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {profiles.map((profile) => {
                  const Icon = profile.icon;

                  return (
                    <a
                      key={profile.label}
                      href={profile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex min-h-[82px] cursor-pointer items-center gap-3 rounded-[1.25rem] border border-white/[0.08] bg-white/[0.035] p-3.5 transition-[background-color,border-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d211d] ${profile.hoverStyle}`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 shadow-sm ${profile.iconStyle}`}
                      >
                        <Icon size={22} />
                      </span>
                      <span className="min-w-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none">
                        <span className="block text-sm font-black text-slate-200">
                          {profile.label}
                        </span>
                        <span className="mt-0.5 block text-[10px] leading-4 text-slate-400">
                          {profile.description}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="relative mt-3.5 overflow-hidden rounded-[1.4rem] border border-emerald-300/15 bg-gradient-to-br from-emerald-400/[0.08] via-white/[0.025] to-cyan-400/[0.07] p-4 shadow-[0_16px_34px_rgba(5,150,105,0.1)] sm:p-5">
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-teal-300/10 blur-[36px]" />
                <div className="relative">
                  <h4 className="text-base font-black tracking-[-0.02em] text-slate-50 sm:text-lg">
                    Ready to collaborate?
                  </h4>
                  <p className="mt-1.5 text-xs leading-5 text-slate-300 sm:text-[13px] sm:leading-6">
                    Whether you need administrative support, data entry,
                    internet research, or document management, I&apos;d be happy
                    to help keep your work organized and productive.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
