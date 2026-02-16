import React, { useState, useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-white/95 backdrop-blur-sm transition-opacity duration-300">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 ring-1 ring-black/5">
        <div className="p-6 border-b border-gray-100 flex items-center gap-4">
          <Search className="w-6 h-6 text-gray-400" />
          <div className="flex-1">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search coming soon..."
              className="w-full text-2xl font-light outline-none text-primary placeholder-gray-300 bg-transparent"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled
            />
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        <div className="min-h-[200px] max-h-[60vh] overflow-y-auto p-8 bg-gray-50/50">
          <div className="h-full flex flex-col items-center justify-center text-gray-400 py-12">
            <p className="text-lg">Search functionality coming soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;