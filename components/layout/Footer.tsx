import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/bulk-orders", label: "Bulk Orders" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const products = [
  "Frozen Grated Coconut",
  "Dry Fish",
  "Dry Prawns",
  "Fresh Cut Vegetables",
];

const contactItems = [
  {
    label: site.phone,
    href: site.phoneLink,
    Icon: Phone,
  },
  {
    label: "WhatsApp",
    href: site.whatsapp,
    Icon: MessageCircle,
  },
  {
    label: site.email,
    href: site.emailLink,
    Icon: Mail,
  },
  {
   label: "Kacheripady, Palluruthy, Kochi - 682006",
    href: "https://maps.google.com/?q=Kacheripady,Palluruthy,Kochi",
    Icon: MapPin,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#d9b45f]/25 bg-[#fffaf0] px-4 pt-16 text-[#173f31] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="group flex items-center gap-3">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d9b45f]/50 bg-white shadow-sm transition duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo/logo.png"
                  alt="CROWN COCO logo"
                  width={56}
                  height={56}
                  className="h-11 w-11 object-contain"
                />
              </span>
              <span className="text-xl font-semibold tracking-[0.18em] text-[#073d2b]">
                CROWN COCO&reg;
              </span>
            </Link>

            <p className="mt-6 text-lg font-semibold text-[#073d2b]">
              Fresh. Clean. Trusted.
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#c49a3a]">
              FROM COCONUT TO COAST
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#073d2b]">Quick Links</h2>
            <nav className="mt-5 grid gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#4c5f56] transition duration-300 hover:text-[#0b5a3d]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#073d2b]">Products</h2>
            <div className="mt-5 grid gap-3">
              {products.map((product) => (
                <p key={product} className="text-sm font-medium text-[#4c5f56]">
                  {product}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#073d2b]">Contact</h2>
            <div className="mt-5 grid gap-3">
              {contactItems.map((item) => {
                const Icon = item.Icon;

                return (
                  <Link
  key={item.label}
  href={item.href}
  target={item.href.startsWith("http") ? "_blank" : undefined}
  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-full border border-[#d9b45f]/25 bg-white px-4 py-3 text-sm font-semibold text-[#173f31] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:text-[#0b5a3d] hover:shadow-[0_14px_34px_rgba(7,61,43,0.1)]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0b5a3d] text-white transition duration-300 group-hover:scale-105">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#d9b45f]/25 py-6 text-center">
          <p className="text-sm font-medium text-[#4c5f56]">
            &copy; {new Date().getFullYear()} CROWN COCO&reg;. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
