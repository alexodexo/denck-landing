import Link from 'next/link'
import { ArrowRight, Users, User, Target, CheckCircle, Phone, Mail, MapPin, Star, TrendingUp, Award, Shield, Eye, Heart, Compass, Handshake, HeartHandshake } from 'lucide-react'

export default function HomePage() {
  // Die 5 Cs nach Warren Bennis - Neue Kernwerte
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

  const stats = [
    { number: '375+', label: 'Erfolgreiche Projekte', icon: Target },
    { number: '20+', label: 'Jahre Erfahrung', icon: Award },
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
      {/* Hero Section with Video Background */}
      <section className="relative text-white overflow-hidden min-h-screen flex items-center">
        {/* Background Image as fallback */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900"></div>
          {/* Try video first, fallback to gradient */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => e.target.style.display = 'none'}
          >
            <source
              src="https://bwed8tnhqzhe5qrs.public.blob.vercel-storage.com/WhatsApp%20Video%202025-06-07%20at%2021.33.55-rUiRQfeCeeyKwkkV3kzLjp97v2NscT.mp4"
              type="video/mp4"
            />
          </video>
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 drop-shadow bg-orange-600 text-white px-4 py-2 inline-block">
                Transformationskontinuum
              </h1>
              <p className="text-2xl sm:text-3xl text-blue-200 font-semibold mb-8 drop-shadow-md">
                Von der Kultur über das Team zum Individuum
              </p>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                Excellence in Transformation - Ganzheitliche Begleitung für nachhaltige Veränderungen
                auf drei Ebenen der Organisation.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Transformationskontinuum Overview - JETZT ZWEITE SEKTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-4xl font-bold text-gray-900 mb-4">Von der Kulturbererhebung bis zur systemische Implementierung </h2>
          </div>

          {/* Three Levels of Transformation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Level 1: Kulturberatung */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-400  rounded-2xl p-6 lg:p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-video mb-4 lg:mb-6 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Frankfurter Hochhäuser - Außenperspektive auf Unternehmen"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mb-4 lg:mb-6">

                <h3 className="text-xl lg:text-2xl font-bold mb-2 text-center">Kulturberatung</h3>
                <p className="text-base lg:text-lg font-semibold text-white/80 mb-3 lg:mb-4 text-center">Organisation</p>
                <p className="text-sm lg:text-base text-white/90 leading-relaxed mb-4 lg:mb-6">
                  Der Blick von außen auf Ihre Organisation. Wir analysieren Ihre Unternehmenskultur
                  objektiv und entwickeln strategische Transformationspläne.
                </p>
              </div>

              <div className="mb-4 lg:mb-6">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                    Human Synergistics Kulturanalyse
                  </li>
                  <li className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                    Strategische Transformationsberatung
                  </li>
                  <li className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                    Change Management
                  </li>
                </ul>
              </div>

              <Link
                href="/transformationskontinuum/leistungen#organisation"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold bg-white text-gray-900 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 group"
              >
                Organisationslösungen
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Level 2: Teamberatung */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-6 lg:p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-video mb-4 lg:mb-6 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Fröhliches Team bei der Zusammenarbeit am Laptop"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mb-4 lg:mb-6">

                <h3 className="text-xl lg:text-2xl font-bold mb-2 text-center">Transformationsberatung</h3>
                <p className="text-base lg:text-lg font-semibold text-white/80 mb-3 lg:mb-4 text-center">Team & Führungskräfte</p>
                <p className="text-sm lg:text-base text-white/90 leading-relaxed mb-4 lg:mb-6">
                  Teams unterstützen, symbiosieren und weiterentwickeln. Wir schaffen nachhaltige
                  Verbesserungen in der Zusammenarbeit und Teamdynamik.
                </p>
              </div>

              <div className="mb-4 lg:mb-6">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                    Teamworkshops & Teamdynamik
                  </li>
                  <li className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                    Führungskräfte-Begleitung
                  </li>
                  <li className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                    Konfliktmoderation
                  </li>
                </ul>
              </div>

              <Link
                href="/transformationskontinuum/leistungen#team"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold bg-white text-gray-900 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 group"
              >
                Teamlösungen
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Level 3: Individualberatung */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-6 lg:p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="aspect-video mb-4 lg:mb-6 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Coaching-Gespräch zwischen zwei Menschen mit KI-Elementen"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mb-4 lg:mb-6">

                <h3 className="text-xl lg:text-2xl font-bold mb-2 text-center">Coachingbegleitung</h3>
                <p className="text-base lg:text-lg font-semibold text-white/80 mb-3 lg:mb-4 text-center">Individuum</p>
                <p className="text-sm lg:text-base text-white/90 leading-relaxed mb-4 lg:mb-6">
                  Ihre Mitarbeiter unterstüzen Ihr Potenzialen zu entfalten, in Krisen zu begleiten und Veränderungen anzunehmen.
                </p>
              </div>

              <div className="mb-4 lg:mb-6">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                    Business & Karriere Coaching
                  </li>
                  <li className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                    Nutzung von Potenzialanalysen
                  </li>
                  <li className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                    Systemische Beratung
                  </li>
                </ul>
              </div>

              <Link
                href="/transformationskontinuum/leistungen#coaching"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold bg-white text-gray-900 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 group"
              >
                Coachinglösung
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - JETZT DRITTE SEKTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
                {philosophy.subtitle}
              </h2>
              <blockquote className="text-2xl font-light text-blue-600 italic mb-6 leading-relaxed">
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
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-100 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Team bei der Zusammenarbeit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics - Vertrauen durch Erfahrung - VIERTE SEKTION */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-orange-400">Vertrauen durch Erfahrung</h2>
            <p className="text-xl text-gray-300">Unsere Erfolgsbilanz in Zahlen</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-orange-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-800 font-medium">
                    {stat.label}
                  </div>
                </div>
              )
            })}
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

      {/* Strategy, Planning & Contact - Combined Section */}
      <section className="py-5 bg-blue-600 text-white">

        {/* Contact Section */}
        <div className=" border-white/20 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 drop-shadow  bg-orange-600 text-white px-4 py-2 inline-block">
              Lassen Sie uns sprechen
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Transformation beginnt mit einem Gespräch. Kontaktieren Sie uns für eine
              unverbindliche Beratung und entdecken Sie die Möglichkeiten für Ihr Unternehmen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 text-lg">
                <Phone className="h-8 w-8 text-blue-200" />
                <a
                  href="tel:069-97534440"
                  className="hover:text-blue-200 transition-colors duration-200 font-semibold"
                >
                  069 - 9753 4440
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 text-lg">
                <Mail className="h-8 w-8 text-blue-200" />
                <a
                  href="mailto:berater@c5-business-partner.de"
                  className="hover:text-blue-200 transition-colors duration-200 font-semibold"
                >
                  berater@c5-business-partner.de
                </a>
              </div>
            </div>

            <div className="text-center">
              <p className="text-blue-100 mb-8 text-lg">
                <MapPin className="inline-block h-6 w-6 mr-2" />
                <strong>Standort:</strong> Günthersburgallee 82, 60389 Frankfurt am Main
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/transformationskontinuum/kontakt"
                  className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-blue-600 bg-white border border-transparent rounded-lg shadow-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  Strategiegespräch vereinbaren
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

              </div>
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
      title: 'Excellence in Transformation - C5 Business Partner',
      description: 'Ganzheitliche Transformation von der Organisationskultur bis zur individuellen Entwicklung. C5 Business Partner und Frankfurt Business Coach - Ihr Netzwerk für nachhaltige Veränderung.'
    }
  }
}