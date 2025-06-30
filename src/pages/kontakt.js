// src/pages/kontakt.js
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Calendar, Clock, Bot, Building2, Users, MessageSquare } from 'lucide-react'

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus('')

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setFormStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactReasons = [
    { icon: Bot, title: 'KI-Strategie entwickeln', desc: 'Maßgeschneiderte KI-Roadmap für Ihr Unternehmen' },
    { icon: Building2, title: 'Prozesse automatisieren', desc: 'Effizienzsteigerung durch intelligente Automation' },
    { icon: Users, title: 'Team schulen', desc: 'KI-Kompetenz in Ihrem Unternehmen aufbauen' },
    { icon: MessageSquare, title: 'Beratung anfragen', desc: 'Unverbindliches Erstgespräch vereinbaren' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-6">
              🚀 Kostenlose Erstberatung
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Lassen Sie uns über Ihre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">KI-Zukunft</span> sprechen
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie KI Ihr Unternehmen voranbringen kann.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Reasons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactReasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-600">{reason.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-2">
                Beratungsanfrage
              </h2>
              <p className="text-gray-600 mb-8">
                Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Max Mustermann"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Mustermann GmbH"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="max@beispiel.de"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="+49 123 456789"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Interessensbereich
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="ki-strategie">KI-Strategieberatung</option>
                    <option value="automatisierung">Prozessautomatisierung</option>
                    <option value="analytics">Daten & Analytics</option>
                    <option value="governance">KI-Governance</option>
                    <option value="schulung">Schulung & Training</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen und wie wir Ihnen helfen können..."
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5" />
                    <span>Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                    <span>Es gab einen Fehler. Bitte versuchen Sie es erneut.</span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                      Wird gesendet...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Kostenlose Analyse anfordern
                      <Send className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              {/* Direct Contact Card */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6">
                  Direkter Kontakt
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <a href="tel:+49123456789" className="text-lg hover:text-blue-200 transition-colors">
                        +49 123 456789
                      </a>
                      <p className="text-sm text-blue-100 mt-1">Mo-Fr: 9:00-18:00 Uhr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">E-Mail</h3>
                      <a href="mailto:info@denck-consulting.de" className="text-lg hover:text-blue-200 transition-colors">
                        info@denck-consulting.de
                      </a>
                      <p className="text-sm text-blue-100 mt-1">Antwort innerhalb von 24h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-lg">
                        DENCK Consulting GmbH<br />
                        Frankfurt am Main<br />
                        Deutschland
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Schnelle Aktionen
                </h3>
                
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Termin buchen</span>
                    </div>
                    <span className="text-gray-400 group-hover:text-gray-600">→</span>
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-5 w-5 text-purple-600" />
                      <span className="font-medium">Live-Chat starten</span>
                    </div>
                    <span className="text-gray-400 group-hover:text-gray-600">→</span>
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                    <div className="flex items-center space-x-3">
                      <Bot className="h-5 w-5 text-pink-600" />
                      <span className="font-medium">KI-Demo anfordern</span>
                    </div>
                    <span className="text-gray-400 group-hover:text-gray-600">→</span>
                  </button>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                  <h4 className="font-semibold mb-2">🎯 Kostenlose KI-Analyse</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Erfahren Sie in nur 30 Minuten, welches KI-Potenzial in Ihrem Unternehmen schlummert.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>30 Min. • Unverbindlich • Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Häufige Fragen
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Wie läuft das kostenlose Erstgespräch ab?</h3>
                <p className="text-gray-600">
                  In einem 30-minütigen Gespräch analysieren wir Ihre aktuelle Situation, identifizieren KI-Potenziale und zeigen Ihnen konkrete Lösungsansätze auf. Völlig unverbindlich und kostenlos.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Für welche Unternehmensgrößen sind Sie der richtige Partner?</h3>
                <p className="text-gray-600">
                  Wir arbeiten hauptsächlich mit mittelständischen Unternehmen ab 50 Mitarbeitern. Aber auch für kleinere Unternehmen mit hohem Digitalisierungsgrad entwickeln wir maßgeschneiderte Lösungen.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Wie schnell können wir mit der Umsetzung beginnen?</h3>
                <p className="text-gray-600">
                  Nach der Analyse und Strategieentwicklung können wir meist innerhalb von 2-4 Wochen mit der Umsetzung erster Pilotprojekte beginnen. Die Geschwindigkeit hängt von Ihrer Datenverfügbarkeit ab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}