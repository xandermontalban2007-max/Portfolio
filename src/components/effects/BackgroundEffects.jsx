export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-28 -top-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -bottom-28 -right-28 h-[420px] w-[420px] rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="absolute right-1/3 top-1/3 h-52 w-52 rounded-full bg-orange-200/20 blur-3xl" />
    </div>
  );
}
