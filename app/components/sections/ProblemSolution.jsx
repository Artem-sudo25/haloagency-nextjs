import { Card } from '@/components/ui/card';
import { ArrowRight, Globe, TrendingUp, Package } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    {
      icon: <Globe className="w-12 h-12 text-navy" />,
      problem: 'У меня есть сайт, но нет новых клиентов',
      solution: 'Нужна реклама',
      color: 'coral',
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-navy" />,
      problem: 'Я тратил на рекламу, но ничего не произошло',
      solution: 'Нужна аналитика',
      color: 'gold',
    },
    {
      icon: <Package className="w-12 h-12 text-navy" />,
      problem: 'У меня нет сайта, хочу начать рекламу',
      solution: 'Нужно всё',
      color: 'growth-blue',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Правильный сайт',
      description: 'С фокусом на конверсии',
    },
    {
      number: '2',
      title: 'Точная аналитика',
      description: 'Измеряем каждое действие',
    },
    {
      number: '3',
      title: 'Реклама на данных',
      description: 'Не на догадках',
    },
  ];

  return (
    <section id="problems" className="py-20 bg-off-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Знакомо?
          </h2>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            Эти проблемы встречаются у каждого второго малого бизнеса
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((item, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow bg-white">
              <div className="mb-6">{item.icon}</div>
              <p className="text-lg text-gray mb-4 min-h-[60px]">
                "{item.problem}"
              </p>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-coral" />
                <span className="text-coral font-semibold">{item.solution}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Solution */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy mb-4">
              Решение: Комплексный подход
            </h3>
            <p className="text-xl text-gray">
              Невозможно запускать прибыльную рекламу без правильной инфраструктуры
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold text-navy mb-2">{step.title}</h4>
                <p className="text-gray">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full">
                    <ArrowRight className="w-6 h-6 text-coral absolute right-[-2rem]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gold/10 border-2 border-gold rounded-lg px-8 py-4">
              <p className="text-2xl font-bold text-navy">
                = Предсказуемые, прибыльные результаты
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
