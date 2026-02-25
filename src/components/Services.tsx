export default function Services() {
  const services = [
    { title: "Lorem ipsum", color: "border-amerta-blue" },
    { title: "Lorem ipsum", color: "border-amerta-teal" },
    { title: "Lorem ipsum", color: "border-amerta-blue" },
    { title: "Lorem ipsum", color: "border-amerta-teal" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* KOLOM KIRI: Judul & Deskripsi */}
        <div className="sticky top-32">
          <h2 className="font-heading text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Our Services
          </h2>
          <p className="font-body text-slate-600 mb-10 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
          
          <button className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-amerta-teal to-amerta-blue text-white font-bold rounded-tl-2xl rounded-br-2xl hover:scale-105 transition-all shadow-lg shadow-amerta-teal/20">
            More Services 
            <span>→</span>
          </button>
        </div>

        {/* KOLOM KANAN: List Cards */}
        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`flex items-start gap-6 p-8 bg-white border-2 ${service.color} rounded-tl-[40px] rounded-br-[40px] rounded-tr-xl rounded-bl-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Icon Placeholder (Monitor + Gear) */}
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center border-2 border-slate-100 rounded-xl">
                 <svg className="w-10 h-10 text-amerta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
              </div>

              {/* Teks Service */}
              <div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-slate-500 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}