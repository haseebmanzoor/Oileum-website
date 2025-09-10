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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", href: "/", isActive: location.pathname === "/" },
    {
      name: "About Us",
      href: "/about",
      isActive: location.pathname === "/about",
    },
    {
      name: "Services",
      href: "/services",
      isActive: location.pathname === "/services",
    },
    {
      name: "Clients",
      href: "/clients",
      isActive: location.pathname === "/clients",
    },
    {
      name: "Sustainability",
      href: "/sustainability",
      isActive: location.pathname === "/sustainability",
    },
    {
      name: "Careers",
      href: "/careers",
      isActive: location.pathname === "/careers",
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
        <div className="flex items-center justify-between h-20 py-2">
          {/* Logo */}
          <div className="flex-shrink-0 pl-4">
            <Logo />
          </div>

          {/* Desktop Nav and CTA */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </div>
            <Link to="/contact?inquiry=proposal">
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-2 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-orange-500 relative overflow-hidden group">
                <span className="relative z-10">Request Proposal</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden pr-4">
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

        {/* Mobile Menu */}
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
