import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

const contacts = [
  {
    label: "Email",
    value: "isicheisharon97@gmail.com",
    href: "mailto:isicheisharon97@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/isichei-sharon-03b6a31b4",
    href: "https://www.linkedin.com/in/isichei-sharon-03b6a31b4/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Sharonnkem",
    href: "https://github.com/Sharonnkem",
    icon: Github,
  },
  {
    label: "Location",
    value: "Lagos, Nigeria",
    href: "https://maps.google.com/?q=Lagos,Nigeria",
    icon: MapPin,
  },
];

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recipientEmail = "isicheisharon97@gmail.com";

  useEffect(() => {
    if (!isSubmitted) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setIsSubmitted(false), 4000);

    return () => window.clearTimeout(timeoutId);
  }, [isSubmitted]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", String(formData.get("subject") || "Portfolio enquiry"));
    formData.append("_captcha", "false");

    setIsSubmitting(true);

    fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to send message.");
        }

        return response.json();
      })
      .then(() => {
        form.reset();
        setIsSubmitted(true);
      })
      .catch(() => {
        window.location.href = `mailto:${recipientEmail}`;
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="section-shell py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's work together"
            description="If you have a role, project, or freelance job for me, feel free to send a message."
          />

          <div className="mt-8 grid gap-4">
            {contacts.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                  className="glass-panel flex items-center justify-between gap-4 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-400/10 text-brand-200">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="text-base font-semibold text-white">{item.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-slate-400" />
                </motion.a>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="glass-panel p-6 sm:p-8"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h3 className="font-heading text-2xl text-white">Send a message</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Messages sent here go straight to my email.
              </p>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Email Delivery
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-200">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-white placeholder:text-slate-500 focus:border-brand-300 focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-200">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-white placeholder:text-slate-500 focus:border-brand-300 focus:outline-none"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-200">Subject</span>
              <input
                type="text"
                name="subject"
                placeholder="Project, role, or collaboration"
                required
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-white placeholder:text-slate-500 focus:border-brand-300 focus:outline-none"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-200">Message</span>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me a little about what you need."
                required
                className="w-full resize-none rounded-3xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-white placeholder:text-slate-500 focus:border-brand-300 focus:outline-none"
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-brand-300 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-200"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <p className="text-sm text-slate-400">
                {isSubmitted
                  ? "Your message has been sent to my inbox."
                  : "Prefer email? Reach out directly any time."}
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
