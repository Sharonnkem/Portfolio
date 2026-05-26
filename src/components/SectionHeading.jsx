import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, centered }) {
  return (
    <motion.div
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="mb-4 inline-flex rounded-full border border-brand-300/25 bg-brand-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-100">
        {eyebrow}
      </span>
      <h2 className="section-heading">{title}</h2>
      <p className="section-copy mt-4 text-slate-300">{description}</p>
    </motion.div>
  );
}
