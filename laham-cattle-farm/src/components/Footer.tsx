import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, Link as LinkIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-outfit text-2xl font-bold tracking-tight">
              LAHAM <span className="text-secondary">FARM</span>
            </h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              Pure Care. Trusted Livestock. Halal Excellence. We provide premium cattle farming and meat supply services with utmost care and transparency.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-black transition-colors">
                <LinkIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-black transition-colors">
                <LinkIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-black transition-colors">
                <LinkIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-outfit text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Gallery", href: "/gallery" },
                { name: "Location", href: "/location" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 hover:text-secondary text-sm flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-3 h-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-outfit text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-secondary" /> Qurbani Animals</li>
              <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-secondary" /> Cattle Farming</li>
              <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-secondary" /> Premium Meat Supply</li>
              <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-secondary" /> Meat Export</li>
              <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-secondary" /> Farm Visits</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-outfit text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>123 Farm Road, Green Valley, Country 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>info@lahamcattlefarm.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>&copy; {new Date().getFullYear()} Laham Cattle Farm. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
