export const site = {
  nav: [
    { href: '/', label: '首页' },
    { href: '/projects', label: '项目' },
    { href: '/blog', label: '博客' },
    { href: '/about', label: '关于' },
  ],
  hero: {
    greeting: '你好，我是',
    github: 'GitHub',
    about: '关于我',
  },
  bento: {
    skills: '技能',
    status: '状态',
    location: '所在地',
    currently: '最近在忙',
  },
  sections: {
    featuredProjects: '精选项目',
    latestPosts: '最新文章',
    viewAll: '查看全部',
  },
  projects: {
    title: '项目',
    subtitle: '我做过的项目与实验。',
    all: '全部',
  },
  blog: {
    title: '博客',
    posts: (count: number) => `共 ${count} 篇文章`,
  },
  about: {
    title: '关于',
    timeline: '时间线',
    connect: '联系方式',
  },
  footer: {
    builtWith: '基于',
    builtWithLink: 'Astro',
  },
} as const;