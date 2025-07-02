// src/pages/kontakt.js
import { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Calendar, Bot, ArrowRight } from 'lucide-react'

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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
        service: '',
        message: ''
      })
    } catch (error) {
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 pt-32 pb-20">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-slate-900">
              Lassen Sie uns über Ihre KI-Zukunft sprechen
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Entdecken Sie, wie KI Ihr Unternehmen transformieren kann.
              Kostenlose Erstberatung für Ihren Erfolg.
            </p>
          </div>
        </div>
      </section>

      {/* Two Options Section */}
      <section className="py-20 bg-white">
        <div className="container-width">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Option 1: Direkt Termin buchen */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
                <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                  <Calendar className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Schnell & Unkompliziert
                </h2>
                <p className="text-slate-300 mb-8">
                  Buchen Sie direkt einen 30-minütigen Beratungstermin.
                  Wählen Sie einfach einen passenden Zeitslot aus.
                </p>
                <a
                  href="https://cal.com/alexdenck/besprechung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-200 group"
                >
                  Termin buchen
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="text-sm text-slate-400 mt-4">
                  ✓ Sofort verfügbare Termine<br />
                  ✓ Automatische Kalendereinladung<br />
                  ✓ Video-Call Link inklusive
                </p>
              </div>

              {/* Option 2: Kontaktformular */}
              <div className="bg-slate-50 rounded-2xl p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-slate-200 rounded-full mb-6">
                  <Mail className="h-8 w-8 text-slate-700" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">
                  Detaillierte Anfrage
                </h2>
                <p className="text-slate-600 mb-8">
                  Schildern Sie uns Ihr Anliegen.
                  Wir melden uns innerhalb von 24 Stunden.
                </p>
                <button
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-900 transition-all duration-200 group"
                >
                  Zum Kontaktformular
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-sm text-slate-500 mt-4">
                  ✓ Individuelles Anliegen<br />
                  ✓ Ausführliche Beschreibung möglich<br />
                  ✓ Persönliche Rückmeldung
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-slate-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                  <Bot className="h-8 w-8 text-slate-700" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                  Kontaktformular
                </h2>
                <p className="text-slate-600">
                  Je mehr Sie uns mitteilen, desto besser können wir Ihnen helfen.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Unternehmen *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    Interessensbereich
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="ki-strategie">KI-Strategieberatung</option>
                    <option value="automatisierung">Prozessautomatisierung</option>
                    <option value="analytics">Daten & Analytics</option>
                    <option value="governance">KI-Governance</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span>Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <span>Es gab einen Fehler. Bitte versuchen Sie es erneut.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 text-white bg-slate-800 rounded-lg font-semibold hover:bg-slate-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      Nachricht senden
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-slate-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">E-Mail</h3>
                <a href="mailto:info@denck.com" className="text-slate-600 hover:text-slate-900 transition-colors">
                  info@denck.com
                </a>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-slate-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Adresse</h3>
                <p className="text-slate-600">
                  Hannah-Arendt-Str 40<br />
                  60438 Frankfurt am Main
                </p>
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
      title: 'Kontakt - DENCK Consulting',
      description: 'Kontaktieren Sie DENCK Consulting für eine kostenlose KI-Beratung. Buchen Sie direkt einen Termin oder senden Sie uns eine Nachricht.'
    }
  }
}