export const profile = {
  name: 'Kent',
  username: 'kent10636',
  title: 'Software Engineer',
  tagline: 'Building thoughtful software, one commit at a time.',
  bio: `I'm a software engineer passionate about crafting clean, performant products. This site is my digital home — a place to share projects, ideas, and the occasional blog post.`,
  location: 'China',
  email: 'hello@example.com',
  avatar: '/avatar.svg',
  social: {
    github: 'https://github.com/kent10636',
    twitter: '',
    linkedin: '',
  },
  skills: [
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'Astro',
    'System Design',
  ],
  timeline: [
    {
      year: '2026',
      title: 'Site Relaunch',
      description: 'Rebuilt personal site with Astro, Tailwind CSS, and GitHub Actions.',
    },
    {
      year: '2018',
      title: 'First Blog',
      description: 'Launched original Hexo blog on GitHub Pages.',
    },
  ],
} as const;