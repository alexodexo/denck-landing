// src/pages/index.js
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, Cpu, Brain, Zap, Shield, Users, TrendingUp, Bot, Sparkles, CheckCircle, Star, ChevronRight, BarChart3, Target, Lightbulb, Code, Cloud, Database, Mail, Phone, MapPin, Menu, X, Building2, Rocket, Clock, Award, BarChart, MessageSquare, Settings, FileText } from 'lucide-react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('efficiency')
  
  const stats = [
    { value: '40%', label: 'Effizienzsteigerung', desc: 'durch intelligente Automatisierung' },
    { value: '30-50%', label: 'Kostensenkung', desc: 'durch optimierte Ressourcennutzung' },
    { value: '5x', label: 'Schnellere Entscheidungen', desc: 'durch datengestützte Insights' },
    { value: '+35%', label: 'Kundenzufriedenheit', desc: 'durch personalisierte Erlebnisse' }
  ]

  const services = [
    {
      icon: Brain,
      title: 'KI-Strategieberatung',
      description: 'Entwicklung maßgeschneiderter KI-Strategien für Ihr Unternehmen.',
      features: ['KI-Readiness Assessment', 'Use Case Identifikation', 'ROI-Analyse', 'Roadmap-Entwicklung'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Prozessautomatisierung',
      description: 'Intelligente Automatisierung Ihrer Geschäftsprozesse mit KI.',
      features: ['RPA & KI-Integration', 'Workflow-Optimierung', 'Chatbots & Assistenten', 'Document Intelligence'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Daten & Analytics',
      description: 'Verwandeln Sie Ihre Daten in wertvolle Geschäftseinblicke.',
      features: ['Predictive Analytics', 'Business Intelligence', 'Data Mining', 'KI-Dashboards'],
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'KI-Governance',
      description: 'Sichere und ethische KI-Implementierung mit robusten Strukturen.',
      features: ['Compliance & Regulatorik', 'Ethik-Guidelines', 'Risk Management', 'Quality Assurance'],
      color: 'from-red-500 to-orange-500'
    }
  ]

  const testimonials = [
    {
      text: "DENCK Consulting hat unsere Kundenservice-Prozesse revolutioniert. Die KI-Lösung bearbeitet nun 70% der Anfragen automatisch.",
      author: "Dr. Sarah Weber",
      position: "CDO, FinTech Unternehmen",
      company: "FinTech Solutions GmbH",
      rating: 5
    },
    {
      text: "Dank der KI-Strategie von DENCK konnten wir unsere Produktionseffizienz um 45% steigern. Ein absoluter Game-Changer!",
      author: "Michael Schmidt",
      position: "CEO, Mittelständisches Produktionsunternehmen",
      company: "Schmidt Manufacturing AG",
      rating: 5
    },
    {
      text: "Die Expertise und der pragmatische Ansatz haben uns geholfen, KI sinnvoll und gewinnbringend einzusetzen.",
      author: "Lisa Chen",
      position: "Head of Innovation, Retail",
      company: "Future Retail Group",
      rating: 5
    }
  ]

  const aiStatistics = [
    { percentage: '97%', text: 'der Geschäftsinhaber erwarten, dass KI ihre Produktivität verbessert' },
    { percentage: '61%', text: 'der Arbeitnehmer nutzen bereits KI in ihrer täglichen Arbeit' },
    { percentage: '69%', text: 'der Verbraucher fühlen sich mit Chatbots im Kundendienst wohl' },
    { percentage: '82%', text: 'der KI Nutzer sagen, dass KI ihre Arbeitsabläufe verbessert' },
    { percentage: '77%', text: 'der IT-Führungskräfte sehen KI als strategische Priorität' },
    { percentage: '79%', text: 'der Arbeitnehmer sagen, dass KI ihre Leistung verbessert' },
    { percentage: '71%', text: 'der Arbeitnehmer wollen mehr KI-Tools in ihren Unternehmen' },
    { percentage: '42%', text: 'der Unternehmen weltweit setzen bereits KI ein' }
  ]

  const processSteps = [
    { 
      step: '01', 
      title: 'Zieldefinition', 
      description: 'Klare Definition von Zielen und Identifikation konkreter KI-Anwendungsfälle' 
    },
    { 
      step: '02', 
      title: 'Datenstrategie', 
      description: 'Entwicklung einer umfassenden Datenstrategie für qualitativ hochwertige KI-Ergebnisse' 
    },
    { 
      step: '03', 
      title: 'Infrastruktur', 
      description: 'Aufbau einer robusten technologischen Basis für KI-Implementierung' 
    },
    { 
      step: '04', 
      title: 'Pilotierung', 
      description: 'Start mit kleineren Pilotprojekten zur Erfahrungssammlung' 
    },
    { 
      step: '05', 
      title: 'Skalierung', 
      description: 'Integration erfolgreicher KI-Lösungen in tägliche Geschäftsprozesse' 
    },
    { 
      step: '06', 
      title: 'Optimierung', 
      description: 'Kontinuierliches Monitoring und Anpassung der KI-Strategie' 
    }
  ]

  const tabContent = {
    efficiency: {
      title: 'Effizienz steigern',
      icon: Rocket,
      content: 'KI automatisiert repetitive Aufgaben und optimiert Ihre Prozesse. Teams können sich auf strategische Entscheidungen konzentrieren, während KI die Routinearbeit übernimmt.',
      benefits: ['Bis zu 80% Zeitersparnis', 'Fehlerreduktion um 90%', '24/7 Verfügbarkeit', 'Skalierbare Prozesse']
    },
    costs: {
      title: 'Kosten senken',
      icon: BarChart,
      content: 'Automatisierte Prozesse reduzieren Betriebskosten erheblich. KI minimiert den Ressourcenbedarf und steigert gleichzeitig die Produktivität.',
      benefits: ['30-50% Kosteneinsparung', 'Optimierte Ressourcennutzung', 'Reduzierte Personalkosten', 'Höhere Gewinnmargen']
    },
    customers: {
      title: 'Kunden gewinnen',
      icon: Users,
      content: 'Personalisierte Kundenerlebnisse und sofortige Reaktionszeiten durch KI-gestützte Systeme erhöhen die Kundenzufriedenheit nachhaltig.',
      benefits: ['35% mehr Kundenzufriedenheit', 'Personalisierte Angebote', '24/7 Kundensupport', 'Höhere Conversion-Rates']
    }
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-gradient-to-r from-blue-600 to-purple-600" />
              <span className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">DENCK</span>
                <span className="text-gray-900"> Consulting</span>
              </span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Leistungen</a>
              <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors">Prozess</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Über uns</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontakt</a>
              <Link href="/kontakt" className="btn-primary">
                Kostenlose Beratung
              </Link>
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#services" className="text-gray-700 hover:text-blue-600">Leistungen</a>
                <a href="#process" className="text-gray-700 hover:text-blue-600">Prozess</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600">Über uns</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600">Kontakt</a>
                <Link href="/kontakt" className="btn-primary text-center">
                  Kostenlose Beratung
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-6">
                🚀 KI macht Ihr Unternehmen profitabler
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Steigern Sie Ihre Effizienz,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> senken Sie Kosten</span> und
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> gewinnen Sie Kunden</span> mit KI
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Wir machen Künstliche Intelligenz für Ihr Unternehmen nutzbar. 
                Praxisnah, messbar und nachhaltig erfolgreich.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up animation-delay-200">
              <Link
                href="/kontakt"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Kostenlose Analyse sichern
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                Mehr erfahren
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in animation-delay-400">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {stat.value}
                  </div>
                  <div className="text-gray-900 font-semibold">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Problem */}
              <div className="bg-red-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <X className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Das Problem</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>❌ Viele Unternehmen sind mit langsamen, veralteten Prozessen gefangen</p>
                  <p>❌ Manuelle Aufgaben verschlingen Zeit und Ressourcen</p>
                  <p>❌ Kundenbeschwerden häufen sich durch fehlende Automatisierung</p>
                  <p>❌ Die Konkurrenz zieht mit digitalen Lösungen davon</p>
                  <p>❌ Veraltete Systeme blockieren den Fortschritt</p>
                </div>
              </div>

              {/* Solution */}
              <div className="bg-green-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Die Lösung</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>✅ Mit KI transformieren Sie Ihr Unternehmen grundlegend</p>
                  <p>✅ Automatisierte Routineaufgaben sparen Zeit und minimieren Fehler</p>
                  <p>✅ Datenbasierte Entscheidungen verschaffen Wettbewerbsvorteile</p>
                  <p>✅ Personalisierte Kundenerlebnisse steigern die Zufriedenheit</p>
                  <p>✅ Die richtige KI-Lösung macht Ihr Unternehmen zukunftssicher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              KI revolutioniert Ihr Unternehmen
            </h2>
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(tabContent).map(([key, content]) => {
                const Icon = content.icon
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeTab === key
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:shadow-md'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-2" />
                    {content.title}
                  </button>
                )
              })}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">{tabContent[activeTab].title}</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {tabContent[activeTab].content}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tabContent[activeTab].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              KI ist keine Zukunftsmusik mehr
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Die Zahlen sprechen für sich - Unternehmen weltweit setzen bereits auf KI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiStatistics.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                  {stat.percentage}
                </div>
                <p className="text-sm text-gray-700">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
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
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
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

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Ihr Weg zur erfolgreichen KI-Integration
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Unser bewährter Prozess führt Sie Schritt für Schritt zum Erfolg
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl font-bold text-blue-300 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="h-8 w-8 text-blue-300" />
                  </div>
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
            <h2 className="text-4xl font-bold mb-4">
              Was unsere Kunden sagen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfolgsgeschichten aus der Praxis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
                  <div className="text-xs text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Nahtlose Integration in Ihre bestehende Infrastruktur
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Mit unserer KI-Lösung können Sie mühelos Tausende von Apps miteinander verknüpfen und Arbeitsprozesse automatisieren. 
                  Wir passen uns flexibel an Ihre Cloud-Umgebung an - egal ob Google Cloud, Microsoft Azure oder AWS.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Cloud className="h-10 w-10 text-blue-600" />
                    <div>
                      <h4 className="font-semibold">Cloud-agnostisch</h4>
                      <p className="text-sm text-gray-600">Funktioniert mit allen großen Cloud-Plattformen</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Settings className="h-10 w-10 text-purple-600" />
                    <div>
                      <h4 className="font-semibold">API-Integration</h4>
                      <p className="text-sm text-gray-600">Verbindung zu über 5000+ Apps</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="grid grid-cols-3 gap-4">
                  {['Google Cloud', 'AWS', 'Azure', 'Salesforce', 'SAP', 'Office 365'].map((platform, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="text-sm font-medium text-gray-700">{platform}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Jetzt kostenlose Analyse sichern
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <p className="mt-4 text-sm text-blue-100">
            Kostenlos & unverbindlich • 30 Minuten • Online oder vor Ort
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="h-8 w-8" />
                <span className="text-xl font-bold">DENCK Consulting</span>
              </div>
              <p className="text-gray-400">
                Ihr Partner für erfolgreiche KI-Integration im Mittelstand.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Leistungen</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">KI-Strategieberatung</a></li>
                <li><a href="#" className="hover:text-white">Prozessautomatisierung</a></li>
                <li><a href="#" className="hover:text-white">Daten & Analytics</a></li>
                <li><a href="#" className="hover:text-white">KI-Governance</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Unternehmen</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Über uns</a></li>
                <li><a href="#" className="hover:text-white">Team</a></li>
                <li><a href="#" className="hover:text-white">Karriere</a></li>
                <li><a href="#" className="hover:text-white">Partner</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Kontakt</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +49 123 456789
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@denck-consulting.de
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Frankfurt am Main
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DENCK Consulting. Alle Rechte vorbehalten.</p>
            <div className="mt-4 space-x-6">
              <a href="/impressum" className="hover:text-white">Impressum</a>
              <a href="/datenschutz" className="hover:text-white">Datenschutz</a>
              <a href="/agb" className="hover:text-white">AGB</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}