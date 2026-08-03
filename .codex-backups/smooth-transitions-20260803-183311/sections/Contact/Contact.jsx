import {
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import {
  MdEmail,
  MdLocationOn,
  MdAccessTime,
} from "react-icons/md";

import Card from "../../components/ui/Card";
import SectionTitle from "../../components/ui/SectionTitle";
import portfolioData from "../../data/portfolioData";

export default function Contact() {
  const { personal, socialLinks } = portfolioData;

  return (
    <section
      id="contact"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          label="CONTACT"
          title="Let us Work Together"
          subtitle="Reach out if you need part-time support"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <Card>
            <h3 className="mb-8 text-2xl font-bold text-slate-900">
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MdLocationOn className="mt-1 text-2xl text-blue-600" />

                <div>
                  <p className="font-semibold text-slate-900">
                    Location
                  </p>

                  <p className="text-slate-600">
                    {personal.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MdAccessTime className="mt-1 text-2xl text-blue-600" />

                <div>
                  <p className="font-semibold text-slate-900">
                    Timezone
                  </p>

                  <p className="text-slate-600">
                    {personal.timezone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MdEmail className="mt-1 text-2xl text-blue-600" />

                <div>
                  <p className="font-semibold text-slate-900">
                    Email
                  </p>

                  <a
                    href={`mailto:${personal.email}`}
                    className="text-slate-600 transition hover:text-blue-600"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="mt-1 text-xl text-blue-600" />

                <div>
                  <p className="font-semibold text-slate-900">
                    Phone
                  </p>

                  <a
                    href={`tel:${personal.phone}`}
                    className="text-slate-600 transition hover:text-blue-600"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Social Links */}
          <Card>
            <h3 className="mb-8 text-2xl font-bold text-slate-900">
              Connect With Me
            </h3>

            <div className="space-y-5">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50"
              >
                <FaLinkedin className="text-4xl text-blue-600" />

                <div>
                  <p className="font-semibold">
                    LinkedIn
                  </p>

                  <p className="text-sm text-slate-500">
                    View my professional profile
                  </p>
                </div>
              </a>

              <a
                href={socialLinks.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-50"
              >
                <SiUpwork className="text-4xl text-green-600" />

                <div>
                  <p className="font-semibold">
                    Upwork
                  </p>

                  <p className="text-sm text-slate-500">
                    View my freelancer profile
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 p-6 text-white">
              <h4 className="text-xl font-bold">
                Ready to collaborate?
              </h4>

              <p className="mt-3 leading-7 text-blue-100">
                Whether you need assistance with administrative tasks,
                data entry, internet research, or document management,
                I'd be happy to help your business stay organized and productive.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

















