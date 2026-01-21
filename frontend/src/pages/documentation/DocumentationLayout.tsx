import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DocumentationSidebar, MobileMenuButton } from '../../components/documentation/DocumentationSidebar';

/**
 * DocumentationLayout Component
 * 
 * Provides the main layout structure for all documentation pages with sidebar and content area.
 * 
 * Features:
 * - Fixed sidebar on desktop (≥1024px)
 * - Collapsible hamburger menu on mobile (<1024px)
 * - Consistent header across all documentation pages
 * - Uses React Router Outlet for nested routes
 * 
 * Requirements: 1.3, 2.3
 */
export function DocumentationLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-primary text-text-primary font-serif selection:bg-vintage-grape-700 selection:text-stone-brown-50">
      {/* Mobile Menu Button */}
      <MobileMenuButton onClick={handleOpenSidebar} />

      {/* Layout Container */}
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar Navigation */}
        <DocumentationSidebar 
          isOpen={isSidebarOpen} 
          onClose={handleCloseSidebar} 
        />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto lg:ml-0 relative">
          
          {/* Background Elements (Subtle) */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
             <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-vintage-grape-800/30 blur-[100px]" />
             <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-stone-brown-800/20 blur-[100px]" />
          </div>

          {/* Consistent Header */}
          <header className="sticky top-0 z-20 bg-primary/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <h1 className="text-xl md:text-2xl font-normal tracking-tight text-text-primary">
                  Solstice <span className="text-text-secondary italic">Docs</span>
                </h1>
                <div className="flex items-center gap-6">
                  <a
                    href="https://github.com/solstice-protocol/sdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-text-primary transition-colors tracking-wide uppercase"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.npmjs.com/package/@solsticeprotocol/sdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-text-primary transition-colors tracking-wide uppercase"
                  >
                    NPM
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content (Nested Routes) */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Outlet />
          </div>

          {/* Footer */}
          <footer className="relative z-10 border-t border-white/5 mt-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-text-muted">
                <p className="font-light tracking-wide">© 2024 Solstice Protocol.</p>
                <div className="flex gap-6 uppercase tracking-widest text-xs">
                  <a
                    href="https://solsticeprotocol.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-text-primary transition-colors"
                  >
                    Website
                  </a>
                  <a
                    href="https://github.com/solstice-protocol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-text-primary transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://discord.gg/solstice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-text-primary transition-colors"
                  >
                    Discord
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
