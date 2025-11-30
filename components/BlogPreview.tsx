
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { PageView, BlogPost } from '../types';

interface BlogPreviewProps {
  onNavigate: (view: PageView) => void;
  onPostSelect: (post: BlogPost) => void;
}

const previewPosts: BlogPost[] = [
    {
        id: 201,
        title: "Почему элитная недвижимость в Москве обыгрывает золото",
        category: "Инвестиции",
        date: "24 Октября",
        excerpt: "В условиях экономической турбулентности бетонное золото Хамовников и Патриарших показывает доходность, недоступную традиционным финансовым инструментам. Разбираем цифры.",
        image: "/img/pothemu_elite_nedvizgimost_luthe_zolota.jpg",
    },
    {
        id: 202,
        title: "Тихая роскошь: новые стандарты жизни 2024",
        category: "Тренды",
        date: "20 Октября",
        excerpt: "Покупатель De Luxe помолодел и изменил свои требования. Золотая лепнина уступила место системам фильтрации воздуха, звукоизоляции класса 'А' и натуральному камню.",
        image: "/img/tihai_roskoh.jpg",
    },
    {
        id: 203,
        title: "Искусство дистанционной сделки",
        category: "Сервис",
        date: "15 Октября",
        excerpt: "Как купить пентхаус в Москве, находясь в Дубае или Лондоне? Пошаговая инструкция безопасной покупки без единого визита в офис.",
        image: "/img/pokupka_and_prodazga.jpg",
    }
];

const BlogPreview: React.FC<BlogPreviewProps> = ({ onNavigate, onPostSelect }) => {
  return (
    <section className="py-24 bg-background text-primary">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-4xl text-primary">Журнал</h2>
            <button 
                onClick={() => onNavigate('blog')}
                className="md:hidden text-accent text-xs uppercase tracking-widest border-b border-accent pb-1"
            >
                Все статьи
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewPosts.map((post, index) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col h-full bg-white shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    onClick={() => onPostSelect(post)}
                >
                    <div className="aspect-[4/3] overflow-hidden relative">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500 z-10" />
                        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 text-[10px] uppercase tracking-widest text-primary z-20 border border-primary/10">
                            {post.category}
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-serif text-xl leading-snug mb-3 text-primary group-hover:text-accent transition-colors">
                            {post.title}
                        </h3>
                        <p className="font-sans text-sm text-primary/60 font-light leading-relaxed mb-6 line-clamp-3 flex-grow">
                            {post.excerpt}
                        </p>
                        <div className="mt-auto pt-4 border-t border-primary/5">
                            <span className="text-accent text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                                Читать <FiArrowRight />
                            </span>
                        </div>
                    </div>
                </motion.div>
            ))}

            {/* "Show All" Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                onClick={() => onNavigate('blog')}
                className="flex flex-col justify-center items-center h-full min-h-[300px] border border-accent/30 hover:border-accent hover:bg-accent/5 cursor-pointer transition-all duration-300 group bg-transparent relative"
            >
                <div className="text-center">
                    <span className="block font-serif text-2xl text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                        Показать <br/> все статьи
                    </span>
                    <div className="flex justify-center mt-4 text-accent opacity-50 group-hover:opacity-100 transition-opacity">
                        <FiArrowRight size={24} />
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
