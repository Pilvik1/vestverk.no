import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard, PROJECTS } from "@/components/ProjectCard";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Vestverk" },
      {
        name: "description",
        content: "Independent digital products built and operated by Vestverk.",
      },
      { property: "og:title", content: "Projects — Vestverk" },
      {
        property: "og:description",
        content: "Independent digital products built and operated by Vestverk.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="pt-12 sm:pt-16">
        <h1 className="font-display text-5xl text-foreground sm:text-6xl">
          {t("projects.title")}
        </h1>
        <p className="mt-4 max-w-xl text-base text-foreground/70">
          {t("projects.intro")}
        </p>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </section>
    </div>
  );
}
