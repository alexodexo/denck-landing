import { FaGraduationCap } from 'react-icons/fa'

export default function Header({ onShowTutorial }) {
  return (
    <div className="card card-primary mb-8 relative">
      <button
        onClick={onShowTutorial}
        className="absolute top-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 animate-pulse-custom flex items-center gap-2"
      >
        <FaGraduationCap />
        Tutorial starten
      </button>
      
      <div className="text-center">
        <div className="inline-block bg-c5-primary text-white px-4 py-2 rounded-lg font-bold text-xl mb-4 tracking-wider">
          C5
        </div>
        <h1 className="text-5xl font-bold text-c5-dark mb-4">
          Leadership Coaching Assistant
        </h1>
        <p className="text-xl text-c5-text-light mb-6">
          Professionelle Begleitung für wirkungsvolle Führungsgespräche
        </p>
        <div className="inline-block bg-c5-light px-6 py-3 rounded-lg text-c5-primary font-semibold">
          Von HR-Experten entwickelt • Für Führungskräfte optimiert
        </div>
      </div>
      
      <div className="absolute bottom-4 right-6 text-sm text-c5-text-light italic">
        Entwickelt von C5 Mario Egartner und Claude
      </div>
    </div>
  )
}