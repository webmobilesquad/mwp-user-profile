import { getLanguageFromLocale, i18n } from '../i18n';

describe('i18n', () => {
  test('getLanguageFromLocale should return the language part of a locale', () => {
    expect(getLanguageFromLocale('fr')).toBe('fr');
    expect(getLanguageFromLocale('fr-FR')).toBe('fr');
  });

  test('i18n should return a function', () => {
    expect(typeof i18n('fr')).toBe('function');
  });

  test('i18n returned function should return translation associated to given key', () => {
    expect(i18n('en')('profile')).toBe('Profile');
    expect(i18n('fr')('profile')).toBe('Profil');
    expect(i18n('fr-FR')('profile')).toBe('Profil');
  });

  test('i18n should fallback to "en" if no locale is given', () => {
    expect(i18n()('profile')).toBe('Profile');
  });

  test('i18n should fallback to "en" if locale does not exist', () => {
    expect(i18n('does-not-exist')('profile')).toBe('Profile');
  });
});
