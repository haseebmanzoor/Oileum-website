// src/components/Header/MainNavbar.jsx
import React from "react";

// Import existing Navbar core (logic + state)
import Navbar from "./Navbar";

// Import building blocks
import Logo from "./Logo";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";

const MainNavbar = () => {
  return <Navbar Logo={Logo} NavItem={NavItem} MobileMenu={MobileMenu} />;
};

export default MainNavbar;
