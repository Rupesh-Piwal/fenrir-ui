import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <h1 className="p-10 text-3xl">Tailwind v4 Theme Test</h1>
        <Link className="" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
