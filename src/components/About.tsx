import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative w-full py-20 overflow-hidden bg-white">
      <div className="amerta-container">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative w-full max-w-105 aspect-square mx-auto md:mx-0">

            {/* MAIN IMAGE */}
            <div className="relative w-full h-full rounded-tr-[120px] rounded-bl-[120px] overflow-hidden shadow-2xl group">
              <Image
                src="/about-image1.jpg"
                alt="About Amerta"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* SUPERGRAPHIC TOP RIGHT */}
            <div className="absolute -top-[8%] -right-[6%] w-[22%]">
              <Image src="/sg-4.png" alt="" width={200} height={200} />
            </div>

            {/* SUPERGRAPHIC BOTTOM LEFT */}
            <div className="absolute -bottom-[10%] -left-[8%] w-[28%]">
              <Image
                src="/sg-3.png"
                alt=""
                width={200}
                height={200}
                className="-rotate-180"
              />
            </div>

          </div>

          {/* TEXT */}
          <div className="flex flex-col items-start gap-6">
            <h2 className="font-heading text-3xl font-bold text-amerta-blue leading-tight">
              PT Amerta Teknologi Media
            </h2>

            <div className="amerta-line" />

            <p className="font-body text-sm text-slate-600 leading-relaxed max-w-prose">
               Amerta hadir sebagai one-stop technology partner yang fokus memberikan nilai nyata bagi mitra—mulai dari pengembangan solusi digital hingga optimalisasi proses bisnis—karena kami percaya teknologi terbaik lahir dari kolaborasi yang kuat.
            </p>
            <p className="font-body text-sm text-slate-600 leading-relaxed max-w-prose">
              Dengan mengedepankan kualitas, komunikasi terbuka, dan integritas, kami terus bertumbuh bersama mitra dan tim. Didukung oleh pembelajaran berkelanjutan dan semangat inovasi, Amerta berkomitmen menciptakan solusi teknologi yang relevan hari ini dan siap untuk masa depan.
            </p>

            <button className="amerta-btn-primary group">
              <span className="tracking-wide">Know more</span>
              <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}