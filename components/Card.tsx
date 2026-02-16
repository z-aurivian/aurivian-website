import React, { useRef, useState } from 'react';
import { ArrowUpRight, Upload, Sparkles, Loader2, Download } from 'lucide-react';
import { NewsItem } from '../types';
import { generateVeoVideo } from '../lib/veo';

interface CardProps {
  item: NewsItem;
  onUpdate: (url: string, type: 'image' | 'video') => void;
}

const Card: React.FC<CardProps> = ({ item, onUpdate }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const type = file.type.startsWith('image') ? 'image' : 'video';
      onUpdate(url, type);
    }
    // Reset input
    if (fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  };

  const handleGenerateClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!item.videoPrompt) return;
    
    setIsGenerating(true);
    try {
        const videoUrl = await generateVeoVideo(item.videoPrompt);
        onUpdate(videoUrl, 'video');
    } catch (e) {
        console.error("Failed to generate video", e);
        alert("Failed to generate video. Please try again.");
    } finally {
        setIsGenerating(false);
    }
  };

  // Determine what to display: Priority 1: Custom Media, Priority 2: Video URL, Priority 3: Image URL
  const displayUrl = item.customMediaUrl || item.videoUrl || item.imageUrl;
  
  // Determine Type
  const isCustomImage = item.customMediaUrl && item.customMediaType === 'image';
  const isCustomVideo = item.customMediaUrl && item.customMediaType === 'video';
  const hasDefaultVideo = !item.customMediaUrl && !!item.videoUrl;
  
  const showVideo = isCustomVideo || hasDefaultVideo;

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
        
        {/* Controls */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
             <button 
               onClick={handleGenerateClick}
               disabled={isGenerating || !item.videoPrompt}
               className="bg-white/80 hover:bg-white p-2.5 rounded-full shadow-sm transition-all duration-200 hover:scale-105 backdrop-blur-md opacity-0 group-hover:opacity-100 disabled:opacity-50"
               title="Generate Video with Veo"
             >
               {isGenerating ? <Loader2 className="w-5 h-5 text-google-blue animate-spin" /> : <Sparkles className="w-5 h-5 text-google-blue" />}
               <span className="sr-only">Generate Media</span>
             </button>

             <button 
               onClick={handleUploadClick}
               className="bg-white/80 hover:bg-white p-2.5 rounded-full shadow-sm transition-all duration-200 hover:scale-105 backdrop-blur-md opacity-0 group-hover:opacity-100"
               title="Upload custom media"
             >
               <Upload className="w-5 h-5 text-gray-700" />
               <span className="sr-only">Upload Media</span>
             </button>

             <a 
               href={displayUrl}
               download={`media-${item.id}`}
               className="bg-white/80 hover:bg-white p-2.5 rounded-full shadow-sm transition-all duration-200 hover:scale-105 backdrop-blur-md opacity-0 group-hover:opacity-100 flex items-center justify-center"
               title="Download Media"
               onClick={(e) => e.stopPropagation()}
             >
               <Download className="w-5 h-5 text-gray-700" />
               <span className="sr-only">Download Media</span>
             </a>

             <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="video/*,image/*"
              onChange={handleFileChange}
              onClick={(e) => e.stopPropagation()} 
            />
        </div>

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