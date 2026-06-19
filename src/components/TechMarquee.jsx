import { TECH_MARQUEE } from "../data/content";

const TechMarquee = () => {
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE];
  return (
    <div className="border-y border-line bg-surface/50 py-5 overflow-hidden">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((tech, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-lg text-text/70">
            {tech}
            <span className="text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
