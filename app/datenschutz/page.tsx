
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutz | TSV 1864 Grafing",
  description: "Datenschutzhinweise des TSV Grafing von 1864 e.V.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-36">
        <section className="mx-auto max-w-4xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD100]">
            Rechtliche Informationen
          </p>

          <h1 className="mb-10 text-5xl uppercase text-[#FFD100] md:text-6xl">
            Datenschutz
          </h1>

          <div className="space-y-10 rounded-2xl border border-white/10 bg-[#171717] p-8 md:p-12">

            <div>
              <h2 className="mb-4 text-3xl text-white">
                1. Verantwortlicher
              </h2>
              <p className="leading-8 text-[#A1A1AA]">
                TSV Grafing von 1864 e.V.
                <br />
                Am Stadion 4
                <br />
                85567 Grafing
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
                2. Hosting und Serverprotokolle
              </h2>
              <p className="leading-7 text-[#A1A1AA]">
                Beim Aufruf dieser Website werden technisch
                erforderliche Verbindungsdaten durch den
                Hostinganbieter verarbeitet. Hierzu können
                insbesondere IP-Adresse, Zeitpunkt des Zugriffs,
                angeforderte Dateien und Informationen zum
                verwendeten Browser gehören.
              </p>
              <p className="mt-4 leading-7 text-[#A1A1AA]">
                Die Verarbeitung erfolgt zur Bereitstellung,
                Stabilität und Sicherheit der Website auf
                Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                Einzelheiten zur Speicherung und Löschung
                der Serverprotokolle werden nach Prüfung
                der Hostingkonfiguration ergänzt.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl text-white">
                3. Cookies und Analyse
              </h2>
              <p className="leading-7 text-[#A1A1AA]">
                Diese Website verwendet nach der vorgesehenen
                technischen Konfiguration keine Analyse- oder
                Trackingdienste und keinen Besucherzähler.
                Es werden keine Cookies für Werbung oder
                Nutzungsanalysen eingesetzt.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl text-white">
                4. Schriftarten und Bilder
              </h2>
              <p className="leading-7 text-[#A1A1AA]">
                Die auf dieser Website verwendeten Schriftarten
                und Bilder werden lokal bereitgestellt.
                Beim Anzeigen dieser Inhalte wird deshalb
                keine Verbindung zu externen Schrift- oder
                Bilddiensten benötigt.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl text-white">
                5. Externe Links
              </h2>
              <p className="leading-7 text-[#A1A1AA]">
                Diese Website enthält Links zu den eigenständigen
                Internetangeboten der Sportabteilungen.
                Beim Aufruf dieser Links gelten die
                Datenschutzinformationen der jeweiligen
                Websitebetreiber.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl text-white">
                6. Ihre Rechte
              </h2>
              <p className="leading-7 text-[#A1A1AA]">
                Betroffene Personen haben nach Maßgabe der
                gesetzlichen Voraussetzungen insbesondere
                Rechte auf Auskunft, Berichtigung, Löschung,
                Einschränkung der Verarbeitung, Datenübertragbarkeit
                und Widerspruch. Zudem besteht das Recht,
                sich bei einer zuständigen Datenschutzaufsichtsbehörde
                zu beschweren.
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
