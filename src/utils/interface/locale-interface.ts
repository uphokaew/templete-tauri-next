import type { Locale } from '@/libs/i18n/routing';

export interface LocaleInterface {
    locale: Locale;
    changeLocale: (newLocale: Locale) => void;
}
