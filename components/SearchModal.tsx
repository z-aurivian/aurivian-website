import React, { useState, useEffect, useRef } from 'react';
import { X, Search, Loader2, Sparkles } from 'lucide-react';
import { searchDeepMind } from '../lib/gemini';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    if (!isOpen) {
      setQuery('');
      setResult(null);
    }
  }, [isOpen]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResult(null);
    try {
      const response = await searchDeepMind(query);
      setResult(response);
    } catch (error) {
      setResult("Sorry, we encountered an error processing your request.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-white/95 backdrop-blur-sm transition-opacity duration-300">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 ring-1 ring-black/5">
        <div className="p-6 border-b border-gray-100 flex items-center gap-4">
          <Search className="w-6 h-6 text-gray-400" />
          <form onSubmit={handleSearch} className="flex-1">
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask about our research, technologies, or impact..."
              className="w-full text-2xl font-light outline-none text-primary placeholder-gray-300 bg-transparent"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        <div className="min-h-[200px] max-h-[60vh] overflow-y-auto p-8 bg-gray-50/50">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-40 text-gray-400 gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-google-blue" />
              <p className="text-sm font-medium">Consulting Gemini...</p>
            </div>
          ) : result ? (
            <div className="prose prose-lg max-w-none">
              <div className="flex items-center gap-2 mb-4 text-google-blue font-bold text-sm uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                AI Generated Answer
              </div>
              <p className="leading-relaxed text-primary whitespace-pre-line">{result}</p>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 py-12">
              <p className="text-lg">Try searching for:</p>
              <div className="flex gap-3 mt-4 flex-wrap justify-center">
                {["AlphaFold 3", "Project Astra", "Gemini Models", "Robotics"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setQuery(tag);
                    }}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium hover:border-google-blue hover:text-google-blue transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
          <span>Powered by Gemini 2.5 Flash</span>
          <span>Press Enter to search</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;