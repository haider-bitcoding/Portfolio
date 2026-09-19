import { useEffect, useRef, useState } from 'react';

const skillGroups = [
  {
    key: 'languages',
    title: 'Languages',
    items: [
      { name: 'Java', primary: true, level: 'Expert', years: 4 },
      { name: 'JavaScript', primary: true, level: 'Advanced', years: 3 },
      { name: 'SQL', primary: true, level: 'Expert', years: 4 },
      { name: 'Python (basic)' },
    ],
  },
  {
    key: 'backend',
    title: 'Backend',
    items: [
      { name: 'Spring Boot', primary: true, level: 'Expert', years: 4 },
      { name: 'REST APIs', primary: true, level: 'Expert', years: 4 },
      { name: 'JWT' },
      { name: 'OAuth2' },
      { name: 'Hibernate/JPA' },
      { name: 'Node.js' },
      { name: 'Express' },
    ],
  },
  {
    key: 'frontend',
    title: 'Frontend',
    items: [
      { name: 'React', primary: true, level: 'Advanced', years: 3 },
      { name: 'Next.js', primary: true, level: 'Advanced', years: 3 },
      { name: 'Vue.js' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    key: 'data',
    title: 'Data',
    items: [
      { name: 'PostgreSQL', primary: true, level: 'Expert', years: 4 },
      { name: 'MySQL' },
      { name: 'MongoDB' },
    ],
  },
  {
    key: 'tooling',
    title: 'Tooling',
    items: [
      { name: 'Git/GitHub', primary: true, level: 'Expert', years: 5 },
      { name: 'Docker' },
      { name: 'Vercel' },
      { name: 'Render' },
      { name: 'Swagger/OpenAPI' },
      { name: 'Flyway' },
      { name: 'LLM API Integration' },
    ],
  },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            What I build <span className="gradient-text">with</span>
          </h2>
          <p className="text-text-muted mb-10 max-w-xl">
            Technologies and tools I use to build production-ready systems.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, gi) => (
              <div
                key={group.key}
                className={`p-6 rounded-xl border border-border bg-surface-light/20 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${gi * 100}ms` }}
              >
                <h3 className="text-sm uppercase tracking-wider text-text-muted font-medium mb-4">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item.name}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        item.primary
                          ? 'bg-primary/15 text-primary-light border border-primary/20 hover:bg-primary/25'
                          : 'bg-surface-lighter/50 text-text-muted border border-border hover:text-text hover:border-text-muted'
                      }`}
                      title={item.level ? `${item.level} · ${item.years} years` : ''}
                    >
                      {item.name}
                      {item.level && (
                        <span className="ml-1 text-[10px] opacity-60">
                          {item.level}
                        </span>
                      )}
                    </span>
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
