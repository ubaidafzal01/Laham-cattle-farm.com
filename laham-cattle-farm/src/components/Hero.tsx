"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import heroImg from "../../public/images/hero_cattle_farm_1777307056187.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Laham Cattle Farm at Sunrise"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full glass mb-6 border-white/20 backdrop-blur-md"
          >
            <span className="text-secondary font-semibold tracking-wider text-sm uppercase">
              Premium Livestock Farming
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-outfit font-bold text-white mb-6 leading-tight"
          >
            Pure Care. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">
              Trusted Livestock.
            </span>
            <br /> Halal Excellence.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed"
          >
            Experience the finest quality in cattle farming. We provide premium qurbani animals and high-grade meat supply, nurtured with utmost care and transparency.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/services"
              className="bg-secondary hover:bg-secondary/90 text-black px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 shadow-lg shadow-secondary/20"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="glass hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-transform hover:-translate-y-1"
            >
              <Play className="w-5 h-5" />
              Watch Farm Tour
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
