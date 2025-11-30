import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiClock, FiCalendar, FiUser, FiCheck } from 'react-icons/fi';
import { BlogPost } from '../../types';

interface BlogPostPageProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onBack }) => {
  return (
    <div className="min-h-screen bg-background text-primary pt-28 pb-24">
       
       {/* Breadcrumbs */}
       <div className="container mx-auto px-6 mb-12">
           <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary/40">
               <span onClick={onBack} className="cursor-pointer hover:text-accent transition-colors">Главная</span>
               <span className="text-primary/20">/</span>
               <span onClick={onBack} className="cursor-pointer hover:text-accent transition-colors">Журнал</span>
               <span className="text-primary/20">/</span>
               <span className="text-primary truncate max-w-[200px]">{post.category}</span>
           </div>
       </div>

       <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Column */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:col-span-8"
            >
                {/* Header */}
                <div className="mb-8">
                    <span className="text-accent text-xs uppercase tracking-[0.3em] mb-4 block">{post.category}</span>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
                        {post.title}
                    </h1>
                </div>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-primary/60 mb-12 border-b border-primary/10 pb-8">
                    <span className="flex items-center gap-2">
                        <FiCalendar className="text-accent" /> {post.date}
                    </span>
                    {post.readTime && (
                        <span className="flex items-center gap-2">
                            <FiClock className="text-accent" /> {post.readTime}
                        </span>
                    )}
                    {post.author && (
                        <span className="flex items-center gap-2">
                            <FiUser className="text-accent" /> {post.author}
                        </span>
                    )}
                </div>

                {/* Main Image */}
                <div className="w-full aspect-[16/9] overflow-hidden relative mb-16 group">
                    <div className="absolute inset-0 bg-black/20 z-10" />
                    <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    />
                </div>

                {/* Content Body */}
                <div className="prose prose-lg max-w-none 
                    prose-headings:font-serif prose-headings:font-normal prose-headings:text-primary prose-headings:mt-12 prose-headings:mb-6
                    prose-p:font-sans prose-p:font-light prose-p:leading-relaxed prose-p:text-primary/70 prose-p:mb-6
                    prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-8 prose-blockquote:italic 
                    prose-blockquote:bg-background prose-blockquote:py-6 prose-blockquote:pr-6 prose-blockquote:my-8
                    prose-blockquote:text-primary/80 prose-blockquote:font-serif prose-blockquote:text-lg
                    prose-ul:list-none prose-ul:space-y-3 prose-ul:my-6
                    prose-li:flex prose-li:items-start prose-li:gap-3 prose-li:text-primary/70
                    prose-strong:text-primary prose-strong:font-medium">
                    {/* Intro / Lead */}
                    <p className="text-xl md:text-2xl leading-relaxed font-serif text-primary mb-12 font-light italic border-l-4 border-accent pl-8 py-4 bg-background">
                        {post.excerpt}
                    </p>

                    {/* Table of Contents (Mock) */}
                    <div className="bg-background border border-primary/10 p-8 md:p-10 mb-12">
                        <h4 className="font-serif text-2xl mb-6 text-primary">Содержание статьи:</h4>
                        <ul className="list-none space-y-3 text-sm font-sans pl-0 m-0">
                            <li className="flex items-center gap-3 cursor-pointer hover:text-accent transition-colors group">
                                <span className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform"></span> 
                                <span>Ключевые критерии выбора</span>
                            </li>
                            <li className="flex items-center gap-3 cursor-pointer hover:text-accent transition-colors group">
                                <span className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform"></span> 
                                <span>Обзор лучших локаций</span>
                            </li>
                            <li className="flex items-center gap-3 cursor-pointer hover:text-accent transition-colors group">
                                <span className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform"></span> 
                                <span>Юридические аспекты</span>
                            </li>
                            <li className="flex items-center gap-3 cursor-pointer hover:text-accent transition-colors group">
                                <span className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform"></span> 
                                <span>Мнение эксперта</span>
                            </li>
                        </ul>
                    </div>

                    {/* Dynamic HTML Content */}
                    <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
                </div>

                {/* Tags / Share */}
                <div className="mt-16 pt-8 border-t border-primary/10">
                     <button 
                         onClick={onBack} 
                         className="text-accent hover:text-accent-dark flex items-center gap-2 font-sans text-sm uppercase tracking-widest transition-colors group"
                     >
                         <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
                         Вернуться к списку статей
                     </button>
                </div>
            </motion.div>

            {/* Sidebar Column (Sticky) */}
            <div className="lg:col-span-4 relative">
                <div className="sticky top-32 space-y-8">
                    
                    {/* Expert Block */}
                    <div className="bg-white p-8 border border-primary/10 shadow-sm">
                        <h3 className="font-serif text-2xl mb-6 text-primary">Эксперт статьи</h3>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent/20">
                                <img src="https://picsum.photos/200/200?random=1" alt="Expert" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="font-serif text-lg text-primary">{post.author || "Александр Волков"}</p>
                                <p className="text-xs uppercase tracking-wider text-primary/50 font-sans">Head of Sales</p>
                            </div>
                        </div>
                        <p className="text-sm text-primary/60 mb-6 font-light leading-relaxed">
                            Помогу подобрать недвижимость под ваши задачи. Знаю все о закрытых продажах.
                        </p>
                        <button className="w-full bg-primary text-background py-4 text-xs uppercase tracking-widest hover:bg-accent transition-colors font-sans">
                            Получить консультацию
                        </button>
                    </div>

                    {/* Catalog Download Block */}
                    <div className="bg-primary text-background p-8 relative overflow-hidden border border-primary">
                        <div className="relative z-10">
                            <h3 className="font-serif text-2xl mb-4 text-background">Каталог 2024</h3>
                            <p className="text-sm text-background/70 mb-6 font-light leading-relaxed">
                                Скачайте подборку ТОП-10 инвестиционных объектов Москвы этого месяца.
                            </p>
                            <form className="space-y-4">
                                <input 
                                    type="text" 
                                    placeholder="Ваш телефон" 
                                    className="w-full bg-background/10 border border-background/20 p-3 text-sm text-background placeholder-background/40 focus:outline-none focus:border-accent transition-colors font-sans" 
                                />
                                <button className="w-full bg-accent text-primary py-4 text-xs uppercase tracking-widest hover:bg-accent-dark transition-colors font-sans font-medium">
                                    Скачать PDF
                                </button>
                            </form>
                        </div>
                        {/* Decor */}
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
                    </div>

                </div>
            </div>

       </div>
    </div>
  );
};

export default BlogPostPage;