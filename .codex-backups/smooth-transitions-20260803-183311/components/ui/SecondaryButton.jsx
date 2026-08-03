export default function SecondaryButton({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      className={`
        group
        relative
        inline-flex
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white/70
        px-7
        py-3.5
        font-semibold
        text-slate-800
        backdrop-blur-xl
        shadow-[0_8px_25px_rgba(15,23,42,0.06)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-[1.02]
        hover:border-blue-300
        hover:bg-white
        hover:text-blue-600
        hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)]
        active:scale-[0.98]
        ${className}
      `}
      {...props}
    >
      {/* Glass Reflection */}
      <span
        className="
          absolute
          inset-0
          -translate-x-full
          skew-x-12
          bg-white/50
          transition-transform
          duration-700
          group-hover:translate-x-[220%]
        "
      />

      <span className="relative flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}