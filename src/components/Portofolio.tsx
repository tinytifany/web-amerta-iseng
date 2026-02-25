"use client";

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

export default function Portfolio() {
  // align: 'center' supaya yang aktif selalu di tengah
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center' 
  })

  // Fungsi buat jalanin panah
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const projects = [
    { id: 1, title: "Project Amerta 1", image: "/project1.jpg" },
    { id: 2, title: "Project Amerta 2", image: "/project2.jpg" },
    { id: 3, title: "Project Amerta 3", image: "/project3.jpg" },
    { id: 4, title: "Project Amerta 4", image: "/project4.jpg" },
    { id: 5, title: "Project Amerta 5", image: "/project1.jpg" },
  ]

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto text-center relative px-10">
        <h2 className="font-heading text-3xl font-extrabold text-amerta-blue mb-12">
          Portfolio
        </h2>

        {/* CONTAINER UTAMA */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* TOMBOL PANAH KIRI */}
          <button 
            onClick={scrollPrev}
            className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-40 text-amerta-teal hover:scale-125 transition-all"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* VIEWPORT EMBLA */}
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  /* TRIK NUMPUK: flex-basis kecil (200px) tapi margin negatif (-mx-10) */
                  className="flex-[0_0_200px] md:flex-[0_0_260px] min-w-0 -mx-8 md:-mx-12 transition-all duration-500"
                >
                  <div className="group relative aspect-[3/4] rounded-[32px] overflow-hidden border-4 border-white shadow-xl transition-all duration-500 hover:scale-110 hover:z-50 opacity-40 hover:opacity-100 scale-90">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover" 
                    />
                    
                    {/* INFO OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-amerta-blue/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="font-heading text-white text-sm font-bold text-left">{project.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TOMBOL PANAH KANAN */}
          <button 
            onClick={scrollNext}
            className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-40 text-amerta-teal hover:scale-125 transition-all"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
        <button className="mt-12 px-8 py-2 border-2 border-amerta-teal text-amerta-teal font-bold rounded-full text-xs uppercase tracking-widest hover:bg-amerta-teal hover:text-white transition-all">
          See All Projects
        </button>
      </div>
    </section>
  )
}