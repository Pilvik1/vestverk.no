import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GlassPanel } from "@/components/GlassPanel";
import { ProjectCard, PROJECTS } from "@/components/ProjectCard";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vestverk — Building focused digital ventures" },
      {
        name: "description",
        content:
          "Vestverk creates and publishes independent digital products. A small builder studio based in Norway.",
      },
      { property: "og:title", content: "Vestverk — Building focused digital ventures" },
      {
        property: "og:description",
        content: "Independent digital products from a small Norwegian builder studio.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useLang();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero */}
      <section className="pt-12 sm:pt-20">
        <GlassPanel className="relative overflow-hidden p-8 sm:p-14">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.85_0.16_150)]" />
                Vestverk — Norway
              </div>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl md:text-7xl">
                {t("hero.headline")}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-end md:col-span-4"
            >
              <p className="text-base leading-relaxed text-foreground/75 sm:text-lg">
                {t("hero.support")}
              </p>
              <a
                href="#projects"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {t("hero.scroll")}
                <ArrowDown className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </GlassPanel>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-20 sm:mt-28">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            {t("projects.title")}
          </h2>
          <Link
            to="/projects"
            className="text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            {t("nav.projects")} →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-6">
          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              className={p.featured ? "md:col-span-4" : "md:col-span-2"}
            >
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
