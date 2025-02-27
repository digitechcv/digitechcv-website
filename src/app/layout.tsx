import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleAnalytics from "./components/google-analytics/GoogleAnalytics";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Digitechcv | Lda",
  description: "DigiTech é uma empresa que presta serviços no ramo de Help Desk e Desenvolvimento de software através de consultoria, auditoria, formação, workshop e palestras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
