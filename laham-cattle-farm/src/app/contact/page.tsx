"use client";

import { motion } from "framer-motion";
import { MessageSquare, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Suspense } from "react";

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl font-outfit font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get in touch with Laham Cattle Farm for inquiries, bookings, or support.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3"
            >
              <h2 className="text-3xl md:text-4xl font-outfit font-bold text-foreground mb-6">
                Let&apos;s start a conversation
              </h2>
              <p className="text-foreground/70 mb-10 text-lg">
                Whether you&apos;re looking to book Qurbani animals, need premium meat supply for your business, or want to schedule a farm visit, our team is ready to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground mb-1">Call Us</h4>
                    <p className="text-foreground/70">+1 (234) 567-890</p>
                    <p className="text-foreground/70 text-sm mt-1">Mon-Sat from 8am to 6pm.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground mb-1">Chat with Us</h4>
                    <p className="text-foreground/70">info@lahamcattlefarm.com</p>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="text-primary font-medium hover:underline mt-2 inline-block">Message on WhatsApp &rarr;</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground mb-1">Visit Farm</h4>
                    <p className="text-foreground/70">123 Farm Road, Green Valley, Country 12345</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <Suspense fallback={<div>Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
