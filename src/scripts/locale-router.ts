import { countryStorageKey, isLocale, languageStorageKey, localeForBrowserLanguage, localeForCountry, localePath } from '../lib/locale';

const controller = new AbortController();
let manuallySelected = false;

document.querySelectorAll<HTMLAnchorElement>('[data-language-choice]').forEach(link => {
  link.addEventListener('click', () => {
    const locale = link.dataset.languageChoice;
    if (!isLocale(locale)) return;
    manuallySelected = true;
    controller.abort();
    link.hash = window.location.hash;
    try { localStorage.setItem(languageStorageKey, locale); } catch { /* Links still work when storage is blocked. */ }
  });
});

async function routeFirstVisit() {
  // Locale URLs are explicit choices: no redirects or geolocation there.
  if (!document.documentElement.hasAttribute('data-auto-locale')) return;
  const redirect = (locale: 'ru' | 'en') => {
    if (!manuallySelected) window.location.replace(`${localePath(locale)}${window.location.search}${window.location.hash}`);
  };
  try {
    const preference = localStorage.getItem(languageStorageKey);
    if (isLocale(preference)) { redirect(preference); return; }
  } catch { /* Fall back to country or browser preference. */ }
  try {
    const cached = localeForCountry(sessionStorage.getItem(countryStorageKey));
    if (cached) { redirect(cached); return; }
  } catch { /* Session storage is optional. */ }

  // Only the entry route makes a single country-level request; no cookies or referrer.
  const timeout = window.setTimeout(() => controller.abort(), 1200);
  try {
    const response = await fetch('https://api.country.is/', {
      signal: controller.signal,
      credentials: 'omit',
      referrerPolicy: 'no-referrer',
    });
    if (!response.ok) throw new Error('Country lookup unavailable');
    const data: { country?: unknown } = await response.json();
    const locale = localeForCountry(data.country);
    if (!locale) throw new Error('Country lookup returned no country');
    try { sessionStorage.setItem(countryStorageKey, String(data.country).toUpperCase()); } catch { /* Optional cache. */ }
    redirect(locale);
  } catch {
    redirect(localeForBrowserLanguage(navigator.language));
  } finally {
    window.clearTimeout(timeout);
  }
}

void routeFirstVisit();
