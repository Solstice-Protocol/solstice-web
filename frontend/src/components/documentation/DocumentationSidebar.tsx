import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '../../data/documentation/navigationItems';

interface DocumentationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * DocumentationSidebar Component
 * 
 * Provides navigation menu with search functionality and version information.
 * Responsive design: fixed sidebar on desktop (≥1024px), collapsible on mobile (<1024px).
 */
export function DocumentationSidebar({ isOpen, onClose }: DocumentationSidebarProps) {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  // Check if current screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (isMobile) {
      onClose();
    }
  }, [location.pathname, isMobile, onClose]);

  // Determine if a navigation item is active
  const isActive = (path: string) => {
    if (path === '/documentation') {
      return location.pathname === '/documentation';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-primary/20 backdrop-blur-xl border-r border-white/5 z-50
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:z-auto
          ${isMobile && !isOpen ? '-translate-x-full' : 'translate-x-0'}
        `}
        aria-label="Documentation navigation"
      >
        <div className="flex flex-col h-full font-serif">
          {/* Header */}
          <div className="flex items-center justify-between p-8 pb-4">
            <div>
              <Link to="/" className="block">
                <h2 className="text-sm font-light tracking-widest text-text-primary uppercase opacity-90 hover:opacity-100 transition-opacity">Solstice Protocol</h2>
              </Link>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] text-text-muted uppercase tracking-widest font-light">Docs v1.1.1</span>
              </div>
            </div>
            {isMobile && (
              <button
                onClick={onClose}
                className="lg:hidden text-text-muted hover:text-text-primary transition-colors"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Navigation Links - Centered Vertically */}
          <nav className="flex-1 flex flex-col justify-center overflow-y-auto px-8 py-4 custom-scrollbar">
            <ul className="space-y-5">
              {navigationItems.map((item) => {
                const active = isActive(item.path);

                return (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      className={`
                        block text-sm transition-all duration-500 relative group
                        ${active
                          ? 'text-text-primary font-medium pl-4'
                          : 'text-text-muted hover:text-text-primary pl-0 hover:pl-2'
                        }
                      `}
                      aria-current={active ? 'page' : undefined}
                    >
                      {/* Active Indicator Line (Scanner Style) */}
                      {active && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-4 bg-vintage-grape-400/80 shadow-[0_0_10px_rgba(119,101,154,0.6)]" />
                      )}

                      <span className="tracking-wide font-light">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer - Only Copyright */}
          <div className="p-8 pt-4">
            <div className="text-[10px] text-text-muted space-y-2 opacity-30 font-light tracking-widest uppercase">
              <p>© 2024</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

/**
 * MobileMenuButton Component
 * 
 * Hamburger menu button for mobile navigation.
 * Only visible on mobile screens (<1024px).
 */
export function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden fixed top-4 left-4 z-30 p-2 bg-secondary/80 backdrop-blur-md border border-white/10 rounded-lg text-text-primary hover:bg-white/5 transition-colors"
      aria-label="Open navigation menu"
    >
      <Menu className="w-6 h-6" />
    </button>
  );
}
