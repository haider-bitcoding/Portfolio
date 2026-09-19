import { useRef, useEffect, useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  intensity?: number;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  intensity = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: Event) => {
      if (!ref.current) return;
      const mouseEvent = e as MouseEvent;
      const rect = ref.current.getBoundingClientRect();
      const x = (mouseEvent.clientX - rect.left - rect.width / 2) * intensity;
      const y = (mouseEvent.clientY - rect.top - rect.height / 2) * intensity;
      setPosition({ x, y });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    const el = ref.current;
    if (el) {
      el.addEventListener('mousemove', handleMouseMove as EventListener);
      el.addEventListener('mouseleave', handleMouseLeave as EventListener);
    }

    return () => {
      if (el) {
        el.removeEventListener('mousemove', handleMouseMove as EventListener);
        el.removeEventListener('mouseleave', handleMouseLeave as EventListener);
      }
    };
  }, [intensity]);

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: 'transform 0.2s ease-out',
  };

  if (href) {
    return (
      <a ref={ref as React.RefObject<HTMLAnchorElement>} href={href} className={className} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button ref={ref as React.RefObject<HTMLButtonElement>} onClick={onClick} className={className} style={style}>
      {children}
    </button>
  );
}
