import { useState } from 'react'

export default function PrepareTab({ data, setData, timelineData, showNotification }) {
  const [generatedContent, setGeneratedContent] = useState('')

  const handleInputChange = (field, value) => {
    setData(prev => ({ ...prev, [field]: value }))
  }

  const scenarios = [
    { id: 'development', title: '🚀 Entwicklungsgespräch', desc: 'Potenziale entdecken und fördern' },
    { id: 'performance', title: '📈 Leistungsgespräch', desc: 'Ziele besprechen und Leistung verbessern' },
    { id: 'conflict', title: '⚖️ Konfliktgespräch', desc: 'Konflikte konstruktiv lösen' },
    { id: 'difficult', title: '🚨 Schwieriges Gespräch', desc: 'Kritik und Feedback professionell übermitteln' },
    { id: 'team', title: '👥 Team-Coaching', desc: 'Teamdynamik verbessern, Zusammenarbeit stärken' }
  ]

  const generateQuestions = () => {
    if (!data.situation || !data.goal) {
      showNotification('Bitte beschreiben Sie erst die Situation und das gewünschte Ergebnis.', 'warning')
      return
    }

    const questionSets = {
      development: [
        {
          phase: "Einstieg & Vision (5-10 Min.)",
          questions: [
            "Was motiviert Sie am meisten in Ihrer aktuellen Rolle?",
            "Wo sehen Sie sich beruflich in 2-3 Jahren?",
            "Welche Aufgaben bereiten Ihnen besondere Freude?",
            "Was sind Ihre größten beruflichen Stärken?"
          ]
        },
        {
          phase: "Entwicklungsbedarfe (10-15 Min.)",
          questions: [
            "In welchen Bereichen möchten Sie sich weiterentwickeln?",
            "Welche Fähigkeiten würden Ihnen dabei helfen, noch erfolgreicher zu sein?",
            "Was hindert Sie daran, Ihr volles Potenzial zu entfalten?",
            "Welche Lernerfahrungen waren für Sie besonders wertvoll?"
          ]
        }
      ],
      performance: [
        {
          phase: "Leistungsanalyse (5-10 Min.)",
          questions: [
            "Wie bewerten Sie Ihre Leistung in den letzten Monaten?",
            "Bei welchen Aufgaben fühlen Sie sich besonders kompetent?",
            "Wo sehen Sie noch Verbesserungspotenzial?",
            "Welche Ihrer Ziele haben Sie bereits erreicht?"
          ]
        }
      ],
      conflict: [
        {
          phase: "Situationsklärung (10-15 Min.)",
          questions: [
            "Wie erleben Sie die aktuelle Situation?",
            "Was ist aus Ihrer Sicht der Kern des Problems?",
            "Welche Auswirkungen hat diese Situation auf Sie?",
            "Was würde sich für Sie ändern, wenn der Konflikt gelöst wäre?"
          ]
        }
      ]
    }

    const questions = questionSets[data.scenario] || questionSets.development
    
    const content = (
      <div className="bg-c5-light rounded-lg p-6 mt-6">
        <h4 className="text-lg font-semibold text-c5-dark mb-4">
          🎯 Maßgeschneiderte Fragen für Ihr {data.scenario ? data.scenario.charAt(0).toUpperCase() + data.scenario.slice(1) : ''}-Gespräch
        </h4>
        {questions.map((section, index) => (
          <div key={index} className="bg-white rounded-lg p-4 mb-4 border-l-4 border-c5-accent">
            <strong className="text-c5-dark">{section.phase}:</strong>
            <ul className="mt-2 space-y-2 pl-4">
              {section.questions.map((question, qIndex) => (
                <li 
                  key={qIndex}
                  className="cursor-pointer p-2 rounded hover:bg-c5-light transition-colors"
                  onClick={() => {
                    navigator.clipboard.writeText(question)
                    showNotification('Frage in Zwischenablage kopiert!', 'success')
                  }}
                >
                  • {question}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <strong className="text-c5-primary">💡 Coaching-Tipp:</strong> Klicken Sie auf eine Frage, um sie in die Zwischenablage zu kopieren.
        </div>
      </div>
    )

    setGeneratedContent(content)
    showNotification('Individuelle Fragen erfolgreich generiert!', 'success')
  }

  const createStructure = () => {
    const duration = parseInt(data.duration)
    const phases = [
      {
        title: "1. Einstieg & Rapport",
        duration: "5 Min.",
        description: "Positive Atmosphäre schaffen und Vertrauen aufbauen",
        tasks: [
          "Persönliche Begrüßung und Smalltalk",
          "Ziel und Ablauf des Gesprächs erläutern",
          "Offene, wertschätzende Haltung vermitteln"
        ]
      },
      {
        title: "2. Situationsanalyse",
        duration: Math.round(duration * 0.3) + " Min.",
        description: "Aktuellen Stand und Herausforderungen verstehen",
        tasks: [
          "Offene Fragen zur aktuellen Situation stellen",
          "Aktiv zuhören und nachfragen",
          "Emotionen und Bedürfnisse wahrnehmen"
        ]
      },
      {
        title: "3. Lösungsentwicklung",
        duration: Math.round(duration * 0.4) + " Min.",
        description: "Gemeinsam Optionen erarbeiten und bewerten",
        tasks: [
          "Verschiedene Handlungsalternativen sammeln",
          "Ressourcen und Stärken aktivieren",
          "Hindernisse und Lösungsansätze besprechen"
        ]
      },
      {
        title: "4. Vereinbarungen",
        duration: Math.round(duration * 0.2) + " Min.",
        description: "Konkrete Schritte und Verbindlichkeiten festlegen",
        tasks: [
          "Spezifische Maßnahmen mit Terminen vereinbaren",
          "Verantwortlichkeiten klar definieren",
          "Unterstützung und Follow-up planen"
        ]
      },
      {
        title: "5. Abschluss",
        duration: "5 Min.",
        description: "Zusammenfassung und positive Beendigung",
        tasks: [
          "Wichtigste Punkte zusammenfassen",
          "Nächste Schritte bestätigen",
          "Wertschätzung und Dank aussprechen"
        ]
      }
    ]

    const content = (
      <div className="bg-c5-light rounded-lg p-6 mt-6">
        <h4 className="text-lg font-semibold text-c5-dark mb-4">
          📋 Professioneller Gesprächsleitfaden ({duration} Minuten)
        </h4>
        {phases.map((phase, index) => (
          <div key={index} className="bg-white rounded-lg p-4 mb-4 border-l-4 border-c5-primary">
            <strong className="text-c5-dark">{phase.title} ({phase.duration}):</strong>
            <p className="text-c5-text-light mt-1">{phase.description}</p>
            <ul className="mt-3 space-y-1 pl-4">
              {phase.tasks.map((task, tIndex) => (
                <li key={tIndex} className="text-sm">• {task}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <strong className="text-c5-primary">⏱️ Zeitmanagement-Tipp:</strong> Nutzen Sie die Zeitangaben als Orientierung, aber bleiben Sie flexibel, wenn wichtige Themen mehr Raum benötigen.
        </div>
      </div>
    )

    setGeneratedContent(content)
    showNotification('Gesprächsstruktur erfolgreich erstellt!', 'success')
  }

  return (
    <div className="space-y-8 animate-fadeInUp">
      <h2 className="text-2xl font-bold text-c5-dark flex items-center gap-3">
        <div className="w-1 h-8 bg-c5-primary rounded"></div>
        Strategische Gesprächsvorbereitung
      </h2>

      {/* Meeting Summary from Timeline */}
      {timelineData.meetingDate && timelineData.meetingTime && data.employeeName && (
        <div className="card card-primary">
          <h4 className="text-lg font-semibold text-c5-primary mb-4 flex items-center gap-2">
            📋 Geplantes Gespräch - Übersicht
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-c5-secondary">
              <div className="text-sm text-c5-text-light font-semibold">Teilnehmer</div>
              <div className="text-c5-dark font-medium">{data.employeeName}</div>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-c5-secondary">
              <div className="text-sm text-c5-text-light font-semibold">Datum</div>
              <div className="text-c5-dark font-medium">
                {new Date(timelineData.meetingDate).toLocaleDateString('de-DE')}
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-c5-secondary">
              <div className="text-sm text-c5-text-light font-semibold">Zeit</div>
              <div className="text-c5-dark font-medium">
                {timelineData.meetingTime} ({timelineData.meetingDuration} Min.)
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scenario Selection */}
      <div className="card card-accent">
        <h3 className="text-xl font-semibold text-c5-dark mb-6">🎯 Gesprächsart definieren:</h3>
        <div className="space-y-4">
          {scenarios.map((scenario) => (
            <div
              key={scenario.id}
              onClick={() => handleInputChange('scenario', scenario.id)}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                data.scenario === scenario.id
                  ? 'border-c5-primary bg-c5-light shadow-lg'
                  : 'border-gray-200 bg-white hover:border-c5-secondary hover:bg-c5-light/50'
              }`}
            >
              <div className="font-semibold text-c5-dark text-lg">{scenario.title}</div>
              <div className="text-c5-text-light mt-1">{scenario.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-c5-dark mb-2">
              👤 Gesprächspartner
            </label>
            <input
              type="text"
              value={data.employeeName}
              onChange={(e) => handleInputChange('employeeName', e.target.value)}
              placeholder="Name und Position eingeben..."
              className="form-input"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-c5-dark mb-2">
              ⏱️ Geplante Dauer
            </label>
            <select
              value={data.duration}
              onChange={(e) => handleInputChange('duration', e.target.value)}
              className="form-input"
            >
              <option value="30">30 Minuten</option>
              <option value="45">45 Minuten</option>
              <option value="60">60 Minuten</option>
              <option value="90">90 Minuten</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-c5-dark mb-2">
              📊 Ausgangssituation
            </label>
            <textarea
              value={data.situation}
              onChange={(e) => handleInputChange('situation', e.target.value)}
              placeholder="Beschreiben Sie die aktuelle Situation, den Kontext und den Anlass für das Gespräch..."
              className="form-textarea"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-c5-dark mb-2">
              🎯 Gewünschtes Ergebnis
            </label>
            <textarea
              value={data.goal}
              onChange={(e) => handleInputChange('goal', e.target.value)}
              placeholder="Was soll am Ende des Gesprächs erreicht sein? Welche konkreten Ergebnisse erwarten Sie?"
              className="form-textarea"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button onClick={generateQuestions} className="btn-primary">
          🎯 Passende Fragen
          <div className="text-sm opacity-75">Situationsspezifische Coaching-Fragen generieren</div>
        </button>
        <button onClick={createStructure} className="btn-secondary">
          📋 Gesprächsstruktur
          <div className="text-sm opacity-75">Professionellen Leitfaden erstellen</div>
        </button>
        <button className="btn-warning">
          🤖 KI-Beratung
          <div className="text-sm opacity-75">Expertentipps vom Coaching-Assistenten</div>
        </button>
      </div>

      {/* Generated Content */}
      {generatedContent && (
        <div className="animate-fadeInUp">
          {generatedContent}
        </div>
      )}
    </div>
  )
}