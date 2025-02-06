import type { Locale } from '@/libs/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { UpdateLocaleContext } from '@/extensions/locale-provider/localeProvider';
import { routing, redirect } from '@/libs/i18n/routing';
import { ROUTING } from '@/utils/constrants/route';

interface RootLayoutProps {
    readonly children: React.ReactNode;
    params: Promise<{ locale: Locale }>;
}

export default async function RootLayout({
    children,
    params,
}: RootLayoutProps) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as never))
        redirect({
            href: `${ROUTING.PAGES_NOT_FOUND}`,
            locale: `${locale}`,
        });

    const messages = await getMessages();

    return (
        <UpdateLocaleContext lang={locale}>
            <NextIntlClientProvider locale={locale} messages={messages}>
                {children}
            </NextIntlClientProvider>
        </UpdateLocaleContext>
    );
}
