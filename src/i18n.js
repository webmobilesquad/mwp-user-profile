import Polyglot from 'node-polyglot';

const messages = {
  en: {
    profile: 'Profile',
    logout: 'Logout',
  },
  fr: {
    profile: 'Profil',
    logout: 'Déconnexion',
  },
  de: {
    profile: 'Benutzerprofil',
    logout: 'Abschaltung',
  },
  es: {
    profile: 'Perfil',
    logout: 'Desconexión',
  },
  pt: {
    profile: 'Perfil',
    logout: 'Desconexão',
  },
  it: {
    profile: 'Profilo',
    logout: 'Esci',
  },
  ru: {
    profile: "Profil'",
    logout: 'Vykhod iz sistemy',
  },
};

export const i18n = (locale) => {
  let polyglotLocale = locale || 'en';
  if (polyglotLocale.includes('-')) {
    [polyglotLocale] = polyglotLocale.split('-');
  }
  const phrases = messages[polyglotLocale] || messages.en;
  return new Polyglot({ polyglotLocale, phrases });
};
