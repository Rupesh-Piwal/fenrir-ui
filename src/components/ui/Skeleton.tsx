interface SkeletonProps {
    width?: string;
    height?: string;
    className?: string;
    rounded?: "sm" | "md" | "lg" | "full" | "xl";
}

export default function Skeleton({
    width,
    height,
    className = "",
    rounded = "md",
}: SkeletonProps) {
    const roundedClass = {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
        xl: "rounded-xl",
    }[rounded];

    return (
        <div
            className={`animate-pulse bg-border/50 ${roundedClass} ${className}`}
            style={{ width, height }}
            aria-hidden="true"
        />
    );
}
