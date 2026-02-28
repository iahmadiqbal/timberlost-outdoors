const ServiceCard = ({ icon, title, description, image }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer h-full border-2 border-amber-200 hover:border-amber-500 transition-all">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/90 z-5"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl icon-bounce">
            <span className="text-5xl">{icon}</span>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-4 group-hover:text-amber-700 transition-colors duration-300 text-amber-900">
          {title}
        </h3>
        
        <p className="text-lg leading-relaxed flex-grow font-normal text-amber-800">
          {description}
        </p>
        
        <div className="mt-6 flex items-center text-amber-600 font-medium group-hover:text-orange-600 transition-colors duration-300">
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
