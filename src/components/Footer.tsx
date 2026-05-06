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
          <span className="text-foreground/50">© {year} — {t("footer.rights")}</span>
        </div>
      </GlassPanel>
    </footer>
  );
}
