import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Eye,
  EyeOff,
  Navigation,
  AlertTriangle,
  Check,
  TrendingUp,
} from 'lucide-react';

export const metadata = {
  title: 'Аналитика и трекинг - HaloAgency | GA4, Server-side Tracking',
  description:
    'Точная аналитика и трекинг для вашего бизнеса. GA4, server-side tracking, attribution. Знайте точно, что работает.',
};

export default function TrackingPage() {
  const problems = [
    {
      icon: <AlertTriangle className="w-12 h-12 text-warning-orange" />,
      scenario: 'Трачу на рекламу, но не знаю, что приносит клиентов',
      description:
        'Google говорит одно, Facebook - другое. Реальные продажи - третье.',
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-warning-orange" />,
      scenario: 'Google говорит 20 конверсий, Meta - 15, реальность - 8',
      description:
        'Платформы приписывают себе успех. Вы платите за фантомные результаты.',
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-warning-orange" />,
      scenario: 'Кто-то позвонил, но не знаю откуда пришёл',
      description:
        'Лиды приходят, но откуда? Google? Facebook? Сарафанное радио?',
    },
  ];

  const trackingLevels = [
    {
      level: 'Базовая',
      price: '5,000 Kč',
      description: 'Минимум для старта',
      features: [
        'Google Analytics 4',
        'Google Tag Manager',
        'Отслеживание форм',
        'Источники трафика',
        'Базовые события',
      ],
    },
    {
      level: 'Продвинутая',
      price: '12,000 Kč',
      description: 'Рекомендуем',
      features: [
        'Всё из Базовой +',
        'Server-side tracking',
        'Conversion API (CAPI)',
        'Enhanced conversions',
        'User journey mapping',
        'Call tracking',
      ],
      recommended: true,
    },
    {
      level: 'Pro',
      price: 'По запросу',
      description: 'Для серьёзных кампаний',
      features: [
        'Всё из Продвинутой +',
        'Data warehouse',
        'Custom dashboards',
        'Attribution моделирование',
        'CLV tracking',
        'Product analytics',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-[#1a3354] to-[#162840] py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Без измерения нет результатов.{' '}
            <span className="text-coral">Только догадки.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Точная аналитика = знаете что работает = эффективная реклама = больше
            прибыли
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-coral hover:bg-[#FF5252] text-white px-12 py-6 text-lg"
            >
              Настроить аналитику
            </Button>
          </Link>
        </div>
      </section>

      {/* Problem Scenarios */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Знаете это?</h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              Эти проблемы встречаются у 80% бизнесов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition border-l-4 border-warning-orange"
              >
                <div className="mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  "{problem.scenario}"
                </h3>
                <p className="text-gray">{problem.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tracking Matters - Analogy */}
      <section className="py-20 bg-off-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Почему аналитика критична
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bad Tracking */}
            <Card className="p-8 bg-red-50 border-2 border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <EyeOff className="w-12 h-12 text-red-500" />
                <h3 className="text-2xl font-bold text-navy">
                  Реклама без аналитики
                </h3>
              </div>
              <div className="space-y-4 text-gray">
                <p className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Двигаетесь, но не знаете куда</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Врезаетесь в стены (тратите деньги)</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Не знаете что работает</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Принимаете решения вслепую</span>
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-red-300">
                <p className="font-bold text-red-600 text-center">
                  = Вождение вслепую 🚗💥
                </p>
              </div>
            </Card>

            {/* Good Tracking */}
            <Card className="p-8 bg-green-50 border-2 border-success-green">
              <div className="flex items-center gap-3 mb-6">
                <Navigation className="w-12 h-12 text-success-green" />
                <h3 className="text-2xl font-bold text-navy">
                  Реклама с аналитикой
                </h3>
              </div>
              <div className="space-y-4 text-gray">
                <p className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Видите где вы сейчас</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Знаете какие маршруты работают</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Корректируете в реальном времени</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Достигаете цели эффективно</span>
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-success-green">
                <p className="font-bold text-success-green text-center">
                  = GPS-навигация 🗺️✓
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Track - 3 Levels */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Что мы отслеживаем
            </h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              3 уровня аналитики для разных потребностей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trackingLevels.map((level, index) => (
              <Card
                key={index}
                className={`p-8 ${
                  level.recommended ? 'border-4 border-coral shadow-2xl' : ''
                }`}
              >
                {level.recommended && (
                  <div className="bg-coral text-white text-center py-2 px-4 rounded-full text-sm font-bold mb-4 -mt-4">
                    Рекомендуем
                  </div>
                )}
                <h3 className="text-2xl font-bold text-navy mb-2">
                  {level.level}
                </h3>
                <div className="text-3xl font-bold text-coral font-mono mb-2">
                  {level.price}
                </div>
                <p className="text-gray mb-6">{level.description}</p>

                <ul className="space-y-3">
                  {level.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray">
                      <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Attribution Problem */}
      <section className="py-20 bg-off-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Почему рекламные платформы вас обманывают
            </h2>
            <p className="text-xl text-gray max-w-3xl mx-auto">
              Это не злой умысел. Просто каждая платформа видит только себя.
            </p>
          </div>

          <Card className="p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-navy mb-6 text-center">
              Реальный путь клиента:
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg border-2 border-gray-200">
                <div className="w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <div className="font-bold text-navy">Google Search</div>
                  <div className="text-gray text-sm">
                    Кликнул на рекламу, посмотрел сайт, ушёл
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg border-2 border-gray-200">
                <div className="w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <div className="font-bold text-navy">Facebook Ad</div>
                  <div className="text-gray text-sm">
                    Увидел ретаргетинг через день, снова посмотрел
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg border-2 border-gray-200">
                <div className="w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <div className="font-bold text-navy">Direct</div>
                  <div className="text-gray text-sm">
                    Через неделю вспомнил, вбил название в браузере, купил
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-warning-orange/10 border-l-4 border-warning-orange p-6 mb-6">
              <h4 className="font-bold text-navy mb-3">Что говорят платформы:</h4>
              <ul className="space-y-2 text-gray">
                <li>• Google: "Мы принесли эту продажу!"</li>
                <li>• Facebook: "Нет, мы принесли эту продажу!"</li>
                <li>• Reality: Они оба помогли, но Direct получит кредит</li>
              </ul>
            </div>

            <div className="bg-success-green/10 border-l-4 border-success-green p-6">
              <h4 className="font-bold text-navy mb-3">
                Решение: Server-side tracking
              </h4>
              <p className="text-gray">
                Отслеживаем весь путь клиента. Понимаем реальный вклад каждого
                канала. Принимаем правильные решения.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-navy to-[#1a3354]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы видеть реальную картину?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Настроим правильную аналитику за 1-2 недели
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
    </div>
  );
}
