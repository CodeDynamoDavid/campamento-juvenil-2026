"use client";
import Hero from "@/src/components/invitacion/Hero";
import InfoPadres from "@/src/components/invitacion/InfoPadres";
import Ubicaciones from "@/src/components/invitacion/Ubicaciones";
import Countdown from "@/src/components/invitacion/Coutdown";
import Itinerario from "@/src/components/invitacion/Itinerario";
import MusicPlayer from "@/src/components/invitacion/MusicPlayer";
import PhotoCarousel from "@/src/components/invitacion/PhotoCarousel";

import Footer from "@/src/components/Footer";

export default function InvitacionPage() {
  return (
    <main className="min-h-screen bg-[#f4f9ff]">
      <Hero />
      <InfoPadres />
      <PhotoCarousel />
      <Ubicaciones />
      <Countdown targetDate="2026-02-26T09:00:00" />
      <Itinerario />
      <MusicPlayer />
      <Footer/>
    </main>
  );
}
