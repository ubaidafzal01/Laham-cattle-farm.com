"use client";

import { motion } from "framer-motion";
import { Eye, Target, Heart, CheckCircle } from "lucide-react";

const values = [
  {
    id: 1,
    title: "Halal Excellence",
    description: "Uncompromising commitment to Islamic principles in everything we do.",
    icon: CheckCircle,
  },
  {
    id: 2,
    title: "Utmost Care",
    description: "Treating our animals with respect, providing natural feed and stress-free environments.",
    icon: Heart,
  },
  {
    id: 3,
    title: "Transparency",
    description: "Open processes from farm to delivery, ensuring you know exactly what you get.",
    icon: Eye,
  },
];

export default function VisionMission() {
  return (
    <section className="py-24 bg-accent dark:bg-black/80">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-black p-10 rounded-3xl shadow-xl shadow-primary/5 border border-primary/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-primary">
              <Eye className="w-32 h-32" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 relative z-10">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-outfit font-bold text-foreground mb-4 relative z-10">Our Vision</h3>
            <p className="text-lg text-foreground/70 leading-relaxed relative z-10">
              To be the most trusted and premier source of high-quality, ethically raised, and 100% Halal livestock and meat products, setting the gold standard for cattle farming globally.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary text-white p-10 rounded-3xl shadow-xl shadow-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Target className="w-32 h-32" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6 relative z-10">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-outfit font-bold mb-4 relative z-10">Our Mission</h3>
            <p className="text-lg text-white/90 leading-relaxed relative z-10">
              To provide our customers with exceptional quality livestock and meat products through sustainable, ethical farming practices, ensuring nutritional excellence, hygiene, and strict Shariah compliance.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-outfit font-bold text-foreground mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-foreground/70 max-w-2xl mx-auto"
            >
              The principles that guide our daily operations and ensure we deliver on our promises.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-black/50 p-8 rounded-2xl text-center border border-primary/5 hover:border-secondary transition-colors"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold font-outfit text-foreground mb-3">{value.title}</h4>
                  <p className="text-foreground/70">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
