import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundType = 'gradient', // 'gradient', 'image', 'solid'
  backgroundImage,
  children,
  className = ''
}) {
  const backgroundClasses = {
    gradient: 'bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900',
    image: 'bg-navy-900 relative',
    solid: 'bg-navy-900'
  }

  return (
    <section className={`relative text-white overflow-hidden ${backgroundClasses[backgroundType]} ${className}`}>
      {/* Background Image */}
      {backgroundType === 'image' && backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-primary-900/70" />
        </>
      )}
      
      {/* Background Overlay for gradient */}
      {backgroundType === 'gradient' && (
        <div className="absolute inset-0 bg-black/20" />
      )}

      <div className="container-width section-padding relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          {title && (
            <h1 className="hero-text mb-6 animate-fade-in text-5xl sm:text-6xl lg:text-7xl font-bold drop-shadow bg-orange-600 text-white px-4 py-2 inline-block">
              {title}
            </h1>
          )}


          
          {/* Subtitle */}
          {subtitle && (
            <div className="text-2xl sm:text-3xl font-semibold text-primary-200 mb-6 animate-slide-up animation-delay-200">
              {subtitle}
            </div>
          )}
          
          {/* Description */}
          {description && (
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto animate-slide-up animation-delay-400">
              {description}
            </p>
          )}
          
          {/* CTA Buttons */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-slide-up animation-delay-600">
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-navy-900 bg-white border border-transparent rounded-lg shadow-lg hover:bg-gray-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 group"
                >
                  {primaryCTA.text}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              )}
              
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200"
                >
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          )}
          
          {/* Custom Content */}
          {children && (
            <div className="animate-slide-up animation-delay-800">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}