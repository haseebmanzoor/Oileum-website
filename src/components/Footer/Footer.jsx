import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowUp,
} from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border-r border-b border-white/10"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">O</span>
                </div>
                <span className="text-3xl font-bold tracking-wide">OILEUM</span>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-md">
                Powering tomorrow's energy solutions with trusted engineering,
                procurement, and construction services across the oil & gas
                industry.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center group cursor-pointer">
                  <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-500/20 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-orange-400" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center group cursor-pointer">
                  <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-500/20 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-orange-400" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    contact@oileum.com
                  </span>
                </div>
                <div className="flex items-center group cursor-pointer">
                  <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-500/20 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-orange-400" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    Dubai, UAE
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Services",
                  "Projects",
                  "Careers",
                  "News",
                  "Contact",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-slate-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-orange-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                {[
                  "EPC Solutions",
                  "Project Management",
                  "Engineering Design",
                  "Construction",
                  "Procurement",
                  "Consultancy",
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-slate-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-orange-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="mt-16 pt-12 border-t border-slate-700/50">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              {/* Social Media */}
              <div className="flex flex-col lg:flex-row items-center gap-6 mb-8 lg:mb-0">
                <span className="text-slate-300 font-medium">Follow Us:</span>
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Facebook, href: "#" },
                    { icon: Instagram, href: "#" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-slate-700/50 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25"
                    >
                      <social.icon className="h-5 w-5 text-slate-300 hover:text-white transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <span className="text-slate-300 font-medium whitespace-nowrap">
                  Stay Updated:
                </span>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-slate-700/50 border border-slate-600 rounded-l-xl px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-orange-400 transition-colors duration-300"
                  />
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 py-2 rounded-r-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col lg:flex-row items-center gap-6 mb-4 lg:mb-0">
              <p className="text-slate-400">
                © 2025 Oileum. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-slate-400 hover:text-orange-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-orange-400 transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-orange-400 transition-colors duration-300"
                >
                  Cookie Policy
                </a>
              </div>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group w-12 h-12 bg-slate-700/50 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25"
            >
              <ArrowUp className="h-5 w-5 text-slate-300 group-hover:text-white transition-all duration-300 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
