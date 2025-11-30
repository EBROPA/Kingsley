import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageView } from '../types';

interface AboutSummaryProps {
  onNavigate: (view: PageView) => void;
}

const AboutSummary: React.FC<AboutSummaryProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#EBE7DD]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
        >
            <div className="aspect-[4/3] overflow-hidden bg-primary/10">
                <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop" 
                    alt="Meeting" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 hidden md:block" />
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
        >
            <span className="text-accent text-xs uppercase tracking-[0.3em] mb-4 block">О компании</span>
            <h2 className="font-serif text-4xl text-primary mb-6">
                Мы — архитекторы <br/> вашего <span className="italic text-accent">наследия</span>
            </h2>
            <p className="font-sans text-primary/70 font-light leading-relaxed mb-8">
                Kingsley Estates — это больше, чем агентство недвижимости. Мы создаем новую культуру владения, основанную на приватности, экспертном знании рынка и безупречном сервисе. Мы знаем историю каждого дома на Патриарших и будущее каждого переулка Остоженки.
            </p>
            <button 
                onClick={() => onNavigate('about')}
                className="text-xs uppercase tracking-widest border-b border-primary/30 pb-1 hover:border-accent hover:text-accent transition-colors"
            >
                Узнать нашу историю
            </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSummary;