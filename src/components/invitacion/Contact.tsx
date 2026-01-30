'use client';
import { useState } from 'react';
import { Playfair_Display, Great_Vibes } from "next/font/google";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const mainFont = Playfair_Display({ subsets: ["latin"], style: ["italic", "normal"] });
const scriptFont = Great_Vibes({ weight: "400", subsets: ["latin"] });

export default function ConfirmacionCampamento() {
  const [loading, setLoading] = useState(false);
  const [asistencia, setAsistencia] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      nombre: formData.get('nombre'),
      asistira: formData.get('asistira'),
    };

    try {
      const response = await fetch('/api/whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const resData = await response.json();
      if (resData.url) {
        window.location.href = resData.url;
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Hubo un problema al enviar tu respuesta");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto p-10 bg-white/40 backdrop-blur-md rounded-3xl border border-sky-100 shadow-sm relative overflow-hidden">

      {/* decoración suave */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-100/40 rounded-full blur-3xl"></div>

      <div className="relative z-10">

        <h2 className={`${scriptFont.className} text-5xl text-sky-800 text-center mb-2`}>
          Inscripción
        </h2>

        <p
          className={`${mainFont.className} text-center text-sky-900/40 text-[10px] uppercase tracking-[0.3em] mb-10`}
        >
          ¿Participarás en el campamento juvenil?
        </p>

        <form onSubmit={onSubmit} className="space-y-8">

          {/* NOMBRE */}
          <div className="relative border-b border-sky-200 focus-within:border-sky-500 transition-colors">
            <label
              className={`${mainFont.className} block text-xs italic text-sky-900/60 mb-1`}
            >
              Nombre completo
            </label>

            <input 
              name="nombre" 
              required 
              autoComplete="off"
              className="w-full py-2 bg-transparent outline-none text-sky-900 font-light placeholder:text-sky-300" 
              placeholder="Ej. Juan Pérez" 
            />
          </div>

          {/* OPCIONES */}
          <div className="space-y-4">

            <label
              className={`${mainFont.className} block text-center text-xs italic text-sky-900/60`}
            >
              Confirma tu participación
            </label>
            
            <div className="grid grid-cols-2 gap-4">

              {/* SI */}
              <label
                className={`
                  relative flex flex-col items-center justify-center p-4 border rounded-2xl cursor-pointer transition-all duration-300
                  ${asistencia === 'si' 
                    ? 'border-emerald-400 bg-emerald-50 shadow-inner' 
                    : 'border-sky-100 bg-white/50 hover:border-sky-200'}
                `}
              >
                <input 
                  type="radio" 
                  name="asistira" 
                  value="si" 
                  required 
                  className="hidden" 
                  onChange={(e) => setAsistencia(e.target.value)}
                />

                <CheckCircleOutlineIcon
                  className={`mb-2 ${asistencia === 'si' ? 'text-emerald-500' : 'text-sky-200'}`}
                />

                <span className={`${mainFont.className} text-sm text-sky-900`}>
                  Sí, participaré
                </span>
              </label>

              {/* NO */}
              <label
                className={`
                  relative flex flex-col items-center justify-center p-4 border rounded-2xl cursor-pointer transition-all duration-300
                  ${asistencia === 'no' 
                    ? 'border-rose-300 bg-rose-50 shadow-inner' 
                    : 'border-sky-100 bg-white/50 hover:border-sky-200'}
                `}
              >
                <input 
                  type="radio" 
                  name="asistira" 
                  value="no" 
                  className="hidden" 
                  onChange={(e) => setAsistencia(e.target.value)}
                />

                <HighlightOffIcon
                  className={`mb-2 ${asistencia === 'no' ? 'text-rose-400' : 'text-sky-200'}`}
                />

                <span className={`${mainFont.className} text-sm text-sky-900`}>
                  No podré asistir
                </span>
              </label>

            </div>
          </div>

          {/* BOTON */}
          <button 
            type="submit" 
            disabled={loading}
            className={`
              w-full py-4 rounded-full font-bold tracking-[0.2em] uppercase text-[11px]
              transition-all duration-500 shadow-md active:scale-95
              ${loading 
                ? 'bg-sky-100 text-sky-300 cursor-not-allowed' 
                : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-200'}
            `}
          >
            {loading ? 'Enviando...' : 'Confirmar participación'}
          </button>

        </form>
      </div>

      <p className="text-center mt-8 text-[10px] text-sky-300 italic">
        * Se enviará tu respuesta por WhatsApp
      </p>

    </div>
  );
}
