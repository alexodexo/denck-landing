// src/components/home/UseCasesSection.js
import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function UseCasesSection() {
  const scrollRef1 = useRef(null)
  const scrollRef2 = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  const useCasesRow1 = [
    'KI-Agent zur Email-Bearbeitung',
    'KI-basierte Schulungsplattform',
    'Terminbuchung für Praxen',
    'Digitales Datenmanagement',
    'WhatsApp Leadgen Agent',
    'KI-gestütztes CRM-System',
    'Kundensupport KI-Chatbot',
    'KI-basierter SEO-Content',
    'Recruiting KI-Telefon-Agent'
  ]

  const useCasesRow2 = [
    'KI-Telefonassistent E-Büro',
    'Kundensupport Voice-Agent',
    'Mitarbeiter Onboarding',
    'Corporate KI-Influencer',
    'Social Media KI-Agent',
    'Automatisiertes Email-System',
    'KI-Automatisierte Datenanalyse',
    'Blogartikel KI-Agent',
    'Newsletter KI-Agent'
  ]

  // Duplicate arrays for seamless infinite scroll
  const duplicatedRow1 = [...useCasesRow1, ...useCasesRow1]
  const duplicatedRow2 = [...useCasesRow2, ...useCasesRow2]

  useEffect(() => {
    const scrollContainer1 = scrollRef1.current
    const scrollContainer2 = scrollRef2.current
    if (!scrollContainer1 || !scrollContainer2) return

    let scrollPosition1 = 0
    let scrollPosition2 = scrollContainer2.scrollWidth / 2
    let animationId

    const scroll = () => {
      if (!isPaused) {
        // Row 1 scrolls left
        scrollPosition1 += 0.5
        if (scrollPosition1 >= scrollContainer1.scrollWidth / 2) {
          scrollPosition1 = 0
        }
        scrollContainer1.scrollLeft = scrollPosition1

        // Row 2 scrolls right
        scrollPosition2 -= 0.5
        if (scrollPosition2 <= 0) {
          scrollPosition2 = scrollContainer2.scrollWidth / 2
        }
        scrollContainer2.scrollLeft = scrollPosition2
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isPaused])

  const UseCaseCard = ({ title }) => (
    <div className="flex-shrink-0 bg-slate-800/90 backdrop-blur rounded-xl p-5 w-72 sm:w-80 hover:bg-slate-700/90 transition-all duration-300 cursor-pointer group use-case-glow">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-medium text-base sm:text-lg pr-3 leading-tight">
          {title}
        </h3>
        <div className="flex-shrink-0">
          <div className="w-12 h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full relative transition-all duration-300 group-hover:from-yellow-300 group-hover:to-yellow-400 shadow-lg">
            <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 group-hover:translate-x-6 shadow-sm"></div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-16 sm:py-20 overflow-hidden relative">
      <div className="container-width relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 bg-yellow-400/20 backdrop-blur border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
              Unbegrenzte Möglichkeiten
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Unendlich viele <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Use-Cases</span><br />
            mit <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">KI</span> möglich machen
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
            Entdecke die Zukunft der Geschäftsoptimierung mit unseren vielseitigen KI-Lösungen.
            Von Social Media-Agenten und automatisierten E-Mail-Systemen bis zu KI-gestützten
            CRM-Systemen und Chatbots – unsere KI-Tools revolutionieren dein Unternehmen.
            Steigere Effizienz in Recruiting, Datenmanagement und Kundensupport. Unsere KI-
            Lösungen maximieren deine Produktivität, vereinfachen tägliche Aufgaben und
            verschaffen dir mehr Zeit für strategisches Wachstum.
          </p>
        </div>

        <div className="space-y-4 -mx-4 sm:-mx-6 lg:-mx-8">
          {/* First Row - Scrolls Left */}
          <div 
            ref={scrollRef1}
            className="flex gap-4 overflow-hidden use-cases-scroll pl-4 sm:pl-6 lg:pl-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedRow1.map((useCase, index) => (
              <UseCaseCard key={`row1-${index}`} title={useCase} />
            ))}
          </div>

          {/* Second Row - Scrolls Right */}
          <div 
            ref={scrollRef2}
            className="flex gap-4 overflow-hidden use-cases-scroll pl-4 sm:pl-6 lg:pl-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedRow2.map((useCase, index) => (
              <UseCaseCard key={`row2-${index}`} title={useCase} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-8 text-base sm:text-lg">
            Bereit, Ihr Unternehmen mit KI zu transformieren?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/kontakt"
              className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Jetzt KI-Beratung sichern
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/leistungen"
              className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white border-2 border-slate-600 rounded-lg font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all duration-200"
            >
              Alle Leistungen ansehen
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}