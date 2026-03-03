import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import SignupLoginForm from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./components/AppLayout";
import { Navigate } from "react-router-dom";
import ScanDashboard from "./pages/ScanDashboard";
import ErrorPage from "./pages/ErrorPage";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "scans",
        element: <ScanDashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignupLoginForm />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </ThemeProvider>
  </StrictMode>,
);
