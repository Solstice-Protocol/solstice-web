import { useEffect, useState } from 'react';

export interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 1.0,
      }
    );

    // Observe all heading elements
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Update URL without triggering navigation
      window.history.pushState(null, '', `#${id}`);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav
      className="sticky top-24 hidden lg:block w-64 shrink-0"
      aria-label="Table of contents"
    >
      <div className="text-sm">
        <h2 className="font-semibold text-white mb-4">On this page</h2>
        <ul className="space-y-2">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            const paddingLeft = `${(heading.level - 1) * 0.75}rem`;

            return (
              <li key={heading.id} style={{ paddingLeft }}>
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleClick(e, heading.id)}
                  className={`block py-1 border-l-2 pl-3 transition-colors ${
                    isActive
                      ? 'border-blue-500 text-blue-400 font-medium'
                      : 'border-gray-700 text-gray-400 hover:text-gray-200 hover:border-gray-500'
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
