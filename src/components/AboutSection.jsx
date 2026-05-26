import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { quickFacts, valueProps } from "../data/site";

export default function AboutSection() {
  return (
    <section id="about" className="section-shell py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="About"
            title="I build clean and practical web experiences."
            description="I enjoy turning ideas into responsive interfaces and backing them with solid backend logic. My focus is on work that is clear, useful, and easy to maintain."
          />

          <div className="mt-8 grid gap-4">
            {quickFacts.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                  className="glass-panel flex items-center gap-4 p-5"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-400/10 text-brand-200">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="text-base font-semibold text-white">{item.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-5">
          {valueProps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="glass-panel p-6 sm:p-7"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sand/10 text-sand">
                    <Icon size={24} />
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl text-white">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">
                      {item.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                      <CheckCircle2 size={16} className="text-brand-300" />
                      Clean structure
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
