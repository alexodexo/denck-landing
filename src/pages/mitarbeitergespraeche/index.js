import { useState, useEffect, useCallback } from 'react'
import Layout from '../../components/mitarbeitergespraeche/Layout'
import Header from '../../components/mitarbeitergespraeche/Header'
import TabNavigation from '../../components/mitarbeitergespraeche/TabNavigation'
import TimelineTab from '../../components/mitarbeitergespraeche/tabs/TimelineTab'
import PrepareTab from '../../components/mitarbeitergespraeche/tabs/PrepareTab'
import ConductTab from '../../components/mitarbeitergespraeche/tabs/ConductTab'
import FollowUpTab from '../../components/mitarbeitergespraeche/tabs/FollowUpTab'
import GrowTab from '../../components/mitarbeitergespraeche/tabs/GrowTab'
import ChatbotPanel from '../../components/mitarbeitergespraeche/ChatbotPanel'
import TutorialModal from '../../components/mitarbeitergespraeche/TutorialModal'
import NotificationSystem from '../../components/mitarbeitergespraeche/NotificationSystem'

export default function Mitarbeitergespraeche() {
  // State Management
  const [activeTab, setActiveTab] = useState('timeline')
  const [showTutorial, setShowTutorial] = useState(false)
  const [notifications, setNotifications] = useState([])
  
  // Conversation Data State
  const [conversationData, setConversationData] = useState({
    startTime: null,
    questionsUsed: 0,
    notesCount: 0,
    liveEntries: 0,
    currentPhase: 'Timeline & Planung'
  })
  
  // Timeline State
  const [timelineData, setTimelineData] = useState({
    meetingDate: '',
    meetingTime: '',
    meetingDuration: '45',
    meetingType: 'presence',
    meetingLocation: '',
    meetingLink: '',
    meetingId: '',
    invitationText: '',
    invitationTone: 'formal',
    invitationPurpose: 'development',
    invitationPreparation: '',
    timelineEntries: [],
    currentStatus: 'planning'
  })
  
  // Preparation State
  const [preparationData, setPreparationData] = useState({
    employeeName: '',
    scenario: '',
    situation: '',
    goal: '',
    duration: '45'
  })
  
  // Live Conversation State
  const [liveData, setLiveData] = useState({
    liveNotes: '',
    liveTranscript: [],
    isRecording: false,
    autoSaveEnabled: true,
    progress: 0
  })
  
  // Follow-up State
  const [followUpData, setFollowUpData] = useState({
    summary: '',
    agreements: '',
    followUpDate: '',
    followUpTopics: '',
    reflection: '',
    rating: ''
  })
  
  // GROW Model State
  const [growData, setGrowData] = useState({
    goal: '',
    reality: '',
    options: '',
    will: ''
  })

  // Safe localStorage functions
  const safeLocalStorageGet = useCallback((key, defaultValue = null) => {
    if (typeof window === 'undefined') return defaultValue
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (e) {
      console.warn('localStorage access failed:', e)
      return defaultValue
    }
  }, [])

  const safeLocalStorageSet = useCallback((key, value) => {
    if (typeof window === 'undefined') return false
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (e) {
      console.warn('localStorage save failed:', e)
      return false
    }
  }, [])

  // Notification system
  const showNotification = useCallback((message, type = 'info') => {
    const id = Date.now()
    const newNotification = { id, message, type }
    setNotifications(prev => [...prev, newNotification])
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }, 5000)
  }, [])

  // Auto-save functionality
  useEffect(() => {
    if (liveData.autoSaveEnabled && typeof window !== 'undefined') {
      const saveData = {
        timelineData,
        preparationData,
        liveData,
        followUpData,
        growData,
        conversationData
      }
      safeLocalStorageSet('c5-coaching-autosave', saveData)
    }
  }, [timelineData, preparationData, liveData, followUpData, growData, conversationData, safeLocalStorageSet])

  // Load saved data on mount
  useEffect(() => {
    const savedData = safeLocalStorageGet('c5-coaching-autosave')
    if (savedData) {
      setTimelineData(prev => ({ ...prev, ...savedData.timelineData }))
      setPreparationData(prev => ({ ...prev, ...savedData.preparationData }))
      setLiveData(prev => ({ ...prev, ...savedData.liveData }))
      setFollowUpData(prev => ({ ...prev, ...savedData.followUpData }))
      setGrowData(prev => ({ ...prev, ...savedData.growData }))
      setConversationData(prev => ({ ...prev, ...savedData.conversationData }))
    }
  }, [safeLocalStorageGet])

  // Timer functionality
  useEffect(() => {
    let interval
    if (conversationData.startTime) {
      interval = setInterval(() => {
        setConversationData(prev => ({
          ...prev,
          elapsedTime: Date.now() - prev.startTime
        }))
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [conversationData.startTime])

  // Tab change handler
  const handleTabChange = useCallback((tabName) => {
    setActiveTab(tabName)
    const phases = {
      'timeline': 'Timeline & Planung',
      'prepare': 'Vorbereitung',
      'conduct': 'Durchführung',
      'follow': 'Nachbereitung',
      'grow': 'GROW-Coaching'
    }
    setConversationData(prev => ({
      ...prev,
      currentPhase: phases[tabName]
    }))
  }, [])

  // Start timer
  const startTimer = useCallback(() => {
    if (!conversationData.startTime) {
      setConversationData(prev => ({
        ...prev,
        startTime: Date.now()
      }))
    }
  }, [conversationData.startTime])

  // Add timeline entry
  const addTimelineEntry = useCallback((description, type = 'info') => {
    const timestamp = new Date()
    const entry = {
      id: Date.now(),
      description,
      timestamp,
      type,
      timeString: timestamp.toLocaleString('de-DE')
    }
    
    setTimelineData(prev => ({
      ...prev,
      timelineEntries: [...prev.timelineEntries, entry]
    }))
  }, [])

  // Update timeline status
  const updateTimelineStatus = useCallback((status) => {
    setTimelineData(prev => ({
      ...prev,
      currentStatus: status
    }))
  }, [])

  // Export functions
  const exportAllData = useCallback(() => {
    const allData = {
      metadata: {
        employee: preparationData.employeeName,
        date: new Date().toISOString(),
        scenario: preparationData.scenario,
        duration: preparationData.duration,
        version: '2.0',
        developer: 'C5 Mario Egartner'
      },
      timeline: timelineData,
      preparation: preparationData,
      conversation: {
        ...liveData,
        questionsUsed: conversationData.questionsUsed,
        notesCount: conversationData.notesCount,
        progress: liveData.progress
      },
      followUp: followUpData,
      grow: growData,
      stats: conversationData
    }
    
    return allData
  }, [timelineData, preparationData, liveData, followUpData, growData, conversationData])

  const downloadAsJSON = useCallback(() => {
    const data = exportAllData()
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `C5-Coaching-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
    showNotification('Daten als JSON exportiert!', 'success')
  }, [exportAllData, showNotification])

  const downloadAsPDF = useCallback(() => {
    const data = exportAllData()
    const content = generatePDFContent(data)
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `C5-Coaching-Protokoll-${new Date().toISOString().split('T')[0]}.txt`
    a.click()
    URL.revokeObjectURL(url)
    showNotification('PDF-Protokoll exportiert!', 'success')
  }, [exportAllData, showNotification])

  const generatePDFContent = (data) => {
    return `
C5 LEADERSHIP COACHING PROTOKOLL
════════════════════════════════════════

📋 GESPRÄCHSDATEN
─────────────────────────────────────
Mitarbeiter:     ${data.metadata.employee || 'N/A'}
Datum:           ${new Date(data.metadata.date).toLocaleDateString('de-DE')}
Dauer:           ${data.metadata.duration} Minuten
Gesprächsart:    ${data.metadata.scenario || 'Allgemein'}
Entwickler:      ${data.metadata.developer}

📝 TIMELINE
─────────────────────────────────────
${data.timeline.timelineEntries.map((entry, index) => 
  `${index + 1}. [${entry.timeString}] ${entry.description}`
).join('\n')}

📊 VORBEREITUNG
─────────────────────────────────────
Situation: ${data.preparation.situation || 'Keine Angaben'}
Ziel: ${data.preparation.goal || 'Keine Angaben'}

💬 GESPRÄCHSVERLAUF
─────────────────────────────────────
Live-Notizen: ${data.conversation.liveNotes || 'Keine Notizen'}

Live-Mitschrift:
${data.conversation.liveTranscript?.map((entry, index) => 
  `${index + 1}. [${entry.timeString}] ${entry.type.toUpperCase()}: ${entry.text}`
).join('\n') || 'Keine Live-Mitschrift'}

✅ NACHBEREITUNG
─────────────────────────────────────
Zusammenfassung: ${data.followUp.summary || 'Keine Zusammenfassung'}
Vereinbarungen: ${data.followUp.agreements || 'Keine Vereinbarungen'}
Follow-up: ${data.followUp.followUpDate || 'Offen'}

🌱 GROW-MODELL
─────────────────────────────────────
GOAL: ${data.grow.goal || 'Nicht ausgefüllt'}
REALITY: ${data.grow.reality || 'Nicht ausgefüllt'}
OPTIONS: ${data.grow.options || 'Nicht ausgefüllt'}
WILL: ${data.grow.will || 'Nicht ausgefüllt'}

📈 STATISTIKEN
─────────────────────────────────────
Fragen verwendet: ${data.stats.questionsUsed}
Notizen erstellt: ${data.stats.notesCount}
Live-Einträge: ${data.stats.liveEntries}
Fortschritt: ${data.conversation.progress}%

════════════════════════════════════════
Erstellt mit C5 Leadership Coaching Assistant
© C5 Business Partner - Entwickelt von Mario Egartner
    `
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <Header onShowTutorial={() => setShowTutorial(true)} />
        
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mb-8">
          <div className="xl:col-span-3">
            <div className="card">
              <TabNavigation 
                activeTab={activeTab} 
                onTabChange={handleTabChange}
              />
              
              {activeTab === 'timeline' && (
                <TimelineTab
                  data={timelineData}
                  setData={setTimelineData}
                  addTimelineEntry={addTimelineEntry}
                  updateTimelineStatus={updateTimelineStatus}
                  showNotification={showNotification}
                />
              )}
              
              {activeTab === 'prepare' && (
                <PrepareTab
                  data={preparationData}
                  setData={setPreparationData}
                  timelineData={timelineData}
                  showNotification={showNotification}
                />
              )}
              
              {activeTab === 'conduct' && (
                <ConductTab
                  data={liveData}
                  setData={setLiveData}
                  conversationData={conversationData}
                  setConversationData={setConversationData}
                  startTimer={startTimer}
                  showNotification={showNotification}
                />
              )}
              
              {activeTab === 'follow' && (
                <FollowUpTab
                  data={followUpData}
                  setData={setFollowUpData}
                  allData={{
                    timeline: timelineData,
                    preparation: preparationData,
                    live: liveData,
                    conversation: conversationData
                  }}
                  downloadAsPDF={downloadAsPDF}
                  downloadAsJSON={downloadAsJSON}
                  showNotification={showNotification}
                />
              )}
              
              {activeTab === 'grow' && (
                <GrowTab
                  data={growData}
                  setData={setGrowData}
                  showNotification={showNotification}
                />
              )}
            </div>
          </div>
          
          <div className="xl:col-span-1">
            <ChatbotPanel
              currentTab={activeTab}
              currentScenario={preparationData.scenario}
              showNotification={showNotification}
            />
          </div>
        </div>
        
        {/* Footer */}
        <div className="card text-center">
          <p className="text-lg font-semibold text-c5-dark">
            <strong>C5 Business Partner</strong> - Leadership Coaching Tool
          </p>
          <p className="text-c5-text-light mt-2">
            Entwickelt von C5 Mario Egartner für professionelle Führungskräfte • Version 2.0
          </p>
        </div>
      </div>
      
      {showTutorial && (
        <TutorialModal onClose={() => setShowTutorial(false)} />
      )}
      
      <NotificationSystem notifications={notifications} />
    </Layout>
  )
}