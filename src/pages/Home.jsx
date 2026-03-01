import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { FaCheckCircle, FaTag, FaUsers, FaDirections } from 'react-icons/fa';

const Home = () => {
  const services = [
    {
      icon: '⛺',
      title: 'Outdoor & Camping Gear',
      description: 'Complete range of camping equipment and outdoor gear for all your adventures.',
      image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1920&q=90&auto=format&fit=crop'
    },
    {
      icon: '🎣',
      title: 'Hunting & Fishing Equipment',
      description: 'Quality hunting and fishing equipment for Saskatchewan outdoor enthusiasts.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=90&auto=format&fit=crop'
    },
    {
      icon: '👕',
      title: 'Outdoor Clothing & Apparel',
      description: 'Durable clothing designed for outdoor activities and work.',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1920&q=90&auto=format&fit=crop'
    },
    {
      icon: '💧',
      title: 'Food, Water, & Ice Supplies',
      description: 'Fresh ice and water available for your daily needs.',
      image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=1920&q=90&auto=format&fit=crop'
    },
    {
      icon: '🐾',
      title: 'Pet & Farm Feed Supplies',
      description: 'Quality feed and supplies for your pets and farm animals.',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=1920&q=90&auto=format&fit=crop'
    },
    {
      icon: '🤝',
      title: 'Helpful Onsite Service & Recommendations',
      description: 'Expert advice to help you find the right equipment.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=90&auto=format&fit=crop'
    }
  ];

  const testimonials = [
    {
      name: 'John M.',
      text: 'Great selection and friendly staff. They helped me find exactly what I needed for my camping trip.',
      rating: 5
    },
    {
      name: 'Sarah K.',
      text: 'Best outdoor store in Saskatchewan! Competitive prices and knowledgeable team.',
      rating: 5
    },
    {
      name: 'Mike R.',
      text: 'One-stop shop for all my hunting and fishing needs. Highly recommend!',
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Pixel Perfect from Pexels - Full Width 1920px */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Camping tent in forest" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        
        {/* Animated Particles/Elements */}
        <div className="absolute inset-0 overflow-hidden z-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-30 py-32 w-full">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-block mb-8 px-8 py-3 bg-white/90 backdrop-blur-xl rounded-full border-2 border-white shadow-2xl fade-in-up">
              <span className="text-sm font-semibold tracking-widest text-amber-700 uppercase">🏔️ Saskatchewan's Premier Outdoor Store</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight fade-in-up stagger-1">
              <span className="block text-white drop-shadow-2xl">Your Complete</span>
              <span className="block mt-4 text-white drop-shadow-2xl">
                Outdoor Outfitter
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white drop-shadow-lg mb-12 max-w-4xl mx-auto font-medium leading-relaxed fade-in-up stagger-2">
              Quality camping gear, hunting & fishing equipment, winter accessories, and farm supplies at competitive prices
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up stagger-3 mb-16">
              <Link to="/services" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-amber-500/50 border-2 border-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Explore Our Services</span>
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-orange-500/50 border-2 border-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Visit Our Store</span>
              </Link>
            </div>
            
            {/* Features Quick View */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 fade-in-up stagger-4">
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-white hover:border-amber-500 transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="text-4xl mb-3">⛺</div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Premium Gear</h3>
                <p className="text-sm text-amber-700 font-normal">Top quality outdoor equipment</p>
              </div>
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-white hover:border-amber-500 transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Best Prices</h3>
                <p className="text-sm text-amber-700 font-normal">Competitive rates guaranteed</p>
              </div>
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-white hover:border-amber-500 transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Expert Staff</h3>
                <p className="text-sm text-amber-700 font-normal">Knowledgeable & friendly</p>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="fade-in-up stagger-5">
              <div className="inline-flex flex-col items-center animate-bounce">
                <span className="text-sm font-medium mb-3 text-white drop-shadow-lg uppercase tracking-wider">Discover More</span>
                <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center p-2">
                  <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full border border-amber-300">
              <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Why Choose Us
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-semibold gradient-text mb-6">
              Why Choose Timberlost Outdoors?
            </h2>
            <p className="text-xl md:text-2xl text-amber-800 max-w-3xl mx-auto font-normal">
              We serve Saskatchewan's outdoor community with quality products and exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-3xl shadow-xl group hover:shadow-2xl transition-all p-10 text-center border-2 border-amber-200 hover:border-color-primary float-animation relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-color-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative inline-block mb-6">
                <div className="relative w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-all duration-500 shadow-lg border-2 border-amber-200">
                  <FaCheckCircle className="w-10 h-10 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 relative" style={{ color: '#2C1810' }}>Quality Products</h3>
              <p className="text-base leading-relaxed relative" style={{ color: '#5C4A3A' }}>Carefully selected gear and equipment from trusted brands</p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl group hover:shadow-2xl transition-all p-10 text-center border-2 border-amber-200 hover:border-color-primary float-animation relative overflow-hidden" style={{ animationDelay: '0.2s' }}>
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-color-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative inline-block mb-6">
                <div className="relative w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-all duration-500 shadow-lg border-2 border-amber-200">
                  <FaTag className="w-10 h-10 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 relative" style={{ color: '#2C1810' }}>Competitive Prices</h3>
              <p className="text-base leading-relaxed relative" style={{ color: '#5C4A3A' }}>Great value on all your outdoor and farm supply needs</p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl group hover:shadow-2xl transition-all p-10 text-center border-2 border-amber-200 hover:border-color-primary float-animation relative overflow-hidden" style={{ animationDelay: '0.4s' }}>
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-color-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative inline-block mb-6">
                <div className="relative w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-all duration-500 shadow-lg border-2 border-amber-200">
                  <FaUsers className="w-10 h-10 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 relative" style={{ color: '#2C1810' }}>Friendly Staff</h3>
              <p className="text-base leading-relaxed relative" style={{ color: '#5C4A3A' }}>Expert advice to help you find the right equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-amber-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-block mb-4 px-6 py-2 bg-white backdrop-blur-sm rounded-full shadow-lg border-2 border-amber-300">
              <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Our Services
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-semibold gradient-text mb-6">Our Services</h2>
            <p className="text-xl md:text-2xl text-amber-900 font-normal">Everything you need for outdoor adventures and daily necessities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`scale-in stagger-${index + 1}`}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 fade-in-up">
            <Link to="/services" className="btn-primary inline-flex items-center gap-3 pulse-glow shadow-2xl text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #F59E0B 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full border border-amber-300">
              <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">💬 Testimonials</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-semibold gradient-text mb-6">What Our Customers Say</h2>
            <p className="text-xl md:text-2xl text-amber-800 font-normal">Trusted by Saskatchewan's outdoor community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`scale-in stagger-${index + 1}`}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image - Pixel Perfect from Pexels */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/65 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Outdoor gear store" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        <div className="absolute inset-0 z-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-30 text-center">
          <div className="fade-in-up">
            <h2 className="text-5xl md:text-6xl font-semibold mb-6 !text-white drop-shadow-2xl">Ready to Gear Up?</h2>
            <p className="text-2xl md:text-3xl mb-12 text-white drop-shadow-lg font-normal leading-relaxed">
              Visit our store today and let our friendly staff help you find exactly what you need
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-amber-700 px-8 py-4 rounded-xl font-medium text-lg hover:-translate-y-2 transition-all duration-500 ease-in-out hover:bg-amber-50 border-2 border-amber-500 float-animation">
              <FaDirections className="text-xl" />
              Get Directions Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
