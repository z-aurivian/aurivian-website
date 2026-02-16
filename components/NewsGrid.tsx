import React from 'react';
import Card from './Card';
import { NewsItem } from '../types';

interface NewsGridProps {
  onNavigate: (page: string) => void;
  items: NewsItem[];
  onItemUpdate: (id: string, url: string, type: 'image' | 'video') => void;
}

const NewsGrid: React.FC<NewsGridProps> = ({ onNavigate, items, onItemUpdate }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mb-10">Intelligence modules</h2>
          <p className="text-2xl md:text-3xl font-medium tracking-tight leading-tight text-primary max-w-4xl">
            Build your intelligence with our next generation AI modules
          </p>
        </div>

        {/* 3 Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {items.map((item) => (
            <Card 
              key={item.id} 
              item={item} 
              onUpdate={(url, type) => onItemUpdate(item.id, url, type)}
            />
          ))}
        </div>

        <div className="flex justify-start">
             <button 
            onClick={() => onNavigate('modules')}
            className="inline-block px-8 py-3 bg-google-blue text-white rounded-full hover:bg-blue-600 transition-colors font-bold tracking-tight"
          >
            Explore Modules
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;