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
  metadataBase: new URL("https://absoluteprm.ru"),
  title: "ABSOLUTE Studio — Профессиональная видеосъёмка в Перми",
  description:
    "Студия профессиональной видеосъёмки в Перми. Рекламные ролики, контент для соцсетей, монтаж видео.",
  keywords: [
    "видеосъёмка Пермь",
    "видеопродакшн",
    "рекламные ролики",
    "монтаж видео",
    "контент для соцсетей",
    "ABSOLUTE Studio",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://absoluteprm.ru",
    siteName: "ABSOLUTE Studio",
    title: "ABSOLUTE Studio — Профессиональная видеосъёмка в Перми",
    description:
      "Студия профессиональной видеосъёмки в Перми. Рекламные ролики, контент для соцсетей, монтаж видео.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ABSOLUTE Studio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://absoluteprm.ru",
    languages: {
      "ru": "https://absoluteprm.ru",
      "en": "https://absoluteprm.ru/en",
      "zh": "https://absoluteprm.ru/zh",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#012924" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
