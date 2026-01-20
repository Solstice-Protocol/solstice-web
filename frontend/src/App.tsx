import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-serif selection:bg-[#333] selection:text-white">
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <UseCases />
      </main>
      <Footer />
    </div>
  );
}

export default App;
