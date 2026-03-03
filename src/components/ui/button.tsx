type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition"
    >
      {children}
    </button>
  );
};

export default Button;
