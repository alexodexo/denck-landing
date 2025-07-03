// src/pages/index.js
import HeroSection from '../components/home/HeroSection'
import ProblemSolutionSection from '../components/home/ProblemSolutionSection'
import UseCasesSection from '../components/home/UseCasesSection'
import StatisticsSection from '../components/home/StatisticsSection'
import ProcessSection from '../components/home/ProcessSection'
import CTASection from '../components/home/CTASection'
import AIServicesSection from '../components/home/AIServicesSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <UseCasesSection />
      <StatisticsSection />
      <AIServicesSection />
      <ProcessSection />
      <ProblemSolutionSection />
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