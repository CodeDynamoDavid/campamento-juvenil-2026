"use client";
import { useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import { UBICACIONES_DATA } from "@/src/data/ubicaciones";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const mainFont = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

const LocationCard = ({
  item,
  index,
}: {
  item: (typeof UBICACIONES_DATA)[0];
  index: number;
}) => {
  const animation = index % 2 === 0 ? "fade-right" : "fade-left";

  return (
    <div
      className="bg-white rounded-[2.5rem] shadow-xl shadow-sky-100/50 overflow-hidden border border-sky-50 flex flex-col h-full group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      data-aos={animation}
      data-aos-delay={index * 150}
    >
      <div className="h-56 relative overflow-hidden">
        <Image
          src={item.img}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-sky-900/40 to-transparent"></div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-1.5 rounded-full shadow-md z-10">
          <span className="text-sky-700 font-bold text-sm tracking-widest">
            {item.time}
          </span>
        </div>
      </div>

      <div className="p-8 text-center flex flex-col flex-1 relative z-10 bg-white">
        <h3
          className={`${mainFont.className} text-2xl text-sky-900 mb-2 italic`}
        >
          {item.title}
        </h3>
        <p className="font-bold text-slate-700 text-lg mb-2 uppercase tracking-tight">
          {item.place}
        </p>
        <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
          {item.address}
        </p>

        <a
          href={item.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full py-3 bg-white border-2 border-sky-100 text-sky-600 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:bg-sky-600 hover:text-white hover:border-sky-600 shadow-sm"
        >
          Ver Mapa
        </a>
      </div>
    </div>
  );
};

export default function Ubicaciones() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="py-24 px-4 bg-linear-to-b from-white to-[#f4f9ff] overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4" data-aos="fade-up">
          <h2
            className={`${mainFont.className} text-4xl md:text-5xl text-sky-800/60 italic`}
          >
            ¿Dónde Será?
          </h2>
          <div className="flex items-center justify-center space-x-4 opacity-30">
            <div className="h-px w-12 bg-sky-400"></div>
            <span className="text-sky-500">✧</span>
            <div className="h-px w-12 bg-sky-400"></div>
          </div>
          <p className="text-slate-500 max-w-md mx-auto italic text-sm md:text-base">
            los esperamos en los siguientes lugares para compartir juntos
            momentos de compañerismo inolvidables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {UBICACIONES_DATA.map((loc, index) => (
            <LocationCard key={loc.id} item={loc} index={index} />
          ))}
        </div>

        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p
            className={`${mainFont.className} text-4xl md:text-5xl text-sky-800/60 italic`}
          >
            ¡Esperamos verte ahí!
          </p>
        </div>
      </div>
    </section>
  );
}
