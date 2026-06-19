import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { PROFILE } from "../data/content";
import { GitHubIcon, LinkedInIcon, MailIcon, LeetCodeIcon } from "./SocialIcons";

const ICONS = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  LeetCode: LeetCodeIcon,
  Mail: MailIcon,
};

const METHODS = [
  { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  PROFILE.phone && {
    icon: Phone,
    label: "Phone",
    value: PROFILE.phone,
    href: `tel:${PROFILE.phone.replace(/\s+/g, "")}`,
  },
  { icon: MapPin, label: "Location", value: PROFILE.location, href: null },
].filter(Boolean);

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — intro */}
        <div className="reveal-left">
          <p className="eyebrow">Contact</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 leading-tight">
            Let's build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-2">
              together
            </span>
          </h2>
          <p className="mt-4 text-text/65 text-lg max-w-md">
            I'm open to full-stack roles, freelance work, and interesting projects.
            Drop a message — I'll get back to you.
          </p>

          {PROFILE.status && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium">{PROFILE.status}</span>
            </div>
          )}

          {/* socials */}
          <div className="mt-8 flex items-center gap-3">
            {PROFILE.socials.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.url}
                  aria-label={s.label}
                  title={s.label}
                  className="grid place-items-center w-11 h-11 rounded-xl border border-line text-text/70 hover:text-accent hover:border-accent hover:-translate-y-1 transition-all duration-200"
                >
                  {Icon && <Icon size={18} />}
                </a>
              );
            })}
          </div>
        </div>

        {/* RIGHT — contact method cards */}
        <div className="space-y-4">
          {METHODS.map((m, i) => {
            const Icon = m.icon;
            const Tag = m.href ? "a" : "div";
            return (
              <Tag
                key={m.label}
                href={m.href || undefined}
                className={`reveal-right group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-all duration-300 ${
                  m.href ? "hover:border-accent/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10" : ""
                }`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-2 text-bg shrink-0">
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-xs text-text/40 uppercase tracking-wider">
                    {m.label}
                  </p>
                  <p className="font-medium truncate">{m.value}</p>
                </div>
                {m.href && (
                  <ArrowUpRight
                    size={18}
                    className="ml-auto text-text/40 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                )}
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
