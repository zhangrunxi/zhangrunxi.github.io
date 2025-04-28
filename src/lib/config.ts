export const config = {
  site: {
    title: "方寸格物录",
    name: "Measure & Explore",
    description: "个人工作日记",
    keywords: ["motion planning", "AI", "autonomous driving"],
    url: "https://runxi.me",
    baseUrl: "https://runxi.me",
    image: "https://xxx.com/og-image.png",
    favicon: {
      ico: "/favicon.ico",
      png: "/favicon.png",
      svg: "/favicon.svg",
      appleTouchIcon: "/favicon.png",
    },
    manifest: "/site.webmanifest",
    rss: {
      title: "measure & explore",
      description: "Thoughts on data development, AI",
      feedLinks: {
        rss2: "/rss.xml",
        json: "/feed.json",
        atom: "/atom.xml",
      },
    },
  },
  author: {
    name: "Rex",
    email: "dumbbird1989@gmail.com",
    bio: "分享者是最大的受益者",
    avatar: "/avatar.png"
  },
  social: {
    github: "https://github.com/zhangrunxi",
    x: "https://x.com/rexzhang89",
    //xiaohongshu: "https://www.xiaohongshu.com/user/profile/xxx",
    wechat: "https://blog-1259199090.cos.ap-shanghai.myqcloud.com/img/%E5%85%AC%E4%BC%97%E5%8F%B7.jpg",
    //buyMeACoffee: "https://www.buymeacoffee.com/xxx",
  },
  
  giscus: {
    repo: "zhangrunxi/zhangrunxi.github.io",
    repoId: "R_kgDOOgKuEg",
    categoryId: "DIC_kwDOOgKuEs4CphIp",
  },
  
  navigation: {
    main: [
      { 
        title: "文章", 
        href: "/blog",
      },
      {
        title: "课程",
        href: "/course",
      },
    ],
  },
  seo: {
    metadataBase: new URL("https://xxx.com"),
    alternates: {
      canonical: './',
    },
    openGraph: {
      type: "website" as const,
      locale: "zh_CN",
    },
    twitter: {
      card: "summary_large_image" as const,
      creator: "@xxx",
    },
  },
};
