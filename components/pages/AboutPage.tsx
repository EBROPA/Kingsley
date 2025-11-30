
import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
    const stats = [
        { value: "3", label: "Года работы", suffix: "" },
        { value: "30", label: "Сделок по рекомендации", suffix: "%" },
        { value: "24/7", label: "Поддержка клиентов", suffix: "" }
    ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 mb-32">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
         >
            <span className="text-accent text-xs uppercase tracking-[0.3em] mb-6 block">О компании</span>
            <h1 className="font-serif text-5xl md:text-7xl text-primary leading-tight mb-8">
                Мы — хранители <br/> <span className="italic text-accent">культуры жизни</span>
            </h1>
            <p className="font-sans text-xl text-primary/60 font-light leading-relaxed">
                Недвижимость для нас — это не метры, а декорации, в которых разворачиваются главные сцены вашей жизни.
            </p>
         </motion.div>
      </div>

      {/* Image & Philosophy & Stats */}
      <section className="mb-32">
          <div className="relative h-[600px] w-full mb-20 overflow-hidden">
             <div className="absolute inset-0 bg-black/20 z-10" />
             <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover fixed-attachment" alt="Philosophy" />
             <div className="absolute inset-0 z-20 flex items-center justify-center">
                 <h2 className="font-serif text-5xl md:text-6xl text-white text-center">
                     "Приватность. <br/> Экспертиза. <br/> Доверие."
                 </h2>
             </div>
          </div>

          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                  <h3 className="font-serif text-3xl text-primary mb-6">Наша Философия</h3>
                  <div className="w-16 h-[1px] bg-accent mb-6" />
                  <p className="font-sans text-primary/70 leading-relaxed font-light mb-6">
                      В мире шума мы продаем тишину. В мире суеты мы дарим время. Kingsley Estates было создано как антитеза массовому рынку. Мы сознательно ограничиваем количество клиентов, с которыми работаем одновременно, чтобы гарантировать каждому уровень сервиса Family Office.
                  </p>
                  <p className="font-sans text-primary/70 leading-relaxed font-light">
                      Мы не просто подбираем квартиру — мы проводим аудит образа жизни. Любите ли вы бегать по утрам? Важна ли вам тишина для работы дома? В какую школу пойдут дети? Мы знаем ответы еще до того, как предложим вам первый вариант.
                  </p>
              </div>

              {/* Redesigned Stats Block */}
              <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="bg-primary text-[#F5F2EA] p-12 md:p-16 shadow-2xl relative overflow-hidden"
              >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 p-12 opacity-5 font-serif text-9xl italic leading-none pointer-events-none text-accent">K.</div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

                  <h3 className="font-serif text-3xl mb-10 relative z-10 text-white border-b border-white/10 pb-6">Цифры и факты</h3>
                  
                  <div className="space-y-10 relative z-10">
                      {stats.map((stat, idx) => (
                          <motion.div 
                             key={idx}
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true }}
                             transition={{ delay: idx * 0.2 + 0.3 }}
                             className="flex flex-col"
                          >
                             <div className="flex items-baseline gap-1">
                                <span className="font-sans text-6xl text-accent font-medium">{stat.value}</span>
                                <span className="font-sans text-4xl text-accent font-medium">{stat.suffix}</span>
                             </div>
                             <span className="text-xs uppercase tracking-[0.2em] text-white/50 mt-2">{stat.label}</span>
                          </motion.div>
                      ))}
                  </div>
              </motion.div>
          </div>
      </section>

      {/* Team Section (Descriptive, No Photos) */}
      <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-accent text-xs uppercase tracking-[0.3em]">Наши люди</span>
                <h2 className="font-serif text-4xl text-primary mt-4">Команда Kingsley Estates</h2>
                <p className="max-w-2xl mx-auto mt-6 text-primary/60 font-light text-lg">
                    Мы сознательно отказались от публикации фотографий наших сотрудников. В мире De Luxe приватность — это высшая ценность, которая распространяется не только на клиентов, но и на тех, кто защищает их интересы.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* Department 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 border-t-2 border-accent shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                     <h3 className="font-serif text-2xl text-primary mb-4">Департамент продаж</h3>
                     <p className="font-sans text-primary/70 font-light leading-relaxed text-sm">
                        Брокеры с подтвержденным опытом от 7 лет в сегменте High-End. Каждый эксперт имеет узкую специализацию по локациям: Патриаршие, Остоженка, Хамовники и Москва-Сити. Мы знаем о лотах, которых еще нет в рекламе.
                     </p>
                </motion.div>

                {/* Department 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white p-8 border-t-2 border-accent shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                     <h3 className="font-serif text-2xl text-primary mb-4">Юридическая служба</h3>
                     <p className="font-sans text-primary/70 font-light leading-relaxed text-sm">
                        Собственная команда юристов международного права. Мы структурируем сложные трансграничные сделки, решаем вопросы наследственного планирования и проводим глубокий аудит (Due Diligence) каждого объекта.
                     </p>
                </motion.div>

                {/* Department 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-8 border-t-2 border-accent shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                     <h3 className="font-serif text-2xl text-primary mb-4">Инвестиционный отдел</h3>
                     <p className="font-sans text-primary/70 font-light leading-relaxed text-sm">
                        Аналитики, которые оценивают ликвидность активов. Мы помогаем сформировать портфель недвижимости, который сохранит капитал и обеспечит пассивный доход выше банковских депозитов.
                     </p>
                </motion.div>

                 {/* Department 4 */}
                 <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-white p-8 border-t-2 border-accent shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                     <h3 className="font-serif text-2xl text-primary mb-4">Client Service</h3>
                     <p className="font-sans text-primary/70 font-light leading-relaxed text-sm">
                        Ваш комфорт после сделки. Помощь с переездом, подбор управляющей компании, консьерж-сервис и организация ремонтных работ "под ключ" с лучшими архитектурными бюро.
                     </p>
                </motion.div>

            </div>

            <div className="mt-16 text-center">
                 <button 
                    onClick={() => window.open(`https://wa.me/74950322199?text=${encodeURIComponent("Здравствуйте, хочу связаться с руководством агентства")}`, '_blank')}
                    className="inline-block px-10 py-4 bg-primary text-white text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors duration-300 shadow-lg"
                >
                    Связаться с руководством
                </button>
            </div>
      </div>
    </div>
  );
};

export default AboutPage;
