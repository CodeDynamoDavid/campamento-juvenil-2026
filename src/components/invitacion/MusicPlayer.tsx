"use client";
import { useState, useRef, useEffect } from "react";
import { IconButton, Box, Slider, Fade } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const [showVolume, setShowVolume] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            localStorage.removeItem("musicaPlay");
            removeListeners();
          })
          .catch(() => {
            console.log(
              "El navegador requiere una interacción física directa."
            );
          });
      }
    };

    const removeListeners = () => {
      window.removeEventListener("click", startAudio);
      window.removeEventListener("scroll", startAudio);
      window.removeEventListener("touchstart", startAudio);
    };

    const musicAllowed = localStorage.getItem("musicaPlay");
    if (musicAllowed === "true") {
      setTimeout(startAudio, 300);
    }

    window.addEventListener("click", startAudio);
    window.addEventListener("scroll", startAudio);
    window.addEventListener("touchstart", startAudio);

    return () => removeListeners();
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(console.error);
    }
  };

  return (
    <Box
      onMouseEnter={() => setShowVolume(true)}
      onMouseLeave={() => setShowVolume(false)}
      sx={{
        position: "fixed",
        bottom: { xs: 16, md: 30 },
        right: { xs: 16, md: 30 },
        zIndex: 10000,
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        gap: 1.5,
        width: { xs: "48px", md: "52px" },
        pointerEvents: "none",
      }}
    >
      <audio ref={audioRef} src="/music/creo1.mp3" loop preload="auto" />

      <IconButton
        onClick={togglePlay}
        sx={{
          pointerEvents: "auto",
          backgroundColor: isPlaying ? "rgba(255,255,255,0.95)" : "#a38a5d",
          color: isPlaying ? "#a38a5d" : "white",
          backdropFilter: "blur(8px)",
          width: { xs: 48, md: 52 },
          height: { xs: 48, md: 52 },
          minWidth: { xs: 48, md: 52 },
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          transition: "all 0.3s ease",
          "&:hover": { backgroundColor: isPlaying ? "white" : "#8c764b" },
        }}
      >
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>

      <Fade in={showVolume || isPlaying}>
        <Box
          sx={{
            pointerEvents: "auto",
            height: 80,
            width: "32px",
            display: "flex",
            justifyContent: "center",
            padding: "10px 0",
            backgroundColor: "rgba(255,255,255,0.8)",
            borderRadius: "20px",
            backdropFilter: "blur(4px)",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          }}
        >
          <Slider
            orientation="vertical"
            size="small"
            value={volume}
            onChange={(_, v) => setVolume(v as number)}
            sx={{
              color: "#a38a5d",
              height: "100%",
              "& .MuiSlider-thumb": { width: 10, height: 10 },
              "& .MuiSlider-track": { width: 3 },
            }}
          />
        </Box>
      </Fade>
    </Box>
  );
}