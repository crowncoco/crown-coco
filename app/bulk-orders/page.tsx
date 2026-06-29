import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BulkOrderCTA from "@/components/products/BulkOrderCTA";
import BulkOrderHero from "@/components/bulk-order/BulkOrdersHero";
import BulkOrderBenefits from "@/components/bulk-order/BulkOrderBenefits";

export default function BulkOrdersPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f5ee]">
  <BulkOrderHero />
   <BulkOrderBenefits />
  <BulkOrderCTA />
</main>

      <Footer />
    </>
  );
}