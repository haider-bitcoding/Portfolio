import { useEffect, useRef, useState } from 'react';
import { Wrench, Target } from 'lucide-react';

export default function Currently() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="currently" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative p-8 sm:p-12 rounded-2xl border border-border bg-surface-light/20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-[60px]" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary-light">
                  <Wrench size={22} />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Currently <span className="gradient-text">building</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-1.5 rounded-lg bg-accent/10 text-accent shrink-0">
                    <Target size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What I'm working on</h3>
                    <p className="text-text-muted leading-relaxed">
                      Currently rebuilding core fundamentals (DSA, Spring internals, system design) while building a production-ready helpdesk/support-ticket system from scratch — no AI-agent-generated code, written and defended line by line.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-surface-lighter/30 border border-border/50">
                    <p className="text-xs uppercase tracking-wider text-text-muted mb-1">Target Role</p>
                    <p className="font-medium">Full Stack Engineer</p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-lighter/30 border border-border/50">
                    <p className="text-xs uppercase tracking-wider text-text-muted mb-1">Level</p>
                    <p className="font-medium text-sm">Intermediate to Senior — rebuilding fundamentals while shipping production systems</p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-lighter/30 border border-border/50">
                    <p className="text-xs uppercase tracking-wider text-text-muted mb-1">Availability</p>
                    <p className="font-medium text-sm">Junior/graduate roles · freelance projects</p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-lighter/30 border border-border/50">
                    <p className="text-xs uppercase tracking-wider text-text-muted mb-1">Focus</p>
                    <p className="font-medium text-sm">Backend systems, full-stack apps, AI integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
