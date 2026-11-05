
import Header from "@/components/Header";
import DepartmentCard from "@/components/DepartmentCard";
import Footer from "@/components/Footer";



const departments = [
  {
  name: "Hauptverein",
  image: "/images/tsv-wappen.jpg",
  href: "https://www.tsv-grafing-hauptverein.de/",
  },
  {
    name: "Fußball",
    image: "/images/abteilungen/fussball.jpg",
    href: "https://www.fussball-grafing.de",
  },
  {
    name: "Basketball",
    image: "/images/abteilungen/basketball.jpg",
    href: "https://www.basketball-grafing.de",
  },
  {
    name: "Handball",
    image: "/images/abteilungen/handball.jpg",
    href: "https://www.handball-grafing.de",
  },
  {
    name: "Fitness / Gymnastik",
    image: "/images/abteilungen/gymnastik.jpg",
    href: "https://tsvgrafing-gym.jimdofree.com",
  },
  {
    name: "Judo",
    image: "/images/abteilungen/judo.jpg",
    href: "https://www.judo-team-grafing.de",
  },
  {
    name: "Ju-Jutsu",
    image: "/images/abteilungen/jujutsu.jpg",
    href: "https://www.ju-jutsu-grafing.de",
  },
  {
    name: "Karate",
    image: "/images/abteilungen/karate.jpg",
    href: "https://karate-grafing.de",
  },
  {
    name: "Leichtathletik",
    image: "/images/abteilungen/leichtathletik.jpg",
    href: "https://www.lg90.de",
  },
  {
    name: "Movimento",
    image: "/images/abteilungen/movimento.jpg",
    href: "https://www.movimento-grafing.de",
  },
  {
    name: "Turnen",
    image: "/images/abteilungen/turnen.jpg",
    href: "https://www.turnen-grafing.de",
  },
  {
    name: "TSV Garde",
    image: "/images/abteilungen/garde.jpg",
    href: "https://www.tsv-grafing-hauptverein.de/TSV-Garde.htm",
  },
  {
    name: "Volleyball",
    image: "/images/abteilungen/volleyball.jpg",
    href: "https://www.volleyballgrafing.de",
  },
];



export default function Home() {
  return (
    <>
      <Header />

      <main id="start" className="min-h-screen pt-36">
        <section className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD100]">
            Tradition seit 1864
          </p>

          <h1 className="mb-6 text-5xl uppercase text-[#FFD100] md:text-7xl">
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
  <div className="mb-10">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD100]">
      Gemeinsam aktiv
    </p>

    <h2 className="mb-4 text-4xl uppercase text-white md:text-5xl">
      Unsere Abteilungen
    </h2>

    <p className="max-w-2xl text-[#A1A1AA]">
      Entdecke die sportliche Vielfalt des TSV 1864 Grafing.
      Wähle deine Sportart und erfahre mehr über unsere Angebote.
    </p>
  </div>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {departments.map((department) => (
      <DepartmentCard
        key={department.name}
        name={department.name}
        image={department.image}
        href={department.href}
        featured={department.name === "Hauptverein"}
      />
    ))}
  </div>
</section>


        
<section
  id="kontakt"
  className="mx-auto max-w-7xl scroll-mt-32 px-6 py-20"
>
  <div className="mb-10">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD100]">
      Wir sind für dich da
    </p>

    <h2 className="text-4xl uppercase text-white md:text-5xl">
      Kontakt
    </h2>
  </div>

  <div className="rounded-2xl border border-white/10 bg-[#171717] p-8 md:p-12">
    <h3 className="mb-6 text-3xl uppercase text-white">
      TSV Grafing von 1864 e.V.
    </h3>

    <div className="grid gap-8 md:grid-cols-3">
      <div>
        <p className="mb-2 font-semibold text-[#FFD100]">
          Geschäftsstelle
        </p>
        <p className="text-[#A1A1AA]">
          Am Stadion 4
          <br />
          85567 Grafing
        </p>
      </div>

      <div>
        <p className="mb-2 font-semibold text-[#FFD100]">
          Telefon
        </p>
        <a
          href="tel:+49809232331"
          className="text-[#A1A1AA] hover:text-white"
        >
          08092 / 32331
        </a>
      </div>

      <div>
        <p className="mb-2 font-semibold text-[#FFD100]">
          E-Mail
        </p>
        <a
          href="mailto:tsv-grafing@online.de"
          className="break-all text-[#A1A1AA] hover:text-white"
        >
          tsv-grafing@online.de
        </a>
      </div>
    </div>
  </div>
</section>

      </main>
      <Footer />
    </>
  );
}
