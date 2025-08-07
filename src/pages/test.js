import { useState, useEffect } from 'react'

export default function TestPage() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    console.log('TestPage useEffect triggered')
    const timer = setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Test Page</h1>
        <p className="text-lg">Count: {count}</p>
        <p className="text-sm text-gray-600 mt-2">
          Diese Seite lädt sich nicht neu, wenn alles normal ist.
        </p>
      </div>
    </div>
  )
} 