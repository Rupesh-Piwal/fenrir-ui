export function ProgressBar({ value }: { value: number }) {
  const getColor = () => {
    if (value <= 20) return "bg-danger";
    if (value <= 40) return "bg-yellow-500";
    return "bg-accent";
  };

  return (
    <div
      className="flex items-center gap-3"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Progress: ${value}%`}
    >
      <div className="w-32 h-2 bg-border rounded-full overflow-hidden">
        <div
          className={`h-2 rounded-full transition-all duration-500 ${getColor()}`}
          style={{ width: `${value}%` }}
        />
      </div>

      <span className="text-sm text-text-secondary">{value}%</span>
    </div>
  );
}
