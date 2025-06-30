export default function TutorialModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-c5-primary">🎯 Tutorial</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
          </div>
        </div>
        <div className="p-6 text-center">
          <p className="text-lg text-c5-text">Tutorial wird geladen...</p>
        </div>
      </div>
    </div>
  )
}