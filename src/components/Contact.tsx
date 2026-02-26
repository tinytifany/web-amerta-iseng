import Image from "next/image";

export default function Contact() {
  return (
    <section className="py-24 bg-white">
      <div className="amerta-container items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
          {/* KOLOM KIRI: Info & Map */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-start gap-6">
              <h2 className="font-heading text-3xl font-bold text-amerta-blue leading-tight z-10">
                Contact
              </h2>
              <div className="amerta-line" />
              <p className="font-body text-sm text-slate-600 leading-relaxed max-w-prose">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>

            {/* List Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="text-amerta-blue text-sm">📞</div>
                <div>
                  <p className="font-bold text-slate-900">Phone</p>
                  <p className="text-slate-500 text-sm">+62 22 12345678</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="text-amerta-blue text-sm">📧</div>
                <div>
                  <p className="font-bold text-slate-900">Email</p>
                  <p className="text-slate-500 text-sm">info@amerta.com</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="text-amerta-blue text-sm">📍</div>
                <div>
                  <p className="font-bold text-slate-900">Address</p>
                  <p className="text-slate-500 text-sm">Jl. Boulevard No. 123, Bandung</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-52 bg-slate-100 rounded-2xl overflow-hidden relative shadow-inner grayscale">
              {/* Ganti pakai iframe Google Maps asli nanti */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                  Map View
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Form (Box Biru) */}
          <div className="bg-amerta-blue p-10 md:p-14 rounded-2xl shadow-2xl">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-white font-sm ml-1">Name</label>
                <input type="text" className="w-full px-3 py-3 rounded-xl bg-white focus:ring-4 focus:ring-amerta-teal/30 outline-none transition-all" />
              </div>
              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-white font-sm ml-1">Phone</label>
                <input type="text" className="w-full px-3 py-3 rounded-xl bg-white focus:ring-4 focus:ring-amerta-teal/30 outline-none transition-all" />
              </div>
              {/* Email */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-white font-sm ml-1">Email</label>
                <input type="email" className="w-full px-3 py-3 rounded-xl bg-white focus:ring-4 focus:ring-amerta-teal/30 outline-none transition-all" />
              </div>
              {/* Subject */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-white font-sm ml-1">Subject</label>
                <input type="text" className="w-full px-3 py-3 rounded-xl bg-white focus:ring-4 focus:ring-amerta-teal/30 outline-none transition-all" />
              </div>
              {/* Message */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-white font-sm ml-1">Message</label>
                <textarea rows={4} className="w-full px-3 py-3 rounded-xl bg-white focus:ring-4 focus:ring-amerta-teal/30 outline-none transition-all resize-none"></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-4">
                <button className="px-10 py-3 bg-amerta-teal text-white font-bold rounded-xl hover:bg-white hover:text-amerta-blue transition-all active:scale-95 shadow-lg">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}