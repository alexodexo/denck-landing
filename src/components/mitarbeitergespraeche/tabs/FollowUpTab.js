export default function FollowUpTab({ data, setData, allData, downloadAsPDF, downloadAsJSON, showNotification }) {
  const handleInputChange = (field, value) => {
    setData(prev => ({ ...prev, [field]: value }))
  }

  const generateSummary = () => {
    const summary = `
Gespräch mit: ${allData.preparation.employeeName || 'N/A'}
Datum: ${new Date().toLocaleDateString('de-DE')}
Gesprächsart: ${allData.preparation.scenario || 'N/A'}

Hauptthemen:
- ${allData.preparation.situation || 'Keine Ausgangssituation dokumentiert'}

Wichtige Erkenntnisse aus dem Gespräch:
${allData.live.liveNotes || 'Keine Live-Notizen vorhanden'}

Nächste Schritte besprechen...
    `.trim()

    handleInputChange('summary', summary)
    showNotification('Zusammenfassung generiert!', 'success')
  }

  return (
    <div className="space-y-8 animate-fadeInUp">
      <h2 className="text-2xl font-bold text-c5-dark flex items-center gap-3">
        <div className="w-1 h-8 bg-c5-primary rounded"></div>
        Professionelle Nachbereitung
      </h2>

      {/* Summary Section */}
      <div className="card card-primary">
        <h3 className="text-xl font-semibold text-c5-dark mb-6">📋 Gesprächszusammenfassung</h3>
        
        <div className="mb-6">
          <button onClick={generateSummary} className="btn-primary mb-4">
            🔄 Zusammenfassung generieren
          </button>
          
          <textarea
            value={data.summary}
            onChange={(e) => handleInputChange('summary', e.target.value)}
            placeholder="Fassen Sie die wichtigsten Punkte des Gesprächs zusammen..."
            className="form-textarea min-h-[200px]"
          />
        </div>
      </div>

      {/* Agreements Section */}
      <div className="card card-success">
        <h3 className="text-xl font-semibold text-c5-dark mb-6">✅ Vereinbarungen & Maßnahmen</h3>
        
        <textarea
          value={data.agreements}
          onChange={(e) => handleInputChange('agreements', e.target.value)}
          placeholder="• Vereinbarte Maßnahme 1 (Verantwortlich: Name, Termin: Datum)&#10;• Vereinbarte Maßnahme 2...&#10;• ..."
          className="form-textarea min-h-[150px]"
        />
      </div>

      {/* Follow-up Planning */}
      <div className="card card-accent">
        <h3 className="text-xl font-semibold text-c5-dark mb-6">🔄 Follow-up Planung</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-c5-dark mb-2">
              📅 Nächster Termin
            </label>
            <input
              type="date"
              value={data.followUpDate}
              onChange={(e) => handleInputChange('followUpDate', e.target.value)}
              className="form-input"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-c5-dark mb-2">
              ⭐ Bewertung des Gesprächs
            </label>
            <select
              value={data.rating}
              onChange={(e) => handleInputChange('rating', e.target.value)}
              className="form-input"
            >
              <option value="">Bitte wählen...</option>
              <option value="5">⭐⭐⭐⭐⭐ Sehr erfolgreich</option>
              <option value="4">⭐⭐⭐⭐ Erfolgreich</option>
              <option value="3">⭐⭐⭐ Zufriedenstellend</option>
              <option value="2">⭐⭐ Verbesserungswürdig</option>
              <option value="1">⭐ Schwierig</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6">
          <label className="block text-sm font-semibold text-c5-dark mb-2">
            📝 Themen für das nächste Gespräch
          </label>
          <textarea
            value={data.followUpTopics}
            onChange={(e) => handleInputChange('followUpTopics', e.target.value)}
            placeholder="• Fortschritt bei vereinbarten Maßnahmen überprüfen&#10;• Neue Entwicklungen besprechen&#10;• ..."
            className="form-textarea"
          />
        </div>
      </div>

      {/* Personal Reflection */}
      <div className="card">
        <h3 className="text-xl font-semibold text-c5-dark mb-6">💭 Persönliche Reflexion</h3>
        
        <textarea
          value={data.reflection}
          onChange={(e) => handleInputChange('reflection', e.target.value)}
          placeholder="Was lief gut? Was könnte ich beim nächsten Mal anders machen? Welche Erkenntnisse nehme ich mit?"
          className="form-textarea min-h-[150px]"
        />
      </div>

      {/* Export Options */}
      <div className="card" style={{background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)'}}>
        <h3 className="text-xl font-semibold text-c5-dark mb-6">📤 Dokumentation exportieren</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button onClick={downloadAsPDF} className="btn-download">
            📄 Als PDF-Protokoll
            <div className="text-sm opacity-75">Formatiertes Dokument für die Ablage</div>
          </button>
          
          <button onClick={downloadAsJSON} className="btn-primary">
            💾 Als JSON-Datei
            <div className="text-sm opacity-75">Für Archivierung und Wiederverwendung</div>
          </button>
        </div>
      </div>
    </div>
  )
}