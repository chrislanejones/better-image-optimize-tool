import { Outlet } from "@remix-run/react";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Common layout elements could go here */}
      <div className="flex-grow">
        <Outlet />
      </div>
      <footer className="flex flex-col items-center justify-center text-sm text-slate-500 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} Image Optimizer. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
