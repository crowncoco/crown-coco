import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#d9b45f]/45 bg-white/85 px-4 py-2 text-sm font-semibold text-[#173f31] shadow-sm transition duration-300 hover:bg-[#fffaf0]">
      {children}
    </span>
  );
}