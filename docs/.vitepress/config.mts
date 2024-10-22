import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Origin Technology",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Origin-ID', link: 'https://id.origincloud.tech/' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Origin-Technology' }
    ],

    footer: {
      message: 'For support, please contact email support@origincloud.tech',
      copyright: 'Copyright © 2023-2024 Origin Technology'
    }
  }
})
