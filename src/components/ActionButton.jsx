const baseClasses =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

const variants = {
  primary:
    "bg-brand-300 text-slate-950 shadow-lg shadow-brand-300/20 hover:-translate-y-0.5 hover:bg-brand-200",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:-translate-y-0.5 hover:bg-white/10",
  ghost:
    "text-slate-200 hover:-translate-y-0.5 hover:text-white",
};

export default function ActionButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  download = false,
  onClick,
}) {
  const classes = `${baseClasses} ${variants[variant]} ${className}`.trim();

  return (
    <a
      className={classes}
      href={href}
      onClick={onClick}
      download={download}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
