'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-navy via-[#1a3354] to-[#162840]">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Main Headline with Typewriter Effect */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Прибыльная онлайн-реклама.{' '}
            <br />
            <span className="text-coral">
              <TypeAnimation
                sequence={[
                  'Не пустые обещания.',
                  2000,
                  'Измеримые результаты.',
                  2000,
                  'Прозрачная отчётность.',
                  2000,
                  'На основе данных.',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                style={{ display: 'inline-block' }}
              />
            </span>
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
                className="bg-coral hover:bg-[#FF5252] text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Бесплатная консультация
              </Button>
            </Link>
            <Link href="#services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-navy hover:bg-white hover:text-navy px-8 py-6 text-lg font-semibold rounded-lg transition-all hover:scale-105"
              >
                Как это работает
              </Button>
            </Link>
          </div>

          {/* Trust Indicators with Counter Animation */}
          <div className="mt-16 pt-8 border-t border-white/20" ref={ref}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-gold font-mono mb-2">
                  {inView && <CountUp end={50} duration={2.5} suffix="+" />}
                  {!inView && '50+'}
                </div>
                <div className="text-gray-300">Реализованных проектов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold font-mono mb-2">
                  {inView && <CountUp end={3.5} decimals={1} duration={2.5} suffix="x" />}
                  {!inView && '3.5x'}
                </div>
                <div className="text-gray-300">Средний рост конверсий</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold font-mono mb-2">
                  {inView && <CountUp end={15} duration={2.5} suffix="+" />}
                  {!inView && '15+'}
                </div>
                <div className="text-gray-300">Отраслей</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 fill-off-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
