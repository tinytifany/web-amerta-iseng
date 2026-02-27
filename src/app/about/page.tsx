"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/src/components/Footer";

export default function AboutPage() {
  const principles = [
    { letter: "A", title: "Adaptive", desc: "Selalu berevolusi dengan teknologi terbaru." },
    { letter: "M", title: "Modern", desc: "Estetika bersih, pengalaman yang mulus." },
    { letter: "E", title: "Excellence", desc: "Tidak ada ruang untuk 'cukup baik'. Hanya yang terbaik." },
    { letter: "R", title: "Reliable", desc: "Tujuan Anda adalah misi pribadi kami." },
    { letter: "T", title: "Trustworthy", desc: "Transparansi dalam setiap baris kode." },
    { letter: "A", title: "Authentic", desc: "Ide orisinal untuk brand yang orisinal." },
  ];

  const milestones = [
    { year: "2023", title: "The Genesis", desc: "Amerta lahir dari garasi kecil di Bandung." },
    { year: "2024", title: "Going Global", desc: "Menangani klien internasional pertama kami dari Singapura." },
    { year: "2025", title: "Tech Mastery", desc: "Diakui sebagai digital agency paling inovatif." },
    { year: "2026", title: "Future Forward", desc: "Ekspansi ke solusi digital berbasis AI." },
  ];

  return (
    <main className="relative pt-32 min-h-screen">
      {/* SUPERGRAPHIC STICKY (sg-1.png) */}
      <div className="fixed bottom-[-5%] left-[-5%] w-[300px] md:w-[500px] aspect-square pointer-events-none z-0 opacity-40 select-none">
        <Image 
          src="/sg-1.png" 
          alt="Amerta Supergraphic" 
          fill
          className="object-contain"
          priority // Kita kasih priority biar lgsg load pas halaman dibuka
        />
      </div>
      <div className="relative z-10">
      {/* SECTION 1: GENERAL ABOUT */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl lg:text-7xl font-heading font-black text-amerta-blue tracking-tighter uppercase leading-none">
              Beyond the <br /> <span className="text-amerta-teal">Pixels.</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed font-body">
              Amerta adalah pusat kreatif digital yang berbasis di Bandung. Kami tidak hanya membangun situs web; 
              kami merancang pengalaman digital yang beresonansi dengan manusia dan mendorong pertumbuhan bisnis.
            </p>
            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-amerta-teal pl-4">
                <h4 className="font-bold text-amerta-blue uppercase text-sm tracking-widest mb-1">Visi</h4>
                <p className="text-slate-500 text-xs italic">Menjadi kekuatan cair yang membentuk masa depan interaksi digital.</p>
              </div>
              <div className="border-l-4 border-amerta-blue pl-4">
                <h4 className="font-bold text-amerta-blue uppercase text-sm tracking-widest mb-1">Misi</h4>
                <p className="text-slate-500 text-xs italic">Memberdayakan brand melalui teknologi inovatif dan desain yang bermakna.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[550px] rounded-3xl overflow-hidden"
          >
            <Image 
              src="/office-placeholder.jpg" // Ganti dengan path gambar aslimu nanti
              alt="Amerta Office" 
              fill 
              className="object-cover transition-transform duration-700 hover:scale-105" 
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CORE PRINCIPLES (A-M-E-R-T-A) */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-amerta-blue uppercase tracking-[0.2em]">Core Principles</h2>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:border-amerta-teal transition-all duration-300 overflow-hidden"
              >
                <span className="absolute -right-4 -bottom-6 text-9xl font-black text-slate-50 group-hover:text-amerta-teal/5 transition-colors pointer-events-none">
                  {item.letter}
                </span>
                <h3 className="font-heading text-xl font-bold text-amerta-blue mb-3 relative z-10">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: MILESTONE */}
      <section className="py-24">
        <div className="container mx-auto px-6 mb-20">
          <h2 className="font-heading text-3xl font-bold text-amerta-blue text-center uppercase tracking-[0.2em]">Our Journey</h2>
        </div>
        
        <div className="container mx-auto px-6 relative">
          {/* Garis Tengah - Sembunyi di mobile, muncul di md ke atas */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-100" />

          <div className="space-y-12 md:space-y-24">
            {milestones.map((m, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Konten */}
                <div className="w-full md:w-1/2 px-0 md:px-12 mb-6 md:mb-0">
                  <div className={`p-8 rounded-2xl bg-white border border-slate-50 shadow-sm ${index % 2 === 0 ? "md:text-right" : "md:text-left text-left"}`}>
                    <span className="text-amerta-teal font-black text-3xl font-heading mb-2 block">{m.year}</span>
                    <h4 className="font-bold text-amerta-blue text-xl mb-2 italic">"{m.title}"</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>

                {/* Titik Tengah */}
                <div className="hidden md:flex relative z-10 w-10 h-10 items-center justify-center bg-white rounded-full border-2 border-slate-100 shadow-sm">
                  <div className="w-3 h-3 bg-amerta-teal rounded-full" />
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </main>
  );
}