'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'paris' | '92' | '94'>('paris')

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== NAVIGATION ==================== */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-2 rounded-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Artisan Électricien Folliot</div>
                <div className="text-xs text-gray-500">Depuis 1990 — Paris 14ème</div>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition">À propos</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium transition">Services</a>
              <a href="#zones" className="text-gray-600 hover:text-blue-600 font-medium transition">Zones</a>
              <a href="#temoignages" className="text-gray-600 hover:text-blue-600 font-medium transition">Avis</a>
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition shadow-lg">
                📞 Devis Gratuit
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                </span>
                <span className="text-yellow-400 font-medium text-sm">Disponible Lun-Sam 8h-19h</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
                Électricien Paris 14ème & Île-de-France
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Votre électricien de confiance depuis <strong className="text-white font-semibold">1990</strong>. J'interviens personnellement pour tous vos travaux électriques à Paris et en Île-de-France.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#contact" className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition transform hover:scale-105 shadow-2xl">
                  📞 Demander mon devis gratuit
                </a>
                <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-4 rounded-xl font-semibold">
                  ⏰ Lundi-Samedi 8h-19h
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-flex">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 border-2 border-white flex items-center justify-center text-white font-bold text-xs">
                      ★
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-white font-bold">4.5/5 sur Google</div>
                  <div className="text-blue-200 text-sm">+650 clients satisfaits</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:block relative">
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: '🏆', number: '30+', label: "Années d'expérience" },
                    { icon: '⚡', number: '650+', label: 'Interventions / an' },
                    { icon: '⭐', number: '4.5/5', label: 'Avis Google' },
                    { icon: '🛡️', number: '100%', label: 'Garantie décennale' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <div className="text-4xl mb-3">{stat.icon}</div>
                      <div className="text-3xl font-black text-yellow-400 mb-1">{stat.number}</div>
                      <div className="text-blue-100 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm mb-4">À PROPOS</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Artisan Électricien Folliot — Mon Engagement à Votre Service
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Je m'appelle <strong className="text-blue-900 font-semibold">Monsieur Folliot</strong> et je suis l'artisan derrière <strong className="text-blue-900 font-semibold">Artisan Électricien Folliot</strong>. Depuis <strong className="text-blue-900 font-semibold">1990</strong>, j'ai bâti mon entreprise sur une valeur simple : <strong className="text-blue-900 font-semibold">chaque client mérite une intervention personnelle, soignée et transparente</strong>.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mon histoire</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Tout a commencé il y a plus de <strong className="text-blue-900 font-semibold">30 ans</strong>, quand j'ai décidé de créer une entreprise d'électricité générale où <strong className="text-blue-900 font-semibold">je serais l'unique intervenant</strong>. Pas de sous-traitance, pas d'équipe inconnue : <strong className="text-blue-900 font-semibold">c'est moi qui intervient chez vous, du premier appel à la fin du chantier</strong>.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed italic text-gray-600 border-l-4 border-blue-600 pl-6">
                Cette approche, certains la trouvent "old school". Moi, je la vois comme la seule façon de garantir un travail <strong className="text-blue-900">parfaitement exécuté, dans les délais annoncés, au prix convenu</strong>.
              </p>
            </div>

            {/* Right - Why Choose Me */}
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Pourquoi faire appel à moi ?</h3>
              <ul className="space-y-4">
                {[
                  'Un seul interlocuteur — De la prise d\'appel à la fin du chantier, c\'est toujours moi',
                  'Aucune sous-traitance — Je réalise moi-même toutes les interventions',
                  'Ma réputation en jeu — Chaque chantier engage mon nom et ma réputation',
                  'Plus de 650 interventions réussies chaque année',
                  'Une note de 4.5/5 sur Google, vérifiée par mes clients',
                  'Une garantie décennale sur tous mes travaux',
                  'Une certification RGE (Reconnu Garant de l\'Environnement)',
                  'Une qualification Qualifelec pour les installations électriques'
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

          {/* Hours & Zone */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Hours */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🕐</span>
                Mes horaires d'intervention
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Lundi - Vendredi</span>
                  <span className="font-semibold text-gray-900">8h00 - 19h00</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Samedi</span>
                  <span className="font-semibold text-gray-900">8h00 - 17h00</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-600">Dimanche et jours fériés</span>
                  <span className="font-semibold text-red-600">Fermé</span>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-600 bg-blue-50 rounded-lg p-4">
                <strong className="text-blue-900">Pour vos projets :</strong> Toutes mes interventions sont réalisées <strong className="text-blue-900">sur devis gratuit</strong>. Contactez-moi pour étudier votre projet et obtenir une estimation précise sous 24-48h.
              </p>
            </div>

            {/* Zone */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">📍</span>
                Ma zone d'intervention
              </h3>
              <p className="text-gray-700 mb-6">
                Basé à <strong className="text-blue-900">Paris 14ème</strong>, j'interviens personnellement sur <strong className="text-blue-900">devis</strong> sur :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">📍</span>
                  <span className="text-gray-700"><strong className="text-gray-900">Paris</strong> (tous arrondissements : 5ème, 6ème, 7ème, 12ème, 13ème, 14ème, 15ème)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">📍</span>
                  <span className="text-gray-700"><strong className="text-gray-900">Hauts-de-Seine (92)</strong> : Vanves, Malakoff, Montrouge, Issy-les-Moulineaux, Meudon</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">📍</span>
                  <span className="text-gray-700"><strong className="text-gray-900">Val-de-Marne (94)</strong> : Bourg-la-Reine, Ivry-sur-Seine, Vincennes, Cachan, L'Haÿ-les-Roses</span>
                </li>
              </ul>
              <a href="#zones" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Découvrir mes zones d'intervention
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm mb-4">MES SERVICES</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Mes Services d'Électricité Générale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Qualité et expertise artisanale à votre service
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=350&fit=crop',
                icon: '📢',
                title: 'Mise aux Normes NFC 15-100',
                points: [
                  'Diagnostic électrique complet de votre installation',
                  'Remplacement de tableau électrique ancien',
                  'Installation de disjoncteurs différentiels',
                  'Mise en place de la mise à la terre',
                  'Protection des circuits électriques',
                  'Certification de conformité Consuel'
                ],
                link: '/mise-aux-normes-electriques-ile-de-france/',
                cta: 'DEMANDER UN DEVIS DE MISE EN NORMES'
              },
              {
                image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?w=500&h=350&fit=crop',
                icon: '🏗️',
                title: 'Rénovation Électrique Complète',
                points: [
                  'Rénovation d\'appartements anciens',
                  'Rénovation de maisons individuelles',
                  'Rénovation de bureaux et locaux commerciaux',
                  'Mise en sécurité électrique (loi ALUR)',
                  'Optimisation énergétique',
                  'Gestion de projet clé en main'
                ],
                link: '/renovation-electrique-complete-ile-de-france/',
                cta: 'DEMANDER UN DEVIS DE RÉNOVATION'
              },
              {
                image: 'https://images.unsplash.com/photo-1558402529-d2638a7045e0?w=500&h=350&fit=crop',
                icon: '🚨',
                title: 'Dépannage Électrique sur Devis',
                points: [
                  'Panne de courant totale ou partielle',
                  'Court-circuit et étincelles',
                  'Disjoncteur qui saute régulièrement',
                  'Prise ou interrupteur hors service',
                  'Odeur de brûlé (urgence)',
                  'Intervention sur rendez-vous'
                ],
                link: '/depannage-electrique-ile-de-france/',
                cta: 'DEMANDER UN DEVIS DE DÉPANNAGE'
              },
              {
                image: 'https://images.unsplash.com/photo-1555664424-778a6902201b?w=500&h=350&fit=crop',
                icon: '⚡',
                title: 'Tableau Électrique et Protection',
                points: [
                  'Installation de tableau électrique neuf',
                  'Remplacement de tableau ancien',
                  'Ajout de circuits électriques',
                  'Installation de parafoudre',
                  'Pose de délesteur',
                  'Marquage et étiquetage des circuits'
                ],
                link: '/tableau-electrique-protection-ile-de-france/',
                cta: 'DEMANDER UN DEVIS TABLEAU'
              },
              {
                image: 'https://images.unsplash.com/photo-1558002038-1091a1661116?w=500&h=350&fit=crop',
                icon: '🏠',
                title: 'Domotique et Maison Connectée',
                points: [
                  'Éclairage connecté (Philips Hue)',
                  'Thermostats connectés (Netatmo, Nest)',
                  'Volets roulants motorisés',
                  'Systèmes d\'alarme connectés',
                  'Vidéosurveillance IP',
                  'Contrôle via smartphone'
                ],
                link: '/domotique-maison-connectee-ile-de-france/',
                cta: 'DEMANDER UN DEVIS DOMOTIQUE'
              },
              {
                image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500&h=350&fit=crop',
                icon: '🔋',
                title: 'Borne de Recharge Véhicule Électrique',
                points: [
                  'Installation de Wallbox 7kW, 11kW, 22kW',
                  'Borne en garage ou en extérieur',
                  'Raccordement au tableau électrique',
                  'Demande d\'aides ADVENIR (jusqu\'à 500€)',
                  'Qualification IRVE',
                  'Conseil personnalisé'
                ],
                link: '/borne-recharge-vehicule-electrique-ile-de-france/',
                cta: 'DEMANDER UN DEVIS BORNE VE'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
                {/* Photo */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title Box */}
                  <div className="border-2 border-blue-600 inline-block px-4 py-2 mb-6">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center">
                      <span className="mr-2">{service.icon}</span>
                      {service.title}
                    </h3>
                  </div>

                  {/* Bullet List */}
                  <ul className="space-y-3 mb-6">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <a href={service.link} className="block text-blue-600 font-semibold hover:text-blue-800 transition mb-4">
                    En savoir plus →
                  </a>

                  {/* CTA Button */}
                  <a href="#contact" className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 text-center py-4 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-400 transition shadow-lg text-sm">
                    {service.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE ME ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm mb-4">POURQUOI ME CHOISIR</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Artisan Électricien Folliot ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisir le bon électricien est crucial pour la sécurité et la durabilité de votre installation
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '⭐',
                title: '30+ Ans d\'Expérience',
                desc: 'Depuis 1990, j\'ai réalisé des milliers d\'interventions. Expertise tous types de logements : haussmanniens, maisons, bureaux, copropriétés.',
                color: 'from-yellow-400 to-yellow-500'
              },
              {
                icon: '📋',
                title: 'Devis Gratuit et Transparent',
                desc: 'Appel → Visite gratuite → Devis détaillé sous 24-48h → Validation. Gratuit, détaillé, transparent, respecté.',
                color: 'from-blue-400 to-blue-500'
              },
              {
                icon: '🛡️',
                title: 'Garantie Décennale',
                desc: 'Toutes mes interventions sont couvertes : garantie décennale (10 ans), RC Pro, certification RGE, qualification Qualifelec.',
                color: 'from-green-400 to-green-500'
              },
              {
                icon: '💬',
                title: 'Avis Clients Vérifiés',
                desc: '4.5/5 sur Google. "Monsieur Folliot a rénové notre appartement de 80m² dans le 14ème. Travail impeccable." — Marie L.',
                color: 'from-purple-400 to-purple-500'
              }
            ].map((reason, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${reason.color} text-white text-4xl mb-6 shadow-lg`}>
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section id="temoignages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm mb-4">TÉMOIGNAGES</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ce Que Disent Mes Clients
            </h2>
            <p className="text-xl text-gray-600">
              Plus de 650 clients satisfaits en Île-de-France
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                stars: 5,
                text: 'Nous avons fait appel à Monsieur Folliot pour la rénovation complète de notre appartement de 80m² dans le 14ème. Du devis à la livraison, tout s\'est parfaitement déroulé. Il a été professionnel, ponctuel et le travail est impeccable.',
                author: 'Marie L.',
                location: 'Paris 14ème',
                project: 'Rénovation électrique complète — T3 80m²'
              },
              {
                stars: 5,
                text: 'Un court-circuit un mardi matin. J\'ai appelé Monsieur Folliot, il m\'a envoyé un devis sous 24h. Intervention planifiée 2 jours après, arrivé à l\'heure, problème résolu en 1h. Tarif transparent, travail soigné.',
                author: 'Sophie M.',
                location: 'Vanves',
                project: 'Dépannage électrique — Prise électrique'
              },
              {
                stars: 5,
                text: 'Notre maison des années 70 n\'était plus aux normes. Monsieur Folliot a réalisé la mise aux normes complète : nouveau tableau, mise à la terre, protection des circuits. Certification Consuel obtenue sans problème.',
                author: 'Thomas R.',
                location: 'Issy-les-Moulineaux',
                project: 'Mise aux normes NFC 15-100 — Maison 120m²'
              },
              {
                stars: 5,
                text: 'Nous voulions rendre notre maison plus intelligente (éclairage, volets, thermostat). Monsieur Folliot nous a conseillé sur les meilleures solutions et a tout installé parfaitement. On contrôle tout depuis notre smartphone.',
                author: 'Julie & Marc',
                location: 'Montrouge',
                project: 'Installation domotique complète'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                  <div className="text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">
                    {testimonial.project}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://goo.gl/maps/" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-900 transition shadow-lg">
              ⭐ Lire tous mes avis Google
            </a>
          </div>
        </div>
      </section>

      {/* ==================== ZONES SECTION ==================== */}
      <section id="zones" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm mb-4">ZONES D'INTERVENTION</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Mes Zones d'Intervention en Île-de-France
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              J'interviens personnellement sur devis sur l'ensemble de l'Île-de-France
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-xl p-1 inline-flex">
              <button
                onClick={() => setActiveTab('paris')}
                className={`px-6 py-3 rounded-lg font-semibold transition ${activeTab === 'paris' ? 'bg-white text-blue-600 shadow' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Paris (75)
              </button>
              <button
                onClick={() => setActiveTab('92')}
                className={`px-6 py-3 rounded-lg font-semibold transition ${activeTab === '92' ? 'bg-white text-blue-600 shadow' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Hauts-de-Seine (92)
              </button>
              <button
                onClick={() => setActiveTab('94')}
                className={`px-6 py-3 rounded-lg font-semibold transition ${activeTab === '94' ? 'bg-white text-blue-600 shadow' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Val-de-Marne (94)
              </button>
            </div>
          </div>

          {/* Content */}
          {activeTab === 'paris' && (
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📍 Paris — Tous Arrondissements (75)</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { arr: '5ème', quartiers: 'Quartier Latin, Panthéon, Sorbonne' },
                  { arr: '6ème', quartiers: 'Saint-Germain-des-Prés, Luxembourg' },
                  { arr: '7ème', quartiers: 'Gros-Caillou, Invalides, École-Militaire' },
                  { arr: '12ème', quartiers: 'Bercy, Quinze-Vingts, Gare de Lyon' },
                  { arr: '13ème', quartiers: 'Butte-aux-Cailles, Austerlitz, Gobelins' },
                  { arr: '14ème', quartiers: 'Montparnasse, Alésia, Santé (Mon secteur)' },
                  { arr: '15ème', quartiers: 'Vaugirard, Grenelle, Javel, Necker' }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="font-bold text-blue-600 mb-1">Paris {item.arr}</div>
                    <div className="text-sm text-gray-600">{item.quartiers}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === '92' && (
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📍 Hauts-de-Seine — 92</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { ville: 'Vanves', quartiers: 'Centre-ville, Mairie, Parc Frédéric-Pic' },
                  { ville: 'Malakoff', quartiers: 'Centre-ville, Mairie, Parc de la Vanne' },
                  { ville: 'Montrouge', quartiers: 'Centre-ville, Mairie, Parc départemental' },
                  { ville: 'Issy-les-Moulineaux', quartiers: 'Centre-ville, Val de Seine, Îles' },
                  { ville: 'Meudon', quartiers: 'Meudon-Centre, Meudon-la-Forêt, Bellevue' }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="font-bold text-blue-600 mb-1">{item.ville}</div>
                    <div className="text-sm text-gray-600">{item.quartiers}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === '94' && (
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📍 Val-de-Marne — 94</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { ville: 'Bourg-la-Reine', quartiers: 'Centre-ville, Mairie, Parc de la Bièvre' },
                  { ville: 'Ivry-sur-Seine', quartiers: 'Centre-ville, Mairie, Plateau' },
                  { ville: 'Vincennes', quartiers: 'Centre-ville, Château, Parc Floral' },
                  { ville: 'Cachan', quartiers: 'Centre-ville, Mairie, Gare RER B' },
                  { ville: "L'Haÿ-les-Roses", quartiers: 'Centre-ville, Mairie, Cité des Fleurs' }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="font-bold text-blue-600 mb-1">{item.ville}</div>
                    <div className="text-sm text-gray-600">{item.quartiers}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-center mt-12">
            <a href="#contact" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-900 transition shadow-lg">
              📞 Demander un devis pour votre ville
            </a>
          </div>
        </div>
      </section>

      {/* ==================== PARTNERS ==================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm mb-4">PARTENAIRES</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Mes Partenaires de Confiance
            </h2>
            <p className="text-xl text-gray-600">
              Je collabore avec les marques leaders du secteur électrique
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { name: 'Legrand', color: 'from-blue-600 to-blue-800' },
              { name: 'Schneider Electric', color: 'from-green-600 to-green-800' },
              { name: 'Somfy', color: 'from-blue-400 to-blue-600' },
              { name: 'Philips Hue', color: 'from-purple-400 to-purple-600' },
              { name: 'Hager', color: 'from-blue-700 to-blue-900' },
              { name: 'Legrand Netatmo', color: 'from-orange-400 to-orange-600' }
            ].map((partner, index) => (
              <div key={index} className={`bg-gradient-to-br ${partner.color} text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg`}>
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA FINAL ==================== */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Prêt à Démarrer Votre Projet Électrique ?
            </h2>
            <p className="text-xl text-blue-100">
              Contactez-moi dès aujourd'hui — Devis gratuit en 24-48h
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">📍 Mes Coordonnées</h3>
              <div className="space-y-4">
                <div className="flex items-center text-white">
                  <span className="text-2xl mr-4">📍</span>
                  <div>
                    <div className="font-semibold">Adresse</div>
                    <div className="text-blue-200">Paris 14ème, Île-de-France</div>
                  </div>
                </div>
                <div className="flex items-center text-white">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <div className="font-semibold">Téléphone</div>
                    <div className="text-blue-200">[Votre numéro]</div>
                  </div>
                </div>
                <div className="flex items-center text-white">
                  <span className="text-2xl mr-4">📧</span>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-200">[Votre email]</div>
                  </div>
                </div>
                <div className="flex items-center text-white">
                  <span className="text-2xl mr-4">🕐</span>
                  <div>
                    <div className="font-semibold">Horaires</div>
                    <div className="text-blue-200">Lun-Ven 8h-19h | Sam 8h-17h</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">✅ Mes Garanties</h3>
              <ul className="space-y-4">
                {[
                  'Devis gratuit et sans engagement',
                  'Intervention sur rendez-vous',
                  'Garantie décennale',
                  'Certification RGE Qualifelec',
                  'Paiement sécurisé'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a href="tel:" className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition transform hover:scale-105 shadow-2xl">
              📞 Demander mon devis gratuit
            </a>
            <a href="#services" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition">
              📋 Comment se déroule un devis ?
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h4 className="text-lg font-bold mb-4">Artisan Électricien Folliot</h4>
              <p className="text-gray-400 mb-4">
                Votre électricien de confiance depuis 1990 à Paris 14ème. J'interviens personnellement sur devis sur Paris et toute l'Île-de-France.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>✅ Certification RGE</li>
                <li>✅ Qualification Qualifelec</li>
                <li>✅ Garantie décennale</li>
                <li>✅ Assurance RC Pro</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-lg font-bold mb-4">Mes Services</h4>
              <ul className="space-y-2">
                {['Mise aux normes', 'Rénovation électrique', 'Dépannage sur devis', 'Tableau électrique', 'Domotique', 'Borne recharge VE'].map((item, i) => (
                  <li key={i}>
                    <a href="#services" className="text-gray-400 hover:text-white transition text-sm">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-lg font-bold mb-4">Zones</h4>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm"><strong className="text-white">Paris :</strong> 5ème, 6ème, 7ème, 14ème, 15ème</li>
                <li className="text-gray-400 text-sm"><strong className="text-white">92 :</strong> Vanves, Montrouge, Issy</li>
                <li className="text-gray-400 text-sm"><strong className="text-white">94 :</strong> Bourg-la-Reine, Vincennes</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="text-lg font-bold mb-4">Légal</h4>
              <ul className="space-y-2">
                {['Mentions légales', 'Politique de confidentialité', 'CGV', 'Plan du site', 'Contact'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition text-sm">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 Artisan Électricien Folliot — Tous droits réservés.</p>
            <p className="mt-2">Site réalisé avec ❤️ à Paris 14ème.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
