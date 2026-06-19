export const profile = {
  name: 'Kent',
  username: 'kent10636',
  title: '软件工程师',
  tagline: '能跑就别动，动了就重构',
  bio: '软件工程师，主要使用 Python 与 Java。相信好代码应该简单、可靠、可维护。这个网站用来记录项目与思考。',
  location: '深圳',
  email: '',
  avatar: 'https://avatars.githubusercontent.com/u/15955930?v=4',
  status: '持续学习中',
  currently: '重构个人网站，探索现代 Web 技术栈，偶尔在博客记录过程。',
  social: {
    github: 'https://github.com/kent10636',
    twitter: '',
    linkedin: '',
  },
  skills: ['Python', 'Java'],
  timeline: [
    {
      year: '2026',
      title: '网站重构',
      description: '用 Astro、Tailwind CSS 和 GitHub Actions 重建个人站点。',
    },
    {
      year: '2018',
      title: '第一篇博客',
      description: '在 GitHub Pages 上线 Hexo 博客。',
    },
  ],
} as const;