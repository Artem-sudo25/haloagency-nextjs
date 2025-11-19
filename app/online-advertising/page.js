import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  TrendingUp,
  AlertTriangle,
  Check,
  X,
  BarChart3,
  Target,
  Users,
  DollarSign,
} from 'lucide-react';

export const metadata = {
  title: 'Онлайн-реклама Прага - Google Ads, Meta Ads - HaloAgency',
  description:
    'Онлайн-реклама на основе данных. Google Ads, Meta (Facebook, Instagram), TikTok. Измеримый ROI и реалистичные ожидания.',
};

export default function OnlineAdvertisingPage() {
  const platforms = [
    {
      name: 'Google Ads',
      icon: '🔍',
      bestFor: 'Поисковый интент, локальный бизнес, B2B, e-commerce',
      campaigns: 'Search, Performance Max, Shopping',
      results: 'Ниже объём, выше качество',
    },
    {
      name: 'Meta Ads',
      icon: '📱',
      bestFor: 'Визуальные продукты, B2C, ретаргетинг',
      campaigns: 'Feed, Stories/Reels, Lead gen',
      results: 'Выше объём, нужна квалификация',
    },
    {
      name: 'TikTok Ads',
      icon: '🎵',
      bestFor: 'Gen Z, трендовые продукты, узнаваемость бренда',
      campaigns: 'In-feed, Spark ads, Lead gen',
      results: 'Экспериментально, специфические ниши',
    },
  ];

  const monthlyProcess = [
    {
      month: 'Месяц 1',
      title: 'Тестирование',
      reality: 'Break-even или небольшой убыток',
      cpl: 'Выше целевого',
      roas: '1.0-1.5x (ещё не прибыльно)',
      note: 'НЕ паникуйте если не прибыльно на первой неделе. Алгоритмам нужны данные.',
      color: 'bg-warning-orange',
    },
    {
      month: 'Месяц 2-3',
      title: 'Оптимизация',
      reality: 'Метрики улучшаются',
      cpl: 'Приближаемся к цели',
      roas: '2.0-3.0x (становится прибыльным)',
      note: 'Видим что работает, отключаем что не работает.',
      color: 'bg-gold',
    },
    {
      month: 'Месяц 4+',
      title: 'Масштабирование',
      reality: 'Предсказуемый, прибыльный рост',
      cpl: 'Стабильно на цели или лучше',
      roas: '3.0-5.0x (зависит от отрасли)',
      note: 'Увеличиваем бюджеты, расширяем аудитории.',
      color: 'bg-success-green',
    },
  ];

  const caseStudies = [
    {
      business: 'Салон красоты (Прага)',
      budget: '12,000 Kč/месяц',
      timeline: '4 месяца',
      results: {
        leads: '35 лидов',
        cpl: '342 Kč/лид',
        roi: '7.3x',
      },
      story:
        'Месяц 1: 18 лидов @ 666 Kč. Месяц 4: 35 лидов @ 342 Kč. Сейчас основной канал привлечения.',
    },
    {
      business: 'Строительная компания',
      budget: '25,000 Kč/месяц',
      timeline: '3 месяца',
      results: {
        leads: '13 квалифицированных лидов',
        cpl: '1,442 Kč/лид',
        roi: 'Средний проект 50,000 Kč',
      },
      story:
        'Ключевое открытие: квалификация лидов критична. Меньше объём, но выше качество = больше прибыль.',
    },
    {
      business: 'E-commerce (Мода)',
      budget: '40,000 Kč/месяц',
      timeline: '4 месяца',
      results: {
        roas: '3.9x',
        revenue: '156,000 Kč/месяц',
        growth: '+180% за 4 месяца',
      },
      story:
        'Месяц 1: убыток 8,000 Kč. Месяц 3: прибыльно. Сейчас масштабируем.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-[#1a3354] to-[#162840] py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Реклама на основе данных.{' '}
            <span className="text-coral">Не на надежде.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Google, Meta, TikTok - кампании с измеримым ROI и прозрачными
            результатами
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-coral hover:bg-[#FF5252] text-white px-12 py-6 text-lg"
            >
              Обсудить рекламу
            </Button>
          </Link>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Как мы работаем с рекламой
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-xl transition">
              <BarChart3 className="w-12 h-12 text-coral mx-auto mb-4" />
              <h3 className="font-bold text-navy mb-2">Данные в первую очередь</h3>
              <p className="text-gray text-sm">
                Не догадки. Решения на основе метрик.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition">
              <Target className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-bold text-navy mb-2">
                Инфраструктура необходима
              </h3>
              <p className="text-gray text-sm">
                Сначала фундамент (сайт + аналитика), потом реклама.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition">
              <Users className="w-12 h-12 text-success-green mx-auto mb-4" />
              <h3 className="font-bold text-navy mb-2">
                Реалистичные ожидания
              </h3>
              <p className="text-gray text-sm">
                Не "утроим выручку за 2 недели". Честная картина.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition">
              <TrendingUp className="w-12 h-12 text-navy mx-auto mb-4" />
              <h3 className="font-bold text-navy mb-2">Прозрачная отчётность</h3>
              <p className="text-gray text-sm">
                Бизнес-метрики, не показатели тщеславия.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-off-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Платформы, с которыми работаем
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition">
                <div className="text-5xl mb-4">{platform.icon}</div>
                <h3 className="text-2xl font-bold text-navy mb-4">
                  {platform.name}
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold text-gray mb-1">
                      Лучше для:
                    </div>
                    <p className="text-gray">{platform.bestFor}</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray mb-1">
                      Что запускаем:
                    </div>
                    <p className="text-gray">{platform.campaigns}</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray mb-1">
                      Типичные результаты:
                    </div>
                    <p className="text-gray">{platform.results}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray">
              <span className="font-semibold text-navy">Примечание:</span>{' '}
              Рекомендуем мультиплатформенный подход
            </p>
          </div>
        </div>
      </section>

      {/* REALISTIC EXPECTATIONS - CRITICAL SECTION */}
      <section className="py-20 bg-white border-t-8 border-coral">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-coral text-white px-6 py-2 rounded-full font-bold mb-4">
              ⚠️ КРИТИЧЕСКИ ВАЖНО
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Что ожидать - честно
            </h2>
            <p className="text-xl text-gray max-w-3xl mx-auto">
              Большинство агентств обещают мгновенные результаты. Мы говорим правду.
            </p>
          </div>

          {/* Month by Month */}
          <div className="space-y-6 mb-12">
            {monthlyProcess.map((phase, index) => (
              <Card key={index} className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className={`${phase.color} w-24 h-24 rounded-lg flex items-center justify-center text-white`}
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold">{phase.month}</div>
                        <div className="text-xs">{phase.title}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy mb-4">
                      {phase.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray mb-1">Реальность:</div>
                        <div className="font-semibold text-navy">
                          {phase.reality}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray mb-1">CPL:</div>
                        <div className="font-semibold text-navy">{phase.cpl}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray mb-1">ROAS:</div>
                        <div className="font-semibold text-navy">{phase.roas}</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-navy">
                      <p className="text-gray">{phase.note}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* What We DON'T Promise vs DO Promise */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-red-50 border-2 border-red-200">
              <h3 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                <X className="w-8 h-8 text-red-500" />
                Что мы НЕ обещаем
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray">
                    "Гарантируем 10x ROI в первый месяц"
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray">
                    "Утроим вашу выручку за 2 недели"
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray">"100% гарантия результата"</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray">
                    "Мгновенные продажи с первого дня"
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-green-50 border-2 border-success-green">
              <h3 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                <Check className="w-8 h-8 text-success-green" />
                Что мы обещаем
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray">
                    Честную оценку ваших возможностей
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray">
                    Прозрачную отчётность по бизнес-метрикам
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray">
                    Скажем вовремя, если не работает
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray">
                    Постепенный, устойчивый рост (если всё правильно)
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-off-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Реальные примеры
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition">
                <h3 className="text-xl font-bold text-navy mb-2">
                  {study.business}
                </h3>
                <div className="text-sm text-gray mb-4">
                  Бюджет: {study.budget} • {study.timeline}
                </div>

                <div className="bg-navy text-white p-4 rounded-lg mb-4">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center mb-2 last:mb-0"
                    >
                      <span className="text-gray-300 text-sm capitalize">
                        {key}:
                      </span>
                      <span className="font-bold text-gold">{value}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray text-sm leading-relaxed">{study.story}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Структура цен
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-navy mb-4">
                % от рекламного бюджета
              </h3>
              <div className="text-3xl font-bold text-coral font-mono mb-4">
                15-20%
              </div>
              <p className="text-gray mb-4">Минимум: 6,000 Kč/месяц</p>
              <p className="text-sm text-gray">
                Лучше для больших бюджетов (30,000+ Kč/месяц)
              </p>
            </Card>

            <Card className="p-8 border-2 border-coral">
              <h3 className="text-2xl font-bold text-navy mb-4">
                Фиксированная плата
              </h3>
              <div className="text-3xl font-bold text-coral font-mono mb-4">
                8,000-15,000 Kč
              </div>
              <p className="text-gray mb-4">Зависит от сложности</p>
              <p className="text-sm text-gray">
                Лучше для предсказуемых расходов
              </p>
            </Card>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="p-6 bg-gold/10 border-2 border-gold">
              <h4 className="font-bold text-navy mb-3">Минимальные бюджеты:</h4>
              <ul className="space-y-2 text-gray">
                <li>• Google Ads: 15,000 Kč/месяц</li>
                <li>• Meta Ads: 10,000 Kč/месяц</li>
                <li>• TikTok Ads: 15,000 Kč/месяц</li>
              </ul>
              <p className="text-sm text-gray mt-4 italic">
                Ниже этих бюджетов алгоритмы не успевают обучиться
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-navy to-[#1a3354]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы к честному разговору о рекламе?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Не обещаем чудес. Обещаем прозрачность и результаты.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-coral hover:bg-[#FF5252] text-white px-12 py-6 text-lg"
            >
              Обсудить кампанию
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
