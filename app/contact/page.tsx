import type { Metadata } from "next";

import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import ContactHero from "@/components/contact/ContactHero";
import ContactCTA from "@/components/contact/ContactCTA";
import BusinessHours from "@/components/contact/BusinessHours";
import ContactFAQ from "@/components/contact/ContactFAQ";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CROWN COCO® for product enquiries, bulk orders, prebooking, and customer support.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact CROWN COCO®",
    description:
      "Contact CROWN COCO® for enquiries, bulk orders, and customer support.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactMap />
      <ContactCTA />
      <BusinessHours />
      <ContactFAQ />
    </main>
  );
}