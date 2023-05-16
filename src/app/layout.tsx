import "./globals.css";
import { Inter, Elsie_Swash_Caps, Montserrat } from "next/font/google";
import { ReactNode } from "react";
import clsx from "clsx";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
const elsie = Elsie_Swash_Caps({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "900"],
  variable: "--font-heading",
});

export const metadata = {
  title: "CasaVerde",
  description: "Sua casa com as melhores plantas!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body
        className={clsx([
          montserrat.variable,
          elsie.variable,
        ])}
      >
        {children}
      </body>
    </html>
  );
}
