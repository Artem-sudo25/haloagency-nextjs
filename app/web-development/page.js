import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Check,
  Zap,
  Target,
  BarChart3,
  Clock,
  Code,
  Palette,
  Smartphone,
} from 'lucide-react';

export const metadata = {
  title: 'Разработка сайтов Прага - HaloAgency',
  description:
    'Современные сайты для вашего бизнеса. WordPress, Next.js. Ориентированы на конверсии, с аналитикой и автоматизацией.',
};

export default function WebDevelopmentPage() {
  const industries = [
    {
      icon: '💇',
      name: 'Салоны красоты',
      pain: 'Постоянные звонки для записи. Пропущенные клиенты.',
      features: [
        'Онлайн-бронирование 24/7',
        'SMS-подтверждения',
        'Галерея работ',
        'Интеграция с Instagram',
      ],
      automation: 'Запись → CRM → Напоминание за день → Просьба о отзыве',
      price: '20,000 - 30,000 Kč',
    },
    {
      icon: '🏗️',
      name: 'Строительство и ремонт',
      pain: 'Клиенты хотят сразу узнать примерную цену.',
      features: [
        'Калькулятор стоимости',
        'Галерея проектов',
        'Lead-магнит (чек-лист)',
        'Форма с вопросами',
      ],
      automation: 'Заявка → Email + CRM → Последовательность писем',
      price: '25,000 - 35,000 Kč',
    },
    {
      icon: '🍽️',
      name: 'Рестораны и кафе',
      pain: 'Постоянные звонки для бронирования столиков.',
      features: [
        'Бронирование столиков',
        'Онлайн-меню',
        'Анонсы событий',
        'Галерея блюд',
      ],
      automation: 'Бронь → Email-подтверждение → Напоминание',
      price: '18,000 - 28,000 Kč',
    },
    {
      icon: '🛒',
      name: 'E-commerce',
      pain: 'Покупатели добавляют в корзину, но не покупают.',
      features: [
        'Полноценный интернет-магазин',
        'Product feeds',
        'Восстановление корзины',
        'Upsells и cross-sells',
      ],
      automation: 'Брошенная корзина → Email через 1 час + 24 часа',
      price: '40,000 - 80,000 Kč',
    },
    {
      icon: '💼',
      name: 'Профессиональные услуги',
      pain: 'Нужно выглядеть профессионально и внушать доверие.',
      features: [
        'Профессиональный дизайн',
        'Бронирование консультаций',
        'Портфолио/кейсы',
        'Lead-магниты',
      ],
      automation: 'Бронирование → Google Calendar → Email',
      price: '22,000 - 32,000 Kč',
    },
    {
      icon: '🏪',
      name: 'Местная розница',
      pain: 'Клиенты хотят знать, есть ли товар в наличии.',
      features: [
        'Локатор магазинов',
        'Click-and-collect',
        'Каталог товаров',
        'Акции и промо',
      ],
      automation: 'Заказ → Уведомление в магазин → SMS клиенту',
      price: '18,000 - 28,000 Kč',
    },
  ];

  const technologies = [
    { name: 'Next.js', description: 'Быстрый, современный, SEO' },
    { name: 'WordPress', description: 'Удобно для вас управлять' },
    { name: 'Tailwind CSS', description: 'Адаптивный дизайн' },
    { name: 'Payload CMS', description: 'Гибкая система управления' },
  ];

  const pricingTiers = [
    {
      name: 'Лендинг',
      price: '10,000 - 15,000 Kč',
      timeline: '1 неделя',
      features: [
        '1 страница',
        'Современный дизайн',
        'Мобильная оптимизация',
        'Базовая SEO',
        'Контактная форма',
      ],
    },
    {
      name: 'Многостраничный сайт',
      price: '20,000 - 35,000 Kč',
      timeline: '2-3 недели',
      features: [
        'До 10 страниц',
        'Индивидуальный дизайн',
        'Полная SEO-оптимизация',
        'Интеграция с CRM',
        'Аналитика (GA4, GTM)',
        'Месяц поддержки',
      ],
      recommended: true,
    },
    {
      name: 'E-commerce',
      price: '40,000 - 80,000 Kč',
      timeline: '4-6 недель',
      features: [
        'Полноценный магазин',
        'Платёжные системы',
        'Product feeds',
        'Abandoned cart recovery',
        'Продвинутая аналитика',
        '3 месяца поддержки',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-[#1a3354] to-[#162840] py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Сайты, которые продают.{' '}
            <span className="text-coral">Не просто выглядят красиво.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Ориентированы на конверсии, с аналитикой и автоматизацией для вашего
            конкретного бизнеса
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-coral hover:bg-[#FF5252] text-white px-12 py-6 text-lg"
            >
              Получить консультацию
            </Button>
          </Link>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Почему "красивый сайт" недостаточно
            </h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              Мы строим сайты, которые приносят результаты
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition">
              <Target className="w-16 h-16 text-coral mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">
                Ориентированный на конверсии дизайн
              </h3>
              <p className="text-gray">
                Каждый элемент спроектирован для того, чтобы посетитель стал
                клиентом
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition">
              <BarChart3 className="w-16 h-16 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">
                Построен для аналитики
              </h3>
              <p className="text-gray">
                GA4, GTM, отслеживание конверсий - знаем, что работает, что нет
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition">
              <Zap className="w-16 h-16 text-success-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">
                Специфические функции по отраслям
              </h3>
              <p className="text-gray">
                Не общий шаблон. Решения для вашей конкретной индустрии
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-off-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Решения для вашего бизнеса
            </h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              Мы знаем специфику разных отраслей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition">
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-bold text-navy mb-3">
                  {industry.name}
                </h3>
                <div className="bg-coral/10 border-l-4 border-coral p-4 mb-6">
                  <p className="text-gray italic">"{industry.pain}"</p>
                </div>

                <h4 className="font-bold text-navy mb-3">Что мы делаем:</h4>
                <ul className="space-y-2 mb-6">
                  {industry.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray">
                      <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gold/10 p-4 rounded-lg mb-4">
                  <h4 className="font-bold text-navy mb-2 text-sm">
                    Автоматизация:
                  </h4>
                  <p className="text-gray text-sm font-mono">
                    {industry.automation}
                  </p>
                </div>

                <div className="text-2xl font-bold text-coral font-mono">
                  {industry.price}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Современные технологии
            </h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              Используем проверенные инструменты
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition">
                <Code className="w-12 h-12 text-navy mx-auto mb-3" />
                <h3 className="font-bold text-navy mb-2">{tech.name}</h3>
                <p className="text-gray text-sm">{tech.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-off-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Цены</h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              Прозрачная стоимость без скрытых платежей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`p-8 ${
                  tier.recommended ? 'border-4 border-coral shadow-2xl' : ''
                }`}
              >
                {tier.recommended && (
                  <div className="bg-coral text-white text-center py-2 px-4 rounded-full text-sm font-bold mb-4 -mt-4">
                    Рекомендуем
                  </div>
                )}
                <h3 className="text-2xl font-bold text-navy mb-2">
                  {tier.name}
                </h3>
                <div className="text-3xl font-bold text-coral font-mono mb-2">
                  {tier.price}
                </div>
                <div className="flex items-center gap-2 text-gray mb-6">
                  <Clock className="w-4 h-4" />
                  <span>{tier.timeline}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray">
                      <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button
                    className={`w-full ${
                      tier.recommended
                        ? 'bg-coral hover:bg-[#FF5252]'
                        : 'bg-navy hover:bg-[#1a3354]'
                    }`}
                  >
                    Заказать
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-navy to-[#1a3354]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы получить сайт, который приносит клиентов?
          </h2>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-coral hover:bg-[#FF5252] text-white px-12 py-6 text-lg"
            >
              Обсудить проект
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
