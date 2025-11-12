const MainMessage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden py-20 px-6">
      {/* Subtle temple-inspired background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
      </div>

      {/* Ambient sun rays effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />

      <div className="max-w-2xl text-center z-10 space-y-8 animate-fade-in">
        <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-light">
          You've always found beauty in{" "}
          <span className="font-semibold text-primary">simplicity</span>, peace in{" "}
          <span className="font-semibold text-primary">devotion</span>, and joy in{" "}
          <span className="font-semibold text-primary">small things</span>.
        </p>

        <div className="py-8">
          <div className="w-16 h-0.5 bg-primary/30 mx-auto" />
        </div>

        <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-light">
          On this day, may <span className="text-primary font-semibold">Krishna</span> fill your
          heart with calm and your life with quiet happiness.
        </p>

        {/* Om symbol decoration */}
        <div className="pt-8 text-4xl text-primary/50 animate-glow-pulse">
          🕉️
        </div>
      </div>
    </section>
  );
};

export default MainMessage;
