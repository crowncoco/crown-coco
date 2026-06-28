import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import ContactHero from "@/components/contact/ContactHero";
import ContactCTA from "@/components/contact/ContactCTA";
import BusinessHours from "@/components/contact/BusinessHours";
import ContactFAQ from "@/components/contact/ContactFAQ";

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