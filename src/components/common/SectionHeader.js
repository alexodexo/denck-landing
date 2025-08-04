// src/components/common/SectionHeader.js
export default function SectionHeader({ 
  badge,
  badgeIcon: BadgeIcon,
  title,
  highlightedWords = [],
  subtitle,
  centered = true,
  variant = 'dark' // 'dark' | 'light'
}) {
  const textColor = variant === 'light' ? 'text-marine-900' : 'text-marine-900'
  const subtitleColor = variant === 'light' ? 'text-text-secondary' : 'text-text-secondary'
  const badgeColor = variant === 'light' 
    ? 'bg-gold-100 border-gold-200 text-gold-700' 
    : 'bg-gold-100 border-gold-200 text-gold-700'

  const renderTitle = () => {
    if (highlightedWords.length === 0) {
      return <span>{title}</span>
    }

    let processedTitle = title
    highlightedWords.forEach((word, index) => {
      const gradients = [
        'gradient-text',
        'text-gold-600',
        'text-marine-700',
        'gradient-text'
      ]
      const gradientClass = gradients[index % gradients.length]
      processedTitle = processedTitle.replace(
        word, 
        `<span class="${gradientClass} animate-gradient bg-300%">${word}</span>`
      )
    })

    return <span dangerouslySetInnerHTML={{ __html: processedTitle }} />
  }

  return (
    <div className={`${centered ? 'text-center' : ''} mb-16`}>
      {badge && (
        <div className="inline-block mb-6">
          <div className={`flex items-center justify-center space-x-3 px-6 py-3 ${badgeColor} backdrop-blur-xl border rounded-full shadow-lg`}>
            {BadgeIcon && <BadgeIcon className="w-6 h-6 text-gold-600" />}
            <span className="font-medium">
              {badge}
            </span>
          </div>
        </div>
      )}
      
      <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${textColor}`}>
        {renderTitle()}
      </h2>
      
      {subtitle && (
        <p className={`text-xl ${subtitleColor} max-w-3xl ${centered ? 'mx-auto' : ''} leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}