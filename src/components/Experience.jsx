import { MapPin } from "lucide-react";
import { EXPERIENCE } from "../data/content";

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-24 max-w-5xl mx-auto">
      <div className="reveal mb-14">
        <p className="eyebrow">Career</p>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-3">Experience</h2>
      </div>

      <div className="relative border-l border-line ml-3">
        {EXPERIENCE.map((job, i) => (
          <div key={i} className="reveal relative pl-8 pb-10 last:pb-0">
            {/* node */}
            <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-bg" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-bold">{job.role}</h3>
              <span className="font-mono text-sm text-accent">{job.period}</span>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-text/60">
              <span className="font-medium text-text/80">{job.company}</span>
              {job.location && (
                <span className="inline-flex items-center gap-1.5 text-sm">
                  <MapPin size={14} className="text-accent" />
                  {job.location}
                </span>
              )}
            </div>
            <ul className="mt-4 space-y-2">
              {job.points.map((pt, j) => (
                <li key={j} className="flex items-start gap-2 text-text/75">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
