export const colors = {
  background: "#FFFFFF",
  surface: "#F8FAFC",
  section: "#F1F5F9",

  primary: "#2563EB",
  primaryLight: "#DBEAFE",
  primaryHover: "#1D4ED8",

  success: "#22C55E",
  warning: "#F59E0B",

  text: "#0F172A",
  textSecondary: "#64748B",

  border: "#E2E8F0",

  glass: "rgba(255,255,255,.75)",
};

export const spacing = {
  section: "py-24 lg:py-32",
  container: "mx-auto max-w-7xl px-6 lg:px-8",
};

export const radius = {
  sm: "rounded-xl",
  md: "rounded-2xl",
  lg: "rounded-3xl",
  full: "rounded-full",
};

export const shadow = {
  xs: "shadow-sm",

  sm: "shadow-md",

  card:
    "shadow-[0_10px_35px_rgba(15,23,42,.06)]",

  cardHover:
    "hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(37,99,235,.12)]",

  navbar:
    "shadow-[0_8px_30px_rgba(15,23,42,.06)]",

  button:
    "shadow-[0_10px_30px_rgba(37,99,235,.20)]",
};

export const animation = {
  transition: "transition-all duration-300",

  smooth: "transition-all duration-500",

  hover:
    "hover:-translate-y-1 hover:scale-[1.02]",

  card:
    "transition-all duration-500 hover:-translate-y-2",

  button:
    "transition-all duration-300 hover:-translate-y-1 active:scale-95",
};

export const blur = {
  glass: "backdrop-blur-xl",
};

export const styles = {
  container: spacing.container,

  section: spacing.section,

  glass: `
    border border-white/70
    bg-white/70
    backdrop-blur-xl
  `,

  card: `
    rounded-3xl
    border
    border-slate-200/70
    bg-white/90
    p-6
    shadow-[0_10px_35px_rgba(15,23,42,.06)]
    transition-all
    duration-500
    hover:-translate-y-2
    hover:shadow-[0_25px_60px_rgba(37,99,235,.12)]
  `,

  buttonPrimary: `
    rounded-2xl
    bg-blue-600
    px-6
    py-3
    font-semibold
    text-white
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-blue-700
  `,
};