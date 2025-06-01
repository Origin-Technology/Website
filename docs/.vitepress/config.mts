import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Origin Technology",
  description: "Open. Innovation. Powerful.",
  themeConfig: {
    logo: '/icon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Productions",
        items: [
          { text: "Origin XenonAuth™", link: "/xenon-auth" },
          { text: "Origin Shield™", link: "/shield" },
          { text: "Origin Re-Sync™", link: "/re-sync" },
          { text: "Origin Solide™", link: "https://solide.origin.pw/" }
        ],
      },
      { text: "Origin ID", link: "https://id.origin.pw" },
      { text: "About", link: "/about" },
      { text: "Status", link: "https://status.origin.pw" },
      {
        text: "Contact Us",
        items: [
          { text: "QQ群聊", link: "https://qm.qq.com/q/Dew7WKxByo" },
          { text: "EMail", link: "mailto:support@origin.pw" }
        ],
      }
    ],

    sidebar: [
      {
        text: "Productions",
        items: [
          { text: "Origin XenonAuth™", link: "/xenon-auth" },
          { text: "Origin Shield™", link: "/shield" },
          { text: "Origin Re-Sync™", link: "/re-sync" },
          { text: "Origin Solide™", link: "https://solide.origin.pw/" }
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Origin-Technology" },
    ],

    footer: {
      message: "For support, please contact email support@origin.pw",
      copyright: "Copyright © 2022-2025 Origin Technology",
    },
  },
});
