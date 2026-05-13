import { AppData } from '../types'

/**
 * Structural project list (URLs, icons, ids). Translated copy
 * (category, description, features) lives in `src/i18n/translations.ts`,
 * keyed by project id.
 */
export const projects: AppData[] = [
  {
    id: 'authmeister',
    name: 'Authmeister',
    image: '/media/authmeister_512x512.png',
    platforms: [
      { name: 'Android', icon: '/media/googleplay.svg', available: true },
      { name: 'iOS', icon: '/media/appstore.svg', available: true },
    ],
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.kopylovis.authmeister',
      appStore: 'https://apps.apple.com/app/id6742833866',
      ruStore: 'https://www.rustore.ru/catalog/app/com.kopylovis.authmeister',
    },
  },
  {
    id: 'sympee',
    name: 'Sympee',
    image: '/media/sympee_512x512.png',
    platforms: [
      { name: 'Android', icon: '/media/googleplay.svg', available: true },
      { name: 'iOS', icon: '/media/appstore.svg', available: true },
    ],
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=ru.sympee.mobile',
      appStore: 'https://apps.apple.com/app/id6742376781',
      ruStore: 'https://www.rustore.ru/catalog/app/ru.sympee.mobile',
      website: 'https://sympee.ru',
    },
  },
  {
    id: 'fastlaneRustore',
    name: 'upload_to_ru_store',
    image: '/media/fastlane-rustore.svg',
    platforms: [{ name: 'Ruby', icon: '', available: true }],
    links: {
      github: 'https://github.com/kopylovis/fastlane-upload-to-ru-store',
      rubygems: 'https://rubygems.org/gems/fastlane-plugin-upload_to_ru_store',
    },
  },
]

export const personalInfo = {
  handle: 'Monoroh',
  fullName: 'Ivan Kopylov',
  email: 'mnrhwow@gmail.com',
  github: 'https://github.com/kopylovis/',
  telegram: 'https://t.me/monoroh',
  location: 'Remote',
} as const
