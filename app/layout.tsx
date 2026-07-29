import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contábil Machado de Assis | Contabilidade Empresarial em Santo André",
  description:
    "Há mais de 40 anos, a Contábil Machado de Assis oferece assessoria contábil, fiscal, trabalhista e consultoria empresarial para empresas de todo o Brasil.",
  keywords: [
    "contabilidade em Santo André",
    "contabilidade empresarial",
    "assessoria contábil empresarial",
    "departamento fiscal",
    "departamento pessoal",
    "abertura de empresas",
    "reforma tributária para empresas",
    "consultoria contábil empresarial",
    "Contábil Machado de Assis",
  ],
  authors: [{ name: "Contábil Machado de Assis" }],
  icons: {
    icon: "/logo-contabil.png",
  },
  openGraph: {
    title: "Contábil Machado de Assis | Contabilidade Empresarial em Santo André",
    description:
      "Há mais de 40 anos, a Contábil Machado de Assis oferece assessoria contábil, fiscal, trabalhista e consultoria empresarial para empresas de todo o Brasil.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
