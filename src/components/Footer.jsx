import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-950 via-primary-900 to-accent-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="text-3xl font-black">T</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black">Timberlost Outdoors</h3>
                <p className="text-accent-300 font-bold">& Surplus</p>
              </div>
            </div>
            <p className="text-primary-200 mb-6 text-lg leading-relaxed">
              Serving Saskatchewan's outdoor community with quality camping gear, hunting and fishing equipment, winter accessories, and farm supplies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/TimberlostOutdoors/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-white/10 hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-6 text-accent-300">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-200 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer">
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-200 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer">
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-200 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer">
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-200 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer">
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-200 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer">
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-6 text-accent-300">Contact Info</h4>
            <ul className="space-y-4 text-primary-200">
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-accent-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">Timberlost Outdoors and Surplus</p>
                  <p className="text-sm">Saskatchewan, Canada</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-accent-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <a href="tel:+13064692437" className="hover:text-white transition-colors font-semibold">
                    +1 306-469-2437
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-accent-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <a href="mailto:rylanmeginbir@gmail.com" className="hover:text-white transition-colors font-semibold break-all">
                    rylanmeginbir@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-primary-300 font-semibold text-lg">
            &copy; {new Date().getFullYear()} Timberlost Outdoors & Surplus. All rights reserved.
          </p>
          <p className="text-primary-400 mt-2">Made with ❤️ for Saskatchewan's outdoor community</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
