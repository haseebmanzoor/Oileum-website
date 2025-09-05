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
      <div className="relative max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Get in Touch */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-orange-400 mr-3" />
                <span>NASMAA Tower, 101, C-1, Garhoud, Dubai-UAE</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-orange-400 mr-3" />
                <span>+971 50 2250</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-orange-400 mr-3" />
                <span>projects@oileum.ae</span>
              </div>
              <div className="flex space-x-4 mt-4">
                {[Linkedin, Twitter, Facebook, Instagram].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 bg-slate-700/50 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="h-5 w-5 text-slate-300 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: About Us */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">About Us</h3>
            <p className="text-slate-300 leading-relaxed">
              OILEUM is a UAE-based industrial services company specializing in
              downstream oil & gas solutions across the Middle East, North
              Africa, and South Asia. With a strong operational footprint in
              Iraq, Libya, Qatar, Saudi Arabia, and Pakistan, we deliver
              high-integrity engineering, procurement, and technical services
              for refineries and energy infrastructure. Backed by decades of
              field expertise and a commitment to quality, Oileum is trusted for
              driving results in the most challenging environments.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Oileum began as a modest engineering venture and has since evolved
              into one of the most respected and dynamic EPC companies operating
              across the MENA and South Asia regions. Our foundation is
              strengthened by the backing of UDKS, a globally recognized
              construction group. We remain committed to innovation, technical
              excellence, and operational improvements that reduce risk,
              minimize waste, and uphold the highest standards of environmental
              and human safety.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-700/50 pt-6 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>© 2025 Oileum. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#">Alumni Association</a>
            <a href="#">Contact Us</a>
          </div>
          <button
            onClick={scrollToTop}
            className="group ml-auto md:ml-0 w-10 h-10 bg-slate-700/50 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="h-5 w-5 text-slate-300 group-hover:text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
