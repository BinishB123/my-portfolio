import { useEffect, useState } from "react";

/** A gradient bar at the top that fills as you scroll the page. */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[70] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-accent to-accent-2"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
