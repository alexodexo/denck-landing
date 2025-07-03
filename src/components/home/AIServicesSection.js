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
      gradient: 'from-purple-400 to-pink-400',
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
      gradient: 'from-blue-400 to-cyan-400',
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
      gradient: 'from-green-400 to-emerald-400',
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
      gradient: 'from-yellow-400 to-orange-400',
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
      gradient: 'from-red-400 to-rose-400',
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
      gradient: 'from-indigo-400 to-purple-400',
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
        {/* Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 ${isActive ? 'opacity-40' : ''} blur-xl rounded-2xl transition-all duration-500`} />
        
        {/* Card */}
        <div className={`relative h-full bg-slate-800/60 backdrop-blur-xl border ${isActive ? 'border-transparent' : 'border-slate-700/50'} rounded-2xl p-6 overflow-hidden`}>
          {/* Active Border Gradient */}
          {isActive && (
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl`} style={{ padding: '2px' }}>
              <div className="bg-slate-800 w-full h-full rounded-2xl" />
            </div>
          )}
          
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <Sparkles className={`h-5 w-5 ${isActive ? 'text-yellow-400 animate-pulse' : 'text-slate-600'} transition-colors duration-300`} />
            </div>
            
            {/* Title & Description */}
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
              {service.title}
            </h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              {service.description}
            </p>
            
            {/* Features */}
            <ul className="space-y-2">
              {service.features.slice(0, isActive ? 4 : 2).map((feature, idx) => (
                <li 
                  key={idx} 
                  className={`flex items-center text-sm text-slate-300 transition-all duration-300 ${
                    idx >= 2 ? (isActive ? 'opacity-100 max-h-10' : 'opacity-0 max-h-0') : ''
                  }`}
                >
                  <CheckCircle className={`h-4 w-4 mr-2 flex-shrink-0 text-green-400`} />
                  {feature}
                </li>
              ))}
            </ul>
            
            {/* CTA */}
            <div className={`mt-4 overflow-hidden transition-all duration-500 ${isActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
              <button className={`group/btn flex items-center text-sm font-medium bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text`}>
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
    <section ref={sectionRef} className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Neural Network Animation */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10">
            <defs>
              <pattern id="neural-grid-ai" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="#64748b" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-grid-ai)" />
          </svg>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 right-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
        
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-[150px] opacity-20" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-[150px] opacity-20" />
      </div>

      <div className="container-width relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-600/50 rounded-full shadow-2xl">
              <Brain className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400" />
              <span className="font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text animate-gradient bg-300%">
                KI-Service Ökosystem
              </span>
              <Cpu className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400" />
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Vernetzte <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 animate-gradient bg-300%">KI-Lösungen</span><br />
            für maximale{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Effizienz</span>
              <Zap className="absolute -top-8 -right-8 w-6 h-6 text-yellow-400 animate-pulse" />
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
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
          <div className="inline-block mb-8 px-8 py-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50">
            <p className="text-lg text-slate-300">
              Entdecken Sie die Zukunft der Geschäftsautomatisierung
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/kontakt"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
            >
              <Bot className="mr-2 h-5 w-5" />
              <span className="relative z-10">
                KI-Beratung starten
              </span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}