import { useState, useEffect } from 'react'
import { FaPlay, FaStop, FaSave, FaPlus } from 'react-icons/fa'

export default function ConductTab({ 
  data, 
  setData, 
  conversationData, 
  setConversationData, 
  startTimer,
  showNotification 
}) {
  const [selectedEntryType, setSelectedEntryType] = useState('statement')
  const [liveEntryText, setLiveEntryText] = useState('')

  useEffect(() => {
    if (!conversationData.startTime) {
      startTimer()
    }
  }, [conversationData.startTime, startTimer])

  const formatTime = (ms) => {
    if (!ms) return '0:00'
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const questionBanks = [
    {
      title: '🎯 Einstieg & Situationsklärung',
      questions: [
        'Wie geht es Ihnen aktuell in Ihrer Rolle?',
        'Was beschäftigt Sie in letzter Zeit am meisten?',
        'Wo stehen Sie gerade mit Ihren wichtigsten Zielen?',
        'Was läuft gut und womit sind Sie zufrieden?'
      ]
    },
    {
      title: '🔍 Vertiefung & Analyse',
      questions: [
        'Was würde sich ändern, wenn dieses Problem gelöst wäre?',
        'Welche Erfahrungen haben Sie bereits mit ähnlichen Situationen?',
        'Was hindert Sie daran, diesen Schritt zu gehen?',
        'Auf einer Skala von 1-10, wie wichtig ist Ihnen diese Veränderung?'
      ]
    },
    {
      title: '💡 Lösungsentwicklung',
      questions: [
        'Welche Optionen sehen Sie für sich?',
        'Was sind Ihre verfügbaren Ressourcen?',
        'Welcher Ansatz fühlt sich für Sie richtig an?',
        'Was wäre der kleinste, aber wirkungsvolle erste Schritt?'
      ]
    },
    {
      title: '✅ Vereinbarungen & Commitment',
      questions: [
        'Womit möchten Sie konkret beginnen?',
        'Bis wann werden Sie diesen Schritt umgesetzt haben?',
        'Woran werden Sie merken, dass Sie erfolgreich waren?',
        'Welche Unterstützung benötigen Sie von mir?'
      ]
    }
  ]

  const entryTypes = [
    { id: 'statement', label: '💬 Aussage', color: 'blue' },
    { id: 'agreement', label: '✅ Vereinbarung', color: 'green' },
    { id: 'concern', label: '⚠️ Bedenken', color: 'yellow' },
    { id: 'insight', label: '💡 Erkenntnis', color: 'purple' },
    { id: 'emotion', label: '😊 Emotion', color: 'pink' },
    { id: 'action', label: '🎯 Aktion', color: 'teal' }
  ]

  const addLiveEntry = () => {
    if (!liveEntryText.trim()) {
      showNotification('Bitte geben Sie einen Text ein.', 'warning')
      return
    }

    const timestamp = new Date()
    const entry = {
      id: Date.now(),
      type: selectedEntryType,
      text: liveEntryText,
      timestamp: timestamp,
      timeString: timestamp.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    }

    setData(prev => ({
      ...prev,
      liveTranscript: [...prev.liveTranscript, entry]
    }))

    setConversationData(prev => ({
      ...prev,
      liveEntries: prev.liveEntries + 1
    }))

    setLiveEntryText('')
    showNotification('Eintrag hinzugefügt', 'success')
  }

  const useQuestion = (question) => {
    setData(prev => ({
      ...prev,
      liveNotes: prev.liveNotes + (prev.liveNotes ? '\n\n' : '') + `[${new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}] ${question}`
    }))

    setConversationData(prev => ({
      ...prev,
      questionsUsed: prev.questionsUsed + 1,
      notesCount: prev.notesCount + 1
    }))
  }

  const completePhase = () => {
    const newProgress = Math.min(data.progress + 25, 100)
    setData(prev => ({ ...prev, progress: newProgress }))
    showNotification('Phase erfolgreich abgeschlossen!', 'success')
  }

  return (
    <div className="space-y-8 animate-fadeInUp">
      <h2 className="text-2xl font-bold text-c5-dark flex items-center gap-3">
        <div className="w-1 h-8 bg-c5-primary rounded"></div>
        Live Gesprächsbegleitung
      </h2>

      {/* Progress and Stats */}
      <div className="card">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-c5-dark">Gesprächsfortschritt</span>
            <span className="text-c5-text-light">
              {data.progress >= 75 ? 'Vereinbarungen' : 
               data.progress >= 50 ? 'Lösungsentwicklung' :
               data.progress >= 25 ? 'Analyse' : 'Einstieg'}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-c5-primary to-c5-secondary rounded-full transition-all duration-500 relative"
              style={{width: `${data.progress}%`}}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white rounded-lg border-l-4 border-c5-accent">
            <div className="text-2xl font-bold text-c5-primary">{conversationData.questionsUsed}</div>
            <div className="text-sm text-c5-text-light">Fragen verwendet</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border-l-4 border-c5-accent">
            <div className="text-2xl font-bold text-c5-primary">
              {formatTime(conversationData.elapsedTime)}
            </div>
            <div className="text-sm text-c5-text-light">Vergangene Zeit</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border-l-4 border-c5-accent">
            <div className="text-2xl font-bold text-c5-primary">{conversationData.notesCount}</div>
            <div className="text-sm text-c5-text-light">Notizen erstellt</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border-l-4 border-c5-accent">
            <div className="text-2xl font-bold text-c5-primary">{conversationData.liveEntries}</div>
            <div className="text-sm text-c5-text-light">Live-Einträge</div>
          </div>
        </div>
      </div>

      {/* Live Transcript Panel */}
      <div className="card card-success">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-c5-dark flex items-center gap-2">
            🎙️ Live-Mitschrift Einzelgespräch
          </h3>
          <div className="flex gap-3">
            <button
              onClick={() => setData(prev => ({ ...prev, isRecording: !prev.isRecording }))}
              className={`btn-${data.isRecording ? 'warning' : 'success'} text-sm`}
            >
              {data.isRecording ? <FaStop /> : <FaPlay />}
              {data.isRecording ? 'Stoppen' : 'Aufzeichnung starten'}
            </button>
            <button
              onClick={() => setData(prev => ({ ...prev, autoSaveEnabled: !prev.autoSaveEnabled }))}
              className={`btn-${data.autoSaveEnabled ? 'success' : 'secondary'} text-sm`}
            >
              <FaSave />
              Auto-Save: {data.autoSaveEnabled ? 'AN' : 'AUS'}
            </button>
          </div>
        </div>

        {/* Quick Entry Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {entryTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedEntryType(type.id)}
              className={`p-3 rounded-lg border-2 text-sm font-semibold transition-all ${
                selectedEntryType === type.id 
                  ? 'border-c5-primary bg-c5-light' 
                  : 'border-gray-200 bg-white hover:border-c5-secondary'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Live Entry Input */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={liveEntryText}
            onChange={(e) => setLiveEntryText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addLiveEntry()}
            placeholder="Was passiert gerade im Gespräch..."
            className="flex-1 form-input"
          />
          <button onClick={addLiveEntry} className="btn-primary">
            <FaPlus />
            Hinzufügen
          </button>
        </div>

        {/* Live Transcript Display */}
        <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto min-h-[200px]">
          {data.liveTranscript.length === 0 ? (
            <div className="text-center text-gray-500 italic py-12">
              Live-Mitschrift bereit. Beginnen Sie mit der ersten Notiz...
            </div>
          ) : (
            <div className="space-y-3">
              {data.liveTranscript.map((entry) => (
                <div key={entry.id} className="bg-white p-4 rounded-lg border-l-4 border-c5-accent">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-c5-dark text-sm">
                      {entryTypes.find(t => t.id === entry.type)?.label} 
                    </span>
                    <span className="text-xs text-c5-text-light">{entry.timeString}</span>
                  </div>
                  <div className="text-c5-text">{entry.text}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Question Banks */}
      {questionBanks.map((bank, index) => (
        <div key={index} className="card card-accent">
          <h4 className="text-lg font-semibold text-c5-dark mb-4">{bank.title}</h4>
          <div className="space-y-2">
            {bank.questions.map((question, qIndex) => (
              <button
                key={qIndex}
                onClick={() => useQuestion(question)}
                className="w-full text-left p-3 bg-white border-l-3 border-c5-accent rounded-lg hover:bg-c5-light hover:border-c5-primary transition-all duration-300"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Live Notes */}
      <div className="card" style={{background: 'linear-gradient(135deg, #fff9e6, #fff3cd)'}}>
        <h4 className="text-lg font-semibold text-c5-dark mb-4 flex items-center gap-2">
          📝 Live-Protokoll
        </h4>
        <textarea
          value={data.liveNotes}
          onChange={(e) => {
            setData(prev => ({ ...prev, liveNotes: e.target.value }))
            setConversationData(prev => ({ ...prev, notesCount: prev.notesCount + 1 }))
          }}
          placeholder="• Wichtige Aussagen und Erkenntnisse&#10;• Vereinbarte Maßnahmen und Termine&#10;• Beobachtungen zur Gesprächsdynamik&#10;• Follow-up Punkte"
          className="form-textarea min-h-[150px]"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <button onClick={completePhase} className="btn-success">
          ✅ Phase abschließen
        </button>
        <button className="btn-warning">
          🆘 Unterstützung
        </button>
        <button className="btn-secondary">
          ⏸️ Pause einlegen
        </button>
      </div>
    </div>
  )
}