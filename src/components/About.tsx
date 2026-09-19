import { Code2, Globe, Layers, Rocket, GraduationCap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const tiles = [
  {
    id: 'intro',
    icon: Code2,
    label: 'Profile',
    heading: 'Software engineer building clean, reliable backend systems.',
    copy: 'I build things end to end — data modeling, REST APIs, auth, and the frontend that sits on top of it. Spring Boot and Java on the backend, React and Next.js on the frontend, backed by PostgreSQL or MongoDB.',
    span: 'lg:col-span-2',
  },
  {
    id: 'languages',
    icon: Globe,
    label: 'Languages',
    heading: 'English, Urdu, Punjabi, Mandarin (HSK 3)',
    copy: '',
    span: '',
  },
  {
    id: 'stack',
    icon: Layers,
    label: 'Primary stack',
    heading: 'Java, Spring Boot, Next.js',
    copy: '',
    span: '',
  },
  {
    id: 'scoop',
    icon: Rocket,
    label: 'The inside scoop',
    heading: 'Rebuilding fundamentals, shipping for real.',
    copy: 'Deliberately rebuilding my fundamentals (DSA, Spring internals, system design) while shipping a production-ready system from scratch — code I can defend line by line.',
    span: 'lg:col-span-2',
  },
  {
    id: 'education',
    icon: GraduationCap,
    label: 'Education',
    heading: 'Software engineering, Shenzhen',
    copy: 'A year in Shenzhen, China — advanced programming coursework, cross-cultural projects, HSK Level 3 Mandarin.',
    span: '',
  },
];

export default function About() {
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
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Who I <span className="gradient-text">am</span>
          </h2>
          <p className="text-text-muted mb-10 max-w-xl">
            A quick snapshot of who I am, what I build with, and where I'm headed.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tiles.map((tile, i) => (
              <div
                key={tile.id}
                className={`group p-6 rounded-xl border border-border bg-surface-light/30 hover:bg-surface-light/60 hover:border-primary/30 transition-all duration-300 ${tile.span} ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary-light">
                    <tile.icon size={18} />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-text-muted font-medium">
                    {tile.label}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-light transition-colors">
                  {tile.heading}
                </h3>
                {tile.copy && (
                  <p className="text-text-muted text-sm leading-relaxed">
                    {tile.copy}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
