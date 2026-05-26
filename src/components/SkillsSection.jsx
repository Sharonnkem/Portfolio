import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/site";

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use"
          description="These are the main tools I use to build frontend interfaces, backend logic, and smooth user experiences."
        />

        <div className="grid gap-5">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.12, ease: "easeOut" }}
              className="glass-panel p-6 sm:p-7"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-400/10 text-brand-200">
                  <Code2 size={18} />
                </span>
                <div>
                  <p className="font-heading text-xl text-white">{group.name}</p>
                  <p className="text-sm text-slate-400">Used in my projects</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.label}
                      className="flex items-center gap-3 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
                    >
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sand/10 text-sand">
                        <Icon size={20} />
                      </span>
                      <h3 className="text-base font-semibold text-white">{skill.label}</h3>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
