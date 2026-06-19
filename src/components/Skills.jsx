import { Code2, Server, Database, Wrench, Sparkles } from "lucide-react";
import { SKILL_GROUPS } from "../data/content";

// map each group title to an icon
const ICONS = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  "Tools & DevOps": Wrench,
  "AI-Assisted Dev": Sparkles,
};

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="reveal mb-14 max-w-2xl">
        <p className="eyebrow">Tech Stack</p>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-3">Skills &amp; tools</h2>
        <p className="mt-4 text-text/60 text-lg">
          The technologies I use to build complete, production-ready applications.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {SKILL_GROUPS.map((group, i) => {
          const Icon = ICONS[group.title] || Code2;
          return (
            <div
              key={group.title}
              className="reveal-scale group relative overflow-hidden rounded-2xl border border-line bg-surface p-7 hover:border-accent/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300"
            >
              {/* hover glow */}
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex items-center gap-4 mb-6">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-2 text-bg shadow-lg shadow-accent/20">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="font-bold text-lg">{group.title}</h3>
                  <p className="font-mono text-xs text-text/40">
                    {String(group.skills.length).padStart(2, "0")} skills
                  </p>
                </div>
                <span className="ml-auto font-display font-extrabold text-2xl text-line">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* skill pills */}
              <div className="relative flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-sm text-text/80 bg-white/5 border border-line rounded-lg px-3 py-1.5 hover:bg-accent hover:text-bg hover:border-accent transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
