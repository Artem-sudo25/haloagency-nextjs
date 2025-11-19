import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-navy via-[#1a3354] to-[#162840]">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Прибыльная онлайн-реклама.{' '}
            <span className="text-coral">Не пустые обещания.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed">
            Сайты, аналитика и реклама - комплексная система для измеримых результатов
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-coral hover:bg-[#FF5252] text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Бесплатная консультация
              </Button>
            </Link>
            <Link href="#services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-6 text-lg font-semibold rounded-lg transition-all"
              >
                Как это работает
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-gold font-mono mb-2">50+</div>
                <div className="text-gray-300">Реализованных проектов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold font-mono mb-2">3.5x</div>
                <div className="text-gray-300">Средний рост конверсий</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold font-mono mb-2">15+</div>
                <div className="text-gray-300">Отраслей</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
