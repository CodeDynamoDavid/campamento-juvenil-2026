"use client";
import { useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const mainFont = Playfair_Display({ subsets: ["latin"] });

export default function InfoPadres() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden" data-aos="fade-up">

      {/* Imagen de fondo */}
      <Image
        src="/campo.jpeg"
        alt="Campamento Juvenil"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay elegante */}

      {/* Contenido encima */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-6">

        <Image
          src="/logoagrupado.png"
          alt="Información para padres"
          width={1200}
          height={600}
          className="
            w-full 
            max-w-3xl 
            md:max-w-4xl 
            object-contain 
            drop-shadow-2xl
          "
        />

      </div>

    </section>
  );
}
