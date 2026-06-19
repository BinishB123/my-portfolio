import { ExternalLink, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/content";
import { GitHubIcon } from "./SocialIcons";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** A faux app screenshot — browser chrome + abstract UI tinted by the project color. */
const Mockup = ({ project }) => (
  <div className="group rounded-2xl border border-line bg-surface overflow-hidden shadow-2xl hover:-translate-y-1.5 transition-transform duration-300">
    {/* browser bar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
      <span className="w-3 h-3 rounded-full bg-rose-500/80" />
      <span className="w-3 h-3 rounded-full bg-amber-400/80" />
      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
      <div className="ml-3 flex-1 h-6 rounded-md bg-bg/60 border border-line px-3 flex items-center font-mono text-[10px] text-text/40">
        {slug(project.title)}.demo.app
      </div>
    </div>
    {/* gradient app body with abstract UI skeleton */}
    <div className={`relative h-60 bg-gradient-to-br ${project.color} p-4`}>
      <div className="flex gap-3 h-full">
        {/* sidebar */}
        <div className="hidden sm:flex w-1/5 rounded-lg bg-white/15 flex-col gap-2 p-2">
          <div className="h-2.5 rounded bg-white/40" />
          <div className="h-2.5 rounded bg-white/25" />
          <div className="h-2.5 rounded bg-white/25" />
          <div className="mt-auto h-2.5 rounded bg-white/30" />
        </div>
        {/* main */}
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-5 w-1/3 rounded bg-white/35" />
            <div className="h-5 w-12 rounded-full bg-white/40" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[0, 1, 2, 3].map((n) => (
              <div key={n} className="h-14 rounded-lg bg-white/15 backdrop-blur p-2">
                <div className="h-2 w-2/3 rounded bg-white/40" />
                <div className="mt-2 h-2 w-1/2 rounded bg-white/25" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <span className="absolute bottom-2 right-3 font-mono text-white/20 text-sm font-bold">
        {project.category}
      </span>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="reveal mb-16 max-w-2xl">
        <p className="eyebrow">Selected Work</p>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-3">Featured projects</h2>
        <p className="mt-4 text-text/60 text-lg">
          A mix of full-stack apps and front-ends I've built — each one taught me
          something new.
        </p>
      </div>

      <div className="space-y-20 lg:space-y-28">
        {PROJECTS.map((project, i) => {
          const flip = i % 2 === 1;
          return (
            <div key={project.title} className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
              {/* TEXT */}
              <div className={`reveal-left ${flip ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${project.color}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs tracking-widest uppercase text-text/50">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold mt-4">{project.title}</h3>
                <p className="mt-3 text-text/65 leading-relaxed">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-text/70 bg-white/5 border border-line px-3 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-5 text-sm">
                  <a
                    href={project.live}
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 text-bg font-semibold px-5 py-2.5 hover:-translate-y-0.5 transition-transform"
                  >
                    Live demo
                    <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a
                    href={project.code}
                    className="inline-flex items-center gap-2 text-text/75 hover:text-accent transition-colors"
                  >
                    <GitHubIcon size={16} /> Source code
                  </a>
                </div>
              </div>

              {/* MOCKUP */}
              <div className={`reveal-right ${flip ? "lg:order-1" : ""}`}>
                <Mockup project={project} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
