import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: 'typescript' | 'javascript' | 'json' | 'bash' | 'shell';
  showLineNumbers?: boolean;
  highlightLines?: number[];
  filename?: string;
}

export function CodeBlock({
  code,
  language,
  showLineNumbers = true,
  highlightLines = [],
  filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      // Fallback for older browsers
      try {
        const textarea = document.createElement('textarea');
        textarea.value = code;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackError) {
        console.error('Failed to copy code:', fallbackError);
      }
    }
  };

  return (
    <div className="relative group my-6 overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md shadow-xl">
      {filename && (
        <div className="px-4 py-3 text-xs font-medium text-text-muted border-b border-white/5 bg-white/[0.02]">
          {filename}
        </div>
      )}
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/5 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-1 focus:ring-vintage-grape-400"
          aria-label={copied ? 'Copied to clipboard' : 'Copy code to clipboard'}
          type="button"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Copy className="w-4 h-4 text-text-muted" />
          )}
        </button>
        <div className="font-mono text-sm leading-relaxed scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            showLineNumbers={showLineNumbers}
            wrapLines={true}
            lineNumberStyle={{ minWidth: '3em', paddingRight: '1em', color: '#6e6e6e', textAlign: 'right' }}
            lineProps={(lineNumber) => {
              const style: React.CSSProperties = { display: 'block' };
              if (highlightLines.includes(lineNumber)) {
                style.backgroundColor = 'rgba(119, 101, 154, 0.15)'; // Vintage Grape
                style.width = '100%';
              }
              return { style };
            }}
            customStyle={{
              margin: 0,
              padding: '1.5rem',
              fontSize: '0.875rem',
              lineHeight: '1.6',
              background: 'transparent', // Force transparency
              backgroundColor: 'transparent !important', // Double force
              fontFamily: '"JetBrains Mono", monospace'
            }}
            codeTagProps={{
              style: {
                backgroundColor: 'transparent',
              }
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
