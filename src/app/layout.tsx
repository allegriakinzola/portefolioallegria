import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"], // Charge uniquement les caractères nécessaires
  weight: ["400", "700"], // Charge les styles Regular (400) et Bold (700)
  variable: "--font-roboto", // Définit une variable CSS pour Tailwind
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Allegria Kinzola | Développeur Full Stack',
  description: "Portfolio d'Allegria Kinzola, développeur Full Stack passionné par la création d'expériences digitales uniques. Spécialisé en développement web, applications et design graphique.",
  keywords: 'allegria kinzola, développeur web, full stack, react, next.js, node.js, design graphique, développeur rdc, portfolio',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' }
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Allegria Kinzola | Développeur Full Stack',
    description: "Portfolio d'Allegria Kinzola, développeur Full Stack passionné par la création d'expériences digitales uniques. Spécialisé en développement web, applications et design graphique.",
    url: 'https://allegriakinzola.com',
    siteName: 'Portfolio Allegria Kinzola',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Allegria Kinzola - Développeur Full Stack'
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Allegria Kinzola | Développeur Full Stack',
    description: "Portfolio d'Allegria Kinzola, développeur Full Stack passionné par la création d'expériences digitales uniques.",
    images: ['/og-image.jpg'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${roboto.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable} font-poppins antialiased`}>
      {/* <Navbar /> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
