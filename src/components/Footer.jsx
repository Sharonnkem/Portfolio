import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="section-shell pb-8 pt-4">
      <div className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/[0.03] px-5 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          &copy;2024 Developed By Sharon<span className="text-brand-300">Code</span>.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 text-slate-200 transition hover:text-white"
        >
          Back to top
          <ArrowUpRight size={16} />
        </a>
      </div>
    </footer>
  );
}
