// src/components/Header/NavItem.jsx
import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ item }) => {
  return (
    <Link
      to={item.href}
      className={`flex items-center px-4 py-3 text-base font-medium tracking-wide whitespace-nowrap transition-all rounded-lg hover:bg-slate-800/30 ${
        item.isActive
          ? "text-orange-400 bg-slate-800/20"
          : "text-slate-300 hover:text-white"
      }`}
    >
      {item.name}
    </Link>
  );
};

export default NavItem;
