import { NextRequest, NextResponse } from 'next/server';
import { localeMiddleware } from './middlewares/locale';

type Middleware = (
    req: NextRequest,
) => Promise<NextResponse | undefined> | NextResponse | undefined;

function chainMiddlewares(...middlewares: Middleware[]) {
    return async (req: NextRequest): Promise<NextResponse | undefined> => {
        for (const middleware of middlewares) {
            const response = await middleware(req);
            if (response) return response;
        }
        return undefined;
    };
}

export default async function Middleware(req: NextRequest) {
    return (
        (await chainMiddlewares(localeMiddleware)(req)) ?? NextResponse.next()
    );
}

export const config = {
    matcher: ['/', '/(th|en)/:path*'],
};
