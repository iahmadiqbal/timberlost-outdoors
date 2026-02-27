import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  const services = [
    {
      icon: '⛺',
      title: 'Camping & Outdoor Gear',
      description: 'Complete range of camping equipment and outdoor gear for all your adventures.'
    },
    {
      icon: '🎣',
      title: 'Hunting & Fishing',
      description: 'Quality hunting and fishing equipment for Saskatchewan outdoor enthusiasts.'
    },
    {
      icon: '❄️',
      title: 'Winter Accessories',
      description: 'Stay warm with our selection of winter gear and accessories.'
    },
    {
      icon: '🐾',
      title: 'Pet & Farm Feed',
      description: 'Quality feed and supplies for your pets and farm animals.'
    },
    {
      icon: '💧',
      title: 'Ice & Water Sales',
      description: 'Fresh ice and water available for your daily needs.'
    },
    {
      icon: '👕',
      title: 'Outdoor Clothing',
      description: 'Durable clothing designed for outdoor activities and work.'
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
      <section className="relative animated-gradient text-white py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 fade-in-up">
              <span className="text-sm font-bold tracking-wider">🏔️ SASKATCHEWAN'S #1 OUTDOOR STORE</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight fade-in-up stagger-1">
              Your Complete
              <span className="block mt-3 neon-text">
                Outdoor Outfitter
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-4xl mx-auto font-medium leading-relaxed fade-in-up stagger-2">
              Quality camping gear, hunting & fishing equipment, winter accessories, and farm supplies at competitive prices
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up stagger-3">
              <Link to="/services" className="btn-primary inline-block pulse-glow">
                🎯 Explore Our Services
              </Link>
              <Link to="/contact" className="btn-secondary inline-block pulse-glow" style={{ animationDelay: '1.5s' }}>
                📍 Visit Our Store
              </Link>
            </div>
            
            {/* Scroll Indicator */}
            <div className="mt-16 fade-in-up stagger-4">
              <div className="inline-flex flex-col items-center animate-bounce">
                <span className="text-sm font-semibold mb-2 text-white/80">Scroll to Explore</span>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full">
              <span className="text-sm font-bold text-primary-700">⭐ WHY CHOOSE US</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black gradient-text mb-6">
              Why Choose Timberlost Outdoors?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
              We serve Saskatchewan's outdoor community with quality products and exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 card scale-in stagger-1 group">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 icon-bounce">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-3">Quality Products</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Carefully selected gear and equipment from trusted brands</p>
            </div>
            
            <div className="text-center p-8 card scale-in stagger-2 group">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 icon-bounce">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-3">Competitive Prices</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Great value on all your outdoor and farm supply needs</p>
            </div>
            
            <div className="text-center p-8 card scale-in stagger-3 group">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 icon-bounce">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-3">Friendly Staff</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Expert advice to help you find the right equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-primary-50/30 to-accent-50/30 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-block mb-4 px-4 py-1 bg-white rounded-full shadow-lg">
              <span className="text-sm font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">🎯 OUR SERVICES</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black gradient-text mb-6">Our Services</h2>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">Everything you need for outdoor adventures and daily necessities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`scale-in stagger-${index + 1}`}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 fade-in-up">
            <Link to="/services" className="btn-primary inline-block pulse-glow">
              🚀 View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full">
              <span className="text-sm font-bold text-primary-700">💬 TESTIMONIALS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black gradient-text mb-6">What Our Customers Say</h2>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">Trusted by Saskatchewan's outdoor community</p>
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
      <section className="py-24 animated-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="fade-in-up">
            <h2 className="text-5xl md:text-6xl font-black mb-6 neon-text">Ready to Gear Up?</h2>
            <p className="text-2xl md:text-3xl mb-12 text-white/90 font-medium leading-relaxed">
              Visit our store today and let our friendly staff help you find exactly what you need
            </p>
            <Link to="/contact" className="inline-block bg-white text-primary-900 px-10 py-5 rounded-2xl font-black text-xl hover:bg-accent-50 transition-all duration-300 shadow-2xl hover:shadow-accent-500/50 hover:scale-110 transform">
              🗺️ Get Directions Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
