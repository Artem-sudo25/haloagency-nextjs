'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Apply saved consent
      const consentData = JSON.parse(consent);
      applyConsent(consentData);
    }
  }, []);

  const applyConsent = (consent) => {
    // Update GTM consent mode
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: consent.analytics ? 'granted' : 'denied',
        ad_storage: consent.marketing ? 'granted' : 'denied',
        functionality_storage: 'granted', // Always granted for necessary cookies
        personalization_storage: consent.analytics ? 'granted' : 'denied',
        security_storage: 'granted', // Always granted for security
      });
    }
  };

  const saveConsent = (analytics, marketing) => {
    const consent = {
      analytics,
      marketing,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    applyConsent(consent);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveConsent(true, true);
  };

  const acceptNecessary = () => {
    saveConsent(false, false);
  };

  const saveCustom = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const analytics = formData.get('analytics') === 'on';
    const marketing = formData.get('marketing') === 'on';
    saveConsent(analytics, marketing);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" />

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
        <Card className="max-w-5xl mx-auto p-6 md:p-8 relative shadow-2xl">
          <button
            onClick={acceptNecessary}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {!showSettings ? (
            <>
              {/* Simple Banner */}
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-navy mb-2">
                    🍪 Мы используем cookies
                  </h3>
                  <p className="text-gray leading-relaxed">
                    Мы используем необходимые cookies для работы сайта и аналитические cookies для улучшения вашего опыта.
                    Вы можете принять все или настроить предпочтения.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <Button
                    onClick={() => setShowSettings(true)}
                    variant="outline"
                    className="border-2 border-navy text-navy hover:bg-navy hover:text-white whitespace-nowrap"
                  >
                    Настроить
                  </Button>
                  <Button
                    onClick={acceptNecessary}
                    variant="outline"
                    className="border-2 border-gray-300 text-gray hover:bg-gray-100 whitespace-nowrap"
                  >
                    Только необходимые
                  </Button>
                  <Button
                    onClick={acceptAll}
                    className="bg-coral hover:bg-[#FF5252] text-white whitespace-nowrap"
                  >
                    Принять все
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Detailed Settings */}
              <h3 className="text-2xl font-bold text-navy mb-4">
                Настройки cookies
              </h3>
              <form onSubmit={saveCustom} className="space-y-4">
                {/* Necessary Cookies */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-bold text-navy mb-1">
                        Необходимые cookies
                      </h4>
                      <p className="text-sm text-gray">
                        Обязательны для работы сайта. Нельзя отключить.
                      </p>
                    </div>
                    <div className="ml-4 px-3 py-1 bg-success-green text-white text-xs font-bold rounded-full">
                      Всегда активно
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-bold text-navy mb-1">
                        Аналитические cookies
                      </h4>
                      <p className="text-sm text-gray">
                        Помогают нам понять, как вы используете сайт, чтобы улучшить его.
                        Google Analytics 4.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer ml-4">
                      <input
                        type="checkbox"
                        name="analytics"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-coral/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-coral"></div>
                    </label>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-bold text-navy mb-1">
                        Маркетинговые cookies
                      </h4>
                      <p className="text-sm text-gray">
                        Используются для показа релевантной рекламы. Google Ads, Meta Pixel.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer ml-4">
                      <input
                        type="checkbox"
                        name="marketing"
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-coral/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-coral"></div>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    type="button"
                    onClick={() => setShowSettings(false)}
                    variant="outline"
                    className="flex-1 border-2 border-gray-300"
                  >
                    Назад
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-coral hover:bg-[#FF5252] text-white"
                  >
                    Сохранить настройки
                  </Button>
                </div>
              </form>
            </>
          )}
        </Card>
      </div>
    </>
  );
}
