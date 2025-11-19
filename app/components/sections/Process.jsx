'use client';

import { Card } from '@/components/ui/card';
import { Calendar, Settings, Rocket, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Process() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const steps = [
    {
      number: '1',
      icon: <Calendar className="w-10 h-10 text-white" />,
      title: 'Бесплатная консультация',
      description:
        'Обсуждаем ваш бизнес, цели, текущую ситуацию. Определяем, можем ли мы помочь.',
      timeline: '30 минут',
      color: 'bg-navy',
    },
    {
      number: '2',
      icon: <Settings className="w-10 h-10 text-white" />,
      title: 'Стратегия и настройка',
      description:
        'Разрабатываем стратегию, создаём сайт (если нужно), настраиваем аналитику и рекламу.',
      timeline: '1-2 недели',
      color: 'bg-coral',
    },
    {
      number: '3',
      icon: <Rocket className="w-10 h-10 text-white" />,
      title: 'Запуск кампаний',
      description:
        'Запускаем рекламные кампании, начинаем сбор данных. Это фаза тестирования.',
      timeline: 'Неделя 3',
      color: 'bg-gold',
    },
    {
      number: '4',
      icon: <TrendingUp className="w-10 h-10 text-white" />,
      title: 'Оптимизация и масштабирование',
      description:
        'Анализируем результаты, оптимизируем кампании, масштабируем то, что работает.',
      timeline: 'Постоянно',
      color: 'bg-success-green',
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
    <section id="process" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-navy via-coral to-gold bg-clip-text text-transparent">
            Как мы работаем
          </h2>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            Прозрачный процесс от консультации до результатов
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 relative h-full">
              {/* Number Badge */}
              <div
                className={`absolute -top-4 -left-4 w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg z-10`}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                className={`${step.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 mt-2`}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-navy mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray mb-4 leading-relaxed">
                {step.description}
              </p>

              {/* Timeline */}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray" />
                <span className="text-sm font-semibold text-gray">
                  {step.timeline}
                </span>
              </div>
            </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 bg-off-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-navy mb-2">
                Прозрачность
              </div>
              <p className="text-gray">
                Полный доступ к аналитике и рекламным кабинетам
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-navy mb-2">
                Честность
              </div>
              <p className="text-gray">
                Скажем, если что-то не работает или не подходит
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-navy mb-2">
                Результаты
              </div>
              <p className="text-gray">
                Фокус на бизнес-метриках, а не на показателях тщеславия
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
