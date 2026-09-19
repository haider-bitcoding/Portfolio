import { useInView } from '../hooks/useAnimations';

const techStack = [
  'Java', 'Spring Boot', 'React', 'Next.js', 'PostgreSQL', 'MongoDB',
  'TypeScript', 'JavaScript', 'Docker', 'Git', 'REST APIs', 'JWT',
  'OAuth2', 'Hibernate', 'Node.js', 'Express', 'Redis', 'GraphQL'
];

export default function TechMarquee() {
  const [ref, isVisible] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden py-8 border-y border-border bg-surface-light/20 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10" />

      <div className="flex animate-marquee">
        {[...techStack, ...techStack].map((tech, i) => (
          <div
            key={`${tech}-${i}`}
            className="flex-shrink-0 mx-8 px-6 py-3 rounded-full border border-border bg-surface-lighter/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
          >
            <span className="text-text-muted group-hover:text-primary-light transition-colors whitespace-nowrap">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
