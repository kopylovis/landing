/**
 * i18n — single source of truth for all translated copy.
 * Structural data (urls, ids, icons) stays in `src/data/projects.ts`.
 *
 * Conventions:
 *  - Keys are camelCase, namespaced by surface (nav, hero, apps, …).
 *  - Strings with inline markup are split into parts so each component
 *    composes them in JSX with the right elements.
 *  - Project copy is keyed by `projects.<id>` so the structural list and
 *    the translations stay in sync via the project id.
 */

interface NamedDetail { name: string; detail: string }
interface LabeledValue { label: string; value: string }
interface TitleBody { title: string; body: string }
interface ProseP { type: 'p'; text: string }
interface ProseH2 { type: 'h2'; text: string }
interface ProseH3 { type: 'h3'; text: string }
interface ProseUl { type: 'ul'; items: string[] }
type ProseBlockT = ProseP | ProseH2 | ProseH3 | ProseUl
interface LegalDoc { title: string; body: ProseBlockT[] }
interface ProjectCopyT { category: string; description: string; features: string[] }
interface HintLink { label: string; to: string; external: boolean }

export interface Translations {
  meta: { siteName: string; description: string; keywords: string }
  nav: { index: string; work: string; about: string; contact: string }
  controls: { toLight: string; toDark: string; switchLanguage: string }
  hero: {
    statusPrefix: string
    headline: { l1: string; l2Before: string; em: string; l3: string }
    lede: {
      intro: string
      name: string
      between1: string
      strong: string
      trailing: string
    }
    ctaWork: string
    ctaContact: string
  }
  apps: { eyebrowPrefix: string; title: string; subtitle: string }
  card: { viewCase: string; visitSite: string; viewSource: string }
  about: {
    eyebrow: string
    title: string
    lede: string
    principles: TitleBody[]
    stackEyebrow: string
    stackTitle: string
    stackSub: string
  }
  stack: NamedDetail[]
  footer: {
    eyebrow: string
    title: string
    titleBreak: string
    cta: string
    channels: { email: string; github: string; telegram: string }
    copyrightSuffix: string
    privacy: string
    terms: string
  }
  projects: Record<'authmeister' | 'sympee' | 'fastlaneRustore', ProjectCopyT>
  authmeisterPage: {
    back: string
    tagline: string
    specs: LabeledValue[]
    featuresEyebrow: string
    featuresTitle: string
    highlights: TitleBody[]
    finalTitle: string
    finalBody: string
    legalPrivacy: string
    legalTerms: string
  }
  legal: {
    backHome: string
    backAuthmeister: string
    section: string
    updated: string
    privacy: LegalDoc
    terms: LegalDoc
    authmeisterPrivacy: LegalDoc
    authmeisterTerms: LegalDoc
  }
  notFound: {
    title: string
    lede: string
    ctaHome: string
    ctaReport: string
    hintLabel: string
    hints: HintLink[]
    metaTitle: string
    metaDescription: string
  }
}

export const en: Translations = {
  meta: {
    siteName: 'Monoroh',
    description:
      'Mobile engineer crafting multiplatform products that feel native. Kotlin Multiplatform, iOS & Android — shipped.',
    keywords:
      'Mobile App Developer, Kotlin Multiplatform, iOS, Android, Compose Multiplatform, SwiftUI',
  },

  nav: {
    index: 'Index',
    work: 'Work',
    about: 'About',
    contact: 'Contact',
  },

  controls: {
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
    switchLanguage: 'Switch language to Russian',
  },

  hero: {
    statusPrefix: 'Open to new projects',
    headline: {
      l1: 'Mobile engineer',
      l2Before: 'crafting',
      em: 'multiplatform',
      l3: 'products that feel native.',
    },
    lede: {
      intro: "I'm",
      name: 'Ivan Kopylov',
      between1: ' — ten years shipping products with ',
      strong: 'Kotlin Multiplatform',
      trailing: ' for iOS, Android, desktop and web.',
    },
    ctaWork: 'See selected work',
    ctaContact: 'Get in touch',
  },

  apps: {
    eyebrowPrefix: 'Selected work',
    title: 'Apps people actually use.',
    subtitle:
      'Shipped to App Store, Google Play and RuStore. Designed end-to-end — from API to pixel polish.',
  },

  card: {
    viewCase: 'View case',
    visitSite: 'Visit site',
    viewSource: 'View source',
  },

  about: {
    eyebrow: 'About',
    title: "Engineer with a designer's eye and a shipper's mindset.",
    lede:
      'I build mobile products from architecture to App Store. A decade across native iOS, Android, and Kotlin Multiplatform — with the design and product instincts to round out the full loop.',
    principles: [
      {
        title: 'Architecture-first',
        body:
          'I treat clean architecture as a feature: testable, predictable, and easy to onboard. Domain logic stays platform-agnostic via KMP.',
      },
      {
        title: 'Share by default, native when it earns it',
        body:
          'Compose Multiplatform carries shared UI across iOS, Android, desktop and web. Drop down to SwiftUI or native Compose when a specific screen genuinely calls for it.',
      },
      {
        title: 'Ship & measure',
        body:
          'I optimize for time-to-feedback. Continuous delivery, sensible analytics, and crash-free guarantees before chasing polish.',
      },
    ],
    stackEyebrow: 'Stack',
    stackTitle: 'Mobile, end-to-end.',
    stackSub:
      'The tools I trust to ship production-grade products. Picked, not collected.',
  },

  stack: [
    { name: 'Kotlin Multiplatform', detail: 'Shared business logic across platforms' },
    { name: 'Compose Multiplatform', detail: 'Shared UI on top of KMP — one Compose across iOS, Android, desktop and web' },
    { name: 'Android · Kotlin', detail: 'Jetpack Compose, coroutines, modern Android' },
    { name: 'iOS · Swift', detail: 'SwiftUI first, UIKit when it earns its place' },
    { name: 'Flutter', detail: 'When cross-platform speed wins the trade-off' },
  ],

  footer: {
    eyebrow: 'Get in touch',
    title: 'Have an idea worth building?',
    titleBreak: "Let's ship it together.",
    cta: 'Start a conversation',
    channels: {
      email: 'Email',
      github: 'GitHub',
      telegram: 'Telegram',
    },
    copyrightSuffix: ' — built with care.',
    privacy: 'Privacy',
    terms: 'Terms',
  },

  projects: {
    authmeister: {
      category: 'Security & Authentication',
      description:
        'A modern OTP authenticator supporting both TOTP and HOTP standards. Seamlessly migrate from other authenticators including Google Authenticator with otpauth-migration support.',
      features: [
        'TOTP & HOTP support',
        'Google Authenticator migration',
        'Secure encrypted storage',
        'Clean, intuitive interface',
        'Backup & restore functionality',
      ],
    },
    sympee: {
      category: 'Gifting & Services',
      description:
        'A compliments platform where you can surprise friends with services and goods from partner businesses. Send coffee, haircuts, or other treats to loved ones in any city through QR codes.',
      features: [
        'Gift services to friends remotely',
        'QR code redemption system',
        'Partner business network',
        'Cross-city gifting',
        'Surprise & delight experience',
      ],
    },
    fastlaneRustore: {
      category: 'Open Source · Fastlane plugin',
      description:
        'A Fastlane plugin that automates publishing Android apps (AAB / APK) to RuStore. Handles JWE auth, cleans up drafts, uploads builds, and submits to moderation in one lane step.',
      features: [
        'RSA-SHA512 auth and JWE token exchange',
        'Auto-cleanup of pending drafts',
        'Single-step AAB or AAB + APK upload',
        'Configurable publish type (instantly / delayed / manual)',
        'Ships changelog and submits for moderation',
      ],
    },
  },

  authmeisterPage: {
    back: 'Back to portfolio',
    tagline:
      'A modern OTP authenticator built around three ideas: standards-compliant security, effortless migration, and zero data leaving your device.',
    specs: [
      { label: 'Platforms', value: 'iOS · Android' },
      { label: 'Tech', value: 'Kotlin Multiplatform' },
      { label: 'Pricing', value: 'Free' },
      { label: 'Privacy', value: 'On-device only' },
    ],
    featuresEyebrow: 'Features',
    featuresTitle: 'Designed to disappear into your workflow.',
    highlights: [
      {
        title: 'TOTP & HOTP — done right',
        body:
          'Standards-compliant time- and counter-based codes. Works with every service that supports authenticator apps.',
      },
      {
        title: 'One-tap migration',
        body:
          'Import the Google Authenticator otpauth-migration QR in a single scan. Your accounts, instantly.',
      },
      {
        title: 'Local-only by design',
        body:
          'Secrets are encrypted on-device. No cloud sync, no telemetry on tokens, no third parties.',
      },
      {
        title: 'Encrypted backups',
        body:
          'Export an encrypted vault to your favorite storage and restore in seconds when you switch devices.',
      },
    ],
    finalTitle: 'Ready when you are.',
    finalBody: 'Available on iOS, Android and RuStore. Free, no ads, no tracking.',
    legalPrivacy: 'Privacy Policy',
    legalTerms: 'Terms & Conditions',
  },

  legal: {
    backHome: 'Back home',
    backAuthmeister: 'Back to Authmeister',
    section: 'Legal',
    updated: 'Updated 05 Mar 2025',

    privacy: {
      title: 'Privacy Policy',
      body: [
        { type: 'p', text: 'This Privacy Policy describes how **Monoroh Developer** (\u201cwe,\u201d \u201cus,\u201d or \u201cour\u201d) collects, uses, and protects your information when you visit our website and use our services. By using our services, you agree to the collection and use of information in accordance with this Privacy Policy.' },
        { type: 'h2', text: 'Information we collect' },
        { type: 'h3', text: 'Personal information' },
        { type: 'p', text: 'We may collect personal information that you voluntarily provide to us, such as:' },
        { type: 'ul', items: ['Email address (when you contact us)', 'Name (when you provide it in communications)', 'Any other information you choose to provide'] },
        { type: 'h3', text: 'Usage information' },
        { type: 'p', text: 'We may automatically collect information about your visit, including:' },
        { type: 'ul', items: ['Browser type and version', 'Operating system', 'Pages visited and time spent on the site', 'Anonymized IP address'] },
        { type: 'h2', text: 'How we use your information' },
        { type: 'ul', items: ['To respond to your inquiries and communications', 'To improve the website and the apps we build', 'To analyze usage patterns and improve UX', 'To comply with legal obligations'] },
        { type: 'h2', text: 'Information sharing' },
        { type: 'p', text: "We don\u2019t sell or trade your personal information. We may share it only:" },
        { type: 'ul', items: ['With your explicit consent', 'To comply with legal requirements', 'To protect rights, property, or safety', 'In connection with a business transfer or merger'] },
        { type: 'h2', text: 'Data security' },
        { type: 'p', text: 'We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. No method of transmission over the internet is 100% secure.' },
        { type: 'h2', text: 'Your rights' },
        { type: 'ul', items: ['Access your personal information', 'Correct inaccurate information', 'Request deletion of your information', 'Object to processing', 'Request data portability'] },
        { type: 'h2', text: "Children\u2019s privacy" },
        { type: 'p', text: 'Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.' },
        { type: 'h2', text: 'Changes' },
        { type: 'p', text: "We may update this policy from time to time. We\u2019ll post the new version on this page and update the date above." },
        { type: 'h2', text: 'Contact' },
        { type: 'p', text: 'Questions? Reach out at mailto:mnrhwow@gmail.com.' },
      ],
    },

    terms: {
      title: 'Terms of Service',
      body: [
        { type: 'p', text: 'These Terms of Service (\u201cTerms\u201d) govern your use of our website and services operated by **Monoroh Developer**. By accessing or using our services, you agree to be bound by these Terms.' },
        { type: 'h2', text: 'Acceptance of terms' },
        { type: 'p', text: 'By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.' },
        { type: 'h2', text: 'Use license' },
        { type: 'p', text: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. Under this license you may not:' },
        { type: 'ul', items: ['Modify or copy the materials', 'Use the materials for any commercial purpose or public display', 'Attempt to reverse engineer any software', 'Remove any copyright or other proprietary notations'] },
        { type: 'h2', text: 'Disclaimer' },
        { type: 'p', text: 'The materials on our website are provided on an \u201cas is\u201d basis. We make no warranties, expressed or implied, and disclaim all other warranties.' },
        { type: 'h2', text: 'Limitations' },
        { type: 'p', text: 'In no event shall Monoroh Developer or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.' },
        { type: 'h2', text: 'Accuracy of materials' },
        { type: 'p', text: "Materials appearing on our website may include technical or typographical errors. We don\u2019t warrant that any materials are accurate, complete, or current." },
        { type: 'h2', text: 'Links' },
        { type: 'p', text: "We haven\u2019t reviewed all sites linked from our website and are not responsible for their contents. Use of any linked website is at your own risk." },
        { type: 'h2', text: 'Modifications' },
        { type: 'p', text: 'We may revise these Terms at any time without notice. By using this website you agree to be bound by the current version.' },
        { type: 'h2', text: 'Governing law' },
        { type: 'p', text: 'These Terms are governed by the laws of the jurisdiction in which we operate, and you submit to the exclusive jurisdiction of the courts in that location.' },
        { type: 'h2', text: 'Contact' },
        { type: 'p', text: 'Questions? Reach out at mailto:mnrhwow@gmail.com.' },
      ],
    },

    authmeisterPrivacy: {
      title: 'Privacy Policy',
      body: [
        { type: 'p', text: "This policy describes how **Authmeister** handles your data. Short version: it doesn\u2019t leave your device." },
        { type: 'h2', text: 'Information we collect' },
        { type: 'ul', items: ['Your OTP tokens are stored locally on your device.', 'No personal information is transmitted to our servers.', 'Anonymous app-usage analytics may be collected to improve the app.'] },
        { type: 'h2', text: 'Data storage' },
        { type: 'p', text: 'All your authentication data is stored securely on your device using:' },
        { type: 'ul', items: ['Encrypted local storage', 'Device-specific encryption keys', 'No cloud storage of sensitive data'] },
        { type: 'h2', text: 'Permissions' },
        { type: 'ul', items: ['**Camera** — to scan QR codes for setup', '**Storage** — for encrypted backup & restore'] },
        { type: 'h2', text: 'Data sharing' },
        { type: 'p', text: "We don\u2019t share your data with third parties. Your OTP secrets remain on your device." },
        { type: 'h2', text: 'Contact' },
        { type: 'p', text: 'Questions? Email mailto:mnrhwow@gmail.com.' },
      ],
    },

    authmeisterTerms: {
      title: 'Terms and Conditions',
      body: [
        { type: 'p', text: 'These Terms govern your use of the **Authmeister** mobile application.' },
        { type: 'h2', text: 'Acceptance of terms' },
        { type: 'p', text: 'By downloading and using Authmeister, you agree to these terms.' },
        { type: 'h2', text: 'Description of service' },
        { type: 'p', text: 'Authmeister is an OTP authenticator that generates time-based (TOTP) and counter-based (HOTP) authentication codes.' },
        { type: 'h2', text: 'User responsibilities' },
        { type: 'ul', items: ['Keep your device secure', 'Back up your authentication data', "Don\u2019t share your OTP codes with unauthorized parties"] },
        { type: 'h2', text: 'Disclaimer' },
        { type: 'p', text: 'The app is provided \u201cas is\u201d without warranties. We are not responsible for loss of account access due to app malfunction or device issues.' },
        { type: 'h2', text: 'Limitation of liability' },
        { type: 'p', text: 'Our liability is limited to the maximum extent permitted by law.' },
        { type: 'h2', text: 'Contact' },
        { type: 'p', text: 'Questions? Email mailto:mnrhwow@gmail.com.' },
      ],
    },
  },

  notFound: {
    title: 'This page wandered off.',
    lede:
      "We couldn\u2019t find the page you were looking for. It might have moved, been renamed, or never existed in the first place.",
    ctaHome: 'Back to home',
    ctaReport: 'Report this',
    hintLabel: 'Maybe you wanted',
    hints: [
      { label: 'Selected work', to: '/#work', external: false },
      { label: 'Authmeister — OTP authenticator', to: '/authmeister', external: false },
      { label: 'Sympee — gifting platform', to: 'https://sympee.ru', external: true },
    ],
    metaTitle: 'Page Not Found',
    metaDescription:
      "The page you're looking for doesn't exist. Head back home to explore our work.",
  },
}

export const ru: Translations = {
  meta: {
    siteName: 'Monoroh',
    description:
      'Мобильный разработчик. Делаю мультиплатформенные продукты, которые ощущаются нативно. Kotlin Multiplatform, iOS и Android — в проде.',
    keywords:
      'мобильная разработка, Kotlin Multiplatform, iOS, Android, Compose Multiplatform, SwiftUI',
  },

  nav: {
    index: 'Главная',
    work: 'Проекты',
    about: 'Обо мне',
    contact: 'Контакты',
  },

  controls: {
    toLight: 'Включить светлую тему',
    toDark: 'Включить тёмную тему',
    switchLanguage: 'Переключить язык на английский',
  },

  hero: {
    statusPrefix: 'Открыт для новых проектов',
    headline: {
      l1: '',
      l2Before: 'Создаю',
      em: 'мультиплатформенные',
      l3: 'мобильные приложения, которые ощущаются нативно.',
    },
    lede: {
      intro: 'Я —',
      name: 'Иван Копылов',
      between1: '. Десять лет делаю продукты на ',
      strong: 'Kotlin Multiplatform',
      trailing: ' — для iOS, Android, десктопа и веба.',
    },
    ctaWork: 'Смотреть проекты',
    ctaContact: 'Написать',
  },

  apps: {
    eyebrowPrefix: 'В проде',
    title: 'Приложения, которыми правда пользуются.',
    subtitle:
      'Живут в App Store, Google Play и RuStore. Собраны end-to-end — от API до пиксельной полировки.',
  },

  card: {
    viewCase: 'Кейс',
    visitSite: 'На сайт',
    viewSource: 'Исходники',
  },

  about: {
    eyebrow: 'Обо мне',
    title: 'Инженер с дизайн-вкусом и продуктовой чуйкой.',
    lede:
      'Делаю мобильное целиком — от архитектуры до пуша в стор. Десять лет в нативных iOS, Android и Kotlin Multiplatform. И достаточно продуктовой чуйки, чтобы закрывать всю петлю самому.',
    principles: [
      {
        title: 'Архитектура — это фича',
        body:
          'Чистая архитектура — это фича, а не оверхед: код тестируется, новые ребята быстро онбордятся, ничего не разваливается. Доменная логика живёт в KMP и не зависит от платформы.',
      },
      {
        title: 'Шарим UI, нативно — где это правда нужно',
        body:
          'Compose Multiplatform тащит общий UI на iOS, Android, десктоп и веб. Спускаюсь в SwiftUI или нативный Compose только там, где конкретный экран это реально заслужил.',
      },
      {
        title: 'Релизить и мерить',
        body:
          'Оптимизирую время до фидбека. CI/CD, аналитика по делу, crash-free стабильность — а уже потом вылизывание пикселей.',
      },
    ],
    stackEyebrow: 'Стек',
    stackTitle: 'Мобайл от и до.',
    stackSub:
      'Инструменты, на которых релижу продакшен. Выбраны под задачи, а не для коллекции.',
  },

  stack: [
    { name: 'Kotlin Multiplatform', detail: 'Бизнес-логика — одна, на всех платформах' },
    { name: 'Compose Multiplatform', detail: 'Шарящийся UI поверх KMP — один Compose на iOS, Android, десктоп и веб' },
    { name: 'Android · Kotlin', detail: 'Jetpack Compose, корутины, modern Android-стек' },
    { name: 'iOS · Swift', detail: 'SwiftUI — где можно, UIKit — где нужно' },
    { name: 'Flutter', detail: 'Когда нужна скорость и единая кодовая база' },
  ],

  footer: {
    eyebrow: 'Связаться',
    title: 'Есть идея, которую хочется собрать?',
    titleBreak: 'Соберём её вместе.',
    cta: 'Написать',
    channels: {
      email: 'Email',
      github: 'GitHub',
      telegram: 'Telegram',
    },
    copyrightSuffix: ' — собрано вручную.',
    privacy: 'Конфиденциальность',
    terms: 'Условия',
  },

  projects: {
    authmeister: {
      category: 'Безопасность · 2FA',
      description:
        'Современный OTP-аутентификатор: TOTP и HOTP из коробки. Бесшовно затягивает аккаунты из соседних аутентификаторов — включая Google Authenticator через otpauth-migration.',
      features: [
        'Поддержка TOTP и HOTP',
        'Импорт из Google Authenticator',
        'Зашифрованное локальное хранилище',
        'Чистый UI без лишнего',
        'Бэкап и восстановление',
      ],
    },
    sympee: {
      category: 'Подарочный сервис',
      description:
        'Платформа комплиментов: дарим друзьям услуги и товары от партнёров. Отправил кофе, стрижку или подарок — человек получает QR и забирает в любом городе.',
      features: [
        'Дистанционные подарки услугами',
        'Активация по QR-коду',
        'Сеть партнёрских заведений',
        'Подарки между городами',
        'Эффект приятного сюрприза',
      ],
    },
    fastlaneRustore: {
      category: 'Open Source · Fastlane-плагин',
      description:
        'Fastlane-плагин для автопубликации Android-сборок (AAB / APK) в RuStore. Тащит на себе JWE-авторизацию, чистит черновики, заливает билд и отправляет на модерацию — одной командой в lane.',
      features: [
        'RSA-SHA512 авторизация и обмен на JWE-токен',
        'Автоочистка незавершённых черновиков',
        'Заливка AAB или AAB + APK в один шаг',
        'Тип публикации: instantly / delayed / manual',
        'Прокидывает changelog и шлёт на модерацию',
      ],
    },
  },

  authmeisterPage: {
    back: 'К проектам',
    tagline:
      'OTP-аутентификатор, собранный вокруг трёх идей: безопасность по стандартам, импорт в одно касание и ноль данных, которые уходят с устройства.',
    specs: [
      { label: 'Платформы', value: 'iOS · Android' },
      { label: 'Стек', value: 'Kotlin Multiplatform' },
      { label: 'Цена', value: 'Бесплатно' },
      { label: 'Приватность', value: 'Только на устройстве' },
    ],
    featuresEyebrow: 'Возможности',
    featuresTitle: 'Сделан, чтобы раствориться в твоём флоу.',
    highlights: [
      {
        title: 'TOTP и HOTP — как положено',
        body:
          'Полностью по стандарту: коды по времени и по счётчику. Работает со всем, что вообще понимает аутентификаторы.',
      },
      {
        title: 'Импорт в одно касание',
        body:
          'Сканируешь otpauth-migration QR из Google Authenticator — и все аккаунты на месте. Мгновенно, без ручного перевбивания секретов.',
      },
      {
        title: 'Локально по умолчанию',
        body:
          'Секреты зашифрованы на устройстве. Никакой облачной синхронизации, никакой телеметрии по токенам, никаких третьих сторон.',
      },
      {
        title: 'Зашифрованные бэкапы',
        body:
          'Кидаешь зашифрованный экспорт в любое облако — и за секунды накатываешься на новом устройстве.',
      },
    ],
    finalTitle: 'Когда будешь готов.',
    finalBody: 'Доступно в App Store, Google Play и RuStore. Бесплатно, без рекламы и трекинга.',
    legalPrivacy: 'Политика конфиденциальности',
    legalTerms: 'Условия использования',
  },

  legal: {
    backHome: 'На главную',
    backAuthmeister: 'К Authmeister',
    section: 'Юридическое',
    updated: 'Обновлено 05.03.2025',

    privacy: {
      title: 'Политика конфиденциальности',
      body: [
        { type: 'p', text: 'Эта политика описывает, как **Monoroh Developer** («мы», «нас» или «наш») собирает, использует и защищает вашу информацию, когда вы посещаете сайт и пользуетесь нашими сервисами. Используя наши сервисы, вы соглашаетесь со сбором и использованием информации в соответствии с этой политикой.' },
        { type: 'h2', text: 'Какую информацию мы собираем' },
        { type: 'h3', text: 'Личная информация' },
        { type: 'p', text: 'Мы можем собирать личную информацию, которую вы добровольно передаёте, например:' },
        { type: 'ul', items: ['Email-адрес (когда вы пишете нам)', 'Имя (если вы указываете его в переписке)', 'Любую другую информацию, которую вы решите предоставить'] },
        { type: 'h3', text: 'Информация об использовании' },
        { type: 'p', text: 'Мы можем автоматически собирать информацию о вашем визите:' },
        { type: 'ul', items: ['Тип и версию браузера', 'Операционную систему', 'Посещённые страницы и время на сайте', 'Обезличенный IP-адрес'] },
        { type: 'h2', text: 'Как мы используем эту информацию' },
        { type: 'ul', items: ['Отвечаем на ваши запросы и сообщения', 'Улучшаем сайт и приложения', 'Анализируем паттерны использования и улучшаем UX', 'Соблюдаем юридические обязательства'] },
        { type: 'h2', text: 'Передача информации' },
        { type: 'p', text: 'Мы не продаём и не передаём вашу личную информацию. Передача возможна только:' },
        { type: 'ul', items: ['С вашего явного согласия', 'Для выполнения требований закона', 'Для защиты прав, имущества и безопасности', 'В рамках реорганизации или слияния'] },
        { type: 'h2', text: 'Безопасность' },
        { type: 'p', text: 'Мы применяем разумные технические и организационные меры для защиты данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Ни один способ передачи через интернет не безопасен на 100%.' },
        { type: 'h2', text: 'Ваши права' },
        { type: 'ul', items: ['Получить доступ к своей личной информации', 'Исправить неточные данные', 'Потребовать удаления данных', 'Возразить против обработки', 'Запросить переносимость данных'] },
        { type: 'h2', text: 'Дети' },
        { type: 'p', text: 'Наши сервисы не предназначены для детей младше 13 лет. Мы намеренно не собираем личную информацию детей младше 13.' },
        { type: 'h2', text: 'Изменения' },
        { type: 'p', text: 'Мы можем обновлять политику. Новая версия будет опубликована на этой странице с обновлённой датой.' },
        { type: 'h2', text: 'Контакты' },
        { type: 'p', text: 'Есть вопросы? Напишите на mailto:mnrhwow@gmail.com.' },
      ],
    },

    terms: {
      title: 'Условия использования',
      body: [
        { type: 'p', text: 'Эти условия использования («Условия») регулируют ваше использование сайта и сервисов, которыми управляет **Monoroh Developer**. Пользуясь нашими сервисами, вы соглашаетесь с этими Условиями.' },
        { type: 'h2', text: 'Принятие условий' },
        { type: 'p', text: 'Заходя на сайт и используя его, вы соглашаетесь с условиями и положениями этого соглашения.' },
        { type: 'h2', text: 'Лицензия на использование' },
        { type: 'p', text: 'Разрешено временно скачать одну копию материалов сайта для личного некоммерческого просмотра. В рамках этой лицензии нельзя:' },
        { type: 'ul', items: ['Изменять или копировать материалы', 'Использовать материалы в коммерческих целях или публично показывать', 'Реверс-инжинирить любое ПО', 'Удалять копирайт и иные обозначения прав'] },
        { type: 'h2', text: 'Отказ от ответственности' },
        { type: 'p', text: 'Материалы предоставляются «как есть». Никаких прямых или подразумеваемых гарантий — мы отказываемся от всех гарантий.' },
        { type: 'h2', text: 'Ограничения' },
        { type: 'p', text: 'Ни в каком случае Monoroh Developer или его поставщики не несут ответственности за убытки, связанные с использованием или невозможностью использования материалов сайта.' },
        { type: 'h2', text: 'Точность материалов' },
        { type: 'p', text: 'Материалы могут содержать технические или типографические ошибки. Мы не гарантируем их точность, полноту или актуальность.' },
        { type: 'h2', text: 'Ссылки' },
        { type: 'p', text: 'Мы не проверяли все сайты, на которые ведут ссылки с нашего сайта, и не отвечаем за их содержимое. Использование любых внешних ссылок — на ваш страх и риск.' },
        { type: 'h2', text: 'Изменения' },
        { type: 'p', text: 'Мы можем пересматривать Условия в любое время без уведомления. Пользуясь сайтом, вы соглашаетесь с текущей версией.' },
        { type: 'h2', text: 'Применимое право' },
        { type: 'p', text: 'Условия регулируются законодательством юрисдикции, в которой мы работаем. Вы соглашаетесь с исключительной подсудностью судов этой юрисдикции.' },
        { type: 'h2', text: 'Контакты' },
        { type: 'p', text: 'Есть вопросы? Напишите на mailto:mnrhwow@gmail.com.' },
      ],
    },

    authmeisterPrivacy: {
      title: 'Политика конфиденциальности',
      body: [
        { type: 'p', text: 'Эта политика описывает, как **Authmeister** обращается с вашими данными. Кратко: они не покидают ваше устройство.' },
        { type: 'h2', text: 'Какую информацию мы собираем' },
        { type: 'ul', items: ['Ваши OTP-токены хранятся локально на устройстве.', 'Никакая личная информация не передаётся на наши серверы.', 'Может собираться обезличенная аналитика использования приложения — для его улучшения.'] },
        { type: 'h2', text: 'Хранение данных' },
        { type: 'p', text: 'Все ваши данные аутентификации хранятся на устройстве безопасно:' },
        { type: 'ul', items: ['Зашифрованное локальное хранилище', 'Ключи шифрования, привязанные к устройству', 'Чувствительные данные не уходят в облако'] },
        { type: 'h2', text: 'Разрешения' },
        { type: 'ul', items: ['**Камера** — для сканирования QR-кодов при настройке', '**Хранилище** — для зашифрованного бэкапа и восстановления'] },
        { type: 'h2', text: 'Передача данных' },
        { type: 'p', text: 'Мы не передаём ваши данные третьим лицам. Ваши OTP-секреты остаются на устройстве.' },
        { type: 'h2', text: 'Контакты' },
        { type: 'p', text: 'Есть вопросы? Напишите на mailto:mnrhwow@gmail.com.' },
      ],
    },

    authmeisterTerms: {
      title: 'Условия использования',
      body: [
        { type: 'p', text: 'Эти Условия регулируют ваше использование мобильного приложения **Authmeister**.' },
        { type: 'h2', text: 'Принятие условий' },
        { type: 'p', text: 'Скачивая и используя Authmeister, вы соглашаетесь с этими условиями.' },
        { type: 'h2', text: 'Описание сервиса' },
        { type: 'p', text: 'Authmeister — это OTP-аутентификатор, который генерирует одноразовые коды по времени (TOTP) и по счётчику (HOTP).' },
        { type: 'h2', text: 'Обязанности пользователя' },
        { type: 'ul', items: ['Содержите устройство в безопасности', 'Делайте бэкапы своих данных аутентификации', 'Не передавайте OTP-коды посторонним'] },
        { type: 'h2', text: 'Отказ от ответственности' },
        { type: 'p', text: 'Приложение предоставляется «как есть» без гарантий. Мы не несём ответственности за потерю доступа к аккаунтам из-за сбоев приложения или проблем устройства.' },
        { type: 'h2', text: 'Ограничение ответственности' },
        { type: 'p', text: 'Наша ответственность ограничена в максимальной степени, разрешённой применимым законом.' },
        { type: 'h2', text: 'Контакты' },
        { type: 'p', text: 'Есть вопросы? Напишите на mailto:mnrhwow@gmail.com.' },
      ],
    },
  },

  notFound: {
    title: 'Страница где-то затерялась.',
    lede:
      'Не нашёл то, что ты искал. Возможно, страница переехала, переименовалась или вообще никогда не существовала.',
    ctaHome: 'На главную',
    ctaReport: 'Сообщить о проблеме',
    hintLabel: 'Возможно, ты искал',
    hints: [
      { label: 'Проекты в проде', to: '/#work', external: false },
      { label: 'Authmeister — OTP-аутентификатор', to: '/authmeister', external: false },
      { label: 'Sympee — платформа подарков', to: 'https://sympee.ru', external: true },
    ],
    metaTitle: 'Страница не найдена',
    metaDescription:
      'Этой страницы нет. Вернись на главную и посмотри проекты.',
  },
}

export type Locale = 'en' | 'ru'
export const translations: Record<Locale, Translations> = { en, ru }
