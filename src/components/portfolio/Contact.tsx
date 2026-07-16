import { motion } from "framer-motion";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./Section";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Opens the user's mail client with prefilled content (works without any secrets).
    const body = `Hi Manosin,%0D%0A%0D%0A${encodeURIComponent(form.message)}%0D%0A%0D%0A— ${encodeURIComponent(
      form.name,
    )}%0D%0APhone: ${encodeURIComponent(form.phone)}%0D%0AEmail: ${encodeURIComponent(form.email)}`;
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "someone"}`);
    setTimeout(() => {
      window.location.href = `mailto:manosinbalaji2004@gmail.com?subject=${subject}&body=${body}`;
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
    }, 700);
  };

  const infos = [
    {
      icon: Mail,
      label: "Email",
      value: "manosinbalaji2004@gmail.com",
      href: "mailto:manosinbalaji2004@gmail.com",
    },
    { icon: Phone, label: "Phone", value: "+91 95009 33656", href: "tel:+919500933656" },
    {
      icon: MapPin,
      label: "Location",
      value: "Panagudi, Tirunelveli — 627109",
      href: "https://www.google.com/maps?q=Panagudi,Tirunelveli",
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Let's build <span className="text-gradient">something great</span>
            </>
          }
          desc="Have a role, project or just want to say hi? Drop a message and I'll reply within 24 hours."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {infos.map((i) => (
              <a
                key={i.label}
                href={i.href}
                target={i.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.06]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#00e5ff]/20 to-[#7b2ff7]/20 text-[#00e5ff] transition group-hover:from-[#00e5ff]/40 group-hover:to-[#7b2ff7]/40">
                  <i.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-white/50">
                    {i.label}
                  </div>
                  <div className="font-medium">{i.value}</div>
                </div>
              </a>
            ))}

            {/* Map */}
            <div className="glass overflow-hidden rounded-2xl">
              <iframe
                title="Location map"
                src="https://www.google.com/maps?q=Panagudi,Tirunelveli&output=embed"
                className="h-56 w-full grayscale-[40%] invert-[8%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:col-span-3"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#7b2ff7]/25 blur-3xl" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                type="text"
                required
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Your full name"
              />
              <Field
                label="Email"
                type="email"
                required
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="you@company.com"
              />
              <Field
                label="Phone"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                placeholder="+91 00000 00000"
                className="sm:col-span-2"
              />
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-white/60">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or role…"
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-[#00e5ff]/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-[#00e5ff]/30"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="mt-6 group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#00e5ff] via-[#7b2ff7] to-[#00ffd1] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(123,47,247,0.4)] transition-transform hover:scale-[1.01] disabled:opacity-70 sm:w-auto"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : status === "sent" ? (
                <>Message ready ✓</>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
  className = "",
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-white/60">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-[#00e5ff]/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-[#00e5ff]/30"
      />
    </div>
  );
}
