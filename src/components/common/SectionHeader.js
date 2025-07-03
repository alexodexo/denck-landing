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
  const textColor = variant === 'light' ? 'text-slate-900' : 'text-white'
  const subtitleColor = variant === 'light' ? 'text-slate-600' : 'text-slate-300'
  const badgeColor = variant === 'light' 
    ? 'bg-slate-800/80 border-slate-600/50 text-slate-200' 
    : 'bg-slate-800/80 border-slate-600/50 text-white'

  const renderTitle = () => {
    if (highlightedWords.length === 0) {
      return <span>{title}</span>
    }

    let processedTitle = title
    highlightedWords.forEach((word, index) => {
      const gradients = [
        'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400',
        'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400',
        'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400',
        'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400'
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
          <div className={`flex items-center justify-center space-x-3 px-6 py-3 ${badgeColor} backdrop-blur-xl border rounded-full shadow-2xl`}>
            {BadgeIcon && <BadgeIcon className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400" />}
            <span className="font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text animate-gradient bg-300%">
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