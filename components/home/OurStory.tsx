import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { Leaf, MapPin, ShieldCheck } from "lucide-react";

export default function OurStory() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c49a3a]">
              OUR STORY
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#073d2b] sm:text-5xl">
              From Kerala to Your Kitchen
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#4c5f56]">
              Crown Coco was founded with a simple mission — to deliver fresh,
              hygienically prepared coconut products and premium food essentials
              that families and businesses can trust every day.
            </p>

            <p className="mt-5 text-base leading-8 text-[#4c5f56]">
              Starting with our premium frozen grated coconut, we are steadily
              expanding our range to include carefully selected dry fish, dry
              prawns, and fresh cut vegetables while maintaining high standards
              of quality and food safety.
            </p>

            <Button
              href="/about"
              className="mt-8"
            >
              Learn More
            </Button>
          </div>

          <Card className="p-8">

            <div className="space-y-7">

              <div className="flex items-start gap-4">
                <Leaf className="mt-1 h-7 w-7 text-[#0b5a3d]" />
                <div>
                  <h3 className="font-bold text-[#073d2b]">
                    Fresh Ingredients
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#4c5f56]">
                    Carefully selected ingredients packed for freshness and
                    everyday convenience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-7 w-7 text-[#0b5a3d]" />
                <div>
                  <h3 className="font-bold text-[#073d2b]">
                    Hygienic Processing
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#4c5f56]">
                    Every product is prepared with cleanliness, consistency,
                    and care.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-7 w-7 text-[#0b5a3d]" />
                <div>
                  <h3 className="font-bold text-[#073d2b]">
                    Proudly Based in Kerala
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#4c5f56]">
                    Serving homes, retailers, restaurants and businesses across
                    Kerala.
                  </p>
                </div>
              </div>

            </div>

          </Card>

        </div>
      </Container>
    </section>
  );
}