
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum | TSV 1864 Grafing",
  description: "Impressum des TSV Grafing von 1864 e.V.",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-36">
        <section className="mx-auto max-w-4xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD100]">
            Rechtliche Informationen
          </p>

          <h1 className="mb-10 text-5xl uppercase text-[#FFD100] md:text-6xl">
            Impressum
          </h1>

          <div className="space-y-10 rounded-2xl border border-white/10 bg-[#171717] p-8 md:p-12">
            <div>
              <h2 className="mb-4 text-3xl text-white">
                Vereinsangaben
              </h2>
              <p className="leading-8 text-[#A1A1AA]">
                TSV Grafing von 1864 e.V.
                <br />
                Am Stadion 4
                <br />
                85567 Grafing
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl text-white">
                Vereinsregister
              </h2>
              <p className="leading-8 text-[#A1A1AA]">
                Registergericht: Amtsgericht München
                <br />
                Registernummer: VR 30008
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl text-white">
                Vertretungsberechtigte
              </h2>
              <p className="leading-8 text-[#A1A1AA]">
                Anna Hopfes – 1. Vorstand
                <br />
                Anton Wörndl – 2. Vorstand
                <br />
                Carmen Remplewski – 3. Vorstand
                <br />
                Alexandra Daser – Schatzmeister
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl text-white">
                Kontakt
              </h2>

              <p className="leading-8 text-[#A1A1AA]">
                Telefon:{" "}
                <a
                  href="tel:+49809232331"
                  className="hover:text-[#FFD100]"
                >
                  08092 / 32331
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:tsv-grafing@online.de"
                  className="hover:text-[#FFD100]"
                >
                  tsv-grafing@online.de
                </a>
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl text-white">
                Urheberrecht
              </h2>
              <p className="leading-7 text-[#A1A1AA]">
                Die Inhalte und Werke dieser Website
                unterliegen dem deutschen Urheberrecht.
                Eine Verwendung außerhalb der gesetzlichen
                Schranken bedarf der Zustimmung der
                jeweiligen Rechteinhaber.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl text-white">
                Externe Links
              </h2>
              <p className="leading-7 text-[#A1A1AA]">
                Diese Website enthält Verlinkungen zu
                externen Angeboten der Sportabteilungen.
                Für deren Inhalte sind die jeweiligen
                Betreiber verantwortlich. Hinweise auf
                rechtswidrige Inhalte nehmen wir
                gerne entgegen.
              </p>
            </div>
          </div>

          <a
            href="/"
            className="mt-10 inline-flex items-center gap-2 font-semibold text-[#FFD100] hover:text-[#FFE04A]"
          >
            ← Zurück zur Startseite
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
