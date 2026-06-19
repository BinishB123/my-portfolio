import { ExternalLink } from "lucide-react";
import { MINI_PROJECTS } from "../data/content";
import { GitHubIcon } from "./SocialIcons";

/**
 * Compact grid of smaller builds. Scales to ANY number of entries
 * (add more to MINI_PROJECTS and the grid grows automatically).
 */
const MiniProjects = () => {
  if (!MINI_PROJECTS.length) return null;

  return (
    <section id="more-projects" className="px-6 pb-24 max-w-6xl mx-auto">
      <div className="reveal mb-12 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">More builds</p>
          <h2 className="text-2xl sm:text-4xl font-extrabold mt-3">Mini projects</h2>
        </div>
        <span className="font-mono text-sm text-text/50">
          {String(MINI_PROJECTS.length).padStart(2, "0")} projects
        </span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {MINI_PROJECTS.map((p) => (
          <div
            key={p.title}
            className="reveal-scale group flex flex-col rounded-2xl border border-line bg-surface p-6 hover:border-accent/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-bold text-lg group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <span className="font-mono text-accent/40 text-sm">{"{}"}</span>
            </div>

            <p className="mt-2 text-sm text-text/65 leading-relaxed flex-1">
              {p.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] text-text/60 bg-white/5 border border-line px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-line flex items-center gap-4 text-sm">
              {p.live && (
                <a href={p.live} className="inline-flex items-center gap-1.5 text-accent hover:underline">
                  <ExternalLink size={14} /> Demo
                </a>
              )}
              {p.code && (
                <a href={p.code} className="inline-flex items-center gap-1.5 text-text/70 hover:text-text">
                  <GitHubIcon size={14} /> Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MiniProjects;
