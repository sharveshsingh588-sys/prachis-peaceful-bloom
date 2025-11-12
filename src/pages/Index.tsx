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
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  // Birthday date: November 13, 2025
  const birthdayDate = new Date('2025-11-13T00:00:00');

  useEffect(() => {
    // Check if birthday has arrived
    const checkBirthday = () => {
      const now = new Date();
      if (now >= birthdayDate) {
        setIsUnlocked(true);
      }
    };

    checkBirthday();
    const interval = setInterval(checkBirthday, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Initialize audio element with peaceful birthday music
    const audio = new Audio('https://cdn.pixabay.com/audio/2022/02/15/audio_4e1ce5e5db.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    setAudioElement(audio);

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (audioElement) {
      if (isMusicPlaying) {
        audioElement.pause();
      } else {
        audioElement.play().catch(err => console.log('Audio play failed:', err));
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Music Toggle Button */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-accent/80 backdrop-blur-sm text-accent-foreground hover:bg-accent transition-all duration-300 balloon-glow"
        aria-label="Toggle music"
      >
        {isMusicPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </button>

      {isUnlocked ? (
        <CountdownScene targetDate={birthdayDate} />
      ) : (
        <>
          <OpeningScene />
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
