// src/pages/kontakt.js
import { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Calendar, Bot, ArrowRight, Phone, Clock } from 'lucide-react'

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

    // Create FormData object
    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setFormStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        })
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-bg-primary">
        <div className="container-width relative z-10">
          <div className="max-w-5xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-white shadow-lg border border-marine-200 rounded-full">
                  <Bot className="w-6 h-6 text-marine-600" />
                  <span className="font-medium text-marine-800">
                    Lassen Sie uns sprechen
                  </span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-text-primary">
                Bereit für Ihre{' '}
                <span className="text-marine-600">
                  KI-Zukunft
                </span>?
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Entdecken Sie, wie KI Ihr Unternehmen transformieren kann.
                Kostenlose Erstberatung für Ihren Erfolg.
              </p>
            </div>

            {/* Two Options Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              
              {/* Option 1: Direkt Termin buchen */}
              <div className="group relative">
                <div className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8 hover:border-marine-300 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-marine-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="h-8 w-8 text-marine-600" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4 text-marine-800">
                    Schnell & Unkompliziert
                  </h2>
                  
                  <p className="text-text-secondary mb-8 leading-relaxed">
                    Buchen Sie direkt einen 30-minütigen Beratungstermin.
                    Wählen Sie einfach einen passenden Zeitslot aus.
                  </p>
                  
                  <a
                    href="https://cal.com/alexdenck/besprechung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary group/btn"
                  >
                    Termin buchen
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>

                  <div className="mt-6 space-y-2">
                    <div className="flex items-center text-sm text-text-secondary">
                      <CheckCircle className="h-4 w-4 mr-2 text-gold-500" />
                      Sofort verfügbare Termine
                    </div>
                    <div className="flex items-center text-sm text-text-secondary">
                      <CheckCircle className="h-4 w-4 mr-2 text-gold-500" />
                      Automatische Kalendereinladung
                    </div>
                    <div className="flex items-center text-sm text-text-secondary">
                      <CheckCircle className="h-4 w-4 mr-2 text-gold-500" />
                      Video-Call Link inklusive
                    </div>
                  </div>
                </div>
              </div>

              {/* Option 2: Kontaktformular */}
              <div className="group relative">
                <div className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8 hover:border-marine-300 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-gold-600" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4 text-marine-800">
                    Detaillierte Anfrage
                  </h2>
                  
                  <p className="text-text-secondary mb-8 leading-relaxed">
                    Schildern Sie mir Ihr Anliegen.
                    Ich melde mich innerhalb von 24 Stunden.
                  </p>
                  
                  <button
                    onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                    className="btn-secondary group/btn"
                  >
                    Zum Kontaktformular
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center text-sm text-text-secondary">
                      <CheckCircle className="h-4 w-4 mr-2 text-gold-500" />
                      Individuelles Anliegen
                    </div>
                    <div className="flex items-center text-sm text-text-secondary">
                      <CheckCircle className="h-4 w-4 mr-2 text-gold-500" />
                      Ausführliche Beschreibung möglich
                    </div>
                    <div className="flex items-center text-sm text-text-secondary">
                      <CheckCircle className="h-4 w-4 mr-2 text-gold-500" />
                      Persönliche Rückmeldung
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-bg-primary relative">
        <div className="container-width relative z-10">
          <div className="max-w-3xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-white shadow-lg border border-marine-200 rounded-full">
                  <Send className="w-6 h-6 text-marine-600" />
                  <span className="font-medium text-marine-800">
                    Kontaktformular
                  </span>
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                Schildern Sie mir Ihr{' '}
                <span className="text-marine-600">
                  Anliegen
                </span>
              </h2>
              
              <p className="text-text-secondary text-lg">
                Je mehr Sie mir mitteilen, desto besser kann ich Ihnen helfen.
              </p>
            </div>

            <div className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8 md:p-12">
              <form 
                onSubmit={handleSubmit} 
                action="https://formsubmit.co/b6eea7af06bb690ca806dd85777c3b46" 
                method="POST"
                className="space-y-6"
              >
                {/* Formsubmit Configuration */}
                <input type="hidden" name="_subject" value="Neue Kontaktanfrage von DENCK Solutions Website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-marine-800 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-marine-200 text-marine-800 rounded-lg focus:ring-2 focus:ring-marine-500 focus:border-transparent transition-all duration-200 placeholder-text-secondary"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-marine-800 mb-2">
                      Unternehmen *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-marine-200 text-marine-800 rounded-lg focus:ring-2 focus:ring-marine-500 focus:border-transparent transition-all duration-200 placeholder-text-secondary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-marine-800 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-marine-200 text-marine-800 rounded-lg focus:ring-2 focus:ring-marine-500 focus:border-transparent transition-all duration-200 placeholder-text-secondary"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-marine-800 mb-2">
                    Interessensbereich
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-marine-200 text-marine-800 rounded-lg focus:ring-2 focus:ring-marine-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="ki-strategie">KI-Strategieberatung</option>
                    <option value="automatisierung">Prozessautomatisierung</option>
                    <option value="ki-agenten">KI-Assistenten & Chatbots</option>
                    <option value="analytics">Datenanalyse & Insights</option>
                    <option value="beratung">Beratung & Coaching</option>
                    <option value="workshops">Workshops & Training</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-marine-800 mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-marine-200 text-marine-800 rounded-lg focus:ring-2 focus:ring-marine-500 focus:border-transparent transition-all duration-200 resize-none placeholder-text-secondary"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-gold-600 bg-gold-50 border border-gold-200 p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span>Vielen Dank! Ich melde mich innerhalb von 24 Stunden bei Ihnen.</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 border border-red-200 p-4 rounded-lg">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <span>Es gab einen Fehler. Bitte versuchen Sie es erneut.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
      <section className="py-20 bg-bg-primary relative">
        <div className="container-width relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                Weitere{' '}
                <span className="text-marine-600">
                  Kontaktmöglichkeiten
                </span>
              </h2>
              <p className="text-text-secondary text-lg">
                Ich bin für Sie da - wählen Sie den Weg, der für Sie am besten ist.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative">
                <div className="bg-white shadow-lg border border-marine-100 rounded-xl p-6 text-center hover:border-marine-300 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-marine-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-marine-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-marine-800 mb-2">E-Mail</h3>
                  <a href="mailto:alex@denck.com" className="text-text-secondary hover:text-marine-600 transition-colors">
                    alex@denck.com
                  </a>
                </div>
              </div>

              <div className="group relative">
                <div className="bg-white shadow-lg border border-marine-100 rounded-xl p-6 text-center hover:border-marine-300 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-gold-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-marine-800 mb-2">Adresse</h3>
                  <p className="text-text-secondary">
                    Hannah-Arendt-Str 40<br />
                    60438 Frankfurt am Main
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="bg-white shadow-lg border border-marine-100 rounded-xl p-6 text-center hover:border-marine-300 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-marine-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-marine-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-marine-800 mb-2">Reaktionszeit</h3>
                  <p className="text-text-secondary">
                    Innerhalb von<br />
                    24 Stunden
                  </p>
                </div>
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
      title: 'Kontakt - DENCK Solutions',
      description: 'Kontaktieren Sie DENCK Solutions für eine kostenlose KI-Beratung. Buchen Sie direkt einen Termin oder senden Sie uns eine Nachricht.'
    }
  }
}