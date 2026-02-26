import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-center overflow-hidden">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Supergraphic Kiri */}
      <div className="absolute pt-7 top-[20%] -left-25 z-10 opacity-98">
        <Image src="/sg-2.png" alt="" width={200} height={200} className="-rotate-45" />
      </div>

      {/* Supergraphic Kanan */}
      <div className="absolute -right-17.5 bottom-[-20%] z-10 opacity-98">
        <Image src="/sg-1.png" alt="" width={200} height={200} />
      </div>
      
      {/* CONTENT */}
      <div className="relative z-20">
        <h1 className="font-heading text-5xl font-bold text-amerta-blue mt-30">
          Flow of Innovation
        </h1>
        <h1 className="font-heading text-5xl font-bold text-amerta-blue mt-2">
          Stream of Solutions
        </h1>

        <p className="font-body text-lg text-amerta-blue mt-3 mx-auto max-w-2xl leading-relaxed">
          Amerta adalah perusahaan yang bergerak di bidang aktivitas pemograman komputer. Kami membantu bisnis bertransformasi secara digital melalui solusi teknologi yang inovatif, adaptif, dan berkelanjutan. 
        </p>

        <div className="mt-5 flex justify-center">
          <button className="amerta-btn-primary group">
            <span className="tracking-wide">Work with us</span>
            <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}