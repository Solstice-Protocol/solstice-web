import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import { WalletContextProvider } from './contexts/WalletProvider';

import Lenis from 'lenis';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import UseCases from './components/UseCases';
import TechnicalSpecs from './components/TechnicalSpecs';
import Footer from './components/Footer';
import DeveloperSDK from './components/DeveloperSDK';
import FAQ from './components/FAQ';
import { DocumentationLayout } from './pages/documentation/DocumentationLayout';
import { OverviewPage } from './pages/documentation/OverviewPage';
import { InstallationPage } from './pages/documentation/InstallationPage';
import { QuickStartPage } from './pages/documentation/QuickStartPage';
import { ApiReferencePage } from './pages/documentation/ApiReferencePage';
import { IntegrationGuidePage } from './pages/documentation/IntegrationGuidePage';
import { ExamplesPage } from './pages/documentation/ExamplesPage';
import { ConfigurationPage } from './pages/documentation/ConfigurationPage';
import { ErrorHandlingPage } from './pages/documentation/ErrorHandlingPage';
import { SecurityPage } from './pages/documentation/SecurityPage';
import { PerformancePage } from './pages/documentation/PerformancePage';
import Navigation from './components/Navigation';
import ScrollLogo from './components/ScrollLogo';
import './index.css';

function HomePage() {
  // Initialize Lenis smooth scroll with heavy settings
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,        // Slower, heavier animation
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,  // Reduce scroll speed for heavier feel
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-primary text-text-primary font-serif selection:bg-vintage-grape-700 selection:text-stone-brown-50 relative">
      <ScrollLogo />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <HowItWorks />
        <Features />
        <TechnicalSpecs />
        <DeveloperSDK />
        <UseCases />
        <FAQ />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <WalletContextProvider>
      <BrowserRouter>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />

          {/* Documentation Routes */}
          <Route path="/documentation" element={<DocumentationLayout />}>
            <Route index element={<OverviewPage />} />
            <Route path="installation" element={<InstallationPage />} />
            <Route path="quick-start" element={<QuickStartPage />} />
            <Route path="api-reference" element={<ApiReferencePage />} />
            <Route path="integration-guide" element={<IntegrationGuidePage />} />
            <Route path="examples" element={<ExamplesPage />} />
            <Route path="configuration" element={<ConfigurationPage />} />
            <Route path="error-handling" element={<ErrorHandlingPage />} />
            <Route path="security" element={<SecurityPage />} />
            <Route path="performance" element={<PerformancePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WalletContextProvider>
  );
}

export default App;

