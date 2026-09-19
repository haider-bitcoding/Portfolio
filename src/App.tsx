import { ErrorBoundary } from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Currently from './components/Currently';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <ErrorBoundary>
      {/* Skip to content — keyboard accessibility */}
      <a href="#about" className="skip-link">
        Skip to content
      </a>

      <div className="min-h-screen bg-[#020617] text-text antialiased">
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Work />
          <Currently />
          <Education />
          <Contact />
        </main>
      </div>
    </ErrorBoundary>
  );
}
