import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Award,
  Globe,
} from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    {
      name: "Services",
      href: "#services",
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

  const certifications = [];

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-slate-900/98 backdrop-blur-xl shadow-2xl border-b border-slate-700/50"
            : "bg-slate-900/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 lg:h-20">
            {/* Enhanced Logo */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl lg:text-3xl font-bold tracking-wider text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                  OILEUM
                </h1>
                <span className="text-xs text-slate-400 font-medium tracking-widest">
                  ENERGY SOLUTIONS
                </span>
              </div>
            </div>

            {/* Desktop Navigation with Dropdowns */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() =>
                      setActiveDropdown(item.dropdown ? item.name : null)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={item.href}
                      className="flex items-center text-slate-300 hover:text-white px-4 py-3 text-sm font-medium tracking-wide transition-all duration-300 group rounded-lg hover:bg-slate-800/30"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {item.name}
                      {item.dropdown && (
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                      )}
                    </a>

                    {/* Enhanced Dropdown */}
                    {item.dropdown && activeDropdown === item.name && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 py-4 mt-2 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                        <div className="px-6 py-2 border-b border-slate-100">
                          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                            {item.name}
                          </h3>
                        </div>
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-6 py-3 hover:bg-slate-50 transition-colors duration-200 group/item"
                          >
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                              <div>
                                <div className="text-slate-900 font-semibold text-sm group-hover/item:text-orange-600 transition-colors">
                                  {subItem.name}
                                </div>
                                <div className="text-slate-500 text-xs mt-1">
                                  {subItem.desc}
                                </div>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA Button - Desktop */}
            <div className="hidden lg:block">
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-900 relative overflow-hidden group">
                <span className="relative z-10">Request Proposal</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-300 hover:text-white hover:bg-slate-800 p-2 rounded-md transition-colors duration-300"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-500 ease-in-out ${
              mobileMenuOpen
                ? "max-h-screen opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            } overflow-hidden`}
          >
            <div className="px-4 pt-4 pb-8 space-y-2 bg-slate-900/98 backdrop-blur-xl rounded-b-2xl border-t border-slate-700/50 mx-4 mb-4">
              {navItems.map((item, index) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-300 font-medium"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="h-4 w-4" />}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800/30 rounded-lg transition-all duration-300"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA Button */}
              <div className="pt-6 px-4">
                <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105">
                  Request Proposal
                </button>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 px-4 border-t border-slate-700/50">
                <div className="text-xs text-slate-500 mb-2">Need Help?</div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-xs text-slate-400">
                    <Phone className="h-3 w-3" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-400">
                    <Mail className="h-3 w-3" />
                    <span>info@oileum.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
