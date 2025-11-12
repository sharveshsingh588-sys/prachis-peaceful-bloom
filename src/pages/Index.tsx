import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import CountdownScene from "@/components/CountdownScene";
import OpeningScene from "@/components/OpeningScene";
import MainMessage from "@/components/MainMessage";
import InteractiveBalloons from "@/components/InteractiveBalloons";
import StrengthReflection from "@/components/StrengthReflection";
import KrishnaScene from "@/components/KrishnaScene";
import ClosingScene from "@/components/ClosingScene";

const Index = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false); // 🎧 starts off by default
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
    null
  );

  const birthdayDate = new Date("2025-11-13T00:00:00");

  useEffect(() => {
    const checkBirthday = () => {
      if (new Date() >= birthdayDate) setIsUnlocked(true);
    };
    checkBirthday();
    const interval = setInterval(checkBirthday, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // 🎶 Peaceful flute music (default before birthday)
    const audio = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"
    );
    audio.loop = true;
    audio.volume = 0.3;
    setAudioElement(audio);

    // 🛑 Do NOT autoplay — user must click the icon
    return () => audio.pause();
  }, []);

  useEffect(() => {
    if (isUnlocked && audioElement) {
      // Stop flute if it was playing
      audioElement.pause();

      // 🎉 Switch to birthday music
      const birthdayAudio = new Audio("./birthday.mp3");
      birthdayAudio.loop = true;
      birthdayAudio.volume = 0.4;

      // ✅ Don’t autoplay after unlock — still wait for user click
      setAudioElement(birthdayAudio);
      setIsMusicPlaying(false); // icon remains OFF
    }
  }, [isUnlocked]);

  const toggleMusic = () => {
    if (audioElement) {
      if (isMusicPlaying) {
        audioElement.pause();
        setIsMusicPlaying(false);
      } else {
        audioElement
          .play()
          .catch((err) => console.log("Audio play failed:", err));
        setIsMusicPlaying(true);
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* 🔊 Music Toggle Button */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-accent/80 backdrop-blur-sm text-accent-foreground hover:bg-accent transition-all duration-300 balloon-glow"
        aria-label="Toggle music"
      >
        {isMusicPlaying ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>

      {/* ⏳ Countdown or Birthday Experience */}
      {!isUnlocked ? (
        <CountdownScene targetDate={birthdayDate} />
      ) : (
        <>
          <OpeningScene isUnlocked={isUnlocked} />
          <MainMessage />
          <InteractiveBalloons />
          <StrengthReflection />
          <KrishnaScene />
          <ClosingScene />
        </>
      )}
    </div>
  );
};

export default Index;
