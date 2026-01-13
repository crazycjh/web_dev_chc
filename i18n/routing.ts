import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  // locales: ['en', 'zh-TW'], // 未來要啟用中文時取消註解
  locales: ['en'], // 暫時只使用英文

  // Used when no locale matches
  defaultLocale: 'en',

  // Prefix strategy for locale paths
  localePrefix: 'as-needed',
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
