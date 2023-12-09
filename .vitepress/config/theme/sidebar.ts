import { tr } from '../../i18n';

export function sidebarGuide(locale :string) {
  const t = (key :string) => {
    return tr(locale, `sidebar.${key}`)
  }
  return [
    {
      text: t('guide'),
      collapsed: false,
      items: [
        { text: t('introduction'), link: 'introduction' },
        { text: t('gettingStarted'), link: 'getting-started' },
        {
          text: t('config'),
          collapsed: true,
          items: [
            { text: t('introduction'), link: 'config/introduction' },
            { text: 'Getting Started', link: 'config/getting-started' },
          ]
        },
      ]
    },
  ]
}
export function sidebarComponent(locale :string) {
  return [
    {
      text: 'Components',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'introduction' },
        { text: 'Getting Started', link: 'getting-started' },
        { text: 'Route', link: 'route' },
        { text: 'Style', link: 'style' },
      ]
    },
  ]
}