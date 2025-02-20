import './globals.css';
import '../styles/global.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'CZARD - The Crypto Wizard',
  description: 'Master of DeFi sorcery, protecting HODLers with ancient trading magic',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=MedievalSharp&family=Mystery+Quest&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
