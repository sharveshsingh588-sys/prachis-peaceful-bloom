import { useState } from "react";

interface Blessing {
  id: number;
  text: string;
  popped: boolean;
  position: { x: number; y: number };
}

const BalloonSVG = ({ color = "#ef4444" }: { color?: string }) => (
  <svg
    width="80"
    height="110"
    viewBox="0 0 90 130"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-md sm:drop-shadow-lg"
  >
    <defs>
      <radialGradient id="balloonGradient" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="white" stopOpacity="0.7" />
        <stop offset="100%" stopColor={color} />
      </radialGradient>
    </defs>

    {/* Balloon shape */}
    <ellipse
      cx="45"
      cy="55"
      rx="35"
      ry="50"
      fill="url(#balloonGradient)"
      stroke={color}
      strokeWidth="2"
    />

    {/* Neck */}
    <polygon points="40,100 50,100 45,110" fill={color} />

    {/* String */}
    <path
      d="M45 110 C 40 120, 50 125, 45 130"
      stroke={color}
      strokeWidth="2"
      fill="transparent"
    />
  </svg>
);

const InteractiveBalloons = () => {
  const [blessings] = useState<Blessing[]>([
    { id: 1, text: "May your heart always stay calm 🌺", popped: false, position: { x: 20, y: 30 } },
    { id: 2, text: "Radhe Radhe — may Krishna always walk beside you.", popped: false, position: { x: 70, y: 20 } },
    { id: 3, text: "You deserve peace that feels like home.", popped: false, position: { x: 40, y: 60 } },
    { id: 4, text: "May every sunrise bring you closer to your dreams 🌅", popped: false, position: { x: 80, y: 70 } },
    { id: 5, text: "Your gentle strength is your superpower ✨", popped: false, position: { x: 15, y: 75 } },
  ]);

  const [poppedBlessings, setPoppedBlessings] = useState<number[]>([]);
  const [revealedText, setRevealedText] = useState<{ [key: number]: string }>({});

  const handleBalloonClick = (blessing: Blessing) => {
    if (!poppedBlessings.includes(blessing.id)) {
      setPoppedBlessings((prev) => [...prev, blessing.id]);
      setRevealedText((prev) => ({ ...prev, [blessing.id]: blessing.text }));

      const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");
      audio.volume = 0.1;
      audio.play().catch(() => {});
    }
  };

  return (
    <section className="min-h-screen relative bg-gradient-to-b from-pink-100 via-orange-100 to-yellow-50 overflow-hidden py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto relative h-[90vh] sm:h-screen">
        <div className="text-center mb-10 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Tap the red balloons 🎈
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Each one holds a blessing for you
          </p>
        </div>

        {blessings.map((blessing) => {
          const isPopped = poppedBlessings.includes(blessing.id);
          const cardX = blessing.position.x < 50 ? `${blessing.position.x + 5}%` : `${blessing.position.x - 5}%`;
          const cardY = blessing.position.y > 60 ? `${blessing.position.y - 10}%` : `${blessing.position.y + 10}%`;

          return (
            <div
              key={blessing.id}
              className="absolute"
              style={{
                left: `${blessing.position.x}%`,
                top: `${blessing.position.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {!isPopped ? (
                <button
                  onClick={() => handleBalloonClick(blessing)}
                  className="relative cursor-pointer transition-transform hover:scale-110 active:scale-95 animate-float"
                  style={{ animationDelay: `${blessing.id * 0.5}s` }}
                >
                  <BalloonSVG color="#ef4444" />
                </button>
              ) : (
                <div
                  className="animate-sparkle"
                  style={{
                    position: "absolute",
                    left: cardX,
                    top: cardY,
                    transform: "translate(-50%, -50%)",
                    maxWidth: "85vw",
                  }}
                >
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-5 border border-primary/20 balloon-glow animate-fade-in shadow-lg">
                    <p className="text-sm sm:text-base text-foreground text-center break-words">
                      {revealedText[blessing.id]}
                    </p>
                    <div className="mt-2 text-xl sm:text-2xl text-center animate-glow-pulse">
                      ✨
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InteractiveBalloons;
