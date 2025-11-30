import React from 'react';
import { motion } from 'framer-motion';
import { FiMaximize, FiSun, FiMap, FiArrowRight } from 'react-icons/fi';
import { Property } from '../types';

interface FeaturedObjectProps {
  onPropertySelect: (property: Property) => void;
}

const FeaturedObject: React.FC<FeaturedObjectProps> = ({ onPropertySelect }) => {
  // Updated data for SHIFT project
  const featuredProperty: Property = {
    id: 99,
    title: "SHIFT",
    category: "Бизнес-класс",
    price: "от 40,8 млн ₽",
    area: "от 45 м²",
    location: "Донской, Ленинский пр-т",
    lots: 12,
    images: [
      "/collection_img/shift_0.png",
      "/collection_img/shift_1.png",
      "/collection_img/shift_2.png",
      "/collection_img/shift_3.png",
      "/collection_img/shift_4.png",
      "/collection_img/shift_5.png",
      "/collection_img/shift_6.png",
      "/collection_img/shift_7.png",
      "/collection_img/shift_8.png",
      "/collection_img/shift_9.png",
      "/collection_img/shift_10.png",
      "/collection_img/shift_11.png",
      "/collection_img/shift_12.png"
    ],
    description: "SHIFT — это манифест новой жизни рядом с Нескучным садом. Лаконичная архитектура, образовательный центр, приватный парк и технологичность в каждой детали. Идеальный баланс между ритмом мегаполиса и тишиной природы.",
    features: ["Нескучный сад", "Образовательный центр", "Приватный парк", "Панорамные окна", "Умный дом"]
  };

  return (
    <section id="featured" className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-end">
           {/* Image */}
           <motion.div 
             className="w-full md:w-2/3 overflow-hidden relative group cursor-pointer"
             initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
             whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: "easeInOut" }}
             onClick={() => onPropertySelect(featuredProperty)}
           >
              <img 
                src={featuredProperty.images[0]} 
                alt="SHIFT Architecture" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-white/90 px-4 py-2 font-sans text-xs uppercase tracking-widest text-primary">
                Object of the Month
              </div>
           </motion.div>

           {/* Info */}
           <motion.div 
             className="w-full md:w-1/3 flex flex-col justify-between h-full"
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.5 }}
           >
             <div>
                <h2 className="font-serif text-5xl md:text-6xl text-primary leading-none mb-4">
                  SHIFT <br />
                  <span className="text-accent italic text-4xl md:text-5xl">Донской</span>
                </h2>
                <div className="w-16 h-[1px] bg-primary/20 my-6"></div>
                <div className="flex flex-wrap gap-4 mb-8">
                   <div className="flex items-center gap-2 text-primary/70 font-sans text-sm">
                      <FiMaximize className="text-accent" /> 45 - 276 м²
                   </div>
                   <div className="flex items-center gap-2 text-primary/70 font-sans text-sm">
                      <FiSun className="text-accent" /> Парк
                   </div>
                   <div className="flex items-center gap-2 text-primary/70 font-sans text-sm">
                      <FiMap className="text-accent" /> Ленинский
                   </div>
                </div>
                <p className="font-sans text-primary/60 font-light leading-relaxed mb-8">
                  {featuredProperty.description}
                </p>
             </div>
             
             <button 
               onClick={() => onPropertySelect(featuredProperty)}
               className="self-start inline-block bg-primary text-[#F5F2EA] px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors duration-300 flex items-center gap-3"
             >
                Смотреть проект <FiArrowRight />
             </button>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedObject;