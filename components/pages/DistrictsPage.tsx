import React from 'react';
import { motion } from 'framer-motion';

const districtsDetailed = [
  {
    id: 1,
    name: "Патриаршие пруды",
    desc: "Эпицентр светской жизни и тихие переулки для избранных.",
    fullDesc: "Патриаршие пруды — это уникальное сочетание истории и современности. Здесь в шаговой доступности находятся лучшие рестораны Москвы, бутики и театры, но стоит свернуть в переулок, как вы оказываетесь в тишине старой Москвы.",
    stats: ["Средняя цена: $25k / м²", "Исторический фонд", "Парковая зона"],
    image: "/img/patriarhie_pruds.jpg"
  },
  {
    id: 2,
    name: "Золотая Миля (Остоженка)",
    desc: "Самый престижный и дорогой район столицы.",
    fullDesc: "Остоженка — синоним статуса. Клубные дома на 10-15 квартир, абсолютная приватность, лучшие архитектурные проекты современности и соседство с историческими особняками.",
    stats: ["Средняя цена: $35k / м²", "Клубные дома", "Близость к Кремлю"],
    image: "/img/ostothenka.jpg"
  },
  {
    id: 3,
    name: "Хамовники",
    desc: "Идеальный баланс для семейной жизни.",
    fullDesc: "Зеленый, спокойный и респектабельный район. Усадьба Трубецких, набережные Москвы-реки, лучшие гимназии и лицеи. Хамовники выбирают те, кто ценит комфорт семьи превыше всего.",
    stats: ["Средняя цена: $18k / м²", "Парки и скверы", "Лучшие школы"],
    image: "/img/hamovniki.webp"
  },
  {
    id: 4,
    name: "Арбат",
    desc: "Душа старой Москвы с богемным шлейфом.",
    fullDesc: "Кривоарбатские переулки хранят тайны истории. Здесь жили писатели, художники и ученые. Сегодня это район с особой интеллектуальной аурой и великолепными отреставрированными доходными домами.",
    stats: ["Средняя цена: $20k / м²", "Культурный центр", "Пешеходные зоны"],
    image: "/img/arbat.jpg"
  },
  {
    id: 5,
    name: "Замоскворечье",
    desc: "Купеческая Москва с видом на Кремль.",
    fullDesc: "Район, сохранивший дух старого города. Малоэтажная застройка, множество церквей, Третьяковская галерея. Идеальный выбор для тех, кто ценит историю, но хочет жить в современном комфорте новых элитных комплексов.",
    stats: ["Средняя цена: $22k / м²", "Виды на Кремль", "Малоэтажная застройка"],
    image: "/img/zamoskvoreche.jpg"
  }
];

const DistrictsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 mb-20">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
         >
            <span className="text-accent text-xs uppercase tracking-[0.3em] block mb-4">Гид по Москве</span>
            <h1 className="font-serif text-5xl md:text-7xl text-primary leading-tight">
               Локации, где пишется <br/> <span className="italic text-accent">история успеха</span>
            </h1>
         </motion.div>
      </div>

      <div className="flex flex-col gap-24">
        {districtsDetailed.map((district, index) => (
            <motion.div 
                key={district.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`container mx-auto px-6 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
                <div className="w-full md:w-1/2 overflow-hidden shadow-2xl relative group">
                    <div className="aspect-[16/9] overflow-hidden">
                        <img 
                            src={district.image} 
                            alt={district.name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                        />
                    </div>
                </div>
                
                <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-6xl font-sans text-accent/20 font-medium">0{index + 1}</span>
                        <h2 className="font-serif text-4xl text-primary">{district.name}</h2>
                    </div>
                    <p className="font-sans text-xl font-medium text-primary mb-6">
                        {district.desc}
                    </p>
                    <p className="font-sans text-primary/60 font-light leading-relaxed mb-8">
                        {district.fullDesc}
                    </p>
                    <div className="grid grid-cols-2 gap-4 border-t border-primary/10 pt-6">
                        {district.stats.map((stat, i) => (
                            <span key={i} className="text-xs uppercase tracking-widest text-primary/70 flex items-center gap-2">
                                <span className="w-1 h-1 bg-accent rounded-full"></span> {stat}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DistrictsPage;