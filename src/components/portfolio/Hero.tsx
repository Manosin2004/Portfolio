import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import resume from "@/assets/resume.pdf.asset.json";
import { MagneticButton } from "./MagneticButton";

const roles = [
  "Full Stack Developer",
  "React & Node.js Engineer",
  "UI Craftsman",
  "Problem Solver",
];

function useTyped(items: string[], speed = 70, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = items[i % items.length];
    const done = !deleting && text === current;
    const cleared = deleting && text === "";
    const t = setTimeout(
      () => {
        if (done) {
          setDeleting(true);
        } else if (cleared) {
          setDeleting(false);
          setI((v) => v + 1);
        } else {
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1),
          );
        }
      },
      done ? pause : deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, items, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTyped(roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white/70"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#00e5ff]" />
            <span>Available for full-time roles · 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7 }}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block text-white/80 text-lg font-medium tracking-wider uppercase sm:text-xl">
              Hi, I'm
            </span>
            <span className="mt-2 block text-gradient animate-gradient">
              Manosin Balaji
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mt-4 flex items-center gap-2 font-display text-xl text-white/90 sm:text-2xl"
          >
            <span className="text-white/60">›</span>
            <span>{typed}</span>
            <span className="ml-0.5 inline-block h-6 w-[2px] bg-[#00e5ff] animate-caret" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Computer Science graduate crafting modern web applications with
            React, Node.js, PHP and Firebase. I obsess over performance, clean
            architecture and interfaces that feel effortless.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton
              href="#projects"
              className="rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#7b2ff7] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_45px_rgba(123,47,247,0.6)]"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              href={resume.url}
              {...({ download: "Manosin_Balaji_Resume.pdf" } as Record<string, unknown>)}
              className="glass rounded-2xl px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Download Resume
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="rounded-2xl border border-[#00ffd1]/40 px-6 py-3 text-sm font-semibold text-[#00ffd1] hover:bg-[#00ffd1]/10"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.6 }}
            className="mt-10 grid max-w-md grid-cols-3 gap-4"
          >
            {[
              { k: "2+", v: "Years Learning" },
              { k: "10+", v: "Projects" },
              { k: "7.7", v: "CGPA" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-xl p-3 text-center">
                <div className="font-display text-2xl font-bold text-gradient">
                  {s.k}
                </div>
                <div className="mt-0.5 text-[11px] uppercase tracking-wider text-white/60">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Code Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 1.5, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
<div className="relative animate-float">
  <div className="absolute -inset-2 rounded-[2rem] bg-[conic-gradient(from_0deg,#00e5ff,#7b2ff7,#00ffd1,#00e5ff)] opacity-50 blur-2xl animate-pulse-glow" />
  <div className="glass-strong relative overflow-hidden rounded-[1.9rem] border border-white/10 p-6 font-mono text-sm shadow-2xl">
    <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
        <span className="h-3 w-3 rounded-full bg-green-400/70" />
      </div>
      <span className="text-[11px] text-white/40">developer.ts</span>
    </div>
              <div>
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>
              <div className="space-y-1.5 text-white/80">
                <div>
                  <span className="text-[#7b2ff7]">const</span>{" "}
                  <span className="text-[#00e5ff]">developer</span> = {"{"}
                </div>
                <div className="pl-4">
                  name: <span className="text-[#00ffd1]">"Manosin Balaji"</span>,
                </div>
                <div className="pl-4">
                  stack: [<span className="text-[#00ffd1]">"React"</span>,{" "}
                  <span className="text-[#00ffd1]">"Node"</span>,{" "}
                  <span className="text-[#00ffd1]">"PHP"</span>],
                </div>
                <div className="pl-4">
                  status: <span className="text-[#00ffd1]">"Open to work"</span>,
                </div>
                <div className="pl-4">
                  location:{" "}
                  <span className="text-[#00ffd1]">"Tirunelveli, IN"</span>,
                </div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>

          {/* Floating badge cards */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="glass absolute -left-6 top-8 hidden rounded-2xl p-3 sm:block"
          >
            <div className="text-[10px] uppercase tracking-wider text-white/60">
              Stack
            </div>
            <div className="mt-1 font-display text-sm font-semibold">
              React · Node · PHP
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="glass absolute -right-6 bottom-6 hidden rounded-2xl p-3 sm:block"
          >
            <div className="text-[10px] uppercase tracking-wider text-white/60">
              Focus
            </div>
            <div className="mt-1 font-display text-sm font-semibold">
              Full Stack + UI
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-xs text-white/50 sm:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="h-8 w-[2px] bg-gradient-to-b from-[#00e5ff] to-transparent" />
        </div>
      </motion.a>
    </section>
  );
}