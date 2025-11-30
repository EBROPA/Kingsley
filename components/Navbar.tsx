
import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { FiMenu, FiSearch, FiX } from 'react-icons/fi';
import { PageView } from '../types';

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  const navLinks: { id: PageView; label: string }[] = [
    { id: 'collections', label: 'Коллекции' },
    { id: 'districts', label: 'Районы' },
    { id: 'services', label: 'Сервис' },
    { id: 'blog', label: 'Журнал' },
    { id: 'about', label: 'О нас' },
  ];

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
          isScrolled || mobileMenuOpen ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => handleNavClick('home')} className="font-serif text-2xl tracking-widest uppercase font-semibold text-primary z-50 relative">
            Kingsley<span className="text-accent">.</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12 font-sans text-sm tracking-widest uppercase text-primary/80">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`hover:text-accent transition-colors ${currentView === link.id ? 'text-accent border-b border-accent' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-6 text-primary z-50 relative">
            <a href="tel:+74950322199" className="hidden lg:block font-sans text-xs font-medium tracking-widest hover:text-accent transition-colors">
              +7 (495) 032-21-99
            </a>
            <button 
              onClick={() => handleNavClick('collections')}
              className="hidden md:block hover:text-accent transition-colors"
            >
              <FiSearch size={22} />
            </button>
            <button 
              className="md:hidden hover:text-accent transition-colors z-50 relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <motion.div
                initial={false}
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-background z-40 flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  onClick={() => handleNavClick(link.id)}
                  className="font-serif text-3xl text-primary hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-8 flex flex-col items-center gap-4">
                 <a href="tel:+74950322199" className="font-sans text-2xl text-primary hover:text-accent transition-colors font-medium">
                   +7 (495) 032-21-99
                 </a>
              </div>
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                onClick={() => handleNavClick('home')} 
                className="mt-8 text-xs uppercase tracking-widest text-primary/50"
              >
                На главную
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
