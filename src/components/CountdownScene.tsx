import { useState, useEffect } from "react";

interface CountdownSceneProps {
  targetDate: Date;
}

const BalloonSVG = ({ color = "#ef4444" }: { color?: string }) => (
  <svg
    width="80"
    height="110"
    viewBox="0 0 90 130"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-lg"
  >
    <defs>
      <radialGradient id="balloonGradient" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="white" stopOpacity="0.6" />
        <stop offset="100%" stopColor={color} />
      </radialGradient>
    </defs>

    {/* Balloon body */}
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
      d="M45 110 C 40 120, 50 125, 45 135"
      stroke={color}
      strokeWidth="2"
      fill="transparent"
    />
  </svg>
);

const CountdownScene = ({ targetDate }: CountdownSceneProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="min-h-screen flex items-center justify-center gradient-sunset relative overflow-hidden">
      {/* Floating firefly-like particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float-slow opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Red Balloon (SVG version) */}
      <div className="absolute top-1/4 right-1/4 animate-float-slow">
        <BalloonSVG color="#ef4444" />
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-6 max-w-md animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-glow">
          🌸
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 leading-relaxed">
          Something peaceful is waiting for you…
        </p>
        <p className="text-lg text-foreground/80 mb-12">
          Wait patiently — this will make you smile.
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-card/30 backdrop-blur-sm rounded-xl p-4 border border-border/20"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary text-glow">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground capitalize mt-1">
                {unit}
              </div>
            </div>
          ))}
        </div>

        <div className="text-sm text-foreground/70 italic">
          November 13, 00:00 AM
        </div>
      </div>
    </div>
  );
};

export default CountdownScene;
