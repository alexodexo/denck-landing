import { useState } from 'react'
import { FaClock, FaMapMarkerAlt, FaVideo, FaPhone, FaEnvelope, FaEye, FaCopy } from 'react-icons/fa'

export default function TimelineTab({ 
  data, 
  setData, 
  addTimelineEntry, 
  updateTimelineStatus, 
  showNotification 
}) {
  const [showInvitationPreview, setShowInvitationPreview] = useState(false)

  const handleInputChange = (field, value) => {
    setData(prev => ({ ...prev, [field]: value }))
  }

  const updateTimeline = () => {
    if (data.meetingDate && data.meetingTime) {
      const meetingDateTime = new Date(`${data.meetingDate}T${data.meetingTime}`)
      addTimelineEntry(
        `Gesprächstermin geplant: ${meetingDateTime.toLocaleDateString('de-DE')} um ${meetingDateTime.toLocaleTimeString('de-DE', {hour: '2-digit', minute: '2-digit'})}`
      )
      updateTimelineStatus('planning')
    }
  }

  const generateInvitationText = () => {
    const employee = data.employeeName || '[Name]'
    const dateTime = data.meetingDate && data.meetingTime ? 
      `${new Date(data.meetingDate).toLocaleDateString('de-DE')} um ${data.meetingTime} Uhr` : 
      '[Datum und Zeit eintragen]'
    
    const location = getLocationText()
    
    const templates = {
      formal: {
        development: `Liebe/r ${employee},

ich möchte Sie zu einem Entwicklungsgespräch einladen, um gemeinsam Ihre beruflichen Ziele und Wachstumsmöglichkeiten zu besprechen.

Termin: ${dateTime}
Dauer: ${data.meetingDuration} Minuten
${location}

In unserem Gespräch werden wir Ihre bisherigen Erfolge würdigen, Entwicklungspotenziale identifizieren und konkrete Schritte für Ihre weitere berufliche Laufbahn planen.

Mit freundlichen Grüßen`
      }
    }
    
    const template = templates[data.invitationTone]?.[data.invitationPurpose] || 
      `Liebe/r ${employee},

ich lade Sie herzlich zu unserem Gespräch ein.

Termin: ${dateTime}
Dauer: ${data.meetingDuration} Minuten
${location}

Ich freue mich auf unser Gespräch.

Mit freundlichen Grüßen`
    
    handleInputChange('invitationText', template)
    showNotification('Einladungstext generiert!', 'success')
  }

  const getLocationText = () => {
    switch (data.meetingType) {
      case 'presence':
        return data.meetingLocation ? `Ort: ${data.meetingLocation}` : 'Ort: [Bitte eintragen]'
      case 'online':
        return data.meetingLink ? `Online-Meeting: ${data.meetingLink}` : 'Online-Meeting: [Link wird noch gesendet]'
      case 'hybrid':
        return 'Format: Hybrid (Details folgen separat)'
      case 'phone':
        return 'Telefongespräch (Nummer folgt)'
      default:
        return 'Ort: [Noch festzulegen]'
    }
  }

  const sendInvitation = () => {
    const subject = `Gesprächseinladung - ${data.employeeName || '[Name]'}`
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(data.invitationText)}`
    window.location.href = mailtoLink
    
    addTimelineEntry('Einladung versendet')
    updateTimelineStatus('invitation')
    showNotification('E-Mail-Programm geöffnet', 'success')
  }

  const copyInvitation = async () => {
    try {
      await navigator.clipboard.writeText(data.invitationText)
      showNotification('Einladungstext kopiert!', 'success')
    } catch (err) {
      showNotification('Kopieren fehlgeschlagen', 'error')
    }
  }

  const statusSteps = [
    { id: 'planning', label: 'Planung', icon: '📋' },
    { id: 'invitation', label: 'Einladung', icon: '📧' },
    { id: 'confirmed', label: 'Bestätigt', icon: '✅' },
    { id: 'conducted', label: 'Durchgeführt', icon: '💬' },
    { id: 'completed', label: 'Abgeschlossen', icon: '📝' }
  ]

  return (
    <div className="space-y-8 animate-fadeInUp">
      <h2 className="text-2xl font-bold text-c5-dark flex items-center gap-3">
        <div className="w-1 h-8 bg-c5-primary rounded"></div>
        Gesprächs-Timeline & Einladungsmanagement
      </h2>
      
      {/* Status Timeline */}
      <div className="card card-primary">
        <h3 className="text-xl font-semibold text-c5-dark mb-6">📊 Gesprächs-Verlauf Status</h3>
        <div className="flex justify-between items-center relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          {statusSteps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center bg-white p-4 rounded-lg z-10 min-w-[80px]">
              <div className="text-2xl mb-2">{step.icon}</div>
              <div className="text-sm font-medium text-center">{step.label}</div>
              <div className={`w-3 h-3 rounded-full mt-2 ${
                data.currentStatus === step.id ? 'bg-green-500 animate-pulse' : 
                statusSteps.findIndex(s => s.id === data.currentStatus) > index ? 'bg-c5-primary' : 'bg-gray-300'
              }`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Meeting Details */}
      <div className="card card-accent">
        <h3 className="text-xl font-semibold text-c5-dark mb-6">🗓️ Gesprächsdetails festlegen</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-c5-dark mb-2">📅 Gesprächsdatum</label>
            <input
              type="date"
              value={data.meetingDate}
              onChange={(e) => {
                handleInputChange('meetingDate', e.target.value)
                updateTimeline()
              }}
              className="form-input"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-c5-dark mb-2">⏰ Uhrzeit</label>
            <input
              type="time"
              value={data.meetingTime}
              onChange={(e) => {
                handleInputChange('meetingTime', e.target.value)
                updateTimeline()
              }}
              className="form-input"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-c5-dark mb-2">⏱️ Geplante Dauer</label>
            <select
              value={data.meetingDuration}
              onChange={(e) => handleInputChange('meetingDuration', e.target.value)}
              className="form-input"
            >
              <option value="30">30 Minuten</option>
              <option value="45">45 Minuten</option>
              <option value="60">60 Minuten</option>
              <option value="90">90 Minuten</option>
              <option value="120">2 Stunden</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-c5-dark mb-2">🌐 Gesprächsformat</label>
            <select
              value={data.meetingType}
              onChange={(e) => handleInputChange('meetingType', e.target.value)}
              className="form-input"
            >
              <option value="presence">Präsenz vor Ort</option>
              <option value="online">Online Meeting</option>
              <option value="hybrid">Hybrid</option>
              <option value="phone">Telefon</option>
            </select>
          </div>
        </div>

        {/* Location Fields */}
        {data.meetingType === 'presence' && (
          <div className="mb-6">
            <label className="block text-sm font-semibold text-c5-dark mb-2">
              <FaMapMarkerAlt className="inline mr-2" />
              Ort/Raum
            </label>
            <input
              type="text"
              value={data.meetingLocation}
              onChange={(e) => handleInputChange('meetingLocation', e.target.value)}
              placeholder="z.B. Besprechungsraum 2.05, Hauptgebäude"
              className="form-input"
            />
          </div>
        )}

        {(data.meetingType === 'online' || data.meetingType === 'hybrid') && (
          <>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-c5-dark mb-2">
                <FaVideo className="inline mr-2" />
                Meeting-Link
              </label>
              <input
                type="url"
                value={data.meetingLink}
                onChange={(e) => handleInputChange('meetingLink', e.target.value)}
                placeholder="z.B. https://zoom.us/j/123456789"
                className="form-input"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold text-c5-dark mb-2">🆔 Meeting-ID/Zugangsdaten</label>
              <textarea
                value={data.meetingId}
                onChange={(e) => handleInputChange('meetingId', e.target.value)}
                placeholder="Meeting-ID: 123 456 789&#10;Passcode: 123456&#10;Einwahlnummer: +49 xxx xxx"
                className="form-textarea"
              />
            </div>
          </>
        )}
      </div>

      {/* Invitation Generator */}
      <div className="card card-success">
        <h3 className="text-xl font-semibold text-c5-dark mb-6">✉️ Einladungstext erstellen</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-c5-dark mb-2">🎭 Tonalität</label>
            <select
              value={data.invitationTone}
              onChange={(e) => handleInputChange('invitationTone', e.target.value)}
              className="form-input"
            >
              <option value="formal">Formal & Professionell</option>
              <option value="friendly">Freundlich & Persönlich</option>
              <option value="motivational">Motivierend & Entwicklungsorientiert</option>
              <option value="supportive">Unterstützend & Vertrauensvoll</option>
              <option value="direct">Direkt & Effizient</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-c5-dark mb-2">🎯 Gesprächsanlass</label>
            <select
              value={data.invitationPurpose}
              onChange={(e) => handleInputChange('invitationPurpose', e.target.value)}
              className="form-input"
            >
              <option value="development">Entwicklungsgespräch</option>
              <option value="performance">Leistungsbeurteilung</option>
              <option value="feedback">Feedback-Gespräch</option>
              <option value="conflict">Klärungsgespräch</option>
              <option value="goals">Zielvereinbarung</option>
              <option value="career">Karriereplanung</option>
              <option value="support">Unterstützungsgespräch</option>
              <option value="routine">Regelmäßiges 1:1</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <button onClick={generateInvitationText} className="btn-primary">
            🔄 Text generieren
          </button>
          <button onClick={() => setShowInvitationPreview(true)} className="btn-secondary">
            <FaEye className="inline mr-2" />
            Vorschau
          </button>
          <button onClick={sendInvitation} className="btn-success">
            <FaEnvelope className="inline mr-2" />
            Versenden
          </button>
          <button onClick={copyInvitation} className="btn-secondary">
            <FaCopy className="inline mr-2" />
            Kopieren
          </button>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-c5-dark mb-2">✏️ Einladungstext bearbeiten</label>
          <textarea
            value={data.invitationText}
            onChange={(e) => handleInputChange('invitationText', e.target.value)}
            placeholder="Hier wird automatisch ein passender Einladungstext generiert..."
            className="form-textarea min-h-[200px]"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-c5-dark mb-2">📚 Vorbereitung für Mitarbeiter</label>
          <textarea
            value={data.invitationPreparation}
            onChange={(e) => handleInputChange('invitationPreparation', e.target.value)}
            placeholder="z.B. Bitte denken Sie über Ihre Ziele für das nächste Quartal nach..."
            className="form-textarea"
          />
        </div>
      </div>

      {/* Timeline History */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-c5-dark">📈 Verlaufsprotokoll</h3>
          <button 
            onClick={() => {
              setData(prev => ({ ...prev, timelineEntries: [] }))
              showNotification('Timeline zurückgesetzt', 'info')
            }}
            className="btn-secondary text-sm"
          >
            🗑️ Zurücksetzen
          </button>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 min-h-[150px]">
          {data.timelineEntries.length === 0 ? (
            <div className="text-center text-gray-500 italic py-8">
              Hier wird automatisch der Verlauf Ihres Gesprächs dokumentiert...
            </div>
          ) : (
            <div className="space-y-3">
              {data.timelineEntries.slice().reverse().map((entry, index) => (
                <div key={entry.id} className="bg-white p-4 rounded-lg border-l-4 border-c5-accent">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-c5-dark">{entry.description}</span>
                    <span className="text-sm text-c5-text-light">{entry.timeString}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button 
            onClick={() => addTimelineEntry('Gesprächstermin geplant')} 
            className="btn-primary text-sm"
          >
            ➕ Planung dokumentieren
          </button>
          <button 
            onClick={() => addTimelineEntry('Einladung versendet')} 
            className="btn-success text-sm"
          >
            📧 Einladung versendet
          </button>
          <button 
            onClick={() => addTimelineEntry('Bestätigung erhalten')} 
            className="btn-warning text-sm"
          >
            ✅ Bestätigung
          </button>
        </div>
      </div>

      {/* Invitation Preview Modal */}
      {showInvitationPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">📧 Einladungsvorschau</h3>
                <button 
                  onClick={() => setShowInvitationPreview(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div><strong>An:</strong> {data.employeeName || '[Name]'}@unternehmen.de</div>
                  <div><strong>Von:</strong> Ihre.E-Mail@unternehmen.de</div>
                  <div><strong>Betreff:</strong> Gesprächseinladung - {data.employeeName || '[Name]'}</div>
                  <div><strong>Termin:</strong> {data.meetingDate && data.meetingTime ? 
                    `${new Date(data.meetingDate).toLocaleDateString('de-DE')} um ${data.meetingTime} Uhr` : 
                    'Noch festzulegen'}
                  </div>
                </div>
              </div>
              <div className="whitespace-pre-line bg-white border rounded-lg p-4">
                {data.invitationText}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}