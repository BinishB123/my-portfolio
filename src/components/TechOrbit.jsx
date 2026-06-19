import { TECH_MARQUEE, PROFILE } from "../data/content";

// Each tech becomes a planet on its own orbit (radius + speed).
const PLANETS = TECH_MARQUEE.slice(0, 6);
const COLORS = ["#38bdf8", "#818cf8", "#34d399", "#f472b6", "#fbbf24", "#fb7185"];

const initials = PROFILE.name
  .split(" ")
  .map((n) => n[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

const TechOrbit = () => {
  return (
    <section className="relative px-6 py-24 overflow-hidden">
      {/* faint starfield */}
      <div className="absolute inset-0 dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      <div className="relative max-w-6xl mx-auto text-center">
        <p className="eyebrow justify-center">My Toolbox</p>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 mb-16">Tech solar system</h2>

        {/* group → pause on hover; scale keeps it tidy on small screens */}
        <div className="group relative w-[420px] h-[420px] mx-auto scale-[0.72] sm:scale-90 lg:scale-100">
          {/* ☀️ the sun (center) */}
          <div className="absolute inset-0 grid place-items-center z-10">
            <div className="relative">
              <div className="absolute inset-0 -m-8 rounded-full bg-accent/30 blur-2xl animate-pulse" />
              <div className="relative grid place-items-center w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent-2 shadow-[0_0_50px_rgba(56,189,248,0.55)]">
                <span className="font-display font-extrabold text-2xl text-bg">{initials}</span>
              </div>
            </div>
          </div>

          {/* planets + orbital paths */}
          {PLANETS.map((tech, i) => {
            const radius = 58 + i * 30;
            const duration = 14 + i * 6; // inner planets orbit faster
            const size = radius * 2;
            const color = COLORS[i % COLORS.length];
            return (
              <div key={tech}>
                {/* orbital path */}
                <div
                  className="absolute left-1/2 top-1/2 rounded-full border border-line/50"
                  style={{ width: size, height: size, marginLeft: -radius, marginTop: -radius }}
                />
                {/* rotating ring carrying the planet */}
                <div
                  className="absolute left-1/2 top-1/2 orbit-cw group-hover:[animation-play-state:paused]"
                  style={{
                    width: size,
                    height: size,
                    marginLeft: -radius,
                    marginTop: -radius,
                    animationDuration: `${duration}s`,
                  }}
                >
                  {/* planet anchored at the top of its orbit */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    {/* counter-rotate so the label stays upright */}
                    <div
                      className="orbit-ccw group-hover:[animation-play-state:paused]"
                      style={{ animationDuration: `${duration}s` }}
                    >
                      <span className="inline-flex items-center gap-1.5 whitespace-nowrap font-mono text-xs bg-surface border border-line rounded-full pl-1.5 pr-2.5 py-1 shadow-lg hover:scale-110 hover:border-accent transition-all duration-200">
                        <span
                          className="w-3 h-3 rounded-full shadow-[0_0_8px] inline-block"
                          style={{ background: color, color }}
                        />
                        {tech}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-text/50 text-sm">Hover to pause the orbit</p>
      </div>
    </section>
  );
};

export default TechOrbit;
