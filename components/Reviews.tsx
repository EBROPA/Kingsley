import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiMinimize2 } from 'react-icons/fi';

const reviews = [
    {
        id: 1,
        text: "Мы искали не просто квартиру, а место силы. Команда Kingsley нашла для нас особняк на Остоженке, которого даже не было в рекламе. Сделка прошла идеально.",
        author: "Михаил и Елена",
        role: "Владельцы бизнеса"
    },
    {
        id: 2,
        text: "Внимание к деталям и абсолютная конфиденциальность. Я посмотрел всего три объекта, и второй стал моим новым домом. Экономия времени колоссальная.",
        author: "Дмитрий В.",
        role: "Топ-менеджер банка"
    },
    {
        id: 3,
        text: "Сервис уровня пятизвездочного отеля. От подбора до юридического сопровождения и помощи с переездом. Лучший опыт покупки недвижимости в Москве.",
        author: "Анна К.",
        role: "Инвестор"
    }
];

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
        nextReview();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextReview = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section className="py-32 bg-primary text-background overflow-hidden relative">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
        <FiMinimize2 size={300} />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left Side: Static Info */}
        <div className="w-full md:w-1/4">
            <span className="font-sans text-accent text-xs uppercase tracking-[0.3em] mb-4 block">
                Отзывы
            </span>
            <div className="h-[1px] w-12 bg-white/20 mb-8"></div>
            <div className="flex gap-2">
                <button 
                    onClick={prevReview}
                    className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300"
                >
                    <FiArrowLeft size={20} />
                </button>
                <button 
                    onClick={nextReview}
                    className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300"
                >
                    <FiArrowRight size={20} />
                </button>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-[1px] bg-white/10 mt-12 relative overflow-hidden">
                <motion.div 
                    key={currentIndex}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="h-full bg-accent absolute top-0 left-0"
                />
            </div>
        </div>

        {/* Right Side: Animated Content */}
        <div className="w-full md:w-3/4 relative h-[400px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="w-full"
                >
                    <blockquote className="font-serif text-3xl md:text-5xl leading-tight mb-10 text-white/90">
                        "{reviews[currentIndex].text}"
                    </blockquote>
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center font-serif text-primary text-2xl italic">
                            {reviews[currentIndex].author[0]}
                        </div>
                        <div>
                            <p className="font-sans text-lg text-accent tracking-wide">{reviews[currentIndex].author}</p>
                            <p className="font-sans text-xs uppercase tracking-widest text-white/40 mt-1">{reviews[currentIndex].role}</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Reviews;