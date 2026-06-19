import { ArrowDown, ArrowUpRight, Terminal, MapPin } from "lucide-react";
import { PROFILE } from "../data/content";
import { GitHubIcon, LinkedInIcon, MailIcon, LeetCodeIcon } from "./SocialIcons";

const ICONS = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  LeetCode: LeetCodeIcon,
  Mail: MailIcon,
};

const initials = PROFILE.name
  .split(" ")
  .map((n) => n[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 dot-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -top-20 -right-10 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-blob" />
      <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-accent-2/20 blur-3xl animate-blob [animation-delay:4s]" />

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <p className="reveal inline-flex items-center gap-2 text-accent font-semibold tracking-wide mb-4">
            <Terminal size={16} />
            {PROFILE.role} · {PROFILE.location}
          </p>
          <h1 className="reveal reveal-d1 text-4xl sm:text-6xl font-extrabold leading-[1.05]">
            Building the web,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-2 animate-gradient">
              front to back
            </span>
            .
          </h1>
          <p className="reveal reveal-d2 mt-6 text-lg sm:text-xl text-text/70 max-w-xl">
            {PROFILE.tagline}
          </p>

          <div className="reveal reveal-d3 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 text-bg font-semibold px-7 py-3 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all"
            >
              View projects
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3 font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Contact me
            </a>
          </div>

          {/* social row */}
          <div className="reveal reveal-d3 mt-8 flex items-center gap-3">
            {PROFILE.socials.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.url}
                  aria-label={s.label}
                  className="grid place-items-center w-10 h-10 rounded-lg border border-line text-text/70 hover:text-accent hover:border-accent hover:-translate-y-0.5 transition-all"
                >
                  {Icon && <Icon size={18} />}
                </a>
              );
            })}
          </div>
        </div>

        {/* RIGHT — code-card avatar */}
        <div className="reveal reveal-d2 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-accent/30 to-accent-2/30 blur-xl" />
            <div className="relative rounded-2xl border border-line bg-surface shadow-2xl overflow-hidden animate-float-slow">
              {/* window bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 font-mono text-xs text-text/40">developer.js</span>
              </div>
              {/* photo (with caption) or code snippet */}
              {PROFILE.photo ? (
                <div>
                  <img src={PROFILE.photo} alt={PROFILE.name} className="w-full h-72 object-cover" />
                  <div className="flex items-center justify-between gap-3 px-4 py-3 border-t border-line">
                    <div className="text-left">
                      <p className="font-semibold leading-tight">{PROFILE.name}</p>
                      <p className="text-text/60 text-sm">{PROFILE.role}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[10px] uppercase tracking-wider text-text/40">
                        Current location
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm text-text/80">
                        <MapPin size={14} className="text-accent" />
                        {PROFILE.location}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <pre className="font-mono text-[13px] leading-relaxed p-5 text-text/80 overflow-x-auto">
{`const dev = {
  name: "${PROFILE.name}",
  role: "${PROFILE.role}",
  location: "${PROFILE.location}",
  stack: ["React", "Node", "DB"],
  available: true,
};`}
                </pre>
              )}
            </div>

            {PROFILE.status && (
              <div className="absolute top-16 right-4 bg-surface/90 backdrop-blur border border-line rounded-full shadow-xl px-3 py-1.5 flex items-center gap-2 animate-float [animation-delay:1.5s]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium">{PROFILE.status}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <a href="#projects" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text/40 animate-bounce" aria-label="Scroll down">
        <ArrowDown size={22} />
      </a>
    </section>
  );
};

export default Hero;
