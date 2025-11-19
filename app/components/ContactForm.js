'use client';  // Important: enables interactivity

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show form data in console (we'll add real submission later)
    console.log('Form submitted:', formData);
    
    setStatus('✓ Zpráva odeslána! Brzy vás kontaktujeme.');
    
    // Clear form
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Clear status after 5 seconds
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Kontaktujte nás
          </h2>
          <p className="text-xl text-gray-600">
            Napište nám a my se vám ozveme do 24 hodin
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
          
          {/* Name */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Jméno *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900"
              placeholder="Vaše jméno"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900"
              placeholder="vas@email.cz"
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Telefon *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900"
              placeholder="+420 123 456 789"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Zpráva *
            </label>
            <textarea
              required
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none text-gray-900"
              placeholder="Popište váš projekt..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition shadow-lg"
          >
            Odeslat zprávu
          </button>

          {/* Status Message */}
          {status && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center font-semibold">
              {status}
            </div>
          )}

        </form>
      </div>
    </section>
  );
}