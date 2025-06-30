import { 
  FaCalendarAlt, 
  FaClipboardList, 
  FaComments, 
  FaFileAlt, 
  FaSeedling 
} from 'react-icons/fa'

const tabs = [
  { id: 'timeline', label: 'Timeline', icon: FaCalendarAlt },
  { id: 'prepare', label: 'Vorbereiten', icon: FaClipboardList },
  { id: 'conduct', label: 'Führen', icon: FaComments },
  { id: 'follow', label: 'Nachbereiten', icon: FaFileAlt },
  { id: 'grow', label: 'GROW-Modell', icon: FaSeedling },
]

export default function TabNavigation({ activeTab, onTabChange }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 bg-gray-100 rounded-xl p-2 gap-2 mb-8">
      {tabs.map((tab) => {
        const Icon = tab.icon
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-c5-primary text-white shadow-lg -translate-y-1'
                : 'text-c5-text-light hover:bg-gray-200 hover:text-c5-text'
            }`}
          >
            <Icon className="text-lg" />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}