type LogoProps = {
  textColor?: string;
};

const Logo = ({ textColor = "text-white" }: LogoProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
        <div className="h-3 w-3 rounded-full bg-surface" />
      </div>

      <span
        className={`text-2xl font-semibold tracking-tight mb-1 ${textColor}`}
      >
        aps
      </span>
    </div>
  );
};

export default Logo;
