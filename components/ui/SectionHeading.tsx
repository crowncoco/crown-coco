type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C49A3A]">
        CROWN COCO®
      </p>

      <h2 className="mt-3 text-4xl font-bold text-[#073D2B] md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg text-[#4C5F56]">
          {subtitle}
        </p>
      )}
    </div>
  );
}