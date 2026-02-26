import Image from "next/image";

export default function Clients() {
  // Masukkan path logo-logo kamu di sini
  const clientLogos = [
    { name: "Client 1", src: "/logos/client1.png" },
    { name: "Client 2", src: "/logos/client2.png" },
    { name: "Client 3", src: "/logos/client3.webp" },
    { name: "Client 4", src: "/logos/client1.png" },
    { name: "Client 5", src: "/logos/client2.png" },
    { name: "Client 6", src: "/logos/client3.webp" },
  ];

  return (
    <section id="clients" className="relative w-full py-16 bg-slate-50">
      <div className="amerta-container">
        
        {/* HEADER KECIL */}
        <div className="flex flex-col items-center text-center mb-12 gap-6">
          <p className="font-heading text-3xl font-bold text-amerta-blue leading-tight z-10">
            Clients
          </p>
          <div className="amerta-line" />
        </div>

        {/* LOGO GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
          {clientLogos.map((logo, index) => (
            <div 
              key={index}
              className="group relative w-full h-12 md:h-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-in-out"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}