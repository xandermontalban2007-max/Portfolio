import portfolioData from "../../data/portfolioData";

export default function Logo() {
  const { personal } = portfolioData;

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-sm">
        DA
      </div>

      <div>
        <h1 className="text-base font-bold text-slate-900">
          {personal.name}
        </h1>

        <p className="text-xs text-slate-500">
          {personal.title}
        </p>
      </div>
    </div>
  );
}