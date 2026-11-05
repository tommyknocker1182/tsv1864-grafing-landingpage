
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main id="start" className="min-h-screen pt-36">
        <section className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD100]">
            Tradition seit 1864
          </p>

          <h1 className="mb-6 text-5xl uppercase text-white md:text-7xl">
            TSV 1864 Grafing
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-[#A1A1AA]">
            Ein Verein. Viele Sportarten.
            Gemeinsam Sport erleben.
          </p>
        </section>

        <section
          id="abteilungen"
          className="mx-auto max-w-7xl scroll-mt-32 px-6 py-20"
        >
          <h2 className="mb-6 text-4xl uppercase text-white">
            Unsere Abteilungen
          </h2>

          <p className="text-[#A1A1AA]">
            Entdecke die sportliche Vielfalt des TSV 1864 Grafing.
          </p>
        </section>

        <section
          id="kontakt"
          className="mx-auto max-w-7xl scroll-mt-32 px-6 py-20"
        >
          <h2 className="mb-6 text-4xl uppercase text-white">
            Kontakt
          </h2>
        </section>
      </main>
    </>
  );
}
