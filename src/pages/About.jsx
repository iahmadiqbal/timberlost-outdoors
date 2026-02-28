const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-amber-50/80 to-orange-50/70 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=90&auto=format&fit=crop" 
            alt="Mountain landscape" 
            className="w-full h-full object-cover opacity-40"
            loading="eager"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-white/90 backdrop-blur-md rounded-full border-2 border-amber-600 shadow-xl">
              <span className="text-sm font-semibold tracking-wider text-amber-700 uppercase">About Us</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">Our Story</h1>
            <p className="text-2xl text-amber-800 max-w-3xl mx-auto font-medium">Serving Saskatchewan's outdoor community since day one</p>
          </div>
        </div>
      </section>

      {/* Company Story with Image */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-semibold gradient-text mb-8">Our Story</h2>
              <div className="space-y-6 text-amber-900 text-lg leading-relaxed font-normal">
                <p>
                  Timberlost Outdoors & Surplus is your trusted partner for all outdoor adventures and daily necessities in Saskatchewan. We understand the unique needs of our community, from weekend campers to serious hunters, from pet owners to farmers.
                </p>
                <p>
                  Our store brings together a comprehensive selection of quality products under one roof, making it easy for you to find everything you need without running all over town. Whether you're planning a fishing trip, preparing for winter, or stocking up on farm feed, we've got you covered.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-3xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=90&auto=format&fit=crop" 
                alt="Camping gear" 
                className="relative rounded-3xl shadow-2xl border-4 border-amber-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-semibold gradient-text mb-8">Our Mission</h2>
              <p className="text-xl text-amber-900 mb-8 leading-relaxed font-normal">
                To provide Saskatchewan's outdoor community with quality gear, equipment, and supplies at competitive prices, backed by friendly, knowledgeable service that helps every customer find exactly what they need.
              </p>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2 text-lg">Quality First</h3>
                    <p className="text-amber-800 font-normal">We carefully select products from trusted brands</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2 text-lg">Customer Focus</h3>
                    <p className="text-amber-800 font-normal">Your satisfaction is our top priority</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2 text-lg">Community Driven</h3>
                    <p className="text-amber-800 font-normal">Proud to serve Saskatchewan's outdoor enthusiasts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-amber-600">
              {/* Background Image - Clear, not blurred */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=90&auto=format&fit=crop" 
                  alt="Mountain wilderness" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay for text visibility */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 to-orange-900/90 z-5"></div>
              
              {/* Content */}
              <div className="relative z-10 p-10 text-white">
                <h3 className="text-3xl font-semibold mb-8">What Sets Us Apart</h3>
                <ul className="space-y-5">
                  <li className="flex items-center text-lg font-normal">
                    <span className="text-3xl mr-4">✓</span>
                    <span>Complete range of outdoor products</span>
                  </li>
                  <li className="flex items-center text-lg font-normal">
                    <span className="text-3xl mr-4">✓</span>
                    <span>Knowledgeable, friendly staff</span>
                  </li>
                  <li className="flex items-center text-lg font-normal">
                    <span className="text-3xl mr-4">✓</span>
                    <span>Competitive pricing</span>
                  </li>
                  <li className="flex items-center text-lg font-normal">
                    <span className="text-3xl mr-4">✓</span>
                    <span>One-stop shopping convenience</span>
                  </li>
                  <li className="flex items-center text-lg font-normal">
                    <span className="text-3xl mr-4">✓</span>
                    <span>Local Saskatchewan business</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full border-2 border-amber-300">
              <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-semibold gradient-text mb-6">Why Choose Timberlost?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-amber-200 hover:border-amber-500 transition-all group">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=90&auto=format&fit=crop" 
                  alt="Camping gear" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/90 z-5"></div>
              
              {/* Content */}
              <div className="relative z-10 p-10 text-center">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                    <span className="text-5xl">🎯</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">Expert Guidance</h3>
                <p className="text-amber-800 text-lg leading-relaxed font-normal">
                  Our staff knows outdoor gear inside and out. We'll help you find the perfect equipment for your specific needs and budget.
                </p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-amber-200 hover:border-amber-500 transition-all group">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&q=90&auto=format&fit=crop" 
                  alt="Outdoor store" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/90 z-5"></div>
              
              {/* Content */}
              <div className="relative z-10 p-10 text-center">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                    <span className="text-5xl">🏪</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">One-Stop Shop</h3>
                <p className="text-amber-800 text-lg leading-relaxed font-normal">
                  From camping gear to farm feed, winter accessories to fishing equipment - find everything you need in one convenient location.
                </p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-amber-200 hover:border-amber-500 transition-all group">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600&q=90&auto=format&fit=crop" 
                  alt="Quality products" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/90 z-5"></div>
              
              {/* Content */}
              <div className="relative z-10 p-10 text-center">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                    <span className="text-5xl">💰</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">Great Value</h3>
                <p className="text-amber-800 text-lg leading-relaxed font-normal">
                  Quality products at competitive prices. We believe everyone should have access to reliable outdoor gear without breaking the bank.
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
