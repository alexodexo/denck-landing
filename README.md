# Mario Egartner - Professional Websites

This Next.js application hosts two professional websites for Mario Egartner:

1. **Transformationskontinuum** (C5 Business Partner) - B2B consulting and organizational development
2. **Frankfurt Business Coach** - B2C coaching and personal development services

## 🚀 Tech Stack

- **Framework**: Next.js 15.3 with Pages Router
- **Styling**: Tailwind CSS 3.3
- **Language**: JavaScript (ES6+)
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel/Netlify

## 📁 Project Structure

```
├── components/
│   ├── common/           # Shared components
│   │   ├── CTASection.js
│   │   ├── FAQSection.js
│   │   └── Hero.js
│   ├── headers/          # Site-specific headers
│   │   ├── TransformationHeader.js
│   │   └── CoachHeader.js
│   ├── footers/          # Site-specific footers
│   │   ├── TransformationFooter.js
│   │   └── CoachFooter.js
│   └── Layout.js         # Main layout wrapper
├── pages/
│   ├── transformationskontinuum/  # B2B site pages
│   │   ├── index.js              # Homepage
│   │   ├── ueber-uns.js          # About page
│   │   ├── leistungen.js         # Services page
│   │   ├── kontakt.js            # Contact page
│   │   └── buchungen.js          # Bookings page
│   └── frankfurt-business-coach/  # B2C site pages
│       ├── index.js              # Homepage
│       ├── coach.js              # About Mario
│       ├── leistungen.js         # Services
│       ├── preise.js             # Pricing
│       ├── kontakt.js            # Contact
│       └── buchungen.js          # Bookings
├── styles/
│   └── globals.css       # Global CSS with Tailwind
└── public/               # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: Blue tones for accents and CTAs
- **Navy**: Dark blue for headings and professional elements
- **Gray**: Neutral tones for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Navy colors with appropriate weights
- **Body**: Gray-800 for optimal readability

### Components
- **Buttons**: Primary, secondary, and outline variants
- **Cards**: Shadow effects with hover animations
- **Sections**: Consistent padding and spacing

## 🌐 Website Features

### Transformationskontinuum (B2B)
- **Target Audience**: Large corporations, banks, insurance companies
- **Services**: Organizational development, team workshops, strategic consulting
- **Design**: Professional, McKinsey-inspired aesthetic
- **Key Pages**: Home, About, Services, Contact, Bookings

### Frankfurt Business Coach (B2C)
- **Target Audience**: Individuals seeking personal/professional coaching
- **Services**: Business coaching, career development, personal growth
- **Design**: Warm, approachable while maintaining professionalism
- **Key Pages**: Home, About Mario, Services, Pricing, Contact, Bookings

## 🔧 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO Optimization

- Dynamic meta tags for each page
- Structured data (Schema.org)
- Optimized images and fonts
- Clean URL structure
- Semantic HTML markup

## 📞 Contact Information

**Mario Egartner**
- Phone: 069 - 9753 4441
- Email: egartner@frankfurt-business-coach.de (B2C)
- Email: info@c5-business-partner.de (B2B)
- Address: Günthersburgallee 82, 60389 Frankfurt am Main

## 🚀 Deployment

The application is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Traditional hosting** with Node.js support

## 📝 Content Management

Content is currently managed through:
- Static content in React components
- Future integration with CMS possible (Strapi, Contentful, etc.)
- Contact forms ready for backend integration

## 🔗 External Integrations

Ready for integration with:
- **Calendly** for appointment booking
- **Email services** for contact forms
- **Analytics** (Google Analytics, etc.)
- **Payment processing** for coaching packages

## 🎨 Customization

The design system is built with Tailwind CSS custom utility classes:
- `btn-primary`, `btn-secondary`, `btn-outline` for buttons
- `section-padding`, `container-width` for layout
- `hero-text`, `section-title` for typography
- Custom animations and transitions

## 📈 Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Core Web Vitals**: Focused on user experience
- **Image Optimization**: Next.js Image component
- **Font Loading**: Optimized Google Fonts loading

## 🔐 Security

- **Headers**: Security headers configured
- **Environment Variables**: Ready for sensitive data
- **Form Validation**: Client and server-side ready
- **HTTPS**: SSL/TLS ready for production