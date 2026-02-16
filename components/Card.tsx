import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { NewsItem } from '../types';

interface CardProps {
  item: NewsItem;
  onUpdate: (url: string, type: 'image' | 'video') => void;
}

const Card: React.FC<CardProps> = ({ item }) => {
  const displayUrl = item.videoUrl || item.imageUrl;
  const showVideo = !!item.videoUrl;

  return (
    <div className="group cursor-pointer flex flex-col gap-6 h-full relative">
      <div className="relative overflow-hidden rounded-[2rem] bg-gray-100 aspect-[4/5] w-full isolate">
        {showVideo ? (
           <video
            key={displayUrl} // Key change ensures video reloads if src changes
            autoPlay
            loop
            muted
            playsInline
            poster={item.imageUrl}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          >
            <source src={displayUrl} />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img 
            src={displayUrl} 
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        
        <div className="absolute top-4 right-4 bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm translate-y-2 group-hover:translate-y-0 z-10 pointer-events-none">
          <ArrowUpRight className="w-5 h-5 text-primary" />
        </div>
      </div>
      
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-primary tracking-tighter leading-tight text-2xl md:text-3xl group-hover:text-google-blue transition-colors mt-2">
          {item.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed text-lg">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default Card;