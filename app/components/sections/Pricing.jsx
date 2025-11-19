import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      name: 'Комплект "Старт"',
      recommended: true,
      description: 'Для тех, кто начинает с нуля',
      setup: '45,000 Kč',
      monthly: '8,000 Kč/месяц',
      features: [
        'Разработка сайта',
        'Настройка аналитики (GA4, GTM)',
        'Настройка рекламы',
        'Первый месяц управления',
        'Обучение работе с системой',
        'Техподдержка 3 месяца',
      ],
      cta: 'Начать с нуля',
      link: '/contact?package=start',
    },
    {
      name: 'Только реклама',
      recommended: false,
      description: 'Для существующих сайтов с аналитикой',
      setup: null,
      monthly: '6,000-10,000 Kč/месяц',
      features: [
        'Аудит текущей ситуации',
        'Настройка кампаний',
        'Ежемесячная оптимизация',
        'Прозрачная отчётность',
        'Стратегические рекомендации',
      ],
      note: 'Зависит от бюджета на рекламу',
      cta: 'Обсудить проект',
      link: '/contact?package=ads-only',
    },
  ];

  const soloServices = [
    {
      name: 'Только сайт',
      price: 'От 15,000 Kč',
      description: 'Лендинг или многостраничный сайт',
    },
    {
      name: 'Только аналитика',
      price: 'От 5,000 Kč',
      description: 'Настройка GA4, GTM, конверсий',
    },
    {
      name: 'Настройка рекламы',
      price: 'От 8,000 Kč',
      description: 'Одноразовая настройка кампаний',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-off-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Комплексные решения или отдельные услуги
          </h2>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            Выберите то, что подходит вашему бизнесу
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                pkg.recommended
                  ? 'border-4 border-coral shadow-2xl'
                  : 'border-2 border-gray-200'
              }`}
            >
              {/* Recommended Badge */}
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-coral text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4 fill-white" />
                    Рекомендуется
                  </div>
                </div>
              )}

              {/* Package Name */}
              <h3 className="text-2xl font-bold text-navy mb-2 mt-4">
                {pkg.name}
              </h3>

              {/* Description */}
              <p className="text-gray mb-6">{pkg.description}</p>

              {/* Pricing */}
              <div className="mb-6 border-b border-gray-200 pb-6">
                {pkg.setup && (
                  <div className="mb-2">
                    <span className="text-gray">Настройка: </span>
                    <span className="text-3xl font-bold text-navy font-mono">
                      {pkg.setup}
                    </span>
                  </div>
                )}
                <div>
                  {pkg.setup && <span className="text-gray">Затем: </span>}
                  <span className="text-3xl font-bold text-coral font-mono">
                    {pkg.monthly}
                  </span>
                </div>
                {pkg.note && (
                  <p className="text-sm text-gray mt-2 italic">{pkg.note}</p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href={pkg.link}>
                <Button
                  size="lg"
                  className={`w-full ${
                    pkg.recommended
                      ? 'bg-coral hover:bg-[#FF5252] text-white'
                      : 'bg-navy hover:bg-[#1a3354] text-white'
                  }`}
                >
                  {pkg.cta}
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* Solo Services */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">
            Отдельные услуги
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {soloServices.map((service, index) => (
              <div
                key={index}
                className="text-center p-6 border-2 border-gray-200 rounded-lg hover:border-navy transition"
              >
                <h4 className="text-xl font-bold text-navy mb-2">
                  {service.name}
                </h4>
                <div className="text-2xl font-bold text-coral font-mono mb-2">
                  {service.price}
                </div>
                <p className="text-gray text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray mb-4">
              <span className="font-semibold text-navy">
                Примечание:
              </span>{' '}
              Рекомендуем комплексный подход для лучших результатов
            </p>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white"
              >
                Обсудить индивидуальное решение
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
