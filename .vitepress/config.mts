import { defineConfig } from "vitepress";
import { readFileSync } from "node:fs";

const api: { text: string; link: string; count: number }[] = JSON.parse(
  readFileSync(new URL("./api-sidebar.json", import.meta.url), "utf-8")
);
const meta = JSON.parse(readFileSync(new URL("./meta.json", import.meta.url), "utf-8"));

const apiItems = api.map((a) => ({ text: a.text, link: a.link }));

const guideEn = [
  {
    text: "Getting started",
    items: [
      { text: "Introduction", link: "/guide/introduction" },
      { text: "First steps", link: "/guide/first-steps" },
    ],
  },
  {
    text: "Using the panel",
    items: [
      { text: "Dashboard & users", link: "/guide/users" },
      { text: "Overview & statistics", link: "/guide/overview" },
      { text: "Nodes, hosts & cores", link: "/guide/infrastructure" },
      { text: "Subscriptions", link: "/guide/subscriptions" },
      { text: "Subscription statistics", link: "/guide/sub-stats" },
      { text: "Admins & roles", link: "/guide/admins" },
    ],
  },
  {
    text: "Security & alerts",
    items: [
      { text: "Security & blocked IPs", link: "/guide/security" },
      { text: "Bot, alerts & activity", link: "/guide/notifications" },
    ],
  },
  {
    text: "Operations",
    items: [
      { text: "Backups, updates & license", link: "/guide/operations" },
      { text: "Command line (alexen)", link: "/guide/cli" },
      { text: "Appearance & settings", link: "/guide/appearance" },
      { text: "Troubleshooting", link: "/guide/troubleshooting" },
    ],
  },
];

const guideTr = guideEn.map((g) => ({
  ...g,
  items: g.items.map((i) => ({ ...i, link: "/tr" + i.link })),
}));
const trTitles: Record<string, string> = {
  "Getting started": "Başlangıç",
  "Using the panel": "Paneli kullanma",
  "Security & alerts": "Güvenlik ve bildirimler",
  Operations: "İşletme",
  Introduction: "Giriş",
  "First steps": "İlk adımlar",
  "Dashboard & users": "Panel ve kullanıcılar",
  "Overview & statistics": "Genel bakış ve istatistik",
  "Nodes, hosts & cores": "Node, host ve çekirdek",
  Subscriptions: "Abonelikler",
  "Subscription statistics": "Abonelik istatistikleri",
  "Admins & roles": "Yöneticiler ve roller",
  "Security & blocked IPs": "Güvenlik ve engelli IP'ler",
  "Bot, alerts & activity": "Bot, uyarılar ve etkinlik",
  "Backups, updates & license": "Yedek, güncelleme ve lisans",
  "Command line (alexen)": "Komut satırı (alexen)",
  "Appearance & settings": "Görünüm ve ayarlar",
  Troubleshooting: "Sorun giderme",
};
const guideTrT = guideTr.map((g) => ({
  text: trTitles[g.text] ?? g.text,
  items: g.items.map((i) => ({ ...i, text: trTitles[i.text] ?? i.text })),
}));

const apiSide = [
  { text: "API", items: [{ text: "Overview", link: "/api/" }, { text: "Authentication & errors", link: "/api/auth" }] },
  { text: "Endpoints", items: apiItems },
];

export default defineConfig({
  title: "Alexen",
  description: "Alexen panel documentation: user guide and complete API reference.",
  cleanUrls: true,
  srcExclude: ["README.md", "scripts/**"],
  lastUpdated: false,
  base: process.env.DOCS_BASE || "/",
  head: [
    ["link", { rel: "icon", href: "/logo.svg" }],
    ["meta", { name: "theme-color", content: "#0b1020" }],
    // apply the saved skin before first paint (no flash)
    ["script", {}, `try{var k=localStorage.getItem("alexen-skin");if(k)document.documentElement.dataset.skin=k}catch(e){}`],
  ],
  markdown: {
    config(md) {
      // lazy-load every screenshot so long pages open fast
      const def = md.renderer.rules.image!;
      md.renderer.rules.image = (tokens, idx, options, env, self) => {
        tokens[idx].attrSet("loading", "lazy");
        tokens[idx].attrSet("decoding", "async");
        return def(tokens, idx, options, env, self);
      };
    },
  },
  appearance: "dark",
  themeConfig: {
    logo: "/logo.svg",
    search: { provider: "local" },
    socialLinks: [{ icon: "telegram", link: "https://t.me/alexvpns" }],
    footer: { message: `Alexen v${meta.version} · ${meta.endpoints} API endpoints`, copyright: "© Alexander LLC" },
    outline: { level: [2, 3] },
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: [
          { text: "Guide", link: "/guide/introduction", activeMatch: "/guide/" },
          { text: "API", link: "/api/", activeMatch: "/api/" },
          { text: "Changelog", link: "/changelog" },
          { text: `v${meta.version}`, link: "/changelog" },
        ],
        sidebar: { "/guide/": guideEn, "/api/": apiSide },
      },
    },
    tr: {
      label: "Türkçe",
      lang: "tr",
      link: "/tr/",
      themeConfig: {
        nav: [
          { text: "Kılavuz", link: "/tr/guide/introduction", activeMatch: "/tr/guide/" },
          { text: "API", link: "/api/", activeMatch: "/api/" },
          { text: "Sürüm notları", link: "/tr/changelog" },
          { text: `v${meta.version}`, link: "/tr/changelog" },
        ],
        sidebar: { "/tr/guide/": guideTrT },
        docFooter: { prev: "Önceki", next: "Sonraki" },
        outlineTitle: "Bu sayfada",
        darkModeSwitchLabel: "Tema",
        sidebarMenuLabel: "Menü",
        returnToTopLabel: "Yukarı çık",
        langMenuLabel: "Dil",
      },
    },
  },
});
