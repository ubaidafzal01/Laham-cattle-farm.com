import VisionMission from "@/components/VisionMission";
import Image from "next/image";
import heroImg from "../../../public/images/hero_cattle_farm_1777307056187.png";

export const metadata = {
  title: "About Us | Laham Cattle Farm",
  description: "Learn about Laham Cattle Farm's history, our founder's vision, and our commitment to halal excellence and ethical farming.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src={heroImg}
            alt="Farm Background"
            fill
            className="object-cover object-center grayscale"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-outfit font-bold mb-6">About Laham Farm</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A legacy of trust, care, and premium livestock farming.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-secondary font-semibold tracking-wider text-sm uppercase mb-3 block">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-outfit font-bold text-foreground mb-6">
                Rooted in Tradition, <br />
                <span className="text-primary">Driven by Quality</span>
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  Laham Cattle Farm was established with a singular focus: to provide families and businesses with access to the highest quality, ethically raised livestock and meat products. What started as a small family farm has grown into a premier destination for premium cattle.
                </p>
                <p>
                  We believe that the secret to premium meat lies in the life of the animal. That&apos;s why our cattle enjoy expansive, lush grazing fields, pure water, and natural, additive-free feed. Our team of experienced farmers and veterinarians work tirelessly to ensure the health and happiness of every animal.
                </p>
                <p>
                  Today, we are proud to be the trusted choice for Qurbani, daily meat supply, and large-scale farming solutions, serving thousands of satisfied customers who demand nothing but the best.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg">
                    <Image
                      src={heroImg}
                      alt="Farm Field"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-primary p-8 rounded-3xl text-white shadow-lg">
                    <h3 className="text-4xl font-outfit font-bold mb-2">15+</h3>
                    <p className="text-white/80 font-medium">Years of farming excellence</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-secondary p-8 rounded-3xl text-black shadow-lg">
                    <h3 className="text-4xl font-outfit font-bold mb-2">100%</h3>
                    <p className="text-black/80 font-medium">Organic & natural feed</p>
                  </div>
                  <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg">
                    <Image
                      src={heroImg}
                      alt="Cattle"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <VisionMission />
    </>
  );
}
