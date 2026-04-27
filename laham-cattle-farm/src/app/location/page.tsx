"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Trust from "@/components/Trust";

export default function LocationPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl font-outfit font-bold mb-6">Our Location</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Visit our farm to see our premium facilities and livestock in person.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3 space-y-8"
            >
              <div className="bg-accent p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-lg">
                <h3 className="text-2xl font-outfit font-bold mb-6">Contact Info</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-foreground/70 text-sm">123 Farm Road, Green Valley, Country 12345</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-foreground/70 text-sm">+1 (234) 567-890</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-foreground/70 text-sm">info@lahamcattlefarm.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Visiting Hours</p>
                      <p className="text-foreground/70 text-sm">Mon-Sat: 8 AM - 5 PM<br/>Sun: By Appointment</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/3 h-[500px] rounded-3xl overflow-hidden shadow-xl border border-black/5 dark:border-white/5 bg-accent"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115712.92318063059!2d-74.0580978!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1714240989000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust section reused here as instructed */}
      <Trust />
    </>
  );
}
