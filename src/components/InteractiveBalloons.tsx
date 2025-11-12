import { useState } from "react";

interface Blessing {
  id: number;
  text: string;
  popped: boolean;
  position: { x: number; y: number };
}

const InteractiveBalloons = () => {
  const [blessings] = useState<Blessing[]>([
    {
      id: 1,
      text: "May your heart always stay calm 🌺",
      popped: false,
      position: { x: 20, y: 30 },
    },
    {
      id: 2,
      text: "Radhe Radhe — may Krishna always walk beside you.",
      popped: false,
      position: { x: 70, y: 20 },
    },
    {
      id: 3,
      text: "You deserve peace that feels like home.",
      popped: false,
      position: { x: 40, y: 60 },
    },
    {
      id: 4,
      text: "May every sunrise bring you closer to your dreams 🌅",
      popped: false,
      position: { x: 80, y: 70 },
    },
    {
      id: 5,
      text: "Your gentle strength is your superpower ✨",
      popped: false,
      position: { x: 15, y: 75 },
    },
  ]);

  const [poppedBlessings, setPoppedBlessings] = useState<number[]>([]);
  const [revealedText, setRevealedText] = useState<{ [key: number]: string }>({});

  const handleBalloonClick = (blessing: Blessing) => {
    if (!poppedBlessings.includes(blessing.id)) {
      setPoppedBlessings([...poppedBlessings, blessing.id]);
      setRevealedText({ ...revealedText, [blessing.id]: blessing.text });

      // Play pop sound effect (soft pop)
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
      audio.volume = 0.1;
      audio.play().catch(() => {});
    }
  };

  return (
    <section className="min-h-screen relative gradient-sunset overflow-hidden py-20 px-6">
      <div className="max-w-4xl mx-auto relative h-screen">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tap the red balloons 🎈
          </h2>
          <p className="text-lg text-muted-foreground">
            Each one holds a blessing for you
          </p>
        </div>

        {/* Interactive Balloons */}
        {blessings.map((blessing) => (
          <div
            key={blessing.id}
            className="absolute"
            style={{
              left: `${blessing.position.x}%`,
              top: `${blessing.position.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {!poppedBlessings.includes(blessing.id) ? (
              <button
                onClick={() => handleBalloonClick(blessing)}
                className="relative cursor-pointer transition-transform hover:scale-110 active:scale-95 animate-float"
                style={{ animationDelay: `${blessing.id * 0.5}s` }}
              >
                <div className="w-16 h-20 md:w-20 md:h-24 bg-accent rounded-full balloon-glow">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-accent/40" />
                </div>
              </button>
            ) : (
              <div className="animate-sparkle">
                <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 max-w-xs border border-primary/20 balloon-glow animate-fade-in">
                  <p className="text-sm md:text-base text-foreground text-center">
                    {revealedText[blessing.id]}
                  </p>
                  <div className="mt-2 text-2xl text-center animate-glow-pulse">✨</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default InteractiveBalloons;
