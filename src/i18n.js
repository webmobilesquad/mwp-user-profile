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

export function getLanguageFromLocale(locale) {
  const [language] = locale.split('-');
  return language;
}

export function i18n(locale = 'en') {
  const language = getLanguageFromLocale(locale);
  const languageMessages = messages[language] || messages.en;
  return key => languageMessages[key];
}
