import { genPageMetadata } from 'app/seo';
import { Authors, allAuthors } from 'contentlayer/generated';
import { coreContent } from 'pliny/utils/contentlayer';
import { MDXLayoutRenderer } from 'pliny/mdx-components';

import AuthorLayout from '@/layouts/AuthorLayout';

export const metadata = genPageMetadata({ title: 'About' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const author = allAuthors.find((p) => p.slug === `default.${locale}`) as Authors;
  const mainContent = coreContent(author);

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  );
}
