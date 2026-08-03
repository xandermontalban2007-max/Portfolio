import { motion } from "framer-motion";

export default function FloatingCard({
  icon,
  title,
  className = "",
}) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-white/70
        bg-white/85
        px-4
        py-3
        shadow-lg
        backdrop-blur-xl
        ${className}
      `}
    >
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-gradient-to-br
          from-blue-500
          to-sky-400
          text-lg
          text-white
        "
      >
        {icon}
      </div>

      <span
        className="
          whitespace-nowrap
          text-sm
          font-semibold
          text-slate-700
        "
      >
        {title}
      </span>
    </motion.div>
  );
}
