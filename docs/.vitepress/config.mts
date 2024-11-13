import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Origin Technology",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/favicon.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Productions",
        items: [
          { text: "Origin™ XenonAuth", link: "/xenon-auth" },
          { text: "Origin™ Shield", link: "/shield" },
          { text: "Origin™ Re-Sync", link: "/re-sync" },
          { text: "Origin™ Screen Protection", link: "/screen-protection" }
        ],
      },
      { text: "Origin ID", link: "https://id.origincloud.tech/" },
      { text: "About", link: "/about" },
    ],

    sidebar: [
      {
        text: "Productions",
        items: [
          { text: "Origin™ XenonAuth", link: "/xenon-auth" },
          { text: "Origin™ Shield", link: "/shield" },
          { text: "Origin™ Re-Sync", link: "/re-sync" },
          { text: "Origin™ Screen Protection", link: "/screen-protection" }
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Origin-Technology" },
    ],

    footer: {
      message: "For support, please contact email support@origincloud.tech",
      copyright: "Copyright © 2023-2024 Origin Technology",
    },
  },
});
