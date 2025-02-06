'use client';

import React, { createContext, useState, useEffect } from 'react';
import { LocaleInterface } from '@/utils/interface/locale-interface';
import { useContextProvider } from '@/hooks/context/contextProvider';
import type { Locale } from '@/libs/i18n/routing';

interface LocaleProviderProps {
    readonly children: React.ReactNode;
}

const LocaleContext = createContext<LocaleInterface | undefined>(undefined);

export const [useLocale, LocaleProvider] = useContextProvider(LocaleContext);

export function LocaleContextProvider({ children }: LocaleProviderProps) {
    const [locale, setLocale] = useState<Locale>('th');

    const changeLocale = (newLocale: Locale) => {
        setLocale(newLocale);
    };

    const value: LocaleInterface = { locale, changeLocale };
    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);

    return <LocaleProvider value={value}>{children}</LocaleProvider>;
}

export function UpdateLocaleContext({
    children,
    lang,
}: LocaleProviderProps & { lang: Locale }) {
    const { changeLocale } = useLocale();

    useEffect(() => {
        changeLocale(lang);
        document.documentElement.lang = lang;
    }, [lang, changeLocale]);

    return <>{children}</>;
}
