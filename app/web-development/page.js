'use client';

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
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function WebDevelopmentPage() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: philosophyRef, inView: philosophyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: industryRef, inView: industryInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: techRef, inView: techInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: pricingRef, inView: pricingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-[#1a3354] to-[#162840] py-20">
        <div className="max-w-6xl mx-auto px-4 text-center" ref={heroRef}>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Сайты, которые продают.{' '}
            <span className="text-coral">Не просто выглядят красиво.</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ориентированы на конверсии, с аналитикой и автоматизацией для вашего
            конкретного бизнеса
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-coral hover:bg-[#FF5252] text-white px-12 py-6 text-lg hover:scale-110 transition-all"
              >
                Получить консультацию
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4" ref={philosophyRef}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-navy via-coral to-gold bg-clip-text text-transparent">
              Почему "красивый сайт" недостаточно
            </h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              Мы строим сайты, которые приносят результаты
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={philosophyInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants}>
              <Card className="p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 h-full">
              <Target className="w-16 h-16 text-coral mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">
                Ориентированный на конверсии дизайн
              </h3>
              <p className="text-gray">
                Каждый элемент спроектирован для того, чтобы посетитель стал
                клиентом
              </p>
            </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 h-full">
              <BarChart3 className="w-16 h-16 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">
                Построен для аналитики
              </h3>
              <p className="text-gray">
                GA4, GTM, отслеживание конверсий - знаем, что работает, что нет
              </p>
            </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 h-full">
              <Zap className="w-16 h-16 text-success-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">
                Специфические функции по отраслям
              </h3>
              <p className="text-gray">
                Не общий шаблон. Решения для вашей конкретной индустрии
              </p>
            </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-off-white">
        <div className="max-w-6xl mx-auto px-4" ref={industryRef}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={industryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-navy via-coral to-gold bg-clip-text text-transparent">
              Решения для вашего бизнеса
            </h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              Мы знаем специфику разных отраслей
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={industryInView ? 'visible' : 'hidden'}
          >
            {industries.map((industry, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 h-full">
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4" ref={techRef}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={techInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-navy via-coral to-gold bg-clip-text text-transparent">
              Современные технологии
            </h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              Используем проверенные инструменты
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={techInView ? 'visible' : 'hidden'}
          >
            {technologies.map((tech, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 h-full">
                  <Code className="w-12 h-12 text-navy mx-auto mb-3" />
                  <h3 className="font-bold text-navy mb-2">{tech.name}</h3>
                  <p className="text-gray text-sm">{tech.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-off-white">
        <div className="max-w-6xl mx-auto px-4" ref={pricingRef}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-navy via-coral to-gold bg-clip-text text-transparent">Цены</h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              Прозрачная стоимость без скрытых платежей
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={pricingInView ? 'visible' : 'hidden'}
          >
            {pricingTiers.map((tier, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`p-8 hover:scale-105 transition-transform duration-300 h-full ${
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-navy to-[#1a3354]">
        <motion.div
          className="max-w-4xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы получить сайт, который приносит клиентов?
          </h2>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-coral hover:bg-[#FF5252] text-white px-12 py-6 text-lg hover:scale-110 transition-all"
            >
              Обсудить проект
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
