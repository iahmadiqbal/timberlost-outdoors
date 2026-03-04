const TestimonialCard = ({ name, text, rating, image, role }) => {
  return (
    <div className="card group bg-white hover:shadow-2xl flex flex-col" style={{ height: '340px', width: '100%' }}>
      <div className="p-6 flex flex-col relative overflow-hidden h-full">
        {/* Quote Icon Background */}
        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
          <svg className="w-24 h-24 text-color-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
        
        <div className="flex mb-4 relative z-10">
          {[...Array(rating)].map((_, i) => (
            <svg 
              key={i} 
              className="w-5 h-5 text-color-warning fill-current transform group-hover:scale-125 transition-transform duration-300" 
              viewBox="0 0 20 20"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          ))}
        </div>
        
        <div className="flex-1 relative z-10 mb-5" style={{ height: '160px', overflow: 'hidden' }}>
          <p className="text-sm italic leading-relaxed font-medium line-clamp-7" style={{ color: '#5C4A3A' }}>
            "{text}"
          </p>
        </div>
        
        <div className="flex items-center relative z-10 mt-auto">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3 transform group-hover:scale-110 transition-transform duration-300 border-3 border-color-primary shadow-lg flex-shrink-0">
            <img 
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-black text-base truncate" style={{ color: '#2C1810' }}>{name}</p>
            <p className="text-xs font-semibold truncate" style={{ color: '#8C7A6A' }}>{role || 'Customer'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
