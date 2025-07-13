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
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="container-width relative z-10">
          <div className="max-w-5xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-600/50 rounded-full shadow-2xl">
                  <Bot className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400" />
                  <span className="font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text animate-gradient bg-300%">
                    Lassen Sie uns sprechen
                  </span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Bereit für Ihre{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 animate-gradient bg-300%">
                  KI-Zukunft
                </span>?
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Entdecken Sie, wie KI Ihr Unternehmen transformieren kann.
                Kostenlose Erstberatung für Ihren Erfolg.
              </p>
            </div>

            {/* Two Options Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              
              {/* Option 1: Direkt Termin buchen */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl" />
                
                <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="h-8 w-8 text-purple-400" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Schnell & Unkompliziert
                  </h2>
                  
                  <p className="text-slate-300 mb-8 leading-relaxed">
                    Buchen Sie direkt einen 30-minütigen Beratungstermin.
                    Wählen Sie einfach einen passenden Zeitslot aus.
                  </p>
                  
                  <a
                    href="https://cal.com/alexdenck/besprechung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-400 hover:to-pink-400 transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
                  >
                    Termin buchen
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>

                  <div className="mt-6 space-y-2">
                    <div className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                      Sofort verfügbare Termine
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                      Automatische Kalendereinladung
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                      Video-Call Link inklusive
                    </div>
                  </div>
                </div>
              </div>

              {/* Option 2: Kontaktformular */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl" />
                
                <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-yellow-400" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Detaillierte Anfrage
                  </h2>
                  
                  <p className="text-slate-300 mb-8 leading-relaxed">
                    Schildern Sie mir Ihr Anliegen.
                    Ich melde mich innerhalb von 24 Stunden.
                  </p>
                  
                  <button
                    onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                    className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/25"
                  >
                    Zum Kontaktformular
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                      Individuelles Anliegen
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                      Ausführliche Beschreibung möglich
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
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
      <section id="contact-form" className="py-20 relative overflow-hidden">
        <div className="container-width relative z-10">
          <div className="max-w-3xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-600/50 rounded-full shadow-2xl">
                  <Send className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400" />
                  <span className="font-medium bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text animate-gradient bg-300%">
                    Kontaktformular
                  </span>
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Schildern Sie mir Ihr{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Anliegen
                </span>
              </h2>
              
              <p className="text-slate-300 text-lg">
                Je mehr Sie mir mitteilen, desto besser kann ich Ihnen helfen.
              </p>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 md:p-12">
              <form 
                onSubmit={handleSubmit} 
                action="https://formsubmit.co/b6eea7af06bb690ca806dd85777c3b46" 
                method="POST"
                className="space-y-6"
              >
                {/* Formsubmit Configuration */}
                <input type="hidden" name="_subject" value="Neue Kontaktanfrage von DENCK Consulting Website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                      Unternehmen *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
                    Interessensbereich
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none placeholder-slate-400"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-400 bg-green-500/20 border border-green-500/30 p-4 rounded-lg backdrop-blur-xl">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span>Vielen Dank! Ich melde mich innerhalb von 24 Stunden bei Ihnen.</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-400 bg-red-500/20 border border-red-500/30 p-4 rounded-lg backdrop-blur-xl">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <span>Es gab einen Fehler. Bitte versuchen Sie es erneut.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:from-blue-400 hover:to-cyan-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
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
      <section className="py-20 relative overflow-hidden">
        <div className="container-width relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Weitere{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Kontaktmöglichkeiten
                </span>
              </h2>
              <p className="text-slate-300 text-lg">
                Ich bin für Sie da - wählen Sie den Weg, der für Sie am besten ist.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-xl" />
                
                <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">E-Mail</h3>
                  <a href="mailto:alex@denck.com" className="text-slate-300 hover:text-blue-400 transition-colors">
                    alex@denck.com
                  </a>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-xl" />
                
                <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Adresse</h3>
                  <p className="text-slate-300">
                    Hannah-Arendt-Str 40<br />
                    60438 Frankfurt am Main
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-xl" />
                
                <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Reaktionszeit</h3>
                  <p className="text-slate-300">
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
      title: 'Kontakt - DENCK Consulting',
      description: 'Kontaktieren Sie DENCK Consulting für eine kostenlose KI-Beratung. Buchen Sie direkt einen Termin oder senden Sie uns eine Nachricht.'
    }
  }
}