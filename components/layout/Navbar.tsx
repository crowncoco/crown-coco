"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/bulk-orders", label: "Bulk Orders" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9b45f]/25 bg-[#fffaf0]/95 shadow-[0_12px_40px_rgba(5,54,38,0.08)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d9b45f]/50 bg-white shadow-sm transition duration-300 group-hover:scale-105">
            <Image src="/images/logo/logo.png" alt="CROWN COCO logo" width={48} height={48} className="h-10 w-10 object-contain" priority />
          </span>
          <span className="truncate text-lg font-semibold tracking-[0.18em] text-[#073d2b] sm:text-xl">
            CROWN COCO®
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="relative text-sm font-medium text-[#173f31] transition duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#c49a3a] after:transition-all after:duration-300 hover:text-[#0b5a3d] hover:after:w-full">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="h-11 w-11 rounded-full border bg-white text-[#073d2b] transition hover:-translate-y-0.5" aria-label="Search">⌕</button>
          <button className="h-11 w-11 rounded-full border bg-white text-[#073d2b] transition hover:-translate-y-0.5" aria-label="Shopping cart">🛒</button>
          <Link href="https://wa.me/" className="rounded-full border bg-white px-4 py-2 text-sm font-semibold text-[#0b5a3d] transition hover:-translate-y-0.5 hover:bg-[#effaf3]">
            WhatsApp
          </Link>
          <Link href="/prebook-order" className="rounded-full bg-[#0b5a3d] px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#073d2b]">
            Prebook Order
          </Link>
        </div>

        <button
          className="h-11 w-11 rounded-full border bg-white text-[#073d2b] lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </nav>

      <div className={`overflow-hidden border-t border-[#d9b45f]/20 bg-[#fffaf0] transition-all duration-300 lg:hidden ${isMenuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-md px-3 py-3 font-medium text-[#173f31] transition hover:bg-white hover:text-[#0b5a3d]" onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="grid gap-3 pt-3 sm:grid-cols-2">
            <Link href="https://wa.me/" className="rounded-full border bg-white px-4 py-3 text-center font-semibold text-[#0b5a3d]">WhatsApp</Link>
            <Link href="/prebook-order" className="rounded-full bg-[#0b5a3d] px-4 py-3 text-center font-semibold text-white">Prebook Order</Link>
          </div>
        </div>
      </div>
    </header>
  );
}