import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Architecture from './components/Architecture';
import UseCases from './components/UseCases';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Architecture />
        <UseCases />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
