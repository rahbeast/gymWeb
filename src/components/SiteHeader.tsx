import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/calculator", label: "Calorie Calculator" },
  { to: "/fat-loss", label: "Fat Loss" },
  { to: "/muscle-gain", label: "Muscle Gain" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="GymGhar logo" width={36} height={36} className="h-9 w-9 object-contain" />
          <span className="font-display text-xl font-bold tracking-wider">
            GYM<span className="text-primary">GHAR</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
              activeProps={{ className: "px-3 py-2 text-sm text-primary font-semibold rounded-md" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24 py-10 text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} GymGhar — Built for Nepali warriors. Train hard, eat smart.</p>
    </footer>
  );
}
