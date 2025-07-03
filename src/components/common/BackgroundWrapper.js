// src/components/common/BackgroundWrapper.js
import { useEffect, useRef, useState } from 'react'

export default function BackgroundWrapper({ 
  children, 
  variant = 'default', 
  className = '',
  animated = true,
  particles = true,
  gradientOrbs = true 
}) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const getBackgroundVariant = () => {
    switch (variant) {
      case 'hero':
        return 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
      case 'dark':
        return 'bg-slate-900'
      case 'darker':
        return 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900'
      case 'light':
        return 'bg-gradient-to-br from-slate-50 to-slate-100'
      default:
        return 'bg-slate-900'
    }
  }

  const getParticleColors = () => {
    if (variant === 'light') {
      return [
        'bg-slate-300',
        'bg-slate-400',
        'bg-slate-500',
        'bg-blue-300'
      ]
    }
    return [
      'bg-blue-400',
      'bg-purple-400',
      'bg-green-400',
      'bg-yellow-400'
    ]
  }

  const particleColors = getParticleColors()

  return (
    <section 
      ref={sectionRef} 
      className={`relative overflow-hidden ${getBackgroundVariant()} ${className}`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Neural Network Animation */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10">
            <defs>
              <pattern id="neural-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill={variant === 'light' ? '#64748b' : '#64748b'} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-grid)" />
          </svg>
        </div>
        
        {/* Floating Particles */}
        {particles && animated && (
          <>
            <div className={`absolute top-10 left-10 w-2 h-2 ${particleColors[0]} rounded-full animate-pulse`} />
            <div className={`absolute top-20 right-20 w-3 h-3 ${particleColors[1]} rounded-full animate-pulse`} style={{ animationDelay: '1s' }} />
            <div className={`absolute bottom-20 left-1/3 w-2 h-2 ${particleColors[2]} rounded-full animate-pulse`} style={{ animationDelay: '2s' }} />
            <div className={`absolute bottom-10 right-1/4 w-4 h-4 ${particleColors[3]} rounded-full animate-pulse`} style={{ animationDelay: '3s' }} />
            <div className={`absolute top-1/2 left-20 w-2 h-2 ${particleColors[0]} rounded-full animate-pulse`} style={{ animationDelay: '4s' }} />
            <div className={`absolute top-1/3 right-1/3 w-3 h-3 ${particleColors[1]} rounded-full animate-pulse`} style={{ animationDelay: '5s' }} />
          </>
        )}
        
        {/* Gradient Orbs */}
        {gradientOrbs && (
          <>
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-[150px] opacity-20" />
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-[150px] opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500 rounded-full filter blur-[120px] opacity-10" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}