"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F5EE] px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">
          Something went wrong
        </p>

        <h1 className="mt-4 text-4xl font-bold text-[#073D2B]">
          Unexpected Error
        </h1>

        <p className="mt-6 text-lg text-[#4C5F56]">
          An unexpected error occurred while loading this page. Please try
          again.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full bg-[#0B5A3D] px-6 py-3 font-semibold text-white transition hover:bg-[#073D2B]"
          >
            Try Again
          </button>

          <Button href="/">Go Home</Button>
        </div>
      </div>
    </main>
  );
}