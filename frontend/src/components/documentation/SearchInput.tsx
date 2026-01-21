import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Fuse, { type FuseResultMatch } from 'fuse.js';
import { Search, X } from 'lucide-react';
import { searchIndex, type SearchIndexEntry } from '../../data/documentation/searchIndex';

interface SearchInputProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

interface SearchResult {
  item: SearchIndexEntry;
  matches?: readonly FuseResultMatch[];
  score?: number;
}

/**
 * SearchInput Component
 * 
 * Provides fuzzy search functionality across documentation content using Fuse.js.
 * Displays search results in a dropdown overlay with highlighting and navigation.
 */
export function SearchInput({ onSearch, placeholder = 'Search documentation...' }: SearchInputProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Configure Fuse.js for fuzzy search
  const fuse = useRef(
    new Fuse(searchIndex, {
      keys: [
        { name: 'title', weight: 2 },
        { name: 'headings', weight: 1.5 },
        { name: 'content', weight: 1 }
      ],
      threshold: 0.3,
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 2,
      ignoreLocation: true,
    })
  );

  // Perform search when query changes
  useEffect(() => {
    if (query.trim().length >= 2) {
      const searchResults = fuse.current.search(query);
      setResults(searchResults.slice(0, 8)); // Limit to 8 results
      setIsOpen(true);
      setSelectedIndex(0);
      onSearch?.(query);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, onSearch]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % results.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (results[selectedIndex]) {
          handleResultClick(results[selectedIndex].item);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  // Handle result click
  const handleResultClick = (item: SearchIndexEntry) => {
    navigate(item.path);
    setQuery('');
    setIsOpen(false);
    inputRef.current?.blur();
  };

  // Clear search
  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  // Highlight matching text in results
  const highlightMatches = (text: string, matches?: readonly FuseResultMatch[]): React.ReactNode => {
    if (!matches || matches.length === 0) {
      return text;
    }

    // Get the first match for this text
    const match = matches.find(m => {
      const value = typeof m.value === 'string' ? m.value : '';
      return value.includes(text.substring(0, 50));
    });

    if (!match || !match.indices || match.indices.length === 0) {
      return text;
    }

    const indices = match.indices[0];
    const [start, end] = indices;
    
    // Create highlighted text
    const before = text.substring(0, start);
    const highlighted = text.substring(start, end + 1);
    const after = text.substring(end + 1);

    return (
      <>
        {before}
        <mark className="bg-purple-500/30 text-purple-200 font-semibold px-0.5 rounded">{highlighted}</mark>
        {after}
      </>
    );
  };

  // Get excerpt from content
  const getExcerpt = (content: string, maxLength: number = 100): string => {
    const cleaned = content.trim().replace(/\s+/g, ' ');
    if (cleaned.length <= maxLength) return cleaned;
    return cleaned.substring(0, maxLength) + '...';
  };

  return (
    <div ref={searchRef} className="relative w-full">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          aria-label="Search documentation"
          aria-expanded={isOpen}
          aria-controls="search-results"
          aria-activedescendant={isOpen && results[selectedIndex] ? `result-${selectedIndex}` : undefined}
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-100 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div
          id="search-results"
          className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl max-h-96 overflow-y-auto z-50"
          role="listbox"
        >
          {results.map((result, index) => (
            <button
              key={result.item.pageId}
              id={`result-${index}`}
              onClick={() => handleResultClick(result.item)}
              className={`w-full text-left px-4 py-3 border-b border-gray-700 last:border-b-0 transition-all ${
                index === selectedIndex
                  ? 'bg-purple-900/40 border-l-2 border-l-purple-400'
                  : 'hover:bg-gray-700/50'
              }`}
              role="option"
              aria-selected={index === selectedIndex}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-100 mb-1">
                    {highlightMatches(result.item.title, result.matches)}
                  </div>
                  <div className="text-sm text-gray-300 line-clamp-2">
                    {getExcerpt(result.item.content)}
                  </div>
                  {result.score !== undefined && (
                    <div className="text-xs text-gray-500 mt-1.5">
                      Relevance: {Math.round((1 - result.score) * 100)}%
                    </div>
                  )}
                </div>
                <div className="text-xs text-purple-400 whitespace-nowrap">
                  {result.item.path.replace('/documentation', '') || '/'}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* No Results Message */}
      {isOpen && query.trim().length >= 2 && results.length === 0 && (
        <div
          className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl p-4 z-50"
          role="status"
        >
          <p className="text-gray-400 text-center">
            No results found for "{query}"
          </p>
        </div>
      )}
    </div>
  );
}
