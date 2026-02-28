const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Mountain landscape" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-white/90 backdrop-blur-md rounded-full border-2 border-amber-600 shadow-xl">
              <span className="text-sm font-semibold tracking-wider text-amber-700 uppercase">About Us</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl">Our Story</h1>
            <p className="text-2xl text-white drop-shadow-lg max-w-3xl mx-auto font-medium">Serving Saskatchewan's outdoor community since day one</p>
          </div>
        </div>
      </section>

      {/* Company Story with Image */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/75 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Our story background" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 opacity-20 z-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-300 rounded-full blur-3xl float-animation"></div>
        </div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-semibold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl mb-8">Our Story</h2>
              <div className="space-y-6 text-white drop-shadow-xl text-lg leading-relaxed font-normal">
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
              <div className="relative rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Camping gear" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-300 rounded-full blur-3xl float-animation"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-300 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-semibold text-amber-900 mb-8">Our Mission</h2>
              <p className="text-xl text-amber-900 mb-8 leading-relaxed font-normal">
                To provide Saskatchewan's outdoor community with quality gear, equipment, and supplies at competitive prices, backed by friendly, knowledgeable service that helps every customer find exactly what they need.
              </p>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2 text-lg">Community Driven</h3>
                    <p className="text-amber-800 font-normal">Proud to serve Saskatchewan's outdoor enthusiasts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl border-4 border-amber-500 p-10 float-animation" style={{ animationDelay: '1s' }}>
              <h3 className="text-3xl font-semibold text-amber-900 mb-8">What Sets Us Apart</h3>
              <ul className="space-y-5">
                <li className="flex items-center text-lg font-normal text-amber-900">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Complete range of outdoor products</span>
                </li>
                <li className="flex items-center text-lg font-normal text-amber-900">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Knowledgeable, friendly staff</span>
                </li>
                <li className="flex items-center text-lg font-normal text-amber-900">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Competitive pricing</span>
                </li>
                <li className="flex items-center text-lg font-normal text-amber-900">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>One-stop shopping convenience</span>
                </li>
                <li className="flex items-center text-lg font-normal text-amber-900">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Local Saskatchewan business</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Real-time Info with Left Image */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full border-2 border-amber-300">
              <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-semibold text-amber-900 mb-6">Why Choose Timberlost?</h2>
          </div>
          
          {/* Real-time Info Boxes */}
          <div className="space-y-12">
            {/* Box 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=90&auto=format&fit=crop" 
                  alt="Expert guidance" 
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-amber-900 mb-4" style={{ fontSize: '45px' }}>Expert Guidance</h3>
                <p className="text-amber-800 leading-relaxed" style={{ fontSize: '17px' }}>
                  Our staff knows outdoor gear inside and out. We'll help you find the perfect equipment for your specific needs and budget. Whether you're a seasoned outdoorsman or just starting your adventure, we provide personalized recommendations based on real experience.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=90&auto=format&fit=crop" 
                  alt="One-stop shop" 
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-amber-900 mb-4" style={{ fontSize: '45px' }}>One-Stop Shop</h3>
                <p className="text-amber-800 leading-relaxed" style={{ fontSize: '17px' }}>
                  From camping gear to farm feed, winter accessories to fishing equipment - find everything you need in one convenient location. Save time and gas by getting all your outdoor and farm supplies under one roof.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&q=90&auto=format&fit=crop" 
                  alt="Great value" 
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-amber-900 mb-4" style={{ fontSize: '45px' }}>Great Value</h3>
                <p className="text-amber-800 leading-relaxed" style={{ fontSize: '17px' }}>
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
