"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Playfair_Display, Great_Vibes } from "next/font/google";

const mainFont = Playfair_Display({ subsets: ["latin"], style: ["italic"] });
const scriptFont = Great_Vibes({ weight: "400", subsets: ["latin"] });

const PHOTOS_ONLY = [
  { src: "/1.jpg.jpeg", title: "Momentos especiales" },
  { src: "/2.jpg.jpeg", title: "Compartiendo en fe" },
  { src: "/3.jpg.jpeg", title: "Jóvenes unidos" },
  { src: "/4.jpg.jpeg", title: "Tiempo de enseñanza" },
  { src: "/5.jpg.jpeg", title: "Amistad verdadera" },
  { src: "/6.jpg.jpeg", title: "Alabanza y gozo" },
  { src: "/7.jpg.jpeg", title: "Unidos en Cristo" },
  { src: "/8.jpg.jpeg", title: "Recuerdos inolvidables" },
];

export default function PhotoGallery() {

  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);

  return (
    <>
      {/* ================= VIDEO SECTION ================= */}
      <section className="py-28 px-6 max-w-6xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className={`${scriptFont.className} text-6xl md:text-7xl text-sky-800`}>
            Jesús es mi hermano
          </h2>

          <div className="flex items-center justify-center gap-4 opacity-50">
            <div className="h-px w-14 bg-sky-400" />

            <p className={`${mainFont.className} italic text-sky-700 text-lg md:text-xl`}>
              Rev. Bernabé G. García
            </p>

            <div className="h-px w-14 bg-sky-400" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.3)] bg-black"
        >
          <video
            src="/video1.mp4"
            controls
            className="w-full h-full object-contain"
          />
        </motion.div>

      </section>

      {/* ================= PHOTO GALLERY ================= */}
      <section className="py-24 px-6 bg-[#f4f9ff]">

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${scriptFont.className} text-5xl md:text-6xl text-center text-sky-700 mb-16`}
        >
          Más Recuerdos
        </motion.h3>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

          {PHOTOS_ONLY.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedPhoto(photo)}
              className="relative h-60 md:h-72 rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay moderno */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Título */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-sm md:text-base font-semibold tracking-wide drop-shadow-lg">
                  {photo.title}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative max-w-5xl w-full"
            >
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                width={1400}
                height={900}
                className="w-full h-auto rounded-3xl shadow-2xl object-contain"
              />

              <p className="text-white text-center mt-4 text-lg">
                {selectedPhoto.title}
              </p>

              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-4 -right-4 bg-white text-black w-11 h-11 rounded-full shadow-xl text-xl font-bold hover:scale-110 transition"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
