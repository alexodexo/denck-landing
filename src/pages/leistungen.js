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
  const [activeService, setActiveService] = useState('strategy')
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const sectionRef = useRef(null)

  // Services Data - Angepasst für flexible Beratung
  const services = [
    {
      id: 'strategy',
      title: 'KI-Strategieberatung',
      icon: Brain,
      gradient: 'from-purple-400 to-pink-400',
      description: 'Gemeinsam entwickeln wir Ihre maßgeschneiderte KI-Roadmap für nachhaltigen Erfolg',
      features: [
        'Individuelle KI-Potentialanalyse',
        'Use Case Workshop & Priorisierung', 
        'Konkrete ROI-Bewertung',
        'Flexible Umsetzungsstrategien',
        'Persönliche Begleitung',
        'Praxisnahe Handlungsempfehlungen'
      ],
      deliverables: [
        'Maßgeschneiderte KI-Strategie',
        'Priorisierte Use-Case-Liste', 
        'Realistische ROI-Einschätzungen',
        'Flexibler Umsetzungsplan'
      ],
      approach: 'Individuell nach Ihren Bedürfnissen'
    },
    {
      id: 'automation',
      title: 'Prozessautomatisierung',
      icon: Workflow,
      gradient: 'from-blue-400 to-cyan-400', 
      description: 'Ich helfe Ihnen dabei, wiederkehrende Aufgaben intelligent zu automatisieren',
      features: [
        'Prozessanalyse & Optimierung',
        'KI-Tool Auswahl & Setup',
        'Workflow-Entwicklung',
        'System-Integration', 
        'Persönliches Training',
        'Laufende Optimierung'
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
      id: 'agents',
      title: 'KI-Assistenten & Chatbots',
      icon: Bot,
      gradient: 'from-green-400 to-emerald-400',
      description: 'Entwicklung intelligenter Assistenten für Kundenservice und interne Prozesse',
      features: [
        'Bedarfsanalyse & Konzeption',
        'KI-Agent Entwicklung',
        'Integration in Ihre Kanäle',
        'Conversational Design',
        'Testing & Optimierung',
        'Persönliche Schulung'
      ],
      deliverables: [
        'Einsatzbereiter KI-Assistent',
        'Integration in Ihre Plattformen',
        'Persönliches Training',
        'Wartung & Weiterentwicklung'
      ],
      approach: 'Von MVP bis zur vollständigen Lösung'
    },
    {
      id: 'analytics',
      title: 'Datenanalyse & Insights',
      icon: BarChart3,
      gradient: 'from-yellow-400 to-orange-400',
      description: 'Verwandlung Ihrer Daten in wertvolle Erkenntnisse für bessere Entscheidungen',
      features: [
        'Datenaudit & -strategie',
        'Dashboard-Entwicklung',
        'Predictive Analytics',
        'Visualisierung & Reporting',
        'KI-gestützte Analysen',
        'Interpretationshilfe'
      ],
      deliverables: [
        'Interaktive Dashboards',
        'Automatisierte Reports',
        'Datenbasierte Empfehlungen',
        'Schulung in der Nutzung'
      ],
      approach: 'Iterative Entwicklung basierend auf Ihren Erkenntnissen'
    },
    {
      id: 'consulting',
      title: 'KI-Beratung & Coaching',
      icon: Users,
      gradient: 'from-red-400 to-rose-400',
      description: 'Persönliche Begleitung bei der KI-Transformation Ihres Unternehmens',
      features: [
        'Strategische Beratung',
        'Tool-Evaluierung & -auswahl',
        'Implementierungsbegleitung',
        'Team-Coaching',
        'Change Management',
        'Ongoing Support'
      ],
      deliverables: [
        'Regelmäßige Beratungsgespräche',
        'Konkrete Handlungsempfehlungen',
        'Tool-Empfehlungen',
        'Persönliche Unterstützung'
      ],
      approach: 'Flexible Begleitung nach Ihrem Tempo'
    },
    {
      id: 'workshops',
      title: 'KI-Workshops & Training',
      icon: Lightbulb,
      gradient: 'from-indigo-400 to-purple-400',
      description: 'Praxisnahe Schulungen für Sie und Ihr Team im Umgang mit KI-Tools',
      features: [
        'Maßgeschneiderte Workshops',
        'Hands-on Training',
        'Tool-spezifische Schulungen',
        'Best Practice Sharing',
        'Q&A Sessions',
        'Follow-up Support'
      ],
      deliverables: [
        'Praxisorientierte Workshops',
        'Training-Materialien',
        'Persönliche Betreuung',
        'Nachbetreuung bei Fragen'
      ],
      approach: 'Angepasst an Ihr Wissenslevel und Ihre Ziele'
    }
  ]

  // Approach Options - Ersetzt die starren Pakete
  const approaches = [
    {
      id: 'consulting',
      name: 'Beratung & Strategie',
      subtitle: 'Wenn Sie Klarheit brauchen',
      icon: Brain,
      gradient: 'from-blue-400 to-cyan-400',
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
      gradient: 'from-purple-400 to-pink-400',
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
      gradient: 'from-yellow-400 to-orange-400',
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

  // Industries Data - Bleibt ähnlich aber weniger "corporate"
  const industries = [
    {
      name: 'E-Commerce & Online-Business',
      icon: TrendingUp,
      examples: ['Kundensegmentierung', 'Personalisierung', 'Chatbot-Support', 'Preisoptimierung'],
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      name: 'Beratung & Services',
      icon: Users,
      examples: ['Kundenanalyse', 'Prozessautomatisierung', 'Wissensmanagement', 'Reporting'],
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      name: 'Marketing & Vertrieb',
      icon: Target,
      examples: ['Lead-Scoring', 'Content-Automatisierung', 'Customer Journey', 'Performance-Tracking'],
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      name: 'Produktion & Handwerk',
      icon: Settings,
      examples: ['Qualitätskontrolle', 'Wartungsplanung', 'Ressourcenoptimierung', 'Dokumentation'],
      gradient: 'from-yellow-400 to-orange-400'
    },
    {
      name: 'Gesundheit & Wellness',
      icon: Shield,
      examples: ['Patientenverwaltung', 'Terminoptimierung', 'Behandlungsplanung', 'Dokumentation'],
      gradient: 'from-red-400 to-rose-400'
    },
    {
      name: 'Bildung & Training',
      icon: Brain,
      examples: ['Personalisiertes Lernen', 'Fortschrittstracking', 'Content-Erstellung', 'Assessment'],
      gradient: 'from-indigo-400 to-purple-400'
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
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="container-width relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Header */}
            <div className="mb-16">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-600/50 rounded-full shadow-2xl">
                  <Rocket className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400" />
                  <span className="font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text animate-gradient bg-300%">
                    Persönliche KI-Beratung
                  </span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                KI-Lösungen, die zu{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 animate-gradient bg-300%">
                  Ihnen
                </span>{' '}passen
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
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
                    <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                      <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-1">
                        {benefit.value}
                      </div>
                      <div className="text-sm text-slate-400">{benefit.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/kontakt" className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
                <span className="relative z-10">
                  Kostenlose Erstberatung
                </span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </Link>
              
              <button 
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center px-8 py-4 text-white bg-slate-800/80 backdrop-blur-xl border-2 border-slate-600 rounded-lg font-semibold hover:bg-slate-700/80 hover:border-slate-500 transition-all duration-300 shadow-xl"
              >
                Wie ich helfen kann
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={sectionRef} className="py-20 relative overflow-hidden">
        <div className="container-width relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-600/50 rounded-full shadow-2xl">
                <Brain className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400" />
                <span className="font-medium bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text animate-gradient bg-300%">
                  Meine Leistungen
                </span>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Wie ich{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Ihnen helfen
              </span>{' '}
              kann
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
                      ? 'bg-slate-700/80 text-white border border-slate-600/50'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
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
              <div key={service.id} className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  
                  {/* Left: Service Info */}
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-20`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-slate-300">{service.description}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">So gehe ich vor:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-slate-300">
                              <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-slate-700/40 backdrop-blur-xl border border-slate-600/30 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Lightbulb className="h-4 w-4 text-yellow-400" />
                          <span className="text-sm font-medium text-white">Mein Ansatz</span>
                        </div>
                        <p className="text-slate-300 text-sm">{service.approach}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Deliverables */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-6">Das bekommen Sie:</h4>
                    <div className="space-y-4">
                      {service.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-4 bg-slate-700/40 backdrop-blur-xl border border-slate-600/30 rounded-lg hover:border-slate-500/50 transition-all duration-300">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.gradient} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white font-bold text-sm">{idx + 1}</span>
                          </div>
                          <div>
                            <p className="text-white font-medium mb-1">{deliverable}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link 
                        href="/kontakt"
                        className={`group inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-lg font-semibold hover:scale-105 transition-all duration-200 shadow-lg`}
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
      <section className="py-20 relative overflow-hidden">
        <div className="container-width relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-600/50 rounded-full shadow-2xl">
                <Target className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400" />
                <span className="font-medium bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-transparent bg-clip-text animate-gradient bg-300%">
                  Flexible Zusammenarbeit
                </span>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Wie möchten Sie{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                zusammenarbeiten
              </span>?
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Häufig gewählt
                      </div>
                    </div>
                  )}

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${approach.gradient} opacity-0 group-hover:opacity-30 ${approach.popular ? 'opacity-20' : ''} blur-xl rounded-2xl transition-all duration-500`} />
                  
                  {/* Card */}
                  <div className={`relative h-full bg-slate-800/60 backdrop-blur-xl border ${approach.popular ? 'border-purple-500/50' : 'border-slate-700/50'} rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300`}>
                    
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${approach.gradient} bg-opacity-20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{approach.name}</h3>
                      <p className="text-slate-400 mb-4">{approach.subtitle}</p>
                      <p className="text-slate-300 text-sm leading-relaxed">{approach.description}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {approach.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Ideal for */}
                    <div className="bg-slate-700/40 backdrop-blur-xl border border-slate-600/30 rounded-lg p-4 mb-8">
                      <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Ideal wenn</p>
                      <p className="text-white font-medium text-sm">{approach.ideal}</p>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/kontakt"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${approach.gradient} text-white rounded-lg font-semibold hover:scale-105 transition-all duration-200 shadow-lg group/btn`}
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
            <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Nicht das Richtige dabei?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Kein Problem!
                </span>
              </h3>
              <p className="text-slate-300 mb-6">
                Jede Situation ist anders. Lassen Sie uns einfach sprechen und schauen, wie ich Ihnen am besten helfen kann.
                Unverbindlich und ohne Verkaufsdruck.
              </p>
              <Link
                href="/kontakt"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Einfach mal sprechen
                <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container-width relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-600/50 rounded-full shadow-2xl">
                <Building className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400" />
                <span className="font-medium bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-transparent bg-clip-text animate-gradient bg-300%">
                  Branchen-Erfahrung
                </span>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              In diesen{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Bereichen
              </span>{' '}
              helfe ich
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-30 blur-xl rounded-xl transition-all duration-500`} />
                  
                  {/* Card */}
                  <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-slate-500/50 transition-all duration-300 hover:scale-105 h-full">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${industry.gradient} bg-opacity-20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-4">{industry.name}</h3>
                    
                    <div className="space-y-2">
                      {industry.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.gradient}`} />
                          <span className="text-slate-300 text-sm">{example}</span>
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
            <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-slate-300 mb-4">
                <strong className="text-white">Ihre Branche nicht dabei?</strong> Kein Problem! 
                KI-Lösungen lassen sich in fast jeden Bereich anwenden.
              </p>
              <Link
                href="/kontakt"
                className="group inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                Lassen Sie uns über Ihre spezifischen Herausforderungen sprechen
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container-width relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-600/50 rounded-full shadow-2xl">
                <Star className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400" />
                <span className="font-medium bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-transparent bg-clip-text animate-gradient bg-300%">
                  Erfolgsgeschichten
                </span>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Was meine{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Kunden
              </span>{' '}sagen
            </h2>
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 md:p-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  {/* Quote */}
                  <div className="text-center mb-8">
                    <div className="text-6xl text-slate-600 mb-4">"</div>
                    <p className="text-xl text-slate-300 leading-relaxed italic mb-6">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-8">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center mb-4 mx-auto">
                        <User className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-white font-semibold">{testimonial.author}</h4>
                      <p className="text-slate-400 text-sm">{testimonial.position}</p>
                      <p className="text-slate-500 text-xs">{testimonial.company}</p>
                    </div>

                    {/* Result */}
                    <div className="bg-slate-700/40 backdrop-blur-xl border border-slate-600/30 rounded-lg p-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-1">
                          {testimonial.result}
                        </div>
                        <div className="text-xs text-slate-400 uppercase tracking-wide">
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
                        ? 'bg-purple-500'
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container-width relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Header */}
            <div className="mb-12">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-600/50 rounded-full shadow-2xl">
                  <Rocket className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400" />
                  <span className="font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text animate-gradient bg-300%">
                    Bereit für den nächsten Schritt?
                  </span>
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Lassen Sie uns{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 animate-gradient bg-300%">
                  sprechen
                </span>
              </h2>
              
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
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
                    <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-purple-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-slate-400 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Final CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/kontakt"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Kostenloses Gespräch vereinbaren
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </Link>
              
              <a
                href="https://cal.com/alexdenck/besprechung"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 text-white bg-slate-800/80 backdrop-blur-xl border-2 border-slate-600 rounded-lg font-semibold hover:bg-slate-700/80 hover:border-slate-500 transition-all duration-300 shadow-xl"
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