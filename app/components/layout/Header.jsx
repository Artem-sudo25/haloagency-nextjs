'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Главная' },
    { href: '/web-development', label: 'Разработка сайтов' },
    { href: '/online-advertising', label: 'Онлайн-реклама' },
    { href: '/tracking', label: 'Аналитика' },
    { href: '/contact', label: 'Контакты' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-light-gray shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-navy hover:text-coral transition">
            HaloAgency
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray hover:text-navy transition font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-coral text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#FF5252] transition"
            >
              Получить консультацию
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-navy p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray hover:text-navy transition font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-coral text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF5252] transition text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Получить консультацию
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
