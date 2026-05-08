import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GlassPanel } from "./GlassPanel";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export interface Project {
  name: string;
  status: "active" | "in-progress";
  url: string | null;
  descKey: string;
  featured?: boolean;
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { t } = useLang();
  const isLink = !!project.url;

  const Inner = (
    <GlassPanel className="group relative h-full overflow-hidden p-6 transition-all duration-300 sm:p-8 hover:border-white/25 hover:bg-[oklch(0.13_0.02_280/0.55)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "inline-block h-1.5 w-1.5 rounded-full",
              project.status === "active"
                ? "bg-[oklch(0.85_0.16_150)]"
                : "bg-[oklch(0.8_0.12_80)]",
            )}
          />
          <span className="text-xs uppercase tracking-[0.18em] text-foreground/60">
            {project.status === "active"
              ? t("status.active")
              : t("status.inProgress")}
          </span>
        </div>
        {isLink && (
          <ArrowUpRight className="h-5 w-5 text-foreground/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        )}
      </div>

      <h3 className="mt-6 font-display text-3xl text-foreground sm:text-4xl">
        {project.name}
      </h3>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/75 sm:text-base">
        {t(project.descKey)}
      </p>

      {project.url && (
        <div className="mt-6 text-xs text-foreground/50">
          {project.url.replace(/^https?:\/\//, "")}
        </div>
      )}
    </GlassPanel>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {isLink ? (
        <a
          href={project.url!}
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-transform duration-300 hover:-translate-y-1"
        >
          {Inner}
        </a>
      ) : (
        <div className="block">{Inner}</div>
      )}
    </motion.div>
  );
}

export const PROJECTS: Project[] = [
  {
    name: "Vetted",
    status: "active",
    url: "https://usevetted.app/",
    descKey: "p.vetted.desc",
    featured: true,
  },
  {
    name: "felgen.app",
    status: "active",
    url: "https://felgen.app/",
    descKey: "p.felgen.desc",
  },
  {
    name: "verin.no",
    status: "active",
    url: "https://verin.no/",
    descKey: "p.verin.desc",
  },
  {
    name: "Regwatch",
    status: "in-progress",
    url: null,
    descKey: "p.regwatch.desc",
  },
  {
    name: "HelVed",
    status: "in-progress",
    url: null,
    descKey: "p.helved.desc",
  },
  {
    name: "GradPilot",
    status: "in-progress",
    url: null,
    descKey: "p.gradpilot.desc",
    featured: true,
  },
];
