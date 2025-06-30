import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQSection({ 
  variant = 'transformation', 
  className = '',
  title = 'Häufig gestellte Fragen',
  subtitle = 'Hier finden Sie Antworten auf die wichtigsten Fragen'
}) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = {
    transformation: [
      {
        question: 'Was ist das Transformationskontinuum?',
        answer: 'Das Transformationskontinuum ist unser ganzheitlicher Ansatz zur Organisationsentwicklung, der drei Ebenen umfasst: Organisation (Kulturanalyse und strategische Ausrichtung), Team (Teamdynamik und Führung) und Individuum (Coaching und Personalentwicklung). Dieser Ansatz ermöglicht es uns, Transformationsprozesse auf allen relevanten Ebenen zu begleiten und nachhaltige Veränderungen zu schaffen.'
      },
      {
        question: 'Wie lange dauert ein typisches Transformationsprojekt?',
        answer: 'Die Dauer variiert je nach Projektumfang und Organisationsgröße. Kleinere Projekte können 3-6 Monate dauern, während umfassende Transformationsprojekte 12-24 Monate in Anspruch nehmen können. Wir entwickeln gemeinsam mit Ihnen einen realistischen Zeitplan, der Ihre spezifischen Bedürfnisse und Ziele berücksichtigt.'
      },
      {
        question: 'Was kostet eine Beratung bei C5 Business Partner?',
        answer: 'Unsere Preise sind projektspezifisch und richten sich nach Umfang, Komplexität und Dauer der Beratung. Wir bieten sowohl Tagessätze als auch Projektpauschalen an. Gerne erstellen wir Ihnen nach einem unverbindlichen Erstgespräch ein individuelles Angebot, das transparent alle Leistungen und Kosten aufführt.'
      },
      {
        question: 'Welche Branchen betreuen Sie hauptsächlich?',
        answer: 'Wir haben langjährige Erfahrung in verschiedenen Branchen, insbesondere Finanzdienstleistungen, Versicherungen, Automobilindustrie, Technologie und Maschinenbau. Unser Netzwerk von Beratern bringt spezifische Branchenkenntnisse mit, sodass wir auch branchenspezifische Herausforderungen verstehen und adressieren können.'
      },
      {
        question: 'Wie messen Sie den Erfolg Ihrer Beratung?',
        answer: 'Wir definieren gemeinsam mit Ihnen zu Projektbeginn klare, messbare Ziele und KPIs. Diese können quantitative Kennzahlen (z.B. Mitarbeiterzufriedenheit, Produktivitätssteigerung) oder qualitative Faktoren (z.B. Kulturwandel, Führungsverhalten) umfassen. Regelmäßige Reviews und Erfolgsmessungen stellen sicher, dass wir auf Kurs bleiben.'
      },
      {
        question: 'Arbeitet ihr auch remote oder nur vor Ort?',
        answer: 'Wir arbeiten hybrid - je nach Projektanforderung vor Ort, remote oder in einer Mischform. Viele unserer Workshops und Trainings führen wir erfolgreich online durch. Für Kulturanalysen und tiefgreifende Transformationsprojekte ist oft ein Mix aus Präsenz- und Remote-Terminen optimal.'
      }
    ],
    coaching: [
      {
        question: 'Was ist Business Coaching und für wen ist es geeignet?',
        answer: 'Business Coaching ist eine professionelle Begleitung für Führungskräfte, Unternehmer und Fachkräfte, die ihre beruflichen Herausforderungen reflektieren und Lösungen entwickeln möchten. Es eignet sich für alle, die ihre Führungskompetenzen stärken, Karriereziele erreichen oder berufliche Veränderungen erfolgreich gestalten wollen.'
      },
      {
        question: 'Wie läuft ein Coaching-Prozess ab?',
        answer: 'Jeder Coaching-Prozess beginnt mit einem unverbindlichen Erstgespräch, in dem wir Ihre Situation und Ziele besprechen. Danach vereinbaren wir einen individuellen Coaching-Plan mit regelmäßigen Terminen (meist alle 2-4 Wochen). Die Sitzungen dauern in der Regel 90 Minuten und finden wahlweise persönlich in Frankfurt oder online statt.'
      },
      {
        question: 'Was kostet ein Coaching bei Ihnen?',
        answer: 'Eine Coaching-Sitzung (90 Minuten) kostet 180€. Für regelmäßige Coaching-Prozesse biete ich attraktive Paketpreise an. Das Erstgespräch (30 Minuten) ist kostenlos und unverbindlich. Alle Preise verstehen sich inkl. MwSt.'
      },
      {
        question: 'Ist Coaching auch online möglich?',
        answer: 'Ja, Online-Coaching via Zoom, Skype oder Teams ist genauso wirkungsvoll wie persönliche Treffen. Viele meiner Kunden schätzen die Flexibilität und Zeitersparnis. Gerade für regelmäßige Coaching-Termine ist Online-Coaching eine praktische Alternative.'
      },
      {
        question: 'Wie vertraulich sind unsere Gespräche?',
        answer: 'Absolute Vertraulichkeit ist für mich selbstverständlich und professioneller Standard. Alle Gespräche unterliegen der Schweigepflicht. Inhalte werden niemals an Dritte weitergegeben - auch nicht an Ihren Arbeitgeber, falls das Coaching über das Unternehmen beauftragt wird.'
      },
      {
        question: 'Bieten Sie auch Paarberatung an?',
        answer: 'Ja, ich biete systemische Paarberatung und Paartherapie an. Die Grenzen zwischen beruflichen und privaten Herausforderungen sind oft fließend. Mit über 7.000 Beratungsgesprächen bringe ich Erfahrung in beiden Bereichen mit.'
      }
    ]
  }

  const currentFAQs = faqs[variant] || faqs.transformation

  return (
    <section className={`section-padding bg-gray-50 ${className}`}>
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {currentFAQs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-navy-900 pr-4">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Haben Sie weitere Fragen?
          </p>
          <a
            href={variant === 'coaching' 
              ? 'mailto:egartner@frankfurt-business-coach.de' 
              : 'mailto:info@c5-business-partner.de'
            }
            className="btn-primary"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  )
}