export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Naše služby
          </h2>
          <p className="text-xl text-gray-600">
            Komplexní řešení pro váš online úspěch
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl hover:shadow-lg transition">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Web Design
            </h3>
            <p className="text-gray-600 mb-4">
              Moderní, responzivní weby optimalizované pro konverze
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>✓ WordPress / Next.js</li>
              <li>✓ Mobilní optimalizace</li>
              <li>✓ SEO připraveno</li>
            </ul>
            <p className="mt-4 text-xl font-bold text-indigo-600">
              Od 15,000 Kč
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-xl hover:shadow-lg transition">
            <div className="text-4xl mb-4">📣</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Online Marketing
            </h3>
            <p className="text-gray-600 mb-4">
              Google & Meta Ads kampaně s měřitelnými výsledky
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>✓ Google Ads</li>
              <li>✓ Facebook & Instagram</li>
              <li>✓ Remarketing</li>
            </ul>
            <p className="mt-4 text-xl font-bold text-purple-600">
              Od 5,000 Kč/měsíc
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gradient-to-br from-green-50 to-teal-100 p-8 rounded-xl hover:shadow-lg transition">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Analytika & Tracking
            </h3>
            <p className="text-gray-600 mb-4">
              Přesné měření konverzí a optimalizace výkonu
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>✓ GA4 & GTM setup</li>
              <li>✓ Server-side tracking</li>
              <li>✓ Conversion optimization</li>
            </ul>
            <p className="mt-4 text-xl font-bold text-green-600">
              Od 3,000 Kč
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}