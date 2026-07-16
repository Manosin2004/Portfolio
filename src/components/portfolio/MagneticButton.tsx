import { useRef, type ComponentPropsWithoutRef, type ReactNode } from "react";

type Props = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
  strength?: number;
};

export function MagneticButton({ children, strength = 20, className = "", ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * strength;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <a
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-flex items-center gap-2 transition-transform duration-200 ease-out will-change-transform ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
