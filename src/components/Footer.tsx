import Image from "next/image";
import { BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi";

export default function Footer() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-amerta-teal via-amerta-blue to-amerta-blue py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-white">
        
        {/* Kolom 1: Brand & Jargon */}
        <div className="flex flex-col gap-2">
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            PT Amerta
          </h2>
          <p className="font-body text-white/80 text-sm italic">
            jargon here
          </p>
        </div>

        {/* Kolom 2: Our Office */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-xl font-bold">Our Office</h3>
          <div className="flex items-start gap-3 text-white/90">
             <span className="mt-1">📍</span>
             <p className="font-body text-sm leading-relaxed">
               Jl. Boulevard No. 123,<br /> Bandung
             </p>
          </div>
        </div>

        {/* Kolom 3: Our Contact & Socials */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-xl font-bold">Our Contact</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <span>📞</span> +62 22 12345678
            </div>
            <div className="flex items-center gap-3">
              <span>📧</span> info@amerta.com
            </div>
          </div>
          {/* Social Icons Placeholder */}
          <div className="flex mt-2">
            <a 
                href="https://linkedin.com/..." 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-all duration-300 transform hover:scale-125"
            >
                <BiLogoLinkedinSquare className="text-3xl" />
            </a>
            
            <a 
                href="https://instagram.com/..." 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-all duration-300 transform hover:scale-125"
            >
                <BiLogoInstagram className="text-3xl" />
            </a>
            </div>
        </div>

        {/* Kolom 4: Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-xl font-bold">Links</h3>
          <ul className="flex flex-col gap-3 text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-white/80 hover:text-white hover:translate-x-2 inline-block transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Garis Bawah & Copyright */}
      <div className="container mx-auto mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-xs">
        © 2026 PT Amerta. All Rights Reserved.
      </div>
    </footer>
  );
}