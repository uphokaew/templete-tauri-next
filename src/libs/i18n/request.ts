import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import type { Locale } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as Locale)) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../../contents/${locale}.json`)).default,
    };
});
