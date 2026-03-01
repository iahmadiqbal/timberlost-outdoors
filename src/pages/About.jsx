import { FaCheckCircle, FaAward, FaUsers, FaHandshake, FaStore, FaDollarSign, FaStar, FaHeart, FaMapMarkerAlt, FaShoppingCart, FaUserTie, FaCampground, FaFish, FaTractor } from 'react-icons/fa';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/80 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Outdoor store interior" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center">
            <div className="inline-block mb-6 px-10 py-4 bg-white/95 backdrop-blur-md rounded-full border-2 border-amber-500 shadow-xl animate-bounce">
              <span className="text-base font-bold tracking-wider text-amber-700 uppercase">About Us</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 !text-white drop-shadow-2xl">Our Story</h1>
            <p className="text-2xl md:text-3xl !text-white drop-shadow-lg max-w-3xl mx-auto font-medium">Serving Saskatchewan's outdoor community since day one</p>
          </div>
        </div>
      </section>

      {/* Company Story with Image */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-10 py-4 bg-white rounded-full border-2 border-amber-500 shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <span className="text-base font-bold text-amber-700 uppercase tracking-wider">Who We Are</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
              <span className="text-amber-900">Your Outdoor Adventure</span>
              <br />
              <span className="text-amber-900">Starts Here</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Timberlost Outdoors & Surplus is your trusted partner for all outdoor adventures and daily necessities in Saskatchewan. We understand the unique needs of our community, from weekend campers to serious hunters, from pet owners to farmers.
                </p>
                <p>
                  Our store brings together a comprehensive selection of quality products under one roof, making it easy for you to find everything you need without running all over town. Whether you're planning a fishing trip, preparing for winter, or stocking up on farm feed, we've got you covered.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg border-2 border-amber-200 hover:scale-110 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-2 group-hover:rotate-12 transition-transform duration-300">
                    <FaCampground className="text-xl text-amber-500 group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <span className="text-sm font-bold text-amber-900">Camping</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg border-2 border-amber-200 hover:scale-110 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-2 group-hover:rotate-12 transition-transform duration-300">
                    <FaFish className="text-xl text-amber-500 group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <span className="text-sm font-bold text-amber-900">Fishing</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg border-2 border-amber-200 hover:scale-110 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-2 group-hover:rotate-12 transition-transform duration-300">
                    <FaTractor className="text-xl text-amber-500 group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <span className="text-sm font-bold text-amber-900">Farm</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-500 hover:border-amber-600 hover:shadow-amber-500/50 transition-all duration-500 hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Outdoor camping and adventure gear" 
                  className="w-full h-auto hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-8">Our Mission</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                To provide Saskatchewan's outdoor community with quality gear, equipment, and supplies at competitive prices, backed by friendly, knowledgeable service that helps every customer find exactly what they need.
              </p>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FaStar className="text-2xl text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900 mb-2 text-xl">Quality First</h3>
                    <p className="text-gray-700">We carefully select products from trusted brands</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FaHeart className="text-2xl text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900 mb-2 text-xl">Customer Focus</h3>
                    <p className="text-gray-700">Your satisfaction is our top priority</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FaUsers className="text-2xl text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900 mb-2 text-xl">Community Driven</h3>
                    <p className="text-gray-700">Proud to serve Saskatchewan's outdoor enthusiasts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl border-4 border-amber-500 p-10">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8">What Sets Us Apart</h3>
              <ul className="space-y-5">
                <li className="flex items-center text-lg text-gray-700">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaShoppingCart className="text-xl text-amber-500" />
                  </div>
                  <span>Complete range of outdoor products</span>
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaUserTie className="text-xl text-amber-500" />
                  </div>
                  <span>Knowledgeable, friendly staff</span>
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaDollarSign className="text-xl text-amber-500" />
                  </div>
                  <span>Competitive pricing</span>
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaStore className="text-xl text-amber-500" />
                  </div>
                  <span>One-stop shopping convenience</span>
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="text-xl text-amber-500" />
                  </div>
                  <span>Local Saskatchewan business</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Alternating Left/Right Layout */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-10 py-4 bg-white rounded-full border-2 border-amber-500 shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <span className="text-base font-bold text-amber-700 uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">Why Choose Timberlost?</h2>
          </div>
          
          {/* Alternating Layout Boxes */}
          <div className="space-y-16">
            {/* Box 1 - Image Left, Content Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Expert guidance for outdoor gear" 
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-amber-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaUsers className="text-3xl text-amber-500" />
                  </div>
                  <h3 className="text-4xl font-bold text-amber-900">Expert Guidance</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our staff knows outdoor gear inside and out. We'll help you find the perfect equipment for your specific needs and budget. Whether you're a seasoned outdoorsman or just starting your adventure, we provide personalized recommendations based on real experience.
                </p>
              </div>
            </div>

            {/* Box 2 - Content Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-amber-200 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaStore className="text-3xl text-amber-500" />
                  </div>
                  <h3 className="text-4xl font-bold text-amber-900">One-Stop Shop</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From camping gear to farm feed, winter accessories to fishing equipment - find everything you need in one convenient location. Save time and gas by getting all your outdoor and farm supplies under one roof.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl lg:order-2">
                <img 
                  src="https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="One-stop outdoor and farm supply shop" 
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Box 3 - Image Left, Content Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/5632383/pexels-photo-5632383.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Great value outdoor equipment" 
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-amber-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaDollarSign className="text-3xl text-amber-500" />
                  </div>
                  <h3 className="text-4xl font-bold text-amber-900">Great Value</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Quality products at competitive prices. We believe everyone should have access to reliable outdoor gear without breaking the bank. Check our weekly specials and seasonal deals for even better savings on top brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
