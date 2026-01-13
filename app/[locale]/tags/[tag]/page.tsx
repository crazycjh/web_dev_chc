import { Metadata } from 'next';
import { slug } from 'github-slugger';
import { allBlogs } from 'contentlayer/generated';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import { getTranslations } from 'next-intl/server';

import { ListLayout } from 'layouts';
import { Link } from '@/components/ui';
import tagData from 'app/tag-data.json';
import { genPageMetadata } from 'app/seo';
import siteMetadata from '@/data/siteMetadata';

export async function generateMetadata(props: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const params = await props.params;
  const tag = decodeURI(params.tag);

  return genPageMetadata({
    title: tag,
    description: `${siteMetadata.title} ${tag} tagged content`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  });
}

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>;

  const tagKeys = Object.keys(tagCounts);

  const paths = tagKeys.map((tag) => ({
    tag: encodeURI(tag),
  }));

  return paths;
};

export default async function TagPage(props: { params: Promise<{ tag: string }> }) {
  const params = await props.params;
  const tag = decodeURI(params.tag);
  const t = await getTranslations();

  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1);

  const filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
  );

  if (filteredPosts.length === 0) {
    return (
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center py-12">
          <div className="space-y-4 text-center">
            <p className="text-xl text-gray-600 dark:text-gray-400">📝 {t('tags.noArticles')}</p>
            <p className="text-gray-500 dark:text-gray-500">{t('tags.comingSoon')}</p>
            <div className="pt-4">
              <Link href="/blog" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                {t('tags.backToBlog')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <ListLayout posts={filteredPosts} title={title} />;
}
