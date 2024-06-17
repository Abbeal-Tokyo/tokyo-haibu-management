import createMiddleware from "next-intl/middleware";
import { locales } from "./locale-config";

export default createMiddleware({
  defaultLocale: "en",
  locales,
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(fr|en)/:path*",

    // Enable redirects that add missing locales
    // except for static files and API routes
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|api|.*\\..*).*)",
  ],
};
