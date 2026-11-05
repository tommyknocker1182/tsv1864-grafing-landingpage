
import Header from "@/components/Header";
import DepartmentCard from "@/components/DepartmentCard";



const departments = [
  {
    name: "Fußball",
    image: "/images/abteilungen/fussball.jpg",
    href: "https://www.fussball-grafing.de",
  },
  {
    name: "Basketball",
    image: "/images/abteilungen/platzhalter.jpg",
    href: "https://www.basketball-grafing.de",
  },
  {
    name: "Handball",
    image: "/images/abteilungen/platzhalter.jpg",
    href: "https://www.handball-grafing.de",
  },
  {
    name: "Fitness / Gymnastik",
    image: "/images/abteilungen/platzhalter.jpg",
    href: "https://tsvgrafing-gym.jimdofree.com",
  },
  {
    name: "Judo",
    image: "/images/abteilungen/platzhalter.jpg",
    href: "https://www.judo-team-grafing.de",
  },
  {
    name: "Ju-Jutsu",
    image: "/images/abteilungen/platzhalter.jpg",
    href: "https://www.ju-jutsu-grafing.de",
  },
  {
    name: "Karate",
    image: "/images/abteilungen/platzhalter.jpg",
    href: "https://karate-grafing.de",
  },
  {
    name: "Leichtathletik",
    image: "/images/abteilungen/platzhalter.jpg",
    href: "https://www.lg90.de",
  },
  {
    name: "Movimento",
    image: "/images/abteilungen/platzhalter.jpg",
    href: "https://www.movimento-grafing.de",
  },
  {
    name: "Turnen",
    image: "/images/abteilungen/platzhalter.jpg",
    href: "https://www.turnen-grafing.de",
  },
  {
    name: "TSV Garde",
    image: "/images/abteilungen/platzhalter.jpg",
    href: "https://www.tsv-grafing-hauptverein.de",
  },
  {
    name: "Volleyball",
    image: "/images/abteilungen/platzhalter.jpg",
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
      />
    ))}
  </div>
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
