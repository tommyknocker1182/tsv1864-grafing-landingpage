
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="logo-title text-2xl text-[#FFD100] md:text-3xl">
            TSV 1864 Grafing
          </p>
          <p className="mt-1 text-sm text-[#A1A1AA]">
            Tradition seit 1864
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
            href="/impressum"
            className="text-[#A1A1AA] transition-colors hover:text-[#FFD100]"
          >
            Impressum
          </a>

          <a
            href="/datenschutz"
            className="text-[#A1A1AA] transition-colors hover:text-[#FFD100]"
          >
            Datenschutz
          </a>
        </div>

        <p className="text-center text-sm text-[#A1A1AA]">
          © 2026 TSV Grafing von 1864 e.V.
        </p>
      </div>
    </footer>
  );
}
