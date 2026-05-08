import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { BackgroundShaders } from "../../bg/components/ui/background-shaders";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass-panel max-w-md p-10 text-center">
        <h1 className="font-display text-6xl text-foreground">404</h1>
        <p className="mt-3 text-sm text-foreground/70">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-foreground transition-colors hover:bg-white/10"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass-panel max-w-md p-10 text-center">
        <h1 className="font-display text-2xl text-foreground">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-foreground/70">
          Try refreshing or head back home.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-foreground hover:bg-white/15"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-foreground hover:bg-white/10"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Vestverk — Independent digital builder studio" },
        {
          name: "description",
          content:
            "Vestverk is a small builder studio in Norway creating and publishing independent digital products.",
        },
        {
          property: "og:title",
          content: "Vestverk — Independent digital builder studio",
        },
        {
          property: "og:description",
          content: "Building focused digital ventures from Norway.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Vestverk — Independent digital builder studio",
        },
        {
          name: "twitter:description",
          content: "Building focused digital ventures from Norway.",
        },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@300;400;500;600&display=swap",
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <BackgroundShaders>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-24">
              <Outlet />
            </main>
            <Footer />
          </div>
        </BackgroundShaders>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
