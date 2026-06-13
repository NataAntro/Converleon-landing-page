import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "section" | "article" | "li";
};

const Reveal = ({ children, className, delayMs = 0, as = "div" }: Props) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Tag = as as "div";

  return (
    <Tag
      ref={ref}
      className={cn("reveal-on-scroll", inView && "is-visible", className)}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
