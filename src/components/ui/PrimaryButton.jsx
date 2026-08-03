import { motion } from "framer-motion";

export default function PrimaryButton({ children, className = "", ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.16, ease: "easeOut" }}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)] transition-[background-color,box-shadow] duration-200 hover:bg-blue-700 hover:shadow-[0_18px_45px_rgba(37,99,235,0.35)] ${className}`}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-500 ease-out group-hover:translate-x-[220%]" />
      <span className="relative flex items-center gap-2 transition-transform duration-200 ease-out group-hover:scale-[1.02] motion-reduce:transform-none">
        {children}
      </span>
    </motion.button>
  );
}
