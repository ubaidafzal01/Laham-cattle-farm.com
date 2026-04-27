"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Leaf, Scale } from "lucide-react";

const trustFactors = [
  {
    title: "100% Halal Certified",
    description: "Strict adherence to Islamic principles in rearing and slaughtering.",
    icon: Scale,
  },
  {
    title: "Hygiene & Safety",
    description: "State-of-the-art facilities maintaining the highest health standards.",
    icon: ShieldCheck,
  },
  {
    title: "Natural Feed",
    description: "Our cattle are raised on natural, organic feed without harmful additives.",
    icon: Leaf,
  },
  {
    title: "Transparent Process",
    description: "Complete transparency from farm to your doorstep. No hidden practices.",
    icon: HeartHandshake,
  },
];

export default function Trust() {
  return (
    <section className="py-24 bg-white dark:bg-black relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-semibold tracking-wider text-sm uppercase mb-3 block"
            >
              Why Choose Laham
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-outfit font-bold text-foreground mb-6 leading-tight"
            >
              A Heritage of <span className="text-primary">Trust & Quality</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-foreground/70 mb-8 leading-relaxed"
            >
              At Laham Cattle Farm, we believe that the quality of our product begins with the care of our animals. For over 15 years, we have been committed to ethical farming practices, ensuring every animal is raised in a stress-free environment.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trustFactors.map((factor, index) => {
                const Icon = factor.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 text-secondary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{factor.title}</h4>
                      <p className="text-sm text-foreground/60">{factor.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square bg-accent border-8 border-white dark:border-white/5 shadow-2xl shadow-primary/10"
            >
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544605990-252fc775db20?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
               <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-white dark:bg-black p-6 rounded-3xl shadow-xl shadow-primary/20 border border-primary/10 flex items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <p className="text-2xl font-bold font-outfit text-foreground mb-0">100%</p>
                <p className="text-sm font-medium text-foreground/70">Certified Quality</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
