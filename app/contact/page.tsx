'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postalCode: '',
    projectType: '',
    description: '',
    acceptContact: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('✅ Merci ! Votre demande de devis a été envoyée. Je vous réponds sous 24-48h.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-2 rounded-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Artisan Électricien Folliot</div>
                <div className="text-xs text-gray-500">Depuis 1990 — Paris 14ème</div>
              </div>
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition">Accueil</Link>
              <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium transition">Services</a>
              <a href="#zones" className="text-gray-600 hover:text-blue-600 font-medium transition">Zones</a>
              <a href="#temoignages" className="text-gray-600 hover:text-blue-600 font-medium transition">Avis</a>
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition shadow-lg">
                📞 Devis Gratuit
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg font-semibold text-white text-sm mb-6">
            📞 CONTACT
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Demandez Votre Devis d'Électricien Paris 14
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Gratuit sous 24-48h. Intervention sur Paris et toute l'Île-de-France.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 -mt-24 relative z-10">
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4">
                📞
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Téléphone</h3>
              <a href="tel:0612345678" className="text-blue-600 font-semibold text-lg hover:text-blue-800 transition">
                06 12 34 56 78
              </a>
              <p className="text-gray-500 text-sm mt-2">Réponse directe</p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4">
                📧
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:contact@artisan-folliot.fr" className="text-blue-600 font-semibold hover:text-blue-800 transition break-all">
                contact@artisan-folliot.fr
              </a>
              <p className="text-gray-500 text-sm mt-2">Réponse sous 24h</p>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4">
                🕐
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Horaires</h3>
              <p className="text-gray-700 font-medium">Lun-Ven 8h-19h</p>
              <p className="text-gray-700 font-medium">Sam 8h-17h</p>
              <p className="text-gray-500 text-sm mt-2">Dimanche fermé</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Demandez Votre Devis Gratuit en 2 Minutes
            </h2>
            <p className="text-xl text-gray-600">
              Je vous réponds sous 24-48h avec une estimation précise
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Nom */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nom complet *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Votre nom"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="votre@email.com"
                />
              </div>

              {/* Téléphone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Téléphone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="06 12 34 56 78"
                />
              </div>

              {/* Code Postal */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Code postal *</label>
                <input
                  type="text"
                  required
                  value={formData.postalCode}
                  onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="75014"
                />
              </div>
            </div>

            {/* Type de projet */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Type de projet *</label>
              <select
                required
                value={formData.projectType}
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              >
                <option value="">Sélectionnez un type de projet</option>
                <option value="mise-aux-normes">Mise aux normes électriques</option>
                <option value="renovation">Rénovation électrique complète</option>
                <option value="depannage">Dépannage électrique</option>
                <option value="tableau">Tableau électrique</option>
                <option value="domotique">Domotique et maison connectée</option>
                <option value="borne-ve">Borne de recharge véhicule électrique</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Description du projet</label>
              <textarea
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Décrivez votre projet..."
              />
            </div>

            {/* Accept Contact */}
            <div className="mb-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.acceptContact}
                  onChange={(e) => setFormData({...formData, acceptContact: e.target.checked})}
                  className="mt-1 mr-3"
                />
                <span className="text-gray-600 text-sm">J'accepte d'être recontacté par téléphone pour ma demande de devis</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-900 transition shadow-lg"
            >
              📋 Envoyer ma demande de devis
            </button>

            <p className="text-gray-500 text-sm text-center mt-4">
              🔒 Vos informations sont confidentielles et ne seront jamais partagées.
            </p>
          </form>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Sous Combien de Temps Je Vous Réponds ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Par téléphone</h3>
              <p className="text-blue-600 font-semibold text-lg">Réponse directe</p>
              <p className="text-gray-500 text-sm mt-2">Pendant les horaires d'ouverture</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 text-center">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Par email</h3>
              <p className="text-blue-600 font-semibold text-lg">Sous 24h</p>
              <p className="text-gray-500 text-sm mt-2">Jours ouvrés maximum</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Formulaire de devis</h3>
              <p className="text-blue-600 font-semibold text-lg">Sous 24-48h</p>
              <p className="text-gray-500 text-sm mt-2">Avec estimation détaillée</p>
            </div>
          </div>

          {/* Important Notice */}
          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <div className="flex items-start">
              <div className="text-4xl mr-4">⚠️</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">En cas de problème électrique important</h3>
                <p className="text-gray-700 leading-relaxed">
                  Panne totale, court-circuit, odeur de brûlé : Appelez-moi directement par téléphone. 
                  Je traite les situations prioritaires en premier et je vous propose un créneau dans la journée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Où J'Interviens en Île-de-France ?
            </h2>
            <p className="text-xl text-gray-600">
              Basé à Paris 14ème, j'interviens personnellement sur l'ensemble de l'Île-de-France
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Paris */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">📍</span>
                Paris (75)
              </h3>
              <p className="text-gray-600 mb-4">Tous arrondissements :</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Paris 5ème, 6ème, 7ème</li>
                <li>• Paris 12ème, 13ème</li>
                <li>• Paris 14ème, 15ème</li>
              </ul>
            </div>

            {/* Hauts-de-Seine */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">📍</span>
                Hauts-de-Seine (92)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Vanves</li>
                <li>• Malakoff</li>
                <li>• Montrouge</li>
                <li>• Issy-les-Moulineaux</li>
                <li>• Meudon</li>
              </ul>
            </div>

            {/* Val-de-Marne */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">📍</span>
                Val-de-Marne (94)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Bourg-la-Reine</li>
                <li>• Ivry-sur-Seine</li>
                <li>• Vincennes</li>
                <li>• Cachan</li>
                <li>• L'Haÿ-les-Roses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Me Contacter en Toute Confiance ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🛡️', title: 'Garantie décennale', desc: 'Tous mes travaux sont couverts 10 ans' },
              { icon: '✅', title: 'Certification RGE', desc: `Reconnu Garant de l'Environnement` },
              { icon: '⭐', title: 'Qualification Qualifelec', desc: `Référence dans l'électricité` },
              { icon: '📋', title: 'Devis transparent', desc: 'Pas de coûts cachés' }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Vous Avez un Projet Électrique ? Parlez-M'en !
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Je suis à votre écoute pour tous vos travaux électriques
          </p>
          <a href="tel:0612345678" className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition transform hover:scale-105 shadow-2xl">
            📞 06 12 34 56 78 — Appeler Maintenant
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Artisan Électricien Folliot</h4>
              <p className="text-gray-400 text-sm">
                Votre électricien de confiance depuis 1990 à Paris 14ème.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Mise aux normes</li>
                <li>Rénovation électrique</li>
                <li>Dépannage sur devis</li>
                <li>Tableau électrique</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Zones</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Paris (75)</li>
                <li>Hauts-de-Seine (92)</li>
                <li>Val-de-Marne (94)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📞 06 12 34 56 78</li>
                <li>📧 contact@artisan-folliot.fr</li>
                <li>📍 Paris 14ème</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 Artisan Électricien Folliot — Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
