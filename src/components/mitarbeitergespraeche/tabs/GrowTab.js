export default function GrowTab({ data, setData, showNotification }) {
  const handleInputChange = (field, value) => {
    setData(prev => ({ ...prev, [field]: value }))
  }

  const growSteps = [
    {
      id: 'goal',
      title: 'GOAL - Ziel',
      icon: '🎯',
      description: 'Was möchten Sie erreichen?',
      questions: [
        'Was ist Ihr Ziel für dieses Gespräch?',
        'Was möchten Sie langfristig erreichen?',
        'Woran würden Sie erkennen, dass Sie Ihr Ziel erreicht haben?',
        'Wie wichtig ist Ihnen dieses Ziel auf einer Skala von 1-10?'
      ]
    },
    {
      id: 'reality',
      title: 'REALITY - Realität',
      icon: '🔍',
      description: 'Wie ist die aktuelle Situation?',
      questions: [
        'Wie sieht die aktuelle Situation aus?',
        'Was haben Sie bereits unternommen?',
        'Was sind die größten Herausforderungen?',
        'Welche Ressourcen stehen Ihnen zur Verfügung?'
      ]
    },
    {
      id: 'options',
      title: 'OPTIONS - Optionen',
      icon: '💡',
      description: 'Welche Möglichkeiten haben Sie?',
      questions: [
        'Welche Optionen sehen Sie?',
        'Was könnten Sie anders machen?',
        'Was würde jemand tun, den Sie bewundern?',
        'Was wäre, wenn es keine Hindernisse gäbe?'
      ]
    },
    {
      id: 'will',
      title: 'WILL - Wille',
      icon: '✅',
      description: 'Was werden Sie konkret tun?',
      questions: [
        'Was werden Sie als nächstes tun?',
        'Bis wann werden Sie das umsetzen?',
        'Welche Unterstützung benötigen Sie?',
        'Wie überwinden Sie mögliche Hindernisse?'
      ]
    }
  ]

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    showNotification('In Zwischenablage kopiert!', 'success')
  }

  const exportGrowModel = () => {
    const content = `
GROW-MODELL COACHING PROTOKOLL
================================

🎯 GOAL - ZIEL:
${data.goal || 'Nicht ausgefüllt'}

🔍 REALITY - REALITÄT:
${data.reality || 'Nicht ausgefüllt'}

💡 OPTIONS - OPTIONEN:
${data.options || 'Nicht ausgefüllt'}

✅ WILL - WILLE:
${data.will || 'Nicht ausgefüllt'}

================================
Erstellt am: ${new Date().toLocaleDateString('de-DE')}
    `.trim()

    copyToClipboard(content)
  }

  return (
    <div className="space-y-8 animate-fadeInUp">
      <h2 className="text-2xl font-bold text-c5-dark flex items-center gap-3">
        <div className="w-1 h-8 bg-c5-primary rounded"></div>
        GROW-Modell Coaching Framework
      </h2>

      {/* GROW Model Overview */}
      <div className="card card-primary">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-c5-dark mb-4">
            Strukturiertes Coaching mit dem GROW-Modell
          </h3>
          <p className="text-c5-text-light">
            Ein bewährtes Framework für zielorientierte Gespräche und nachhaltige Veränderung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {growSteps.map((step) => (
            <div key={step.id} className="text-center p-4 bg-white rounded-lg border-2 border-c5-light">
              <div className="text-3xl mb-2">{step.icon}</div>
              <h4 className="font-bold text-c5-dark mb-1">{step.title}</h4>
              <p className="text-sm text-c5-text-light">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GROW Steps */}
      {growSteps.map((step) => (
        <div key={step.id} className="card">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl">{step.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-c5-dark">{step.title}</h3>
              <p className="text-c5-text-light">{step.description}</p>
            </div>
          </div>

          {/* Questions for this step */}
          <div className="mb-6">
            <h4 className="font-semibold text-c5-dark mb-3">Hilfreiche Fragen:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {step.questions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => copyToClipboard(question)}
                  className="text-left p-3 bg-gray-50 rounded-lg hover:bg-c5-light transition-colors duration-200 text-sm"
                >
                  • {question}
                </button>
              ))}
            </div>
          </div>

          {/* Text area for this step */}
          <textarea
            value={data[step.id]}
            onChange={(e) => handleInputChange(step.id, e.target.value)}
            placeholder={`Notizen zu ${step.title}...`}
            className="form-textarea min-h-[150px]"
          />
        </div>
      ))}

      {/* Export Button */}
      <div className="text-center">
        <button onClick={exportGrowModel} className="btn-primary">
          📋 GROW-Protokoll kopieren
        </button>
      </div>
    </div>
  )
}