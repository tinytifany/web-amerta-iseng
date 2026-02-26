"use client"; // Wajib karena kita pake state scroll

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 px-6 py-4 ${
        isScrolled 
          ? "bg-white/70 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo di Kiri */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/amertalogo.png" 
            alt="Amerta Logo" 
            width={80} 
            height={40}
          />
        </Link>

        {/* Menu di Kanan */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`font-body text-sm font-semibold transition-colors ${
                isScrolled ? "text-slate-700 hover:text-amerta-blue" : "text-amerta-blue/80 hover:text-amerta-blue"
              }`}
            >
              {link.name}
            </a>
          ))}
          {/* <button className="px-5 py-2 bg-amerta-blue text-white text-xs font-bold rounded-full hover:bg-amerta-teal transition-all active:scale-95">
            Let's Talk
          </button> */}
        </div>
      </div>
    </nav>
  );
}