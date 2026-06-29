export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F5EE] px-6">
      <div className="text-center">
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-[#D9B45F]/30 border-t-[#0B5A3D]" />

        <h2 className="mt-6 text-2xl font-bold text-[#073D2B]">
          CROWN COCO®
        </h2>

        <p className="mt-2 text-[#4C5F56]">
          Loading...
        </p>
      </div>
    </main>
  );
}