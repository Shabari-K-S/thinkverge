
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-lg bg-slate-900/80 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-thinkverge-blue to-thinkverge-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TV</span>
            </div>
            <span className="text-white text-xl font-bold">ThinkVerge</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-thinkverge-blue transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="text-white hover:text-thinkverge-blue transition-colors"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-white hover:text-thinkverge-blue transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-thinkverge-blue transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-thinkverge-blue transition-colors"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-thinkverge-blue to-thinkverge-purple text-white px-6 py-2 rounded-lg font-semibold pulse-glow hover:scale-105 transition-transform">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 glass rounded-lg">
            <div className="flex flex-col space-y-4 p-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-thinkverge-blue transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('courses')}
                className="text-white hover:text-thinkverge-blue transition-colors text-left"
              >
                Courses
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-white hover:text-thinkverge-blue transition-colors text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-thinkverge-blue transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-thinkverge-blue transition-colors text-left"
              >
                Contact
              </button>
              <button className="bg-gradient-to-r from-thinkverge-blue to-thinkverge-purple text-white px-6 py-2 rounded-lg font-semibold mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
