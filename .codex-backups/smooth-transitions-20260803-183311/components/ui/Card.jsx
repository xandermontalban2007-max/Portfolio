export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200/80
        bg-white/95
        p-7
        shadow-sm
        backdrop-blur-sm

        transition-all
        duration-500
        ease-out

        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]

        ${className}
      `}
    >
      {/* subtle glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            -top-24
            right-0
            h-44
            w-44
            rounded-full
            bg-blue-100/40
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}