"use client";
import { Alex_Brush, Playfair_Display } from "next/font/google";
import Image from "next/image";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import TerrainOutlinedIcon from "@mui/icons-material/TerrainOutlined";
import { SvgIconProps } from "@mui/material";

const alexBrush = Alex_Brush({ weight: "400", subsets: ["latin"] });
const mainFont = Playfair_Display({ subsets: ["latin"] });

interface DividerWithIconProps {
  Icon: React.ComponentType<SvgIconProps>;
}

const DividerWithIcon = ({ Icon }: DividerWithIconProps) => (
  <div className="flex items-center justify-center space-x-3 w-full my-1">
    <div className="h-px flex-1 max-w-20 bg-linear-to-r from-transparent to-sky-300/60" />
    <Icon sx={{ fontSize: 20 }} className="text-sky-300/60" />
    <div className="h-px flex-1 max-w-20 bg-linear-to-l from-transparent to-sky-300/60" />
  </div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center px-6 overflow-hidden">

      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/2026camp.jpg"
          alt="Campamento Juvenil 2026"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-sky-950/70 via-sky-900/40 to-sky-950/90" />
      </div>

      {/* Decoraciones */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
        <LocalFireDepartmentOutlinedIcon className="absolute top-[12%] left-[15%] text-sky-200 animate-pulse" />
        <TerrainOutlinedIcon className="absolute bottom-[15%] right-[10%] text-sky-200 animate-pulse" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg space-y-3" data-aos="fade-up">

        <DividerWithIcon Icon={AutoAwesomeOutlinedIcon} />

        {/* Encabezado */}
        <div className="uppercase tracking-[0.35em] text-[14px] text-sky-200 font-bold">
          <p>Tabernáculo de Juliaca</p>
          <p className="text-[12px] mt-1">La Voz De Restauración</p>
        </div>

        {/* PNGs */}
        <div className="my-1 flex flex-col items-center leading-none">

          {/* Título grande */}
          <div className="w-full max-w-md md:max-w-xl">
            <Image
              src="/2026campamen.png"
              alt="Campamento Juvenil"
              width={900}
              height={450}
              className="block w-full object-contain drop-shadow-xl"
              priority
            />
          </div>
        
          <h2 className={`${mainFont.className} text-2xl md:text-3xl text-sky-100`}>
            Lema: Poniéndonos al lado de Jesús
          </h2>

          <h2 className={`${mainFont.className} text-2xl md:text-3xl text-sky-100`}>
            Pensamiento: "La Unidad"
          </h2>

        </div>

        <DividerWithIcon Icon={AutoAwesomeOutlinedIcon} />

        {/* Info */}
        <div className="space-y-2">

          <p className={`${mainFont.className} text-lg italic text-sky-100`}>
            📅 26, 27, 28 de febrero y 01 de marzo
          </p>

          <p className="text-xs uppercase tracking-[0.3em] text-sky-200/90">
            Puno, Perú
          </p>

          <p className="text-sm text-sky-50/80 italic max-w-md mx-auto">
            Un tiempo para encontrarte con Dios, fortalecer tu fe, hacer nuevos
            amigos y vivir días llenos de aventura, adoración y crecimiento.
          </p>

          <LocalFireDepartmentOutlinedIcon className="text-sky-300/60 mx-auto" />

        </div>

      </div>

      {/* Scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <span className="text-[9px] uppercase tracking-[0.3em] text-white">
          Desliza
        </span>
        <div className="w-px h-8 bg-linear-to-b from-sky-300 to-transparent mx-auto mt-1" />
      </div>

    </section>
  );
}
