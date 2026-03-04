import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline';
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

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-14 h-14 bg-gradient-to-br from-primary to-accent flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl overflow-hidden">
                <img src={logo} alt="Timberlost Outdoors" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="transform group-hover:translate-x-1 transition-transform duration-300">
              <h1 className="text-base md:text-xl font-black tracking-tight text-black leading-tight">
                Timberlost Outdoors
              </h1>
              <p className="text-base md:text-xl font-black tracking-tight text-black leading-tight">
                and Surplus
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2.5 rounded-xl text-base transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-primary to-accent text-white font-bold'
                    : 'text-black hover:text-primary font-medium'
                } slide-in-right stagger-${index + 1}`}
                style={{ animationDelay: `${index * 0.1}s`, fontWeight: isActive(link.path) ? '700' : '500' }}
              >
                <span className="relative">{link.name}</span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className={`relative ml-4 px-4 py-2 rounded-lg text-sm transition-all duration-300 border border-primary ${
                isActive('/contact')
                  ? 'bg-gradient-to-r from-primary to-accent text-white font-bold'
                  : 'text-black hover:text-primary font-medium bg-white'
              } slide-in-right stagger-6`}
              style={{ animationDelay: "0.5s", fontWeight: isActive('/contact') ? '700' : '500' }}
            >
              <span className="relative flex items-center space-x-1.5">
                <BuildingStorefrontIcon className="w-4 h-4" />
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

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu - Full Screen Overlay Style */}
      <div className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-white">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg overflow-hidden">
              <img src={logo} alt="Timberlost Outdoors" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-sm font-black text-black leading-tight">Timberlost Outdoors</h3>
              <p className="text-sm font-black text-black leading-tight">and Surplus</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-all duration-300"
          >
            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className="px-6 py-8 space-y-3 bg-white">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-sm hover:shadow-md border ${
                isActive(link.path)
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white border-transparent'
                  : 'bg-white text-gray-900 hover:bg-gray-50 border-gray-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Visit Store Button */}
        <div className="px-6 py-4 bg-white">
          <a
            href="#store"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3.5 rounded-xl text-center font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 transition-all duration-300 border border-gray-200"
          >
            <div className="flex items-center justify-center space-x-2">
              <BuildingStorefrontIcon className="w-5 h-5" />
              <span>Visit Our Store</span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
