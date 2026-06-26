import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-[#0B5A3D] text-white hover:bg-[#08482F] shadow-lg hover:-translate-y-1",

    secondary:
      "bg-[#C49A3A] text-white hover:bg-[#AA842E] shadow-lg hover:-translate-y-1",

    outline:
      "border border-[#0B5A3D] text-[#0B5A3D] hover:bg-[#0B5A3D] hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}