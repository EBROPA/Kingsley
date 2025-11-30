import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PrivateAccess: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-[#EBE7DD] scroll-mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-6xl text-primary mb-6">
              Начните поиск идеального дома
            </h2>
            <p className="font-sans text-primary/70 text-lg font-light mb-8">
              Оставьте заявку на персональную консультацию. Наши эксперты подберут для вас лучшие предложения на рынке, соответствующие вашим критериям комфорта и престижа.
            </p>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-background p-10 shadow-xl border border-white h-[350px] flex flex-col justify-center"
          >
             <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center"
                  >
                    <h3 className="font-serif text-2xl text-accent mb-2">Заявка отправлена</h3>
                    <p className="font-sans text-primary/60">Мы свяжемся с вами в ближайшее время для уточнения деталей.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 w-full"
                  >
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-primary/50 mb-2">Ваше имя</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Как к вам обращаться" 
                        className="w-full bg-transparent border-b border-primary/20 py-2 focus:outline-none focus:border-accent transition-colors text-primary font-serif text-lg" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-primary/50 mb-2">Ваш телефон</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+7 (999) 000-00-00" 
                        className="w-full bg-transparent border-b border-primary/20 py-2 focus:outline-none focus:border-accent transition-colors text-primary font-serif text-lg" 
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-primary text-[#F5F2EA] py-4 uppercase tracking-[0.2em] text-xs hover:bg-accent transition-colors duration-300 disabled:opacity-70 mt-4"
                    >
                      {formStatus === 'submitting' ? 'Отправка...' : 'Получить консультацию'}
                    </button>
                    <p className="text-[10px] text-primary/40 text-center font-sans">
                      Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                    </p>
                  </motion.form>
                )}
             </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrivateAccess;