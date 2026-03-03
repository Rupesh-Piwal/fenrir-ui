type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-md bg-accent text-white hover:bg-accent transition"
    >
      {children}
    </button>
  );
};

export default Button;
