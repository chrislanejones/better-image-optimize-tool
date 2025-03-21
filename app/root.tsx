import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import styles from "./styles/app.css";
import { Button } from "~/components/ui/Button";

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// Error boundary for React Router 7 compatibility
export function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  // Handle specific types of route errors
  if (isRouteErrorResponse(error)) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
          <title>Error {error.status}</title>
        </head>
        <body>
          <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              {error.status} {error.statusText}
            </h1>
            <p className="text-slate-600 mb-6">
              {error.data.message || "Something went wrong"}
            </p>
            <Button onClick={() => navigate("/")} variant="primary">
              Return to Home
            </Button>
          </div>
          <Scripts />
        </body>
      </html>
    );
  }

  // For other errors
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>Error</title>
      </head>
      <body>
        <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Unexpected Error
          </h1>
          <p className="text-slate-600 mb-6">
            An unexpected error occurred. Please try again later.
          </p>
          <pre className="bg-slate-100 p-4 rounded text-sm overflow-auto max-h-48 mb-4">
            {error instanceof Error ? error.message : "Unknown error occurred"}
          </pre>
          <Button onClick={() => navigate("/")} variant="primary">
            Return to Home
          </Button>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
