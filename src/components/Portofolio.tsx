"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const projects = [
  { title: "E-Commerce App", category: "Mobile", img: "/about-image1.jpg" },
  { title: "Banking Dashboard", category: "Web Design", img: "/about-image1.jpg" },
  { title: "Travel Platform", category: "Web App", img: "/about-image1.jpg" },
  { title: "Amerta Branding", category: "Graphic Design", img: "/about-image1.jpg" },
  { title: "Logistics System", category: "Web App", img: "/about-image1.jpg" },
];

export default function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "center", // Kartu aktif selalu di tengah
    skipSnaps: false 
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Logic buat update index saat slide geser
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Fungsi buat tombol panah
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section id="portfolio" className="relative w-full py-24 overflow-hidden">
      <div className="amerta-container">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-12 gap-6">
          <h2 className="font-heading text-3xl font-bold text-amerta-blue leading-tight z-10">Portfolio</h2>
          <div className="amerta-line" />
        </div>

        {/* CAROUSEL WRAPPER */}
        <div className="relative px-4">
          
          {/* TOMBOL PANAH KIRI */}
          <button 
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/90 backdrop-blur-md shadow-xl rounded-full flex items-center justify-center text-amerta-blue hover:bg-amerta-teal hover:text-white transition-all active:scale-90"
          >
            {/* <span className="text-2xl">←</span> */}
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* EMBLA VIEWPORT */}
          <div className="embla overflow-visible" ref={emblaRef}>
            <div className="embla__container flex -ml-10 md:-ml-20"> {/* Negative margin buat efek overlap */}
              {projects.map((project, index) => {
                const isActive = index === selectedIndex;
                
                return (
                  <div 
                    key={index} 
                    className={`embla__slide flex-[0_0_70%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0 pl-6 md:pl-8 transition-all duration-700 ease-in-out
                      ${isActive 
                        ? "z-20 scale-100 opacity-100 blur-none" 
                        : "z-10 scale-85 opacity-30 blur-[2px]"
                      }`}
                  >
                    <div className="relative aspect-square overflow-hidden rounded-4xl shadow-xl bg-slate-200">
                      <Image 
                        src={project.img} 
                        alt={project.title} 
                        fill 
                        className="object-cover" 
                      />
                      
                      {/* TEXT BOX - Selalu Muncul */}
                      <div className="absolute inset-0 bg-linear-to-t from-amerta-blue/90 via-amerta-blue/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                        <div className={`transition-all duration-700 delay-100 ${isActive ? "opacity-100 translate-y-0" : "opacity-40 translate-y-4"}`}>
                          <p className="text-amerta-teal font-semibold text-sm mb-1">
                            {project.category}
                          </p>
                          <h3 className="text-white text-xl md:text-2xl font-bold">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TOMBOL PANAH KANAN */}
          <button 
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/90 backdrop-blur-md shadow-xl rounded-full flex items-center justify-center text-amerta-blue hover:bg-amerta-teal hover:text-white transition-all active:scale-90"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
             </svg>
          </button>
        </div>
        <div className="flex flex-col items-center text-center mt-12">
          <button className="amerta-btn-primary group">
            <span className="tracking-wide">More projects</span>
            <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}