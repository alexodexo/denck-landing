import Link from 'next/link'
import { GraduationCap, Briefcase, Heart, Mountain, Coffee, Award, Users, Target, Clock, Star } from 'lucide-react'
import Hero from '../../components/common/Hero'
import CTASection from '../../components/common/CTASection'
import FAQSection from '../../components/common/FAQSection'

export default function CoachProfile() {
  const personalInfo = {
    name: 'Mario Egartner',
    age: '51 Jahre',
    role: 'Business Coach & Berater',
    experience: 'Über 15 Jahre Coaching-Erfahrung',
    sessions: 'Über 7.000 Einzelgespräche',
    workshops: 'Über 500 Workshops'
  }

  const qualifications = [
    {
      title: 'Betriebswirtschaftslehre mit Schwerpunkt Psychologie',
      institution: 'Universität',
      type: 'Studium'
    },
    {
      title: 'Systemische Beratung und Coaching',
      institution: 'Verschiedene Institute',
      type: 'Fortbildung'
    },
    {
      title: 'Führungskräfte-Entwicklung',
      institution: 'Kienbaum, Gemini Consulting',
      type: 'Praxis'
    },
    {
      title: 'Mediation und Konfliktlösung',
      institution: 'Zertifiziert',
      type: 'Spezialisierung'
    }
  ]

  const careerStations = [
    {
      period: 'Seit 2002',
      company: 'Selbstständiger Coach & Berater',
      role: 'Frankfurt Business Coach / C5 Business Partner',
      description: 'Entwicklung und Etablierung coaching-basierter Beratungsansätze für berufliche und private Zielsetzungen.'
    },
    {
      period: '1998-2002',
      company: 'Kienbaum',
      role: 'Senior Consultant',
      description: 'Führende Personalberatung mit Fokus auf Executive Search und Organisationsentwicklung.'
    },
    {
      period: '1995-1998',
      company: 'Gemini Consulting',
      role: 'Management Consultant',
      description: 'Strategieberatung und Transformationsprojekte für Großunternehmen.'
    },
    {
      period: '1992-1995',
      company: 'Odgers & Berndtson',
      role: 'Consultant',
      description: 'Internationale Executive Search Boutique mit Schwerpunkt auf Führungskräfte-Rekrutierung.'
    }
  ]

  const personalValues = [
    {
      icon: Heart,
      title: 'Respekt & Wertschätzung',
      description: 'Ich sehe meine Aufgabe darin, Menschen in ihrer Ganzheit und Einzigartigkeit wahr zu nehmen, zu respektieren und zu fördern.'
    },
    {
      icon: Target,
      title: 'Lösungsorientiert',
      description: 'Mein Beratungsansatz basiert auf einer systemischen Betrachtungsweise mit pragmatischen Lösungsansätzen.'
    },
    {
      icon: Users,
      title: 'Aktives Zuhören',
      description: 'Respekt, Wertschätzung und aktives Zuhören bilden die Basis für eine vertrauensvolle Zusammenarbeit.'
    }
  ]

  const personalInterests = [
    {
      icon: Mountain,
      title: 'Bergsteigen & Wandern',
      description: 'Als Österreicher bin ich den Bergen verbunden und suche als Ausdauersportler immer wieder neue Herausforderungen.'
    },
    {
      icon: Coffee,
      title: 'Frankfurter Skyline',
      description: 'Ich liebe guten Kaffee und die Skyline Frankfurts – die perfekte Kombination für inspirierende Gespräche.'
    },
    {
      icon: GraduationCap,
      title: 'Lebenslanges Lernen',
      description: 'Mein Interesse und meine Neugier an Land und Leuten ermuntern mich, viel zu reisen und neue Wege zu gehen.'
    }
  ]

  const testimonials = [
    {
      text: "Mario Egartner hat eine einzigartige Fähigkeit, komplexe Situationen zu durchschauen und auf den Punkt zu bringen. Seine empathische Art macht ihn zu einem außergewöhnlichen Coach.",
      author: "Führungskraft, Finanzdienstleistung",
      rating: 5
    },
    {
      text: "Die Zusammenarbeit war von Vertrauen und Professionalität geprägt. Mario hat mir geholfen, meine Führungsrolle authentisch zu gestalten.",
      author: "Geschäftsführerin, Mittelstand",
      rating: 5
    },
    {
      text: "Pragmatisch, lösungsorientiert und immer mit dem nötigen Fingerspitzengefühl. Genau das, was ich als Führungskraft gebraucht habe.",
      author: "Projektleiter, IT-Konzern",
      rating: 5
    }
  ]

  const stats = [
    { number: '7.000+', label: 'Einzelgespräche' },
    { number: '500+', label: 'Workshops' },
    { number: '15+', label: 'Jahre Erfahrung' },
    { number: '100%', label: 'Vertraulichkeit' }
  ]

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Mario Egartner"
        subtitle="Ihr Wegbegleiter als Business Coach"
        description="51 Jahre, Familienvater und seit über 15 Jahren professioneller Begleiter auf individuellen Wegen. Mit über 7.000 Gesprächen und umfassender Methodenexpertise."
        primaryCTA={{
          text: 'Erstgespräch vereinbaren',
          href: '/frankfurt-business-coach/kontakt'
        }}
        secondaryCTA={{
          text: 'Leistungen entdecken',
          href: '/frankfurt-business-coach/leistungen'
        }}
      />

      {/* Personal Introduction */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary-100 to-navy-100 rounded-xl overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  {/* Placeholder for Mario's professional photo */}
                  <div className="w-72 h-72 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm">Mario Egartner</span>
                  </div>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">7.000+</div>
                    <div className="text-xs text-gray-600">Gespräche</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600">15+</div>
                    <div className="text-xs text-gray-600">Jahre</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
                  Mein Name ist Mario Egartner
                </h2>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                  <div><strong>Alter:</strong> {personalInfo.age}</div>
                  <div><strong>Status:</strong> Familienvater</div>
                  <div><strong>Erfahrung:</strong> {personalInfo.experience}</div>
                  <div><strong>Gespräche:</strong> {personalInfo.sessions}</div>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Neugierig, offen und interessiert begleite ich seit über 15 Jahren Menschen auf ihren 
                  individuellen Wegen. Neben meinen praktischen Erfahrungen aus über 7.000 Einzelgesprächen 
                  und 500 Workshops bringe ich meine methodischen Kenntnisse aus Studium und zahlreichen 
                  Fortbildungen in meine tägliche Arbeit ein.
                </p>
                
                <p>
                  Als Coach bin ich Ihr Wegbegleiter. Als Österreicher nutze ich das Bild des Bergführers: 
                  Dieser kennt seine Berge und findet auch bei Wind und Wetter einen sicheren Weg. Er kann 
                  Situationen und Lage deuten, weiß um die Kräfte seiner Kunden und kann daher Gefahren 
                  sicher einschätzen.
                </p>
                
                <blockquote className="text-lg text-primary-600 font-semibold italic border-l-4 border-primary-300 pl-6 my-6">
                  "Ich sehe meine Aufgabe darin, Menschen in ihrer Ganzheit und Einzigartigkeit wahr zu nehmen, 
                  zu respektieren und zu fördern."
                </blockquote>
                
                <p>
                  So begleitet, lotst und führt er seine Kunden sicher zum Gipfel. Das Gefühl am Gipfel, 
                  wenn das Ziel erreicht ist, vergisst man nie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Meine Arbeitsweise</h2>
            <p className="section-subtitle">
              Respekt, Wertschätzung und aktives Zuhören bilden die Basis für eine vertrauensvolle Zusammenarbeit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personalValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up animation-delay-${index * 200}`}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Career Journey */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Mein beruflicher Werdegang</h2>
            <p className="section-subtitle">
              Von führenden Beratungshäusern zum selbstständigen Coach – eine Reise der kontinuierlichen Entwicklung
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {careerStations.map((station, index) => (
                <div 
                  key={index}
                  className={`flex flex-col lg:flex-row gap-6 p-6 bg-gray-50 rounded-xl animate-slide-up animation-delay-${index * 200}`}
                >
                  <div className="lg:w-32 flex-shrink-0">
                    <div className="text-sm font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full inline-block">
                      {station.period}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-navy-900 mb-1">{station.company}</h3>
                    <p className="text-primary-600 font-semibold mb-3">{station.role}</p>
                    <p className="text-gray-700">{station.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Qualifikationen & Fortbildungen</h2>
            <p className="section-subtitle">
              Fundierte Ausbildung kombiniert mit kontinuierlicher Weiterentwicklung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {qualifications.map((qual, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-primary-600 mb-1 uppercase">{qual.type}</div>
                    <h3 className="font-semibold text-navy-900 mb-2">{qual.title}</h3>
                    <p className="text-sm text-gray-600">{qual.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Was mich bewegt</h2>
            <p className="section-subtitle">
              Meine Leidenschaften und Interessen, die meine Arbeit als Coach bereichern
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personalInterests.map((interest, index) => {
              const IconComponent = interest.icon
              return (
                <div 
                  key={index}
                  className={`text-center animate-slide-up animation-delay-${index * 200}`}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 text-primary-600 mb-6">
                    <IconComponent className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-4">{interest.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{interest.description}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meine Erfahrung in Zahlen</h2>
            <p className="text-xl text-gray-300">Vertrauen durch bewiesene Expertise</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Was Kunden sagen</h2>
            <p className="section-subtitle">
              Authentische Erfahrungen aus über 15 Jahren Coaching-Praxis
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <cite className="text-sm text-gray-500 not-italic">
                  — {testimonial.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-width text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Lassen Sie uns sprechen
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Diskretion und absolute Vertraulichkeit sind für mich selbstverständlich. 
            Kontaktieren Sie mich für ein unverbindliches Erstgespräch.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="text-lg">
              <strong>Günthersburgallee 82, Beraterhaus / Hinterhaus</strong>
            </div>
            <div className="text-lg">
              <strong>60389 Frankfurt am Main (Nordend / Bornheim / Mitte)</strong>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg">
              <span><strong>Telefon:</strong> 069 - 9753 4441</span>
              <span className="hidden sm:inline">|</span>
              <span><strong>E-Mail:</strong> egartner@frankfurt-business-coach.de</span>
            </div>
          </div>
          
          <Link
            href="/frankfurt-business-coach/kontakt"
            className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
          >
            Kontakt aufnehmen
          </Link>
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
      title: 'Mario Egartner - Frankfurt Business Coach',
      description: 'Lernen Sie Mario Egartner kennen: 51 Jahre, über 15 Jahre Coaching-Erfahrung, mehr als 7.000 Einzelgespräche. Ihr professioneller Business Coach in Frankfurt.'
    }
  }
}