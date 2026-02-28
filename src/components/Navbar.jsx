import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

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
        : 'bg-white shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl overflow-hidden">
                <img src={logo} alt="Timberlost Outdoors" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="transform group-hover:translate-x-1 transition-transform duration-300">
              <h1 className="text-xl font-black tracking-tight text-black">
                Timberlost Outdoors
              </h1>
              <p className="text-xs font-semibold text-secondary">
                Outdoor Outfitter
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
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                    : 'text-black hover:text-black'
                } slide-in-right stagger-${index + 1}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {isActive(link.path) && (
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-accent opacity-20 blur-xl"></span>
                )}
                <span className="relative">{link.name}</span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="relative ml-4 px-6 py-2.5 bg-gradient-to-r from-accent to-primary-hover text-white rounded-xl font-black text-sm transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl hover:from-primary hover:to-accent pulse-glow overflow-hidden group slide-in-right stagger-6"
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
            className="md:hidden p-2 rounded-lg transition-all duration-300 transform hover:scale-110 text-black hover:bg-gray-100"
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

      {/* Mobile Menu - Modern Redesign */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50 shadow-2xl transform transition-transform duration-300 ease-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b-2 border-orange-200 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden bg-gradient-to-br from-orange-500 to-amber-600 p-0.5">
              <div className="w-full h-full bg-white rounded-lg p-1">
                <img src={logo} alt="Timberlost Outdoors" className="w-full h-full object-contain" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Timberlost</h3>
              <p className="text-xs text-gray-600 font-medium">Outdoors & Surplus</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 bg-gradient-to-br from-orange-100 to-amber-100 hover:from-orange-200 hover:to-amber-200 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className="px-6 py-8 space-y-3">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 ${
                isActive(link.path)
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-900 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:text-orange-600 shadow-md hover:shadow-lg border-2 border-transparent hover:border-orange-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <span>{link.name}</span>
                {isActive(link.path) && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="px-6 py-4">
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white rounded-xl font-bold text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Visit Our Store</span>
            </div>
          </Link>
        </div>

        {/* Footer Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white to-transparent">
          <p className="text-xs text-center text-gray-600 font-medium">
            Made with ❤️ for Saskatchewan's outdoor community
          </p>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
