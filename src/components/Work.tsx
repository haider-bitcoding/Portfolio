import { ExternalLink, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    id: 'climbora',
    name: 'Climbora',
    meta: 'Academic productivity SaaS',
    metrics: 'Handled 10K+ daily users, reduced auth latency by 40%',
    description: 'Full-stack academic productivity platform with a self-linking workspace graph, a proactive AI agent that sends scheduled nudges, and an XP/gamification layer — built on a custom design system with dark mode.',
    tags: ['Spring Boot 3.5', 'Java 17', 'PostgreSQL', 'JWT', 'OAuth2', 'Next.js'],
    url: 'https://climbora.vercel.app',
    live: true,
    featured: true,
  },
  {
    id: 'tevta-insurance',
    name: 'TEVTA Insurance Management System',
    meta: 'Employee insurance system',
    metrics: 'Handled 500+ employee records, automated bulk import/export reducing processing time by 70%',
    description: 'A private full-stack management system built for TEVTA to handle employee insurance records at scale — Excel-based bulk import/export, secure auth, and centralized data storage.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Mongoose', 'JWT'],
    live: true,
  },
  {
    id: 'professor-portfolio',
    name: 'Professor Portfolio Website',
    meta: 'Academic portfolio site',
    metrics: 'Showcased 20+ publications, 15 teaching courses, and awards archive',
    description: 'Responsive portfolio site for a university professor, showcasing research output, publications, teaching activity, and awards.',
    tags: ['Next.js', 'React', 'HTML5', 'CSS3'],
    url: 'https://muhammad-sadiq.com',
    live: true,
  },
  {
    id: 'midtrust-lab',
    name: 'MIDTrust Lab Website',
    meta: 'University research lab site',
    metrics: 'Showcased 15+ research projects across AI, computer vision, and blockchain domains',
    description: 'Site built for a university research lab working on multimodal AI, computer vision, LLMs, trustworthy AI, cybersecurity, and blockchain research.',
    tags: ['React', 'JavaScript', 'CSS'],
    url: 'https://papayawhip-rat-266470.hostingersite.com',
    live: true,
  },
  {
    id: 'diwan-e-khaas',
    name: 'Diwan-e-Khaas Ordering Mini Program',
    meta: 'WeChat Mini Program',
    description: 'Mobile-first restaurant ordering mini program for WeChat — browse menus and place orders without leaving the chat app.',
    tags: ['WeChat Mini Program', 'JavaScript', 'WXML', 'WXSS'],
    live: false,
  },
];

export default function Work() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="py-24 relative" aria-labelledby="work-heading" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <header className="mb-10">
            <h2 id="work-heading" className="text-3xl sm:text-4xl font-bold mb-2">
              Selected <span className="gradient-text">work</span>
            </h2>
            <p className="text-text-muted max-w-xl">
              Projects I've built — from production SaaS platforms to client websites.
            </p>
          </header>

          <div className="space-y-6">
            {projects.map((project, i) => (
              <article
                key={project.id}
                className={`group p-6 sm:p-8 rounded-xl border border-border bg-surface-light/20 hover:bg-surface-light/40 hover:border-primary/30 transition-all duration-300 ${
                  project.featured ? 'ring-1 ring-primary/20' : ''
                } ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 100}ms` }}
                aria-label={`Project: ${project.name}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="text-xl font-bold group-hover:text-primary-light transition-colors">
                        {project.name}
                      </h3>
                      {project.featured && (
                        <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-primary/15 text-primary-light rounded-full font-medium">
                          Featured
                        </span>
                      )}
                      {!project.live && (
                        <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-surface-lighter text-text-muted rounded-full font-medium">
                          Private
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-text-muted">{project.meta}</p>
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-primary-light hover:text-primary-light/80 transition-colors shrink-0 focus-visible:outline-primary-light"
                      aria-label={`View live site for ${project.name} (opens in new tab)`}
                    >
                      <ExternalLink size={14} aria-hidden="true" />
                      Live
                    </a>
                  )}
                </div>

                {project.metrics && (
                  <div className="flex items-start gap-2 mb-3 text-sm">
                    <TrendingUp size={14} className="text-accent mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-accent/80">{project.metrics}</span>
                  </div>
                )}

                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2" aria-label={`Technologies used in ${project.name}`}>
                  {project.tags.map(tag => (
                    <li key={tag}>
                      <span className="px-2.5 py-1 text-xs rounded-md bg-surface-lighter/50 text-text-muted border border-border">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
