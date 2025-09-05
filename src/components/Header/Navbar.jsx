// src/components/Header/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import Logo from "./Logo";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";

const CONTACT_INFO = {
  phone: "+971 4 123-4567",
  email: "info@oileum.com",
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    { name: "Home", href: "/", isActive: location.pathname === "/" },

    {
      name: "About Us",
      href: "/about",
      isActive: location.pathname.startsWith("/about"),
      dropdown: [
        { name: "Company Profile", desc: "Who we are", href: "/about#profile" },
        { name: "CEO Message", desc: "Message from CEO", href: "/about#ceo" },
        { name: "Our Value", desc: "Core principles", href: "/about#value" },
      ],
    },

    {
      name: "Services",
      href: "/services",
      isActive: location.pathname.startsWith("/services"),
      dropdown: [
        {
          name: "Engineering Design",
          desc: "Design solutions",
          href: "/services/engineering",
        },
        {
          name: "Procurement Services",
          desc: "Supply chain",
          href: "/services/procurement",
        },
        {
          name: "Construction",
          desc: "Field execution",
          href: "/services/construction",
        },
      ],
    },

    {
      name: "Projects",
      href: "/projects",
      isActive: location.pathname.startsWith("/projects"),
      dropdown: [
        {
          name: "Oil & Gas",
          desc: "Refinery & pipeline",
          href: "/projects/oil-gas",
        },
        {
          name: "Infrastructure",
          desc: "Industrial construction",
          href: "/projects/infrastructure",
        },
        {
          name: "Energy Solutions",
          desc: "Power projects",
          href: "/projects/energy",
        },
        {
          name: "Case Studies",
          desc: "Successful deliveries",
          href: "/projects/case-studies",
        },
      ],
    },

    {
      name: "Sustainability",
      href: "/sustainability",
      isActive: location.pathname.startsWith("/sustainability"),
      dropdown: [
        {
          name: "HSE Practices",
          desc: "Health & Safety",
          href: "/sustainability/hse",
        },
        {
          name: "Community Impact",
          desc: "Community work",
          href: "/sustainability/community",
        },
        {
          name: "Green Initiatives",
          desc: "Environmental",
          href: "/sustainability/initiatives",
        },
      ],
    },

    {
      name: "Careers",
      href: "/careers",
      isActive: location.pathname.startsWith("/careers"),
      dropdown: [
        {
          name: "Openings",
          desc: "Available positions",
          href: "/careers/openings",
        },
        { name: "Life at Oileum", desc: "Culture", href: "/careers/culture" },
      ],
    },

    {
      name: "Contact",
      href: "/contact",
      isActive: location.pathname === "/contact",
    },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#181c2c] shadow-2xl border-b border-slate-700/50"
          : "bg-[#181c2c]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 lg:h-20">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

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

          <div className="hidden lg:block">
            <Link to="/contact?inquiry=proposal">
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-orange-500 relative overflow-hidden group">
                <span className="relative z-10">Request Proposal</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            </Link>
          </div>

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
