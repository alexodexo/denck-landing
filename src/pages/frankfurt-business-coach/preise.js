import Link from 'next/link'
import { Check, Clock, Euro, Phone, Users, Briefcase, GraduationCap, Star, ArrowRight } from 'lucide-react'
import Hero from '../../components/common/Hero'
import CTASection from '../../components/common/CTASection'
import FAQSection from '../../components/common/FAQSection'

export default function CoachPricing() {
  const pricingTiers = [
    {
      name: 'Einzelsitzung',
      price: '180',
      duration: '90 Minuten',
      popular: false,
      description: 'Perfekt für spezielle Anliegen oder zum Kennenlernen',
      features: [
        '90 Minuten intensive Beratung',
        'Vor- und Nachbereitung inklusive',
        'Wahlweise vor Ort oder online',
        'Flexible Terminbuchung',
        'Sofort buchbar'
      ],
      ideal: 'Für: Konkrete Fragestellung, Erstberatung'
    },
    {
      name: 'Coaching-Paket',
      price: '720',
      originalPrice: '900',
      duration: '4 x 90 Minuten',
      popular: true,
      description: 'Ideal für nachhaltige Entwicklungsprozesse',
      features: [
        '4 Coaching-Sitzungen à 90 Min.',
        '20% Ersparnis gegenüber Einzelsitzungen',
        'Flexibler Zeitrahmen (3-6 Monate)',
        'Zwischentermine bei Bedarf',
        'Telefonische Kurz-Beratung inklusive',
        'Schriftliche Zusammenfassung'
      ],
      ideal: 'Für: Karriereentwicklung, Führungsthemen'
    },
    {
      name: 'Intensiv-Begleitung',
      price: '1.440',
      originalPrice: '1.800',
      duration: '8 x 90 Minuten',
      popular: false,
      description: 'Umfassende Begleitung für große Veränderungen',
      features: [
        '8 Coaching-Sitzungen à 90 Min.',
        '20% Ersparnis gegenüber Einzelsitzungen',
        'Flexibler Zeitrahmen (6-12 Monate)',
        'Regelmäßige Zwischentermine',
        'Telefonische Beratung zwischen Terminen',
        'Schriftliche Entwicklungsdokumentation',
        'Zusätzliche Materialien und Tools'
      ],
      ideal: 'Für: Große Veränderungen, Outplacement'
    }
  ]

  const specialServices = [
    {
      title: 'Erstgespräch',
      price: 'Kostenlos',
      duration: '30 Minuten',
      description: 'Unverbindliches Kennenlernen und Bedarfsklärung',
      icon: Phone,
      features: ['Situationsanalyse', 'Zielfindung', 'Methoden-Vorstellung', 'Keine Verpflichtung']
    },
    {
      title: 'Paarberatung',
      price: '220',
      duration: '90 Minuten',
      description: 'Systemische Beratung für Paare bei beruflichen und privaten Themen',
      icon: Users,
      features: ['Beide Partner gemeinsam', 'Systemischer Ansatz', 'Konfliktlösung', 'Kommunikationsverbesserung']
    },
    {
      title: 'Assessment Center',
      price: 'Nach Vereinbarung',
      duration: '1-2 Tage',
      description: 'Potenzialanalyse und Eignungsdiagnostik für Unternehmen',
      icon: Briefcase,
      features: ['Umfassende Analyse', 'Ausführlicher Report', 'Entwicklungsempfehlungen', 'Follow-up Gespräch']
    },
    {
      title: 'Workshop/Training',
      price: 'Nach Vereinbarung',
      duration: 'Individuell',
      description: 'Maßgeschneiderte Trainings und Workshops',
      icon: GraduationCap,
      features: ['Individuelle Inhalte', 'Flexible Dauer', 'Gruppe oder Einzeln', 'Nachhaltige Begleitung']
    }
  ]

  const paymentTerms = [
    'Alle Preise verstehen sich inklusive 19% MwSt.',
    'Zahlung nach Erhalt der Rechnung innerhalb von 14 Tagen',
    'Bei Paketen: Zahlung vor der ersten Sitzung oder in Raten',
    'Absage bis 24 Stunden vorher kostenfrei möglich',
    'Terminverschiebung jederzeit möglich'
  ]

  const advantages = [
    {
      title: 'Faire Preise',
      description: 'Transparente Preisgestaltung ohne versteckte Kosten'
    },
    {
      title: 'Flexible Zahlung',
      description: 'Ratenzahlung bei Paketen möglich'
    },
    {
      title: 'Kostenlose Beratung',
      description: '30 Minuten Erstgespräch unverbindlich'
    },
    {
      title: 'Keine Mindestlaufzeit',
      description: 'Sie entscheiden über die Anzahl der Sitzungen'
    }
  ]

  const testimonial = {
    text: "Das Preis-Leistungs-Verhältnis stimmt absolut. Mario nimmt sich die Zeit, die man braucht, und die Investition hat sich schon nach wenigen Wochen ausgezahlt.",
    author: "Führungskraft, Finanzdienstleistung"
  }

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Preise & Konditionen"
        description="Transparente Preisgestaltung für professionelles Coaching. Investieren Sie in Ihre Entwicklung mit fairen und flexiblen Angeboten."
        primaryCTA={{
          text: 'Kostenlos beraten lassen',
          href: '/frankfurt-business-coach/kontakt'
        }}
        secondaryCTA={{
          text: 'Erstgespräch buchen',
          href: '/frankfurt-business-coach/kontakt'
        }}
        backgroundType="solid"
      />

      {/* Main Pricing Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Coaching-Pakete</h2>
            <p className="section-subtitle">
              Wählen Sie das passende Paket für Ihre Bedürfnisse. Alle Sitzungen wahlweise vor Ort in Frankfurt oder online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl ${
                  tier.popular 
                    ? 'border-primary-500 transform scale-105' 
                    : 'border-gray-200 hover:border-primary-300'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Beliebteste Wahl
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    
                    <div className="mb-4">
                      {tier.originalPrice && (
                        <div className="text-lg text-gray-400 line-through mb-1">
                          {tier.originalPrice}€
                        </div>
                      )}
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-navy-900">{tier.price}</span>
                        <span className="text-lg text-gray-600 ml-2">€</span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{tier.duration}</div>
                    </div>
                    
                    {tier.originalPrice && (
                      <div className="text-green-600 font-semibold text-sm">
                        Sie sparen {tier.originalPrice - tier.price}€ (20%)
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-xs text-primary-600 font-medium mb-6 text-center">
                    {tier.ideal}
                  </div>

                  <Link
                    href="/frankfurt-business-coach/kontakt"
                    className={`w-full justify-center ${
                      tier.popular ? 'btn-primary' : 'btn-outline'
                    }`}
                  >
                    Jetzt buchen
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Weitere Leistungen</h2>
            <p className="section-subtitle">
              Spezialisierte Angebote für besondere Situationen und Bedürfnisse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">{service.title}</h3>
                    <div className="text-2xl font-bold text-primary-600 mb-1">{service.price}</div>
                    {service.duration && (
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 text-center leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/frankfurt-business-coach/kontakt"
                    className="btn-outline w-full justify-center text-sm"
                  >
                    Anfragen
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Warum diese Preise fair sind</h2>
            <p className="section-subtitle">
              Transparenz und Fairness stehen bei mir an erster Stelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <Euro className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-navy-900 text-center mb-8">
              Verbindliche Konditionen
            </h2>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <ul className="space-y-4">
                {paymentTerms.map((term, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{term}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-200">
                <p className="text-sm text-primary-800">
                  <strong>Wichtiger Hinweis:</strong> Die Investition in Coaching zahlt sich langfristig aus. 
                  Viele Kunden berichten von positiven Veränderungen bereits nach wenigen Sitzungen. 
                  Bei Fragen zur Finanzierung sprechen Sie mich gerne an.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-300 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl font-light italic mb-6 leading-relaxed">
              "{testimonial.text}"
            </blockquote>
            <cite className="text-lg font-semibold">
              — {testimonial.author}
            </cite>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Starten Sie mit einem kostenlosen 30-minütigen Erstgespräch. 
              Unverbindlich und ohne Risiko.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/frankfurt-business-coach/kontakt"
                className="btn-primary text-lg px-8 py-4"
              >
                Kostenlos beraten lassen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center space-x-1">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">069 - 9753 4441</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">30 Min. kostenlos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        variant="coaching" 
        title="Häufige Fragen zu Preisen & Buchung"
        subtitle="Transparente Antworten zu Kosten, Zahlung und Ablauf"
      />

      {/* CTA Section */}
      <CTASection variant="coaching" />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Preise - Frankfurt Business Coach',
      description: 'Faire und transparente Preise für professionelles Business Coaching in Frankfurt. Einzelsitzungen ab 180€, Pakete mit bis zu 20% Rabatt. Erstgespräch kostenlos.'
    }
  }
}