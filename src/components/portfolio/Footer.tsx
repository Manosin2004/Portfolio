import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#00e5ff] to-[#7b2ff7] font-display text-lg font-black text-[#050816]">
            M
          </span>
          <div>
            <div className="font-display font-semibold">Manosin Balaji</div>
            <div className="text-xs text-white/50">Full Stack Developer</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {[
            {
              href: "https://www.linkedin.com/in/manosinbalaji2004",
              icon: Linkedin,
              label: "LinkedIn",
            },
            { href: "https://github.com/", icon: Github, label: "GitHub" },
            { href: "mailto:manosinbalaji2004@gmail.com", icon: Mail, label: "Email" },
            { href: "tel:+919500933656", icon: Phone, label: "Phone" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:-translate-y-0.5 hover:border-[#00e5ff]/60 hover:text-[#00e5ff] hover:glow-cyan"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <div className="text-xs text-white/50">
          © {new Date().getFullYear()} Manosin Balaji. Crafted with{" "}
          <span className="text-gradient font-semibold">passion</span>.
        </div>
      </div>
    </footer>
  );
}
