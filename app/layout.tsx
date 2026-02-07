import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import BackgroundDecor from '@/components/ui/BackgroundDecor';

export const metadata: Metadata = {
  title: 'Karthik Mohan | Data Scientist & AI Engineer',
  description:
    'Portfolio of Karthik Mohan — Applied ML, Time-Series Analytics, and Automotive Reliability. Data Scientist and AI Engineer based in Bangalore, India.',
  openGraph: {
    title: 'Karthik Mohan | Data Scientist & AI Engineer',
    description:
      'Applied ML, Time-Series Analytics, and Automotive Reliability. Data Scientist and AI Engineer based in Bangalore, India.',
    type: 'website',
    locale: 'en_US',
    url: 'https://karthikmohan.dev',
  },
  metadataBase: new URL('https://karthikmohan.dev'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased relative">
        <BackgroundDecor />
        <Sidebar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
