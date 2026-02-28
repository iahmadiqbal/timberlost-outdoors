const TestimonialCard = ({ name, text, rating }) => {
  return (
    <div className="card group h-full bg-white hover:shadow-2xl">
      <div className="p-8 h-full flex flex-col relative overflow-hidden">
        {/* Quote Icon Background */}
        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
          <svg className="w-24 h-24 text-color-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
        
        <div className="flex mb-6 relative z-10">
          {[...Array(rating)].map((_, i) => (
            <svg 
              key={i} 
              className="w-6 h-6 text-color-warning fill-current transform group-hover:scale-125 transition-transform duration-300" 
              viewBox="0 0 20 20"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          ))}
        </div>
        
        <p className="text-lg mb-6 italic leading-relaxed flex-grow relative z-10 font-medium" style={{ color: '#5C4A3A' }}>
          "{text}"
        </p>
        
        <div className="flex items-center relative z-10">
          <div className="w-12 h-12 bg-gradient-to-br from-color-primary to-color-accent rounded-full flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-lg">{name.charAt(0)}</span>
          </div>
          <div>
            <p className="font-black text-lg" style={{ color: '#2C1810' }}>{name}</p>
            <p className="text-sm font-semibold" style={{ color: '#8C7A6A' }}>Verified Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
