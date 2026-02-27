"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { 
      name: "About", 
      href: "#about",
      submenu: [
        { name: "About Amerta", href: "#about" },
        { name: "Team", href: "#team" },
      ]
    },
    { 
      name: "Portfolio", 
      href: "#portfolio",
      submenu: [
        { name: "Projects", href: "#portfolio" },
        { name: "Insight", href: "#insight" },
      ]
    },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 px-6 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto md:px-6 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="relative z-110">
            <Image 
              src="/amertalogo.png" 
              alt="Amerta Logo" 
              width={80} 
              height={40}
              className="w-20 md:w-24"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  href={link.href}
                  className={`flex items-center gap-1.5 font-body text-[13px] tracking-wider font-bold transition-all duration-300 ${
                    isScrolled ? "text-slate-700" : "text-amerta-blue"
                  } hover:text-amerta-teal`}
                >
                  {link.name.toUpperCase()}
                  {link.submenu && (
                    <span className="text-[8px] opacity-50 group-hover:rotate-180 transition-transform duration-300">▼</span>
                  )}
                </Link>

                {/* DROPDOWN BOX */}
                {link.submenu && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white shadow-2xl rounded-2xl p-2 min-w-45 border border-slate-50">
                      {link.submenu.map((sub) => (
                        <Link 
                          key={sub.name} 
                          href={sub.href}
                          className="block px-5 py-3 text-[13px] font-semibold text-slate-500 hover:bg-slate-50 hover:text-amerta-blue rounded-xl transition-all"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* HAMBURGER (Mobile) */}
          <button 
            className="md:hidden relative z-110 flex flex-col gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-amerta-blue transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-amerta-blue transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-amerta-blue transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 bg-white z-105 flex flex-col justify-center px-12 transition-all duration-700 md:hidden ${
        isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className="space-y-8">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              <Link 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-heading font-black text-amerta-blue"
              >
                {link.name}
              </Link>
              {link.submenu && (
                <div className="mt-4 flex flex-col gap-3 pl-4 border-l-2 border-slate-100">
                  {link.submenu.map(sub => (
                    <Link 
                      key={sub.name} 
                      href={sub.href} 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="text-lg font-bold text-slate-400 hover:text-amerta-teal"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}