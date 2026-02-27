"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web App", "Mobile", "UI/UX", "System"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Fluid",
      category: "Web App",
      desc: "Platform belanja online dengan sistem inventory real-time.",
      img: "/about-image1.jpg",
    },
    {
      id: 2,
      title: "Amerta Health",
      category: "Mobile",
      desc: "Aplikasi pemantau kesehatan terintegrasi dengan smartwatch.",
      img: "/about-image1.jpg",
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      category: "UI/UX",
      desc: "Visualisasi data kompleks untuk pengambilan keputusan cepat.",
      img: "/about-image1.jpg",
    },
    {
      id: 4,
      title: "Cloud Guard",
      category: "System",
      desc: "Sistem keamanan server otomatis dengan AI monitoring.",
      img: "/about-image1.jpg",
    },
    // Tambah data lain di sini nanti via CMS
  ];

  // Logika Filter
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-heading font-black text-amerta-blue tracking-tighter uppercase"
          >
            OUR <span className="text-amerta-teal">WORKS.</span>
          </motion.h1>
          <p className="mt-6 text-slate-500 text-lg font-body">
            Kumpulan solusi digital yang telah kami bangun dengan presisi tinggi. 
            Setiap proyek adalah bukti komitmen kami terhadap kualitas.
          </p>
        </div>

        {/* TAG FILTER */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                filter === cat 
                ? "bg-amerta-blue text-white border-amerta-blue shadow-lg shadow-amerta-blue/20" 
                : "bg-transparent text-slate-400 border-slate-200 hover:border-amerta-teal hover:text-amerta-teal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <Image 
                    src={project.img} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Badge Category */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                    <span className="text-[10px] font-black text-amerta-blue uppercase tracking-tighter">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-bold text-amerta-blue group-hover:text-amerta-teal transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-body leading-relaxed line-clamp-2">
                    {project.desc}
                  </p>
                  <button className="pt-4 flex items-center gap-2 text-amerta-blue font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    View Details 
                    <span className="text-lg">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* EMPTY STATE */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-400 italic">No projects found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
}