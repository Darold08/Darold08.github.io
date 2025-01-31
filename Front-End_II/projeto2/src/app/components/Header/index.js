"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import "./styles.css";
import Image from "next/image"; 
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 
  const closeMenuOnClickOutside = (e) => {
    const menu = document.querySelector('.nav');
    const menuButton = document.querySelector('.menu-toggle');
    if (menu && !menu.contains(e.target) && !menuButton.contains(e.target)) {
      setIsOpen(false); 
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOnClickOutside);
    return () => {
      document.removeEventListener("mousedown", closeMenuOnClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <Image src="/imagens/logo.jpg" alt="Logo" className="logo"  width="50" height="50"/>
    

      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Abrir menu"
      >
        ☰
      </button>
      <nav className={`nav ${isOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li><Link href="/medico">Médico</Link></li>
          <li><Link href="/paciente">Paciente</Link></li>
          <li><Link href="/consulta">Consulta</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
