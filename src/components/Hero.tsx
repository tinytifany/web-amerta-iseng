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
      <div className="absolute pt-7 top-[20%] -left-[100px] z-10 opacity-98">
        <Image src="/supergraphic-right.png" alt="" width={200} height={200} className="rotate-[-45deg]" />
      </div>

      {/* Supergraphic Kanan */}
      <div className="absolute -right-[70px] bottom-[-20%] z-10 opacity-98">
        <Image src="/supergraphic-left.png" alt="" width={200} height={200} />
      </div>
      
      {/* CONTENT */}
      <div className="relative z-20">
        <h1 className="font-heading text-5xl font-extrabold text-amerta-blue mt-30">
          Flow of Innovation
        </h1>
        <h1 className="font-heading text-5xl font-extrabold text-amerta-blue mt-2">
          Stream of Solutions
        </h1>

        <p className="font-body text-lg text-amerta-blue mt-3 mx-auto max-w-2xl leading-relaxed">
          Your subheading goes here.. 2 line Subheading goes here.. 
        </p>

        <div className="mt-5 flex justify-center">
          <button className="font-heading flex items-center gap-3 px-6 py-2 font-semibold text-white text-sm 
            bg-gradient-to-r from-amerta-teal to-amerta-blue
            rounded-tr-[35px] rounded-bl-[35px] rounded-tl-md rounded-br-md
            hover:scale-105 hover:shadow-lg hover:shadow-amerta-teal/30 
            transition-all duration-300 ease-in-out cursor-pointer group">
            <span className="tracking-wide">Lorem Ipsum</span>
            <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}