import './globals.css';

export const metadata = {
  title: 'a little blue birthday — for Ayyaww',
  description: 'A small interactive 20th birthday journey made especially for Ayyaww, from Piraa.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
