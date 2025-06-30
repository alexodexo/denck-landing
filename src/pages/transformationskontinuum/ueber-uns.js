import Link from 'next/link'
import { ArrowRight, Users, Target, TrendingUp, Clock, Shield, Heart, Eye, HeartHandshake, CheckCircle, Star, Phone, Mail, MapPin, User, Briefcase, Award } from 'lucide-react'
import Hero from '../../components/common/Hero'
import CTASection from '../../components/common/CTASection'


export default function TransformationAbout() {
  const coreValues = [
    {
      icon: Award,
      title: 'Kompetenz',
      subtitle: 'Competence',
      description: 'Mit über 20 Jahren Beratungserfahrung und wissenschaftlich fundierten Methoden bringen wir bewährte Expertise in jedes Projekt ein. Unser Team verfügt über tiefgreifende Fachkenntnisse in allen Bereichen der Transformation.',
      color: 'primary',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Shield,
      title: 'Kontinuität',
      subtitle: 'Constancy',
      description: 'Beständigkeit und Verlässlichkeit prägen unsere Arbeitsweise. Wir stehen für langfristige Partnerschaften und begleiten Sie durchgehend auf Ihrem Transformationsweg.',
      color: 'navy',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Heart,
      title: 'Fürsorge',
      subtitle: 'Care',
      description: 'Wir sehen unsere Aufgabe darin, Menschen in ihrer Ganzheit und Einzigartigkeit wahrzunehmen, zu respektieren und zu fördern. Echte Fürsorge für unsere Kunden und deren Erfolg steht im Mittelpunkt.',
      color: 'primary',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Eye,
      title: 'Offenheit',
      subtitle: 'Candor',
      description: 'Offene, ehrliche Kommunikation und transparente Prozesse sind unser Markenzeichen. Wir sprechen Klartext und schaffen Transparenz in allen Projektphasen.',
      color: 'navy',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: HeartHandshake,
      title: 'Glaubwürdigkeit',
      subtitle: 'Congruity',
      description: 'Übereinstimmung zwischen Worten und Taten, zwischen Versprechen und Erfüllung. Unsere langjährige Erfolgsbilanz spricht für sich und macht uns zu einem verlässlichen Partner.',
      color: 'primary',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ]

  const teamMembers = [
    {
      name: 'Mario Egartner',
      role: 'Gründer & Geschäftsführer',
      expertise: 'Business Coaching, Systemische Beratung, Organisationsentwicklung',
      experience: 'Über 15 Jahre Coaching-Erfahrung, 7.000+ Einzelgespräche',
      background: 'Nach seinem Studium der Betriebswirtschaftslehre mit Schwerpunkt Psychologie sammelte Mario wertvolle Erfahrungen bei Kienbaum, Gemini Consulting und Odgers & Berndtson, bevor er 2002 C5 Business Partner gründete.',
      image: '/team/mario-egartner.jpg'
    },
    {
      name: 'Jochen Grotenhöfer',
      role: 'Senior Berater/Coach/Trainer',
      expertise: 'Führungskräfteentwicklung, Change Management, Strategieberatung',
      experience: 'Über 18 Jahre Beratungserfahrung in der Organisationsentwicklung',
      background: 'Experte für komplexe Transformationsprojekte mit Fokus auf nachhaltige Veränderungsprozesse in Großunternehmen.',
      image: '/team/jochen-grotenhoefer.jpg'
    },
    {
      name: 'Brigitte Calmund',
      role: 'Senior Beraterin/Coach/Trainerin',
      expertise: 'Kulturanalyse, Teamdynamik, Diversity & Inclusion',
      experience: 'Über 16 Jahre Expertise in Kulturwandel und Teamarbeit',
      background: 'Spezialistin für Human Synergistics Tools und nachhaltige Kulturveränderungen mit besonderem Fokus auf Diversität und Integration.',
      image: '/team/brigitte-calmund.jpg'
    },
    {
      name: 'Christof Schlachte',
      role: 'Senior Berater/Coach/Trainer',
      expertise: 'Assessment Center, Eignungsdiagnostik, Executive Coaching',
      experience: 'Über 20 Jahre Erfahrung in Personaldiagnostik und -entwicklung',
      background: 'Führender Experte für Eignungsdiagnostik und Assessment-Verfahren mit fundierter Ausbildung in psychologischer Diagnostik.',
      image: '/team/christof-schlachte.jpg'
    }
  ]

  const milestones = [
    {
      year: '2007',
      title: 'Gründung von C5 Business Partner',
      description: 'Mario Egartner gründet C5 Business Partner mit der Vision, Menschen und Organisationen bei nachhaltigen Transformationsprozessen zu begleiten.'
    },
    {
      year: '2013',
      title: 'Partnership mit Human Synergistics',
      description: 'Strategische Partnerschaft für wissenschaftlich fundierte Kulturanalysen und Organisationsentwicklung.'
    },
    {
      year: '2010',
      title: 'Erweiterung des Berater-Netzwerks',
      description: 'Aufbau des bewährten Experten-Teams mit spezialisierten Beratern für alle Transformationsebenen.'
    },
    {
      year: '2015',
      title: '500+ erfolgreiche Projekte',
      description: 'Meilenstein von über 500 erfolgreich durchgeführten Transformationsprojekten erreicht.'
    },
    {
      year: '2020',
      title: 'Digitale Innovation',
      description: 'Entwicklung des virtuellen Coaching-Ansatzes und Hybrid-Beratungskonzepte.'
    },
    {
      year: '2024',
      title: 'Excellence in Transformation',
      description: 'Über 20 Jahre Expertise, 7.000+ Gespräche und 95% Kundenzufriedenheit - C5 ist etablierter Partner für Transformation.'
    }
  ]

  const stats = [
    { number: '375+', label: 'Erfolgreiche Projekte', icon: Target },
    { number: '20+', label: 'Jahre Erfahrung', icon: Clock },
    { number: '95%', label: 'Kundenzufriedenheit', icon: Star },
    { number: '7.000+', label: 'Beratungsgespräche', icon: Users }
  ]



  const philosophy = {
    title: "Unser Geheimnis? Wir lieben unsere Arbeit und sind ein Netzwerk aus warmer Hand.",
    subtitle: "C5 - Wir vertrauen uns über Jahre einander an",
    description: "Unsere Berater kennen sich seit über 20 Jahren und bringen sich nach ihren Anforderungen als Berater, Mediator und Coach ein. Mit über 25 Jahren Erfahrung in verschiedenen Branchen sind wir ein äußerst verlässlicher Partner. Wir nehmen uns Ihrer Herausforderungen an und widmen uns unseren Projekten mit maximaler Energie und Aufmerksamkeit."
  }

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="C5 Business Partner"
        subtitle="Excellence in Transformation seit 2007"
        description="Wir sind ein bewährtes Netzwerk von Experten, die Organisationen, Teams und Menschen bei nachhaltigen Transformationsprozessen begleiten."
        primaryCTA={{
          text: 'Unser Team kennenlernen',
          href: '#team'
        }}
        secondaryCTA={{
          text: 'Leistungen entdecken',
          href: '/transformationskontinuum/leistungen'
        }}
        backgroundType="gradient"
      />

      {/* Philosophy Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                {philosophy.subtitle}
              </h2>
              <blockquote className="text-2xl font-light text-primary-600 italic mb-6 leading-relaxed">
                "{philosophy.title}"
              </blockquote>
              <p className="text-gray-700 leading-relaxed mb-8">
                {philosophy.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                Durch unsere unterschiedlichen Interessen und Erfahrungen ergänzen wir uns ideal.
                Dabei setzen alle unsere Berater auf ihre individuellen Schwerpunkte, ohne die
                Zusammenarbeit im Team aus den Augen zu verlieren. Gegenseitige Unterstützung ist
                für uns selbstverständlich, sodass unsere Kunden vom geballten Team-Wissen profitieren.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-navy-100 rounded-xl overflow-hidden shadow-lg">
                <div className="w-full h-full flex items-center justify-center">
                  <Users className="h-32 w-32 text-primary-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Die 5 Cs nach Warren Bennis - FÜNFTE SEKTION */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Die 5 Cs unserer Partnerschaft</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fünf Vertrauenselemente nach Warren Bennis - weil echter Erfolg auf Vertrauen basiert
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon
              if (!IconComponent) {
                console.error('Icon component is undefined for value:', value.title)
                return null
              }
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-blue-100 text-blue-600">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{value.title}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-3">{value.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vertrauen durch Erfahrung</h2>
            <p className="text-xl text-gray-300">Unsere Erfolgsbilanz in Zahlen</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
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

      {/* Team Section */}
      <section id="team" className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Unser Expertenteam</h2>
            <p className="section-subtitle">
              Lernen Sie die Köpfe hinter C5 Business Partner kennen - ein eingespieltes Team mit jeweils mehr als 15 Jahren Berufserfahrung
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up animation-delay-${index * 200}`}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-navy-100 rounded-full flex items-center justify-center">
                      <User className="h-12 w-12 text-primary-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">{member.name}</h3>
                    <p className="text-primary-600 font-semibold mb-4">{member.role}</p>

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

                    <p className="text-gray-600 text-sm leading-relaxed">{member.background}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Unsere Geschichte</h2>
            <p className="section-subtitle">
              Über 20 Jahre kontinuierliche Entwicklung und Wachstum
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-300" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start space-x-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                        {milestone.year.slice(-2)}
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-lg">
                      <div className="text-primary-600 font-bold text-sm mb-1">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-navy-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <CTASection variant="transformation" />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Über uns - C5 Business Partner',
      description: 'Lernen Sie C5 Business Partner kennen: Über 20 Jahre Erfahrung in Organisationsentwicklung und Transformation. Unser Expertenteam begleitet Sie nachhaltig zum Erfolg.'
    }
  }
}