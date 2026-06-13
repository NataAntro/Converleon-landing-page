import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "features", label: "Features" },
  { id: "learn-guides", label: "Guides" },
  { id: "faq", label: "FAQ" },
];

const FloatingNav = () => {
  const [active, setActive] = useState<string>("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);

      let current = "";
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.4) {
          current = id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className={cn(
        "hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-2 rounded-full border border-white/10 bg-background/40 p-2 backdrop-blur transition-opacity duration-300",
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
            active === s.id
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
};

export default FloatingNav;
