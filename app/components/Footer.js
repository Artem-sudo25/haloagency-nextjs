export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">HaloAgency</h3>
            <p className="text-gray-400">
              Digitální agentura pro malé a střední firmy v Praze
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Služby</a></li>
              <li><a href="#" className="hover:text-white transition">O nás</a></li>
              <li><a href="#" className="hover:text-white transition">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@haloagency.cz</li>
              <li>📱 +420 123 456 789</li>
              <li>📍 Praha, Česká republika</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 HaloAgency. Všechna práva vyhrazena.</p>
        </div>

      </div>
    </footer>
  );
}