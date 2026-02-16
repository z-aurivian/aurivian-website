import React, { useState, useEffect } from 'react';
import { Network, Activity, FileText, CheckCircle2, ArrowRight, BarChart3, Clock, Users, BookOpen, UserPlus, TrendingUp, Sparkles } from 'lucide-react';

const UseCases: React.FC = () => {
  const [showLine, setShowLine] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const loop = () => {
        setShowLine(false);
        setShowInfo(false);
        
        setTimeout(() => setShowLine(true), 1000);
        setTimeout(() => setShowInfo(true), 2000);
    };
    
    loop();
    const interval = setInterval(loop, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white animate-in fade-in duration-500">
      {/* Page Hero */}
      <section className="pt-32 pb-12 px-6 max-w-[1440px] mx-auto">
        <div className="w-full">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-primary mb-6 leading-[1.1]">
            Precision <span className="text-google-blue">intelligence</span> for every stakeholder.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-normal max-w-3xl">
            From Medical Affairs to Commercial teams, Aurivian transforms how life sciences organizations synthesize, map, and act on global data.
          </p>
        </div>
      </section>

      {/* Section 1: Medical Intelligence */}
      <section className="pt-12 pb-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            
            {/* Left Content (60%) */}
            <div className="lg:col-span-3 space-y-8">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-google-blue text-xs font-bold uppercase tracking-widest">
                  <Activity className="w-3 h-3" />
                  Medical Affairs
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary">
                 Medical Intelligence:<br />
                 Synthesize the noise.
               </h2>
               <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                 Medical Affairs teams drown in fragmented scientific data. Aurivian integrates disparate data sources—publications, clinical trials, and real-world evidence—into a single, sovereign source of truth for MSLs and Medical Directors.
               </p>
               
               <ul className="space-y-4 pt-4">
                 {[
                   'Automated literature monitoring and synthesis',
                   'Cross-referencing clinical trial outcomes',
                   'Sovereign data environment security'
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-lg text-primary font-medium">
                     <div className="w-2 h-2 bg-google-blue"></div>
                     {item}
                   </li>
                 ))}
               </ul>
            </div>

            {/* Right Visual (40%) */}
            <div className="lg:col-span-2 relative">
               <div className="relative bg-gray-50 rounded-2xl p-5 border border-gray-100 shadow-sm aspect-square flex flex-col overflow-hidden">
                  
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                      <div>
                          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Scientific Communication</div>
                          <div className="text-xl font-bold text-primary">Impact Analysis</div>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
                          <Activity className="w-5 h-5 text-google-blue" />
                      </div>
                  </div>

                  {/* Main Metric Cards */}
                  <div className="space-y-2 relative z-10 flex-1 flex flex-col justify-center">
                      
                      {/* 1. Engagement Quality */}
                      <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm transition-transform hover:scale-[1.02] duration-300">
                          <div className="flex justify-between items-center mb-2">
                              <span className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                                <BarChart3 className="w-3 h-3" /> Engagement Quality
                              </span>
                              <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">+12% vs Benchmark</span>
                          </div>
                          <div className="space-y-2">
                              {/* Reach */}
                              <div className="flex items-center gap-2 text-xs">
                                  <span className="w-16 text-gray-400 font-medium">Reach</span>
                                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                      <div className="h-full bg-google-blue w-[85%] rounded-full"></div>
                                  </div>
                                  <span className="text-primary font-bold w-8 text-right">85%</span>
                              </div>
                              {/* Sentiment */}
                              <div className="flex items-center gap-2 text-xs">
                                  <span className="w-16 text-gray-400 font-medium">Sentiment</span>
                                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                      <div className="h-full bg-google-blue w-[92%] rounded-full"></div>
                                  </div>
                                  <span className="text-primary font-bold w-8 text-right">92%</span>
                              </div>
                          </div>
                      </div>

                      {/* 2. Clinical Practice Change */}
                      <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between transition-transform hover:scale-[1.02] duration-300 delay-75">
                          <div>
                              <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Guideline Inclusion</span>
                              <div className="flex items-center gap-2">
                                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                                  </div>
                                  <span className="text-sm font-bold text-primary">Adopted</span>
                              </div>
                          </div>
                          <div className="h-8 w-px bg-gray-100 mx-2"></div>
                          <div>
                               <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Formulary Status</span>
                               <span className="text-sm font-bold text-primary">Tier 1 Approved</span>
                          </div>
                      </div>

                       {/* 3. Time to Adoption */}
                       <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm transition-transform hover:scale-[1.02] duration-300 delay-100">
                          <div className="flex justify-between items-center mb-2">
                              <span className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                                <Clock className="w-3 h-3" /> Time to Adoption
                              </span>
                          </div>
                          <div className="relative pt-3 pb-1">
                              <div className="h-1 w-full bg-gray-100 rounded-full"></div>
                              {/* Actual */}
                              <div className="absolute top-1/2 left-0 -translate-y-1/2 h-1 bg-google-blue rounded-full w-[65%]"></div>
                              <div className="absolute top-1/2 left-[65%] -translate-y-1/2 w-3 h-3 bg-white border-2 border-google-blue rounded-full shadow-sm z-10"></div>
                              <div className="absolute top-0 left-[65%] -translate-x-1/2 -mt-1.5 text-[10px] font-bold text-white bg-google-blue px-2 py-0.5 rounded shadow-sm whitespace-nowrap z-20">
                                  8.2 Mo
                              </div>
                          </div>
                          <p className="text-[10px] text-gray-400 mt-1 text-right">Accelerated by 3.4 months</p>
                       </div>

                       {/* 4. Field Medical & Education */}
                       <div className="grid grid-cols-2 gap-2">
                           <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-100 transition-transform hover:scale-[1.02] duration-300 delay-150">
                               <div className="flex items-center gap-1.5 mb-1">
                                 <Users className="w-3 h-3 text-google-blue" />
                                 <div className="text-[10px] font-bold text-google-blue uppercase">Field Insights</div>
                               </div>
                               <div className="text-lg font-bold text-primary">2,405</div>
                               <div className="text-[10px] text-blue-600/70">Captured & Enabled</div>
                           </div>
                           <div className="bg-white p-2.5 rounded-xl border border-gray-100 shadow-sm transition-transform hover:scale-[1.02] duration-300 delay-150">
                               <div className="flex items-center gap-1.5 mb-1">
                                 <BookOpen className="w-3 h-3 text-gray-400" />
                                 <div className="text-[10px] font-bold text-gray-500 uppercase">HCP Knowledge</div>
                               </div>
                               <div className="text-lg font-bold text-primary">+45%</div>
                               <div className="text-[10px] text-gray-400">Gap Addressed</div>
                           </div>
                       </div>
                  </div>

               </div>
               
               {/* Decorators */}
               <div className="absolute -z-10 -top-4 -right-4 w-full h-full border border-gray-100 rounded-2xl"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: KOL Intelligence */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            
            {/* Left Visual (40%) */}
            <div className="lg:col-span-2 order-2 lg:order-1 relative">
               <div className="bg-white rounded-2xl border border-gray-200 shadow-sm aspect-square relative overflow-hidden">
                  
                  {/* Background Grid */}
                  <div className="absolute inset-0 z-0 opacity-[0.03]" 
                     style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                  </div>

                  {/* SVG Layer for Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                     <defs>
                        <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                           <stop offset="0%" stopColor="#4285F4" stopOpacity="0.2" />
                           <stop offset="100%" stopColor="#4285F4" stopOpacity="1" />
                        </linearGradient>
                     </defs>
                     {/* Line from Silva (50%, 50%) to Chen (80%, 30%) */}
                     <line 
                        x1="50%" y1="50%" 
                        x2="80%" y2="30%" 
                        stroke="url(#gradientLine)" 
                        strokeWidth="2"
                        strokeDasharray="10"
                        className={`transition-all duration-1000 ease-out ${showLine ? 'opacity-100 stroke-dashoffset-0' : 'opacity-0 stroke-dashoffset-10'}`} 
                     />
                  </svg>
                  
                  {/* Nodes Container */}
                  <div className="relative w-full h-full z-20">
                     
                     {/* Central Node: Dr. Silva */}
                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="relative w-20 h-20 rounded-full p-1 bg-white shadow-xl ring-1 ring-gray-100">
                           <img 
                              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80" 
                              alt="Dr. Silva" 
                              className="w-full h-full rounded-full object-cover"
                           />
                           <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-google-blue rounded-full flex items-center justify-center border-2 border-white">
                              <Network className="w-3 h-3 text-white" />
                           </div>
                        </div>
                        <div className="mt-3 px-3 py-1 bg-white rounded-full shadow-sm border border-gray-100 text-xs font-bold text-primary whitespace-nowrap">
                           Dr. A. Silva
                        </div>
                     </div>

                     {/* Satellite Node: Dr. Chen (Top Right) */}
                     <div className="absolute top-[30%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-500">
                        <div className={`relative rounded-full p-0.5 bg-white shadow-md transition-all duration-500 ${showLine ? 'w-14 h-14 ring-2 ring-google-blue' : 'w-12 h-12 ring-1 ring-gray-100 grayscale'}`}>
                           <img 
                              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&q=80" 
                              alt="Dr. Chen" 
                              className="w-full h-full rounded-full object-cover"
                           />
                        </div>
                        
                        {/* Info Card Pop-up */}
                        <div className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 w-48 bg-white p-3 rounded-xl shadow-xl border border-gray-100 transition-all duration-500 origin-top ${showInfo ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                            <div className="flex items-center justify-between mb-2">
                               <span className="text-xs font-bold text-primary">Dr. B. Chen</span>
                               <span className="text-[10px] bg-green-50 text-green-600 px-1.5 py-0.5 rounded-full font-bold">Rising Star</span>
                            </div>
                            <div className="space-y-2">
                               <div className="flex items-center gap-2 text-[10px] text-gray-500">
                                  <TrendingUp className="w-3 h-3 text-google-blue" />
                                  <span>+240% Impact Growth</span>
                               </div>
                               <div className="flex items-center gap-2 text-[10px] text-gray-500">
                                  <UserPlus className="w-3 h-3 text-google-blue" />
                                  <span>Connected via Dr. Silva</span>
                               </div>
                            </div>
                        </div>
                     </div>

                     {/* Other Satellite Nodes (Decoration) */}
                     {[
                        { top: '25%', left: '25%', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=100&q=80' },
                        { top: '75%', left: '30%', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80' },
                        { top: '65%', left: '75%', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=100&q=80' },
                     ].map((node, i) => (
                        <div key={i} className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ top: node.top, left: node.left }}>
                            <div className="w-10 h-10 rounded-full bg-white p-0.5 shadow-sm ring-1 ring-gray-100 grayscale opacity-60">
                               <img src={node.img} alt="KOL" className="w-full h-full rounded-full object-cover" />
                            </div>
                        </div>
                     ))}
                     
                  </div>
               </div>
            </div>

            {/* Right Content (60%) */}
            <div className="lg:col-span-3 space-y-8 order-1 lg:order-2">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-google-blue text-xs font-bold uppercase tracking-widest">
                  <Network className="w-3 h-3" />
                  Commercial
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary">
                 KOL Intelligence:<br />
                 Map influence before it happens.
               </h2>
               <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                 Commercial teams need to know who matters now and who will matter tomorrow. We use predictive influence mapping to identify Digital Opinion Leaders (DOLs) and rising stars before they reach peak influence.
               </p>
               
               <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="p-6 bg-white rounded-xl border border-gray-200">
                     <div className="text-3xl font-bold text-primary mb-1">3x</div>
                     <div className="text-sm text-gray-500 font-medium">Faster identification of rising stars</div>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-gray-200">
                     <div className="text-3xl font-bold text-primary mb-1">360°</div>
                     <div className="text-sm text-gray-500 font-medium">View of digital & academic footprint</div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Congress Intelligence */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            
            {/* Left Content (60%) */}
            <div className="lg:col-span-3 space-y-8">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-google-blue text-xs font-bold uppercase tracking-widest">
                  <FileText className="w-3 h-3" />
                  Medical Affairs
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary">
                 Congress Intelligence:<br />
                 Real-time strategic synthesis.
               </h2>
               <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                 Don't wait weeks for post-conference reports. Aurivian ingests abstracts, posters, and presentations in real-time, delivering daily strategic briefings during major medical events like ASCO, ESMO, and ASH.
               </p>
               
               <ul className="space-y-4 pt-4">
                 {[
                   'Live abstract ingestion and sentiment analysis',
                   'Competitor symposium tracking',
                   'Daily executive briefings tailored to your portfolio'
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-lg text-primary font-medium">
                     <div className="w-2 h-2 bg-google-blue"></div>
                     {item}
                   </li>
                 ))}
               </ul>
            </div>

            {/* Right Visual (40%) */}
            <div className="lg:col-span-2 relative">
               <div className="relative bg-white rounded-2xl p-5 border border-gray-100 shadow-sm aspect-square flex flex-col gap-3 overflow-hidden">
                  
                  {/* Agentic Assessment Header */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                     <div className="flex items-center gap-2">
                        <span className="relative flex h-3 w-3">
                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-3 w-3 bg-google-blue"></span>
                        </span>
                        <span className="font-bold text-sm tracking-wide text-primary">AGENTIC ASSESSMENT</span>
                     </div>
                     <span className="text-xs font-mono text-gray-400">ASCO 2024</span>
                  </div>

                  {/* Feed Items - Abstracts in Gunmetal/Obsidian */}
                  <div className="space-y-2 relative z-0 mb-2">
                     {[
                       {
                         title: "Phase III Trial of Novel ADC in Metastatic NSCLC",
                         text: "Demonstrated significant improvement in PFS vs standard chemotherapy (12.4 vs 6.8 mo)."
                       },
                       {
                         title: "Long-term Survival Outcomes with Immunotherapy",
                         text: "Five-year follow-up reveals durable responses in biomarker-high population."
                       }
                     ].map((item, i) => (
                        <div key={i} className="bg-primary p-2.5 rounded-lg shadow-md transform transition-all hover:scale-[1.01] border border-gray-700/50">
                           <div className="flex justify-between items-start mb-1">
                              <div className="text-[10px] font-bold text-white leading-tight w-3/4">{item.title}</div>
                              <div className="h-1.5 w-1.5 rounded-full bg-green-400 mt-1"></div>
                           </div>
                           <div className="space-y-0.5">
                               <p className="text-[8px] text-gray-300 leading-relaxed">{item.text}</p>
                           </div>
                        </div>
                     ))}
                     
                     {/* 3rd Item (Processing/Incoming) */}
                      <div className="bg-primary p-2.5 rounded-lg shadow-md opacity-90 scale-95 origin-top border border-gray-700/50">
                           <div className="flex justify-between items-start mb-1">
                              <div className="text-[10px] font-bold text-white leading-tight w-3/4">Biomarker Analysis of Resistance Mechanisms</div>
                               <div className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse mt-1"></div>
                           </div>
                           <div className="space-y-0.5">
                               <p className="text-[8px] text-gray-300 leading-relaxed">ctDNA profiling reveals emergent mutations in EGFR pathway following...</p>
                           </div>
                      </div>
                  </div>

                  {/* Assessment Overlay (White Background Text) - LARGER */}
                  <div className="mt-auto bg-white border border-gray-200 p-4 rounded-xl shadow-xl relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                     <div className="flex items-start gap-4">
                        <div className="p-2 bg-blue-50 rounded-xl shrink-0">
                            <Sparkles className="w-5 h-5 text-google-blue" />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-gray-400 uppercase mb-1 tracking-wider">Strategic Synthesis</div>
                            <p className="text-sm font-medium text-primary leading-snug">
                                Competitor Phase III data shows <span className="text-google-blue font-bold">14% higher efficacy</span> in secondary endpoints.
                            </p>
                            <div className="mt-2 p-2 bg-gray-50 rounded-lg border border-gray-100">
                              <p className="text-[10px] font-bold text-gray-600 uppercase mb-0.5">Recommendation</p>
                              <p className="text-xs text-gray-600">Update objection handling for Q4 & monitor formulary impact.</p>
                            </div>
                        </div>
                     </div>
                  </div>

               </div>
               
               {/* Decorators */}
               <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border border-gray-100 rounded-2xl"></div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;