const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-accent-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-forest-100">Serving Saskatchewan's outdoor community since day one</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold gradient-text mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Timberlost Outdoors & Surplus is your trusted partner for all outdoor adventures and daily necessities in Saskatchewan. We understand the unique needs of our community, from weekend campers to serious hunters, from pet owners to farmers.
            </p>
            <p className="text-lg leading-relaxed">
              Our store brings together a comprehensive selection of quality products under one roof, making it easy for you to find everything you need without running all over town. Whether you're planning a fishing trip, preparing for winter, or stocking up on farm feed, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold gradient-text mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To provide Saskatchewan's outdoor community with quality gear, equipment, and supplies at competitive prices, backed by friendly, knowledgeable service that helps every customer find exactly what they need.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-br from-forest-500 to-forest-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Quality First</h3>
                    <p className="text-gray-600">We carefully select products from trusted brands</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-br from-earth-500 to-earth-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Customer Focus</h3>
                    <p className="text-gray-600">Your satisfaction is our top priority</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-br from-forest-600 to-earth-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Community Driven</h3>
                    <p className="text-gray-600">Proud to serve Saskatchewan's outdoor enthusiasts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="p-8 bg-gradient-to-br from-forest-600 to-earth-600 text-white">
                <h3 className="text-2xl font-bold mb-6">What Sets Us Apart</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">✓</span>
                    <span>Complete range of outdoor products</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">✓</span>
                    <span>Knowledgeable, friendly staff</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">✓</span>
                    <span>Competitive pricing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">✓</span>
                    <span>One-stop shopping convenience</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">✓</span>
                    <span>Local Saskatchewan business</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold gradient-text mb-12 text-center">Why Choose Timberlost?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-forest-500 to-forest-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Guidance</h3>
                <p className="text-gray-600">
                  Our staff knows outdoor gear inside and out. We'll help you find the perfect equipment for your specific needs and budget.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-earth-500 to-earth-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🏪</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">One-Stop Shop</h3>
                <p className="text-gray-600">
                  From camping gear to farm feed, winter accessories to fishing equipment - find everything you need in one convenient location.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-forest-600 to-earth-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Great Value</h3>
                <p className="text-gray-600">
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
