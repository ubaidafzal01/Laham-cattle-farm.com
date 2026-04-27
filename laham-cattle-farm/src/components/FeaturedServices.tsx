"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import qurbaniImg from "../../public/images/qurbani_animals_1777307111289.png";
import meatImg from "../../public/images/premium_meat_1777307132062.png";

const services = [
  {
    id: "qurbani",
    title: "Qurbani Animals",
    description: "Premium, healthy, and Shariah-compliant animals for your Qurbani needs. Raised with utmost care and natural feed.",
    image: qurbaniImg,
    features: ["Shariah Compliant", "Health Certified", "Free Delivery"],
    link: "/services#qurbani"
  },
  {
    id: "meat",
    title: "Premium Meat Supply",
    description: "High-grade, hygienic, and expertly cut meat supply for homes, restaurants, and events.",
    image: meatImg,
    features: ["Expert Cuts", "Vacuum Packed", "Farm Fresh"],
    link: "/services#meat"
  }
];

export default function FeaturedServices() {
  return (
    <section className="py-24 bg-accent dark:bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary dark:text-secondary font-semibold tracking-wider text-sm uppercase mb-3 block"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-outfit font-bold text-foreground mb-6"
          >
            Premium Farm Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/70"
          >
            From raising healthy livestock to delivering the finest cuts of meat, we ensure excellence at every step of the process.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-background rounded-3xl overflow-hidden shadow-xl shadow-primary/5 hover:shadow-2xl transition-all border border-black/5 dark:border-white/10 flex flex-col"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-outfit font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-primary dark:text-secondary font-semibold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-semibold transition-transform hover:-translate-y-1 shadow-lg hover:bg-primary"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
