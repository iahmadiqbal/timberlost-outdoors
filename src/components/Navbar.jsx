import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-2xl' 
        : 'bg-gradient-to-r from-primary-900 via-primary-800 to-accent-700'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-14 h-14 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                <span className="text-3xl font-black text-white">T</span>
              </div>
            </div>
            <div className="transform group-hover:translate-x-1 transition-transform duration-300">
              <h1 className={`text-xl font-black tracking-tight ${
                scrolled ? 'text-primary-900' : 'text-white'
              }`}>
                Timberlost Outdoors
              </h1>
              <p className={`text-xs font-semibold ${
                scrolled ? 'text-accent-600' : 'text-accent-300'
              }`}>
                & Surplus
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 ${
                  isActive(link.path)
                    ? scrolled
                      ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                      : 'bg-white text-primary-900 shadow-xl'
                    : scrolled
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-white hover:bg-white/20'
                } slide-in-right stagger-${index + 1}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {isActive(link.path) && (
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 opacity-20 blur-xl"></span>
                )}
                <span className="relative">{link.name}</span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="relative ml-4 px-6 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-xl font-black text-sm transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl hover:from-accent-600 hover:to-accent-700 pulse-glow overflow-hidden group slide-in-right stagger-6"
              style={{ animationDelay: '0.5s' }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent shimmer"></span>
              <span className="relative flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Visit Store</span>
              </span>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
              scrolled ? 'text-primary-900 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Sliding Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 shadow-2xl transform transition-all duration-700 ease-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-accent-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Header with Branding */}
        <div className="relative flex justify-between items-center p-6 border-b-2 border-white/20 backdrop-blur-sm bg-white/5">
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <span className="text-3xl font-black text-white">T</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-black text-white leading-tight">Timberlost</h3>
              <p className="text-sm text-accent-300 font-bold">Outdoors & Surplus</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:rotate-90 hover:scale-110 shadow-lg border border-white/20"
          >
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items with Enhanced Styling */}
        <div className="relative px-6 py-8 space-y-3 overflow-y-auto h-[calc(100%-180px)]">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-4 rounded-2xl font-black text-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2 relative overflow-hidden ${
                isActive(link.path)
                  ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-2xl'
                  : 'text-white hover:bg-white/20 border-2 border-white/20 hover:border-accent-400/50 backdrop-blur-sm'
              } ${isOpen ? 'slide-in-right' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Shimmer effect on hover */}
              {!isActive(link.path) && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity shimmer"></span>
              )}
              
              <div className="flex items-center justify-between relative z-10">
                <span className="flex items-center space-x-3">
                  <span className={`w-2.5 h-2.5 rounded-full ${isActive(link.path) ? 'bg-white animate-pulse' : 'bg-accent-400'}`}></span>
                  <span>{link.name}</span>
                </span>
                <svg className={`w-6 h-6 transform transition-transform ${isActive(link.path) ? 'translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Enhanced CTA Button */}
        <div className="relative px-6 pb-6">
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`block px-6 py-5 bg-white text-primary-900 rounded-2xl font-black text-lg text-center transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-accent-500/50 relative overflow-hidden group ${isOpen ? 'slide-in-right' : ''}`}
            style={{ animationDelay: '0.5s' }}
          >
            {/* Animated background */}
            <span className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            
            <div className="flex items-center justify-center space-x-2 relative z-10">
              <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Visit Our Store</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Enhanced Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-md z-40 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
