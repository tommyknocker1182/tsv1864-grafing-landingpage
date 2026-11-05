
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto flex w-[97%] max-w-[1700px] items-center justify-between rounded-2xl border px-4 transition-all duration-300 xl:px-6 ${
          scrolled
            ? "border-white/10 bg-black/85 shadow-2xl backdrop-blur-xl"
            : "border-white/10 bg-black/65 shadow-xl backdrop-blur-lg"
        }`}
      >
        <a
          href="/"
          className="flex shrink-0 items-center gap-3 py-2"
        >
          <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5">
            <Image
              src="/images/tsv-wappen.jpg"
              alt="Wappen TSV 1864 Grafing"
              width={56}
              height={56}
              priority
              unoptimized
              className="h-[56px] w-[56px] object-contain"
            />
          </div>

          <div className="hidden leading-none sm:block">
            <p className="logo-title whitespace-nowrap text-2xl text-[#FFD100] 2xl:text-3xl">
              TSV 1864 Grafing
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.38em] text-[#FFD100]">
              Sportverein
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#start"
            className="text-sm font-semibold text-white transition-colors hover:text-[#FFD100]"
          >
            Startseite
          </a>
          <a
            href="#abteilungen"
            className="text-sm font-semibold text-white transition-colors hover:text-[#FFD100]"
          >
            Abteilungen
          </a>
          <a
            href="#kontakt"
            className="text-sm font-semibold text-white transition-colors hover:text-[#FFD100]"
          >
            Kontakt
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          className="rounded-lg p-3 text-[#FFD100] md:hidden"
        >
          <span className="text-2xl">
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <nav className="mx-auto mt-2 flex w-[97%] flex-col gap-4 rounded-2xl border border-white/10 bg-[#171717] p-5 shadow-xl md:hidden">
          {[
            { label: "Startseite", href: "#start" },
            { label: "Abteilungen", href: "#abteilungen" },
            { label: "Kontakt", href: "#kontakt" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-white hover:text-[#FFD100]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
