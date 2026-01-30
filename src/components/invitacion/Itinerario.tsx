"use client";
import { Playfair_Display, Great_Vibes } from "next/font/google";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
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

const eventos: Evento[] = [
  {
    hora: "08:30 AM",
    titulo: "Bienvenida y oración inicial",
    Icono: GroupsOutlinedIcon,
  },
  {
    hora: "09:30 AM",
    titulo: "Reflexión bíblica juvenil",
    Icono: MenuBookOutlinedIcon,
  },
  {
    hora: "11:00 AM",
    titulo: "Juegos y dinámicas",
    Icono: SportsSoccerOutlinedIcon,
  },
  {
    hora: "01:00 PM",
    titulo: "Almuerzo",
    Icono: RestaurantOutlinedIcon,
  },
  {
    hora: "03:00 PM",
    titulo: "Alabanza y música",
    Icono: MusicNoteOutlinedIcon,
  },
  {
    hora: "07:00 PM",
    titulo: "Fogata y mensaje especial",
    Icono: LocalFireDepartmentOutlinedIcon,
  },
];

export default function ItinerarioCampamento() {
  return (
    <section className="py-24 px-6 max-w-2xl mx-auto bg-white/20 backdrop-blur-md rounded-3xl my-16 shadow-xl">

      {/* TITULO */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className={`${scriptFont.className} text-6xl text-sky-700 mb-2`}>
          Nuestro Programa
        </h2>

        <p
          className={`${mainFont.className} uppercase tracking-[0.3em] text-[10px] text-sky-900/40 font-bold`}
        >
          Itinerario del Campamento Juvenil
        </p>
      </div>

      {/* LINEA CENTRAL */}
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-linear-to-b from-transparent via-sky-300/60 to-transparent"></div>

        <div className="space-y-16">

          {eventos.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-between w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >

              {/* TEXTO */}
              <div
                className={`w-[42%] ${
                  index % 2 === 0 ? "text-left" : "text-right"
                }`}
              >
                <span
                  className={`${mainFont.className} text-sky-600/70 font-bold text-xs tracking-widest`}
                >
                  {item.hora}
                </span>

                <h3
                  className={`${mainFont.className} text-slate-700 text-lg md:text-xl leading-tight mt-1`}
                >
                  {item.titulo}
                </h3>
              </div>

              {/* ICONO CENTRAL */}
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-[#f4f9ff] border border-sky-200 flex items-center justify-center z-10 shadow-md hover:scale-110 transition-transform duration-500">
                  <item.Icono
                    sx={{ fontSize: 20 }}
                    className="text-sky-500"
                  />
                </div>
              </div>

              <div className="w-[42%]"></div>

            </div>
          ))}

        </div>
      </div>

      {/* FRASE FINAL */}
      <div className="text-center mt-20" data-aos="fade-up">
        <p className={`${mainFont.className} text-sky-800/60 italic text-sm md:text-base`}>
          Un día lleno de fe, amistad y momentos inolvidables 🙏🔥
        </p>
      </div>

    </section>
  );
}
