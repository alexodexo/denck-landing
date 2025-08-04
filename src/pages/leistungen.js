// src/pages/leistungen.js
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { 
  Brain, Zap, Database, Shield, Bot, Users, Target, Workflow, 
  CheckCircle, ArrowRight, Star, Clock, DollarSign, TrendingUp,
  Phone, MessageSquare, Mail, FileText, Network, Cpu, Settings,
  Award, Lightbulb, BarChart3, Eye, Lock, Globe, Rocket,
  Calendar, User, Building, ChevronRight, Play, Pause
} from 'lucide-react'

export default function Leistungen() {
  const [activeService, setActiveService] = useState('agents')
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const sectionRef = useRef(null)

  // Services Data - Korrekte Services aus AIServicesSection
  const services = [
    {
      id: 'agents',
      title: 'KI-Agenten Netzwerke',
      icon: Network,
      description: 'Intelligente Agenten-Systeme die autonom zusammenarbeiten',
      features: [
        'Multi-Agent Orchestrierung',
        'Autonome Entscheidungsfindung',
        'Selbstlernende Systeme',
        '24/7 Verfügbarkeit',
        'Intelligente Workflow-Automatisierung',
        'Nahtlose Systemintegration'
      ],
      deliverables: [
        'Funktionsfähiges KI-Agenten-Netzwerk',
        'Automatisierte Workflows',
        'Persönliche Einarbeitung',
        'Dokumentation & Support'
      ],
      approach: 'Von der Konzeption bis zur vollständigen Implementierung'
    },
    {
      id: 'automation',
      title: 'Prozess-Automatisierung',
      icon: Workflow,
      description: 'End-to-End Automatisierung Ihrer Geschäftsprozesse',
      features: [
        'Workflow-Optimierung',
        'RPA Integration',
        'Echtzeit-Monitoring',
        'Fehlerfreie Ausführung',
        'Prozessanalyse & Mapping',
        'System-Integration'
      ],
      deliverables: [
        'Funktionsfähige Automatisierungen',
        'Tool-Integration in Ihre Systeme',
        'Persönliche Einarbeitung',
        'Dokumentation & Support'
      ],
      approach: 'Schrittweise Umsetzung nach Prioritäten'
    },
    {
      id: 'phone',
      title: 'KI-Telefon Agenten',
      icon: Phone,
      description: 'Sprachgesteuerte KI für perfekten Kundenservice',
      features: [
        'Natürliche Spracherkennung',
        'Emotionale Intelligenz',
        'Mehrsprachiger Support',
        'Nahtlose Weiterleitung',
        'Voice-to-Text Integration',
        'Call-Routing & Analytics'
      ],
      deliverables: [
        'Einsatzbereiter KI-Telefon-Agent',
        'Integration in Ihre Telefonie',
        'Persönliches Training',
        'Wartung & Weiterentwicklung'
      ],
      approach: 'Von MVP bis zur vollständigen Lösung'
    },
    {
      id: 'chat',
      title: 'Omnichannel Chatbots',
      icon: MessageSquare,
      description: 'Ein Bot, alle Plattformen - WhatsApp, Slack, Teams & mehr',
      features: [
        'WhatsApp Business API',
        'Microsoft Teams Integration',
        'Slack Workspace Bots',
        'Telegram & Discord',
        'Conversational Design',
        'Multi-Channel Management'
      ],
      deliverables: [
        'Einsatzbereiter Chatbot',
        'Integration in Ihre Kanäle',
        'Persönliches Training',
        'Wartung & Weiterentwicklung'
      ],
      approach: 'Angepasst an Ihre Kommunikationskanäle'
    },
    {
      id: 'email',
      title: 'E-Mail Intelligence',
      icon: Mail,
      description: 'Intelligente E-Mail Verarbeitung für Outlook & Gmail',
      features: [
        'Automatische Kategorisierung',
        'Smart Reply Generation',
        'Sentiment-Analyse',
        'Prioritäts-Management',
        'E-Mail Workflow Automation',
        'Spam-Filter & Sicherheit'
      ],
      deliverables: [
        'Intelligente E-Mail-Verarbeitung',
        'Integration in Ihre E-Mail-Systeme',
        'Persönliche Einarbeitung',
        'Dokumentation & Support'
      ],
      approach: 'Iterative Entwicklung basierend auf Ihren E-Mail-Prozessen'
    },
    {
      id: 'reports',
      title: 'KI-Report Generator',
      icon: FileText,
      description: 'Automatische Berichte mit tiefgreifenden Insights',
      features: [
        'Datenvisualisierung',
        'Predictive Analytics',
        'Executive Summaries',
        'Real-Time Dashboards',
        'Automatische Report-Generierung',
        'Custom Analytics'
      ],
      deliverables: [
        'Interaktive Dashboards',
        'Automatisierte Reports',
        'Datenbasierte Empfehlungen',
        'Schulung in der Nutzung'
      ],
      approach: 'Angepasst an Ihre Datenquellen und Reporting-Bedürfnisse'
    }
  ]

  // Approach Options - Flexible Zusammenarbeit
  const approaches = [
    {
      id: 'consulting',
      name: 'Beratung & Strategie',
      subtitle: 'Wenn Sie Klarheit brauchen',
      icon: Brain,
      description: 'Gemeinsam finden wir heraus, wo KI Ihrem Unternehmen am meisten helfen kann',
      includes: [
        'Persönliche Analysegespräche',
        'Use Case Identifikation',
        'ROI-Bewertung verschiedener Optionen',
        'Konkrete Handlungsempfehlungen',
        'Flexible Umsetzungsplanung'
      ],
      ideal: 'Sie wissen, dass KI helfen kann, aber nicht wo Sie anfangen sollen',
      cta: 'Beratung starten'
    },
    {
      id: 'implementation',
      name: 'Umsetzung & Support',
      subtitle: 'Wenn Sie konkret werden wollen',
      icon: Zap,
      description: 'Ich setze konkrete KI-Lösungen mit Ihnen um und begleite Sie dabei',
      includes: [
        'Konkrete Tool-Implementierung',
        'Persönliche Einarbeitung',
        'Anpassung an Ihre Prozesse',
        'Testing & Optimierung',
        'Ongoing Support bei Problemen'
      ],
      ideal: 'Sie haben klare Vorstellungen und wollen direkt loslegen',
      cta: 'Projekt besprechen',
      popular: true
    },
    {
      id: 'partnership',
      name: 'Langfristige Partnerschaft',
      subtitle: 'Wenn Sie einen KI-Partner brauchen',
      icon: Users,
      description: 'Ich begleite Sie kontinuierlich bei Ihrer KI-Transformation',
      includes: [
        'Regelmäßige strategische Reviews',
        'Kontinuierliche Optimierung',
        'Neue Use Case Entwicklung',
        'Team-Coaching & Schulungen',
        'Prioritäts-Support bei Problemen'
      ],
      ideal: 'Sie wollen KI systematisch und nachhaltig in Ihr Unternehmen integrieren',
      cta: 'Partnerschaft besprechen'
    }
  ]

  // Industries Data - Angepasst für die neuen Services
  const industries = [
    {
      name: 'E-Commerce & Online-Business',
      icon: TrendingUp,
      examples: ['Kundensegmentierung', 'Chatbot-Support', 'E-Mail Marketing', 'Preisoptimierung'],
    },
    {
      name: 'Beratung & Services',
      icon: Users,
      examples: ['Kundenanalyse', 'Prozessautomatisierung', 'Reporting', 'Terminmanagement'],
    },
    {
      name: 'Marketing & Vertrieb',
      icon: Target,
      examples: ['Lead-Scoring', 'Content-Automatisierung', 'Customer Journey', 'Performance-Tracking'],
    },
    {
      name: 'Produktion & Handwerk',
      icon: Settings,
      examples: ['Qualitätskontrolle', 'Wartungsplanung', 'Ressourcenoptimierung', 'Dokumentation'],
    },
    {
      name: 'Gesundheit & Wellness',
      icon: Shield,
      examples: ['Patientenverwaltung', 'Terminoptimierung', 'Behandlungsplanung', 'Dokumentation'],
    },
    {
      name: 'Bildung & Training',
      icon: Brain,
      examples: ['Personalisiertes Lernen', 'Fortschrittstracking', 'Content-Erstellung', 'Assessment'],
    }
  ]

  // Testimonials Data - Authentischer und weniger "corporate"
  const testimonials = [
    {
      text: "Alex hat mir geholfen, unseren Kundenservice mit KI zu automatisieren. Jetzt spare ich täglich 3 Stunden und meine Kunden sind zufriedener als je zuvor.",
      author: "Sandra Weber",
      position: "Geschäftsführerin",
      company: "Weber Consulting",
      industry: "Beratung",
      result: "3h täglich gespart"
    },
    {
      text: "Die KI-Strategie, die wir gemeinsam entwickelt haben, hat unser Online-Business komplett transformiert. ROI war schon nach 2 Monaten positiv.",
      author: "Michael Chen",
      position: "Gründer", 
      company: "TechShop24",
      industry: "E-Commerce",
      result: "ROI nach 2 Monaten"
    },
    {
      text: "Endlich verstehe ich, wie ich KI sinnvoll nutzen kann. Die persönliche Betreuung und die praxisnahen Tipps waren Gold wert.",
      author: "Dr. Lisa Hoffmann",
      position: "Praxisinhaberin",
      company: "Praxis Dr. Hoffmann",
      industry: "Healthcare",
      result: "Klare KI-Strategie"
    }
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-bg-primary">
        <div className="container-width relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Header */}
            <div className="mb-16">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-white shadow-lg border border-marine-200 rounded-full">
                  <Rocket className="w-6 h-6 text-marine-600" />
                  <span className="font-medium text-marine-800">
                    Persönliche KI-Beratung
                  </span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-text-primary">
                KI-Lösungen, die zu{' '}
                <span className="text-marine-600">
                  Ihnen
                </span>{' '}passen
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8">
                Individuelle KI-Beratung für Unternehmer, die ihre Prozesse optimieren und ihr Business voranbringen wollen.
                Praxisnah, flexibel und ohne unnötigen Overhead.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {[
                  { value: '100%', label: 'Maßgeschneidert' },
                  { value: 'Flexibel', label: 'Keine festen Pakete' },
                  { value: 'Praxisnah', label: 'Direkt umsetzbar' },
                  { value: 'Persönlich', label: 'Ihr Ansprechpartner' }
                ].map((benefit, index) => (
                  <div key={index} className="group">
                    <div className="bg-white shadow-lg border border-marine-100 rounded-xl p-4 hover:border-marine-300 transition-all duration-300 hover:scale-105">
                      <div className="text-lg font-bold text-marine-600 mb-1">
                        {benefit.value}
                      </div>
                      <div className="text-sm text-text-secondary">{benefit.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/kontakt" className="btn-primary group">
                <span className="relative z-10">
                  Kostenlose Erstberatung
                </span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button 
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary group"
              >
                Wie ich helfen kann
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={sectionRef} className="py-20 bg-bg-primary relative">
        <div className="container-width relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-white shadow-lg border border-marine-200 rounded-full">
                <Brain className="w-6 h-6 text-marine-600" />
                <span className="font-medium text-marine-800">
                  Meine Leistungen
                </span>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Wie ich{' '}
              <span className="text-marine-600">
                Ihnen helfen
              </span>{' '}
              kann
            </h2>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Von der ersten Idee bis zur fertigen Lösung - flexibel und individuell nach Ihren Bedürfnissen
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeService === service.id
                      ? 'bg-marine-600 text-white border border-marine-500'
                      : 'text-text-secondary hover:text-marine-600 hover:bg-marine-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{service.title}</span>
                </button>
              )
            })}
          </div>

          {/* Active Service Detail */}
          {services.map((service) => {
            const Icon = service.icon
            if (service.id !== activeService) return null
            
            return (
              <div key={service.id} className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  
                  {/* Left: Service Info */}
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-4 rounded-xl bg-marine-100">
                        <Icon className="h-8 w-8 text-marine-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-marine-800 mb-2">{service.title}</h3>
                        <p className="text-text-secondary">{service.description}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-marine-800 mb-4">So gehe ich vor:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-text-secondary">
                              <CheckCircle className="h-4 w-4 text-gold-500 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-marine-50 border border-marine-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Lightbulb className="h-4 w-4 text-gold-500" />
                          <span className="text-sm font-medium text-marine-800">Mein Ansatz</span>
                        </div>
                        <p className="text-text-secondary text-sm">{service.approach}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Deliverables */}
                  <div>
                    <h4 className="text-lg font-semibold text-marine-800 mb-6">Das bekommen Sie:</h4>
                    <div className="space-y-4">
                      {service.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-4 bg-marine-50 border border-marine-200 rounded-lg hover:border-marine-300 transition-all duration-300">
                          <div className="w-8 h-8 rounded-full bg-marine-600 flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">{idx + 1}</span>
                          </div>
                          <div>
                            <p className="text-marine-800 font-medium mb-1">{deliverable}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link 
                        href="/kontakt"
                        className="btn-primary group"
                      >
                        Lassen Sie uns sprechen
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Approaches Section - Ersetzt die starren Pakete */}
      <section className="py-20 bg-bg-primary relative">
        <div className="container-width relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-white shadow-lg border border-marine-200 rounded-full">
                <Target className="w-6 h-6 text-gold-600" />
                <span className="font-medium text-marine-800">
                  Flexible Zusammenarbeit
                </span>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Wie möchten Sie{' '}
              <span className="text-marine-600">
                zusammenarbeiten
              </span>?
            </h2>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Jeder hat andere Bedürfnisse - deshalb passe ich meine Unterstützung individuell an Ihre Situation an
            </p>
          </div>

          {/* Approach Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((approach, index) => {
              const Icon = approach.icon
              return (
                <div 
                  key={approach.id}
                  className={`group relative ${approach.popular ? 'scale-105 z-10' : ''}`}
                >
                  {/* Popular Badge */}
                  {approach.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gold-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Häufig gewählt
                      </div>
                    </div>
                  )}

                  {/* Card */}
                  <div className={`relative h-full bg-white shadow-lg border ${approach.popular ? 'border-gold-300' : 'border-marine-100'} rounded-2xl p-8 hover:border-marine-300 transition-all duration-300`}>
                    
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-marine-100 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-marine-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-marine-800 mb-2">{approach.name}</h3>
                      <p className="text-text-secondary mb-4">{approach.subtitle}</p>
                      <p className="text-text-secondary text-sm leading-relaxed">{approach.description}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {approach.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0" />
                          <span className="text-text-secondary text-sm">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Ideal for */}
                    <div className="bg-marine-50 border border-marine-200 rounded-lg p-4 mb-8">
                      <p className="text-xs text-text-secondary uppercase tracking-wide mb-1">Ideal wenn</p>
                      <p className="text-marine-800 font-medium text-sm">{approach.ideal}</p>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/kontakt"
                      className="btn-primary w-full group/btn"
                    >
                      {approach.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Custom Solution CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-marine-800 mb-4">
                Nicht das Richtige dabei?{' '}
                <span className="text-marine-600">
                  Kein Problem!
                </span>
              </h3>
              <p className="text-text-secondary mb-6">
                Jede Situation ist anders. Lassen Sie uns einfach sprechen und schauen, wie ich Ihnen am besten helfen kann.
                Unverbindlich und ohne Verkaufsdruck.
              </p>
              <Link
                href="/kontakt"
                className="btn-primary group"
              >
                Einfach mal sprechen
                <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-bg-primary relative">
        <div className="container-width relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-white shadow-lg border border-marine-200 rounded-full">
                <Building className="w-6 h-6 text-marine-600" />
                <span className="font-medium text-marine-800">
                  Branchen-Erfahrung
                </span>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              In diesen{' '}
              <span className="text-marine-600">
                Bereichen
              </span>{' '}
              helfe ich
            </h2>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Jede Branche hat ihre eigenen Herausforderungen - hier einige Beispiele, wo KI besonders gut helfen kann
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="bg-white shadow-lg border border-marine-100 rounded-xl p-6 hover:border-marine-300 transition-all duration-300 hover:scale-105 h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-marine-100 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-marine-600" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-marine-800 mb-4">{industry.name}</h3>
                    
                    <div className="space-y-2">
                      {industry.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-marine-600" />
                          <span className="text-text-secondary text-sm">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Not Listed CTA */}
          <div className="mt-12 text-center">
            <div className="bg-white shadow-lg border border-marine-100 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-text-secondary mb-4">
                <strong className="text-marine-800">Ihre Branche nicht dabei?</strong> Kein Problem! 
                KI-Lösungen lassen sich in fast jeden Bereich anwenden.
              </p>
              <Link
                href="/kontakt"
                className="group inline-flex items-center text-marine-600 hover:text-marine-700 transition-colors"
              >
                Lassen Sie uns über Ihre spezifischen Herausforderungen sprechen
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-bg-primary relative">
        <div className="container-width relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-white shadow-lg border border-marine-200 rounded-full">
                <Star className="w-6 h-6 text-gold-600" />
                <span className="font-medium text-marine-800">
                  Erfolgsgeschichten
                </span>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Was meine{' '}
              <span className="text-marine-600">
                Kunden
              </span>{' '}sagen
            </h2>
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8 md:p-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  {/* Quote */}
                  <div className="text-center mb-8">
                    <div className="text-6xl text-marine-200 mb-4">"</div>
                    <p className="text-xl text-text-secondary leading-relaxed italic mb-6">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-8">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-marine-600 flex items-center justify-center mb-4 mx-auto">
                        <User className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-marine-800 font-semibold">{testimonial.author}</h4>
                      <p className="text-text-secondary text-sm">{testimonial.position}</p>
                      <p className="text-text-muted text-xs">{testimonial.company}</p>
                    </div>

                    {/* Result */}
                    <div className="bg-gold-50 border border-gold-200 rounded-lg p-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gold-600 mb-1">
                          {testimonial.result}
                        </div>
                        <div className="text-xs text-text-secondary uppercase tracking-wide">
                          {testimonial.industry}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-marine-600'
                        : 'bg-marine-200 hover:bg-marine-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bg-primary relative">
        <div className="container-width relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Header */}
            <div className="mb-12">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-white shadow-lg border border-marine-200 rounded-full">
                  <Rocket className="w-6 h-6 text-marine-600" />
                  <span className="font-medium text-marine-800">
                    Bereit für den nächsten Schritt?
                  </span>
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                Lassen Sie uns{' '}
                <span className="text-marine-600">
                  sprechen
                </span>
              </h2>
              
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                In einem unverbindlichen Gespräch finden wir heraus, wie KI Ihr Unternehmen voranbringen kann.
                Kostenlos und ohne Verkaufsdruck.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Calendar, title: '30 Min Gespräch', desc: 'Kostenlos & unverbindlich' },
                { icon: Lightbulb, title: 'Konkrete Ideen', desc: 'Sofort umsetzbare Tipps' },
                { icon: Target, title: 'Klarer Plan', desc: 'Nächste Schritte definieren' }
              ].map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="group">
                    <div className="bg-white shadow-lg border border-marine-100 rounded-xl p-6 hover:border-marine-300 transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 bg-marine-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-marine-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-marine-800 mb-2">{benefit.title}</h3>
                      <p className="text-text-secondary text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Final CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/kontakt"
                className="btn-primary group"
              >
                <span className="relative z-10 flex items-center">
                  Kostenloses Gespräch vereinbaren
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <a
                href="https://cal.com/alexdenck/besprechung"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group"
              >
                Direkt Termin buchen
                <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'KI-Beratungsleistungen - DENCK Solutions',
      description: 'Individuelle KI-Beratung für Unternehmer. Flexible Unterstützung von der Strategie bis zur Umsetzung. Praxisnah, persönlich und ohne unnötigen Overhead.'
    }
  }
}