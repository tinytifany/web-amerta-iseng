import { BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi";

export default function Footer() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    // Padding vertikal dikurangin dari py-16 jadi py-10 (desktop)
    <footer className="w-full bg-gradient-to-b lg:bg-gradient-to-r from-amerta-teal via-amerta-blue to-amerta-blue py-12 lg:py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-4 text-white">
        
        {/* Kolom 1: Brand - Lebih rapat */}
        <div className="flex flex-col gap-1">
          <h2 className="font-heading text-xl font-bold tracking-tight">
            PT Amerta
          </h2>
          <p className="font-body text-white/70 text-xs italic max-w-[200px]">
            Empowering brands through digital excellence.
          </p>
        </div>

        {/* Kolom 2: Office - Teks diperkecil dikit */}
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-sm font-black uppercase tracking-widest opacity-60">Our Office</h3>
          <div className="flex items-start gap-2 text-white/90">
             <span className="text-xs">📍</span>
             <p className="font-body text-xs leading-relaxed">
               Jl. Boulevard No. 123, Bandung
             </p>
          </div>
        </div>

        {/* Kolom 3: Contact - Dibuat lebih slim */}
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-sm font-black uppercase tracking-widest opacity-60">Contact</h3>
          <div className="space-y-1 text-xs">
            <p>📞 +62 22 12345678</p>
            <p>📧 info@amerta.com</p>
          </div>
          <div className="flex gap-3 mt-1">
            <a href="#" className="text-white hover:opacity-70 transition-all transform hover:scale-110">
                <BiLogoLinkedinSquare className="text-2xl" />
            </a>
            <a href="#" className="text-white hover:opacity-70 transition-all transform hover:scale-110">
                <BiLogoInstagram className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Kolom 4: Links - Horizontal di desktop biar makin hemat tempat */}
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-sm font-black uppercase tracking-widest opacity-60">Links</h3>
          <ul className="flex flex-col gap-1 text-xs">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-white/70 hover:text-white transition-all">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Garis Bawah - Margin dikurangin drastis */}
      <div className="container mx-auto mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-[10px]">
        <p>© 2026 PT Amerta. All Rights Reserved.</p>
        <div className="flex gap-6 italic">
          <span>Jakarta • Bandung • Surabaya</span>
        </div>
      </div>
    </footer>
  );
}