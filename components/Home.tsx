import React from 'react';
import Hero from './Hero';
import NewsGrid from './NewsGrid';
import { NewsItem } from '../types';

interface HomeProps {
  onNavigate: (page: string) => void;
  heroImage: string | null;
  onHeroImageUpload: (url: string) => void;
  newsItems: NewsItem[];
  onNewsItemUpdate: (id: string, url: string, type: 'image' | 'video') => void;
}

const Home: React.FC<HomeProps> = ({ 
  onNavigate, 
  heroImage, 
  onHeroImageUpload,
  newsItems,
  onNewsItemUpdate
}) => {
  return (
    <>
      <Hero 
        onNavigate={onNavigate} 
        heroImage={heroImage} 
        onImageUpload={onHeroImageUpload}
      />
      
      {/* Spacer for additional whitespace */}
      <div className="h-24 md:h-32 bg-white"></div>
      
      {/* The Challenge Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-[1440px] mx-auto px-6">
            {/* Header */}
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mb-10">
                  Why data alone doesn’t lead to action
                </h2>
                <p className="text-xl md:text-2xl font-normal text-gray-600 leading-relaxed max-w-4xl">
                  In life sciences, fragmented signals, missing context, and delayed analysis prevent data from becoming something teams can confidently act on.
                </p>
            </div>

            {/* Cards Grid - 4 Columns on Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="bg-white p-10 rounded-2xl border border-gray-100 h-full flex flex-col justify-start shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary tracking-tight mb-6">Fragmentation erodes context</h3>
                  <p className="text-gray-600 leading-relaxed text-lg lg:text-xl">Scientific, clinical, and regulatory data remain siloed across systems, formats, and languages.</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-10 rounded-2xl border border-gray-100 h-full flex flex-col justify-start shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary tracking-tight mb-6">Uncorroborated data delays action</h3>
                  <p className="text-gray-600 leading-relaxed text-lg lg:text-xl">When signals aren’t reinforced by trusted sources, teams hesitate to move forward.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-10 rounded-2xl border border-gray-100 h-full flex flex-col justify-start shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary tracking-tight mb-6">Language gaps fracture insight</h3>
                  <p className="text-gray-600 leading-relaxed text-lg lg:text-xl">English-first data and regional inconsistency prevent global alignment.</p>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-10 rounded-2xl border border-gray-100 h-full flex flex-col justify-start shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary tracking-tight mb-6">Late insight loses impact</h3>
                  <p className="text-gray-600 leading-relaxed text-lg lg:text-xl">Analysis that arrives too late becomes retrospective instead of actionable.</p>
                </div>
            </div>
          </div>
      </section>

      {/* How Aurivian Turns Data Into Action Section */}
      <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6">
            {/* Header */}
            <div className="max-w-4xl mb-24">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mb-10">
                  How Aurivian turns data into action
                </h2>
                <p className="text-xl md:text-2xl font-normal text-gray-600 leading-relaxed">
                  Aurivian operates inside the customer’s sovereign environment to transform fragmented data into action-ready intelligence.
                </p>
            </div>

            {/* Steps Linear Process */}
            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-0 left-0 w-full h-px bg-gray-200"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
                  {/* Step 1 */}
                  <div className="relative group">
                      <div className="hidden lg:block absolute -top-1.5 left-0 w-3 h-3 bg-primary rounded-full ring-4 ring-white"></div>
                      <div className="lg:pt-8">
                        <span className="block text-sm font-bold text-google-blue uppercase tracking-widest mb-4">Step 01</span>
                        <h3 className="text-xl font-bold text-primary tracking-tight mb-4">Establish a secure intelligence pipeline</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Aurivian deploys a secure, in-environment pipeline that allows AI agents to read and interpret first-party data without moving it.
                        </p>
                      </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative group">
                      <div className="hidden lg:block absolute -top-1.5 left-0 w-3 h-3 bg-gray-300 group-hover:bg-primary transition-colors rounded-full ring-4 ring-white"></div>
                      <div className="lg:pt-8">
                        <span className="block text-sm font-bold text-google-blue uppercase tracking-widest mb-4">Step 02</span>
                        <h3 className="text-xl font-bold text-primary tracking-tight mb-4">Fuse with trusted intelligence</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            In-environment signals are enriched with curated scientific, medical, and regulatory datasets to provide broader context.
                        </p>
                      </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative group">
                      <div className="hidden lg:block absolute -top-1.5 left-0 w-3 h-3 bg-gray-300 group-hover:bg-primary transition-colors rounded-full ring-4 ring-white"></div>
                      <div className="lg:pt-8">
                        <span className="block text-sm font-bold text-google-blue uppercase tracking-widest mb-4">Step 03</span>
                        <h3 className="text-xl font-bold text-primary tracking-tight mb-4">Standardize and reinforce signals</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Disparate inputs are aligned and corroborated across sources to reduce uncertainty and improve confidence.
                        </p>
                      </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative group">
                      <div className="hidden lg:block absolute -top-1.5 left-0 w-3 h-3 bg-gray-300 group-hover:bg-primary transition-colors rounded-full ring-4 ring-white"></div>
                      <div className="lg:pt-8">
                        <span className="block text-sm font-bold text-google-blue uppercase tracking-widest mb-4">Step 04</span>
                        <h3 className="text-xl font-bold text-primary tracking-tight mb-4">Deliver action-ready intelligence</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Teams receive consistent, decision-ready intelligence they can act on across functions and regions.
                        </p>
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </section>

      <NewsGrid 
        onNavigate={onNavigate} 
        items={newsItems} 
        onItemUpdate={onNewsItemUpdate}
      />

      {/* Impact Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mb-10">Built on global medical intelligence</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Aurivian eliminates data silos by integrating real-time data and signals into a single, AI-powered intelligence layer. This enables teams across the life sciences to bridge the gap between complex signals and strategic action.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-center h-52 hover:shadow-md transition-all">
                  <h3 className="text-4xl font-normal text-primary mb-3">50M+</h3>
                  <p className="text-lg text-gray-600 font-medium leading-snug">Publication articles in 13 languages and counting</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-center h-52 mt-8 hover:shadow-md transition-all">
                  <h3 className="text-4xl font-normal text-primary mb-3">1.5M+</h3>
                  <p className="text-lg text-gray-600 font-medium leading-snug">Clinical trials from 12 countries</p>
              </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-center h-52 hover:shadow-md transition-all">
                  <h3 className="text-4xl font-normal text-primary mb-3">250M+</h3>
                  <p className="text-lg text-gray-600 font-medium leading-snug">Entity disambiguations for KOL Intelligence</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-center h-52 mt-8 hover:shadow-md transition-all">
                  <h3 className="text-4xl font-normal text-primary mb-3">20+</h3>
                  <p className="text-lg text-gray-600 font-medium leading-snug">National and Disease Registries</p>
              </div>
            </div>
          </div>
      </section>

      {/* Revolutionize your workflow Section */}
      <section className="py-24 bg-white text-primary">
          <div className="max-w-[1440px] mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mb-10">
                  Revolutionize your workflow
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Card 1 */}
                  <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-bold tracking-tight mb-6 uppercase text-primary">SOVEREIGN DATA</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                          Systemize and integrate language and region-specific biomedical datasets to your data. All processing occurs inside your environment, making it 100% sovereign. Data never exits your security perimeter.
                      </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-bold tracking-tight mb-6 uppercase text-primary">UNIFIED INSIGHTS</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                          Transform fragmented and incomplete feeds into standardized, enriched medical intelligence instantly, providing your team the full picture.
                      </p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-bold tracking-tight mb-6 uppercase text-primary">ACTION READY</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                          Aurivian serves fully validated, action-ready insights to your team to make better and faster decisions.
                      </p>
                  </div>
                </div>
          </div>
      </section>
    </>
  );
};

export default Home;