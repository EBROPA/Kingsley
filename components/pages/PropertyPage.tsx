import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowLeft, 
  FiMapPin, 
  FiLayers, 
  FiChevronLeft, 
  FiChevronRight, 
  FiCheck,
  FiShare2,
  FiHeart,
  FiSmartphone,
  FiMessageCircle,
  FiSend,
  FiArrowUpRight
} from 'react-icons/fi';
import { Property } from '../../types';

interface PropertyPageProps {
  property: Property;
  onBack: () => void;
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const PropertyPage: React.FC<PropertyPageProps> = ({ property, onBack }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // We wrap the index to ensure it stays within bounds
  const imageIndex = Math.abs(page % property.images.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setIsAutoPlaying(false);
  };

  // Auto-play logic
  useEffect(() => {
    let interval: any;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setPage(prev => [prev[0] + 1, 1]);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Social Links
  const PHONE = "+7 (495) 032-21-99";
  const PHONE_CLEAN = "+74950322199";
  const TG_LINK = "https://t.me/kingsley_est";
  const WA_LINK = `https://wa.me/${PHONE_CLEAN}?text=${encodeURIComponent("Здравствуйте, интересует объект " + property.title)}`;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      
      {/* --- HERO SECTION (Immersive Carousel) --- */}
      <div className="relative h-[85vh] md:h-[92vh] w-full overflow-hidden bg-primary group">
        
        {/* Navigation Overlay (Back Button) */}
        <div className="absolute top-8 left-0 w-full z-40 px-6 pt-20 md:pt-24">
            <div className="container mx-auto">
                <button 
                    onClick={onBack} 
                    className="inline-flex items-center gap-3 text-white/90 hover:text-white transition-colors bg-black/10 hover:bg-black/30 backdrop-blur-md px-5 py-2.5 rounded-full text-xs uppercase tracking-widest border border-white/10"
                >
                    <FiArrowLeft className="text-lg"/> 
                    <span className="hidden md:inline">Назад к списку</span>
                </button>
            </div>
        </div>

        {/* Carousel Images with Swipe */}
        <AnimatePresence initial={false} custom={direction}>
            <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.5 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                    }
                }}
                className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-20 pointer-events-none" />
                <img 
                    src={property.images[imageIndex]} 
                    alt={property.title} 
                    className="w-full h-full object-cover"
                    draggable="false"
                />
            </motion.div>
        </AnimatePresence>

        {/* Info Overlay (Bottom) */}
        <div className="absolute bottom-0 left-0 w-full z-30 pb-12 md:pb-16 px-6 pointer-events-none">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-white max-w-4xl"
                >
                    <div className="flex flex-wrap gap-4 mb-6">
                        <span className="bg-[#BFA473] text-[#2C2420] px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg">
                            {property.category}
                        </span>
                        {property.metro && (
                             <span className="bg-white/10 backdrop-blur-md text-white px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] border border-white/20 flex items-center gap-2 rounded-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 box-shadow-glow"></span> {property.metro}
                            </span>
                        )}
                    </div>
                    
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 drop-shadow-xl">
                        {property.title}
                    </h1>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm font-sans font-light text-white/90">
                         <div className="flex items-center gap-3 backdrop-blur-sm bg-black/10 px-4 py-2 rounded-lg border border-white/5">
                            <FiMapPin className="text-[#BFA473] text-lg"/> 
                            <span className="tracking-wide">{property.address || property.location}</span>
                         </div>
                         <div className="flex items-center gap-8 px-2">
                             <div className="flex flex-col">
                                <span className="text-[10px] uppercase text-white/50 tracking-widest mb-1">Площадь</span>
                                <span className="text-xl md:text-2xl font-sans font-medium">{property.area}</span>
                             </div>
                             <div className="w-[1px] h-8 bg-white/20"></div>
                             <div className="flex flex-col">
                                <span className="text-[10px] uppercase text-white/50 tracking-widest mb-1">Лот</span>
                                <span className="text-xl md:text-2xl font-sans font-medium">K-{property.id}84</span>
                             </div>
                         </div>
                    </div>
                </motion.div>

                {/* Price & Controls */}
                <div className="flex flex-col items-end gap-8 pointer-events-auto">
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-right bg-black/20 backdrop-blur-md p-6 rounded-xl border border-white/10"
                    >
                        <span className="block text-xs uppercase tracking-[0.2em] text-[#BFA473] mb-2">Стоимость объекта</span>
                        <span className="block font-sans text-3xl md:text-5xl text-white whitespace-nowrap font-medium">{property.price}</span>
                    </motion.div>
                    
                    <div className="flex items-center gap-6">
                        {/* Custom Arrows */}
                        <div className="flex gap-2">
                            <button 
                                onClick={() => paginate(-1)}
                                className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm group"
                            >
                                <FiChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform"/>
                            </button>
                            <button 
                                onClick={() => paginate(1)}
                                className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm group"
                            >
                                <FiChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Progress Bar for Auto-play visualization */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                 {isAutoPlaying && (
                     <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                        className="h-full bg-[#BFA473]"
                     />
                 )}
                 {!isAutoPlaying && (
                     <div className="h-full bg-[#BFA473]" style={{ width: `${((imageIndex + 1) / property.images.length) * 100}%`, transition: 'width 0.3s ease' }} />
                 )}
            </div>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="container mx-auto px-6 pt-16 md:pt-24">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
            
            {/* Left Column: Details */}
            <div className="w-full lg:w-2/3">
                
                {/* Intro Actions */}
                <div className="flex flex-wrap gap-4 mb-12">
                     <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/10 text-sm hover:border-[#BFA473] hover:text-[#BFA473] transition-colors">
                        <FiShare2 /> Поделиться
                     </button>
                     <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/10 text-sm hover:border-red-400 hover:text-red-400 transition-colors">
                        <FiHeart /> В избранное
                     </button>
                     <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/10 text-sm hover:border-primary transition-colors ml-auto">
                        <FiCheck className="text-[#BFA473]" /> Презентация PDF
                     </button>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="font-serif text-4xl mb-8 text-primary">О проекте</h3>
                    <div className="prose prose-lg prose-p:font-sans prose-p:font-light prose-p:text-primary/70 prose-p:leading-8 max-w-none text-justify">
                        {property.description.split('\n').map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>
                </motion.div>

                {/* Features Grid */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#F5F2EA] p-10 md:p-12 rounded-2xl mb-16 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                         <FiLayers size={300} />
                    </div>

                    <h4 className="font-serif text-2xl mb-8 text-primary relative z-10">Преимущества</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
                        {property.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-4 group">
                                <div className="w-8 h-8 rounded-full bg-[#BFA473]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#BFA473] transition-colors duration-300">
                                    <FiCheck className="text-[#BFA473] text-sm group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <span className="text-lg text-primary font-serif block mb-1">{feature}</span>
                                    <span className="text-xs text-primary/50 uppercase tracking-wider">Premium feature</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Yandex Map */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="h-[500px] w-full rounded-2xl relative overflow-hidden shadow-lg"
                >
                    <iframe
                        src={`https://yandex.ru/map-widget/v1/?ll=37.6173,55.7558&z=15&text=${encodeURIComponent(property.title + ' ' + (property.address || property.location || 'Москва'))}`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen
                        style={{ border: 'none' }}
                        title={`Карта: ${property.title}`}
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-primary/10">
                        <a 
                            href={`https://yandex.ru/maps/?text=${encodeURIComponent(property.title + ' ' + (property.address || property.location || 'Москва'))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs uppercase tracking-widest text-primary hover:text-accent transition-colors flex items-center gap-2"
                        >
                            <FiMapPin className="text-accent" />
                            Открыть в Яндекс.Картах
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="w-full lg:w-1/3 relative">
                <div className="sticky top-28 space-y-8">
                    
                    {/* Agent Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-white p-8 border border-primary/5 shadow-2xl shadow-primary/5 rounded-2xl overflow-hidden relative"
                    >
                        <div className="flex items-center gap-5 mb-8">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#BFA473] p-1">
                                <img src="https://picsum.photos/200/200?random=1" className="w-full h-full object-cover rounded-full" alt="Broker" />
                            </div>
                            <div>
                                <span className="block text-[10px] uppercase tracking-widest text-[#BFA473] mb-1">Ваш брокер</span>
                                <span className="font-serif text-2xl text-primary leading-none block mb-1">Анна Соколова</span>
                                <span className="text-xs text-primary/40 font-light">Senior Broker</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 mb-8">
                             <a href={`tel:${PHONE_CLEAN}`} className="flex items-center justify-center gap-3 w-full bg-[#2C2420] text-white py-4 rounded-xl hover:bg-[#BFA473] transition-colors duration-300 shadow-lg group">
                                <FiSmartphone className="text-lg"/>
                                <span className="uppercase tracking-widest text-xs font-bold">{PHONE}</span>
                             </a>
                             <div className="grid grid-cols-2 gap-3">
                                 <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#25D366] py-3 rounded-xl hover:bg-[#25D366] hover:text-white transition-all duration-300 border border-[#25D366]/20">
                                    <FiMessageCircle size={20} />
                                    <span className="text-xs font-bold">WhatsApp</span>
                                 </a>
                                 <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#0088cc]/10 text-[#0088cc] py-3 rounded-xl hover:bg-[#0088cc] hover:text-white transition-all duration-300 border border-[#0088cc]/20">
                                    <FiSend size={18} />
                                    <span className="text-xs font-bold">Telegram</span>
                                 </a>
                             </div>
                        </div>

                        <div className="border-t border-primary/5 pt-6">
                            <h5 className="font-serif text-lg mb-4 text-center">Заказать звонок</h5>
                            <form className="space-y-3">
                                <input 
                                    type="text" 
                                    placeholder="Ваше имя" 
                                    className="w-full bg-[#F9F9F9] border border-transparent focus:border-[#BFA473]/30 rounded-lg px-4 py-3 text-sm outline-none transition-all placeholder:text-primary/30" 
                                />
                                <input 
                                    type="tel" 
                                    placeholder="+7 (999) 000-00-00" 
                                    className="w-full bg-[#F9F9F9] border border-transparent focus:border-[#BFA473]/30 rounded-lg px-4 py-3 text-sm outline-none transition-all placeholder:text-primary/30" 
                                />
                                <button className="w-full bg-white border border-primary/10 text-primary py-3 rounded-lg uppercase tracking-widest text-[10px] hover:bg-primary hover:text-white transition-colors duration-300">
                                    Перезвоните мне
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* PDF Download Teaser */}
                    <div className="bg-[#BFA473] p-8 rounded-2xl text-[#2C2420] relative overflow-hidden group cursor-pointer shadow-xl">
                        <div className="relative z-10">
                            <h4 className="font-serif text-2xl mb-2">Презентация {property.title}</h4>
                            <p className="text-sm opacity-80 mb-6 leading-relaxed">Скачайте полную презентацию с планировками и ценами.</p>
                            <div className="inline-flex items-center gap-2 border-b border-[#2C2420] pb-1 uppercase text-xs tracking-widest font-bold group-hover:gap-4 transition-all">
                                Скачать PDF <FiArrowUpRight />
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 opacity-20 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                             <FiLayers size={100} />
                        </div>
                    </div>

                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyPage;