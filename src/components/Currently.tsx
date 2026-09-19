import { useEffect, useRef, useState } from 'react';
import { Wrench, Target } from 'lucide-react';

export default function Currently() {
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
    <section id="currently" className="py-24 relative" aria-labelledby="currently-heading" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative p-8 sm:p-12 rounded-2xl border border-border bg-surface-light/20 overflow-hidden hover:border-primary/20 transition-all duration-500">
            {/* Background decoration — decorative only */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] animate-pulse" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />

            <div className="relative z-10">
              <header className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary-light animate-float" aria-hidden="true">
                  <Wrench size={22} />
                </div>
                <h2 id="currently-heading" className="text-3xl sm:text-4xl font-bold">
                  Currently <span className="gradient-text">building</span>
                </h2>
              </header>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-1.5 rounded-lg bg-accent/10 text-accent shrink-0" aria-hidden="true">
                    <Target size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What I'm working on</h3>
                    <p className="text-text-muted leading-relaxed">
                      As an Associate Software Engineer, I'm rebuilding core fundamentals (DSA, Spring internals, system design) while building a production-ready helpdesk/support-ticket system from scratch — no AI-agent-generated code, written and defended line by line.
                    </p>
                  </div>
                </div>

                <dl className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-surface-lighter/30 border border-border/50 hover:border-primary/30 hover:bg-surface-lighter/50 transition-all duration-300">
                    <dt className="text-xs uppercase tracking-wider text-text-muted mb-1">Target Role</dt>
                    <dd className="font-medium">Full Stack Engineer</dd>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-lighter/30 border border-border/50 hover:border-primary/30 hover:bg-surface-lighter/50 transition-all duration-300">
                    <dt className="text-xs uppercase tracking-wider text-text-muted mb-1">Level</dt>
                    <dd className="font-medium text-sm">Associate → Intermediate — rebuilding fundamentals while shipping production systems</dd>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-lighter/30 border border-border/50 hover:border-primary/30 hover:bg-surface-lighter/50 transition-all duration-300">
                    <dt className="text-xs uppercase tracking-wider text-text-muted mb-1">Availability</dt>
                    <dd className="font-medium text-sm">Junior/graduate roles · freelance projects</dd>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-lighter/30 border border-border/50 hover:border-primary/30 hover:bg-surface-lighter/50 transition-all duration-300">
                    <dt className="text-xs uppercase tracking-wider text-text-muted mb-1">Focus</dt>
                    <dd className="font-medium text-sm">Backend systems, full-stack apps, AI integration</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
