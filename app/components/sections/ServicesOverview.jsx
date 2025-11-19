'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, BarChart3, Megaphone, ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ServicesOverview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Globe className="w-16 h-16 text-navy" />,
      title: 'Разработка сайтов',
      description: 'Не просто красивые, а функциональные - с формами, аналитикой и автоматизацией',
      features: [
        'WordPress / Next.js',
        'Мобильная оптимизация',
        'SEO-готовность',
        'Интеграция с CRM',
      ],
      price: 'От 15,000 Kč',
      link: '/web-development',
      color: 'navy',
    },
    {
      icon: <BarChart3 className="w-16 h-16 text-coral" />,
      title: 'Аналитика',
      description: 'GA4, server-side трекинг, конверсии - мы знаем точно, что работает',
      features: [
        'Google Analytics 4',
        'Server-side tracking',
        'Attribution моделирование',
        'Дашборды и отчёты',
      ],
      price: 'От 5,000 Kč',
      link: '/tracking',
      color: 'coral',
    },
    {
      icon: <Megaphone className="w-16 h-16 text-gold" />,
      title: 'Онлайн-реклама',
      description: 'Google, Meta, TikTok - кампании на основе данных, не догадок',
      features: [
        'Google Ads',
        'Meta Ads (FB, IG)',
        'TikTok Ads',
        'Прозрачная отчётность',
      ],
      price: 'От 6,000 Kč/мес',
      link: '/online-advertising',
      color: 'gold',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        {/* Title with Gradient */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-navy via-coral to-gold bg-clip-text text-transparent">
            Наши услуги
          </h2>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            Комплексные решения для вашего онлайн-присутствия
          </p>
        </motion.div>

        {/* Service Cards with Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-8 h-full hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 hover:border-navy cursor-pointer">
                {/* Icon */}
                <div className="mb-6">{service.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-navy mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray">
                      <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-2xl font-bold text-coral mb-6 font-mono">
                  {service.price}
                </div>

                {/* CTA */}
                <Link href={service.link}>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all group"
                  >
                    Подробнее
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-navy to-[#1a3354] rounded-2xl p-8 text-center text-white hover:scale-105 transition-transform duration-300">
            <p className="text-xl mb-4">
              <span className="font-bold text-gold">Рекомендуем комплексный подход</span> для лучших результатов
            </p>
            <Link href="/packages">
              <Button
                size="lg"
                className="bg-coral hover:bg-[#FF5252] text-white px-8 py-6 text-lg font-semibold hover:scale-105 transition-all"
              >
                Посмотреть комплексные решения
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
