import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import TechnicalSpecs from './components/TechnicalSpecs';
import DeveloperSDK from './components/DeveloperSDK';
import Trust from './components/Trust';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-primary text-text-primary font-serif selection:bg-vintage-grape-700 selection:text-stone-brown-50 relative">
      <Background3D />
      <main className="relative z-10">
        <Hero />
        <HowItWorks />
        <Features />
        <TechnicalSpecs />
        <DeveloperSDK />
        <UseCases />
        <Trust />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
