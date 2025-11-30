
import React from 'react';
import { PageView } from '../types';
import { FiArrowUpRight } from 'react-icons/fi';

interface FooterProps {
  onNavigate: (view: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1A1614] text-[#F5F2EA] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Logo & Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20 border-b border-white/10 pb-20">
            <div className="max-w-md">
                <button onClick={() => onNavigate('home')} className="font-serif text-4xl md:text-5xl tracking-widest uppercase mb-8 block text-left">
                    Kingsley<span className="text-[#BFA473]">.</span>
                </button>
                <p className="font-sans text-white/50 font-light leading-relaxed">
                    Флагманское агентство элитной недвижимости.<br />
                    Мы объединяем безупречный вкус, глубокую экспертизу и абсолютную конфиденциальность.
                </p>
            </div>

            <div className="w-full md:w-auto">
                <span className="block text-xs uppercase tracking-widest text-[#BFA473] mb-4">Подписаться на закрытые продажи</span>
                <form className="flex border-b border-white/20 pb-2 w-full md:w-[300px]">
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        className="bg-transparent border-none outline-none text-white placeholder-white/30 w-full font-serif text-lg"
                    />
                    <button type="button" className="text-white/50 hover:text-white transition-colors">
                        <FiArrowUpRight size={20} />
                    </button>
                </form>
            </div>
        </div>

        {/* Middle Section: Navigation & Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            
            {/* Address */}
            <div className="col-span-1">
                <span className="block text-xs uppercase tracking-widest text-[#BFA473] mb-6">Офис</span>
                <address className="not-italic font-serif text-xl text-white/80 leading-relaxed">
                    Москва, Патриаршие пруды,<br/>
                    М. Бронная, 24<br/>
                    Особняк "Бакст"
                </address>
            </div>

            {/* Menu */}
            <div className="col-span-1">
                <span className="block text-xs uppercase tracking-widest text-[#BFA473] mb-6">Меню</span>
                <ul className="space-y-4 font-sans text-sm text-white/60">
                    <li><button onClick={() => onNavigate('collections')} className="hover:text-white transition-colors">Коллекция</button></li>
                    <li><button onClick={() => onNavigate('districts')} className="hover:text-white transition-colors">Районы</button></li>
                    <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Сервис</button></li>
                    <li><button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">Журнал</button></li>
                </ul>
            </div>

            {/* Contacts */}
            <div className="col-span-1 md:col-span-2">
                <span className="block text-xs uppercase tracking-widest text-[#BFA473] mb-6">Связь</span>
                <div className="flex flex-col gap-6">
                    <a href="tel:+74950322199" className="font-sans text-3xl md:text-4xl text-white hover:text-[#BFA473] transition-colors font-medium">
                        +7 (495) 032-21-99
                    </a>
                    <div className="flex gap-8 text-sm uppercase tracking-widest">
                        <a href="https://t.me/kingsley_est" target="_blank" rel="noopener noreferrer" className="border-b border-white/20 pb-1 hover:border-[#BFA473] hover:text-[#BFA473] transition-colors">
                            Telegram
                        </a>
                        <a href="https://wa.me/74950322199" target="_blank" rel="noopener noreferrer" className="border-b border-white/20 pb-1 hover:border-[#BFA473] hover:text-[#BFA473] transition-colors">
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Section: Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/20 gap-6">
            <div className="flex gap-6">
                <button onClick={() => onNavigate('privacy-policy')} className="hover:text-white transition-colors">Политика конфиденциальности</button>
                <button onClick={() => onNavigate('user-agreement')} className="hover:text-white transition-colors">Пользовательское соглашение</button>
            </div>
            <span>© 2024 Kingsley Estates. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
