import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-[24px] border border-[#d9b45f]/20 bg-white shadow-[0_18px_48px_rgba(7,61,43,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(7,61,43,0.14)] ${className}`}
    >
      {children}
    </div>
  );
}