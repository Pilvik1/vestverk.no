import { Link } from "@tanstack/react-router";
import { GlassPanel } from "./GlassPanel";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Header() {
  const { lang, setLang, t } = useLang();

  const navLink =
    "text-sm text-foreground/70 transition-colors hover:text-foreground";
  const activeLink = "text-foreground";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <GlassPanel className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link
          to="/"
          className="font-display text-xl tracking-tight text-foreground"
        >
          Vestverk
        </Link>

        <nav className="hidden items-center gap-7 sm:flex">
          <Link
            to="/projects"
            className={navLink}
            activeProps={{ className: cn(navLink, activeLink) }}
          >
            {t("nav.projects")}
          </Link>
          <Link
            to="/contact"
            className={navLink}
            activeProps={{ className: cn(navLink, activeLink) }}
          >
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-0.5 text-xs">
          <button
            onClick={() => setLang("en")}
            className={cn(
              "rounded-full px-2.5 py-1 transition-colors",
              lang === "en"
                ? "bg-white/15 text-foreground"
                : "text-foreground/60 hover:text-foreground",
            )}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
          <button
            onClick={() => setLang("no")}
            className={cn(
              "rounded-full px-2.5 py-1 transition-colors",
              lang === "no"
                ? "bg-white/15 text-foreground"
                : "text-foreground/60 hover:text-foreground",
            )}
            aria-pressed={lang === "no"}
          >
            NO
          </button>
        </div>
      </GlassPanel>
    </header>
  );
}
