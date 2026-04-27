"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "emailjs-com";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const searchParams = useSearchParams();
  
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setValue("service", serviceParam);
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // NOTE: Replace these with actual EmailJS credentials
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
        },
        "YOUR_PUBLIC_KEY"
      );
      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-black/80 p-8 md:p-10 rounded-3xl shadow-xl border border-primary/10">
      <h3 className="text-2xl font-outfit font-bold text-foreground mb-6">Send us a message</h3>
      
      {submitStatus === "success" && (
        <div className="mb-8 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-xl flex items-start gap-3 border border-green-200 dark:border-green-800">
          <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
          <p className="text-sm font-medium">Thank you for contacting us! We have received your message and will get back to you shortly.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-xl flex items-start gap-3 border border-red-200 dark:border-red-800">
          <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
          <p className="text-sm font-medium">Something went wrong. Please try again later or contact us directly via phone.</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
            <input
              id="name"
              {...register("name")}
              className={clsx(
                "w-full px-4 py-3 rounded-xl bg-accent border transition-colors focus:outline-none focus:ring-2",
                errors.name ? "border-red-500 focus:ring-red-500" : "border-black/10 dark:border-white/10 focus:ring-primary focus:border-primary"
              )}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={clsx(
                "w-full px-4 py-3 rounded-xl bg-accent border transition-colors focus:outline-none focus:ring-2",
                errors.email ? "border-red-500 focus:ring-red-500" : "border-black/10 dark:border-white/10 focus:ring-primary focus:border-primary"
              )}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number *</label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              className={clsx(
                "w-full px-4 py-3 rounded-xl bg-accent border transition-colors focus:outline-none focus:ring-2",
                errors.phone ? "border-red-500 focus:ring-red-500" : "border-black/10 dark:border-white/10 focus:ring-primary focus:border-primary"
              )}
              placeholder="+1 (234) 567-890"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-medium text-foreground">Interested In *</label>
            <select
              id="service"
              {...register("service")}
              className={clsx(
                "w-full px-4 py-3 rounded-xl bg-accent border transition-colors focus:outline-none focus:ring-2 appearance-none",
                errors.service ? "border-red-500 focus:ring-red-500" : "border-black/10 dark:border-white/10 focus:ring-primary focus:border-primary"
              )}
            >
              <option value="">Select a service</option>
              <option value="qurbani">Qurbani Animals</option>
              <option value="farming">Cattle Farming</option>
              <option value="meat">Premium Meat Supply</option>
              <option value="export">Meat Export</option>
              <option value="visits">Farm Visits</option>
              <option value="other">Other Inquiry</option>
            </select>
            {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">Message *</label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            className={clsx(
              "w-full px-4 py-3 rounded-xl bg-accent border transition-colors focus:outline-none focus:ring-2 resize-none",
              errors.message ? "border-red-500 focus:ring-red-500" : "border-black/10 dark:border-white/10 focus:ring-primary focus:border-primary"
            )}
            placeholder="Tell us how we can help you..."
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
