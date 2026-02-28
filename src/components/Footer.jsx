import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-4 group">
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
            <p className="mb-4 text-base leading-relaxed max-w-md font-medium" style={{ color: '#5C4A3A' }}>
              Serving Saskatchewan's outdoor community with quality camping gear, hunting and fishing equipment, winter accessories, and farm supplies.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.facebook.com/TimberlostOutdoors/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative"
              >
                <div className="relative w-12 h-12 bg-white hover:bg-black text-color-primary hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border-2 border-color-primary shadow-lg">
                  <FaFacebook className="w-6 h-6" />
                </div>
              </a>
              <a 
                href="https://www.instagram.com/timberlostoutdoors/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative"
              >
                <div className="relative w-12 h-12 bg-white hover:bg-black text-color-primary hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border-2 border-color-primary shadow-lg">
                  <FaInstagram className="w-6 h-6" />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-4 flex items-center font-['Poppins']" style={{ color: '#2C1810' }}>
              <span className="w-1.5 h-6 bg-gradient-to-b from-color-primary to-color-accent rounded-full mr-3"></span>
              Quick Links
            </h4>
            <ul className="space-y-2">
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
                    className="hover:text-color-primary transition-all duration-300 flex items-center group font-medium font-['Poppins']"
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
            <h4 className="text-xl font-black mb-4 flex items-center font-['Poppins']" style={{ color: '#2C1810' }}>
              <span className="w-1.5 h-6 bg-gradient-to-b from-color-primary to-color-accent rounded-full mr-3"></span>
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center group">
                <div className="w-10 h-10 bg-white hover:bg-black rounded-lg flex items-center justify-center mr-3 flex-shrink-0 transition-all duration-300 border-2 border-color-primary shadow-md">
                  <MdLocationOn className="w-5 h-5 text-color-accent group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm font-['Poppins']" style={{ color: '#2C1810' }}>105 Main St, Big River</p>
                  <p className="font-bold text-sm font-['Poppins']" style={{ color: '#2C1810' }}>SK S0J 0E0, Canada</p>
                </div>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 bg-white hover:bg-black rounded-lg flex items-center justify-center mr-3 flex-shrink-0 transition-all duration-300 border-2 border-color-primary shadow-md">
                  <MdPhone className="w-5 h-5 text-color-accent group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="tel:+13064692437" className="hover:text-color-primary transition-colors text-sm block whitespace-nowrap font-['Poppins']" style={{ color: '#2C1810' }}>
                    +1 306-469-2437
                  </a>
                </div>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 bg-white hover:bg-black rounded-lg flex items-center justify-center mr-3 flex-shrink-0 transition-all duration-300 border-2 border-color-primary shadow-md">
                  <MdEmail className="w-5 h-5 text-color-accent group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="mailto:info@timberlostoutdoorsandsurplus.com" className="hover:text-color-primary transition-colors text-sm block whitespace-nowrap overflow-hidden text-ellipsis font-['Poppins']" style={{ color: '#2C1810' }}>
                    info@timberlostoutdoorsandsurplus.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-color-primary/20 pt-6 pb-4">
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
