export default function PrimaryButton({
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
        bg-blue-600
        px-7
        py-3.5
        font-semibold
        text-white
        shadow-[0_10px_30px_rgba(37,99,235,0.25)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-[1.02]
        hover:bg-blue-700
        hover:shadow-[0_18px_45px_rgba(37,99,235,0.35)]
        active:scale-[0.98]
        ${className}
      `}
      {...props}
    >
      {/* Light sweep effect */}
      <span
        className="
          absolute
          inset-0
          -translate-x-full
          skew-x-12
          bg-white/20
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