export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute left-20 top-20 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-40"></div>

      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-green-100 blur-3xl opacity-40"></div>
    </div>
  );
}import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-120px] top-[-80px] h-96 w-96 rounded-full bg-blue-200/40 blur-3xl"
      />

      {/* Green Glow */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-120px] right-[-120px] h-[420px] w-[420px] rounded-full bg-emerald-200/40 blur-3xl"
      />

      {/* Orange Accent */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-1/3 top-1/3 h-52 w-52 rounded-full bg-orange-200/30 blur-3xl"
      />
    </div>
  );
}