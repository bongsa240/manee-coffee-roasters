import {routing} from '@/i18n/routing';
import {setRequestLocale} from 'next-intl/server';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}