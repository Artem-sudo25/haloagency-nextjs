'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function GoogleTagManager() {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  useEffect(() => {
    // Set default consent mode before GTM loads
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;

      // Default consent to denied, will be updated by cookie banner
      gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        functionality_storage: 'granted',
        personalization_storage: 'denied',
        security_storage: 'granted',
        wait_for_update: 500,
      });

      // Initialize dataLayer
      gtag('js', new Date());
      gtag('config', GTM_ID || 'GTM-XXXXXXX', {
        send_page_view: true,
      });
    }
  }, [GTM_ID]);

  if (!GTM_ID || GTM_ID === 'GTM-XXXXXXX') {
    // Don't load GTM in development or if not configured
    console.warn('GTM_ID not configured. Analytics disabled.');
    return null;
  }

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      {/* GTM noscript fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}

// Helper function to track custom events
export function trackEvent(eventName, eventParams = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

// Helper function to track page views
export function trackPageView(url) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GTM_ID, {
      page_path: url,
    });
  }
}
