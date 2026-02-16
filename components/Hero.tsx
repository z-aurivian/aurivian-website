import React, { useRef } from 'react';
import { Upload, Download } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
  heroImage: string | null;
  onImageUpload: (url: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, heroImage, onImageUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onImageUpload(url);
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-32 overflow-hidden bg-white">
      {/* Background Graphic - Simulated Abstract Fluid */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-blue-50 via-purple-50 to-white opacity-60 z-0 pointer-events-none rounded-bl-[200px] blur-3xl"></div>
      
      {/* Grid container: removed items-center to allow columns to stretch to equal height */}
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 relative z-10">
        <div className="space-y-8 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.1] text-primary">
            The <span className="text-google-blue">Intelligence Layer</span> for Life Science
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-lg leading-relaxed font-normal">
            We restructure fragmented data within your environment and enrich it with biomedical intelligence to deliver secure, multilingual, decision-ready insights.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => onNavigate('intelligence')}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-google-blue text-white rounded-full text-lg font-bold tracking-tight transition-transform hover:bg-blue-600 active:scale-95"
            >
              Explore
            </button>
          </div>
        </div>

        {/* Hero Card Container */}
        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full hidden lg:block rounded-2xl overflow-hidden transition-transform hover:scale-[1.01] duration-700 group bg-white isolate">
          {heroImage && (
            <img
              src={heroImage}
              alt="Hero visualization"
              className="w-full h-full object-contain transition-all duration-700"
            />
          )}
          
          {/* Controls */}
          <div className="absolute top-4 right-4 z-20 flex gap-2">
             <button
               onClick={handleUploadClick}
               className="bg-white/80 hover:bg-white p-3 rounded-full shadow-sm transition-all duration-200 hover:scale-105 backdrop-blur-md opacity-0 group-hover:opacity-100"
               title="Upload Image"
             >
               <Upload className="w-5 h-5 text-gray-700" />
               <span className="sr-only">Upload Image</span>
             </button>
             
             {heroImage && (
               <a 
                 href={heroImage}
                 download="hero-image.png"
                 className="bg-white/80 hover:bg-white p-3 rounded-full shadow-sm transition-all duration-200 hover:scale-105 backdrop-blur-md opacity-0 group-hover:opacity-100 flex items-center justify-center"
                 title="Download Image"
               >
                 <Download className="w-5 h-5 text-gray-700" />
                 <span className="sr-only">Download Image</span>
               </a>
             )}

             <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;