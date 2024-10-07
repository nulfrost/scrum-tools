import { Links, Meta, Outlet, Scripts, Link } from "react-router";
import "#app/tailwind.css";

export default function App() {
  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header className="max-w-5xl mx-auto py-2">
          <Link to="/" className="font-semibold text-lg hover:underline">
            scrum.tools
          </Link>
        </header>
        <main className="max-w-5xl mx-auto">
          <Outlet />
          <Scripts />
        </main>
      </body>
    </html>
  );
}
