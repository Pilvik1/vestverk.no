import { createFileRoute } from "@tanstack/react-router";
import { GlassPanel } from "@/components/GlassPanel";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vestverk" },
      { name: "description", content: "Get in touch with Vestverk by email." },
      { property: "og:title", content: "Contact — Vestverk" },
      { property: "og:description", content: "Get in touch with Vestverk by email." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-3xl px-4 pt-12 sm:px-6 sm:pt-16">
      <GlassPanel className="p-8 sm:p-12">
        <h1 className="font-display text-5xl text-foreground sm:text-6xl">
          {t("contact.title")}
        </h1>
        <p className="mt-6 text-base text-foreground/70">{t("contact.body")}</p>
        <a
          href="mailto:hakon@vestverk.no"
          className="mt-8 inline-block font-display text-3xl text-foreground transition-opacity hover:opacity-80 sm:text-4xl"
        >
          hakon@vestverk.no
        </a>
      </GlassPanel>
    </div>
  );
}
