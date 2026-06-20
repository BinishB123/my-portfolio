import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PROFILE, NAV_LINKS } from "../data/content";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-bg/70 border-b border-line">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          <span className="font-mono text-accent">&lt;/&gt;</span>{" "}
          {PROFILE.name.split(" ")[0]}
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-text/80 hover:text-accent transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={PROFILE.resumeUrl === "#" ? "/resume.pdf" : PROFILE.resumeUrl}
              download={"Resume - " + PROFILE.name + ".pdf"}
              className="rounded-full border border-accent/50 text-accent px-5 py-2 hover:bg-accent hover:text-bg transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden px-6 pb-4 space-y-3 bg-bg/95 border-b border-line">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-1 font-medium text-text/80 hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
