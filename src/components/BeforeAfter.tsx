import { useCallback, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  imageWidth: number;
  imageHeight: number;
  beforeLabel?: string;
  afterLabel?: string;
  beforeFilter?: string;
};

const BeforeAfter = ({
  src,
  alt,
  imageWidth,
  imageHeight,
  beforeLabel = "Before",
  afterLabel = "After",
  beforeFilter = "blur(6px) saturate(0.55) brightness(0.85)",
}: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(50);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    setFromClientX(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    draggingRef.current = false;
    (e.target as Element).releasePointerCapture?.(e.pointerId);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl select-none touch-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <img
        src={src}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
        className="block w-full h-auto"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        aria-hidden="true"
      >
        <img
          src={src}
          alt=""
          width={imageWidth}
          height={imageHeight}
          className="block w-full h-auto"
          style={{ filter: beforeFilter }}
          draggable={false}
        />
      </div>

      <span className="absolute left-3 top-3 rounded-full bg-background/70 px-3 py-1 text-xs font-semibold text-foreground/90 backdrop-blur">
        {beforeLabel}
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur">
        {afterLabel}
      </span>

      <div
        className="absolute inset-y-0 w-px bg-white/80 pointer-events-none"
        style={{ left: `${pos}%` }}
        aria-hidden="true"
      />
      <button
        type="button"
        role="slider"
        aria-label="Compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={onKeyDown}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-background/70 backdrop-blur shadow-lg cursor-ew-resize focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        style={{ left: `${pos}%` }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>
    </div>
  );
};

export default BeforeAfter;
