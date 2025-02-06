import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['en', 'th'],

    defaultLocale: 'th',
});

export type Locale = 'en' | 'th';
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
