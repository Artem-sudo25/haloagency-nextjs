import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* О нас */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">О нас</h3>
            <p className="text-gray-300 mb-4">
              HaloAgency - агентство онлайн-рекламы и веб-разработки в Праге.
              Специализируемся на измеримых результатах, а не на пустых обещаниях.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-coral transition">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-coral transition">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-coral transition">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/web-development" className="text-gray-300 hover:text-coral transition">
                  Разработка сайтов
                </Link>
              </li>
              <li>
                <Link href="/tracking" className="text-gray-300 hover:text-coral transition">
                  Аналитика и трекинг
                </Link>
              </li>
              <li>
                <Link href="/online-advertising" className="text-gray-300 hover:text-coral transition">
                  Онлайн-реклама
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-300 hover:text-coral transition">
                  Комплексные решения
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Контакты</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Прага, Чешская Республика</li>
              <li>
                <a href="mailto:info@haloagency.cz" className="hover:text-coral transition">
                  info@haloagency.cz
                </a>
              </li>
              <li>
                <a href="tel:+420123456789" className="hover:text-coral transition">
                  +420 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} HaloAgency. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-coral transition">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-coral transition">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
