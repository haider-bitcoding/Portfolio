import { useState, useEffect } from "react";
import { ArrowDown, MapPin, Github, Linkedin } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useMouseParallax } from "../hooks/useAnimations";

export default function Hero() {
  const [terminalLines, setTerminalLines] = useState<number>(0);
  const [imageFailed, setImageFailed] = useState(false);
  const mousePosition = useMouseParallax(20);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setTerminalLines(3);
      return;
    }

    const timers = [
      setTimeout(() => setTerminalLines(1), 800),
      setTimeout(() => setTerminalLines(2), 1600),
      setTimeout(() => setTerminalLines(3), 2400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
            animationDelay: "1s",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 grid-bg opacity-30"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            {/* Profile image - mobile */}
            <div className="lg:hidden flex justify-center mb-6">
              <div className="relative animate-float">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 animate-pulse-glow">
                  {imageFailed ? (
                    <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-white">
                      HA
                    </div>
                  ) : (
                    <img
                      src={`${import.meta.env.BASE_URL}images/pp.jpg`}
                      alt="Haider Ali"
                      className="w-full h-full object-cover"
                      onError={() => setImageFailed(true)}
                    />
                  )}
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-surface animate-pulse" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-light/50 text-sm text-text-muted backdrop-blur-sm animate-fade-in-up">
              <span
                className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                aria-hidden="true"
              />
              Associate Software Engineer
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Associate Software Engineer crafting{" "}
              <span className="gradient-text">
                production-grade backend systems
              </span>{" "}
              — then shipping the frontend on top.
            </h1>

            <p
              className="text-lg text-text-muted leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              I specialize in building robust APIs, authentication systems, and
              data models with Java & Spring Boot, then delivering polished
              full-stack applications with React & Next.js. Currently rebuilding
              my fundamentals while shipping real production code.
            </p>

            {/* Stats */}
            <dl
              className="flex flex-wrap gap-6 pt-2 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-2 text-sm">
                <dt className="sr-only">Location</dt>
                <MapPin
                  size={14}
                  className="text-primary-light"
                  aria-hidden="true"
                />
                <dd>Lahore, Pakistan</dd>
              </div>
              <div className="text-sm">
                <dt className="sr-only">Tech stack</dt>
                <dd>
                  <span className="text-text-muted">Stack: </span>
                  <span className="text-text">
                    MERN, Java, Spring Boot, Next.js
                  </span>
                </dd>
              </div>
              <div className="text-sm">
                <dt className="sr-only">Availability</dt>
                <dd>
                  <span className="text-text-muted">Open to: </span>
                  <span className="text-text">Software Roles + freelance</span>
                </dd>
              </div>
            </dl>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 pt-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <MagneticButton
                href="#work"
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-primary-light"
              >
                See my work
              </MagneticButton>
              <MagneticButton
                href="mailto:haiderali.dev.se@gmail.com"
                className="px-6 py-3 border border-border hover:border-primary/50 text-text rounded-lg font-medium transition-all duration-200 hover:bg-surface-light focus-visible:outline-primary-light"
              >
                Email me
              </MagneticButton>
            </div>

            {/* Social links */}
            <div
              className="flex gap-4 pt-2 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href="https://www.linkedin.com/in/ihaiderr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-primary/50 text-text-muted hover:text-primary-light transition-all duration-200 hover:-translate-y-0.5"
                aria-label="LinkedIn (opens in new tab)"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/ihaiderr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-primary/50 text-text-muted hover:text-primary-light transition-all duration-200 hover:-translate-y-0.5"
                aria-label="GitHub (opens in new tab)"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Right - Terminal + Profile */}
          <div className="hidden lg:block space-y-6">
            {/* Profile image */}
            <div className="flex justify-center">
              <div className="relative animate-float">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30 animate-pulse-glow">
                  {imageFailed ? (
                    <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl font-bold text-white">
                      HA
                    </div>
                  ) : (
                    <img
                      src={`${import.meta.env.BASE_URL}images/pp.jpg`}
                      alt="Haider Ali"
                      className="w-full h-full object-cover"
                      onError={() => setImageFailed(true)}
                    />
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-surface animate-pulse" />
              </div>
            </div>

            {/* Terminal */}
            <div
              className="glass rounded-xl overflow-hidden glow"
              aria-hidden="true"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-light/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-text-muted font-mono">
                  haider@dev: ~
                </span>
              </div>
              <div className="p-5 font-mono text-sm space-y-3 min-h-[200px]">
                <div className="flex items-center gap-2">
                  <span className="text-accent">$</span>
                  <span className="text-text">whoami</span>
                </div>
                {terminalLines >= 1 && (
                  <div className="animate-fade-in-up text-text-muted pl-4">
                    Haider Ali — Associate Software Engineer
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
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-hidden="true"
        >
          <a
            href="#about"
            className="text-text-muted hover:text-text transition-colors"
            tabIndex={-1}
            aria-label="Scroll to about section"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
