// README.md
# DENCK Consulting - KI-Beratung für den Mittelstand

Diese Next.js Anwendung ist die offizielle Website von DENCK Consulting - Ihrem Partner für erfolgreiche KI-Integration im Mittelstand.

## 🚀 Tech Stack

- **Framework**: Next.js 15.3 mit Pages Router
- **Styling**: Tailwind CSS 3.3
- **Sprache**: JavaScript (ES6+)
- **Icons**: Lucide React
- **Deployment**: Optimiert für Vercel/Netlify

## 📁 Projektstruktur
├── components/
│   ├── common/           # Gemeinsam genutzte Komponenten
│   │   ├── CookieBanner.js
│   │   └── Hero.js
│   ├── headers/          # Header-Komponente
│   │   └── DenckHeader.js
│   ├── footers/          # Footer-Komponente
│   │   └── DenckFooter.js
│   └── Layout.js         # Haupt-Layout-Wrapper
├── pages/
│   ├── index.js          # Homepage
│   ├── leistungen.js     # Leistungen
│   ├── kontakt.js        # Kontakt
│   ├── impressum.js      # Impressum
│   ├── datenschutz.js    # Datenschutz
│   └── agb.js           # AGB
├── styles/
│   └── globals.css       # Globales CSS mit Tailwind
└── public/               # Statische Assets

## 🎨 Design System

### Farben
- **Primary**: Navy/Slate-Töne für Professionalität
- **Accent**: Blau-Töne für CTAs und Highlights
- **Gray**: Neutrale Töne für Text und Hintergründe

### Typografie
- **Font**: Inter (Google Fonts)
- **Überschriften**: Navy-Farben mit angemessenen Gewichtungen
- **Body**: Grau-800 für optimale Lesbarkeit

### Komponenten
- **Buttons**: Primary, Secondary und Outline-Varianten
- **Cards**: Schatteneffekte mit Hover-Animationen
- **Sections**: Konsistente Abstände und Padding

## 🌐 Website-Features

- **Zielgruppe**: Mittelständische Unternehmen ab 50 Mitarbeitern
- **Services**: KI-Strategieberatung, Prozessautomatisierung, Datenanalyse, KI-Governance
- **Design**: Modern, professionell und vertrauenswürdig
- **Hauptseiten**: Home, Leistungen, Kontakt, Impressum, Datenschutz

## 🔧 Getting Started

1. **Dependencies installieren**:
   ```bash
   npm install

Entwicklungsserver starten:
bashnpm run dev

Production Build:
bashnpm run build

Production Server starten:
bashnpm start


📱 Responsive Design
Die Anwendung ist vollständig responsiv mit Breakpoints:

Mobile: < 640px
Tablet: 640px - 1024px
Desktop: > 1024px

🎯 SEO-Optimierung

Dynamische Meta-Tags für jede Seite
Strukturierte Daten (Schema.org)
Optimierte Bilder und Schriftarten
Saubere URL-Struktur
Semantisches HTML-Markup

📞 Kontaktinformationen
DENCK Consulting

ALD Beratungs und Beteiligungsgesellschaft UG
Hannah-Arendt-Str 40
60438 Frankfurt am Main

🚀 Deployment
Die Anwendung ist optimiert für Deployment auf:

Vercel (empfohlen für Next.js)
Netlify
Traditionelles Hosting mit Node.js-Unterstützung

📈 Performance

Lighthouse Score: Optimiert für 90+ Scores
Core Web Vitals: Fokus auf User Experience
Bildoptimierung: Next.js Image Component
Font Loading: Optimiertes Google Fonts Loading

🔐 Sicherheit

Headers: Sicherheitsheader konfiguriert
Umgebungsvariablen: Bereit für sensible Daten
Formularvalidierung: Client- und serverseitig bereit
HTTPS: SSL/TLS bereit für Produktion

