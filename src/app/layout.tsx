import './globals.css';
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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
