'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-[#1a3354] to-[#162840] flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full"
      >
        <Card className="p-8 md:p-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <CheckCircle2 className="w-20 h-20 text-success-green mx-auto mb-6" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Спасибо за обращение!
          </h1>

          <p className="text-xl text-gray mb-8">
            Ваша заявка успешно отправлена. Мы свяжемся с вами в течение 24 часов.
          </p>

          <div className="bg-gold/10 border-2 border-gold rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Что дальше?
            </h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <span className="text-success-green text-xl mt-0.5">✓</span>
                <div>
                  <strong className="text-navy">Проверьте почту</strong>
                  <p className="text-gray text-sm">
                    Вы получите письмо с подтверждением получения заявки
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-success-green text-xl mt-0.5">✓</span>
                <div>
                  <strong className="text-navy">Мы изучим ваш запрос</strong>
                  <p className="text-gray text-sm">
                    Подготовим предложение, учитывая специфику вашего бизнеса
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-success-green text-xl mt-0.5">✓</span>
                <div>
                  <strong className="text-navy">Свяжемся с вами</strong>
                  <p className="text-gray text-sm">
                    По телефону или email в течение 24 часов
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-success-green text-xl mt-0.5">✓</span>
                <div>
                  <strong className="text-navy">Бесплатная консультация</strong>
                  <p className="text-gray text-sm">
                    Обсудим ваши цели и предложим оптимальное решение
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-coral hover:bg-[#FF5252] text-white px-8 py-6 text-lg">
                <Home className="w-5 h-5 mr-2" />
                На главную
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-6 text-lg"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Назад к контактам
              </Button>
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray text-sm">
              Срочный вопрос? Позвоните нам:{' '}
              <a
                href="tel:+420123456789"
                className="text-coral hover:text-[#FF5252] font-semibold"
              >
                +420 123 456 789
              </a>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
