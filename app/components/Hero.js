export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white px-4">
        <h1 className="text-6xl font-bold mb-4">
          🚀 HaloAgency
        </h1>
        <p className="text-2xl mb-8 text-blue-100">
          Profesionální weby pro váš byznys v Praze
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Získat konzultaci
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
            Naše práce
          </button>
        </div>
      </div>
    </section>
  );
}