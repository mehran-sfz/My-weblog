const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Mehran Safarzadeh",
    image: "/avatartion.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Just Developer",
    bio: "I develop everything that comes to my mind.",
    email: "mehran.sfz99@gmail.com",
    linkedin: "mehran-safarzadeh",
    github: "mehran-sfz",
    instagram: "mehransafarzadeh",
  },
  projects: [
    {
      name: `Mehran Blog`,
      href: "https://mehransfz.vercel.app",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Mehran Blog",
    description: "welcome to my daily life :)",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 1 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
