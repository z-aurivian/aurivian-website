import React, { useRef } from 'react';
import { Shield, Zap, Eye, Boxes, ArrowRight, Lock, Globe, Upload, Download } from 'lucide-react';

interface MissionProps {
  videoSrc: string | null;
  onVideoUpload: (url: string) => void;
}

const AIFrontierIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Box Corners */}
    <path d="M4 8V6a2 2 0 0 1 2-2h2" />
    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
    <path d="M16 20h2a2 2 0 0 0 2-2v-2" />
    
    {/* Letter A */}
    <path d="M7 16l3-8 3 8" />
    <path d="M8.5 13h4" />
    
    {/* Letter I */}
    <path d="M16 8v8" />

    {/* Gemini Star (Top Right) */}
    <path d="M20 2l1 2.5l2.5 1l-2.5 1l-1 2.5l-1-2.5l-2.5-1l2.5-1z" fill="currentColor" stroke="none" />
  </svg>
);

const Mission: React.FC<MissionProps> = ({ videoSrc, onVideoUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onVideoUpload(url);
    }
  };

  return (
    <div className="w-full bg-white animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 max-w-[1440px] mx-auto">
        <div className="w-full">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-primary mb-6 leading-[1.1]">
            Building the <span className="text-google-blue">Future</span> of Life Science Intelligence.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-normal max-w-3xl">
            We are solving the structural fragmentation of global biomedical data to enable definitive, strategic action. By integrating intelligence into the foundation of the enterprise, we empower Life Sciences to move faster and with greater certainty.
          </p>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mb-6">
              Our Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                 <Boxes className="w-6 h-6 text-google-blue" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">Foundational Transformation</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Intelligence cannot be an overlay; it must be architectural. We build systems where data monitoring, synthesis, and interpretation are embedded at the core of the enterprise stack.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                 <Shield className="w-6 h-6 text-google-blue" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">Enterprise-grade Trust</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                In Life Sciences, security is non-negotiable. We adhere to a strict sovereignty model where processing occurs in-situ, ensuring your proprietary data never leaves your governance perimeter.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                 <AIFrontierIcon className="w-6 h-6 text-google-blue" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">AI Frontier</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We are moving beyond reactive analytics tools to proactive, autonomous partners. Our Agentic AI actively monitors the global landscape to surface risks and opportunities before you ask.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Aurivian Difference */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mb-6">
                  The Aurivian Difference
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                  A cyclical engine designed to turn observation into outcome.
                </p>
             </div>
             <div className="hidden lg:block"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-100 z-0"></div>

              {/* Step 1: Observe */}
              <div className="relative z-10 group">
                  <div className="w-16 h-16 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:border-google-blue transition-colors">
                      <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Observe</h3>
                  <p className="text-gray-600 leading-relaxed">
                      Continuous, autonomous monitoring of global data streams via agentic AI to detect signals, anomalies, and emerging trends in real-time.
                  </p>
              </div>

              {/* Step 2: Synthesize */}
              <div className="relative z-10 group">
                  <div className="w-16 h-16 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:border-google-blue transition-colors">
                      <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Synthesize</h3>
                  <p className="text-gray-600 leading-relaxed">
                      Contextualizing internal signals by fusing them with our proprietary global biomedical datasets, translating noise into structured, meaningful clarity.
                  </p>
              </div>

              {/* Step 3: Action */}
              <div className="relative z-10 group">
                  <div className="w-16 h-16 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:border-google-blue transition-colors">
                      <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Action</h3>
                  <p className="text-gray-600 leading-relaxed">
                      Delivering decision-ready intelligence through automated insight generation and strategic reporting, enabling leaders to execute with confidence.
                  </p>
              </div>
           </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-primary text-white">
          <div className="max-w-[1440px] mx-auto px-6 flex flex-col items-center text-center">
             <div className="p-4 bg-white/10 rounded-full mb-8">
                 <Lock className="w-8 h-8 text-google-blue" />
             </div>
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 max-w-3xl">
               Uncompromising Security & Sovereignty
             </h2>
             <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl font-light">
               Trust is the bedrock of our platform. We operate with a privacy-by-design philosophy, ensuring complete data sovereignty where your intelligence remains strictly within your control.
             </p>
          </div>
      </section>

      {/* Building the Future */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden group">
                  
                  {videoSrc ? (
                    <video 
                      src={videoSrc}
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-primary opacity-90"></div>
                      {/* Abstract Network Graphic */}
                      <div className="absolute inset-0 flex items-center justify-center">
                          <Globe className="w-64 h-64 text-google-blue/20" strokeWidth={0.5} />
                      </div>
                      <div className="absolute bottom-8 left-8">
                          <div className="text-white text-4xl font-bold tracking-tighter">2030+</div>
                          <div className="text-google-blue text-sm font-bold uppercase tracking-widest">Vision</div>
                      </div>
                    </>
                  )}

                  {/* Controls */}
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                     <button 
                       onClick={handleUploadClick}
                       className="bg-white/80 hover:bg-white p-3 rounded-full shadow-sm transition-all duration-200 hover:scale-105 backdrop-blur-md opacity-0 group-hover:opacity-100"
                       title="Upload Video"
                     >
                       <Upload className="w-5 h-5 text-gray-700" />
                       <span className="sr-only">Upload Video</span>
                     </button>

                     {videoSrc && (
                       <a 
                         href={videoSrc}
                         download="mission-video.mp4"
                         className="bg-white/80 hover:bg-white p-3 rounded-full shadow-sm transition-all duration-200 hover:scale-105 backdrop-blur-md opacity-0 group-hover:opacity-100 flex items-center justify-center"
                         title="Download Video"
                       >
                         <Download className="w-5 h-5 text-gray-700" />
                         <span className="sr-only">Download Video</span>
                       </a>
                     )}

                     <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="video/*"
                      onChange={handleFileChange}
                    />
                  </div>

              </div>
              <div className="flex flex-col justify-center">
                 <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mb-8">
                    Building the Future
                 </h2>
                 <p className="text-xl text-gray-600 leading-relaxed">
                    The next decade of biomedical breakthroughs depends on our ability to process complexity at scale. We are building the intelligence layer that will allow Life Sciences organizations to transcend data limitations, accelerate discovery, and bring life-saving therapies to market faster than ever before.
                 </p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;