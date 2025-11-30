import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowLongDown } from 'react-icons/hi2';
import { PageView } from '../types';

interface HeroProps {
  onNavigate: (view: PageView) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Parallax Image Background */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 z-0"
      >
        {/* Darker overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50 z-10" /> 
        {/* Gradient at the bottom for scroll indicator visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full container mx-auto px-6 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="font-sans text-white/90 tracking-[0.3em] uppercase text-sm mb-6 shadow-sm">
            Kingsley Estates
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F5F2EA] leading-tight mb-8 drop-shadow-2xl">
            Дом как отражение <br />
            <span className="italic font-light text-[#BFA473]">вашего статуса</span>
          </h1>
          
          <button 
            onClick={() => onNavigate('collections')}
            className="inline-block mt-8 px-8 py-3 border border-white/30 text-white font-sans text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-colors duration-300 backdrop-blur-sm"
          >
            Смотреть коллекцию
          </button>
        </motion.div>

        <motion.div
           style={{ opacity }}
           className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80"
        >
          <span className="text-xs uppercase tracking-widest drop-shadow-md">Scroll</span>
          <HiArrowLongDown className="animate-bounce drop-shadow-md" size={24} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;