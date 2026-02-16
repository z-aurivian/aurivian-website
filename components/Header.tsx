import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

interface HeaderProps {
  onSearchClick: () => void;
  onNavigate: (page: string) => void;
  isHidden?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'Modules', href: 'modules' },
  { label: 'Intelligence', href: 'intelligence' },
  { label: 'Mission', href: 'mission' },
];

const Header: React.FC<HeaderProps> = ({ onSearchClick, onNavigate, isHidden = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    onNavigate(href);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out transform ${
        isHidden ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      } ${
        isScrolled || mobileMenuOpen ? 'bg-white shadow-sm py-4' : 'bg-white/80 backdrop-blur-md py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between relative">
        
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
          <button onClick={() => handleNavClick('home')} className="flex items-center gap-2 text-2xl tracking-tighter text-primary font-logo uppercase hover:opacity-90 transition-opacity">
             Aurivian
          </button>
        </div>

        {/* Desktop Nav - Centered */}
        <nav className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-semibold tracking-wide uppercase text-primary hover:text-google-blue transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 z-50">
          <a 
            href="#"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-google-blue text-white rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-blue-600 transition-colors shadow-sm"
          >
            Book demo
          </a>
          
          <button 
            className="lg:hidden p-2 text-primary hover:bg-gray-100 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 lg:hidden pt-28 px-6 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick(item.href)}
              className="text-xl font-bold tracking-tight uppercase text-primary border-b border-gray-100 pb-4 text-left"
            >
              {item.label}
            </button>
          ))}
          <a 
            href="#"
            className="text-xl font-bold tracking-tight uppercase text-google-blue border-b border-gray-100 pb-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book demo
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;