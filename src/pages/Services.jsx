import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { FaCampground, FaFish, FaSnowflake, FaTshirt, FaPaw, FaTint, FaLightbulb, FaAward, FaMapMarkedAlt, FaUserTie, FaClipboardCheck, FaCompass, FaCertificate, FaShieldAlt, FaDollarSign } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCampground className="text-5xl" />,
      title: 'Camping & Outdoor Gear',
      description: 'Complete range of camping equipment including tents, sleeping bags, backpacks, cooking gear, and all the essentials for your outdoor adventures. Quality brands at competitive prices.',
      image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <FaFish className="text-5xl" />,
      title: 'Hunting & Fishing Equipment',
      description: 'Comprehensive selection of hunting and fishing gear for Saskatchewan sportsmen. From rods and reels to hunting accessories, we have what you need for a successful outing.',
      image: 'https://images.pexels.com/photos/2249602/pexels-photo-2249602.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <FaSnowflake className="text-5xl" />,
      title: 'Winter Accessories',
      description: 'Stay warm and safe during Saskatchewan winters with our selection of winter clothing, boots, gloves, and cold-weather accessories designed for extreme conditions.',
      image: 'https://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <FaTshirt className="text-5xl" />,
      title: 'Outdoor Clothing',
      description: 'Durable, weather-resistant clothing for work and play. From base layers to outerwear, find apparel that stands up to Saskatchewan\'s challenging climate.',
      image: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <FaPaw className="text-5xl" />,
      title: 'Pet & Farm Feed',
      description: 'Quality feed and supplies for your pets and farm animals. We stock a variety of feeds, supplements, and care products to keep your animals healthy and happy.',
      image: 'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <FaTint className="text-5xl" />,
      title: 'Ice & Water Sales',
      description: 'Fresh ice and water available for your daily needs, events, or emergencies. Convenient and affordable solutions for staying hydrated and keeping things cool.',
      image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/80 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Outdoor services" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center">
            <div className="inline-block mb-6 px-10 py-4 bg-white/95 backdrop-blur-md rounded-full border-2 border-amber-500 shadow-xl animate-bounce">
              <span className="text-base font-bold tracking-wider text-amber-700 uppercase">Our Services</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 !text-white drop-shadow-2xl">Our Services</h1>
            <p className="text-2xl md:text-3xl !text-white drop-shadow-lg max-w-3xl mx-auto font-medium">Everything you need for outdoor adventures and daily necessities</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-10 py-4 bg-white rounded-full shadow-lg border-2 border-amber-500 hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <span className="text-base font-bold text-amber-700 uppercase tracking-wider">Complete Solutions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">Complete Outdoor Solutions</h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
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
            <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-amber-200 hover:border-amber-500 transition-all duration-500 group hover:shadow-amber-500/30 hover:-translate-y-2">
              <div className="relative inline-block mb-6">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <FaUserTie className="text-3xl text-amber-500" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-amber-900 mb-4 group-hover:text-amber-700 transition-colors">Expert Advice</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Not sure what you need? Our knowledgeable staff is here to help. We understand Saskatchewan's unique outdoor conditions and can recommend the right equipment for your specific situation.
              </p>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-center text-lg group/item hover:translate-x-2 transition-transform">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    <FaClipboardCheck className="text-sm text-amber-500" />
                  </div>
                  Personalized recommendations
                </li>
                <li className="flex items-center text-lg group/item hover:translate-x-2 transition-transform">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    <FaLightbulb className="text-sm text-amber-500" />
                  </div>
                  Product demonstrations
                </li>
                <li className="flex items-center text-lg group/item hover:translate-x-2 transition-transform">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    <FaCompass className="text-sm text-amber-500" />
                  </div>
                  Local outdoor insights
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-amber-200 hover:border-amber-500 transition-all duration-500 group hover:shadow-amber-500/30 hover:-translate-y-2">
              <div className="relative inline-block mb-6">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <FaCertificate className="text-3xl text-amber-500" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-amber-900 mb-4 group-hover:text-amber-700 transition-colors">Quality Brands</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We carefully select products from trusted manufacturers known for durability and performance. Every item in our store meets our high standards for quality and value.
              </p>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-center text-lg group/item hover:translate-x-2 transition-transform">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    <FaAward className="text-sm text-amber-500" />
                  </div>
                  Trusted manufacturers
                </li>
                <li className="flex items-center text-lg group/item hover:translate-x-2 transition-transform">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    <FaShieldAlt className="text-sm text-amber-500" />
                  </div>
                  Tested for durability
                </li>
                <li className="flex items-center text-lg group/item hover:translate-x-2 transition-transform">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    <FaDollarSign className="text-sm text-amber-500" />
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
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/80 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Ready to get started" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 !text-white drop-shadow-2xl">Ready to Get Started?</h2>
          <p className="text-2xl md:text-3xl mb-12 !text-white drop-shadow-lg leading-relaxed">
            Visit our store and let us help you find exactly what you need
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-amber-700 px-8 py-4 rounded-xl font-medium text-lg hover:-translate-y-2 transition-all duration-500 hover:bg-amber-50 border-2 border-amber-500 float-animation">
            <FaMapMarkedAlt className="text-xl" />
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
