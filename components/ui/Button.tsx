import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  disabled = false,
}: ButtonProps) {

  const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out active:scale-[0.98]";

  const variants = {
   primary:
  "bg-[#0B5A3D] text-white shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#08482F] hover:shadow-xl",

    secondary:
  "bg-[#C49A3A] text-white shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#AA842E] hover:shadow-xl",

    outline:
      "border border-[#0B5A3D] text-[#0B5A3D] hover:bg-[#0B5A3D] hover:text-white",
  };

 const classes = `${base} ${variants[variant]} ${
  disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}