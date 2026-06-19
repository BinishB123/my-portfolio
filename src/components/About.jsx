import { Check } from "lucide-react";
import { ABOUT } from "../data/content";

const About = () => {
  return (
    <section id="about" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <div className="reveal-left">
          <p className="eyebrow">About</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 mb-6">{ABOUT.heading}</h2>
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} className="text-text/70 text-lg leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>

        <div className="reveal-right lg:pt-20">
          <h3 className="font-bold text-lg mb-5">What I bring</h3>
          <ul className="space-y-3">
            {ABOUT.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-0.5 grid place-items-center w-6 h-6 rounded-md bg-accent/15 text-accent shrink-0">
                  <Check size={14} />
                </span>
                <span className="text-text/80">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
