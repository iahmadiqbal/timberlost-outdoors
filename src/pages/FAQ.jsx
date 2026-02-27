import { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-gray-800 pr-4">{question}</h3>
        <svg
          className={`w-6 h-6 text-forest-600 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
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
      <section className="bg-gradient-to-r from-primary-700 to-accent-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-forest-100">Find answers to common questions about our products and services</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">Got Questions?</h2>
            <p className="text-xl text-gray-600">We've got answers! Browse our most frequently asked questions below.</p>
          </div>

          <div>
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold gradient-text mb-12 text-center">Our Policies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-forest-500 to-forest-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Guarantee</h3>
                <p className="text-gray-600">
                  We stand behind the quality of our products. Every item in our store is carefully selected from trusted manufacturers to ensure durability and performance.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-earth-500 to-earth-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Customer Service</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. Our friendly staff is always ready to help you find the right products and answer any questions you may have.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-forest-600 to-earth-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Fair Pricing</h3>
                <p className="text-gray-600">
                  We offer competitive prices on all our products. Quality outdoor gear and farm supplies shouldn't break the bank, and we work hard to provide great value.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Expert Advice</h3>
                <p className="text-gray-600">
                  Our knowledgeable staff understands Saskatchewan's unique outdoor conditions and can provide expert recommendations for your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-12 bg-gradient-to-r from-primary-700 to-accent-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 text-white/90">
            We're here to help! Contact us or visit our store and our friendly staff will be happy to assist you.
          </p>
          <Link to="/contact" className="inline-block bg-white text-primary-900 px-10 py-5 rounded-2xl font-black text-xl hover:bg-accent-50 transition-all duration-300 shadow-2xl hover:shadow-accent-500/50 hover:scale-110 transform">
            📞 Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
