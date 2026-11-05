
import Image from "next/image";

interface DepartmentCardProps {
  name: string;
  image: string;
  href: string;
  featured?: boolean;
}

export default function DepartmentCard({
  name,
  image,
  href,
  featured = false,
}: DepartmentCardProps) {
  
if (featured) {
  return (
    <a
      href={href}
      className="group relative col-span-1 flex min-h-[280px] flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border border-[#FFD100]/30 bg-[#171717] p-8 shadow-xl transition-all duration-300 hover:border-[#FFD100] hover:shadow-2xl sm:col-span-2 sm:flex-row lg:col-span-3"
    >
      <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-2xl bg-white p-4 shadow-xl sm:h-44 sm:w-44">
        <Image
          src="/images/tsv-wappen.jpg"
          alt="Wappen des TSV 1864 Grafing"
          width={160}
          height={160}
          unoptimized
          className="h-full w-full object-contain"
        />
      </div>

      <div className="text-center sm:text-left">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#FFD100]">
          Tradition seit 1864
        </p>

        <h3 className="mb-3 text-4xl uppercase text-[#FFD100] md:text-6xl">
           TSV 1864 Grafing
        </h3>

        <p className="max-w-xl text-base text-[#A1A1AA] md:text-lg">
          Ein Verein. Viele Sportarten. Eine Gemeinschaft.
        </p>

        <div className="mt-6 inline-flex items-center gap-3 font-semibold text-[#FFD100] transition-all group-hover:gap-5">
          Mehr über den Hauptverein
          <span aria-hidden="true">→</span>
        </div>
      </div>
    </a>
  );
}

    return (
    <a
      href={href}
      className={`group relative block overflow-hidden rounded-2xl border border-white/10 bg-[#171717] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD100]/60 hover:shadow-2xl ${
  featured
    ? "h-[280px] sm:col-span-2 lg:col-span-3 sm:h-[320px]"
    : "h-[260px] sm:h-[300px]"
}`}
>
      <Image
        src={image}
        alt={`Sportabteilung ${name}`}
        fill
        unoptimized
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#FFD100]">
            TSV 1864 Grafing
          </p>

          <h3 className="text-3xl uppercase text-white sm:text-4xl">
            {name}
          </h3>
        </div>

        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#FFD100]/50 bg-[#FFD100] text-xl font-bold text-black transition-transform group-hover:translate-x-1"
        >
          ↗
        </span>
      </div>
    </a>
  );
}
