'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { trackEvent } from '@/app/components/GoogleTagManager';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Некорректный email адрес'),
  phone: z.string().min(9, 'Введите корректный номер телефона'),
  interest: z.string().min(1, 'Выберите интересующую услугу'),
  message: z.string().optional(),
});

export default function ContactFormComponent() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Send to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Ошибка отправки формы');
      }

      // Track successful submission in GTM
      trackEvent('form_submit', {
        form_type: 'contact',
        interest: data.interest,
      });

      // Show success message
      setIsSuccess(true);
      reset();

      // Redirect to thank you page after 2 seconds
      setTimeout(() => {
        router.push('/thank-you');
      }, 2000);
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err.message || 'Произошла ошибка. Пожалуйста, попробуйте позже.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-red-900 mb-1">Ошибка</h4>
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        </div>
      )}

      {isSuccess ? (
        <div className="bg-success-green/10 border-2 border-success-green rounded-lg p-8 text-center">
          <CheckCircle2 className="w-16 h-16 text-success-green mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-navy mb-2">
            Спасибо за обращение!
          </h3>
          <p className="text-gray mb-4">
            Мы получили ваше сообщение и свяжемся с вами в течение 24 часов.
          </p>
          <p className="text-sm text-gray">
            Перенаправление...
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <Label htmlFor="name" className="text-navy font-semibold">
              Имя *
            </Label>
            <Input
              id="name"
              {...register('name')}
              placeholder="Ваше имя"
              className="mt-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-navy font-semibold">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="your@email.com"
              className="mt-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone" className="text-navy font-semibold">
              Телефон *
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register('phone')}
              placeholder="+420 123 456 789"
              className="mt-2"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Interest */}
          <div>
            <Label htmlFor="interest" className="text-navy font-semibold">
              Что вас интересует? *
            </Label>
            <Select onValueChange={(value) => setValue('interest', value)}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Выберите услугу" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="website">Разработка сайта</SelectItem>
                <SelectItem value="advertising">Онлайн-реклама</SelectItem>
                <SelectItem value="analytics">Аналитика</SelectItem>
                <SelectItem value="package">Комплексное решение</SelectItem>
                <SelectItem value="other">Другое</SelectItem>
              </SelectContent>
            </Select>
            {errors.interest && (
              <p className="text-red-500 text-sm mt-1">
                {errors.interest.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" className="text-navy font-semibold">
              Сообщение (необязательно)
            </Label>
            <Textarea
              id="message"
              {...register('message')}
              placeholder="Расскажите о вашем проекте..."
              rows={5}
              className="mt-2"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-coral hover:bg-[#FF5252] text-white font-bold py-6"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Отправка...
              </>
            ) : (
              'Отправить заявку'
            )}
          </Button>

          <p className="text-sm text-gray text-center">
            Нажимая кнопку, вы соглашаетесь с{' '}
            <a href="/privacy-policy" className="text-navy hover:text-coral underline">
              политикой конфиденциальности
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
