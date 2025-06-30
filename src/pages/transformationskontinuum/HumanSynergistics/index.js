import Link from 'next/link'
import Image from 'next/image'
import { Target, Users, User, BarChart3, Lightbulb, Cog, ArrowRight, CheckCircle, Star, Brain, Eye, Key, Search, Globe, Award, TrendingUp, Building } from 'lucide-react'
import Hero from '../../../components/common/Hero'
import CTASection from '../../../components/common/CTASection'
import FAQSection from '../../../components/common/FAQSection'

export default function HumanSynergistics() {
    const assessmentLevels = [
        {
            title: 'Organisationen',
            color: 'bg-blue-600',
            assessments: [
                'Organisational Cultural Inventory (OCI)',
                'Customer Service Styles (CSS)',
                'Culture for Diversity Inventory (CDI)'
            ]
        },
        {
            title: 'Führung',
            color: 'bg-blue-700',
            assessments: [
                'Leadership Impact (L/I)',
                'ACUMEN Leadership Workstyles (LWS)'
            ]
        },
        {
            title: 'Management',
            color: 'bg-blue-800',
            assessments: [
                'Management/Impact (M/I)'
            ]
        },
        {
            title: 'Teams',
            color: 'bg-blue-900',
            assessments: [
                'Group Style Inventory (GSI)'
            ]
        },
        {
            title: 'Einzelpersonen',
            color: 'bg-navy-900',
            assessments: [
                'Life Style Inventory (LSI)'
            ]
        }
    ]

    const circumplexBenefits = [
        {
            icon: Eye,
            title: 'Visualisieren',
            description: 'Die Denk- und Verhaltensstile, die bestimmen, wie sich Ihre Mitarbeiter in Ihrer Organisation verhalten - mit Assessments für Organisationen.'
        },
        {
            icon: Key,
            title: 'Zugriff',
            description: 'Eine gemeinsame Sprache, mit der Sie verschiedene Verhaltensmethoden und die Kultur Ihrer Organisation durch ein Assessment für Führungskräfte und Manager quantifizieren können.'
        },
        {
            icon: Search,
            title: 'Untersuchen',
            description: 'Eine Grundlage für die Verbesserung Ihrer Leistung zur Leistungssteigerung und Bereicherung Ihrer Kultur.'
        }
    ]

    const whyHumanSynergistics = [
        {
            icon: Globe,
            title: 'International anerkannte Methodologie',
            description: 'Über 40 Jahre bewährt und weltweit etabliert'
        },
        {
            icon: Award,
            title: 'Assessment durch global anerkannte Berater',
            description: 'Zertifizierte Experten mit internationaler Anerkennung'
        },
        {
            icon: Building,
            title: 'Organisationskultur erfassen',
            description: 'Tiefgreifende Analyse der Unternehmenskultur'
        },
        {
            icon: TrendingUp,
            title: 'Veränderungen initiieren und steuern',
            description: 'Systematische Veränderungsprozesse erfolgreich führen'
        }
    ]

    return (
        <>
            {/* Hero Section */}
            <Hero
                title="Human Synergistics"
                description="Organisationskultur verändern - Weltweit anerkannte Methodik zur Kulturanalyse und nachhaltigen Organisationsentwicklung"
                primaryCTA={{
                    text: 'Beratung anfragen',
                    href: '/transformationskontinuum/kontakt'
                }}
                secondaryCTA={{
                    text: 'Zurück zu Leistungen',
                    href: '/transformationskontinuum/leistungen'
                }}
            />

            {/* Human Synergistics Model Objectives */}
            <section className="section-padding bg-white">
                <div className="container-width">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Human Synergistics Modell-Ziele
                        </h2>
                        <h3 className="text-2xl font-semibold text-primary-600 mb-8">
                            Schaffen Sie positive Veränderungen in Ihrer Organisation mit Kulturbewertung
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-2xl font-semibold text-navy-900 mb-4">
                                Kultur sichtbar machen. Führung wirksam gestalten.
                            </h2>
                            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                                Organisationskultur prägt Denken, Handeln und Zusammenarbeit – oft unbewusst, aber entscheidend für Erfolg. Human Synergistics macht diese „unsichtbare Dynamik“ seit 1971 messbar und gezielt veränderbar. Mit Tools wie dem Organizational Culture Inventory® (OCI®) und dem Life Styles Inventory™ (LSI) analysieren wir Verhaltensmuster, Teamdynamiken und kulturelle Normen. Ziel: ein gemeinsames Verständnis schaffen, konstruktive Kulturmerkmale stärken und Führung als Hebel nutzen. Gemeinsam mit C5 Business Partner wird daraus eine passgenaue Entwicklungsarchitektur – für Veränderung, die wirkt und bleibt.

                            </p>

                            <div className="bg-primary-50 p-6 rounded-xl">
                                <h4 className="font-semibold text-navy-900 mb-4 flex items-center">
                                    <Target className="h-5 w-5 text-primary-600 mr-2" />
                                    Unser Ansatz
                                </h4>
                                <p className="text-gray-700">
                                    Kulturbewertungen, die einen Rahmen für die Veränderung der Organisationskultur bieten
                                    und eine Grundlage für Führung und Teams schaffen.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square max-w-md mx-auto">
                                <Image
                                    src="http://margonline.com/wp-content/themes/astra/assets/images/diagram-11.png"
                                    alt="Human Synergistics Circumplex Diagramm"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Impact Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-width">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Wirksamkeit
                        </h2>
                        <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                            Wie der Circumplex in der Human Synergistics Organisationskultur-Bewertung verwendet wird
                        </p>
                    </div>

                    {/* Program Impact Diagram */}
                    <div className="mb-16">
                        <div className="relative max-w-6xl mx-auto">
                            <Image
                                src="https://margonline.com/wp-content/uploads/2022/10/Diagram-2.png"
                                alt="Human Synergistics Program Impact Diagramm"
                                width={1200}
                                height={600}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {assessmentLevels.map((level, index) => (
                            <div key={index} className="text-center">
                                <div className={`${level.color} text-white px-4 py-3 rounded-lg font-semibold mb-6`}>
                                    {level.title}
                                </div>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    {level.assessments.map((assessment, idx) => (
                                        <li key={idx} className="flex items-start space-x-2">
                                            <CheckCircle className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                                            <span>{assessment}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Circumplex helps you Section */}
            <section className="section-padding bg-white">
                <div className="container-width">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Der Circumplex hilft Ihnen dabei:
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {circumplexBenefits.map((benefit, index) => {
                            const IconComponent = benefit.icon
                            return (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <IconComponent className="h-8 w-8 text-primary-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-navy-900 mb-4">{benefit.title}:</h3>
                                    <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Human Synergistics Heritage */}
            <section className="section-padding bg-primary-50">
                <div className="container-width">
                    <div className="text-center">
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            Das Human Synergistics Kulturbewertungsmodell wurde vor über 40 Jahren entwickelt und wurde seitdem
                            neu bewertet und überarbeitet. Der Circumplex ist zum erfolgreichsten und anerkanntesten Modell
                            für die Kulturbewertung weltweit geworden.
                        </p>
                    </div>
                </div>
            </section>

      

           

            {/* Detailed Services */}
            <section className="section-padding bg-white">
                <div className="container-width">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Für Organisationen
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Die OEI- und OCI-Instrumente sind für Bewertungen für Organisationen gedacht,
                            um die Ergebnisse zu nutzen und darauf zu reagieren
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div className="bg-gray-50 rounded-xl p-8">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                                <Building className="h-8 w-8 text-primary-600" />
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-4">
                                OCI (Organisationskulturbewertung) Assessments und Workshop
                            </h3>
                            <p className="text-gray-700 mb-6">
                                Das Organizational Culture Inventory (OCI) ist eine Bewertung zur Überwachung der Organisationskultur.
                                Das OCI überwacht die Gesamtkultur und nicht nur die Unternehmensrichtlinien.
                            </p>
                            <p className="text-gray-600 text-sm">
                                Die OEI- und OCI-Instrumente sind für Bewertungen für Organisationen gedacht,
                                um die Ergebnisse zu nutzen und darauf zu reagieren.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-8">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                                <TrendingUp className="h-8 w-8 text-primary-600" />
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-4">
                                OEI (Organisationseffektivitäts-Inventar) Assessments und Workshop
                            </h3>
                            <p className="text-gray-700 mb-6">
                                Das Organizational Effectiveness Inventory (OEI) wird für eine umfassendere Bewertung
                                der Kultur und des Umfelds Ihrer Organisation verwendet.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-navy-900 mb-6">Für Manager</h2>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-8 mb-16">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                            <Users className="h-8 w-8 text-primary-600" />
                        </div>
                        <h3 className="text-xl font-bold text-navy-900 mb-4">Group Styles Inventory</h3>
                        <p className="text-gray-700">
                            Eine Bewertung für Gruppen und Teams, die sich mit Beziehungsdynamiken auf Gruppenebene befasst
                            und Innovation und Kommunikation innerhalb des Teams fördert.
                        </p>
                    </div>

                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-navy-900 mb-6">Für Senior Leadership</h2>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-8">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                            <Target className="h-8 w-8 text-primary-600" />
                        </div>
                        <h3 className="text-xl font-bold text-navy-900 mb-4">Leadership/Impact Assessment und Coaching</h3>
                        <p className="text-gray-700">
                            Dies ist ein Leadership-360-Transformationstool, das das Verständnis von Führungskräften und Managern
                            für ihre Handlungen entwickelt und ihnen hilft, eine positive Wirkung zu erzielen.
                        </p>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding bg-primary-600 text-white">
                <div className="container-width">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Unser bewährter Prozess
                        </h2>
                        <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                            Von der ersten Bewertung bis zur nachhaltigen Kulturveränderung -
                            systematische Begleitung in fünf Schritten
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {[
                            { step: '01', title: 'Assessment', desc: 'Umfassende Kulturbewertung mit Human Synergistics Tools' },
                            { step: '02', title: 'Analyse', desc: 'Detaillierte Auswertung und Interpretation der Ergebnisse' },
                            { step: '03', title: 'Workshop', desc: 'Gemeinsame Diskussion und Entwicklung von Handlungsempfehlungen' },
                            { step: '04', title: 'Umsetzung', desc: 'Implementierung der definierten Veränderungsmaßnahmen' },
                            { step: '05', title: 'Nachverfolgung', desc: 'Kontinuierliche Begleitung und Erfolgsmessung' }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-white text-primary-600 rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                                <p className="text-primary-100 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* CTA Section */}
            <CTASection variant="transformation" />
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            title: 'Human Synergistics - Transformationskontinuum',
            description: 'Organisationskultur verändern mit Human Synergistics - Weltweit anerkannte Methodik zur Kulturanalyse und nachhaltigen Organisationsentwicklung mit dem Circumplex-Modell.'
        }
    }
}