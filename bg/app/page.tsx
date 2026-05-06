import { BackgroundShaders } from "../components/ui/background-shaders";

export default function Home() {
  return (
    <BackgroundShaders>
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-24 text-center sm:px-8">
        <p className="mb-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 shadow-2xl shadow-black/20 backdrop-blur-md">
          Fluid infrastructure for creative teams
        </p>

        <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
          Launch brighter product experiences with motion-native tools.
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/75 sm:text-xl">
          A premium SaaS canvas for teams building modern interfaces, animated
          brands, and expressive digital products without slowing down delivery.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-zinc-950 shadow-xl shadow-black/20 transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Start building
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-md border border-white/15 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-black"
          >
            View demo
          </a>
        </div>
      </section>
    </BackgroundShaders>
  );
}
