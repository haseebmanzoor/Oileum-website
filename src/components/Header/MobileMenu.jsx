// src/components/Header/MobileMenu.jsx
import React from "react";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const MobileMenu = ({
  navItems,
  mobileMenuOpen,
  setMobileMenuOpen,
  contact,
}) => {
  return (
    <div
      className={`lg:hidden transition-all duration-500 ${
        mobileMenuOpen
          ? "max-h-screen opacity-100 visible"
          : "max-h-0 opacity-0 invisible"
      } overflow-hidden`}
    >
      <div className="px-4 pt-4 pb-8 space-y-2 bg-[#181c2c] rounded-b-2xl border-t border-slate-700/50 mx-4 mb-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className={`block w-full px-4 py-3 rounded-xl font-medium transition-all ${
              item.isActive
                ? "text-orange-400 bg-slate-800/30"
                : "text-slate-300 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            {item.name}
          </Link>
        ))}

        {/* CTA */}
        <div className="pt-6 px-4">
          <Link
            to="/contact?inquiry=proposal"
            onClick={() => setMobileMenuOpen(false)}
          >
            <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all transform hover:scale-105">
              Request Proposal
            </button>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="pt-4 px-4 border-t border-slate-700/50">
          <div className="text-xs text-slate-500 mb-2">Need Help?</div>
          <div className="space-y-1">
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center space-x-2 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <Phone className="h-3 w-3" />
              <span>{contact.phone}</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center space-x-2 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="h-3 w-3" />
              <span>{contact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
