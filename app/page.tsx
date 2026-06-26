import TrustBar from "@/components/home/TrustBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import BulkOrderCTA from "@/components/home/BulkOrderCTA";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5EE]">
     <Navbar />

<TrustBar />

<Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <HowItWorks />
      <BulkOrderCTA />
      <Testimonials />

      <Footer />
    </main>
  );
}