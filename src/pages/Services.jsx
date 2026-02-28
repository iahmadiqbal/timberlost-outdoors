import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: '⛺',
      title: 'Camping & Outdoor Gear',
      description: 'Complete range of camping equipment including tents, sleeping bags, backpacks, cooking gear, and all the essentials for your outdoor adventures. Quality brands at competitive prices.',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=90&auto=format&fit=crop'
    },
    {
      icon: '🎣',
      title: 'Hunting & Fishing Equipment',
      description: 'Comprehensive selection of hunting and fishing gear for Saskatchewan sportsmen. From rods and reels to hunting accessories, we have what you need for a successful outing.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=90&auto=format&fit=crop'
    },
    {
      icon: '❄️',
      title: 'Winter Accessories',
      description: 'Stay warm and safe during Saskatchewan winters with our selection of winter clothing, boots, gloves, and cold-weather accessories designed for extreme conditions.',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=90&auto=format&fit=crop'
    },
    {
      icon: '👕',
      title: 'Outdoor Clothing',
      description: 'Durable, weather-resistant clothing for work and play. From base layers to outerwear, find apparel that stands up to Saskatchewan\'s challenging climate.',
      image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600&q=90&auto=format&fit=crop'
    },
    {
      icon: '🐾',
      title: 'Pet & Farm Feed',
      description: 'Quality feed and supplies for your pets and farm animals. We stock a variety of feeds, supplements, and care products to keep your animals healthy and happy.',
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=90&auto=format&fit=crop'
    },
    {
      icon: '💧',
      title: 'Ice & Water Sales',
      description: 'Fresh ice and water available for your daily needs, events, or emergencies. Convenient and affordable solutions for staying hydrated and keeping things cool.',
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=90&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-accent-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-forest-100">Everything you need for outdoor adventures and daily necessities</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">Complete Outdoor Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Expert Advice</h3>
                <p className="text-gray-600 mb-4">
                  Not sure what you need? Our knowledgeable staff is here to help. We understand Saskatchewan's unique outdoor conditions and can recommend the right equipment for your specific situation.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-forest-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Personalized recommendations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-forest-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Product demonstrations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-forest-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Local outdoor insights
                  </li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Brands</h3>
                <p className="text-gray-600 mb-4">
                  We carefully select products from trusted manufacturers known for durability and performance. Every item in our store meets our high standards for quality and value.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-earth-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Trusted manufacturers
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-earth-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Tested for durability
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-earth-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Competitive pricing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary-700 to-accent-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90">
            Visit our store and let us help you find exactly what you need
          </p>
          <Link to="/contact" className="inline-block bg-white text-primary-900 px-10 py-5 rounded-2xl font-black text-xl hover:bg-accent-50 transition-all duration-300 shadow-2xl hover:shadow-accent-500/50 hover:scale-110 transform">
            📍 Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
