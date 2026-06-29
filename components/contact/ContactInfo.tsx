import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function ContactInfo() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
            Contact Information
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#073d2b]">
            Get in Touch
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {/* Phone */}

          <div className="rounded-3xl border border-[#d9b45f]/30 bg-[#f8f5ee] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-5 inline-flex rounded-2xl bg-[#0b5a3d]/10 p-4">
              <Phone className="h-7 w-7 text-[#0b5a3d]" />
            </div>

            <h3 className="text-xl font-bold text-[#073d2b]">
              Phone
            </h3>

            <a
              href={site.phoneLink}
              className="mt-4 block text-[#4c5f56] hover:text-[#0b5a3d]"
            >
              {site.phone}
            </a>
          </div>

          {/* Email */}

          <div className="rounded-3xl border border-[#d9b45f]/30 bg-[#f8f5ee] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-5 inline-flex rounded-2xl bg-[#0b5a3d]/10 p-4">
              <Mail className="h-7 w-7 text-[#0b5a3d]" />
            </div>

            <h3 className="text-xl font-bold text-[#073d2b]">
              Email
            </h3>

            <a
              href={site.emailLink}
              className="mt-4 block break-all text-[#4c5f56] hover:text-[#0b5a3d]"
            >
              {site.email}
            </a>
          </div>

          {/* Address */}

          <div className="rounded-3xl border border-[#d9b45f]/30 bg-[#f8f5ee] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-5 inline-flex rounded-2xl bg-[#0b5a3d]/10 p-4">
              <MapPin className="h-7 w-7 text-[#0b5a3d]" />
            </div>

            <h3 className="text-xl font-bold text-[#073d2b]">
              Address
            </h3>

            <div className="mt-4 space-y-1 text-[#4c5f56]">
              {site.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}