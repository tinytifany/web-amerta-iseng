"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/src/components/Footer";

export default function ProjectDetailPage() {
  // Nanti data ini diambil berdasarkan ID dari CMS/API
  const project = {
    title: "E-Commerce Fluid",
    client: "Global Retail Corp",
    category: "Web App",
    date: "December 2025",
    desc: "A high-performance e-commerce platform built for scale. Featuring real-time inventory tracking, AI-powered recommendations, and a seamless checkout experience that boosted conversion by 40%.",
    images: [
      "/about-image1.jpg",
      "/about-image1.jpg"
    ]
  };

  return (
    <main className="relative pt-32 min-h-screen bg-white">
      {/* SECTION 1: HERO IMAGE */}
      <section className="container mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative aspect-video lg:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image 
            src={project.images[0]} 
            alt={project.title} 
            fill 
            className="object-cover"
            priority 
          />
        </motion.div>
      </section>

      {/* SECTION 2: CONTENT & METADATA */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* KIRI: Title & Description */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl lg:text-6xl font-heading font-black text-amerta-blue uppercase tracking-tighter">
                {project.title}
              </h1>
              <div className="h-1 w-20 bg-amerta-teal mt-4" />
            </motion.div>

            <p className="text-slate-600 text-lg leading-relaxed font-body">
              {project.desc}
            </p>

            {/* Placeholder for more project images/screenshots */}
            <div className="grid grid-cols-1 gap-6 pt-8">
               <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100">
                  <Image src={project.images[1]} alt="Project Screenshot" fill className="object-cover" />
               </div>
            </div>
          </div>

          {/* KANAN: Sidebar Info (Sticky di Desktop) */}
          <aside className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky top-32 p-8 rounded-3xl border border-slate-100 bg-slate-50/50 space-y-8"
            >
              {/* Project Info List */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Client</h4>
                  <p className="font-heading font-bold text-amerta-blue text-lg">{project.client}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Category</h4>
                  <span className="inline-block px-3 py-1 bg-amerta-teal text-white text-[10px] font-bold rounded-full uppercase tracking-tighter">
                    {project.category}
                  </span>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Completion Date</h4>
                  <p className="font-body text-slate-600">{project.date}</p>
                </div>
              </div>

              <hr className="border-slate-200" />

              {/* CALL TO ACTION */}
              <div className="space-y-4">
                <p className="text-xs text-slate-500 italic">Inspired by this project?</p>
                <button className="w-full py-4 bg-amerta-blue hover:bg-amerta-teal text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl transition-all shadow-lg shadow-amerta-blue/20 transform hover:-translate-y-1 active:scale-95">
                  Start a project like this
                </button>
              </div>
            </motion.div>
          </aside>

        </div>
      </section>

      <Footer />
    </main>
  );
}