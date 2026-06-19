export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  year: string;
};

export const projects: Project[] = [
  {
    title: '个人网站',
    description:
      '基于 Astro 6、Tailwind CSS 4 构建的现代化个人主页与博客，通过 GitHub Actions 自动部署。',
    tags: ['Astro', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/kent10636/kent10636.github.io',
    demo: 'https://kent10636.github.io',
    featured: true,
    year: '2026',
  },
];