import Link from 'next/link'
import { ArrowRight, Users, Target, TrendingUp, Clock, CheckCircle, Star, Phone, Mail, MapPin, User, Briefcase, Award, Shield, Lightbulb } from 'lucide-react'
import Hero from '../../components/common/Hero'
import CTASection from '../../components/common/CTASection'
import FAQSection from '../../components/common/FAQSection'

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Mario Egartner',
      role: 'Gründer & Geschäftsführer',
      expertise: 'Business Coaching, Systemische Beratung, Organisationsentwicklung',
      experience: 'Über 15 Jahre Coaching-Erfahrung, 7.000+ Einzelgespräche',
      background: 'Nach seinem Studium der Betriebswirtschaftslehre mit Schwerpunkt Psychologie sammelte Mario wertvolle Erfahrungen bei Kienbaum, Gemini Consulting und Odgers & Berndtson, bevor er 2002 C5 Business Partner gründete.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      specialties: ['Systemische Beratung', 'Kulturanalyse', 'Executive Coaching', 'Organisationsentwicklung']
    },
    {
      name: 'Jochen Grotenhöfer',
      role: 'Senior Berater/Coach/Trainer',
      expertise: 'Führungskräfteentwicklung, Change Management, Strategieberatung',
      experience: 'Über 18 Jahre Beratungserfahrung in der Organisationsentwicklung',
      background: 'Experte für komplexe Transformationsprojekte mit Fokus auf nachhaltige Veränderungsprozesse in Großunternehmen. Spezialisiert auf internationale Change-Projekte und kulturelle Transformation.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      specialties: ['Change Management', 'Strategieberatung', 'Führungskräfte-Training', 'Internationale Projekte']
    },
    {
      name: 'Brigitte Calmund',
      role: 'Senior Beraterin/Coach/Trainerin',
      expertise: 'Kulturanalyse, Teamdynamik, Diversity & Inclusion',
      experience: 'Über 16 Jahre Expertise in Kulturwandel und Teamarbeit',
      background: 'Spezialistin für Human Synergistics Tools und nachhaltige Kulturveränderungen mit besonderem Fokus auf Diversität und Integration. Führende Expertin für Organisationskultur-Diagnostik.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c886b23c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      specialties: ['Human Synergistics', 'Kulturanalyse', 'Diversity & Inclusion', 'Team-Entwicklung']
    },
    {
      name: 'Christof Schlachte',
      role: 'Senior Berater/Coach/Trainer',
      expertise: 'Assessment Center, Eignungsdiagnostik, Executive Coaching',
      experience: 'Über 20 Jahre Erfahrung in Personaldiagnostik und -entwicklung',
      background: 'Führender Experte für Eignungsdiagnostik und Assessment-Verfahren mit fundierter Ausbildung in psychologischer Diagnostik. Spezialist für Potenzialanalysen und Management-Diagnostik.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      specialties: ['Assessment Center', 'Eignungsdiagnostik', 'Potenzialanalyse', 'Management Audit']
    },
    {
      name: 'Alexander Denck',
      role: 'Senior Berater/Coach',
      expertise: 'Digitale Transformation, Agile Methoden, Prozessoptimierung',
      experience: 'Über 12 Jahre Erfahrung in der digitalen Transformation',
      background: 'Spezialist für agile Transformationsprozesse und digitale Geschäftsmodelle mit fundierter Expertise in Lean Management und Scrum. Führt Unternehmen erfolgreich durch digitale Wandlungsprozesse.',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      specialties: ['Digitale Transformation', 'Agile Methoden', 'Prozess-Optimierung', 'Scrum & Lean']
    }
  ]

  const teamStats = [
    { number: '5', label: 'Experten im Netzwerk', icon: Users },
    { number: '85+', label: 'Jahre Gesamterfahrung', icon: Award },
    { number: '1.200+', label: 'Projekte gemeinsam', icon: Target },
    { number: '100%', label: 'Erfolgsquote', icon: Star }
  ]

  const teamValues = [
    {
      icon: Users,
      title: 'Komplementäre Expertise',
      description: 'Jeder Berater bringt seine individuellen Stärken ein - gemeinsam decken wir alle Aspekte der Transformation ab.'
    },
    {
      icon: Shield,
      title: 'Vertrauensvolle Zusammenarbeit',
      description: 'Über 20 Jahre gewachsenes Vertrauen und bewährte Zusammenarbeit im Netzwerk.'
    },
    {
      icon: Target,
      title: 'Geteiltes Wissen',
      description: 'Unsere Kunden profitieren vom geballten Wissen und der Erfahrung des gesamten Teams.'
    },
    {
      icon: TrendingUp,
      title: 'Kontinuierliche Entwicklung',
      description: 'Wir entwickeln uns ständig weiter und bringen neue Methoden und Ansätze in unsere Arbeit ein.'
    }
  ]

  const clientTestimonials = [
    {
      text: "Von allen Beratern, die ich kennenlernen durfte, war das die angenehmste und offenste Zusammenarbeit. Sie war auch erfolgreich.",
      author: "CEO, Dienstleistungsunternehmen",
      company: "300 Mitarbeiter",
      rating: 5
    },
    {
      text: "Die Zusammenarbeit mit diesem Unternehmen hat mich absolut überzeugt. Ich würde mich jederzeit wieder dafür entscheiden und kann es nur weiterempfehlen.",
      author: "Geschäftsbereichsleiter, Maschinenbau", 
      company: "5 Mrd. Gesamtumsatz",
      rating: 5
    },
    {
      text: "C5 Business Partner hat uns bei der Kulturanalyse und Transformation hervorragend begleitet. Die Ergebnisse sprechen für sich - unsere Mitarbeiterzufriedenheit ist um 40% gestiegen.",
      author: "Vorstand Personal",
      company: "Internationaler Konzern",
      rating: 5
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Unser Expertenteam"
        subtitle="Ein bewährtes Netzwerk aus warmer Hand"
        description="Lernen Sie die Köpfe hinter C5 Business Partner kennen - ein eingespieltes Team mit über 85 Jahren Gesamterfahrung in der Beratung."
        primaryCTA={{
          text: 'Kontakt aufnehmen',
          href: '/transformationskontinuum/kontakt'
        }}
        secondaryCTA={{
          text: 'Unsere Leistungen',
          href: '/transformationskontinuum/leistungen'
        }}
        backgroundType="gradient"
      />

      {/* Team Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
              Unser Geheimnis? Wir sind ein Netzwerk aus warmer Hand
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Unsere Berater kennen sich seit über 20 Jahren und bringen sich nach ihren Anforderungen 
              als Berater, Mediator und Coach ein. Durch unsere unterschiedlichen Interessen und Erfahrungen 
              ergänzen wir uns ideal, ohne die Zusammenarbeit im Team aus den Augen zu verlieren.
            </p>
          </div>

          {/* Team Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div 
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Statistics */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Unser Team in Zahlen</h2>
            <p className="text-xl text-gray-300">Gemeinsame Stärke durch individuelle Expertise</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-primary-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Unsere Berater</h2>
            <p className="section-subtitle">
              Jeder Experte mit seiner individuellen Stärke - gemeinsam unschlagbar
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden animate-slide-up animation-delay-${index * 200}`}
              >
                {/* Member Image */}
                <div className="aspect-video">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">{member.name}</h3>
                    <p className="text-primary-600 font-semibold text-lg mb-4">{member.role}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="font-semibold text-navy-900 mb-1">Expertise:</h4>
                        <p className="text-gray-700 text-sm">{member.expertise}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900 mb-1">Erfahrung:</h4>
                        <p className="text-gray-700 text-sm">{member.experience}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.background}</p>
                    
                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-navy-900 mb-3">Schwerpunkte:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, specialtyIndex) => (
                          <span 
                            key={specialtyIndex}
                            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Was Kunden über unser Team sagen</h2>
            <p className="section-subtitle">
              Authentische Erfahrungen aus über 20 Jahren erfolgreicher Zusammenarbeit
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 animate-slide-up animation-delay-${index * 200}`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="border-t border-gray-200 pt-4">
                  <cite className="font-semibold text-navy-900 not-italic">
                    {testimonial.author}
                  </cite>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Strength */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Die Stärke des Netzwerks
              </h2>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Was uns einzigartig macht: Jeder unserer Berater ist ein Experte auf seinem Gebiet, 
                aber keiner arbeitet allein. Wenn ein Projekt spezielle Anforderungen hat, 
                ziehen wir die passenden Experten aus unserem Netzwerk hinzu.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Lightbulb className="h-6 w-6 text-primary-200" />
                  <span className="text-primary-100">Interdisziplinäre Zusammenarbeit</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-primary-200" />
                  <span className="text-primary-100">Geteiltes Wissen und Erfahrung</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-primary-200" />
                  <span className="text-primary-100">Präzise Projektbesetzung</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-primary-200" />
                  <span className="text-primary-100">Höchste Qualitätsstandards</span>
                </li>
              </ul>
              
              <Link
                href="/transformationskontinuum/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white border border-transparent rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Unser Team kennenlernen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-white/10 rounded-full p-8 backdrop-blur-sm border border-white/20">
                <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center">
                  <Users className="h-32 w-32 text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
              Lernen Sie uns persönlich kennen
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Besuchen Sie uns in unserem Beraterhaus in Frankfurt oder vereinbaren Sie 
              ein unverbindliches Kennenlern-Gespräch mit dem passenden Experten für Ihr Projekt.
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="font-semibold text-navy-900 mb-4">Unser Standort:</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>C5 Business Partner</strong></p>
                    <p>Beraterhaus im Hinterhaus</p>
                    <p>Günthersburgallee 82</p>
                    <p>60389 Frankfurt am Main</p>
                    <p>Deutschland</p>
                  </div>
                </div>
                
                <div className="text-left">
                  <h3 className="font-semibold text-navy-900 mb-4">Kontakt:</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Telefon:</strong> 069 - 9753 4441</p>
                    <p><strong>E-Mail:</strong> info@c5-business-partner.de</p>
                    <p className="mt-4 text-sm">
                      <strong>Öffnungszeiten:</strong><br />
                      Mo - Fr: 9:00 - 18:00<br />
                      Sa - So: Geschlossen
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Link
              href="/transformationskontinuum/kontakt" 
              className="btn-primary text-lg px-8 py-4"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection variant="transformation" />

      {/* CTA Section */}
      <CTASection variant="transformation" />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Unser Team - C5 Business Partner',
      description: 'Lernen Sie unser Expertenteam kennen: Über 85 Jahre Gesamterfahrung in Organisationsentwicklung und Transformation. Mario Egartner, Jochen Grotenhöfer, Brigitte Calmund, Christof Schlachte und Alexander Denck.'
    }
  }
}