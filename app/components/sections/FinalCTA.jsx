'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FinalCTA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-br from-navy via-[#1a3354] to-[#162840]">
      <div className="max-w-4xl mx-auto px-4 text-center" ref={ref}>
        {/* Main Headline */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Готовы к{' '}
          <span className="text-coral">измеримым результатам?</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Бесплатная консультация + аудит вашей текущей ситуации
        </motion.p>

        {/* Main CTA */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-coral hover:bg-[#FF5252] text-white px-12 py-7 text-xl font-bold rounded-lg shadow-2xl hover:shadow-coral/50 transition-all hover:scale-110"
            >
              Хочу бесплатную консультацию
            </Button>
          </Link>
        </motion.div>

        {/* What You Get */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Что вы получите на консультации:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <div className="font-semibold text-white mb-1">
                  Аудит текущей ситуации
                </div>
                <p className="text-gray-300 text-sm">
                  Оценим ваш сайт, аналитику и рекламу (если есть)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <div className="font-semibold text-white mb-1">
                  Честную оценку
                </div>
                <p className="text-gray-300 text-sm">
                  Скажем, можем ли мы помочь и стоит ли инвестировать
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-success-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <div className="font-semibold text-white mb-1">
                  План действий
                </div>
                <p className="text-gray-300 text-sm">
                  Конкретные шаги для роста вашего бизнеса
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          className="text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg mb-6">Или свяжитесь с нами напрямую:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:info@haloagency.cz"
              className="flex items-center gap-2 text-white hover:text-coral transition"
            >
              <Mail className="w-5 h-5" />
              <span>info@haloagency.cz</span>
            </a>
            <a
              href="tel:+420123456789"
              className="flex items-center gap-2 text-white hover:text-coral transition"
            >
              <Phone className="w-5 h-5" />
              <span>+420 123 456 789</span>
            </a>
            <a
              href="https://wa.me/420123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-coral transition"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <p className="text-gray-300 text-lg">
            Никакого давления. Никаких скрытых платежей. Только честный разговор о вашем бизнесе.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
