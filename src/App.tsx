import { ThemeProvider } from './context/ThemeContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Work from './components/Work';
import Currently from './components/Currently';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        {/* Skip to content — keyboard accessibility */}
        <a href="#about" className="skip-link">
          Skip to content
        </a>

        {/* Scroll progress indicator */}
        <ScrollProgress />

        <div className="min-h-screen bg-[var(--bg-primary)] text-text antialiased">
          <Navbar />
          <main id="main-content">
            <Hero />
            <Stats />
            <About />
            <Skills />
            <Work />
            <Currently />
            <Education />
            <Contact />
          </main>
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
