// src/pages/index.js
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Cpu, Brain, Zap, Shield, Users, TrendingUp, Bot, Sparkles, CheckCircle, Star, ChevronRight, BarChart3, Target, Lightbulb, Code, Cloud, Database } from 'lucide-react'
import Hero from '../components/common/Hero'

export default function HomePage() {
  const services = [
    {
      icon: Bot,
      title: 'KI-Strategieberatung',
      description: 'Entwicklung maßgeschneiderter KI-Strategien für Ihr Unternehmen. Von der Vision bis zur Implementierung.',
      features: ['KI-Readiness Assessment', 'Use Case Identifikation', 'ROI-Analyse', 'Roadmap-Entwicklung']
    },
    {
      icon: Brain,
      title: 'Prozessautomatisierung',
      description: 'Intelligente Automatisierung Ihrer Geschäftsprozesse mit modernsten KI-Technologien.',
      features: ['RPA & KI-Integration', 'Workflow-Optimierung', 'Chatbots & Assistenten', 'Document Intelligence']
    },
    {
      icon: Database,
      title: 'Daten & Analytics',
      description: 'Verwandeln Sie Ihre Daten in wertvolle Geschäftseinblicke mit KI-gestützter Analyse.',
      features: ['Predictive Analytics', 'Business Intelligence', 'Data Mining', 'KI-Dashboards']
    },
    {
      icon: Shield,
      title: 'KI-Governance',
      description: 'Sichere und ethische KI-Implementierung mit robusten Governance-Strukturen.',
      features: ['Compliance & Regulatorik', 'Ethik-Guidelines', 'Risk Management', 'Quality Assurance']
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Effizienzsteigerung',
      value: 'bis zu 40%',
      description: 'Reduzierung von Prozesszeiten durch intelligente Automatisierung'
    },
    {
      icon: Target,
      title: 'Kostensenkung',
      value: '30-50%',
      description: 'Einsparungen durch optimierte Ressourcennutzung'
    },
    {
      icon: Zap,
      title: 'Schnellere Entscheidungen',
      value: '5x schneller',
      description: 'Datengestützte Insights in Echtzeit'
    },
    {
      icon: Users,
      title: 'Kundenzufriedenheit',
      value: '+35%',
      description: 'Verbesserte Customer Experience durch KI'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Analyse',
      description: 'Tiefgreifende Analyse Ihrer aktuellen Prozesse und Potenziale'
    },
    {
      step: '02',
      title: 'Strategie',
      description: 'Entwicklung einer maßgeschneiderten KI-Strategie'
    },
    {
      step: '03',
      title: 'Pilotierung',
      description: 'Proof of Concept und schrittweise Implementierung'
    },
    {
      step: '04',
      title: 'Skalierung',
      description: 'Unternehmensweiter Rollout und kontinuierliche Optimierung'
    }
  ]

  const testimonials = [
    {
      text: "DENCK Consulting hat unsere Kundenservice-Prozesse revolutioniert. Die KI-Lösung bearbeitet nun 70% der Anfragen automatisch.",
      author: "Dr. Sarah Weber",
      position: "CDO, FinTech Unternehmen",
      rating: 5
    },
    {
      text: "Dank der KI-Strategie von DENCK konnten wir unsere Produktionseffizienz um 45% steigern. Ein Game-Changer!",
      author: "Michael Schmidt",
      position: "CEO, Mittelständisches Produktionsunternehmen",
      rating: 5
    },
    {
      text: "Die Expertise und der pragmatische Ansatz haben uns geholfen, KI sinnvoll und gewinnbringend einzusetzen.",
      author: "Lisa Chen",
      position: "Head of Innovation, Retail",
      rating: 5
    }
  ]

  return (
    <>
      {/* Hero Section mit modernem Gradient */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                🚀 Die Zukunft beginnt jetzt
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                KI-Beratung für den
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Mittelstand</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Wir machen Künstliche Intelligenz für Ihr Unternehmen nutzbar. 
                Praxisnah, messbar und nachhaltig erfolgreich.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up animation-delay-200">
              <Link
                href="/kontakt"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Kostenlose Erstberatung
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                Unsere Leistungen
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in animation-delay-400">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400">Erfolgreiche Projekte</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-gray-400">Kundenzufriedenheit</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">3-6M</div>
                <div className="text-gray-400">Time to Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">250%</div>
                <div className="text-gray-400">Durchschn. ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unsere KI-Beratungsleistungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der Strategie bis zur Implementierung - wir begleiten Sie auf Ihrem Weg in die KI-Zukunft
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-500">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ihr Mehrwert durch KI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Messbare Ergebnisse, die den Unterschied machen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{benefit.value}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Unser bewährter Prozess
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              In vier Schritten zur erfolgreichen KI-Integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <div className="text-5xl font-bold text-blue-400 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-400 h-8 w-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Was unsere Kunden sagen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfolgsgeschichten aus der Praxis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Bereit für die KI-Revolution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam herausfinden, wie KI Ihr Unternehmen voranbringen kann.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Jetzt Erstgespräch vereinbaren
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <p className="mt-4 text-sm text-blue-100">
            Kostenlos & unverbindlich • 30 Minuten • Online oder vor Ort
          </p>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'DENCK Consulting - KI-Beratung für den Mittelstand',
      description: 'Wir machen Künstliche Intelligenz für Ihr Unternehmen nutzbar. KI-Strategieberatung, Prozessautomatisierung und Datenanalyse für nachhaltigen Erfolg.'
    }
  }
}