
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheck, FiArrowRight } from 'react-icons/fi';

const servicesDetailed = [
    {
        title: "Покупка и Продажа",
        subtitle: "Стратегический подход к активам",
        desc: "Мы не просто проводим сделки, мы управляем вашим инвестиционным портфелем. От закрытых продаж (off-market) до аукционных стратегий для продавцов. Мы знаем реальную стоимость квадратного метра на Патриарших лучше, чем кто-либо другой.",
        image: "/img/pokupka_and_prodazga.jpg",
        modalInfo: {
            title: "Управление активами",
            description: "Наш подход к сделкам основан на глубокой аналитике и инсайдерской информации. Мы помогаем не просто купить или продать, а сформировать эффективную стратегию управления капиталом через недвижимость.",
            features: [
                "Доступ к закрытым продажам (Off-market)",
                "Инвестиционный скоринг объектов",
                "Разработка стратегии выхода из актива",
                "Организация закрытых тендеров для продавцов",
                "Полное сопровождение банковских расчетов"
            ]
        }
    },
    {
        title: "Юридический Бутик",
        subtitle: "Безопасность как искусство",
        desc: "Наша in-house команда юристов специализируется на сложнейших сделках с элитной недвижимостью: наследственные дела, международное структурирование, проверка титула глубиной в 50 лет. Ваше спокойствие — наша главная метрика.",
        image: "/img/pokupka_and_prodazga.jpg",
        modalInfo: {
            title: "Правовая защита",
            description: "Мы обеспечиваем юридическую чистоту сделки, исключая любые риски оспаривания в будущем. Наша ответственность застрахована, а компетенции подтверждены многолетней практикой.",
            features: [
                "Глубокий Due Diligence (аудит) объекта",
                "Структурирование трансграничных сделок",
                "Налоговое планирование и оптимизация",
                "Сопровождение наследственных дел",
                "Проверка контрагентов по международным базам"
            ]
        }
    },
    {
        title: "Дистанционная покупка",
        subtitle: "Границы — это условность",
        desc: "Мы стерли границы между городами и странами. Выбирайте недвижимость в Москве, находясь в Лондоне, Дубае или на борту самолета. Видео-туры в реальном времени, электронная регистрация и безопасные трансграничные расчеты. Весь процесс сделки в вашем смартфоне.",
        image: "/img/pokupka_and_prodazga.jpg",
        modalInfo: {
            title: "Сделка без границ",
            description: "Технологии позволяют нам проводить сделки любой сложности полностью удаленно, сохраняя при этом эффект личного присутствия и абсолютный контроль над ситуацией.",
            features: [
                "Видео-туры в 4K в режиме реального времени",
                "Выпуск усиленной квалифицированной электронной подписи",
                "Организация безопасных трансграничных расчетов",
                "Приемка квартиры по доверенности с экспертом",
                "Электронная регистрация перехода права"
            ]
        }
    },
    {
        title: "Дизайн и Архитектура",
        subtitle: "Видение будущего дома",
        desc: "Еще до покупки мы организуем выезд архитектора, чтобы оценить потенциал перепланировки. Мы сотрудничаем с бюро топ-5 AD Russia и поможем создать пространство, которое станет вашим родовым гнездом.",
        image: "/img/tihai_roskoh.jpg",
        modalInfo: {
            title: "Эстетика жизни",
            description: "Мы не оставляем вас один на один с бетонными стенами. Наш сервис включает в себя полный цикл создания интерьера — от оценки потенциала планировки до декорирования.",
            features: [
                "Технический аудит помещений перед покупкой",
                "Разработка планировочных решений (Test Fit)",
                "Подбор архитектурного бюро под ваш стиль",
                "Авторский надзор и управление стройкой",
                "Комплектация предметами искусства"
            ]
        }
    }
];

const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof servicesDetailed[0] | null>(null);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleOpenModal = (service: typeof servicesDetailed[0]) => {
      setSelectedService(service);
      setFormStatus('idle');
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
      setSelectedService(null);
      // Restore body scroll
      document.body.style.overflow = 'unset';
  };

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setFormStatus('submitting');
      // Simulate API Call
      setTimeout(() => {
          setFormStatus('success');
      }, 1500);
  };

  // Clean up overflow on unmount
  useEffect(() => {
      return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background overflow-hidden">
      
      {/* Editorial Header */}
      <div className="container mx-auto px-6 mb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="border-b border-primary/10 pb-12"
          >
              <h1 className="font-serif text-6xl md:text-8xl text-primary leading-[0.9]">
                  Культура <br/>
                  <span className="ml-12 md:ml-32 italic text-accent">сервиса</span>
              </h1>
              <p className="mt-8 max-w-xl font-sans text-lg text-primary/60 font-light ml-auto">
                  Kingsley Service — это экосистема, созданная для того, чтобы вы не тратили время на быт, а инвестировали его в жизнь.
              </p>
          </motion.div>
      </div>

      {/* Zig-Zag Layout */}
      <div className="flex flex-col gap-0">
          {servicesDetailed.map((service, index) => (
              <section key={index} className="group min-h-[80vh] flex items-center py-12 md:py-0">
                  <div className="container mx-auto px-6">
                      <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                          
                          {/* Image Side */}
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                            className="w-full md:w-1/2 relative"
                          >
                              <div className="aspect-[3/4] overflow-hidden relative">
                                  {/* Decor Line */}
                                  <div className={`absolute top-0 bottom-0 w-[1px] bg-accent/30 ${index % 2 !== 0 ? 'right-0' : 'left-0'} -mx-8 hidden md:block z-20`} />
                                  
                                  <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                                  />
                                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-500 z-10" />
                              </div>
                              <div className="absolute -bottom-6 -right-6 bg-background p-4 border border-primary/10 hidden md:block">
                                  <span className="font-sans text-4xl text-primary/20 font-medium">0{index + 1}</span>
                              </div>
                          </motion.div>

                          {/* Text Side */}
                          <motion.div 
                             initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             viewport={{ once: true }}
                             transition={{ duration: 0.8, delay: 0.2 }}
                             className="w-full md:w-1/2"
                          >
                              <span className="text-accent text-xs uppercase tracking-[0.3em] mb-4 block">{service.subtitle}</span>
                              <h2 className="font-serif text-4xl md:text-5xl text-primary mb-8 leading-tight">{service.title}</h2>
                              <div className="w-12 h-[1px] bg-primary mb-8" />
                              <p className="font-sans text-lg text-primary/70 font-light leading-relaxed mb-8">
                                  {service.desc}
                              </p>
                              <button 
                                onClick={() => handleOpenModal(service)}
                                className="text-xs uppercase tracking-widest border-b border-primary/30 pb-1 hover:border-accent hover:text-accent transition-colors"
                              >
                                  Узнать подробнее
                              </button>
                          </motion.div>
                      </div>
                  </div>
              </section>
          ))}
      </div>

      {/* Concierge CTA */}
      <div className="bg-primary text-[#F5F2EA] py-32 mt-20">
          <div className="container mx-auto px-6 text-center">
              <span className="block mb-6 text-accent text-4xl font-serif italic">Private Office</span>
              <h3 className="text-3xl md:text-5xl font-serif mb-8 max-w-3xl mx-auto">Для особых задач у нас есть решение, которого нет в списке.</h3>
              <a href="#contact" className="inline-block border border-white/30 px-12 py-4 uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-primary transition-all">
                  Связаться с директором
              </a>
          </div>
      </div>

      {/* SERVICE DETAILS DRAWER (MODAL) */}
      <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[60] flex justify-end">
                {/* Backdrop */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={handleCloseModal}
                    className="absolute inset-0 bg-primary/60 backdrop-blur-sm cursor-pointer"
                />

                {/* Drawer Content */}
                <motion.div 
                    initial={{ x: "100%" }}
                    animate={{ x: "0%" }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 30, stiffness: 300, mass: 1 }}
                    className="relative w-full md:w-[85vw] lg:w-[1000px] h-full bg-[#F5F2EA] shadow-2xl flex flex-col md:flex-row z-10 overflow-y-auto md:overflow-hidden"
                >
                    {/* Close Button */}
                    <button 
                        onClick={handleCloseModal}
                        className="absolute top-4 right-4 md:top-6 md:right-6 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary/10 md:border-white/10 hover:border-accent hover:bg-accent hover:text-white bg-white/80 md:bg-transparent flex items-center justify-center text-primary md:text-white transition-all duration-300 backdrop-blur-md"
                    >
                        <FiX size={20} className="md:w-6 md:h-6" />
                    </button>

                    {/* Left: Info Section */}
                    <div className="w-full md:w-3/5 h-auto md:h-full md:overflow-y-auto p-6 pt-20 md:p-20 relative">
                        <div className="mb-8 md:mb-12">
                            <span className="text-accent text-xs uppercase tracking-[0.3em] mb-4 block">Сервис Kingsley</span>
                            <h3 className="font-serif text-4xl md:text-6xl text-primary leading-[1.1] mb-8">
                                {selectedService.modalInfo.title}
                            </h3>
                            <div className="w-24 h-[1px] bg-accent"></div>
                        </div>

                        <p className="font-sans text-primary/70 font-light leading-loose mb-12 text-lg text-justify">
                            {selectedService.modalInfo.description}
                        </p>
                        
                        <div className="space-y-6">
                            <h4 className="font-serif text-xl text-primary mb-4">Что входит в услугу:</h4>
                            {selectedService.modalInfo.features.map((feature, i) => (
                                <motion.div 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    key={i} 
                                    className="flex items-start gap-5 p-4 bg-white/50 rounded-lg border border-primary/5 hover:border-accent/30 transition-colors"
                                >
                                    <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                                        <FiCheck size={12} />
                                    </div>
                                    <span className="text-primary font-sans font-light tracking-wide">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Premium Form Section */}
                    <div className="w-full md:w-2/5 h-auto md:h-full bg-[#2C2420] p-8 md:p-16 flex flex-col justify-center relative border-l border-white/10 min-h-[500px] md:min-h-0">
                        {/* Luxury Texture/Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2C2420] to-[#1A1614] z-0" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10">
                            <AnimatePresence mode="wait">
                                {formStatus === 'success' ? (
                                    <motion.div 
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-10"
                                    >
                                        <div className="w-20 h-20 rounded-full border border-accent text-accent flex items-center justify-center mx-auto mb-8">
                                            <FiCheck size={36} />
                                        </div>
                                        <h4 className="font-serif text-3xl mb-4 text-[#F5F2EA]">Благодарим вас</h4>
                                        <p className="text-white/60 font-light leading-relaxed mb-8">
                                            Ваш запрос принят. Персональный менеджер свяжется с вами в течение 15 минут для уточнения деталей.
                                        </p>
                                        <button onClick={handleCloseModal} className="text-accent text-xs uppercase tracking-widest border-b border-accent pb-1 hover:text-white hover:border-white transition-colors">
                                            Вернуться к сервисам
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                        <span className="text-accent text-xs uppercase tracking-[0.2em] mb-3 block">Обратная связь</span>
                                        <h4 className="font-serif text-3xl md:text-4xl mb-6 text-[#F5F2EA]">
                                            Заказать <br/><span className="italic text-accent">консультацию</span>
                                        </h4>
                                        <p className="text-white/40 text-sm mb-10 font-light leading-relaxed">
                                            Оставьте свои контактные данные. Конфиденциальность гарантируем.
                                        </p>

                                        <form onSubmit={handleSubmit} className="space-y-8">
                                            <div className="group">
                                                <input 
                                                    type="text" 
                                                    required
                                                    placeholder="Ваше имя"
                                                    value={formName}
                                                    onChange={(e) => setFormName(e.target.value)}
                                                    className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors font-serif text-lg"
                                                />
                                            </div>
                                            <div className="group">
                                                <input 
                                                    type="tel" 
                                                    required
                                                    placeholder="Номер телефона"
                                                    value={formPhone}
                                                    onChange={(e) => setFormPhone(e.target.value)}
                                                    className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors font-serif text-lg"
                                                />
                                            </div>
                                            <button 
                                                type="submit"
                                                disabled={formStatus === 'submitting'}
                                                className="w-full bg-accent text-[#2C2420] py-5 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white transition-colors mt-6 disabled:opacity-70 flex items-center justify-center gap-3 group shadow-lg shadow-accent/10"
                                            >
                                                {formStatus === 'submitting' ? 'Обработка...' : (
                                                    <>
                                                        Отправить <FiArrowRight className="group-hover:translate-x-1 transition-transform"/>
                                                    </>
                                                )}
                                            </button>
                                            <p className="text-[10px] text-white/20 text-center leading-tight">
                                                Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных.
                                            </p>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
          )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesPage;
