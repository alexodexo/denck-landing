import { useState, useEffect } from 'react'
import { X, Cookie, Settings, Check, Shield } from 'lucide-react'
import Link from 'next/link'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Immer aktiviert
    functional: false,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Prüfen ob Cookie-Consent bereits gesetzt wurde
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Nach kurzer Verzögerung anzeigen für bessere UX
      setTimeout(() => {
        setIsVisible(true)
      }, 1000)
    } else {
      // Gespeicherte Präferenzen laden
      try {
        const savedPreferences = JSON.parse(consent)
        setPreferences(prev => ({ ...prev, ...savedPreferences }))
      } catch (e) {
        console.error('Cookie preferences parsing error:', e)
      }
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    }
    setPreferences(allAccepted)
    savePreferences(allAccepted)
    setIsVisible(false)
  }

  const handleAcceptSelected = () => {
    savePreferences(preferences)
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    }
    setPreferences(onlyNecessary)
    savePreferences(onlyNecessary)
    setIsVisible(false)
  }

  const savePreferences = (prefs) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    
    // Hier würden Sie die Cookie-Präferenzen an Ihre Analytics/Marketing-Tools weiterleiten
    if (prefs.analytics) {
      // Google Analytics aktivieren
      console.log('Analytics cookies enabled')
    }
    if (prefs.marketing) {
      // Marketing cookies aktivieren
      console.log('Marketing cookies enabled')
    }
  }

  const handlePreferenceChange = (category) => {
    if (category === 'necessary') return // Notwendige Cookies können nicht deaktiviert werden
    
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  const cookieCategories = [
    {
      id: 'necessary',
      title: 'Notwendige Cookies',
      description: 'Diese Cookies sind für das Funktionieren der Website erforderlich und können nicht deaktiviert werden.',
      required: true,
      examples: 'Session-Management, Sicherheitsfeatures, Cookie-Einstellungen'
    },
    {
      id: 'functional',
      title: 'Funktionale Cookies',
      description: 'Diese Cookies ermöglichen erweiterte Funktionen und Personalisierungen.',
      required: false,
      examples: 'Spracheinstellungen, Theme-Präferenzen, Formulardaten'
    },
    {
      id: 'analytics',
      title: 'Analyse-Cookies',
      description: 'Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen.',
      required: false,
      examples: 'Seitenaufrufe, Verweildauer, Besucherverhalten (anonymisiert)'
    },
    {
      id: 'marketing',
      title: 'Marketing-Cookies',
      description: 'Diese Cookies werden verwendet, um Ihnen relevante Werbung zu zeigen.',
      required: false,
      examples: 'Personalisierte Anzeigen, Social Media Integration, Remarketing'
    }
  ]

  if (!isVisible) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
            
            {!showSettings ? (
              /* Haupt-Banner */
              <div className="p-6 md:p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                    <Cookie className="h-6 w-6" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy-900 mb-3">
                      Cookie-Einstellungen
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                      Einige Cookies sind für das Funktionieren der Website erforderlich, während andere uns helfen, 
                      die Website zu verbessern und Ihnen personalisierte Inhalte anzuzeigen.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleAcceptAll}
                        className="btn-primary flex items-center justify-center"
                      >
                        <Check className="h-4 w-4 mr-2" />
                        Alle akzeptieren
                      </button>
                      
                      <button
                        onClick={handleRejectAll}
                        className="btn-outline flex items-center justify-center"
                      >
                        Nur notwendige
                      </button>
                      
                      <button
                        onClick={() => setShowSettings(true)}
                        className="btn-secondary flex items-center justify-center"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Einstellungen
                      </button>
                    </div>
                    
                    <p className="text-xs text-gray-500 mt-4">
                      Weitere Informationen finden Sie in unserer{' '}
                      <Link href="/datenschutz" className="text-primary-600 hover:text-primary-700 underline">
                        Datenschutzerklärung
                      </Link>
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setIsVisible(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ) : (
              /* Erweiterte Einstellungen */
              <div className="max-h-[80vh] overflow-y-auto">
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-primary-600" />
                      <h3 className="text-xl font-bold text-navy-900">
                        Cookie-Einstellungen verwalten
                      </h3>
                    </div>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {cookieCategories.map((category) => (
                      <div 
                        key={category.id}
                        className="border border-gray-200 rounded-lg p-4"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="font-semibold text-navy-900">
                                {category.title}
                              </h4>
                              {category.required && (
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                  Erforderlich
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                              {category.description}
                            </p>
                            <p className="text-xs text-gray-500">
                              <strong>Beispiele:</strong> {category.examples}
                            </p>
                          </div>
                          
                          <div className="ml-4">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={preferences[category.id]}
                                onChange={() => handlePreferenceChange(category.id)}
                                disabled={category.required}
                                className="sr-only"
                              />
                              <div className={`w-11 h-6 rounded-full transition-colors duration-200 ${
                                preferences[category.id] 
                                  ? 'bg-primary-600' 
                                  : 'bg-gray-300'
                              } ${category.required ? 'opacity-50' : ''}`}>
                                <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 ${
                                  preferences[category.id] 
                                    ? 'translate-x-6' 
                                    : 'translate-x-1'
                                } top-1 absolute`} />
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
                    <button
                      onClick={handleAcceptSelected}
                      className="btn-primary flex items-center justify-center"
                    >
                      <Check className="h-4 w-4 mr-2" />
                      Auswahl speichern
                    </button>
                    
                    <button 
                      onClick={handleAcceptAll}
                      className="btn-secondary flex items-center justify-center"
                    >
                      Alle akzeptieren
                    </button>
                    
                    <button
                      onClick={handleRejectAll}
                      className="btn-outline flex items-center justify-center"
                    >
                      Alle ablehnen
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

// Export auch eine Funktion um Cookie-Banner programmatisch anzuzeigen
export const showCookieBanner = () => {
  localStorage.removeItem('cookie-consent')
  localStorage.removeItem('cookie-consent-date')
  window.location.reload()
}

// Export Funktion um Cookie-Preferences zu überprüfen
export const getCookiePreferences = () => {
  try {
    const consent = localStorage.getItem('cookie-consent')
    return consent ? JSON.parse(consent) : null
  } catch (e) {
    console.error('Error reading cookie preferences:', e)
    return null
  }
}