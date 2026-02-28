import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden border-t-4 border-color-primary">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-color-primary via-color-accent to-color-primary z-30"></div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-color-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-color-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-color-primary to-color-accent rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 overflow-hidden shadow-2xl p-2 border-2 border-color-primary">
                  <img src={logo} alt="Timberlost Outdoors" className="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black" style={{ color: '#2C1810' }}>Timberlost Outdoors</h3>
                <p className="text-color-primary font-black">& Surplus</p>
              </div>
            </div>
            <p className="mb-6 text-base leading-relaxed max-w-md font-medium" style={{ color: '#5C4A3A' }}>
              Serving Saskatchewan's outdoor community with quality camping gear, hunting and fishing equipment, winter accessories, and farm supplies.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/TimberlostOutdoors/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-color-primary to-color-accent rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-12 h-12 bg-white hover:bg-gradient-to-br hover:from-color-primary hover:to-color-accent text-color-primary hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 border-2 border-color-primary group-hover:border-transparent shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-6 text-color-primary flex items-center">
              <span className="w-1.5 h-6 bg-gradient-to-b from-color-primary to-color-accent rounded-full mr-3"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' },
                { to: '/faq', label: 'FAQ' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="hover:text-color-primary transition-all duration-300 flex items-center group font-medium"
                    style={{ color: '#5C4A3A' }}
                  >
                    <span className="text-color-accent mr-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-black mb-6 text-color-primary flex items-center">
              <span className="w-1.5 h-6 bg-gradient-to-b from-color-primary to-color-accent rounded-full mr-3"></span>
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-color-primary group-hover:to-color-accent transition-all duration-300 border-2 border-color-primary shadow-md">
                  <svg className="w-5 h-5 text-color-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#2C1810' }}>Timberlost Outdoors and Surplus</p>
                  <p className="text-xs font-medium" style={{ color: '#8C7A6A' }}>Saskatchewan, Canada</p>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-color-primary group-hover:to-color-accent transition-all duration-300 border-2 border-color-primary shadow-md">
                  <svg className="w-5 h-5 text-color-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <a href="tel:+13064692437" className="hover:text-color-primary transition-colors font-bold text-sm block" style={{ color: '#2C1810' }}>
                    +1 306-469-2437
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-color-primary group-hover:to-color-accent transition-all duration-300 border-2 border-color-primary shadow-md">
                  <svg className="w-5 h-5 text-color-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <a href="mailto:rylanmeginbir@gmail.com" className="hover:text-color-primary transition-colors font-bold text-sm break-all block" style={{ color: '#2C1810' }}>
                    rylanmeginbir@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-color-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="font-bold" style={{ color: '#2C1810' }}>
              © {new Date().getFullYear()} Timberlost Outdoors & Surplus. All rights reserved.
            </p>
            <div className="flex items-center gap-2 font-medium" style={{ color: '#5C4A3A' }}>
              <span>Made with</span>
              <span className="text-color-error animate-pulse">❤️</span>
              <span>for Saskatchewan's outdoor community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
