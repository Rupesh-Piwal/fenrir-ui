import { Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Button from "./ui/Button";

function AppLayout() {
  const { toggleTheme } = useTheme();
  return (
    <>
      <h1>Header</h1>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      <Outlet />
    </>
  );
}

export default AppLayout;
