import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Calendar } from 'lucide-react'

export default function TransformationContact() {
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

  const serviceOptions = [
    'Kulturanalyse mit Human Synergistics',
    'Strategische Transformationsberatung',
    'Teamworkshops & Teamdynamik',
    'Führungskräfte-Workshops & Training',
    'Berufliche Begleitung & Coaching',
    'Eignungsdiagnostik & Assessment',
    'Outplacement',
    'Virtueller Coach',
    'Sonstiges'
  ]

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
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
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

  const scrollToBooking = () => {
    document.getElementById('booking-section').scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  const contactInfo = {
    address: {
      street: 'Günthersburgallee 82',
      building: 'Beraterhaus / Hinterhaus',
      city: '60389 Frankfurt am Main',
      district: 'Nordend / Bornheim / Mitte'
    },
    phone: '069 - 9753 4440',
    email: 'berater@c5-business-partner.de',
    hours: {
      weekdays: 'Mo-Fr: 9:00 - 18:00 Uhr',
      flexible: 'Termine außerhalb der Geschäftszeiten nach Absprache'
    }
  }

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative text-white overflow-hidden min-h-screen flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => e.target.style.display = 'none'}
          >
            <source 
              src="https://cdn.pixabay.com/vimeo/453433081/businessman%20-%2049060.mp4?width=1280&hash=f5ac65dad89d4d2eeb20c5e2c5b4f2e1f0ab79b8" 
              type="video/mp4" 
            />
          </video>
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-purple-900/80" />
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 drop-shadow rounded-xl bg-orange-600 text-white px-4 py-2 inline-block">
                Kontakt aufnehmen
              </h1>
              <p className="text-2xl sm:text-3xl text-blue-200 font-semibold mb-8 drop-shadow-md">
                Lassen Sie uns über Ihre Herausforderungen sprechen
              </p>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                Wir freuen uns auf ein unverbindliches Erstgespräch mit Ihnen.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:069-97534440"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-900 bg-white border border-transparent rounded-lg shadow-lg hover:bg-gray-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 group backdrop-blur-sm"
              >
                <Phone className="mr-3 h-6 w-6" />
                Direkt anrufen
              </a>
              
              <a
                href="mailto:berater@c5-business-partner.de"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm border-2 border-white rounded-lg hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 group"
              >
                <Mail className="mr-3 h-6 w-6" />
                E-Mail senden
              </a>

              <button
                onClick={scrollToBooking}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600/80 backdrop-blur-sm border-2 border-blue-400 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all duration-200 group"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Termin vereinbaren
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section - Kompakter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Beratungsanfrage stellen
              </h2>
              <p className="text-gray-600 mb-6">
                Beschreiben Sie uns Ihr Anliegen. Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Ihr Name"
                    />
                  </div>
                  
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="ihre.email@unternehmen.de"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Ihr Unternehmen"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="069 - 123 456"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  >
                    <option value="">Bitte wählen Sie...</option>
                    {serviceOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                    placeholder="Beschreiben Sie uns Ihre Herausforderungen und Ziele..."
                  />
                </div>

                {/* Form Status Messages */}
                {formStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-sm">Es gab einen Fehler. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 text-base font-semibold text-white bg-blue-600 border border-transparent rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                      Wird gesendet...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Anfrage senden
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information - Kompakter */}
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Kontaktinformationen
              </h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-900 mb-1">Adresse</h3>
                    <div className="text-gray-600 text-sm space-y-1 mb-3">
                      <p>{contactInfo.address.street}</p>
                      <p>{contactInfo.address.building}</p>
                      <p>{contactInfo.address.city}</p>
                      <p className="text-xs text-gray-500">{contactInfo.address.district}</p>
                    </div>
                    <a
                      href={`https://maps.app.goo.gl/JHc7ChhxRuT1MA4C8`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-100 transition-colors duration-200"
                    >
                      <MapPin className="h-3 w-3 mr-1" />
                      Wegbeschreibung
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Telefon</h3>
                    <a 
                      href={`tel:${contactInfo.phone.replace(/\s|-/g, '')}`}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">E-Mail</h3>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Geschäftszeiten</h3>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>{contactInfo.hours.weekdays}</p>
                      <p className="text-xs">{contactInfo.hours.flexible}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cal.com Integration Section with Video Background */}
      <section id="booking-section" className="relative py-16 bg-blue-900 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            onError={(e) => e.target.style.display = 'none'}
          >
            <source 
              src="https://cdn.pixabay.com/vimeo/453433081/businessman%20-%2049060.mp4?width=1280&hash=f5ac65dad89d4d2eeb20c5e2c5b4f2e1f0ab79b8" 
              type="video/mp4" 
            />
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Termin online buchen</h2>
            <p className="text-xl text-blue-100">
              Buchen Sie direkt einen passenden Termin für Ihr Erstgespräch
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6">
              {/* Cal.com Embed */}
              <div className="w-full" style={{ height: '600px' }}>
                <iframe
                  src="https://cal.com/egartner/themengespraech-60min"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ 
                    border: 'none',
                    borderRadius: '8px'
                  }}
                  title="Terminbuchung Cal.com"
                />
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
      title: 'Kontakt - C5 Business Partner',
      description: 'Kontaktieren Sie C5 Business Partner für eine unverbindliche Beratung. Telefon: 069 - 9753 4440 oder besuchen Sie uns in Frankfurt am Main.'
    }
  }
}