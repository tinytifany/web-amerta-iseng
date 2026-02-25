import Image from "next/image";

export default function Testimony() {
  const reviews = Array.from({ length: 6 });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Supergraphic Kiri (Copied from layout) */}
      <div className="absolute left-0 bottom-[10%] opacity-40 translate-x-[-20%]">
        <Image src="/supergraphic-left.png" alt="" width={150} height={150} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="font-heading text-4xl font-extrabold text-amerta-blue mb-16">
          Testimony
        </h2>

        {/* Grid Testimony Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((_, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-left hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-4">
                Lorem Ipsum
              </h3>
              <p className="font-body text-sm text-slate-500 leading-relaxed italic">
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Supergraphic Kanan Bawah */}
      <div className="absolute right-0 bottom-0 opacity-40 translate-x-[20%] translate-y-[20%] rotate-180">
        <Image src="/supergraphic-right.png" alt="" width={200} height={200} />
      </div>
    </section>
  );
}