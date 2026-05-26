import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ActionButton from "./ActionButton";
import { navItems } from "../data/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      let currentSection = "home";

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (!section) {
          return;
        }

        if (window.scrollY >= section.offsetTop - 160) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => (event) => {
    event.preventDefault();
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`section-shell transition-all duration-300 ${
          isScrolled ? "max-w-6xl" : ""
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6 ${
            isScrolled
              ? "border-white/10 bg-slate-950/85 shadow-soft backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <a
            href="#home"
            onClick={scrollToSection("home")}
            className="font-heading text-lg font-semibold tracking-[0.18em] text-white"
          >
            Sharon<span className="text-brand-300">Code.</span>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={scrollToSection(item.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <ActionButton href="#contact" onClick={scrollToSection("contact")}>
              Contact Me
            </ActionButton>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className="section-shell md:hidden">
          <div className="mt-3 overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/95 p-4 shadow-soft backdrop-blur-2xl">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={scrollToSection(item.id)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <ActionButton
                href="#contact"
                onClick={scrollToSection("contact")}
                className="mt-2 w-full"
              >
                Let&apos;s Work Together
              </ActionButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
