// src/pages/index.js
import HeroSection from '../components/home/HeroSection'
import ProblemSolutionSection from '../components/home/ProblemSolutionSection'
import ServicesSection from '../components/home/ServicesSection'
import ProcessSection from '../components/home/ProcessSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import CTASection from '../components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'DENCK Consulting - KI-Beratung für den Mittelstand',
      description: 'Wir machen Künstliche Intelligenz für Ihr Unternehmen nutzbar. Steigern Sie Ihre Effizienz, senken Sie Kosten und gewinnen Sie Kunden mit KI.'
    }
  }
}