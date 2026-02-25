export default function Clients() {
  const clients = [1, 2, 3]; // Placeholder untuk 3 logo

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-heading text-4xl font-extrabold text-amerta-blue mb-4">
          Client
        </h2>
        <p className="font-body text-slate-500 max-w-2xl mx-auto mb-16 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>

        {/* Grid Logo Klien */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {clients.map((item) => (
            <div 
              key={item} 
              className="h-32 rounded-[24px] border-2 border-slate-100 flex items-center justify-center p-8 grayscale hover:grayscale-0 hover:border-amerta-teal transition-all duration-300 group"
            >
              {/* Placeholder Logo */}
              <div className="w-full h-full bg-slate-50 rounded-lg group-hover:bg-white transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}