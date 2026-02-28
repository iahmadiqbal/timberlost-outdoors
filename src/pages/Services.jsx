import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: '⛺',
      title: 'Camping & Outdoor Gear',
      description: 'Complete range of camping equipment including tents, sleeping bags, backpacks, cooking gear, and all the essentials for your outdoor adventures. Quality brands at competitive prices.',
      image: 'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: '🎣',
      title: 'Hunting & Fishing Equipment',
      description: 'Comprehensive selection of hunting and fishing gear for Saskatchewan sportsmen. From rods and reels to hunting accessories, we have what you need for a successful outing.',
      image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: '❄️',
      title: 'Winter Accessories',
      description: 'Stay warm and safe during Saskatchewan winters with our selection of winter clothing, boots, gloves, and cold-weather accessories designed for extreme conditions.',
      image: 'https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: '👕',
      title: 'Outdoor Clothing',
      description: 'Durable, weather-resistant clothing for work and play. From base layers to outerwear, find apparel that stands up to Saskatchewan\'s challenging climate.',
      image: 'https://images.pexels.com/photos/1374064/pexels-photo-1374064.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: '🐾',
      title: 'Pet & Farm Feed',
      description: 'Quality feed and supplies for your pets and farm animals. We stock a variety of feeds, supplements, and care products to keep your animals healthy and happy.',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: '💧',
      title: 'Ice & Water Sales',
      description: 'Fresh ice and water available for your daily needs, events, or emergencies. Convenient and affordable solutions for staying hydrated and keeping things cool.',
      image: 'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Outdoor services" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-white/90 backdrop-blur-md rounded-full border-2 border-white shadow-xl">
              <span className="text-sm font-semibold tracking-wider text-amber-700 uppercase">Our Services</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">Our Services</h1>
            <p className="text-2xl text-white drop-shadow-lg max-w-3xl mx-auto font-medium">Everything you need for outdoor adventures and daily necessities</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-8 py-3 bg-gradient-to-r from-white to-orange-50 backdrop-blur-sm rounded-full shadow-xl border-2 border-orange-400">
              <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">🎯 Complete Solutions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent mb-6 drop-shadow-sm">Complete Outdoor Solutions</h2>
            <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto font-medium">
              From weekend camping trips to daily farm operations, we provide quality products and expert advice for all your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-2xl p-8 border-2 border-orange-300 hover:border-orange-500 transition-all duration-500 group hover:shadow-orange-500/30 hover:-translate-y-1">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">Expert Advice</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Not sure what you need? Our knowledgeable staff is here to help. We understand Saskatchewan's unique outdoor conditions and can recommend the right equipment for your specific situation.
              </p>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-center text-lg">
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Personalized recommendations
                </li>
                <li className="flex items-center text-lg">
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Product demonstrations
                </li>
                <li className="flex items-center text-lg">
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Local outdoor insights
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white to-amber-50 rounded-3xl shadow-2xl p-8 border-2 border-amber-300 hover:border-amber-500 transition-all duration-500 group hover:shadow-amber-500/30 hover:-translate-y-1">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">Quality Brands</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We carefully select products from trusted manufacturers known for durability and performance. Every item in our store meets our high standards for quality and value.
              </p>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-center text-lg">
                  <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Trusted manufacturers
                </li>
                <li className="flex items-center text-lg">
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Tested for durability
                </li>
                <li className="flex items-center text-lg">
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Competitive pricing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Ready to get started" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        <div className="absolute inset-0 z-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 text-white drop-shadow-2xl">Ready to Get Started?</h2>
          <p className="text-2xl md:text-3xl mb-12 text-white drop-shadow-lg font-normal leading-relaxed">
            Visit our store and let us help you find exactly what you need
          </p>
          <Link to="/contact" className="inline-block bg-white text-amber-700 px-10 py-5 rounded-2xl font-semibold text-xl hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 transform hover:bg-amber-50 border-2 border-amber-500">
            📍 Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
