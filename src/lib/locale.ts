export type Locale = 'ru' | 'en';

/** Audience routing policy, editable independently of translations. */
export const russianCountries = new Set(['RU', 'BY', 'KZ', 'KG', 'TJ', 'UZ', 'AM', 'AZ', 'MD', 'TM']);
export const languageStorageKey = 'portfolio-language';
export const countryStorageKey = 'portfolio-country';

export function isLocale(value: unknown): value is Locale {
  return value === 'ru' || value === 'en';
}

export function localeForCountry(value: unknown): Locale | null {
  if (typeof value !== 'string') return null;
  const country = value.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(country) || ['XX', 'ZZ'].includes(country)) return null;
  return russianCountries.has(country) ? 'ru' : 'en';
}

export function localeForBrowserLanguage(language: string): Locale {
  try {
    const locale = new Intl.Locale(language);
    if (locale.region) return localeForCountry(locale.region) ?? 'en';
    return ['ru', 'be', 'kk', 'ky', 'tg', 'uz', 'hy', 'az', 'tk'].includes(locale.language) ? 'ru' : 'en';
  } catch {
    return 'en';
  }
}

export function localePath(locale: Locale): string {
  return `/${locale}/`;
}
