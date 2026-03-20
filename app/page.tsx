'use client';

import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== HEADER ==================== */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  01 23 45 67 89
                </span>
                <span className="hidden md:flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  contact@artisanelectricienfolliot.com
                </span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                <span>Lun-Ven 8h-19h | Sam 8h-17h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Artisan Électricien Folliot</h1>
                  <p className="text-xs text-blue-600 font-medium">Depuis 1990 • Paris 14ème</p>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-blue-600 font-medium transition">Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition">Services</a>
              <a href="#zones" className="text-gray-700 hover:text-blue-600 font-medium transition">Zones</a>
              <a href="#temoignages" className="text-gray-700 hover:text-blue-600 font-medium transition">Avis</a>
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition transform hover:-translate-y-0.5">
                Devis Gratuit
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-3">
                <a href="#accueil" className="text-gray-700 hover:text-blue-600 font-medium">Accueil</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
                <a href="#zones" className="text-gray-700 hover:text-blue-600 font-medium">Zones</a>
                <a href="#temoignages" className="text-gray-700 hover:text-blue-600 font-medium">Avis</a>
                <a href="#contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold text-center">Devis Gratuit</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* ==================== HERO SECTION ==================== */}
      <section id="accueil" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 L50 100 L100 0 Z" fill="white"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="text-sm font-medium">4.5/5 sur Google — +650 clients satisfaits</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Électricien Paris 14ème & Île-de-France
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                Votre électricien de confiance depuis <strong className="text-white font-semibold">1990</strong>. J'interviens personnellement pour tous vos travaux électriques à Paris et en Île-de-France.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition transform hover:-translate-y-1 text-center">
                  📞 Demander mon devis gratuit
                </a>
                <a href="#services" className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition text-center">
                  Découvrir mes services
                </a>
              </div>
              
              {/* Trust Badges */}
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm font-medium">Certification RGE</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm font-medium">Garantie décennale</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm font-medium">Qualifelec</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image/Graphic */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-1 transform rotate-3">
                  <div className="bg-blue-900 rounded-xl p-8">
                    <div className="text-center">
                      <svg className="w-32 h-32 mx-auto text-yellow-400 mb-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                      </svg>
                      <div className="text-6xl font-bold text-white mb-2">30+</div>
                      <div className="text-blue-200 text-lg">Années d'expérience</div>
                      <div className="mt-6 pt-6 border-t border-blue-700">
                        <div className="text-4xl font-bold text-yellow-400 mb-1">650+</div>
                        <div className="text-blue-200">Interventions par an</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Artisan Électricien Folliot — Mon Engagement à Votre Service
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Je m'appelle <strong className="text-blue-900 font-semibold">Monsieur Folliot</strong> et je suis l'artisan derrière <strong className="text-blue-900 font-semibold">Artisan Électricien Folliot</strong>. Depuis <strong className="text-blue-900 font-semibold">1990</strong>, j'ai bâti mon entreprise sur une valeur simple : <strong className="text-blue-900 font-semibold">chaque client mérite une intervention personnelle, soignée et transparente</strong>.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Tout a commencé il y a plus de <strong className="text-blue-900 font-semibold">30 ans</strong>, quand j'ai décidé de créer une entreprise d'électricité générale où <strong className="text-blue-900 font-semibold">je serais l'unique intervenant</strong>. Pas de sous-traitance, pas d'équipe inconnue : <strong className="text-blue-900 font-semibold">c'est moi qui intervient chez vous, du premier appel à la fin du chantier</strong>.
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Pourquoi faire appel à moi ?</h3>
                <ul className="space-y-3">
                  {[
                    `Un seul interlocuteur — De la prise d'appel à la fin du chantier, c'est toujours moi`,
                    `Aucune sous-traitance — Je réalise moi-même toutes les interventions`,
                    `Ma réputation en jeu — Chaque chantier engage mon nom et ma réputation`,
                    `Plus de 650 interventions réussies chaque année`,
                    `Une note de 4.5/5 sur Google, vérifiée par mes clients`
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '30+', label: `Années d'expérience`, icon: '🎯' },
                { number: '650+', label: `Interventions/an`, icon: '⚡' },
                { number: '4.5/5', label: 'Avis Google', icon: '⭐' },
                { number: '100%', label: 'Satisfaction client', icon: '✅' }
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 text-center transform hover:scale-105 transition">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mes Services d'Électricité Générale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Qualité et expertise artisanale à votre service
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🔌',
                title: 'Mise aux Normes NFC 15-100',
                description: 'Diagnostic complet, remplacement de tableau, mise à la terre, certification Consuel',
                delay: 'Devis sous 24h'
              },
              {
                icon: '🏗️',
                title: 'Rénovation Électrique Complète',
                description: 'Appartements anciens, maisons, bureaux. Mise en sécurité loi ALUR',
                delay: 'Devis sous 24h'
              },
              {
                icon: '🚨',
                title: 'Dépannage sur Devis',
                description: 'Pannes, court-circuits, disjoncteur. Intervention sur rendez-vous',
                delay: 'Devis sous 24h'
              },
              {
                icon: '⚡',
                title: 'Tableau Électrique',
                description: 'Installation, remplacement, mise aux normes, parafoudre, délesteur',
                delay: 'Devis sous 24h'
              },
              {
                icon: '🏠',
                title: 'Domotique & Maison Connectée',
                description: 'Éclairage, thermostats, volets, alarmes. Contrôle via smartphone',
                delay: 'Devis sous 48h'
              },
              {
                icon: '🔋',
                title: 'Borne Recharge Véhicule Électrique',
                description: 'Wallbox 7-22kW, aide ADVENIR, qualification IRVE',
                delay: 'Devis sous 24h'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                    {service.delay}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ZONES SECTION ==================== */}
      <section id="zones" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mes Zones d'Intervention en Île-de-France
            </h2>
            <p className="text-xl text-gray-600">
              J'interviens personnellement sur devis
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Paris (75)',
                areas: ['Paris 5ème', 'Paris 6ème', 'Paris 7ème', 'Paris 12ème', 'Paris 13ème', 'Paris 14ème', 'Paris 15ème'],
                icon: '🏛️'
              },
              {
                title: 'Hauts-de-Seine (92)',
                areas: ['Vanves', 'Malakoff', 'Montrouge', 'Issy-les-Moulineaux', 'Meudon'],
                icon: '🏢'
              },
              {
                title: 'Val-de-Marne (94)',
                areas: ['Bourg-la-Reine', 'Ivry-sur-Seine', 'Vincennes', 'Cachan', "L'Haÿ-les-Roses"],
                icon: '🏘️'
              }
            ].map((zone, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{zone.icon}</span>
                  <h3 className="text-2xl font-bold text-blue-900">{zone.title}</h3>
                </div>
                <ul className="space-y-2">
                  {zone.areas.map((area, areaIndex) => (
                    <li key={areaIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section id="temoignages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ce Que Disent Mes Clients
            </h2>
            <p className="text-xl text-gray-600">
              Plus de 650 clients satisfaits en Île-de-France
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Marie L.',
                location: 'Paris 14ème',
                rating: 5,
                text: `Monsieur Folliot a rénové notre appartement de 80m² dans le 14ème. Du devis à la livraison, tout s'est parfaitement déroulé. Il a été professionnel, ponctuel et le travail est impeccable.`,
                project: 'Rénovation électrique complète — T3 80m²'
              },
              {
                name: 'Pierre D.',
                location: 'Montrouge',
                rating: 5,
                text: 'Devis gratuit respecté, travail soigné. Notre appartement a été entièrement rénové en 5 jours. Excellent rapport qualité-prix.',
                project: 'Rénovation électrique'
              },
              {
                name: 'Sophie M.',
                location: 'Vanves',
                rating: 5,
                text: 'Intervention rapide pour un court-circuit. Devis reçu sous 24h, travail impeccable. Tarif transparent, rien à redire.',
                project: 'Dépannage électrique'
              },
              {
                name: 'Thomas R.',
                location: 'Issy-les-Moulineaux',
                rating: 5,
                text: 'Mise aux normes complète de notre maison des années 70. Travail impeccable, certification Consuel obtenue sans problème.',
                project: 'Mise aux normes NFC 15-100 — Maison 120m²'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.location}</div>
                  </div>
                  <div className="text-blue-600 text-sm font-medium">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Prêt à Démarrer Votre Projet Électrique ?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Contactez-moi dès aujourd'hui — Devis gratuit en 24-48h
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-10">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-2">📍</div>
                <div className="font-semibold mb-1">Adresse</div>
                <div className="text-blue-100 text-sm">Paris 14ème, Île-de-France</div>
              </div>
              <div>
                <div className="text-3xl mb-2">📞</div>
                <div className="font-semibold mb-1">Téléphone</div>
                <div className="text-blue-100 text-sm">01 23 45 67 89</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🕐</div>
                <div className="font-semibold mb-1">Horaires</div>
                <div className="text-blue-100 text-sm">Lun-Ven 8h-19h | Sam 8h-17h</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0123456789" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition transform hover:-translate-y-1">
              📞 Appeler maintenant
            </a>
            <a href="mailto:contact@artisanelectricienfolliot.com" className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition">
              📧 Envoyer un email
            </a>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Devis gratuit et sans engagement
            </span>
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Intervention sur rendez-vous
            </span>
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Garantie décennale
            </span>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Artisan Électricien Folliot</h3>
              <p className="text-sm leading-relaxed mb-4">
                Votre électricien de confiance depuis 1990 à Paris 14ème. J'interviens personnellement sur devis sur Paris et toute l'Île-de-France.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Certification RGE
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Qualification Qualifelec
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Garantie décennale
                </div>
              </div>
            </div>
            
            {/* Column 2 */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Mes Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Mise aux normes électriques</a></li>
                <li><a href="#" className="hover:text-white transition">Rénovation électrique</a></li>
                <li><a href="#" className="hover:text-white transition">Dépannage sur devis</a></li>
                <li><a href="#" className="hover:text-white transition">Tableau électrique</a></li>
                <li><a href="#" className="hover:text-white transition">Domotique</a></li>
                <li><a href="#" className="hover:text-white transition">Borne recharge VE</a></li>
              </ul>
            </div>
            
            {/* Column 3 */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Zones d'Intervention</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Paris (tous arrondissements)</a></li>
                <li><a href="#" className="hover:text-white transition">Hauts-de-Seine (92)</a></li>
                <li><a href="#" className="hover:text-white transition">Val-de-Marne (94)</a></li>
              </ul>
            </div>
            
            {/* Column 4 */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Mentions légales</a></li>
                <li><a href="#" className="hover:text-white transition">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition">CGV</a></li>
                <li><a href="#" className="hover:text-white transition">Plan du site</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; 2026 Artisan Électricien Folliot — Tous droits réservés.</p>
            <p className="mt-2 text-gray-500">Site réalisé avec ❤️ à Paris 14ème</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
