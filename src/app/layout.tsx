/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import localFont from "next/font/local";
// import { Roboto } from "next/font/google";
import "./globals.css";

// const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300"] });
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: [
    {
      path: "./Roboto-Thin.ttf",
      weight: "100",
    },
    {
      path: "./Roboto-Regular.ttf",
      weight: "400",
    },
  ],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.variable}`}>{children}</body>
    </html>
  );
}
