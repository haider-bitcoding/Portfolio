import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const items = [
  {
    name: 'Shenzhen University of Information and Technology',
    sub: 'Associate Engineering, DAE Software Engineering (Joint Program) — Shenzhen, China · Avg. score 93.6%',
    date: '2025 – 2026',
    icon: GraduationCap,
  },
  {
    name: 'Government College of Technology',
    sub: 'Associate Engineering, DAE Software Engineering (Joint Program) — Allama Iqbal Town, Lahore, Pakistan',
    date: '2023 – 2026',
    icon: GraduationCap,
  },
  {
    name: 'International study period — Shenzhen, China',
    sub: 'Core software engineering coursework, advanced programming concepts, and cross-cultural collaboration on academic projects.',
    date: 'Nov 2025 – Jun 2026',
    icon: Calendar,
  },
  {
    name: 'HSK Level 3 — Chinese Proficiency Test',
    sub: 'Score: 289 / 300',
    date: '2025',
    icon: Award,
  },
];

export default function Education() {
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
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Education & <span className="gradient-text">experience</span>
          </h2>
          <p className="text-text-muted mb-10 max-w-xl">
            Academic background and certifications.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block" />

            <div className="space-y-6">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex gap-5 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden sm:flex items-start pt-1.5 shrink-0">
                    <div className="w-10 h-10 rounded-full border-2 border-primary/30 bg-surface flex items-center justify-center">
                      <item.icon size={16} className="text-primary-light" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 p-5 rounded-xl border border-border bg-surface-light/20 hover:bg-surface-light/40 hover:border-primary/20 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <span className="text-xs text-text-muted font-mono bg-surface-lighter/50 px-2 py-1 rounded shrink-0">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
