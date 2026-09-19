import { useState, useEffect } from 'react';
import { ArrowDown, MapPin } from 'lucide-react';

export default function Hero() {
  const [terminalLines, setTerminalLines] = useState<number>(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setTerminalLines(1), 800),
      setTimeout(() => setTerminalLines(2), 1600),
      setTimeout(() => setTerminalLines(3), 2400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden grid-bg">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-light/50 text-sm text-text-muted">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Full-stack Developer
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Full-stack engineer who builds the backend most people skip past —{' '}
              <span className="gradient-text">auth, data models, the AI layer</span>
            </h1>

            <p className="text-xl text-text-muted">
              then ships the frontend on top of it.
            </p>

            <p className="text-text-muted leading-relaxed max-w-lg">
              Java, Spring Boot, and Next.js, end to end. Currently rebuilding my fundamentals from the ground up while shipping a production system, not another tutorial project.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={14} className="text-primary-light" />
                <span className="text-text-muted">Lahore, Pakistan</span>
              </div>
              <div className="text-sm">
                <span className="text-text-muted">stack: </span>
                <span className="text-text">Java · Spring Boot · Next.js</span>
              </div>
              <div className="text-sm">
                <span className="text-text-muted">open to: </span>
                <span className="text-text">junior + freelance</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="#work"
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
              >
                See my work
              </a>
              <a
                href="mailto:haiderali.dev.se@gmail.com"
                className="px-6 py-3 border border-border hover:border-primary/50 text-text rounded-lg font-medium transition-all duration-200 hover:bg-surface-light"
              >
                Email me
              </a>
            </div>
          </div>

          {/* Right - Terminal */}
          <div className="hidden lg:block">
            <div className="glass rounded-xl overflow-hidden glow">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-light/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-text-muted font-mono">haider@dev: ~</span>
              </div>
              {/* Terminal body */}
              <div className="p-5 font-mono text-sm space-y-3 min-h-[200px]">
                <div className="flex items-center gap-2">
                  <span className="text-accent">$</span>
                  <span className="text-text">whoami</span>
                </div>
                {terminalLines >= 1 && (
                  <div className="animate-fade-in-up text-text-muted pl-4">
                    Haider Ali — Backend-leaning full-stack engineer
                  </div>
                )}
                {terminalLines >= 2 && (
                  <div className="animate-fade-in-up">
                    <span className="text-accent">$</span>
                    <span className="text-text"> cat skills.txt</span>
                  </div>
                )}
                {terminalLines >= 3 && (
                  <div className="animate-fade-in-up text-text-muted pl-4">
                    # Java · Spring Boot · Next.js · PostgreSQL · Docker
                  </div>
                )}
                {terminalLines >= 3 && (
                  <div className="flex items-center gap-2 animate-fade-in-up pt-2">
                    <span className="text-accent">$</span>
                    <span className="cursor-blink">▊</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-text-muted hover:text-text transition-colors">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
