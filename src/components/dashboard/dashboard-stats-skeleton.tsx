import Skeleton from "../ui/Skeleton";

export default function DashboardStatsSkeleton() {
    return (
        <section
            className="w-full bg-surface border border-border rounded-lg p-1 animate-fade-in"
            aria-label="Loading dashboard statistics"
            aria-busy="true"
        >
            <div className="hidden md:block pt-2 pb-6 px-2">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex flex-wrap items-center gap-6">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Skeleton key={i} width="100px" height="14px" rounded="sm" />
                        ))}
                    </div>
                    <Skeleton width="110px" height="14px" rounded="sm" />
                </div>
            </div>

            <div className="py-6 border-b border-border/50">
                <div className="grid gap-6 grid-cols-2 md:grid-cols-4 px-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div
                            key={i}
                            className="bg-surface border border-border rounded-xl p-4 sm:p-5 flex flex-col gap-4"
                        >
                            <div className="flex items-center justify-between">
                                <Skeleton width="90px" height="12px" rounded="sm" />
                                <Skeleton width="30px" height="30px" rounded="lg" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Skeleton width="60px" height="28px" rounded="md" />
                                <Skeleton width="120px" height="10px" rounded="sm" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
