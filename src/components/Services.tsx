import Image from "next/image";

export default function Services() {
  const serviceList = [
    { title: "Mobile Development", desc: "Build seamless apps for iOS and Android." },
    { title: "Web Development", desc: "Scalable and responsive web applications." },
    { title: "UI/UX Design", desc: "User-centric designs that convert." },
    { title: "Cloud Solutions", desc: "Safe and scalable cloud infrastructure." },
    { title: "QA Testing", desc: "Ensuring your product is bug-free." },
  ];

  return (
    <section id="services" className="relative w-full py-24 bg-white overflow-x-clip overflow-y-visible">
      
      <div className="amerta-container relative">
        {/* Grid Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* --- KOLOM KIRI (Judul + Supergraphic) --- */}
          <div className="lg:sticky lg:top-32 gap-6 h-fit flex flex-col items-start relative">
            
            {/* Konten Judul */}
            <h2 className="font-heading text-3xl font-bold text-amerta-blue leading-tight z-10">
              Our Services
            </h2>
            <div className="amerta-line" />
            <p className="font-body text-sm text-slate-600 leading-relaxed max-w-prose z-10">
              Solusi teknologi komprehensif untuk membantu bisnis Anda...
            </p>
            <button className="amerta-btn-primary group">
              <span className="tracking-wide">Consult</span>
              <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
            </button>

            {/* --- SUPERGRAPHIC --- */}
            <div className="absolute top-1/2 left-192 -translate-y-1/2 pointer-events-none">
              <div className="w-125 md:w-200 opacity-20 translate-x-20">
                  <Image 
                    src="/sg-5.png" 
                    alt="" 
                    width={500} 
                    height={500} 
                    className="rotate-180"
                  />
              </div>
            </div>
          </div>

          {/* --- KOLOM KANAN (List Card) --- */}
          <div className="flex flex-col gap-8">
            {serviceList.map((service, index) => (
              <div 
                key={index} 
                className="group p-12 bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-amerta-teal/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-amerta-teal to-amerta-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold text-amerta-blue mb-4">{service.title}</h3>
                <p className="text-slate-500">{service.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}