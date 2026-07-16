import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import { SectionHeader } from "./Section";

export function Resume() {
  return (
    <section id="resume" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Resume"
          title={
            <>
              Grab my <span className="text-gradient">résumé</span>
            </>
          }
          desc="Preview or download a full breakdown of my education, experience and skills."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass relative overflow-hidden rounded-3xl p-8 sm:p-10"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#7b2ff7]/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-[#00e5ff]/30 blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <FileText className="h-3.5 w-3.5 text-[#00e5ff]" /> PDF · Latest
              </div>
              <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Manosin_Balaji_Resume.pdf
              </h3>
              <p className="mt-3 text-white/70">
                One-page snapshot of my education, internships, skills and
                selected projects. Feel free to share it with your team.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                href="/Manosin_Balaji_Resume.pdf"
                  download="Manosin_Balaji_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#7b2ff7] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(0,229,255,0.4)] transition hover:scale-[1.03]"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
                <a
                  href="/Manosin_Balaji_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <Eye className="h-4 w-4" /> Preview
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="glass-strong relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl">
                <object
                  data="/Manosin_Balaji_Resume.pdf#toolbar=0&navpanes=0&view=FitH"
                  type="application/pdf"
                  className="h-full w-full"
                  aria-label="Resume preview"
                >
                  <div className="grid h-full place-items-center p-6 text-center text-sm text-white/60">
                    PDF preview unavailable — download to view.
                  </div>
                </object>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/60 to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
