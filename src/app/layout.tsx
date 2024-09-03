import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Donovan Ho",
  description: "Donovan Ho Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.className} dark mx-72 my-16 min-h-screen items-center justify-start`}
    >
      <body>{children}</body>
    </html>
  );
}
