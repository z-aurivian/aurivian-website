import React from 'react';
import { Shield, Zap, Layers, Globe, ArrowRight, Cpu, CheckCircle2, FileBarChart, Database, User, FileText, MessageSquare, File, Sparkles, Lock, Server, HardDrive } from 'lucide-react';

const IntelligenceLayer: React.FC = () => {
  return (
    <div className="w-full bg-white animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
            {/* Text Content Only */}
            <div className="flex flex-col w-full">
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-primary leading-[1.1] mb-6">
                Transform raw data into <span className="text-google-blue">action</span>.
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-normal max-w-3xl">
                Aurivian bridges the gap between data noise and decision-grade intelligence. We provide the missing intelligence layer that transforms fragmented, multilingual scientific dialogue into actionable outcomes.
              </p>
            </div>
        </div>
      </section>

      {/* The Intelligence Gap Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mb-10">
                The Intelligence Gap
              </h2>
              <p className="text-xl md:text-2xl font-normal text-gray-600 leading-relaxed mb-10">
                Traditional analytics were built for structured rows and columns. They break when facing the reality of medical data—fragmented, multilingual, and unstructured.
              </p>
              
              <div className="space-y-6">
                {/* Traditional Analytics Card */}
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm relative">
                   <div className="absolute top-4 right-4 bg-gray-100 px-2 py-1 rounded text-xs font-bold text-gray-500 uppercase">External</div>
                   <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Traditional Analytics</h3>
                   <p className="text-lg text-gray-600">
                     <span className="font-semibold text-red-500/80">3rd party black-boxes.</span> Data often leaves the environment to be processed by generic models, creating security risks and losing context.
                   </p>
                </div>

                {/* Aurivian Card */}
                <div className="bg-white p-8 rounded-2xl border border-google-blue/30 shadow-md relative overflow-hidden ring-1 ring-google-blue/10">
                   <div className="absolute top-0 left-0 w-1 h-full bg-google-blue"></div>
                   <div className="absolute top-4 right-4 bg-blue-50 px-2 py-1 rounded text-xs font-bold text-google-blue uppercase">Internal & Sovereign</div>
                   <h3 className="text-sm font-bold text-google-blue uppercase tracking-wide mb-2">The Intelligence Layer</h3>
                   <p className="text-primary font-medium text-lg lg:text-xl">
                      In-environment processing. Our engine runs inside your stack, using domain-specific AI tuned to your proprietary data without it ever leaving your control.
                   </p>
                </div>
              </div>
            </div>
            
            {/* Abstract Graphic: Gap vs Bridge */}
            <div className="relative h-[500px] bg-white rounded-2xl border border-gray-200 p-8 flex items-center justify-center overflow-hidden shadow-sm">
                
                {/* Background Grid for tech feel */}
                <div className="absolute inset-0 z-0 opacity-[0.03]" 
                     style={{ backgroundImage: 'radial-gradient(#4285F4 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                </div>

                {/* Left Side: Disparate Data (Chaos) */}
                <div className="absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 w-48 h-64 z-10">
                    <div className="relative w-full h-full">
                        {/* Scattered Icons */}
                        <div className="absolute top-0 left-0 p-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm transform -rotate-12 hover:scale-110 transition-transform">
                            <FileText className="w-8 h-8 text-gray-400" />
                        </div>
                        <div className="absolute top-1/4 right-0 p-3 bg-slate-50 border border-slate-200 rounded-lg shadow-sm transform rotate-6 hover:scale-110 transition-transform">
                            <Database className="w-8 h-8 text-slate-400" />
                        </div>
                        <div className="absolute bottom-1/3 left-4 p-3 bg-blue-50 border border-blue-100 rounded-lg shadow-sm transform -rotate-6 hover:scale-110 transition-transform">
                            <MessageSquare className="w-8 h-8 text-blue-300" />
                        </div>
                        <div className="absolute bottom-0 right-8 p-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm transform rotate-12 hover:scale-110 transition-transform">
                            <File className="w-8 h-8 text-gray-400" />
                        </div>
                        
                        {/* Connecting chaos lines */}
                        <svg className="absolute inset-0 pointer-events-none opacity-20" width="100%" height="100%">
                            <path d="M40 30 Q 100 80 140 60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                            <path d="M50 150 Q 100 120 150 180" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                        </svg>
                    </div>
                    <div className="absolute -bottom-8 left-0 w-full text-center">
                         <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Fragmented Sources</span>
                    </div>
                </div>

                {/* Middle: The Layer (Transformation) */}
                <div className="relative z-20 mx-8 flex flex-col items-center justify-center h-full">
                    {/* Top Line */}
                    <div className="h-1/3 w-px border-l-2 border-dashed border-google-blue/30"></div>
                    
                    {/* The Node */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-google-blue to-blue-600 shadow-xl shadow-blue-500/30 flex items-center justify-center relative my-4 group">
                        <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse"></div>
                        <Sparkles className="w-10 h-10 text-white relative z-10" />
                        
                        {/* Orbiting particles */}
                        <div className="absolute inset-0 rounded-2xl border border-white/30 scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Bottom Line */}
                    <div className="h-1/3 w-px border-l-2 border-dashed border-google-blue/30"></div>
                </div>

                {/* Right Side: Structured Intelligence (Order) */}
                <div className="absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 w-56 h-72 z-10 flex items-center justify-center">
                    {/* Stacked Cards Effect */}
                    <div className="absolute top-0 right-0 w-full h-full bg-white rounded-xl border border-gray-100 shadow-sm transform translate-x-4 -translate-y-4 opacity-50"></div>
                    
                    {/* Main Dashboard Card */}
                    <div className="relative w-full bg-white rounded-xl border border-gray-200 shadow-lg p-4 flex flex-col gap-4">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="text-xs font-bold text-primary">Strategic Insight</span>
                            </div>
                            <CheckCircle2 className="w-4 h-4 text-google-blue" />
                        </div>
                        
                        {/* Chart Area */}
                        <div className="flex items-end justify-between h-24 gap-2 px-1">
                            <div className="w-full bg-blue-50 rounded-t-sm relative group cursor-pointer" style={{ height: '40%' }}>
                                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">40%</div>
                            </div>
                            <div className="w-full bg-blue-100 rounded-t-sm relative group cursor-pointer" style={{ height: '65%' }}>
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">65%</div>
                            </div>
                            <div className="w-full bg-google-blue rounded-t-sm relative group cursor-pointer" style={{ height: '85%' }}>
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">85%</div>
                            </div>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-gray-50 p-2 rounded">
                                <div className="w-8 h-1 bg-gray-200 rounded mb-1"></div>
                                <div className="w-12 h-2 bg-gray-300 rounded"></div>
                            </div>
                             <div className="bg-gray-50 p-2 rounded">
                                <div className="w-8 h-1 bg-gray-200 rounded mb-1"></div>
                                <div className="w-12 h-2 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="absolute -bottom-8 left-0 w-full text-center">
                         <span className="text-xs font-bold text-google-blue uppercase tracking-widest">Decision Ready</span>
                    </div>
                </div>
                
                {/* Flow Arrows Background */}
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%">
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                              <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                            </marker>
                        </defs>
                        <line x1="30%" y1="50%" x2="45%" y2="50%" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
                        <line x1="55%" y1="50%" x2="70%" y2="50%" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    </svg>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Stack Section */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6">
           <div className="mb-20 max-w-4xl">
             <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mb-10">How we build intelligence</h2>
             <p className="text-xl md:text-2xl font-normal text-gray-600 leading-relaxed">
               A five-phase process to transform raw information into decision-grade intelligence.
             </p>
           </div>

           <div className="flex flex-wrap justify-center gap-8">
              
              {/* Phase 1 */}
              <div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] min-w-[300px] grow">
                  <div className="mb-8 relative h-48 bg-white rounded-xl border border-gray-200 overflow-hidden flex items-center justify-center">
                      <div className="relative w-3/4 h-12 bg-gray-50 border border-gray-200 rounded-full flex items-center px-4 shadow-sm">
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden relative">
                              <div className="absolute top-0 left-0 h-full w-1/3 bg-google-blue opacity-50 animate-[pulse_2s_infinite]"></div>
                          </div>
                      </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3 tracking-tight">
                    The Intelligent Pipeline
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    A secure REST API bridge connects Aurivian directly to your environment. Data flows in securely without ever leaving your governance perimeter.
                  </p>
              </div>

              {/* Phase 2 */}
              <div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] min-w-[300px] grow">
                  <div className="mb-8 relative h-48 bg-white rounded-xl border border-gray-200 overflow-hidden flex items-center justify-center">
                       <div className="flex items-center gap-4">
                           <div className="grid grid-cols-2 gap-1 opacity-50 scale-75">
                               <div className="w-6 h-6 rounded bg-gray-300 rotate-12"></div>
                               <div className="w-6 h-6 rounded-full bg-gray-300 -rotate-6"></div>
                               <div className="w-6 h-6 rounded-tr-3xl bg-gray-300"></div>
                               <div className="w-6 h-6 rounded bg-gray-300 rotate-45"></div>
                           </div>
                           <ArrowRight className="text-google-blue w-4 h-4" />
                           <div className="grid grid-cols-2 gap-1 scale-75">
                               <div className="w-6 h-6 rounded bg-primary"></div>
                               <div className="w-6 h-6 rounded bg-primary"></div>
                               <div className="w-6 h-6 rounded bg-primary"></div>
                               <div className="w-6 h-6 rounded bg-primary"></div>
                           </div>
                       </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3 tracking-tight">
                    Automated Transformation
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Domain-specific AI normalizes and transforms diverse, unstructured data into a "medically tuned format" in hours, not months.
                  </p>
              </div>

              {/* Phase 3 */}
              <div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] min-w-[300px] grow">
                  <div className="mb-8 relative h-48 bg-white rounded-xl border border-gray-200 overflow-hidden flex items-center justify-center">
                       <div className="relative">
                           <div className="w-24 h-16 bg-gray-50 border border-gray-200 rounded-lg shadow-sm absolute top-0 left-0 transform -translate-x-3 -translate-y-3"></div>
                           <div className="w-24 h-16 bg-blue-50 border border-blue-100 rounded-lg shadow-sm absolute top-0 left-0 transform translate-x-0 translate-y-0 opacity-80"></div>
                           <div className="w-24 h-16 bg-primary rounded-lg shadow-lg relative z-10 transform translate-x-3 translate-y-3 flex items-center justify-center">
                               <Layers className="text-white w-6 h-6" />
                           </div>
                       </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3 tracking-tight">
                    Data Fusion
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    We overlay Aurivian's curated, proprietary global datasets onto your internal data to add depth, context, and external validation signals.
                  </p>
              </div>

               {/* Phase 4 */}
              <div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] min-w-[300px] grow">
                  <div className="mb-8 relative h-48 bg-white rounded-xl border border-gray-200 overflow-hidden flex items-center justify-center">
                       <div className="relative w-28 h-28 border border-gray-200 rounded-full flex items-center justify-center">
                           <Globe className="text-gray-200 w-full h-full p-3 absolute" strokeWidth={1} />
                           <div className="absolute top-5 right-5 w-1.5 h-1.5 bg-google-blue rounded-full animate-ping"></div>
                           <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-google-blue rounded-full animate-ping delay-75"></div>
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-0.5 rounded-full border border-gray-100 shadow-sm text-[10px] font-bold text-primary whitespace-nowrap">
                             JP / EN / DE
                           </div>
                       </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3 tracking-tight">
                    Multilingual Universality
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Generate localized insights for teams in Boston, Basel, or Beijing simultaneously. We eliminate English-centric bias for true global alignment.
                  </p>
              </div>

              {/* Phase 5: Decision Ready */}
              <div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] min-w-[300px] grow">
                  <div className="mb-8 relative h-48 bg-white rounded-xl border border-gray-200 overflow-hidden flex items-center justify-center">
                       {/* Visual: Report/Insight */}
                       <div className="relative w-32 h-24 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col p-3 gap-2">
                           <div className="flex justify-between items-center">
                                <div className="h-2 w-16 bg-gray-200 rounded"></div>
                                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                           </div>
                           <div className="flex-1 bg-blue-50/50 rounded flex items-end justify-center pb-2 px-1 gap-1">
                               <div className="w-2 h-4 bg-google-blue/40 rounded-t-sm"></div>
                               <div className="w-2 h-8 bg-google-blue/60 rounded-t-sm"></div>
                               <div className="w-2 h-6 bg-google-blue/40 rounded-t-sm"></div>
                               <div className="w-2 h-10 bg-google-blue rounded-t-sm"></div>
                           </div>
                           <div className="absolute -right-2 -top-2 bg-google-blue text-white rounded-full p-1 shadow-sm">
                               <CheckCircle2 className="w-4 h-4" />
                           </div>
                       </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3 tracking-tight">
                    Decision-Ready Intelligence
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Teams interact with fused data to make decisions based on validated insights, automated reports, and verified evidence.
                  </p>
              </div>

           </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-24 bg-primary text-white">
          <div className="max-w-[1440px] mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="space-y-6">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                          <Shield className="w-6 h-6 text-google-blue" />
                      </div>
                      <h3 className="text-2xl font-bold">Secure by Design</h3>
                      <p className="text-gray-400 leading-relaxed text-lg">
                          Processing happens entirely within your private environment. Data never exits your control or governance perimeter.
                      </p>
                  </div>
                   <div className="space-y-6">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                          <CheckCircle2 className="w-6 h-6 text-google-blue" />
                      </div>
                      <h3 className="text-2xl font-bold">Actionable by Default</h3>
                      <p className="text-gray-400 leading-relaxed text-lg">
                          We don't deliver tools you have to configure; we deliver standardized, insight-ready assets your teams can use immediately.
                      </p>
                  </div>
                   <div className="space-y-6">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                          <Zap className="w-6 h-6 text-google-blue" />
                      </div>
                      <h3 className="text-2xl font-bold">Effortless Integration</h3>
                      <p className="text-gray-400 leading-relaxed text-lg">
                          No "rip-and-replace" of legacy systems. Our layer operates within your existing stack, realizing value in weeks, not years.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Sovereign Data Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary">
                Uncompromised Data Sovereignty
              </h2>
              <p className="text-xl md:text-2xl font-normal text-gray-600 leading-relaxed">
                Aurivian AI agents assess and analyze your data directly within your existing systems—without copying, extracting, or transferring it elsewhere.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                You retain complete ownership and control at all times. Our architecture ensures that while insights are generated globally, your raw data never crosses your security perimeter.
              </p>

              <div className="flex gap-4 pt-4">
                 <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 text-sm font-bold text-primary">
                   <Lock className="w-4 h-4 text-google-blue" />
                   Zero Exfiltration
                 </div>
                 <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 text-sm font-bold text-primary">
                   <Server className="w-4 h-4 text-google-blue" />
                   In-Situ Processing
                 </div>
              </div>
            </div>

            {/* Right Visual: Sovereign Vault */}
            <div className="relative h-[400px] lg:h-[500px] w-full bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-center p-8">
                
                {/* The Perimeter/Vault */}
                <div className="relative w-64 h-64 border-2 border-dashed border-gray-300 rounded-3xl flex items-center justify-center bg-white shadow-sm z-10">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-50 px-2 text-xs font-bold text-gray-400 tracking-widest">YOUR PERIMETER</div>
                    
                    {/* Data Icons (Static inside) */}
                    <div className="grid grid-cols-2 gap-4 opacity-50">
                        <div className="p-3 bg-blue-50 rounded-lg"><Database className="w-6 h-6 text-blue-400" /></div>
                        <div className="p-3 bg-blue-50 rounded-lg"><FileText className="w-6 h-6 text-blue-400" /></div>
                        <div className="p-3 bg-blue-50 rounded-lg"><HardDrive className="w-6 h-6 text-blue-400" /></div>
                        <div className="p-3 bg-blue-50 rounded-lg"><Server className="w-6 h-6 text-blue-400" /></div>
                    </div>

                    {/* The Agent (Moving Inside) */}
                    <div className="absolute inset-0">
                        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-google-blue rounded-full shadow-lg shadow-blue-500/50 animate-[spin_4s_linear_infinite] origin-[0_0]">
                           {/* Orbit path roughly */}
                        </div>
                    </div>

                    {/* Lock Icon Overlay */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary text-white p-3 rounded-full shadow-lg z-20">
                        <Lock className="w-6 h-6" />
                    </div>
                </div>

                {/* External World (Faded) */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Incoming Request Arrow */}
                    <div className="absolute top-1/2 left-4 lg:left-12 -translate-y-1/2 flex items-center gap-2 opacity-30">
                        <span className="text-xs font-bold text-gray-400">QUERY</span>
                        <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>

                    {/* Outgoing Insight Arrow */}
                    <div className="absolute top-1/2 right-4 lg:right-12 -translate-y-1/2 flex items-center gap-2 opacity-30">
                        <ArrowRight className="w-6 h-6 text-google-blue" />
                        <span className="text-xs font-bold text-google-blue">INSIGHT ONLY</span>
                    </div>
                </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntelligenceLayer;