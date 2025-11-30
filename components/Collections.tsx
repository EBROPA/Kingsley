import React from 'react';
import { motion } from 'framer-motion';
import { CollectionItem, PageView, Property } from '../types';
import { FiArrowRight } from 'react-icons/fi';

interface CollectionsProps {
  onNavigate: (view: PageView) => void;
  onPropertySelect: (property: Property) => void;
}


const collections: CollectionItem[] = [
  {
    id: '1',
    title: 'Тихие переулки',
    subtitle: 'Особняки в историческом центре',
    image: '/img/tihie_streets.jpg',
  },
  {
    id: '2',
    title: 'На высоте',
    subtitle: 'Пентхаусы в Сити и высотках',
    image: '/img/na_visots.jpg',
  },
  {
    id: '3',
    title: 'Семейные резиденции',
    subtitle: 'Рядом с парками и лучшими школами',
    image: '/img/famili_resedense.jpeg',
  },
  {
    id: '4',
    title: 'Клубные дома',
    subtitle: 'Абсолютная приватность и камерность',
    image: '/img/club_houses.jpg',
  },
];

const Collections: React.FC<CollectionsProps> = ({ onNavigate }) => {
  return (
    <section id="collections" className="py-24 bg-background border-t border-primary/5 scroll-mt-20">
      <div className="container mx-auto px-6 mb-16 flex justify-between items-end">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
         >
            <h2 className="font-serif text-4xl md:text-5xl text-primary">
              Коллекции <span className="italic text-accent">жизни</span>
            </h2>
         </motion.div>
         
         <button 
            onClick={() => onNavigate('collections')}
            className="hidden md:block text-accent font-sans text-sm tracking-widest uppercase border-b border-accent pb-1 cursor-pointer hover:text-accent-dark hover:border-accent-dark transition-all"
         >
            Смотреть все
         </button>
      </div>

      <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {collections.map((item, index) => (
               <motion.div 
                 key={item.id}
                 onClick={() => onNavigate('collections')}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1, duration: 0.6 }}
                 className={`group cursor-pointer relative overflow-hidden ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
               >
                 <div className="overflow-hidden aspect-[4/5] relative mb-6">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 z-10 transition-colors duration-500" />
                    <div className="absolute bottom-8 right-8 z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-white/90 backdrop-blur text-primary p-3 rounded-full">
                        <FiArrowRight size={20} />
                    </div>
                 </div>
                 
                 <div className="flex flex-col relative z-20">
                    <h3 className="font-serif text-2xl text-primary group-hover:translate-x-2 transition-transform duration-300">
                        {item.title}
                    </h3>
                    <p className="font-sans text-primary/60 text-sm mt-2 font-light group-hover:text-accent transition-colors duration-300 group-hover:translate-x-2">
                        {item.subtitle}
                    </p>
                 </div>
               </motion.div>
             ))}
          </div>
      </div>
      
      {/* Mobile button */}
      <div className="container mx-auto px-6 md:hidden mt-12">
          <button 
            onClick={() => onNavigate('collections')}
            className="w-full py-4 border border-primary/20 text-xs uppercase tracking-widest text-primary flex justify-center items-center gap-2"
         >
            Смотреть все коллекции
         </button>
      </div>
    </section>
  );
};

export default Collections;