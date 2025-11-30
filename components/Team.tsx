
import React from 'react';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Image Side */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 relative"
            >
                <div className="aspect-[4/5] overflow-hidden relative shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
                        alt="Kingsley Team Meeting" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-8 left-8 text-white">
                        <span className="block font-serif text-3xl mb-1">Kingsley Estates</span>
                        <span className="block text-xs uppercase tracking-widest opacity-80">Moscow • Dubai • London</span>
                    </div>
                </div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
            >
                <span className="text-accent text-xs uppercase tracking-[0.3em] mb-4 block">Команда</span>
                <h2 className="font-serif text-4xl md:text-5xl text-primary mb-8 leading-tight">
                    Экспертиза <br/> Family Office
                </h2>
                
                <div className="prose prose-lg text-primary/70 font-sans font-light leading-relaxed mb-8">
                    <p className="mb-6">
                        В Kingsley Estates нет случайных людей. Наша команда — это закрытый клуб экспертов с опытом работы в сегменте De Luxe более 10 лет. Мы объединяем компетенции брокеров, юристов международного права, налоговых консультантов и архитекторов.
                    </p>
                    <p>
                        Мы не работаем на поток. Каждый клиент получает персональную проектную группу, которая сопровождает сделку «под ключ» — от формирования инвестиционной стратегии до консьерж-сервиса после заселения. Наша задача — не просто купить недвижимость, а сохранить и приумножить ваш капитал, обеспечив при этом абсолютную конфиденциальность и юридическую безопасность.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 border-t border-primary/10 pt-8 mt-8">
                    <div>
                        <span className="font-sans text-4xl text-accent block mb-2 font-medium">15+</span>
                        <span className="text-xs uppercase tracking-widest text-primary/50">Лет экспертизы</span>
                    </div>
                    <div>
                        <span className="font-sans text-4xl text-accent block mb-2 font-medium">100%</span>
                        <span className="text-xs uppercase tracking-widest text-primary/50">Конфиденциальность</span>
                    </div>
                </div>

                <button 
                    onClick={() => window.open(`https://wa.me/74950322199?text=${encodeURIComponent("Здравствуйте, хочу познакомиться с командой")}`, '_blank')}
                    className="mt-12 inline-block px-10 py-4 bg-primary text-white text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors duration-300 shadow-lg"
                >
                    Связаться с командой
                </button>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
