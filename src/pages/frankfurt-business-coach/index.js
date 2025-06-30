import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Users, Briefcase, GraduationCap, MapPin, Clock, Star, CheckCircle } from 'lucide-react'
import CTASection from '../../components/common/CTASection'
import FAQSection from '../../components/common/FAQSection'

export default function CoachHome() {
  const services = [
    {
      icon: Briefcase,
      title: 'Business Coaching (B2C)',
      description: 'Individuelle Begleitung bei beruflichen Herausforderungen, Karriereplanung und persönlichen Entwicklungszielen außerhalb des Unternehmenskontexts.',
      features: ['Karriereentwicklung', 'Work-Life-Balance', 'Persönlichkeitsentwicklung'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Users,
      title: 'Systemische Beratung & KI-Integration',
      description: 'Innovative Verbindung von systemischer Beratung mit KI-unterstützten Coaching-Tools. Vertrauensvolle Mensch-zu-Mensch UND Mensch-zu-Maschine Kommunikation.',
      features: ['Systemische Beratung', 'KI-Chatbot & Voicebot', 'Paartherapie'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: GraduationCap,
      title: 'Individuelles Training',
      description: 'Maßgeschneiderte Trainings und Workshops für individuelle Kompetenzentwicklung mit modernster Technologie-Unterstützung.',
      features: ['Kommunikationstraining', 'Präsentationsskills', 'Digitale Lernbegleitung'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ]

  const coachingLocations = [
    'Frankfurt am Main',
    'Offenbach',
    'Darmstadt',
    'Wiesbaden',
    'Mainz',
    'Online deutschlandweit'
  ]

  const testimonials = [
    {
      text: "Mario Egartner hat mir geholfen, meine Führungsrolle authentisch zu gestalten. Seine empathische Art und professionelle Kompetenz haben den Unterschied gemacht.",
      author: "Führungskraft, Finanzdienstleistung",
      rating: 5
    },
    {
      text: "Das Coaching war genau das, was ich brauchte. Strukturiert, zielgerichtet und mit viel Verständnis für meine Situation.",
      author: "Projektleiterin, IT-Unternehmen",
      rating: 5
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container-width section-padding relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="hero-text mb-6">
                Frankfurt <span className="text-primary-400">Business Coach</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-primary-200 font-semibold mb-6">
                Individuelles Coaching mit KI-Innovation
              </p>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Persönliche Begleitung bei beruflichen und privaten Herausforderungen. 
                Als Pionier verbinde ich vertrauensvolle Mensch-zu-Mensch Kommunikation mit 
                innovativer KI-Technologie für optimale Ergebnisse.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 border border-white/20">
                <p className="text-primary-200 font-medium">
                  <strong>Innovation:</strong> Einzigartiger Dialog durch Chatbot & Voicebot - 
                  gleichwertig zu persönlichen Gesprächen mit Mario Egartner
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/frankfurt-business-coach/kontakt"
                  className="btn-primary bg-white text-navy-900 hover:bg-gray-100"
                >
                  Erstgespräch vereinbaren
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/frankfurt-business-coach/leistungen"
                  className="btn-outline border-white text-white hover:bg-white hover:text-navy-900"
                >
                  KI-Integration entdecken
                </Link>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="aspect-square bg-gradient-to-br from-primary-400/20 to-navy-600/20 rounded-full p-8 backdrop-blur-sm border border-white/20">
                <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center">
                  <Users className="h-32 w-32 text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Beratung, Coaching, Training</h2>
            <p className="section-subtitle">
              Professionelle Unterstützung für Ihre berufliche und persönliche Entwicklung mit innovativer KI-Integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 animate-slide-up animation-delay-${index * 200}`}
                >
                  {/* Service Image */}
                  <div className="aspect-video mb-6 rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* KI-Innovation Highlight */}
          <div className="mt-16 bg-gradient-to-br from-primary-50 to-navy-50 rounded-xl p-8 border border-primary-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">
                Pionier im KI-unterstützten Coaching
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Als Frankfurt Business Coach biete ich nicht nur traditionelles Coaching, sondern auch 
                innovative KI-Lösungen: Chatbot und Voicebot ermöglichen gleichwertigen Dialog zu 
                persönlichen Gesprächen - 24/7 verfügbar für Ihre Entwicklung.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-primary-600 mb-2">Mensch-zu-Mensch</h4>
                  <p className="text-sm text-gray-600">Vertrauensvolle persönliche Gespräche mit Mario Egartner</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-primary-600 mb-2">Mensch-zu-Maschine</h4>
                  <p className="text-sm text-gray-600">KI-basierte Chatbot & Voicebot Unterstützung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mario Egartner Profile Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary-100 to-navy-100 rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  {/* Placeholder for Mario's photo */}
                  <div className="w-64 h-64 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm">Mario Egartner Foto</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                Mario Egartner - Ihr Business Coach
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>51 Jahre, Familienvater und Wegbegleiter.</strong> Seit über 15 Jahren begleite ich Menschen 
                  auf ihren individuellen Wegen. Mit über 7.000 Einzelgesprächen und 500 Workshops bringe ich 
                  umfassende Praxis- und Methodenerfahrung mit.
                </p>
                <p>
                  Als Österreicher nutze ich gerne das Bild des Bergführers: Ich kenne die Wege, kann Situationen 
                  einschätzen und begleite Sie sicher zu Ihren Zielen. Das Gefühl am Gipfel, wenn das Ziel erreicht ist, 
                  vergisst man nie.
                </p>
                <p className="text-primary-600 font-semibold italic">
                  "Ich sehe meine Aufgabe darin, Menschen in ihrer Ganzheit und Einzigartigkeit wahr zu nehmen, 
                  zu respektieren und zu fördern."
                </p>
              </div>
              
              <div className="mt-8">
                <Link
                  href="/frankfurt-business-coach/coach"
                  className="btn-primary"
                >
                  Mehr über mich erfahren
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching in Frankfurt Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="section-title">Coaching in Frankfurt</h2>
            <p className="section-subtitle">
              Professionelle Begleitung in der Finanzmetropole und der gesamten Rhein-Main-Region
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {coachingLocations.map((location, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary-600" />
                    <span className="text-gray-700 text-sm">{location}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Flexible Termingestaltung</h3>
                    <p className="text-gray-700 text-sm">
                      Reguläre Termine Mo-Fr 9:00-18:00 Uhr.<br />
                      Abend- und Samstagstermine nach Absprache möglich.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-3">"{testimonial.text}"</p>
                  <p className="text-sm text-gray-500">— {testimonial.author}</p>
                </div>
              ))}
            </div>
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
      title: 'Business Coach Frankfurt',
      description: 'Mario Egartner - Ihr professioneller Business Coach in Frankfurt. Über 15 Jahre Erfahrung in Coaching, Beratung und Training für berufliche und private Herausforderungen.'
    }
  }
}