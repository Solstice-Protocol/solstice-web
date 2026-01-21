import { ExternalLink as ExternalLinkIcon } from 'lucide-react';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  showIcon?: boolean;
  className?: string;
}

export function ExternalLink({
  href,
  children,
  showIcon = true,
  className = '',
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 text-vintage-grape-300 hover:text-vintage-grape-200 transition-colors ${className}`}
    >
      {children}
      {showIcon && <ExternalLinkIcon className="w-4 h-4" aria-hidden="true" />}
    </a>
  );
}
