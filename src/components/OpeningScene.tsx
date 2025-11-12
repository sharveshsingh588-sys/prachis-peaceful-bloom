import { useState, useEffect } from "react";

const OpeningScene = ({ isUnlocked }: { isUnlocked: boolean }) => {
  const [balloonPopped, setBalloonPopped] = useState(false);

  useEffect(() => {
    if (isUnlocked) {
      // If already unlocked, skip the wait and show message immediately
      setBalloonPopped(true);
      return;
    }

    // Otherwise, show balloon first and pop after 3s
    const timer = setTimeout(() => setBalloonPopped(true), 3000);
    return () => clearTimeout(timer);
  }, [isUnlocked]);

  return (
    <section className="min-h-screen flex items-center justify-center gradient-peaceful relative overflow-hidden">
      {/* Falling flower petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-petal-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            🌸
          </div>
        ))}
      </div>

      <div className="text-center z-10 px-6 max-w-lg">
        {!balloonPopped ? (
          <div className="animate-balloon-rise">
            <div className="w-24 h-32 mx-auto bg-accent balloon-glow relative animate-float" style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-accent/40" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-3 h-3 bg-accent" style={{ borderRadius: '0 50% 50% 50%', transform: 'translate(-50%, 0) rotate(45deg)' }} />
            </div>
          </div>
        ) : (
          <div className="animate-fade-in-slow space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-glow animate-glow-pulse">
              Happy Birthday, Prachi 🌸
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground italic">
              A peaceful wish for a peaceful soul.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OpeningScene;
