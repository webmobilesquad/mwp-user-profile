import i18next from 'i18next';
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

const messages = {
  en: {
    translation: {
      profile: 'Profile',
      logout: 'Logout',
    },
  },
  fr: {
    translation: {
      profile: 'Profil',
      logout: 'Déconnexion',
    },
  },
  de: {
    translation: {
      profile: 'Benutzerprofil',
      logout: 'Abschaltung',
    },
  },
  es: {
    translation: {
      profile: 'Perfil',
      logout: 'Desconexión',
    },
  },
  pt: {
    translation: {
      profile: 'Perfil',
      logout: 'Desconexão',
    },
  },
  it: {
    translation: {
      profile: 'Profilo',
      logout: 'Esci',
    },
  },
  ru: {
    translation: {
      profile: 'Профиль',
      logout: 'Выйти из системы',
    },
  },
};

export const init = () => (
  i18next
    .use(i18nextBrowserLanguageDetector)
    .init(
      {
        fallbackLng: 'en',
        resources: messages,
      },
      (err) => {
        if (err) {
          console.log('i18n init error'); // eslint-disable-line no-console
        }
      },
    )
);
