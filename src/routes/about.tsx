import { createFileRoute } from "@tanstack/react-router";
import { GlassPanel } from "@/components/GlassPanel";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vestverk" },
      {
        name: "description",
        content:
          "Vestverk is a small builder studio based in Norway, creating focused digital products with long-term intent.",
      },
      { property: "og:title", content: "About — Vestverk" },
      {
        property: "og:description",
        content: "A small Norwegian builder studio with long-term intent.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-3xl px-4 pt-12 sm:px-6 sm:pt-16">
      <GlassPanel className="p-8 sm:p-12">
        <h1 className="font-display text-5xl text-foreground sm:text-6xl">
          {t("about.title")}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-foreground/80">
          {t("about.body")}
        </p>
      </GlassPanel>
    </div>
  );
}
