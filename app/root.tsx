import { useEffect } from "react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import styles from "~/styles/app.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  // Add any other stylesheets, fonts, etc. here
];

// This function runs on the server to get initial theme
export async function loader({ request }: LoaderFunctionArgs) {
  // You could read cookies here to determine initial theme
  // For now, we'll just return a default
  return { theme: "system" };
}

export default function App() {
  const { theme } = useLoaderData<typeof loader>();

  // Set up theme on initial page load
  useEffect(() => {
    // Check for stored theme preference
    const storedTheme = localStorage.getItem("theme") || theme;

    if (
      storedTheme === "dark" ||
      (storedTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
