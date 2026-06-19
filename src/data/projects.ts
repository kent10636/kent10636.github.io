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
    title: 'Personal Site',
    description:
      'Modern portfolio and blog built with Astro 6, Tailwind CSS 4, and deployed via GitHub Actions.',
    tags: ['Astro', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/kent10636/kent10636.github.io',
    demo: 'https://kent10636.github.io',
    featured: true,
    year: '2026',
  },
  {
    title: 'Project Alpha',
    description:
      'A full-stack application placeholder — replace with your own project details.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/kent10636',
    featured: true,
    year: '2025',
  },
  {
    title: 'CLI Toolkit',
    description:
      'Developer productivity tools for automating repetitive workflows.',
    tags: ['Rust', 'CLI'],
    github: 'https://github.com/kent10636',
    year: '2024',
  },
  {
    title: 'Data Pipeline',
    description:
      'ETL pipeline for processing and visualizing large datasets in real time.',
    tags: ['Python', 'Kafka', 'Docker'],
    year: '2023',
  },
];