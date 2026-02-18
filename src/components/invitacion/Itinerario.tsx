"use client";
import { useState } from "react";
import { Playfair_Display, Great_Vibes } from "next/font/google";

import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import CloseIcon from "@mui/icons-material/Close";

import { SvgIconProps } from "@mui/material";

const mainFont = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const scriptFont = Great_Vibes({ weight: "400", subsets: ["latin"] });

interface Evento {
  hora: string;
  titulo: string;
  Icono: React.ComponentType<SvgIconProps>;
}

/* ================= DIA 1 ================= */

const eventosDia1: Evento[] = [
  { hora: "07:00 AM", titulo: "Concentración en el Parque Zarumilla", Icono: GroupsOutlinedIcon },
  { hora: "07:45 AM", titulo: "Salida rumbo a la Casa de Retiros Kokan", Icono: GroupsOutlinedIcon },
  { hora: "09:00 AM", titulo: "Llegada y Pre-Bienvenida", Icono: GroupsOutlinedIcon },
  { hora: "09:30 AM", titulo: "Ubicación de habitaciones (solo dejar equipaje)", Icono: GroupsOutlinedIcon },
  { hora: "10:00 AM", titulo: "Bienvenida y Apertura del Campamento | Conformación de grupos", Icono: MenuBookOutlinedIcon },
  { hora: "12:00 PM", titulo: "Almuerzo", Icono: RestaurantOutlinedIcon },
  { hora: "02:00 PM", titulo: "Actividades en el auditorio – Realización de banderolas y presentación", Icono: GroupsOutlinedIcon },
  { hora: "05:30 PM", titulo: "Servicio General", Icono: MenuBookOutlinedIcon },
  { hora: "07:30 PM", titulo: "Cena", Icono: RestaurantOutlinedIcon },
  { hora: "08:30 PM", titulo: "Fogata", Icono: LocalFireDepartmentOutlinedIcon },
];

/* ================= PDF ================= */

const pdfDias = [
  { dia: "Días 2 - 4", archivo: "/pdf/PROGRAMA CAMP2026.pdf" },
];

export default function ItinerarioCampamento() {

  const [openPdf, setOpenPdf] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto bg-white/20 backdrop-blur-md rounded-3xl my-20 shadow-xl">

      {/* TITULO */}
      <div className="text-center mb-20">
        <h2 className={`${scriptFont.className} text-6xl text-sky-700 mb-2`}>
          Nuestro Programa
        </h2>
        <p className={`${mainFont.className} uppercase tracking-[0.3em] text-[10px] text-sky-900/40 font-bold`}>
          Campamento Juvenil - 4 Días
        </p>
      </div>

      {/* DIA 1 */}

      <h3 className={`${mainFont.className} text-center text-xl mb-12 text-sky-800 font-semibold`}>
        Día 1 – Actividades Principales
      </h3>

      <div className="relative mb-28">

        <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-linear-to-b from-transparent via-sky-300/60 to-transparent" />

        <div className="space-y-16">

          {eventosDia1.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-between w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >

              <div className={`w-[42%] ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                <span className={`${mainFont.className} text-sky-600/70 font-bold text-xs tracking-widest`}>
                  {item.hora}
                </span>

                <h4 className={`${mainFont.className} text-slate-700 text-lg md:text-xl mt-1`}>
                  {item.titulo}
                </h4>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2">
                <div className="w-11 h-11 rounded-full bg-[#f4f9ff] border border-sky-200 flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  <item.Icono sx={{ fontSize: 20 }} className="text-sky-500" />
                </div>
              </div>

              <div className="w-[42%]" />

            </div>
          ))}

        </div>
      </div>

      {/* PDF + IMAGENES AL COSTADO */}

      <div className="text-center space-y-12">

        <h3 className={`${mainFont.className} text-xl text-sky-800 font-semibold`}>
          Programas completos de todos los días
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* IMAGEN IZQUIERDA */}
          <img
            src="/tutorial/camp1.jpeg"
            alt="Campamento imagen 1"
            className="rounded-2xl w-full h-72 object-cover shadow-lg hover:scale-105 transition-transform duration-500"
          />

          {/* TARJETA PDF */}
          {pdfDias.map((item, i) => (
            <div
              key={i}
              className="bg-white/40 backdrop-blur-md border border-sky-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >

              <PictureAsPdfOutlinedIcon className="text-sky-500 mb-4 mx-auto" />

              <p className={`${mainFont.className} text-sky-800 text-lg mb-4`}>
                {item.dia}
              </p>

              <div className="flex justify-center gap-6 text-sm">

                <button
                  onClick={() => setOpenPdf(item.archivo)}
                  className="text-sky-600 hover:underline font-semibold"
                >
                  Ver PDF
                </button>

                <a
                  href={item.archivo}
                  download
                  className="flex items-center gap-1 text-sky-600 hover:underline font-semibold"
                >
                  <DownloadOutlinedIcon sx={{ fontSize: 16 }} />
                  Descargar
                </a>

              </div>

            </div>
          ))}

          {/* IMAGEN DERECHA */}
          <img
            src="/tutorial/camp2.jpeg"
            alt="Campamento imagen 2"
            className="rounded-2xl w-full h-72 object-cover shadow-lg hover:scale-105 transition-transform duration-500"
          />

        </div>
      </div>

      {/* VISOR PDF LIMPIO */}

      {openPdf && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl w-full max-w-5xl h-[85vh] shadow-2xl p-4 relative">

            <button
              onClick={() => setOpenPdf(null)}
              className="absolute top-3 right-3 bg-sky-600 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-sky-700 transition z-10"
            >
              <CloseIcon />
            </button>

            <iframe
              src={openPdf}
              className="w-full h-full rounded-2xl"
            />

          </div>
        </div>
      )}

      {/* FRASE FINAL */}

      <div className="text-center mt-24">
        <p className={`${mainFont.className} text-sky-800/60 italic`}>
          Cuatro días de crecimiento espiritual, diversión y amistad 🙌🔥
        </p>
      </div>

    </section>
  );
}
