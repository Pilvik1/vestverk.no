import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "no";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.projects": "Projects",
  "nav.about": "About",
  "nav.contact": "Contact",

  "hero.headline": "Building focused digital ventures.",
  "hero.support": "Vestverk creates and publishes independent digital products.",
  "hero.scroll": "Scroll to projects",

  "projects.title": "Projects",
  "projects.intro": "A small set of independent digital products, built and operated in-house.",

  "status.active": "Active",
  "status.inProgress": "In progress",

  "p.vetted.desc":
    "An operating system for solo GPs. Manage deal flow, portfolios, and reporting in one clean workspace.",
  "p.felgen.desc":
    "AI-powered car inspection for used car buyers. Identify known issues and risk areas before you buy.",
  "p.verin.desc":
    "Fast, confidential analysis of Norwegian employment contracts. Detect deviations from standard practice.",
  "p.regwatch.desc":
    "Early warnings when Norwegian laws, regulations, or EU sanctions change. Simple alerts with direct source links.",
  "p.helved.desc":
    "Intelligent company research for Norway. Understand suppliers, customers, and counterparties beyond traditional credit checks.",
  "p.gradpilot.desc": "Graduate job applications streamlined.",

  "about.title": "About",
  "about.body":
    "Vestverk is a small builder studio based in Norway. We create focused digital products with long-term intent.",

  "contact.title": "Contact",
  "contact.body":
    "Open to thoughtful collaborations on focused digital products, automation, and technical systems.",

  "footer.rights": "All rights reserved.",
  "visit": "Visit",
};

const no: Dict = {
  "nav.projects": "Prosjekter",
  "nav.about": "Om",
  "nav.contact": "Kontakt",

  "hero.headline": "Bygger fokuserte digitale satsinger.",
  "hero.support": "Vestverk lager og publiserer selvstendige digitale produkter.",
  "hero.scroll": "Bla til prosjekter",

  "projects.title": "Prosjekter",
  "projects.intro":
    "Et lite utvalg selvstendige digitale produkter, bygget og driftet internt.",

  "status.active": "Aktiv",
  "status.inProgress": "Under arbeid",

  "p.vetted.desc":
    "Et operativsystem for solo-GPs. Administrer deal flow, porteføljer og rapportering i ett rent arbeidsområde.",
  "p.felgen.desc":
    "AI-drevet bilinspeksjon for bruktbilkjøpere. Identifiser kjente problemer og risikoområder før du kjøper.",
  "p.verin.desc":
    "Rask, konfidensiell analyse av norske arbeidskontrakter. Oppdag avvik fra standard praksis.",
  "p.regwatch.desc":
    "Tidlige varsler når norske lover, forskrifter eller EU-sanksjoner endres. Enkle varsler med direkte kildelenker.",
  "p.helved.desc":
    "Intelligent selskapsanalyse for Norge. Forstå leverandører, kunder og motparter utover tradisjonelle kredittsjekker.",
  "p.gradpilot.desc": "Strømlinjeformede jobbsøknader for nyutdannede.",

  "about.title": "Om",
  "about.body":
    "Vestverk er et lite byggerstudio basert i Norge. Vi lager fokuserte digitale produkter med langsiktig intensjon.",

  "contact.title": "Kontakt",
  "contact.body":
    "Åpen for gjennomtenkte samarbeid om fokuserte digitale produkter, automatisering og tekniske systemer.",

  "footer.rights": "Alle rettigheter forbeholdt.",
  "visit": "Besøk",
};

const dicts: Record<Lang, Dict> = { en, no };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };
const LangCtx = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (k) => k });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("vestverk-lang") as Lang | null;
      if (saved === "en" || saved === "no") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("vestverk-lang", l); } catch {}
  };

  const t = (k: string) => dicts[lang][k] ?? dicts.en[k] ?? k;

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
