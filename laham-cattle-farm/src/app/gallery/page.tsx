"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "../../../public/images/hero_cattle_farm_1777307056187.png";
import qurbaniImg from "../../../public/images/qurbani_animals_1777307111289.png";
import meatImg from "../../../public/images/premium_meat_1777307132062.png";

const images = [
  { id: 1, src: heroImg, alt: "Farm view at sunrise", category: "Farm" },
  { id: 2, src: qurbaniImg, alt: "Majestic bull in barn", category: "Livestock" },
  { id: 3, src: meatImg, alt: "Premium raw beef cuts", category: "Meat" },
  { id: 4, src: heroImg, alt: "Cattle grazing", category: "Farm" },
  { id: 5, src: qurbaniImg, alt: "Healthy qurbani animal", category: "Livestock" },
  { id: 6, src: meatImg, alt: "Gourmet meat presentation", category: "Meat" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-outfit font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A visual journey through our farm, livestock, and premium products.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-black min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-80 rounded-2xl overflow-hidden group shadow-lg cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold tracking-wider uppercase bg-primary/80 px-4 py-2 rounded-full backdrop-blur-sm">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
