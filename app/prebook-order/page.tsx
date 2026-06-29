import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PrebookForm from "@/components/prebook/PrebookForm";


export default function PrebookOrderPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f5ee] py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b5a3d]">
            Prebook Order
          </p>

          <h1 className="mt-4 text-4xl font-bold text-[#073d2b]">
            Reserve Your Order
          </h1>

          <p className="mt-5 text-[#4c5f56]">
            Contact us on WhatsApp to reserve your order. We&apos;ll confirm
            availability and delivery details.
          </p>

         <PrebookForm />
        </div>
      </main>

      <Footer />
    </>
  );
}