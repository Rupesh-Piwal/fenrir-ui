import { Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function AppLayout() {
  const { toggleTheme } = useTheme();
  return (
    <>
      <h1>Header</h1>
      <button
        onClick={toggleTheme}
        className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
      >
        Toggle Theme
      </button>
      <Outlet />
    </>
  );
}

export default AppLayout;
