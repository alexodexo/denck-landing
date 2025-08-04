// src/components/home/AIServicesSection.js
import { useState, useEffect, useRef } from 'react'
import { 
  Brain, Phone, MessageSquare, Mail, FileText, Network, 
  Cpu, Bot, Workflow, Zap, Globe, Sparkles,
  ArrowRight, CheckCircle
} from 'lucide-react'

export default function AIServicesSection() {
  const [activeService, setActiveService] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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
        '24/7 Verfügbarkeit'
      ]
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
        'Fehlerfreie Ausführung'
      ]
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
        'Nahtlose Weiterleitung'
      ]
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
        'Telegram & Discord'
      ]
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
        'Prioritäts-Management'
      ]
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
        'Real-Time Dashboards'
      ]
    }
  ]

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

  // Auto-rotate through services
  useEffect(() => {
    if (!isVisible) return
    
    const interval = setInterval(() => {
      setActiveService(prev => {
        const currentIndex = services.findIndex(s => s.id === prev)
        const nextIndex = (currentIndex + 1) % services.length
        return services[nextIndex].id
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [isVisible])

  const ServiceCard = ({ service, index }) => {
    const Icon = service.icon
    const isActive = activeService === service.id
    
    return (
      <div
        className={`group relative transition-all duration-500 transform cursor-pointer ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } ${isActive ? 'scale-105 z-10' : 'hover:scale-105'}`}
        style={{ transitionDelay: `${index * 100}ms` }}
        onMouseEnter={() => setActiveService(service.id)}
      >
        {/* Card */}
        <div className={`relative h-full bg-white shadow-lg border ${isActive ? 'border-marine-300' : 'border-marine-100'} rounded-2xl p-6 overflow-hidden transition-all duration-300`}>
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-marine-100 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="h-6 w-6 text-marine-600" />
              </div>
              <Sparkles className={`h-5 w-5 ${isActive ? 'text-gold-500 animate-pulse' : 'text-marine-300'} transition-colors duration-300`} />
            </div>
            
            {/* Title & Description */}
            <h3 className="text-xl font-bold text-marine-800 mb-2 group-hover:text-marine-600 transition-all duration-300">
              {service.title}
            </h3>
            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
              {service.description}
            </p>
            
            {/* Features */}
            <ul className="space-y-2">
              {service.features.slice(0, isActive ? 4 : 2).map((feature, idx) => (
                <li 
                  key={idx} 
                  className={`flex items-center text-sm text-text-secondary transition-all duration-300 ${
                    idx >= 2 ? (isActive ? 'opacity-100 max-h-10' : 'opacity-0 max-h-0') : ''
                  }`}
                >
                  <CheckCircle className={`h-4 w-4 mr-2 flex-shrink-0 text-gold-500`} />
                  {feature}
                </li>
              ))}
            </ul>
            
            {/* CTA */}
            <div className={`mt-4 overflow-hidden transition-all duration-500 ${isActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
              <button className={`group/btn flex items-center text-sm font-medium text-marine-600 hover:text-marine-800 transition-colors`}>
                Mehr erfahren
                <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section ref={sectionRef} className="py-20 bg-bg-primary relative">
      <div className="container-width relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-white shadow-lg border border-marine-200 rounded-full">
              <Brain className="w-6 h-6 text-marine-600" />
              <span className="font-medium text-marine-800">
                KI-Service Ökosystem
              </span>
              <Cpu className="w-6 h-6 text-gold-600" />
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
            Vernetzte <span className="text-marine-600">KI-Lösungen</span><br />
            für maximale{' '}
            <span className="relative">
              <span className="text-gold-600">Effizienz</span>
              <Zap className="absolute -top-8 -right-8 w-6 h-6 text-gold-500 animate-pulse" />
            </span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Ein intelligentes Netzwerk aus spezialisierten KI-Agenten, die nahtlos zusammenarbeiten 
            und Ihre Geschäftsprozesse revolutionieren
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block mb-8 px-8 py-4 bg-white shadow-lg border border-marine-200 rounded-2xl">
            <p className="text-lg text-text-secondary">
              Entdecken Sie die Zukunft der Geschäftsautomatisierung
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/kontakt"
              className="btn-primary group"
            >
              <Bot className="mr-2 h-5 w-5" />
              <span className="relative z-10">
                KI-Beratung starten
              </span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}