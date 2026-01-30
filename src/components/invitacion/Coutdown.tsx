"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

const mainFont = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

interface TimeLeft {
  días: number;
  hrs: number;
  min: number;
  seg: number;
}

export default function Countdown({ targetDate }: { targetDate: string }) {

  const calculateTimeLeft = (): TimeLeft => {
    const diff = +new Date(targetDate) - +new Date();

    if (diff <= 0) {
      return { días: 0, hrs: 0, min: 0, seg: 0 };
    }

    return {
      días: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hrs: Math.floor((diff / (1000 * 60 * 60)) % 24),
      min: Math.floor((diff / (1000 * 60)) % 60),
      seg: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Fondo */}
      <Image
        src="/campoportada2.jpg"
        alt="Campamento Juvenil"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Overlay elegante */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${mainFont.className} text-4xl md:text-6xl mb-14`}
        >
          Faltan
        </motion.h2>

        {/* CONTADOR */}
        <div className="flex justify-center flex-wrap gap-4 md:gap-8 mb-12">

          {Object.entries(timeLeft).map(([label, value], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >

              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-white/15 backdrop-blur-lg border border-white/30 flex items-center justify-center shadow-2xl">

                <motion.span
                  key={value}
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl md:text-5xl font-light"
                >
                  {value.toString().padStart(2, "0")}
                </motion.span>

              </div>

              <span className="block mt-3 text-xs tracking-[0.25em] uppercase opacity-80">
                {label}
              </span>

            </motion.div>
          ))}

        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl italic opacity-90"
        >
          para nuestro campamento juvenil 2026
        </motion.p>

      </div>
    </section>
  );
}
