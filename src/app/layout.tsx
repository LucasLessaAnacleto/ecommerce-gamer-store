import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "Gam3r.store",
  description: `Gamer Store: Sua loja online de eletrônicos gamers. 
  Encontre monitores, headsets, mouses, placas de vídeo e muito mais 
  para elevar sua experiência de jogo.`,
  icons: {
    icon: "/logo2.png"
  }
};

const font = Montserrat({
  subsets: [ 'latin' ]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
