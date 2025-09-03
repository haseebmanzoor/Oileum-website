// src/components/Header/NavItem.jsx - Fixed dropdown behavior
import React from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const NavItem = ({ item, index, activeDropdown, setActiveDropdown }) => {
  let hoverTimeout;

  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }

    if (item.dropdown) {
      setActiveDropdown(item.name);
    }
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing the dropdown
    hoverTimeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay
  };

  const handleDropdownMouseEnter = () => {
    // Keep dropdown open when hovering over it
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
  };

  const handleDropdownMouseLeave = () => {
    // Close dropdown when leaving the dropdown area
    hoverTimeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main nav link */}
      <Link
        to={item.href}
        className={`flex items-center px-4 py-3 text-sm font-medium tracking-wide transition-all rounded-lg hover:bg-slate-800/30 ${
          item.isActive
            ? "text-orange-400 bg-slate-800/20"
            : "text-slate-300 hover:text-white"
        }`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {item.name}
        {item.dropdown && (
          <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
        )}
      </Link>

      {/* Dropdown with invisible bridge */}
      {item.dropdown && activeDropdown === item.name && (
        <div
          className="absolute top-full left-0 pt-2 z-50"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          {/* Invisible bridge to prevent dropdown from closing */}
          <div className="h-2 w-full absolute top-0 left-0 bg-transparent"></div>

          {/* Actual dropdown content */}
          <div className="w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 py-4 transition-all animate-in slide-in-from-top-2 fade-in duration-200">
            <div className="px-6 py-2 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                {item.name}
              </h3>
            </div>
            {item.dropdown.map((subItem) => (
              <Link
                key={subItem.name}
                to={subItem.href}
                className="block px-6 py-3 hover:bg-slate-50 transition-colors group"
                onClick={() => setActiveDropdown(null)} // Close dropdown when clicking a link
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div>
                    <div className="text-slate-900 font-semibold text-sm group-hover:text-orange-600 transition-colors">
                      {subItem.name}
                    </div>
                    <div className="text-slate-500 text-xs mt-1">
                      {subItem.desc}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItem;
