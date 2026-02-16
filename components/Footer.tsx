import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: 'home' },
  { label: 'Modules', href: 'modules' },
  { label: 'Intelligence', href: 'intelligence' },
  { label: 'Mission', href: 'mission' },
];

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-50 py-20 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col gap-3 lg:items-start items-center text-center lg:text-left">
          <button onClick={() => onNavigate('home')} className="text-2xl tracking-tighter text-primary block font-logo uppercase hover:opacity-90 transition-opacity">
             Aurivian
          </button>
          <p className="text-gray-500 text-lg font-medium">
            The Intelligence Layer for Life Science
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button 
              key={item.label} 
              onClick={() => item.href !== '#' && onNavigate(item.href)}
              className="text-sm font-semibold tracking-wide uppercase text-primary hover:text-google-blue transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div>
           <a 
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 bg-google-blue text-white rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-blue-600 transition-colors shadow-sm"
          >
            Book demo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;