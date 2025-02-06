import type { NextConfig } from 'next';

const createNextIntlPlugin = require('next-intl/plugin');
const isProd = process.env.NODE_ENV === 'production';
const internalHost = process.env.TAURI_DEV_HOST || 'localhost';

/** @type {import('next').NextConfig} */

const withNextIntl = createNextIntlPlugin('./libs/i18n/request.ts');

const nextConfig: NextConfig = {
	// output: 'export',
	distDir: '../.next',
	// Note: This feature is required to use the Next.js Image component in SSG mode.
	// See https://nextjs.org/docs/messages/export-image-api for different workarounds.
	images: {
		unoptimized: true,
	},
	// Configure assetPrefix or else the server won't properly resolve your assets.
	assetPrefix: isProd ? undefined : `http://${internalHost}:3000`,
};

// export default nextConfig;
module.exports = withNextIntl(nextConfig);
