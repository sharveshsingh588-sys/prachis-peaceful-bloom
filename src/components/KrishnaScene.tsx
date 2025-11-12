const KrishnaScene = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-peaceful relative overflow-hidden py-20 px-6">
      {/* Diya flicker effect - glowing particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-glow-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing Krishna silhouette effect */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />

      <div className="max-w-3xl text-center z-10 space-y-12 animate-fade-in">
        {/* Peacock feather */}
        <div className="text-6xl md:text-8xl animate-float">
          🦚
        </div>

        {/* Krishna flute decoration */}
        <div className="flex justify-center items-center space-x-4 text-4xl md:text-5xl animate-glow-pulse">
          <span className="text-primary">✨</span>
          <span className="text-5xl md:text-6xl">🪈</span>
          <span className="text-primary">✨</span>
        </div>

        <blockquote className="text-2xl md:text-3xl text-foreground italic leading-relaxed font-light">
          "When the heart is pure,
          <br />
          <span className="text-primary font-semibold">Krishna</span> plays His melody in silence."
        </blockquote>

        {/* Om and lotus decoration */}
        <div className="flex justify-center items-center space-x-6 text-3xl md:text-4xl pt-8">
          <span className="text-primary/60 animate-glow-pulse">🕉️</span>
          <span className="text-accent">🪷</span>
          <span className="text-primary/60 animate-glow-pulse">🕉️</span>
        </div>

        <div className="pt-8 text-lg text-muted-foreground">
          Radhe Radhe 🙏
        </div>
      </div>
    </section>
  );
};

export default KrishnaScene;
