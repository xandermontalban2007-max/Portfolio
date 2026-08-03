export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200/80
        bg-white/95
        p-7
        shadow-sm
        ${className}
      `}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 h-44 w-44 rounded-full bg-blue-100/25 blur-3xl" />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
