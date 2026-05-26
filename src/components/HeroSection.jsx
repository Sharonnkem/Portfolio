import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import ActionButton from "./ActionButton";
import { heroHighlights } from "../data/site";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

function SocialLink({ label, href }) {
  const Icon = socialIcons[label];

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-brand-300/40 hover:bg-brand-400/10 hover:text-white"
      aria-label={label}
    >
      <Icon size={18} />
    </a>
  );
}

export default function HeroSection() {
  const scrollToSection = (id) => (event) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="section-shell pt-14 sm:pt-16 lg:pt-20">
      <div className="grid items-center gap-12 pb-20 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
            Full Stack Developer
          </span>
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.35em] text-brand-200">
            Sharon Isichei
          </p>
          <h1 className="mt-4 max-w-4xl font-heading text-2xl font-medium leading-[1.08] tracking-[-0.03em] text-slate-400 sm:text-3xl lg:text-[2.4rem]">
            I BUILD CLEAN, MODERN WEBSITES
            <span className="mt-3 block font-heading text-inherit font-medium tracking-[-0.03em] text-inherit">
              THAT ARE FAST, FUNCTIONAL, AND EASY TO USE.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            I work with React, Node.js, and JavaScript to build responsive websites and web apps
            that are clean, fast, and easy to use.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ActionButton href="#projects" onClick={scrollToSection("projects")}>
              View Projects
              <ArrowRight size={16} className="ml-2" />
            </ActionButton>
            <ActionButton
              href="#contact"
              onClick={scrollToSection("contact")}
              variant="secondary"
            >
              Contact Me
            </ActionButton>
            <ActionButton
              href="/Sharon-Isichei-CV.pdf"
              variant="ghost"
              download
              className="justify-start sm:justify-center"
            >
              <Download size={16} className="mr-2" />
              Download CV
            </ActionButton>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <SocialLink label="GitHub" href="https://github.com/Sharonnkem" />
            <SocialLink
              label="LinkedIn"
              href="https://www.linkedin.com/in/isichei-sharon-03b6a31b4/"
            />
            <SocialLink label="Email" href="mailto:isicheisharon97@gmail.com" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="glass-panel relative overflow-hidden p-4 shadow-glow sm:p-6">
            <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-br from-brand-300/30 via-white/5 to-transparent" />
            <div className="relative rounded-[24px] border border-white/10 bg-slate-950/70 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Currently available for</p>
                  <h2 className="font-heading text-2xl text-white">Fullstack roles</h2>
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100">
                  Open
                </span>
              </div>

              <div className="mt-6 overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br from-brand-500/25 via-slate-900 to-slate-950">
                <img
                  src="/img/profile.jpeg"
                  alt="Sharon Isichei"
                  className="h-[24rem] w-full object-cover object-center"
                />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {heroHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[20px] border border-white/10 bg-white/5 p-4"
                  >
                    <div className="font-heading text-2xl text-white">{item.value}</div>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="absolute -bottom-16 left-4 hidden max-w-[16rem] rounded-[24px] border border-white/10 bg-slate-900/90 px-5 py-4 shadow-soft backdrop-blur-xl sm:block"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Design + Engineering
            </p>
            <p className="mt-2 max-w-[15rem] text-sm leading-6 text-slate-200">
              I turn ideas into simple, working web products.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
