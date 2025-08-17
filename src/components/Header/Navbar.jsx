// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";

// ✅ Config (easy to update later)
const CONTACT_INFO = {
  phone: "+1 (555) 123-4567",
  email: "info@oileum.com",
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Nav items data
  const navItems = [
    { name: "About", href: "#about" },
    {
      name: "Services",
      dropdown: [
        {
          name: "EPC Solutions",
          desc: "Complete project delivery",
          href: "#epc",
        },
        {
          name: "Engineering",
          desc: "Advanced design solutions",
          href: "#engineering",
        },
        {
          name: "Procurement",
          desc: "Strategic sourcing",
          href: "#procurement",
        },
        {
          name: "Construction",
          desc: "World-class execution",
          href: "#construction",
        },
        {
          name: "Operations & Maintenance",
          desc: "Lifecycle support",
          href: "#om",
        },
      ],
    },
    { name: "Projects", href: "#projects" },
    {
      name: "Company",
      dropdown: [
        { name: "Leadership Team", desc: "Meet our experts", href: "#team" },
        {
          name: "Certifications",
          desc: "ISO & safety standards",
          href: "#certifications",
        },
        {
          name: "News & Insights",
          desc: "Industry thought leadership",
          href: "#news",
        },
        { name: "Careers", desc: "Join our team", href: "#careers" },
        {
          name: "Sustainability",
          desc: "Our ESG commitment",
          href: "#sustainability",
        },
      ],
    },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/98 backdrop-blur-xl shadow-2xl border-b border-slate-700/50"
          : "bg-slate-900/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 lg:h-20">
          {/* ✅ Real Logo */}
          <Logo />

          {/* ✅ Desktop Nav */}
          <div className="hidden lg:block ml-10">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <NavItem
                  key={item.name}
                  item={item}
                  index={index}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                />
              ))}
            </div>
          </div>

          {/* ✅ CTA button (desktop only) */}
          <div className="hidden lg:block">
            <button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-orange-500 relative overflow-hidden group">
              <span className="relative z-10">Request Proposal</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
          </div>

          {/* ✅ Mobile Toggle */}
          <div className="lg:hidden">
            <button
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white hover:bg-slate-800 p-2 rounded-md transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* ✅ Mobile Menu Component */}
        <MobileMenu
          navItems={navItems}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          contact={CONTACT_INFO}
        />
      </div>
    </nav>
  );
};

export default Navbar;
