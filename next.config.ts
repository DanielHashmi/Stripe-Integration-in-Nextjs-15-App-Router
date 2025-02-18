import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'es', 'fr'], // Supported languages
    defaultLocale: 'en', // Fallback language
  },
};
export default nextConfig;
