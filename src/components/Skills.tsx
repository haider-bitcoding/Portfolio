import { useEffect, useRef, useState } from 'react';

const skillGroups = [
  {
    key: 'languages',
    title: 'Languages',
    items: [
      { name: 'Java', primary: true, level: 'Expert', years: 1, percentage: 95 },
      { name: 'JavaScript', primary: true, level: 'Advanced', years: 1, percentage: 85 },
      { name: 'SQL', primary: true, level: 'Expert', years: 1, percentage: 90 },
      { name: 'Python', percentage: 60 },
    ],
  },
  {
    key: 'backend',
    title: 'Backend',
    items: [
      { name: 'Spring Boot', primary: true, level: 'Expert', years: 1, percentage: 95 },
      { name: 'REST APIs', primary: true, level: 'Expert', years: 1, percentage: 95 },
      { name: 'JWT / OAuth2', percentage: 85 },
      { name: 'Hibernate/JPA', percentage: 80 },
      { name: 'Node.js / Express', percentage: 75 },
    ],
  },
  {
    key: 'frontend',
    title: 'Frontend',
    items: [
      { name: 'React', primary: true, level: 'Advanced', years: 1, percentage: 85 },
      { name: 'Next.js', primary: true, level: 'Advanced', years: 1, percentage: 85 },
      { name: 'Vue.js', percentage: 70 },
      { name: 'HTML5 / CSS3', percentage: 90 },
    ],
  },
  {
    key: 'data',
    title: 'Data',
    items: [
      { name: 'PostgreSQL', primary: true, level: 'Expert', years: 1, percentage: 90 },
      { name: 'MySQL', percentage: 80 },
      { name: 'MongoDB', percentage: 75 },
    ],
  },
  {
    key: 'tooling',
    title: 'Tooling',
    items: [
      { name: 'Git/GitHub', primary: true, level: 'Expert', years: 1, percentage: 95 },
      { name: 'Docker', percentage: 75 },
      { name: 'Vercel / Render', percentage: 80 },
      { name: 'Swagger/OpenAPI', percentage: 85 },
      { name: 'LLM API Integration', percentage: 70 },
    ],
  },
];

function SkillBar({ name, percentage, level, delay }: { name: string; percentage: number; level?: string; delay: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(percentage), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percentage, delay]);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-text group-hover:text-primary-light transition-colors">
          {name}
        </span>
        {level && (
          <span className="text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
            {level}
          </span>
        )}
      </div>
      <div className="h-2 bg-surface-lighter/50 rounded-full overflow-hidden border border-border/30">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative" aria-labelledby="skills-heading" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <header className="mb-10">
            <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold mb-2">
              What I build <span className="gradient-text">with</span>
            </h2>
            <p className="text-text-muted max-w-xl">
              Technologies and tools I use to build production-ready systems.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((group, gi) => (
              <div
                key={group.key}
                className={`p-6 rounded-xl border border-border bg-surface-light/20 hover:border-primary/30 transition-all duration-300 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${gi * 100}ms` }}
              >
                <h3 className="text-sm uppercase tracking-wider text-text-muted font-medium mb-5">
                  {group.title}
                </h3>
                <div className="space-y-4">
                  {group.items.map((item, i) => (
                    <SkillBar
                      key={item.name}
                      name={item.name}
                      percentage={item.percentage}
                      level={item.level}
                      delay={i * 100 + gi * 50}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
