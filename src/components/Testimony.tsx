// import Image from "next/image";

// export default function Testimony() {
//   const reviews = Array.from({ length: 6 });

//   return (
//     <section className="py-20 bg-white relative overflow-hidden">
//       {/* Supergraphic Kiri (Copied from layout) */}
//       <div className="absolute left-0 bottom-[10%] opacity-40 translate-x-[-20%]">
//         <Image src="/supergraphic-left.png" alt="" width={150} height={150} />
//       </div>

//       <div className="container mx-auto px-6 text-center relative z-10">
//         <h2 className="font-heading text-4xl font-extrabold text-amerta-blue mb-16">
//           Testimony
//         </h2>

//         {/* Grid Testimony Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {reviews.map((_, index) => (
//             <div 
//               key={index} 
//               className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-left hover:-translate-y-2 transition-transform duration-300"
//             >
//               <h3 className="font-heading text-xl font-bold text-slate-900 mb-4">
//                 Lorem Ipsum
//               </h3>
//               <p className="font-body text-sm text-slate-500 leading-relaxed italic">
//                 "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Supergraphic Kanan Bawah */}
//       <div className="absolute right-0 bottom-0 opacity-40 translate-x-[20%] translate-y-[20%] rotate-180">
//         <Image src="/supergraphic-right.png" alt="" width={200} height={200} />
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function Testimony() {
  // Pakai Embla biar PASTI horizontal dan PASTI bisa di-swipe
  const [emblaRef] = useEmblaCarousel({ 
    align: "start", 
    dragFree: true
  });

  const testimonials = [
    { name: "Alex Johnson", role: "CEO at TechFlow", text: "Amerta transformed our legacy system into a modern masterpiece." },
    { name: "Sarah Wijaya", role: "Marketing Director", text: "Desainnya juara! Mereka paham apa yang kita mau." },
    { name: "David Chen", role: "Founder of CreativeCo", text: "The best investment for our digital presence." },
    { name: "Budi Santoso", role: "Product Manager", text: "Eksekusi yang sangat cepat dan komunikasi lancar." },
  ];

  return (
    <section id="testimony" className="relative w-full py-24 mb-10 bg-white overflow-x-clip"> {/* Pakai overflow-x-clip sesuai temuan maut kamu tadi! */}
  
      {/* --- SUPERGRAPHICS (Pindah ke dalam section tapi di luar container) --- */}
      <div className="absolute top-0 left-0 w-75 md:w-125 opacity-30 pointer-events-none z-0">
        <Image src="/sg-7.png" alt="" width={100} height={100} className="rotate-180 -scale-x-100" />
      </div>
      
      <div className="absolute -bottom-50 -right-80 w-75 md:w-125 opacity-30 pointer-events-none z-0">
        <Image src="/sg-7.png" alt="" width={200} height={200} className="-rotate-90 -scale-x-100" />
      </div>

      <div className="amerta-container relative z-10">
        {/* HEADER KECIL */}
        <div className="flex flex-col items-center text-center mb-12 gap-6">
          <p className="font-heading text-3xl font-bold text-amerta-blue leading-tight z-10">
            Testimony
          </p>
          <div className="amerta-line" />
        </div>

        {/* EMBLA WRAPPER */}
        {/* Pastikan div embla ini saja yang overflow-hidden, jangan section-nya! */}
        <div className="embla overflow-visible" ref={emblaRef}> 
          <div className="embla__container flex gap-8">
            {testimonials.map((item, index) => (
              <div key={index} className="embla__slide flex-[0_0_50%] md:flex-[0_0_35%] lg:flex-[0_0_25%] min-w-0">
                <div className={`h-full p-10 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between bg-white transition-all duration-500
                  ${index % 2 !== 0 ? 'lg:translate-y-12' : ''}
                `}>
                  <div>
                    <div className="text-amerta-teal text-lg font-serif mb-4">“</div>
                    <p className="font-body text-slate-600 text-sm italic mb-6 leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-amerta-teal to-amerta-blue shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold text-amerta-blue leading-tight">{item.name}</h4>
                      <p className="text-slate-400 text-xs">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}