import Image from "next/image";

export default function Page() {
  return (
    <main className="relative w-full h-screen">

      {/* Imagen de fondo */}
      <Image
        src="/2026camp.jpg"   // tu imagen aquí
        alt="Campamento juvenil"
        fill
        priority
        className="object-cover"
      />

      {/* Capa oscura suave (para que el texto se vea bien) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Campamento Juvenil ⛺
        </h1>

        <p className="text-white text-lg md:text-2xl mb-6">
          Una experiencia inolvidable
        </p>

        <a
          href="/invitacion"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Ver aqui una magia
        </a>

      </div>
    </main>
  );
}
