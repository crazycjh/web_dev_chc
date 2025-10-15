import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { SearchProvider, SearchConfig } from 'pliny/search';

import { routing } from '@/i18n/routing';
import siteMetadata from '@/data/siteMetadata';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { SectionContainer } from '@/components/ui';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SectionContainer>
        <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
          <Header />
          <main className="mb-auto mt-20">{children}</main>
          <Footer />
        </SearchProvider>
      </SectionContainer>
    </NextIntlClientProvider>
  );
}
