import Skeleton from "../ui/Skeleton";

export default function ScanTableSkeleton() {
    return (
        <section
            className="px-4 sm:px-6 pb-10 animate-fade-in"
            aria-label="Loading scan table"
            aria-busy="true"
        >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                <Skeleton className="w-full lg:max-w-200 h-10" rounded="lg" />
                <div className="flex items-center gap-3">
                    <Skeleton width="90px" height="40px" rounded="lg" />
                    <Skeleton width="100px" height="40px" rounded="lg" />
                    <Skeleton width="110px" height="40px" rounded="lg" />
                </div>
            </div>

            <div className="hidden md:block bg-surface border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-225 text-sm">
                        <thead className="bg-background">
                            <tr>
                                {["w-40", "w-24", "w-24", "w-32", "w-36", "w-20"].map(
                                    (w, i) => (
                                        <th key={i} className="px-6 py-4 text-left">
                                            <Skeleton className={w} height="12px" rounded="sm" />
                                        </th>
                                    ),
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 4 }).map((_, row) => (
                                <tr key={row}>
                                    <td className="px-6 py-5">
                                        <Skeleton width="140px" height="14px" rounded="sm" />
                                    </td>
                                    <td className="px-6 py-5">
                                        <Skeleton width="70px" height="14px" rounded="sm" />
                                    </td>
                                    <td className="px-6 py-5">
                                        <Skeleton width="80px" height="22px" rounded="full" />
                                    </td>
                                    <td className="px-6 py-5">
                                        <Skeleton width="128px" height="8px" rounded="full" />
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex gap-2">
                                            {Array.from({ length: 3 }).map((_, j) => (
                                                <Skeleton
                                                    key={j}
                                                    width="28px"
                                                    height="22px"
                                                    rounded="md"
                                                />
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <Skeleton width="50px" height="14px" rounded="sm" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="md:hidden space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div
                        key={i}
                        className="bg-surface border border-border rounded-xl p-4"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <Skeleton width="120px" height="14px" rounded="sm" />
                            <Skeleton width="70px" height="22px" rounded="full" />
                        </div>
                        <Skeleton width="90px" height="12px" rounded="sm" className="mb-2" />
                        <Skeleton className="w-full" height="8px" rounded="full" />
                        <div className="flex gap-2 mt-3">
                            {Array.from({ length: 3 }).map((_, j) => (
                                <Skeleton key={j} width="28px" height="22px" rounded="md" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
