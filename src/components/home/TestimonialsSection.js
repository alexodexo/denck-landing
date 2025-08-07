// src/components/home/TestimonialsSection.js
import { Star } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Denck Solutions hat unsere Kundenservice-Prozesse revolutioniert. Die KI-Lösung bearbeitet nun 70% der Anfragen automatisch.",
      author: "Dr. Sarah Weber",
      position: "CDO, FinTech Unternehmen",
      company: "FinTech Solutions GmbH",
      rating: 5
    },
    {
      text: "Dank der KI-Strategie von DENCK konnten wir unsere Produktionseffizienz um 45% steigern. Ein absoluter Game-Changer!",
      author: "Michael Schmidt",
      position: "CEO, Mittelständisches Produktionsunternehmen",
      company: "Schmidt Manufacturing AG",
      rating: 5
    },
    {
      text: "Die Expertise und der pragmatische Ansatz haben uns geholfen, KI sinnvoll und gewinnbringend einzusetzen.",
      author: "Lisa Chen",
      position: "Head of Innovation, Retail",
      company: "Future Retail Group",
      rating: 5
    }
  ]

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            Was unsere Kunden sagen
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Erfolgsgeschichten aus der Praxis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="border-t pt-4">
                <div className="font-semibold text-slate-900">{testimonial.author}</div>
                <div className="text-sm text-slate-500">{testimonial.position}</div>
                <div className="text-xs text-slate-400">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}