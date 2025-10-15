const siteMetadata = {
  title: "ChunHao's Blog - Coding Journey",
  author: 'Chun Hao',
  fullName: 'Chun Hao Chen',
  headerTitle: "ChunHao's Blog",
  description:
    'Documenting and sharing knowledge, technical insights, and practical experiences in software development for mutual learning and growth.',
  language: 'en-us',
  theme: 'dark',
  siteUrl: 'https://blog.chczee.dpdns.org/',
  analyticsURL: '',
  siteRepo: 'https://github.com/crazycjh/web_dev_chc',
  siteLogo: '/static/images/avatar.jpg',
  image: '/static/images/avatar.jpg',
  socialBanner: '',
  email: 'chchen.zee@gmail.com',
  github: 'https://github.com/crazycjh',
  facebook: 'https://www.facebook.com/jeanhao.chen',
  linkedin: 'https://www.linkedin.com/in/chchen-dev',
  twitter: '',
  youtube: '',
  locale: 'en-US',
  stickyNav: false,
  socialAccounts: {
    github: 'crazycjh',
    linkedin: 'chchen-dev',
    facebook: 'jeanhao.chen',
  },
  /*
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.UMAMI_WEBSITE_ID,
    },
  },
  */
  /*
  newsletter: {
    provider: 'buttondown',
  },
  */
  /*
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
      inputPosition: 'bottom',
    },
  },
  */
  search: {
    provider: 'kbar',
    kbarConfig: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
};

module.exports = siteMetadata;
