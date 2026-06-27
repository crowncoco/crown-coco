import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Image from "next/image";


const featureBadges = [
  "Hygienically Processed",
  "Premium Quality",
  "Delivered Fresh",
];

export default function Hero() {
  return (
  <section className="overflow-hidden bg-[#f8f5ee] py-16 sm:py-20">
  <Container>
    <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#c49a3a]">
            Crown Coco Premium Foods
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#073d2b] sm:text-5xl lg:text-6xl">
            Fresh. Clean. Trusted.
          </h1>

          <p className="mt-5 text-xl font-medium leading-8 text-[#6b4423] sm:text-2xl">
           Premium Frozen Grated Coconut crafted for freshness, with more quality food products arriving soon.
          </p>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#4c5f56] sm:text-lg">
            Our premium frozen grated coconut is hygienically prepared and
  carefully packed to preserve natural freshness, taste, and quality.
  More premium food products will be added soon.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
           <Button href="/products">
  Shop Now
</Button>

<Button
  href="/bulk-orders"
  variant="outline"
>
  Bulk Orders
</Button>     
          </div>

        <div className="mt-8 flex flex-wrap gap-3">
  {featureBadges.map((badge) => (
    <Badge key={badge}>{badge}</Badge>
  ))}
</div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2.25rem] bg-[radial-gradient(circle_at_50%_45%,rgba(217,180,95,0.28),rgba(255,250,240,0.56)_42%,rgba(7,61,43,0.08)_72%,transparent_100%)]" />
          <div className="absolute -right-8 top-2 h-36 w-36 rounded-full bg-[#d9b45f]/25 blur-3xl sm:h-44 sm:w-44" />
          <div className="absolute -bottom-8 -left-6 h-40 w-40 rounded-full bg-[#073d2b]/18 blur-3xl sm:h-52 sm:w-52" />
          <div className="group relative overflow-hidden rounded-[2rem] border border-[#d9b45f]/35 bg-[#fffaf0] p-6 shadow-[0_28px_70px_rgba(7,61,43,0.16)] transition duration-500 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_36px_90px_rgba(7,61,43,0.22)] sm:p-8">
            <div className="rounded-[1.5rem] bg-white p-4 shadow-inner">
              <Image
                src="/images/products/grated-coconut.png"
                alt="Premium frozen grated coconut"
                width={760}
                height={760}
                priority
                className="h-auto w-full object-contain transition duration-500 ease-out group-hover:scale-[1.025]"
              />
            </div>
          </div>
        </div>
       </div>
  </Container>
</section>   
  );
}
