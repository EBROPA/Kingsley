import React from 'react';
import { motion, Variants } from 'framer-motion';

const Manifesto: React.FC = () => {
  const text = "Мы не продаем квадратные метры. Мы находим пространства, где вы будете счастливы. Ваша приватность — наш абсолютный приоритет.";
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="font-serif text-3xl md:text-5xl leading-snug text-primary"
        >
          {words.map((word, index) => (
            <motion.span variants={child} key={index} className="inline-block mr-[0.25em]">
              {word === "счастливы." || word === "приватность" ? (
                <span className="text-accent italic">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12"
        >
          <div className="h-[1px] w-24 bg-accent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;