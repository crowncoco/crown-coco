import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import OurStory from "@/components/home/OurStory";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import BulkOrderCTA from "@/components/home/BulkOrderCTA";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover CROWN COCO® premium frozen grated coconut, quality dry fish, dry prawns, and fresh cut vegetables. Fresh. Clean. Trusted.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CROWN COCO® | Fresh. Clean. Trusted.",
    description:
      "Premium frozen grated coconut, dry fish, dry prawns, and fresh cut vegetables.",
    url: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5EE]">
      <Navbar />

      <Hero />

      <TrustBar />

      <OurStory />

      <FeaturedProducts />

      <WhyChooseUs />

      <HowItWorks />

      <BulkOrderCTA />

      <Testimonials />

      <Footer />
    </main>
  );
}