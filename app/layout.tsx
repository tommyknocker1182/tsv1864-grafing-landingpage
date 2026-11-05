
import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "TSV 1864 Grafing | Sportverein",
  description:
    "Entdecke die Sportabteilungen des TSV Grafing von 1864 e.V. – Tradition, Gemeinschaft und Sport in Grafing bei München.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${bebas.variable}`}>
        {children}
      </body>
    </html>
  );
}
