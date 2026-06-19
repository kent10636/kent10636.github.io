import { useState } from 'react';
import type { Project } from '../data/projects';

type Props = {
  projects: Project[];
};

export default function ProjectFilter({ projects }: Props) {
  const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort();
  const [active, setActive] = useState<string | null>(null);

  const filtered = active
    ? projects.filter((p) => p.tags.includes(active))
    : projects;

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActive(null)}
          className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
            active === null
              ? 'bg-[var(--color-accent)] text-white'
              : 'border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              active === tag
                ? 'bg-[var(--color-accent)] text-white'
                : 'border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((project) => (
          <article
            key={project.title}
            className="card-hover flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-semibold">{project.title}</h3>
              <span className="text-xs text-[var(--color-text-muted)]">{project.year}</span>
            </div>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
              {project.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-[var(--color-surface-muted)] px-2 py-0.5 text-xs font-medium text-[var(--color-text-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3 text-sm">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener"
                  className="font-medium text-[var(--color-accent)] hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener"
                  className="font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
                >
                  Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}