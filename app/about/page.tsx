import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutMission from "@/components/about/AboutMission";
import AboutWhyChoose from "@/components/about/AboutWhyChoose";
import AboutVision from "@/components/about/AboutVision";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CROWN COCO®, our commitment to premium quality, hygienic food processing, and delivering fresh, trusted products to every customer.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About CROWN COCO®",
    description:
      "Discover our story, mission, vision, and commitment to quality food products.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutWhyChoose />
      <AboutVision />
      <AboutCTA />
    </main>
  );
}