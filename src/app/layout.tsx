import './globals.css';
import '../styles/global.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'CZARD - The Crypto Wizard',
  description: 'Master of DeFi sorcery, protecting HODLers with ancient trading magic',
  icons: {
    icon: '/public/icon.png', // Path to your icon file
    apple: '/public/apple-icon.png', // Path to your apple touch icon file
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=MedievalSharp&family=Mystery+Quest&display=swap" rel="stylesheet"/>

        <link rel="icon" href="/images/favicon.ico" sizes="any"/>
        <link rel="icon" type="image/png" href="/favicon_32x32.png" sizes="32x32"/>
        <link rel="apple-touch-icon" href="/favicon_192x192.png"/>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
