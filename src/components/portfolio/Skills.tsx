import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./Section";
import {
  Boxes,
  Braces,
  Database,
  Globe,
  Layers,
  Server,
  Wrench,
} from "lucide-react";

type SkillGroup = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  skills: { name: string; level: number }[];
};

const groups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Braces,
    color: "from-[#00e5ff] to-[#7b2ff7]",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-[#7b2ff7] to-[#00ffd1]",
    skills: [
      { name: "PHP", level: 82 },
      { name: "Node.js", level: 80 },
      { name: "Firebase", level: 85 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-[#00ffd1] to-[#00e5ff]",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Firestore", level: 82 },
    ],
  },
  {
    title: "CMS",
    icon: Layers,
    color: "from-[#00e5ff] to-[#7b2ff7]",
    skills: [
      { name: "WordPress", level: 90 },
      { name: "Elementor", level: 88 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-[#7b2ff7] to-[#00e5ff]",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 85 },
      { name: "Netlify", level: 85 },
    ],
  },
  {
    title: "Other",
    icon: Globe,
    color: "from-[#00ffd1] to-[#7b2ff7]",
    skills: [
      { name: "SEO", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "Responsive Design", level: 92 },
    ],
  },
];

function Bar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-white/85">{name}</span>
        <span className="font-mono text-xs text-white/50">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-[#00e5ff] via-[#7b2ff7] to-[#00ffd1] shadow-[0_0_12px_rgba(0,229,255,0.6)]"
        />
      </div>
    </div>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Skills"
          title={
            <>
              A stack tuned for <span className="text-gradient">shipping</span>
            </>
          }
          desc="Tools and technologies I use to design, build and deploy end-to-end web products."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60 from-[#00e5ff] to-[#7b2ff7]" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${g.color} text-[#050816]`}
                  >
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {g.title}
                  </h3>
                </div>
                <Boxes className="h-4 w-4 text-white/30" />
              </div>

              <div className="mt-5 space-y-4">
                {g.skills.map((s) => (
                  <Bar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Counters */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { k: 20, s: "+", label: "Technologies" },
            { k: 10, s: "+", label: "Projects Built" },
            { k: 2, s: "+", label: "Years Coding" },
            { k: 100, s: "%", label: "Passion" },
          ].map((c) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                <Counter to={c.k} suffix={c.s} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
                {c.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
