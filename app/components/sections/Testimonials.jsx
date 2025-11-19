import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'За первые 3 месяца работы с HaloAgency мы увеличили количество онлайн-записей в два раза. Наконец-то понимаем, откуда приходят клиенты.',
      name: 'Мария Ковалевская',
      business: 'Салон красоты "Элегант"',
      metric: '2x рост записей',
      rating: 5,
      image: '👩‍💼',
    },
    {
      quote:
        'Раньше тратили 20,000 Kč и получали 2-3 заявки. Сейчас тратим столько же, но получаем 25-30 качественных лидов. Изменили весь подход к рекламе.',
      name: 'Дмитрий Соколов',
      business: 'Строительная компания "ДомСтрой"',
      metric: '10x больше лидов',
      rating: 5,
      image: '👨‍💼',
    },
    {
      quote:
        'Первый месяц был убыточным, честно говоря, я переживал. Но команда предупреждала об этом. К третьему месяцу ROAS вырос до 4.2. Сейчас реклама - наш главный канал продаж.',
      name: 'Анна Петрова',
      business: 'Интернет-магазин "Модный гардероб"',
      metric: 'ROAS 4.2x',
      rating: 5,
      image: '👩',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-off-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Что говорят клиенты
          </h2>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            Реальные результаты от реальных бизнесов в Праге
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-white hover:shadow-xl transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-coral w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Client Info */}
              <div className="flex items-start gap-3 border-t border-gray-200 pt-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-navy">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray mb-2">
                    {testimonial.business}
                  </div>
                  <div className="inline-block bg-success-green/10 text-success-green text-xs font-bold px-3 py-1 rounded-full">
                    {testimonial.metric}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="bg-gradient-to-r from-navy to-[#1a3354] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-gold mb-2 font-mono">
                50+
              </div>
              <div className="text-xl text-gray-200">
                Реализованных проектов
              </div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-gold mb-2 font-mono">
                3.5x
              </div>
              <div className="text-xl text-gray-200">
                Средний рост конверсий
              </div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-gold mb-2 font-mono">
                15+
              </div>
              <div className="text-xl text-gray-200">
                Отраслей
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
