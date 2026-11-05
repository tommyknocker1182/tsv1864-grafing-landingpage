
import Image from "next/image";

interface DepartmentCardProps {
  name: string;
  image: string;
  href: string;
}

export default function DepartmentCard({
  name,
  image,
  href,
}: DepartmentCardProps) {
  return (
    <a
      href={href}
      className="group relative block h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-[#171717] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD100]/60 hover:shadow-2xl sm:h-[300px]"
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
