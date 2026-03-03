import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "Something went wrong";
  let message = "An unexpected error occurred.";
  let status = "";

  if (isRouteErrorResponse(error)) {
    status = `${error.status}`;
    title = error.status === 404 ? "Page Not Found" : error.statusText;
    message =
      error.status === 404
        ? "The page you're looking for doesn't exist."
        : error.data || message;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md animate-fade-in">
        <h1 className="text-6xl font-bold text-accent mb-4">
          {status || "Error"}
        </h1>

        <h2 className="text-2xl font-semibold text-text-primary mb-3">
          {title}
        </h2>

        <p className="text-text-secondary mb-6">{message}</p>

        <Link
          to="/dashboard"
          className="inline-flex items-center px-5 py-2.5 bg-accent text-white rounded-lg text-sm font-medium hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          Go back to Dashboard
        </Link>
      </div>
    </div>
  );
}
