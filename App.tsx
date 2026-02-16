import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import Home from './components/Home';
import UseCases from './components/UseCases';
import IntelligenceLayer from './components/IntelligenceLayer';
import Mission from './components/Mission';
import { NewsItem } from './types';

// ==========================================
// DEPLOYMENT CONFIGURATION
// ==========================================
// To use your saved assets:
// 1. Create a folder named 'public' in your project root.
// 2. Create a folder named 'assets' inside 'public'.
// 3. Move your downloaded files there (e.g., hero.png, mission.mp4).
// 4. Update the paths below (e.g., heroImage: '/assets/hero.png').
// ==========================================
const SAVED_ASSETS = {
  heroImage: null,      // Example: '/assets/hero.png'
  missionVideo: null,   // Example: '/assets/mission.mp4'
};

const INITIAL_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Medical Insights Intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://videos.pexels.com/video-files/3196362/3196362-hd_1280_720_25fps.mp4',
    // To use local video: videoUrl: '/assets/card1.mp4',
    videoPrompt: 'Two medical science liaisons looking at data and discussing between themselves, dressed professionally (no lab coats), photorealistic, 4k, loopable',
    description: 'Transforms fragmented data into strategic intelligence by integrating multi-source analytics with our sophisticated AI engine.'
  },
  {
    id: '2',
    title: 'KOL Intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://videos.pexels.com/video-files/6914945/6914945-hd_1280_720_25fps.mp4',
    videoPrompt: 'A speaker at a medical conference speaking to colleagues in the plenum, professional style, photorealistic, 4k, 8 seconds',
    description: 'Connects the dots and create data-driven engagement lists that prioritize the most influential voices across specific indications and therapeutic categories.'
  },
  {
    id: '3',
    title: 'Congress Intelligence',
    imageUrl: 'https://picsum.photos/seed/medical_congress/800/600',
    videoUrl: 'https://videos.pexels.com/video-files/3252273/3252273-hd_1280_720_25fps.mp4',
    videoPrompt: 'A busy hallway with professionals speaking and interacting with each other dressed professionally at a conference, photorealistic, 4k',
    description: 'Eliminate weeks of manual work by using our advanced AI to ingest, analyze, and act on real-time abstracts, presentations, and competitor symposia at major medical events.'
  }
];

const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const footerRef = useRef<HTMLDivElement>(null);

  // Persistent State for Uploads (Initialized with SAVED_ASSETS if available)
  const [heroImage, setHeroImage] = useState<string | null>(SAVED_ASSETS.heroImage);
  const [missionVideo, setMissionVideo] = useState<string | null>(SAVED_ASSETS.missionVideo);
  const [newsItems, setNewsItems] = useState<NewsItem[]>(INITIAL_NEWS);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderHidden(entry.isIntersecting);
      },
      { threshold: 0.1 } // Hide header when 10% of footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleNewsItemUpdate = (id: string, url: string, type: 'image' | 'video') => {
    setNewsItems(prev => prev.map(item => 
      item.id === id ? { ...item, customMediaUrl: url, customMediaType: type } : item
    ));
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-google-blue selection:text-white">
      <Header 
        onSearchClick={() => setIsSearchOpen(true)} 
        onNavigate={handleNavigate} 
        isHidden={isHeaderHidden} 
      />
      
      <main>
        {currentPage === 'home' && (
          <Home 
            onNavigate={handleNavigate}
            heroImage={heroImage}
            onHeroImageUpload={setHeroImage}
            newsItems={newsItems}
            onNewsItemUpdate={handleNewsItemUpdate}
          />
        )}
        {currentPage === 'modules' && <UseCases />}
        {currentPage === 'intelligence' && <IntelligenceLayer />}
        {currentPage === 'mission' && (
          <Mission 
            videoSrc={missionVideo} 
            onVideoUpload={setMissionVideo} 
          />
        )}
      </main>

      <div ref={footerRef}>
        <Footer onNavigate={handleNavigate} />
      </div>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};

export default App;