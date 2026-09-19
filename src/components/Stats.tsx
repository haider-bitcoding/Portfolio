import { useEffect, useRef, useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import { Code2, Briefcase, Award, Globe } from 'lucide-react';

const stats = [
  { icon: Code2, label: 'Years Coding', value: 4, suffix: '+' },
  { icon: Briefcase, label: 'Projects Shipped', value: 10, suffix: '+' },
  { icon: Award, label: 'Technologies', value: 25, suffix: '+' },
  { icon: Globe, label: 'Languages Spoken', value: 4, suffix: '' },
];

function StatCard({ icon: Icon, label, value, suffix, delay }: {
  icon: typeof Code2;
  label: string;
  value: number;
  suffix: string;
  delay: number;
}) {
  const { count, ref } = useCounter(value, { duration: 2000, startOnView: true });

  return (
    <div
      className="text-center p-6 rounded-xl border border-border bg-surface-light/20 hover:border-primary/30 hover:bg-surface-light/40 transition-all duration-300 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary-light mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} />
      </div>
      <div className="text-4xl font-bold gradient-text mb-2">
        <span ref={ref}>{count}</span>{suffix}
      </div>
      <div className="text-sm text-text-muted">{label}</div>
    </div>
  );
}

export default function Stats() {
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
