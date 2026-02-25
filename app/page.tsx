import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-24">
      {/* Coba pake class standar dulu buat tes: bg-blue-500 */}
      <button className="flex items-center gap-3 px-8 py-3 font-semibold text-white 
        bg-gradient-to-r from-amerta-teal to-amerta-blue
        rounded-tr-[35px] rounded-bl-[35px] rounded-tl-md rounded-br-md
        hover:scale-105 hover:shadow-lg hover:shadow-amerta-teal/30 
        transition-all duration-300 ease-in-out cursor-pointer">
        
        <span className="tracking-wide">Lorem Ipsum</span>
  
        <span className="text-2xl transition-transform group-hover:translate-x-2">
          →
        </span>
      </button>
    </main>
  );
}
