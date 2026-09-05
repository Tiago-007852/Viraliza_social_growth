import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, PackageCheck, MessageCircle } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Escolhe a plataforma',
      description: 'Seleciona Instagram, TikTok, YouTube ou Facebook.',
      icon: <Smartphone size={24} className="text-cyan-400" />,
    },
    {
      number: '02',
      title: 'Escolhe o pacote',
      description: 'Escolhe o pacote que melhor corresponde ao que procuras.',
      icon: <PackageCheck size={24} className="text-blue-400" />,
    },
    {
      number: '03',
      title: 'Fala connosco',
      description: 'Clica em "Comprar agora" e serás direcionado diretamente para o WhatsApp.',
      icon: <MessageCircle size={24} className="text-purple-400" />,
    },
  ];

  return (
    <section id="como-funciona" className="py-14 sm:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium mb-3">
            <span>Passo a Passo</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Começar é simples.
          </h2>
          <p className="mt-2.5 sm:mt-3 text-sm sm:text-lg text-neutral-400">
            Processo ágil, sem cadastros complicados nem formulários longos.
          </p>
        </div>

        {/* 3 Step Cards with connecting elements */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Subtle connecting line behind on desktop */}
          <div
            className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 pointer-events-none -translate-y-6"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl glass-card hover:border-white/20 transition-all duration-300 group"
            >
              {/* Step Number Tag */}
              <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm mb-4">
                {step.number}
              </div>

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
