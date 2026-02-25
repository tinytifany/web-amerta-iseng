import Image from "next/image";

export default function About() {
  return (
    <section className="relative z-10 bg-white py-20 px-6 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-amerta-teal rounded-2xl -z-10 group-hover:bottom-0 group-hover:left-0 transition-all duration-500"></div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/about-image.jpg"
              alt="About Amerta"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-6">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            About Us
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amerta-teal to-amerta-blue rounded-full"></div>
          <p className="font-body text-lg text-slate-600 leading-relaxed max-w-prose">
            Your subheading goes here.. Amerta is committed to bringing your vision to life.
          </p>
          <button className="mt-4 px-8 py-3 bg-black text-white font-bold rounded-tl-2xl rounded-br-2xl hover:bg-slate-800 hover:shadow-xl transition-all active:scale-95">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}