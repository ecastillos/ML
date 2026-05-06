import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ML Marketplace',
  description: 'Marketplace moderno para comprar y vender productos en línea.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
