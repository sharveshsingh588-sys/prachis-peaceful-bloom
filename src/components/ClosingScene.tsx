import { useEffect, useState } from "react";

const ClosingScene = () => {
  const [showBalloon, setShowBalloon] = useState(true);

  useEffect(() => {
    // Hide balloon after animation completes
    const timer = setTimeout(() => {
      setShowBalloon(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center gradient-night relative overflow-hidden py-20 px-6">
      {/* Glowing stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-glow-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Floating away balloon */}
      {showBalloon && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-balloon-rise">
          <div className="w-16 h-20 bg-accent rounded-full balloon-glow opacity-80">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-accent/30" />
          </div>
        </div>
      )}

      {/* Final message */}
      <div className="max-w-2xl text-center z-10 space-y-10 animate-fade-in-slow">
        <p className="text-2xl md:text-3xl text-white leading-relaxed font-light">
          No gifts. No formalities.
        </p>

        <p className="text-2xl md:text-3xl text-white/90 leading-relaxed font-light">
          Just peace and prayers for you, Prachi.
        </p>

        <div className="py-8">
          <div className="w-16 h-0.5 bg-white/30 mx-auto" />
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-white text-glow animate-glow-pulse">
          Happy Birthday 🌸
        </h2>

        <div className="pt-12 text-sm text-white/60 italic">
          May your journey be filled with peace, devotion, and endless blessings.
        </div>
      </div>
    </section>
  );
};

export default ClosingScene;
