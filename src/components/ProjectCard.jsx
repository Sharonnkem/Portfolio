import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers3 } from "lucide-react";

function ProjectLink({ href, icon: Icon, label }) {
  if (!href) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300">
        <Icon size={16} />
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
    >
      <Icon size={16} />
      {label}
    </a>
  );
}

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      className="glass-panel overflow-hidden p-5 shadow-soft sm:p-6"
    >
      <div
        className={`relative overflow-hidden rounded-[26px] border border-white/10 p-6 ${project.theme.surface}`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${project.theme.gradient}`} />
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <span
              className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${project.theme.accent}`}
            >
              {project.category}
            </span>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white">
              <Layers3 size={18} />
            </span>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {project.mockup.map((item) => {
              const hasImage = typeof item === "object" && item?.image;
              const label = typeof item === "object" ? item.label : item;
              const fit = typeof item === "object" && item?.fit ? item.fit : "cover";
              const imageClass =
                fit === "contain"
                  ? "h-20 w-full object-contain bg-slate-900/80 p-2"
                  : "h-20 w-full object-cover object-top";

              return (
                <div
                  key={label}
                  className="rounded-[20px] border border-white/10 bg-slate-950/60 p-4 backdrop-blur"
                >
                  <div className="h-2 w-12 rounded-full bg-white/20" />
                  {hasImage ? (
                    <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
                      <img
                        src={item.image}
                        alt={label}
                        className={imageClass}
                      />
                    </div>
                  ) : (
                    <div className="mt-4 h-20 rounded-2xl bg-white/5" />
                  )}
                  <p className="mt-3 text-sm text-slate-300">{label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-heading text-2xl text-white">{project.name}</h3>
          <span className="rounded-full border border-brand-300/20 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">
            {project.badge || "Project"}
          </span>
        </div>

        <p className="mt-4 text-base leading-7 text-slate-300">{project.summary}</p>

        <ul className="mt-6 space-y-3">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
              <span className="mt-2 h-2 w-2 rounded-full bg-brand-300" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <ProjectLink
            href={project.githubUrl}
            icon={Github}
            label={project.githubLabel || "GitHub"}
          />
          <ProjectLink
            href={project.demoUrl}
            icon={ArrowUpRight}
            label={project.demoLabel || "Live Demo"}
          />
        </div>
      </div>
    </motion.article>
  );
}
