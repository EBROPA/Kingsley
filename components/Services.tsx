
import React from 'react';
import { motion } from 'framer-motion';
import { FiKey, FiFileText, FiGlobe, FiLayout } from 'react-icons/fi';
import { PageView, ServiceItem } from '../types';

interface ServicesProps {
    onNavigate: (view: PageView) => void;
}

const services: ServiceItem[] = [
  { id: '1', title: 'Персональный брокер 24/7', icon: <FiKey size={32} /> },
  { id: '2', title: 'Юридическая чистота', icon: <FiFileText size={32} /> },
  { id: '3', title: 'Дистанционная покупка', icon: <FiGlobe size={32} /> },
  { id: '4', title: 'Дизайн-концепция', icon: <FiLayout size={32} /> },
];

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
            >
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">Безупречный сервис</h2>
            <div className="h-[1px] w-24 bg-accent"></div>
            </motion.div>
            
            <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-sans text-primary/60 font-light md:w-1/3 md:text-right"
            >
                Мы предвосхищаем ожидания, чтобы вы могли наслаждаться каждым моментом новой жизни.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              onClick={() => onNavigate('services')}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 50 }}
              whileHover={{ y: -10 }}
              className="group p-10 border border-primary/10 bg-white hover:bg-primary transition-colors duration-500 cursor-pointer flex flex-col items-center text-center shadow-sm hover:shadow-xl"
            >
              <div className="text-accent mb-6 p-4 rounded-full bg-background group-hover:bg-white/10 group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl text-primary group-hover:text-white transition-colors duration-500">{service.title}</h3>
              <p className="text-sm text-primary/40 mt-4 group-hover:text-white/60 transition-colors duration-500 opacity-0 group-hover:opacity-100">
                  Подробнее
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
