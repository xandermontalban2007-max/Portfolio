import { motion } from "framer-motion";

export default function SecondaryButton({ children, className = "", ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.16, ease: "easeOut" }}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white/70 px-7 py-3.5 font-semibold text-slate-800 shadow-[0_8px_25px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-[background-color,border-color,color,box-shadow] duration-200 hover:border-blue-300 hover:bg-white hover:text-blue-600 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] ${className}`}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/50 transition-transform duration-500 ease-out group-hover:translate-x-[220%]" />
      <span className="relative flex items-center gap-2 transition-transform duration-200 ease-out group-hover:scale-[1.02] motion-reduce:transform-none">
        {children}
      </span>
    </motion.button>
  );
}
