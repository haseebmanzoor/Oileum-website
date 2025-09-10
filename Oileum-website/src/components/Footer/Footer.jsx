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
import { Link } from "react-router-dom";

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
              Oileum has built a reputation as a trusted partner for oil & Gas
              projects. Our Team understand the value of relationships to ensure
              that we comprehensively address all requirements at each stage in
              a project's development. By closely collaborating with our
              clients, contractors, subcontractors and vendor/suppliers, we
              deliver projects through specialists who understand on-the-ground
              context and industry expectations.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-700/50 pt-6 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>© 2025 Oileum. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#">Alumni Association</a>
            {/* Updated Contact Us link */}
            <Link to="/contact">Contact Us</Link>
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
