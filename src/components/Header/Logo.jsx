// src/components/Header/Logo.jsx
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/" className="flex items-center space-x-3">
    <img
      src="/logos/oileum-logo.jpg"
      alt="Oileum Logo"
      className="h-10 w-auto object-contain"
    />
    <div className="flex flex-col">
      <span className="text-xs text-slate-400 font-medium tracking-widest">
        ENGINEERING SOLUTIONS
      </span>
    </div>
  </Link>
);

export default Logo;
