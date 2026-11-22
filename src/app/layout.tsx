import type { Metadata } from "next";
import { Inter, Outfit, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matheus Costa de Jesus | Dados, Backend & Python",
  description: "Portfólio de Matheus Costa de Jesus — dados e backend com Python, SQL e PostgreSQL. Mais de 8 anos em operações industriais monitorando KPIs e investigando anomalias, com foco em ingestão de dados públicos, dashboards e APIs testadas.",
  keywords: ["Matheus Costa de Jesus", "Dados", "Backend", "Python", "SQL", "PostgreSQL", "FastAPI", "Angular", "Análise de KPIs", "Lauro de Freitas", "Bahia"],
  authors: [{ name: "Matheus Costa de Jesus" }],
  openGraph: {
    title: "Matheus Costa de Jesus | Dados, Backend & Python",
    description: "Soluções de dados e backend com Python, SQL e PostgreSQL — dados públicos, dashboards e APIs com testes automatizados.",
    type: "website",
    locale: "pt_BR",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${outfit.variable} ${firaCode.variable} dark antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen bg-[#030303] text-zinc-100 flex flex-col font-sans select-none selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
