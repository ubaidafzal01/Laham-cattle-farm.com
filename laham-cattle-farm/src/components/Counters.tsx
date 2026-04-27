"use client";

import { motion } from "framer-motion";
import { Users, Award, Sprout } from "lucide-react";

const stats = [
  { id: 1, label: "Happy Customers", value: "5000+", icon: Users },
  { id: 2, label: "Premium Cattle", value: "1200+", icon: Sprout },
  { id: 3, label: "Years Experience", value: "15+", icon: Award },
];

export default function Counters() {
  return (
    <section className="py-16 bg-white dark:bg-black/50 border-b border-primary/10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center gap-6 p-8 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/10 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary dark:text-secondary shrink-0">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-4xl font-outfit font-bold text-foreground mb-1">{stat.value}</h3>
                  <p className="text-foreground/70 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
