import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function SocialRail() {
  const links = [
    {
      href: "https://www.linkedin.com/in/manosinbalaji2004",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "https://github.com/", icon: Github, label: "GitHub" },
    { href: "mailto:manosinbalaji2004@gmail.com", icon: Mail, label: "Email" },
    { href: "tel:+919500933656", icon: Phone, label: "Phone" },
  ];
  return (
    <div className="fixed bottom-6 left-4 z-40 hidden flex-col gap-2 lg:flex">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target={l.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={l.label}
          className="glass grid h-10 w-10 place-items-center rounded-xl text-white/80 transition hover:-translate-y-0.5 hover:text-[#00e5ff] hover:glow-cyan"
        >
          <l.icon className="h-4 w-4" />
        </a>
      ))}
      <div className="mx-auto mt-1 h-16 w-px bg-gradient-to-b from-[#00e5ff] to-transparent" />
    </div>
  );
}
