"use client";
import { Playfair_Display, Great_Vibes } from "next/font/google";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const mainFont = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
});
const scriptFont = Great_Vibes({ weight: "400", subsets: ["latin"] });

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 px-6 flex flex-col items-center text-center relative overflow-hidden">

      {/* línea decorativa */}
      <div className="w-32 h-px bg-linear-to-r from-transparent via-sky-200 to-transparent mb-14" />

      <div className="space-y-6" data-aos="fade-up">

        <h2
          className={`${scriptFont.className} text-5xl md:text-6xl text-sky-800`}
        >
          Gracias por vivir esta experiencia
        </h2>

        <p
          className={`${mainFont.className} italic text-sky-700/60 text-lg`}
        >
          Campamento Juvenil 2026
        </p>

      </div>

      {/* ícono central */}
      <div
        className="mt-16 flex flex-col items-center gap-4"
        data-aos="zoom-in"
      >
        <div className="flex items-center gap-5 text-amber-400">

          <div className="h-px w-10 bg-sky-200"></div>

          <LocalFireDepartmentIcon
            sx={{ fontSize: 28 }}
            className="animate-pulse"
          />

          <div className="h-px w-10 bg-sky-200"></div>

        </div>

        <span
          className={`${mainFont.className} uppercase tracking-[0.4em] text-[11px] text-sky-900/40 font-bold text-center`}
        >
          Tabernáculo de Juliaca
          <br />
          La voz de restauración
        </span>
      </div>

      {/* pie */}
      <div className="mt-24 opacity-30 hover:opacity-60 transition-opacity duration-700">
        <p className="text-[10px] uppercase tracking-widest text-sky-900">
          Desarrollado por D/\/ID • {currentYear}
        </p>
      </div>

    </footer>
  );
}
