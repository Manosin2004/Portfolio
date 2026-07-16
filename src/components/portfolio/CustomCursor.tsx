import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const ring = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    const isTouch =
      window.matchMedia("(hover: none)").matches ||
      "ontouchstart" in window;
    if (isTouch) return;
    setEnabled(true);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const setHover = (v: boolean) => {
      if (ring.current)
        ring.current.dataset.hover = v ? "true" : "false";
    };
    const enter = (e: Event) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [data-cursor='hover']")) setHover(true);
    };
    const leave = (e: Event) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [data-cursor='hover']")) setHover(false);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-1 -mt-1 h-2 w-2 rounded-full bg-[#00e5ff] mix-blend-screen"
        style={{ boxShadow: "0 0 12px #00e5ff, 0 0 24px #7b2ff7" }}
      />
      <div
        ref={ring}
        aria-hidden
        data-hover="false"
        className="pointer-events-none fixed left-0 top-0 z-[9998] -ml-5 -mt-5 h-10 w-10 rounded-full border border-[#00e5ff]/60 mix-blend-screen transition-[width,height,margin,background] duration-200 data-[hover=true]:h-14 data-[hover=true]:w-14 data-[hover=true]:-ml-7 data-[hover=true]:-mt-7 data-[hover=true]:bg-[#7b2ff7]/20 data-[hover=true]:border-[#7b2ff7]"
      />
    </>
  );
}
