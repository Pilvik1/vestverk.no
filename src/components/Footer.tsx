import { Github, Linkedin } from "lucide-react";
import { GlassPanel } from "./GlassPanel";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="px-4 pb-6 pt-16 sm:px-6">
      <GlassPanel className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-4 text-sm text-foreground/70 sm:flex-row sm:items-center">
        <div className="font-display text-base text-foreground">Vestverk</div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a href="mailto:hakon@vestverk.no" className="hover:text-foreground">
            hakon@vestverk.no
          </a>
          <span className="text-foreground/50">
            © {year} — {t("footer.rights")}
          </span>
          <span className="flex items-center gap-3 pl-1">
            <a
              href="https://github.com/Pilvik1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-foreground/40 transition-colors hover:text-foreground/80"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/hakonpilvik/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-foreground/40 transition-colors hover:text-foreground/80"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </span>
        </div>
      </GlassPanel>
    </footer>
  );
}
