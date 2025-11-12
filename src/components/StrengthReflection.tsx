const StrengthReflection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[hsl(40,100%,97%)] to-[hsl(25,100%,88%)] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-accent animate-fade-in text-glow">
          ✨ Happy Birthday, Prachi! ✨
        </h2>

        <div className="space-y-6 text-xl md:text-2xl text-foreground leading-relaxed animate-fade-in-slow">
          <p className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            In a short time, I've learned this:
          </p>
          
          <p className="animate-fade-in font-light" style={{ animationDelay: '0.6s' }}>
            your <span className="font-semibold text-primary">strength</span> is in your{" "}
            <span className="font-semibold text-primary">quiet clarity</span>.
          </p>

          <p className="animate-fade-in font-light" style={{ animationDelay: '0.9s' }}>
            You know your mind, guard your peace,
            <br />
            and hold your boundaries with graceful confidence.
          </p>

          <div className="py-4 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="w-24 h-0.5 bg-primary/30 mx-auto" />
          </div>

          <p className="animate-fade-in font-light" style={{ animationDelay: '1.5s' }}>
            Yet, you hold a <span className="font-semibold text-primary">sentimental heart</span>
            <br />
            that cherishes simple joys and deep roots.
          </p>

          <p className="animate-fade-in text-2xl md:text-3xl font-semibold text-primary" style={{ animationDelay: '1.8s' }}>
            It's a powerful, beautiful combination.
          </p>

          <p className="animate-fade-in italic" style={{ animationDelay: '2.1s' }}>
            Never change.
          </p>

          <div className="pt-8 animate-fade-in" style={{ animationDelay: '2.4s' }}>
            <p className="text-lg md:text-xl text-muted-foreground">
              Wishing you a day as amazing as you are. 🌸
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrengthReflection;
