import { useEffect } from 'react'
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaTimesCircle } from 'react-icons/fa'

export default function NotificationSystem({ notifications }) {
  const getIcon = (type) => {
    switch (type) {
      case 'success': return <FaCheckCircle className="text-green-500" />
      case 'warning': return <FaExclamationTriangle className="text-yellow-500" />
      case 'error': return <FaTimesCircle className="text-red-500" />
      default: return <FaInfoCircle className="text-blue-500" />
    }
  }

  const getBgColor = (type) => {
    switch (type) {
      case 'success': return 'bg-green-50 border-green-200'
      case 'warning': return 'bg-yellow-50 border-yellow-200'
      case 'error': return 'bg-red-50 border-red-200'
      default: return 'bg-blue-50 border-blue-200'
    }
  }

  return (
    <div className="fixed top-6 right-6 z-50 space-y-3">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`flex items-center gap-3 p-4 rounded-lg border shadow-lg min-w-[300px] transform transition-all duration-300 translate-x-0 ${getBgColor(notification.type)}`}
        >
          {getIcon(notification.type)}
          <span className="flex-1 font-medium">{notification.message}</span>
        </div>
      ))}
    </div>
  )
}