"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamPage() {
  const teamData = [
    {
      division: "Founders",
      members: [
        { name: "Arka Amerta", role: "CEO / Founder", intro: "Visionary leader with a passion for scalable tech.", img: "/pexels-glassesshop-gs-1317359316-27661934.jpg" },
        { name: "Sena Arkan", role: "CTO / Co-Founder", intro: "The architect behind our most complex systems.", img: "/pexels-glassesshop-gs-1317359316-27661934.jpg" },
      ]
    },
    {
      division: "Tech Leaders",
      members: [
        { name: "Dani Ramadhan", role: "Lead Developer", intro: "Ensuring clean code and best practices.", img: "/pexels-glassesshop-gs-1317359316-27661934.jpg" },
      ]
    },
    {
      division: "Developers",
      members: [
        { name: "Budi Santoso", role: "Frontend Dev", intro: "Turning designs into pixel-perfect reality.", img: "/pexels-glassesshop-gs-1317359316-27661934.jpg" },
        { name: "Siti Aminah", role: "Backend Dev", intro: "Master of APIs and database optimization.", img: "/pexels-glassesshop-gs-1317359316-27919262.jpg" },
      ]
    },
    {
      division: "Sysadmin & Infrastructure",
      members: [
        { name: "Rizky Wijaya", role: "Lead Sysadmin", intro: "Guardian of the 99.9% uptime.", img: "/pexels-glassesshop-gs-1317359316-27661934.jpg" },
      ]
    },
    {
      division: "R&D / Innovation",
      members: [
        { name: "Fajar Pratama", role: "AI Researcher", intro: "Exploring the future of machine learning.", img: "/pexels-glassesshop-gs-1317359316-27661934.jpg" },
      ]
    },
    {
      division: "Creative & Design",
      members: [
        { name: "Maya Indah", role: "UI/UX Designer", intro: "Creating intuitive and beautiful journeys.", img: "/pexels-glassesshop-gs-1317359316-27919262.jpg" },
      ]
    },
    {
      division: "Humas & Documentation",
      members: [
        { name: "Laras Hati", role: "Communication Lead", intro: "The bridge between Amerta and the world.", img: "/pexels-glassesshop-gs-1317359316-27919262.jpg" },
      ]
    }
  ];

  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="mb-20 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-heading font-black text-amerta-blue tracking-tighter uppercase"
          >
            THE <span className="text-amerta-teal">ENGINE</span>
          </motion.h1>
          <p className="mt-4 text-slate-500 max-w-xl font-body text-sm">
            Kumpulan talenta hebat di balik layar yang menggerakkan setiap inovasi digital di Amerta.
          </p>
        </div>

        {/* TEAM SUBSECTIONS */}
        <div className="space-y-20">
          {teamData.map((section, idx) => (
            <section key={idx} className="space-y-8">
              {/* Division Title */}
              <div className="flex items-center gap-4">
                <h2 className="font-heading text-sm font-black text-amerta-teal uppercase tracking-[0.3em]">
                  {section.division}
                </h2>
                <div className="h-[1px] flex-grow bg-slate-100" />
              </div>

              {/* Members Grid (5 kolom di desktop biar compact) */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {section.members.map((person, pIdx) => (
                  <motion.div 
                    key={pIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="group"
                  >
                    {/* Card Container - DAUN */}
                    <div className="relative aspect-[3/4] bg-slate-100 overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-[60px] rounded-bl-[60px] transition-all duration-500">
                      
                      <Image 
                        src={person.img} 
                        alt={person.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                      />

                      {/* MINI INTRO - Sliding dari bawah */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-amerta-blue/90 via-amerta-blue/70 to-transparent p-4 pt-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
                        <p className="text-white text-[10px] leading-relaxed italic text-center font-body">
                          "{person.intro}"
                        </p>
                      </div>
                    </div>

                    {/* Info Text */}
                    <div className="mt-4 text-center">
                      <h3 className="font-heading text-sm font-bold text-amerta-blue leading-tight uppercase tracking-tight group-hover:text-amerta-teal transition-colors">
                        {person.name}
                      </h3>
                      <p className="text-amerta-teal text-[10px] font-bold uppercase tracking-widest mt-1">
                        {person.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}