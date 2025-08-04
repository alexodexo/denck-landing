// src/components/common/FAQ.js - SEO-optimierte FAQ für DENCK Solutions
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Was macht DENCK Solutions und wer ist Alex Denck?",
      answer: "DENCK Solutions ist ein spezialisiertes Beratungsunternehmen für Künstliche Intelligenz, gegründet von Alex Denck. Wir helfen Unternehmen dabei, KI-Technologien erfolgreich zu implementieren und ihre Geschäftsprozesse zu automatisieren. Alex Denck bringt jahrelange Erfahrung in der KI-Beratung mit und hat bereits zahlreiche Unternehmen bei ihrer digitalen Transformation begleitet."
    },
    {
      question: "Wie kann DENCK Solutions meinem Unternehmen helfen?",
      answer: "DENCK Solutions bietet maßgeschneiderte KI-Lösungen: von der Strategieentwicklung über die Implementierung von KI-Agenten bis hin zur Prozessautomatisierung. Wir analysieren Ihre spezifischen Herausforderungen und entwickeln passende Lösungen, die nachweislich die Effizienz um 40% steigern und Kosten um 30% senken können."
    },
    {
      question: "Was kostet eine KI-Beratung bei DENCK Solutions?",
      answer: "Die Erstberatung bei DENCK Solutions ist kostenlos und unverbindlich. Für weiterführende Projekte erstellen wir individuelle Angebote basierend auf Ihren spezifischen Anforderungen. Alex Denck bespricht mit Ihnen transparent alle Kosten und den erwarteten ROI Ihrer KI-Investition."
    },
    {
      question: "Welche KI-Technologien setzt DENCK Solutions ein?",
      answer: "DENCK Solutions arbeitet mit modernsten KI-Technologien: Machine Learning, Natural Language Processing, Computer Vision und Business Intelligence. Wir entwickeln KI-Agenten, Chatbots, Automatisierungslösungen und intelligente Datenanalysesysteme - immer angepasst an Ihre Geschäftsziele."
    },
    {
      question: "Wie lange dauert die Implementierung von KI-Lösungen?",
      answer: "Die Dauer hängt vom Projektumfang ab. Einfache Chatbot-Implementierungen können innerhalb weniger Wochen realisiert werden, während komplexere KI-Systeme 2-6 Monate benötigen. DENCK Solutions arbeitet agil und liefert bereits früh erste funktionsfähige Lösungen."
    },
    {
      question: "Arbeitet DENCK Solutions auch mit kleinen Unternehmen?",
      answer: "Ja, DENCK Solutions unterstützt Unternehmen jeder Größe. Alex Denck hat flexible Beratungsansätze entwickelt, die auch für kleine und mittlere Unternehmen geeignet sind. Viele KI-Lösungen sind skalierbar und können mit dem Unternehmenswachstum mitwachsen."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-bg-primary relative">
      <div className="container-width relative z-10">
        {/* Schema.org JSON-LD für FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Häufige Fragen zu{' '}
            <span className="text-marine-600">
              DENCK Solutions
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Alles was Sie über KI-Beratung und die Zusammenarbeit mit Alex Denck wissen möchten
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div className="bg-white shadow-lg border border-marine-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-marine-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-marine-800 pr-8">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-marine-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-marine-600 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-marine-200 pt-6">
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-6">
            Haben Sie weitere Fragen zu DENCK Solutions oder der KI-Beratung?
          </p>
          <Link
            href="/kontakt"
            className="btn-primary group"
          >
            Alex Denck kontaktieren
            <ChevronDown className="ml-2 h-4 w-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}