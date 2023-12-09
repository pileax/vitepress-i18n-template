import { defineConfig } from 'vitepress'
import { nav } from './theme/nav'
import { sidebarGuide, sidebarComponent } from './theme/sidebar'
import { labels } from './theme/labels'
import { name, repo, descriptionZh } from '../meta'

const locale = 'zh';

export default defineConfig({
  title: name,
  description: descriptionZh,
  themeConfig: {
    ...labels(locale),
    nav: nav(locale),
    sidebar: {
      '/zh/guide/': { base: '/zh/guide/', items: sidebarGuide(locale) },
      '/zh/component/': { base: '/zh/component/', items: sidebarComponent(locale) },
    },
    editLink: {
      pattern: `${repo}/edit/main/src/:path`,
      text: "编辑此页",
    },
  },
  head: [
  ],
})