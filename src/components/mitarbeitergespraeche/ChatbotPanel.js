import { useState, useRef, useEffect } from 'react'
import { FaPaperPlane, FaRobot } from 'react-icons/fa'

export default function ChatbotPanel({ currentTab, currentScenario, showNotification }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Willkommen! Ich bin Ihr professioneller Coaching-Assistent und unterstütze Sie bei allen Aspekten der Gesprächsführung. Wie kann ich Ihnen heute helfen?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickTips = [
    { 
      label: '🎯 Einstiegsfragen', 
      message: 'Gib mir 5 kraftvolle Einstiegsfragen für ein Entwicklungsgespräch.' 
    },
    { 
      label: '🛡️ Widerstand überwinden', 
      message: 'Wie gehe ich professionell mit Widerstand und Einwänden um?' 
    },
    { 
      label: '🕊️ Deeskalation', 
      message: 'Welche Deeskalationstechniken helfen bei emotional aufgeladenen Gesprächen?' 
    },
    { 
      label: '🗣️ Gesprächsaktivierung', 
      message: 'Wie kann ich schweigsame Mitarbeiter zum Sprechen motivieren?' 
    }
  ]

  const generateResponse = (message) => {
    const lowerMessage = message.toLowerCase()
    
    const responses = {
      'einstiegsfragen': 'Hier sind 5 kraftvolle Einstiegsfragen für Entwicklungsgespräche: 1) "Was motiviert Sie am meisten in Ihrer aktuellen Rolle?" 2) "Welche Aufgaben bereiten Ihnen besondere Freude?" 3) "Wo sehen Sie sich beruflich in 2-3 Jahren?" 4) "Was sind Ihre größten beruflichen Stärken?" 5) "In welchen Bereichen möchten Sie sich weiterentwickeln?"',
      
      'widerstand': 'Bei Widerstand nutzen Sie die CALM-Technik: C-urious bleiben (neugierig statt defensiv), A-cknowledge (Gefühle anerkennen), L-isten (aktiv zuhören), M-anage (Situation steuern). Fragen Sie: "Was bereitet Ihnen Sorgen bei dieser Veränderung?" und entwickeln Sie gemeinsam Lösungen.',
      
      'deeskalation': 'Effektive Deeskalationstechniken: 1) Ruhig und langsam sprechen, 2) Aktiv zuhören ohne zu unterbrechen, 3) Gefühle anerkennen: "Ich verstehe, dass das frustrierend ist", 4) Gemeinsame Interessen betonen, 5) Pausen einlegen wenn nötig. Fokus auf Lösungen statt Probleme.',
      
      'schweigsam': 'Für schweigsame Mitarbeiter: 1) Offene Fragen stellen, 2) Ausreichend Bedenkzeit geben, 3) Ermutigen: "Ihre Meinung ist wichtig", 4) Kleinere Themen beginnen, 5) Eigene Erfahrungen teilen um Vertrauen zu schaffen. Geduld ist der Schlüssel!'
    }
    
    for (const [key, response] of Object.entries(responses)) {
      if (lowerMessage.includes(key)) {
        return response
      }
    }
    
    // Context-aware responses
    if (currentTab === 'timeline') {
      return 'Für die Timeline-Planung empfehle ich: Klare Termine setzen, passende Einladungstexte wählen und alle Details vorab klären. Welcher Aspekt der Terminplanung beschäftigt Sie?'
    }
    
    if (currentTab === 'conduct') {
      return 'Während der Gesprächsführung: Nutzen Sie die Live-Mitschrift für wichtige Punkte, bleiben Sie bei der GROW-Struktur und scheuen Sie sich nicht, Pausen einzulegen. Was ist Ihre aktuelle Herausforderung?'
    }
    
    return 'Das ist eine interessante Frage! Ich kann Ihnen bei Timeline-Planung, Gesprächsführung, GROW-Modell und schwierigen Situationen helfen. Erzählen Sie mir mehr über Ihre spezifische Herausforderung.'
  }

  const sendMessage = async (messageText = inputValue) => {
    if (!messageText.trim()) return

    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: generateResponse(messageText),
        sender: 'bot',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="card card-accent h-fit sticky top-6">
      <h3 className="text-xl font-semibold text-c5-dark mb-6 flex items-center gap-3">
        <FaRobot className="text-c5-primary" />
        C5 Coaching Assistent
      </h3>
      
      {/* Chat Window */}
      <div className="border-2 border-gray-200 rounded-xl h-96 flex flex-col overflow-hidden">
        <div className="bg-gradient-to-r from-c5-primary to-c5-secondary text-white p-4 text-center font-semibold">
          💬 Ihr KI-Coaching Partner
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`max-w-[85%] p-3 rounded-2xl animate-slideIn ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-c5-primary to-c5-secondary text-white ml-auto rounded-br-md'
                  : 'bg-white border border-gray-200 mr-auto rounded-bl-md'
              }`}
            >
              <div className="text-sm leading-relaxed">{message.text}</div>
            </div>
          ))}
          
          {isTyping && (
            <div className="max-w-[85%] bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-md mr-auto">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-4 bg-white border-t flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ihre Frage oder Herausforderung..."
            className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-c5-primary"
          />
          <button
            onClick={() => sendMessage()}
            className="bg-gradient-to-r from-c5-primary to-c5-secondary text-white p-2 rounded-full hover:shadow-lg transition-all duration-300"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="mt-6">
        <h4 className="font-semibold text-c5-dark mb-4">💡 Experten-Shortcuts</h4>
        <div className="space-y-3">
          {quickTips.map((tip, index) => (
            <button
              key={index}
              onClick={() => sendMessage(tip.message)}
              className="w-full text-left p-3 bg-gray-100 hover:bg-c5-light border-2 border-gray-200 hover:border-c5-primary rounded-lg transition-all duration-300 text-sm"
            >
              <strong>{tip.label.split(' ')[0]}</strong> {tip.label.substring(2)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-c5-light rounded-lg text-sm text-c5-text-light">
        <strong className="text-c5-primary">💡 Tipp:</strong> Nutzen Sie den Assistenten für situationsspezifische Beratung während Ihrer Gespräche.
      </div>
    </div>
  )
}