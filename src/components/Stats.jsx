import { useEffect, useRef, useState } from "react";
import { Briefcase, FolderGit2, Layers, Sparkles } from "lucide-react";
import {
  PROFILE,
  PROJECTS,
  MINI_PROJECTS,
  SKILL_GROUPS,
} from "../data/content";

/** Whole years since the career start year (min 1). */
function yearsOfExperience() {
  const start = new Date(PROFILE.careerStart);
  const years = (Date.now() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.max(1, Math.floor(years));
}

const totalProjects = PROJECTS.length + MINI_PROJECTS.length;
const totalTech = SKILL_GROUPS.reduce((n, g) => n + g.skills.length, 0);
const aiTools = (SKILL_GROUPS.find((g) => g.title === "AI-Assisted Dev")?.skills.length) || 0;

const STATS = [
  { icon: Briefcase, to: yearsOfExperience(), suffix: "+", label: "Years experience" },
  { icon: FolderGit2, to: totalProjects, suffix: "+", label: "Projects built" },
  { icon: Layers, to: totalTech, suffix: "+", label: "Technologies" },
  { icon: Sparkles, to: aiTools, suffix: "+", label: "AI tools" },
];

/** Counts up from 0 → `to` once it scrolls into view. */
const Counter = ({ to, suffix = "", duration = 1400 }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="reveal-scale group rounded-2xl border border-line bg-surface p-6 text-center hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="inline-grid place-items-center w-11 h-11 rounded-xl bg-accent/10 text-accent mb-4 group-hover:scale-110 transition-transform">
                <Icon size={20} />
              </span>
              <p className="font-display font-extrabold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-2">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-text/60 text-sm">{s.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
