"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import qurbaniImg from "../../../public/images/qurbani_animals_1777307111289.png";
import meatImg from "../../../public/images/premium_meat_1777307132062.png";
import heroImg from "../../../public/images/hero_cattle_farm_1777307056187.png";

const allServices = [
  {
    id: "qurbani",
    title: "Qurbani Animals",
    description: "Premium, healthy, and Shariah-compliant animals for your Qurbani needs. Raised with utmost care and natural feed.",
    image: qurbaniImg,
    features: ["Shariah Compliant", "Health Certified", "Free Delivery in Select Areas", "Variety of Breeds"],
  },
  {
    id: "farming",
    title: "Cattle Farming",
    description: "Expert cattle rearing services. We offer managed farming solutions for investors and businesses looking for quality livestock.",
    image: heroImg,
    features: ["Expert Caretakers", "Veterinary Oversight", "Natural Grazing", "Transparent Reporting"],
  },
  {
    id: "meat",
    title: "Premium Meat Supply",
    description: "High-grade, hygienic, and expertly cut meat supply for homes, restaurants, and events.",
    image: meatImg,
    features: ["Expert Cuts", "Vacuum Packed", "Farm Fresh", "Halal Certified Slaughter"],
  },
  {
    id: "export",
    title: "Meat Export",
    description: "International standard meat processing and export services meeting global hygiene and quality requirements.",
    image: meatImg,
    features: ["Global Standards", "Cold Chain Logistics", "Export Quality Packaging", "Custom Cut Orders"],
  },
  {
    id: "visits",
    title: "Farm Visits",
    description: "Experience our farm firsthand. Educational and family visits to see our sustainable farming practices in action.",
    image: heroImg,
    features: ["Guided Tours", "Family Friendly", "Educational Value", "Animal Interaction"],
  },
  {
    id: "booking",
    title: "Advanced Booking",
    description: "Secure your desired livestock or meat supply in advance for special occasions and peak seasons.",
    image: qurbaniImg,
    features: ["Priority Selection", "Price Lock", "Dedicated Support", "Flexible Payment"],
  }
];

export default function ServicesPage() {
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
          <h1 className="text-5xl md:text-6xl font-outfit font-bold mb-6">Our Services</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive livestock and premium meat solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-accent dark:bg-black">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {allServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-black/50 rounded-3xl overflow-hidden shadow-xl shadow-primary/5 border border-primary/10 flex flex-col"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-3xl font-outfit font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-foreground/70 mb-8 text-lg leading-relaxed">{service.description}</p>
                  <div className="mb-8 flex-grow">
                    <h4 className="font-semibold text-foreground mb-4">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/contact?service=${service.id}`}
                    className="inline-flex items-center justify-center w-full gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-xl font-semibold transition-transform hover:-translate-y-1 shadow-lg shadow-primary/20"
                  >
                    Inquire Now <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
