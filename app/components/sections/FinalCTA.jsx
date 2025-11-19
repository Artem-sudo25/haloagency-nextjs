import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy via-[#1a3354] to-[#162840]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Готовы к{' '}
          <span className="text-coral">измеримым результатам?</span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
          Бесплатная консультация + аудит вашей текущей ситуации
        </p>

        {/* Main CTA */}
        <div className="mb-12">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-coral hover:bg-[#FF5252] text-white px-12 py-7 text-xl font-bold rounded-lg shadow-2xl hover:shadow-coral/50 transition-all hover:scale-105"
            >
              Получить бесплатную консультацию
            </Button>
          </Link>
        </div>

        {/* What You Get */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
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
        </div>

        {/* Contact Options */}
        <div className="text-white">
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
        </div>

        {/* Trust Statement */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-gray-300 text-lg">
            Никакого давления. Никаких скрытых платежей. Только честный разговор о вашем бизнесе.
          </p>
        </div>
      </div>
    </section>
  );
}
