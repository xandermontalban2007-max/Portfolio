export default function Badge({
  children,
  color = "green",
}) {
  const variants = {
    green: "bg-emerald-100 text-emerald-700",
    blue: "bg-blue-100 text-blue-700",
    orange: "bg-orange-100 text-orange-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${variants[color]}`}
    >
      {children}
    </span>
  );
}