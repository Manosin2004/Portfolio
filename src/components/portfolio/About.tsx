import { motion } from "framer-motion";
import { Code2, GraduationCap, MapPin, User } from "lucide-react";
import { SectionHeader } from "./Section";
import { TiltCard } from "./TiltCard";

export function About() {
  const facts = [
    { icon: User, label: "Name", value: "Manosin Balaji.M" },
    { icon: Code2, label: "Role", value: "Full Stack Developer" },
    {
      icon: GraduationCap,
      label: "Education",
      value: "B.E Computer Science · Anna University",
    },
    { icon: MapPin, label: "Location", value: "Tirunelveli, India" },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="About"
          title={
            <>
              Building web that <span className="text-gradient">feels alive</span>
            </>
          }
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <TiltCard className="glass rounded-3xl p-8">
              <h3 className="font-display text-2xl font-semibold">
                Passionate about crafted, scalable web experiences.
              </h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                I'm a Computer Science Engineering graduate with hands-on
                experience across the stack — React.js, Node.js, PHP, JavaScript,
                Python, MySQL and Firebase. I love building modern web
                applications with clean UI, thoughtful UX and scalable backends.
              </p>
              <p className="mt-4 text-white/70 leading-relaxed">
                Promoted from Intern to Web Developer for consistent performance,
                I ship SEO-optimized WordPress sites, REST API integrations and
                full-stack products end-to-end. I'm now seeking a full-time role
                where I can grow with a great team.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Clean Code",
                  "Responsive Design",
                  "Performance",
                  "SEO",
                  "Accessibility",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="grid gap-4 lg:col-span-2"
          >
            {facts.map((f) => (
              <TiltCard key={f.label} className="glass rounded-2xl p-5">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#00e5ff]/20 to-[#7b2ff7]/20 text-[#00e5ff]">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-white/50">
                      {f.label}
                    </div>
                    <div className="mt-0.5 font-medium">{f.value}</div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
