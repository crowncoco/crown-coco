import Link from "next/link";

import Button from "@/components/ui/Button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-[70vh] items-center justify-center bg-[#F8F5EE] px-6 py-20">
        <div className="max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">
            404 Error
          </p>

          <h1 className="mt-4 text-5xl font-bold text-[#073D2B] sm:text-6xl">
            Page Not Found
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#4C5F56]">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved.
            Let&apos;s help you get back to CROWN COCO®.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/">Go to Home</Button>

            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-[#0B5A3D] px-6 py-3 font-semibold text-[#0B5A3D] transition hover:bg-[#0B5A3D] hover:text-white"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}