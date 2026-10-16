import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isLocale, localeForCountry, localeForBrowserLanguage, localePath, russianCountries } from '../src/lib/locale.ts';

test('all configured Russian audience countries select Russian', () => {
  for (const country of russianCountries) assert.equal(localeForCountry(country), 'ru');
  assert.equal(localeForCountry(' kz '), 'ru');
});
test('other countries select English', () => {
  for (const country of ['US', 'GB', 'DE', 'FR', 'CN', 'JP', 'AE', 'LV']) assert.equal(localeForCountry(country), 'en');
});
test('invalid or unknown countries allow the browser fallback', () => {
  for (const country of [null, undefined, '', 'XX', 'ZZ', 42, 'USA']) assert.equal(localeForCountry(country), null);
});
test('browser fallback respects regional language settings', () => {
  for (const language of ['ru-RU', 'en-KZ', 'ro-MD', 'kk', 'ru']) assert.equal(localeForBrowserLanguage(language), 'ru');
  for (const language of ['en-US', 'de-DE', 'ru-US', 'en', 'not_a_locale', '']) assert.equal(localeForBrowserLanguage(language), 'en');
});
test('only supported saved preferences are accepted', () => {
  assert.equal(isLocale('ru'), true);
  assert.equal(isLocale('en'), true);
  for (const value of [null, 'RU', 'fr', '//evil.example']) assert.equal(isLocale(value), false);
  assert.equal(localePath('ru'), '/ru/');
  assert.equal(localePath('en'), '/en/');
});
