import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, MessageCircle, Calendar } from 'lucide-react'
import Hero from '../../components/common/Hero'
import FAQSection from '../../components/common/FAQSection'

export default function CoachContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    timePreference: ''
  })
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactReasons = [
    'Kostenloses Erstgespräch',
    'Business Coaching',
    'Karriereberatung', 
    'Führungskräfte-Coaching',
    'Paarberatung',
    'Outplacement',
    'Sonstiges Anliegen'
  ]

  const timeSlots = [
    'Vormittags (9:00 - 12:00)',
    'Nachmittags (13:00 - 17:00)',
    'Abends (18:00 - 20:00)',
    'Samstag nach Absprache',
    'Flexibel'
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
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        timePreference: ''
      })
    } catch (error) {
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = {
    name: 'Mario Egartner',
    address: {
      street: 'Günthersburgallee 82',
      building: 'Beraterhaus / Hinterhaus',
      city: '60389 Frankfurt am Main',
      district: 'Nordend / Bornheim / Mitte'
    },
    phone: '069 - 9753 4441',
    email: 'egartner@frankfurt-business-coach.de',
    hours: {
      regular: 'Mo-Fr: 9:00 - 18:00 Uhr',
      flexible: 'Abend- und Samstagstermine nach Absprache'
    }
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefon',
      subtitle: 'Direkter Kontakt',
      info: contactInfo.phone,
      action: `tel:${contactInfo.phone.replace(/\s|-/g, '')}`,
      actionText: 'Jetzt anrufen',
      description: 'Rufen Sie mich direkt an für ein erstes Gespräch'
    },
    {
      icon: Mail,
      title: 'E-Mail',
      subtitle: 'Schriftlicher Kontakt',
      info: contactInfo.email,
      action: `mailto:${contactInfo.email}`,
      actionText: 'E-Mail schreiben',
      description: 'Schildern Sie mir Ihr Anliegen per E-Mail'
    },
    {
      icon: MessageCircle,
      title: 'Kontaktformular',
      subtitle: 'Detaillierte Anfrage',
      info: 'Direkter Kontakt über diese Seite',
      action: '#contact-form',
      actionText: 'Formular nutzen',
      description: 'Nutzen Sie das Formular für ausführliche Anfragen'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Kontakt aufnehmen"
        description="Lassen Sie uns sprechen. Ich freue mich auf Ihre Nachricht und ein persönliches Kennenlernen bei einem kostenlosen Erstgespräch."
        primaryCTA={{
          text: 'Jetzt anrufen',
          href: `tel:${contactInfo.phone.replace(/\s|-/g, '')}`
        }}
        secondaryCTA={{
          text: 'E-Mail senden',
          href: `mailto:${contactInfo.email}`
        }}
      />

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Wie möchten Sie Kontakt aufnehmen?</h2>
            <p className="section-subtitle">
              Wählen Sie Ihren bevorzugten Weg für den ersten Kontakt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 text-center hover:bg-primary-50 transition-colors duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{method.title}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{method.subtitle}</p>
                  <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                  <div className="font-medium text-navy-900 mb-6">{method.info}</div>
                  <a
                    href={method.action}
                    className="btn-primary w-full justify-center"
                  >
                    {method.actionText}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div id="contact-form">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Nachricht senden
              </h2>
              <p className="text-gray-600 mb-8">
                Beschreiben Sie mir Ihr Anliegen. Ich melde mich innerhalb von 24 Stunden bei Ihnen zurück.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Ihr Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="069 - 123 456"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Betreff
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  >
                    <option value="">Bitte wählen Sie...</option>
                    {contactReasons.map((reason, index) => (
                      <option key={index} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timePreference" className="block text-sm font-medium text-gray-700 mb-2">
                    Bevorzugte Gesprächszeit
                  </label>
                  <select
                    id="timePreference"
                    name="timePreference"
                    value={formData.timePreference}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  >
                    <option value="">Bitte wählen Sie...</option>
                    {timeSlots.map((slot, index) => (
                      <option key={index} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bevorzugter Kontaktweg
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">E-Mail</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Telefon</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                    placeholder="Beschreiben Sie mir Ihr Anliegen oder Ihre Situation..."
                  />
                </div>

                {/* Form Status Messages */}
                {formStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5" />
                    <span>Vielen Dank! Ich melde mich innerhalb von 24 Stunden bei Ihnen.</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                    <span>Es gab einen Fehler. Bitte versuchen Sie es erneut oder rufen Sie mich direkt an.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                      Wird gesendet...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Nachricht senden
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Persönlicher Kontakt
              </h2>
              
              <div className="space-y-8">
                {/* Personal Info */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">Mario Egartner</h3>
                  <p className="text-gray-600 mb-4">
                    Business Coach & Berater mit über 15 Jahren Erfahrung. 
                    Ich begleite Sie diskret und professionell bei Ihren beruflichen und privaten Herausforderungen.
                  </p>
                </div>
                
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Praxis-Adresse</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>{contactInfo.address.street}</p>
                      <p>{contactInfo.address.building}</p>
                      <p>{contactInfo.address.city}</p>
                      <p className="text-sm text-gray-500">{contactInfo.address.district}</p>
                    </div>
                    <p className="text-sm text-primary-600 mt-2">
                      Parkplätze vorhanden • ÖPNV: U4 Höhenstraße
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Telefon</h3>
                    <a 
                      href={`tel:${contactInfo.phone.replace(/\s|-/g, '')}`}
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200 text-lg"
                    >
                      {contactInfo.phone}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Sprechen Sie gerne auf die Mailbox, wenn ich nicht erreichbar bin
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">E-Mail</h3>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {contactInfo.email}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Antwort meist innerhalb von 24 Stunden
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Termine</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>{contactInfo.hours.regular}</p>
                      <p className="text-sm">{contactInfo.hours.flexible}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Action Box */}
              <div className="mt-12 bg-gradient-to-br from-primary-50 to-navy-50 p-6 rounded-xl border border-primary-100">
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Kostenloses Erstgespräch
                </h3>
                <p className="text-gray-600 mb-4">
                  30 Minuten zum Kennenlernen - unverbindlich und kostenfrei. 
                  Wahlweise persönlich in Frankfurt oder online.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s|-/g, '')}`}
                    className="btn-primary flex-1 justify-center"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Jetzt anrufen
                  </a>
                  <button 
                    onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                    className="btn-secondary flex-1 justify-center"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Termin anfragen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Integration Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="section-title">Online Termin buchen</h2>
            <p className="section-subtitle">
              Buchen Sie direkt einen passenden Termin für Ihr kostenloses Erstgespräch
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl shadow-lg p-8 text-center">
              {/* Placeholder for Calendly Integration */}
              <div className="aspect-video bg-white rounded-lg flex items-center justify-center mb-6 border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Calendly-Widget wird hier eingebettet</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Ermöglicht direkte Terminbuchung für Erstgespräche
                  </p>
                </div>
              </div>
              
              <div className="text-sm text-gray-600 space-y-1">
                <p>✓ Kostenfreies 30-minütiges Erstgespräch</p>
                <p>✓ Wahlweise persönlich in Frankfurt oder online</p>
                <p>✓ Flexible Terminauswahl auch abends und samstags</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        variant="coaching" 
        title="Häufige Fragen zum Erstgespräch"
        subtitle="Alles was Sie über den ersten Kontakt wissen sollten"
      />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Kontakt - Frankfurt Business Coach',
      description: 'Kontaktieren Sie Mario Egartner für ein kostenloses Erstgespräch. Telefon: 069 - 9753 4441 oder besuchen Sie die Praxis in Frankfurt-Nordend.'
    }
  }
}