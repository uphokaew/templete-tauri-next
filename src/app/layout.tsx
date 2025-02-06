import '../styles/globals.css';
import type { Metadata } from 'next';
import { LocaleContextProvider } from '@/extensions/locale-provider/localeProvider';

export const metadata: Metadata = {
    title: 'name',
    description: 'name',
    icons: '/favicon.ico',
};

interface RootLayoutProps {
    readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <LocaleContextProvider>
            <html lang="th">
                <body className="m-0 antialiased">{children}</body>
            </html>
        </LocaleContextProvider>
    );
}
