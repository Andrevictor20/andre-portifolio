import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "André Victor | Full Stack Developer & Blog Técnico",
    template: "%s | André Victor",
  },
  description:
    "Portfólio e blog técnico de André Victor Macedo Pereira. Estudante de Engenharia da Computação na UFMA, desenvolvedor Full Stack, entusiasta de Cloud Computing, DevOps e IoT.",
  keywords: [
    "André Victor",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "Java",
    "Spring Boot",
    "DevOps",
    "Cloud Computing",
    "IoT",
    "Blog Técnico",
  ],
  authors: [{ name: "André Victor Macedo Pereira" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "André Victor | Full Stack Developer",
    description:
      "Portfólio e blog técnico de André Victor Macedo Pereira — Full Stack, Cloud, DevOps & IoT.",
    siteName: "André Victor Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
