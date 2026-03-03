export function ProgressBar({ value }: { value: number }) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-32 h-2 bg-gray-200 rounded-full">
                <div
                    className="h-2 bg-accent rounded-full"
                    style={{ width: `${value}%` }}
                />
            </div>
            <span className="text-sm text-text-secondary">{value}%</span>
        </div>
    );
}