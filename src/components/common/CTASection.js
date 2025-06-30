import Link from 'next/link'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function CTASection({ 
  variant = 'transformation', // 'transformation' or 'coaching'
  className = '',
  background = 'gradient' // 'gradient', 'solid', 'image'
}) {
  const isCoaching = variant === 'coaching'
  
  const backgroundClasses = {
    gradient: 'bg-gradient-to-br from-primary-600 via-primary-700 to-navy-800',
    solid: 'bg-navy-900',
    image: 'bg-navy-900 relative overflow-hidden'
  }

  const content = {
    transformation: {
      title: 'Ihre Transformation beginnt jetzt',
      subtitle: 'Lassen Sie uns gemeinsam Ihre Herausforderungen analysieren und nachhaltige Lösungen entwickeln.',
      primaryCTA: {
        text: 'Beratung anfragen',
        href: '/transformationskontinuum/kontakt'
      },
      secondaryCTA: {
        text: 'Mehr erfahren',
        href: '/transformationskontinuum/ueber-uns'
      },
      contact: {
        phone: '069 - 9753 4440',
        email: 'berater@c5-business-partner.de'
      }
    },
    coaching: {
      title: 'Bereit für Veränderung?',
      subtitle: 'Vereinbaren Sie ein unverbindliches Erstgespräch und erfahren Sie, wie Coaching Ihnen helfen kann.',
      primaryCTA: {
        text: 'Erstgespräch vereinbaren',
        href: '/frankfurt-business-coach/kontakt'
      },
      secondaryCTA: {
        text: 'Über mich',
        href: '/frankfurt-business-coach/coach'
      },
      contact: {
        phone: '069 - 9753 4440',
        email: 'egartner@frankfurt-business-coach.de'
      }
    }
  }

  const currentContent = content[variant]

  return (
    <section className={`${backgroundClasses[background]} text-white ${className}`}>
      {background === 'image' && (
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-primary-900/90" />
      )}
      
      <div className="container-width section-padding relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6  text-white">
            {currentContent.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href={currentContent.primaryCTA.href}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-navy-900 bg-white border border-transparent rounded-lg shadow-lg hover:bg-gray-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 group"
            >
              {currentContent.primaryCTA.text}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link
              href={currentContent.secondaryCTA.href}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200"
            >
              {currentContent.secondaryCTA.text}
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-200">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <a 
                href={`tel:${currentContent.contact.phone.replace(/\s|-/g, '')}`}
                className="hover:text-white transition-colors duration-200"
              >
                {currentContent.contact.phone}
              </a>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-400" />
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <a 
                href={`mailto:${currentContent.contact.email}`}
                className="hover:text-white transition-colors duration-200"
              >
                {currentContent.contact.email}
              </a>
            </div>
          </div>
          
          {/* Additional Info for Coaching */}
          {isCoaching && (
            <p className="text-sm text-gray-300 mt-6">
              Abend- und Samstagstermine nach Absprache möglich
            </p>
          )}
        </div>
      </div>
    </section>
  )
}