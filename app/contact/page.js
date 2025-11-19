import ContactFormComponent from '../components/forms/ContactFormComponent';
import { Card } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Контакты - HaloAgency | Свяжитесь с нами',
  description: 'Свяжитесь с HaloAgency для бесплатной консультации по онлайн-рекламе, разработке сайтов и аналитике в Праге.',
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-coral" />,
      title: 'Телефон',
      content: '+420 123 456 789',
      link: 'tel:+420123456789',
    },
    {
      icon: <Mail className="w-6 h-6 text-coral" />,
      title: 'Email',
      content: 'info@haloagency.cz',
      link: 'mailto:info@haloagency.cz',
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-coral" />,
      title: 'WhatsApp',
      content: 'Написать в WhatsApp',
      link: 'https://wa.me/420123456789',
    },
    {
      icon: <MapPin className="w-6 h-6 text-coral" />,
      title: 'Адрес',
      content: 'Прага, Чешская Республика',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-[#1a3354] to-[#162840] py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Свяжитесь с нами
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Бесплатная консультация + аудит вашей текущей ситуации
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-3xl font-bold text-navy mb-4">
                  Заполните форму
                </h2>
                <p className="text-gray mb-8">
                  Мы ответим в течение 24 часов
                </p>
                <ContactFormComponent />
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 bg-off-white">
                <h3 className="text-xl font-bold text-navy mb-4">
                  Контактная информация
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1">{item.icon}</div>
                      <div>
                        <div className="font-semibold text-navy text-sm mb-1">
                          {item.title}
                        </div>
                        {item.link ? (
                          <a
                            href={item.link}
                            target={item.link.startsWith('http') ? '_blank' : undefined}
                            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-gray hover:text-coral transition"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <div className="text-gray">{item.content}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-navy text-white">
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-6 h-6 text-gold" />
                  <div>
                    <div className="font-semibold mb-1">Часы работы</div>
                    <div className="text-gray-300 text-sm">
                      Пн-Пт: 9:00 - 18:00
                      <br />
                      Сб-Вс: По договорённости
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gold/10 border-2 border-gold">
                <h3 className="text-lg font-bold text-navy mb-3">
                  Что вы получите:
                </h3>
                <ul className="space-y-2 text-gray text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-success-green mt-0.5">✓</span>
                    <span>Аудит текущей ситуации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success-green mt-0.5">✓</span>
                    <span>Честная оценка возможностей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success-green mt-0.5">✓</span>
                    <span>Конкретный план действий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success-green mt-0.5">✓</span>
                    <span>Ответы на все вопросы</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-off-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
            Частые вопросы
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-navy mb-2">
                Сколько стоит консультация?
              </h3>
              <p className="text-gray">
                Первая консультация абсолютно бесплатная. Никаких скрытых платежей.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-navy mb-2">
                Как быстро вы ответите?
              </h3>
              <p className="text-gray">
                Мы отвечаем на все заявки в течение 24 часов. Обычно быстрее.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-navy mb-2">
                Работаете ли вы удалённо?
              </h3>
              <p className="text-gray">
                Да, мы работаем как очно в Праге, так и удалённо со всей Чехией и соседними странами.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
