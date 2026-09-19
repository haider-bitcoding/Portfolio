import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Contact() {
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
    <section id="contact" className="py-24 relative" aria-labelledby="contact-heading" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative p-8 sm:p-12 rounded-2xl border border-border bg-surface-light/20 overflow-hidden">
            {/* Background decoration — decorative only */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-pulse" aria-hidden="true" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />

            <div className="relative z-10">
              <header className="mb-8">
                <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold mb-3">
                  Get in <span className="gradient-text">touch</span>
                </h2>
                <p className="text-text-muted max-w-lg leading-relaxed">
                  As an Associate Software Engineer, I'm open to software engineer roles and freelance backend or full-stack work. Reach out directly — I usually reply within a day.
                </p>
              </header>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <a
                  href="mailto:haiderali.dev.se@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface-lighter/30 hover:bg-surface-lighter/60 hover:border-primary/30 hover:scale-105 transition-all duration-200 group focus-visible:outline-primary-light"
                  aria-label="Send email to haiderali.dev.se@gmail.com"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary-light group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300" aria-hidden="true">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Email</p>
                    <p className="text-sm font-medium">haiderali.dev.se@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+923044122641"
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface-lighter/30 hover:bg-surface-lighter/60 hover:border-primary/30 hover:scale-105 transition-all duration-200 group focus-visible:outline-primary-light"
                  aria-label="Call +92-304-4122641"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary-light group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300" aria-hidden="true">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Phone</p>
                    <p className="text-sm font-medium">+92-304-4122641</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface-lighter/30">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary-light" aria-hidden="true">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Location</p>
                    <p className="text-sm font-medium">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <nav aria-label="Social media links" className="flex flex-wrap items-center gap-4">
                <MagneticButton
                  href="https://www.linkedin.com/in/ihaiderr"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-surface-lighter/30 hover:bg-primary/10 hover:border-primary/30 text-text-muted hover:text-primary-light transition-all duration-200 focus-visible:outline-primary-light"
                >
                  <Linkedin size={16} aria-hidden="true" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </MagneticButton>
                <MagneticButton
                  href="https://www.instagram.com/ihaiderr"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-surface-lighter/30 hover:bg-primary/10 hover:border-primary/30 text-text-muted hover:text-primary-light transition-all duration-200 focus-visible:outline-primary-light"
                >
                  <Instagram size={16} aria-hidden="true" />
                  <span className="text-sm font-medium">Instagram</span>
                </MagneticButton>
                <MagneticButton
                  href="mailto:haiderali.dev.se@gmail.com"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-primary-light"
                >
                  <Send size={16} aria-hidden="true" />
                  <span className="text-sm">Send a message</span>
                </MagneticButton>
              </nav>

              {/* Status */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
                  <p className="text-sm text-text-muted">
                    Status: <span className="text-text font-medium">open to software roles & freelance work</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 text-center">
        <p className="text-text-muted text-sm">
          © {new Date().getFullYear()} Haider Ali. Built with React & Tailwind CSS.
        </p>
      </footer>
    </section>
  );
}
