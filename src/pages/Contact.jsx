import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaFacebook, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/80 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Contact us" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center">
            <div className="inline-block mb-6 px-10 py-4 bg-white/95 backdrop-blur-md rounded-full border-2 border-amber-500 shadow-xl animate-bounce">
              <span className="text-base font-bold tracking-wider text-amber-700 uppercase">Contact Us</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 !text-white drop-shadow-2xl">Get In Touch</h1>
            <p className="text-2xl md:text-3xl !text-white drop-shadow-lg max-w-3xl mx-auto font-medium">Visit our store or send us a message</p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-amber-200 hover:border-amber-500 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <FaMapMarkerAlt className="text-xl text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-900 mb-2 text-lg">Location</h3>
                      <p className="text-gray-700 font-medium text-sm">105 Main St, Big River</p>
                      <p className="text-gray-700 font-medium text-sm">SK S0J 0E0, Canada</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-amber-200 hover:border-amber-500 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <FaPhone className="text-xl text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-900 mb-2 text-lg">Phone</h3>
                      <a href="tel:+13064692437" className="text-gray-700 hover:text-amber-700 font-medium text-base transition-colors">
                        +1 306-469-2437
                      </a>
                      <p className="text-xs text-gray-600 mt-1">Call us for product inquiries</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-amber-200 hover:border-amber-500 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <FaEnvelope className="text-xl text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-900 mb-2 text-lg">Email</h3>
                      <a href="mailto:info@timberlostoutdoorsandsurplus.com" className="text-gray-700 hover:text-amber-700 font-medium text-sm transition-colors break-all">
                        info@timberlostoutdoorsandsurplus.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-amber-200 hover:border-amber-500 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <FaClock className="text-xl text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-900 mb-2 text-lg">Store Hours</h3>
                      <p className="text-gray-700 font-medium text-sm">Visit us for current hours</p>
                      <p className="text-xs text-gray-600 mt-1">We're here to serve you</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-amber-200 hover:border-amber-500 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <FaFacebook className="text-xl text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-900 mb-2 text-lg">Social Media</h3>
                      <a href="https://www.facebook.com/TimberlostOutdoors/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-700 font-medium text-sm transition-colors">
                        Follow us on Facebook
                      </a>
                      <p className="text-xs text-gray-600 mt-1">Stay updated with latest products</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-2xl border-4 border-amber-500 overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-amber-900 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-amber-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-amber-900 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                        placeholder="(123) 456-7890"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-amber-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button type="submit" className="w-full inline-flex items-center justify-center gap-3 bg-white text-amber-700 px-8 py-4 rounded-xl font-medium text-lg hover:-translate-y-2 transition-all duration-500 border-2 border-amber-500 shadow-lg hover:shadow-2xl hover:bg-amber-50">
                      <FaPaperPlane className="text-xl" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-10 py-4 bg-white rounded-full border-2 border-amber-500 shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <span className="text-base font-bold text-amber-700 uppercase tracking-wider">Find Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Visit Our Store</h2>
          </div>
          <a 
            href="https://www.facebook.com/TimberlostOutdoors/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl shadow-xl border-2 border-amber-500 overflow-hidden py-12 px-6 hover:scale-105 transition-transform duration-500 cursor-pointer"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce">
                <FaMapMarkerAlt className="text-2xl text-amber-500" />
              </div>
              <h3 className="text-lg font-bold text-amber-900 mb-1">105 Main St, Big River</h3>
              <p className="text-base text-gray-700 font-medium">SK S0J 0E0, Canada</p>
              <p className="text-sm text-gray-600 mt-2">Click for more information</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
