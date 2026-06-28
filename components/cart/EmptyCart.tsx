import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
      <h2 className="text-3xl font-bold text-[#073d2b]">
        Your cart is empty
      </h2>

      <p className="mt-4 text-[#4c5f56]">
        Looks like you haven&apos;t added any products yet.
      </p>

      <Link
        href="/products"
        className="mt-8 inline-flex rounded-full bg-[#0b5a3d] px-6 py-3 font-semibold text-white transition hover:bg-[#073d2b]"
      >
        Continue Shopping
      </Link>
    </div>
  );
}