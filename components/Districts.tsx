
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { District, PageView } from '../types';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';

interface DistrictsProps {
  onNavigate: (view: PageView) => void;
}

const districtsData: District[] = [
  {
    id: 'patriki',
    name: 'Патриаршие пруды',
    description: 'Богемный шик, лучшие рестораны и атмосфера старой Москвы.',
    image: '/img/patriarhie_pruds.jpg',
  },
  {
    id: 'ostozhenka',
    name: 'Остоженка',
    description: 'Золотая миля. Самая дорогая недвижимость и абсолютная тишина.',
    image: '/img/ostothenka.jpg',
  },
  {
    id: 'khamovniki',
    name: 'Хамовники',
    description: 'Идеальный семейный район. Парки, набережные и лучшие школы.',
    image: '/img/hamovniki.webp',
  },
  {
    id: 'arbat',
    name: 'Арбат',
    description: 'История в каждом камне. Театры, переулки и дух интеллигенции.',
    image: '/img/arbat.jpg',
  },
  {
    id: 'zamoskvoreche',
    name: 'Замоскворечье',
    description: 'Купеческая Москва. Низкая этажность и вид на Кремль через реку.',
    image: '/img/zamoskvoreche.jpg',
  },
];

const Districts: React.FC<DistrictsProps> = ({ onNavigate }) => {
  const [activeDistrict, setActiveDistrict] = useState<District>(districtsData[0]);

  return (
    <section id="districts" className="relative w-full min-h-[700px] md:h-[800px] bg-primary text-background overflow-hidden scroll-mt-20 flex flex-col justify-center">
      {/* Background Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDistrict.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={activeDistrict.image} 
            alt={activeDistrict.name} 
            className="w-full h-full object-cover filter grayscale"
          />
          {/* Mobile gradient overlay for better readability */}
          <div className="absolute inset-0 bg-black/40 md:bg-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col md:flex-row items-center py-12 md:py-0">
        {/* Left List */}
        <div className="w-full md:w-1/2 space-y-2">
          <h2 className="font-serif text-4xl mb-8 md:mb-12 text-white/50">Локации</h2>
          {districtsData.map((district) => (
            <div key={district.id} className="border-b border-white/10">
                <motion.div
                onMouseEnter={() => setActiveDistrict(district)}
                onClick={() => setActiveDistrict(district)}
                className="cursor-pointer group flex items-center justify-between py-6"
                >
                <span className={`font-serif text-2xl md:text-3xl transition-colors duration-300 ${activeDistrict.id === district.id ? 'text-accent pl-4' : 'text-white group-hover:text-white/80'}`}>
                    {district.name}
                </span>
                <motion.span 
                    animate={{ 
                        opacity: activeDistrict.id === district.id ? 1 : 0.5, 
                        x: activeDistrict.id === district.id ? 0 : -10,
                        scale: activeDistrict.id === district.id ? 1 : 0.8
                    }}
                    className={activeDistrict.id === district.id ? 'text-accent' : 'text-white/20'}
                >
                    <FiMapPin size={24} />
                </motion.span>
                </motion.div>

                {/* Mobile Description Accordion */}
                <AnimatePresence>
                    {activeDistrict.id === district.id && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden"
                        >
                            <p className="font-sans text-base text-white/80 font-light leading-relaxed mb-6 pl-4 border-l border-accent/30">
                                {district.description}
                            </p>
                            <button 
                                onClick={() => onNavigate('districts')} 
                                className="ml-4 mb-8 flex items-center gap-2 text-xs uppercase tracking-widest text-accent hover:text-white transition-colors"
                            >
                                Перейти к району <FiArrowRight />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right Description (Desktop Only) */}
        <div className="hidden md:flex w-1/2 h-full justify-center items-center p-12">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeDistrict.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-primary/80 backdrop-blur-md p-10 border border-accent/20 max-w-md"
                >
                    <h3 className="font-serif text-3xl text-accent mb-4">{activeDistrict.name}</h3>
                    <p className="font-sans text-lg text-white/80 font-light leading-relaxed">
                        {activeDistrict.description}
                    </p>
                    <button onClick={() => onNavigate('districts')} className="inline-block mt-8 text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:text-accent hover:border-accent transition-colors">
                        Объекты района
                    </button>
                </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Districts;
