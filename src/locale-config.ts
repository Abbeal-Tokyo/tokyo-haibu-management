export const locales = ["en"] as const;

export type Locale = (typeof locales)[number];
