const ServiceCard = ({ icon, title, description, image }) => {
  return (
    <div className="bg-gradient-to-br from-white to-amber-50/30 rounded-3xl shadow-2xl group cursor-pointer h-full border-2 border-amber-300 hover:border-orange-500 transition-all duration-500 overflow-hidden float-animation hover:shadow-orange-500/30 hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        {/* Decorative overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/20 group-hover:to-orange-500/20 transition-all duration-500"></div>
      </div>
      
      {/* Content */}
      <div className="p-8 relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
        
        <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-base leading-relaxed mb-6 font-normal text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
          {description}
        </p>
        
        <div className="flex items-center text-amber-700 font-semibold group-hover:text-amber-900 transition-colors duration-300">
          <span className="mr-2">Learn More</span>
          <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
