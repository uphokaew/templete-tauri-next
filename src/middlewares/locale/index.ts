import createMiddleware from 'next-intl/middleware';
import { routing } from '@/libs/i18n/routing';

export const localeMiddleware = createMiddleware(routing);
