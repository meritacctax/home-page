import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { IBM_Plex_Sans_Thai } from 'next/font/google';
import './globals.css';
import { I18nProvider } from '@/lib/i18n/context';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const ibmPlexThai = IBM_Plex_Sans_Thai({
  variable: '--font-ibm-plex-thai',
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.meritacctax.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  title: {
    default: 'เมอริท แอค แทกซ์ | รับทำบัญชี สมุทรปราการ',
    template: '%s | MERIT ACC TAX',
  },
  description:
    'สำนักงานบัญชีครบวงจร รับทำบัญชี วางระบบ ปิดงบ ตรวจสอบบัญชี ยื่นภาษี จดทะเบียนบริษัท ทีมงานมืออาชีพ ประสบการณ์กว่า 10 ปี ปรึกษาฟรี',
  keywords: [
    'รับทำบัญชี',
    'สำนักงานบัญชีบางพลี',
    'สำนักงานบัญชีสมุทรปราการ',
    'ปิดงบการเงิน',
    'ตรวจสอบบัญชี',
    'จดทะเบียนบริษัท',
    'ยื่นภาษี',
    'วางระบบบัญชี',
  ],
  authors: [{ name: 'MERIT ACC TAX' }],
  openGraph: {
    type: 'website',
    siteName: 'เมอริท แอค แทกซ์',
    title: 'เมอริท แอค แทกซ์ | บัญชี ภาษี ครบจบในที่เดียว',
    description:
      'รับทำบัญชี วางระบบ ปิดงบ ตรวจสอบบัญชี ยื่นภาษี จดทะเบียนบริษัท ทีมงานมืออาชีพ ประสบการณ์กว่า 10 ปี ปรึกษาฟรี',
    url: 'https://www.meritacctax.com',
    locale: 'th_TH',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'เมอริท แอค แทกซ์ | บัญชี ภาษี ครบจบในที่เดียว',
    description:
      'สำนักงานบัญชีครบวงจร ทีมงานมืออาชีพ ประสบการณ์กว่า 10 ปี ปรึกษาฟรี',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${inter.variable} ${ibmPlexThai.variable}`}>
      <head />
      <body
        className="min-h-screen"
        style={{
          fontFamily:
            'var(--font-ibm-plex-thai), var(--font-inter), sans-serif',
        }}
      >
        <I18nProvider>{children}</I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
