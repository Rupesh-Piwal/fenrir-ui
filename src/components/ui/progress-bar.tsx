export function ProgressBar({ value }: { value: number }) {
    return (
        <div className="flex items-center gap-3" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label={`Progress: ${value}%`}>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-2 bg-accent rounded-full transition-all duration-500"
                    style={{ width: `${value}%` }}
                />
            </div>
            <span className="text-sm text-text-secondary">{value}%</span>
        </div>
    );
}