import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaCheckCircle, FaUsers, FaDollarSign, FaLightbulb, FaChevronDown, FaPhone } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg mb-4 border-2 border-amber-200 hover:border-amber-500 transition-all duration-300 hover:shadow-xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center hover:bg-amber-50 transition-colors rounded-2xl"
      >
        <h3 className="text-lg font-semibold text-amber-900 pr-4">{question}</h3>
        <FaChevronDown
          className={`w-6 h-6 text-amber-600 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'What products do you carry?',
      answer: 'We offer a complete range of camping and outdoor gear, hunting and fishing equipment, winter accessories, outdoor clothing, pet and farm feed, and ice and water sales. Our inventory is carefully selected to meet the needs of Saskatchewan\'s outdoor community.'
    },
    {
      question: 'Do you offer product advice?',
      answer: 'Absolutely! Our friendly and knowledgeable staff is here to help you find the right equipment for your specific needs. Whether you\'re planning a camping trip, preparing for hunting season, or stocking up on farm supplies, we\'ll guide you to the best products for your situation and budget.'
    },
    {
      question: 'Are your prices competitive?',
      answer: 'Yes! We pride ourselves on offering quality products at competitive prices. We believe everyone should have access to reliable outdoor gear and farm supplies without breaking the bank.'
    },
    {
      question: 'Do you have parking available?',
      answer: 'Yes, we have convenient parking available for our customers. Visit us in store for more details about our location and facilities.'
    },
    {
      question: 'Can I return or exchange products?',
      answer: 'We want you to be completely satisfied with your purchase. Please contact us or visit our store to discuss our return and exchange policies for specific products.'
    },
    {
      question: 'Do you carry specific brands?',
      answer: 'We stock products from trusted manufacturers known for quality and durability. If you\'re looking for a specific brand, please contact us or visit our store to check availability.'
    },
    {
      question: 'What are your store hours?',
      answer: 'Please visit our store or contact us for current operating hours. We\'re here to serve you and the Saskatchewan outdoor community.'
    },
    {
      question: 'Do you offer bulk purchases for farm feed?',
      answer: 'Yes, we can accommodate bulk purchases for farm feed and supplies. Contact us to discuss your specific needs and we\'ll work with you to provide the best solution.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/80 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Customer service and FAQ" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center">
            <div className="inline-block mb-6 px-10 py-4 bg-white/95 backdrop-blur-md rounded-full border-2 border-amber-500 shadow-xl animate-bounce">
              <span className="text-base font-bold tracking-wider text-amber-700 uppercase">FAQ</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 !text-white drop-shadow-2xl">Frequently Asked Questions</h1>
            <p className="text-2xl md:text-3xl !text-white drop-shadow-lg max-w-3xl mx-auto font-medium">Find answers to common questions about our products and services</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-10 py-4 bg-white rounded-full border-2 border-amber-500 shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <span className="text-base font-bold text-amber-700 uppercase tracking-wider">Got Questions?</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">We've Got Answers</h2>
            <p className="text-xl text-gray-700">Browse our most frequently asked questions below</p>
          </div>

          <div>
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-10 py-4 bg-white rounded-full border-2 border-amber-500 shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <span className="text-base font-bold text-amber-700 uppercase tracking-wider">Our Policies</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">Our Commitment to You</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-amber-200 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="text-3xl text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900">Quality Guarantee</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We stand behind the quality of our products. Every item in our store is carefully selected from trusted manufacturers to ensure durability and performance.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-amber-200 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaUsers className="text-3xl text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900">Customer Service</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Your satisfaction is our priority. Our friendly staff is always ready to help you find the right products and answer any questions you may have.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-amber-200 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaDollarSign className="text-3xl text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900">Fair Pricing</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We offer competitive prices on all our products. Quality outdoor gear and farm supplies shouldn't break the bank, and we work hard to provide great value.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-amber-200 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaLightbulb className="text-3xl text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900">Expert Advice</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our knowledgeable staff understands Saskatchewan's unique outdoor conditions and can provide expert recommendations for your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/80 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Contact us for help" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 !text-white drop-shadow-2xl">Still Have Questions?</h2>
          <p className="text-2xl mb-8 !text-white drop-shadow-lg font-medium">
            We're here to help! Contact us or visit our store and our friendly staff will be happy to assist you.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-amber-700 px-8 py-4 rounded-xl font-semibold text-lg hover:-translate-y-2 transition-all duration-500 ease-in-out hover:bg-amber-50 border-2 border-amber-500 shadow-xl hover:shadow-2xl">
            <FaPhone className="text-xl" />
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
