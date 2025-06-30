import Link from 'next/link'
import { Briefcase, Users, GraduationCap, ArrowRight, CheckCircle, Clock, MessageCircle, Target, Heart } from 'lucide-react'
import Hero from '../../components/common/Hero'
import CTASection from '../../components/common/CTASection'
import FAQSection from '../../components/common/FAQSection'

export default function CoachServices() {
  const mainServices = [
    {
      id: 'coaching',
      icon: Briefcase,
      title: 'Business Coaching',
      subtitle: 'Professionelle Begleitung bei beruflichen Herausforderungen',
      description: 'Als Ihr Business Coach begleite ich Sie bei beruflichen Herausforderungen, Karriereentscheidungen und der Entwicklung Ihrer Führungskompetenzen. Gemeinsam finden wir Lösungen, die zu Ihnen und Ihrer Situation passen.',
      features: [
        'Karriereplanung und -entwicklung',
        'Führungskompetenzen stärken',
        'Work-Life-Balance optimieren',
        'Konfliktlösung im Beruf',
        'Entscheidungsfindung',
        'Stressmanagement'
      ],
      benefits: [
        'Klarheit über berufliche Ziele',
        'Verbesserte Führungsqualitäten',
        'Mehr Selbstvertrauen',
        'Bessere Work-Life-Balance'
      ],
      idealFor: [
        'Führungskräfte und Manager',
        'Selbstständige und Unternehmer',
        'Fachkräfte mit Karriereambitionen',
        'Menschen in beruflichen Veränderungsphasen'
      ]
    },
    {
      id: 'beratung',
      icon: MessageCircle,
      title: 'Systemische Beratung',
      subtitle: 'Ganzheitliche Lösungen für komplexe Situationen',
      description: 'Systemische Beratung betrachtet Sie und Ihre Herausforderungen im Kontext Ihrer Beziehungen und Systeme. Dieser Ansatz ermöglicht nachhaltige Veränderungen sowohl im beruflichen als auch im privaten Bereich.',
      features: [
        'Systemische Analyse Ihrer Situation',
        'Berufliche und private Themen',
        'Familien- und Paarberatung',
        'Organisationsberatung',
        'Konfliktmediation',
        'Entscheidungsunterstützung'
      ],
      benefits: [
        'Ganzheitliche Problemlösung',
        'Nachhaltige Veränderungen',
        'Verbesserte Beziehungen',
        'Klarere Kommunikation'
      ],
      idealFor: [
        'Menschen in komplexen Lebenssituationen',
        'Paare mit Beziehungsthemen',
        'Familien in Krisensituationen',
        'Teams mit Kommunikationsproblemen'
      ]
    },
    {
      id: 'training',
      icon: GraduationCap,
      title: 'Individuelles Training',
      subtitle: 'Maßgeschneiderte Kompetenzentwicklung',
      description: 'Gezieltes Training für spezifische Fähigkeiten und Kompetenzen. Von Kommunikationstraining bis zur Persönlichkeitsentwicklung – individuell auf Ihre Bedürfnisse zugeschnitten.',
      features: [
        'Kommunikationstraining',
        'Präsentationsskills',
        'Verhandlungsführung',
        'Zeitmanagement',
        'Persönlichkeitsentwicklung',
        'Stressresilienz'
      ],
      benefits: [
        'Verbesserte Soft Skills',
        'Mehr Überzeugungskraft',
        'Professionelles Auftreten',
        'Erhöhte Effizienz'
      ],
      idealFor: [
        'Nachwuchsführungskräfte',
        'Vertriebsmitarbeiter',
        'Projektleiter',
        'Alle, die sich weiterentwickeln möchten'
      ]
    }
  ]

  const additionalServices = [
    {
      title: 'Outplacement & Karriereberatung',
      description: 'Professionelle Begleitung bei beruflichen Veränderungen und Neuorientierung.',
      duration: '3-6 Monate',
      includes: ['Standortanalyse', 'Bewerbungscoaching', 'Netzwerk-Aktivierung', 'Verhandlungstraining']
    },
    {
      title: 'Assessment & Potenzialanalyse',
      description: 'Objektive Bewertung von Kompetenzen und Entwicklungspotenzialen.',
      duration: '1-2 Tage',
      includes: ['Persönlichkeitstest', 'Kompetenzanalyse', 'Entwicklungsplan', 'Feedback-Gespräch']
    },
    {
      title: 'Krisenintervention',  
      description: 'Schnelle Hilfe in akuten beruflichen oder privaten Krisensituationen.',
      duration: 'Nach Bedarf',
      includes: ['Soforttermine', 'Telefonische Beratung', 'Kurzzeitcoaching', 'Stabilisierung']
    }
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Kostenloses Erstgespräch',
      description: '30 Minuten zum Kennenlernen und zur Klärung Ihres Anliegens',
      duration: '30 Min.',
      cost: 'Kostenlos'
    },
    {
      step: '2',
      title: 'Bedarfsanalyse',
      description: 'Detaillierte Analyse Ihrer Situation und Definition der Ziele',
      duration: '90 Min.',
      cost: '180€'
    },
    {
      step: '3',
      title: 'Coaching-Prozess',
      description: 'Regelmäßige Sitzungen alle 2-4 Wochen je nach Bedarf',
      duration: '90 Min.',
      cost: '180€'
    },
    {
      step: '4',
      title: 'Erfolgsüberprüfung',
      description: 'Evaluation der erreichten Ziele und weiteres Vorgehen',
      duration: '90 Min.',
      cost: '180€'
    }
  ]

  const inspirationalQuote = {
    text: "Veränderung ist möglich, wenn man bereit ist, den ersten Schritt zu gehen. Als Ihr Coach begleite ich Sie dabei – professionell, diskret und mit der nötigen Portion Vertrauen in Ihre Fähigkeiten.",
    author: "Mario Egartner"
  }

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Meine Leistungen"
        description="Professionelle Unterstützung für Ihre beruflichen und persönlichen Herausforderungen. Mit drei Hauptbereichen: Coaching, Beratung und Training."
        primaryCTA={{
          text: 'Erstgespräch vereinbaren',
          href: '/frankfurt-business-coach/kontakt'
        }}
        secondaryCTA={{
          text: 'Preise ansehen',
          href: '/frankfurt-business-coach/preise'
        }}
      />

      {/* Service Navigation */}
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="container-width">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            {mainServices.map((service) => {
              const IconComponent = service.icon
              return (
                <Link
                  key={service.id}
                  href={`#${service.id}`}
                  className="flex items-center space-x-3 px-6 py-3 rounded-full bg-gray-50 hover:bg-primary-50 transition-colors duration-200 group"
                >
                  <IconComponent className="h-5 w-5 text-primary-600 group-hover:text-primary-700" />
                  <span className="font-medium text-gray-700 group-hover:text-primary-700">
                    {service.title}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="section-padding bg-gradient-to-r from-primary-50 to-navy-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-12 w-12 text-primary-600 mx-auto mb-6" />
            <blockquote className="text-2xl sm:text-3xl font-light text-navy-900 leading-relaxed mb-6 italic">
              "{inspirationalQuote.text}"
            </blockquote>
            <cite className="text-lg text-primary-600 font-semibold">
              — {inspirationalQuote.author}
            </cite>
          </div>
        </div>
      </section>

      {/* Main Services */}
      {mainServices.map((service, index) => {
        const IconComponent = service.icon
        return (
          <section 
            key={service.id} 
            id={service.id}
            className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container-width">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-xl text-primary-600 font-semibold mb-6">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-4 flex items-center">
                        <Target className="h-5 w-5 text-primary-600 mr-2" />
                        Was ich für Sie tue:
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-4 flex items-center">
                        <ArrowRight className="h-5 w-5 text-primary-600 mr-2" />
                        Ihr Nutzen:
                      </h3>
                      <ul className="space-y-2 mb-6">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2 text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="font-semibold text-navy-900 mb-2 text-sm">Ideal für:</h4>
                      <ul className="space-y-1">
                        {service.idealFor.map((target, targetIndex) => (
                          <li key={targetIndex} className="text-xs text-gray-600">
                            • {target}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/frankfurt-business-coach/kontakt"
                      className="btn-primary"
                    >
                      Termin vereinbaren
                    </Link>
                    <Link
                      href="/frankfurt-business-coach/preise"
                      className="btn-outline"
                    >
                      Preise ansehen
                    </Link>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-square bg-gradient-to-br from-primary-100 to-navy-100 rounded-xl p-8 flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <IconComponent className="h-32 w-32 text-primary-600 mx-auto mb-6" />
                      <h3 className="text-xl font-semibold text-navy-900">{service.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Process Steps */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">So läuft unser Coaching ab</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparenter Prozess von der ersten Kontaktaufnahme bis zum nachhaltigen Erfolg
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white font-bold text-xl mb-6">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{step.description}</p>
                <div className="text-xs text-primary-300">
                  <div><Clock className="h-3 w-3 inline mr-1" />{step.duration}</div>
                  <div className="font-semibold mt-1">{step.cost}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Weitere Spezialisierungen</h2>
            <p className="section-subtitle">
              Zusätzliche Dienstleistungen für spezielle Situationen und Bedürfnisse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="text-sm text-gray-500 mb-4">
                  <strong>Dauer:</strong> {service.duration}
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-navy-900 mb-2 text-sm">Leistungen:</h4>
                  <ul className="space-y-1">
                    {service.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href="/frankfurt-business-coach/kontakt"
                  className="btn-outline w-full justify-center text-sm"
                >
                  Beratung anfragen
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection variant="coaching" />

      {/* CTA Section */}
      <CTASection variant="coaching" />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Leistungen - Frankfurt Business Coach',
      description: 'Entdecken Sie meine Coaching-Leistungen: Business Coaching, systemische Beratung und individuelles Training. Professionelle Unterstützung in Frankfurt.'
    }
  }
}