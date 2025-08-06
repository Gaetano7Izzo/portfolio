# 🎨 Guida alla Personalizzazione del Portfolio

## 📝 Informazioni da Aggiornare

### 1. Dati Personali
**File da modificare**: `components/About.tsx`

```typescript
// Aggiorna questi dati
const education = [
  {
    degree: 'Laurea in Ingegneria Informatica',
    institution: 'Università degli Studi di Napoli Federico II',
    period: '2023 - Presente',
    description: 'Specializzazione in sistemi software e tecnologie web'
  }
]

const skills = {
  technical: [
    'Python', 'Java', 'C++', 'HTML', 'SQL', 'Git', 'Docker', 'Assembly', 'Linux (Ubuntu)'
    'Flask', 'gRPC', 'MongoDB', 'JMS', 
  ],
  soft: [
    'Problem Solving', 'Team Work', 'Comunicazione', 'Leadership',
    'Gestione del Tempo', 'Creatività', 'Adattabilità'
  ]
}

const languages = [
  { name: 'Italiano', level: 'Nativo' },
  { name: 'Inglese', level: 'Avanzato' },
  { name: 'Spagnolo', level: 'Intermedio' }
]
```

### 2. Username GitHub
**File da modificare**: 
- `components/Projects.tsx` (linea 25)
- `components/Contact.tsx` (linea 89)
- `components/Footer.tsx` (linea 8)

```typescript
// Cambia 'gaetanoizzo' con il tuo username GitHub
const username = 'TUA_USERNAME_GITHUB'
```

### 3. Profilo LinkedIn
**File da modificare**:
- `components/Contact.tsx` (linea 95)
- `components/Footer.tsx` (linea 13)

```typescript
// Cambia con il tuo profilo LinkedIn
href: 'https://linkedin.com/in/TUO_PROFILO_LINKEDIN'
```

### 4. Email di Contatto
**File da modificare**: `components/Contact.tsx` (linea 67)

```typescript
{
  icon: Mail,
  label: 'Email',
  value: 'TUA_EMAIL@gmail.com',
  href: 'mailto:TUA_EMAIL@gmail.com'
}
```

### 5. CV
**File da sostituire**: `public/CurriculumVitae_GaetanoIzzo.pdf`
- Sostituisci il file di esempio con il tuo CV reale in formato PDF
- Mantieni lo stesso nome del file o aggiorna il riferimento in `components/Hero.tsx`

## 🎨 Personalizzazione Design

### Colori
**File da modificare**: `tailwind.config.js`

```javascript
colors: {
  primary: {
    50: '#f0f9ff',   // Azzurro chiaro
    100: '#e0f2fe',  // Azzurro più chiaro
    200: '#bae6fd',  // Azzurro medio
    300: '#7dd3fc',  // Azzurro
    400: '#38bdf8',  // Azzurro scuro
    500: '#0ea5e9',  // Blu azzurro
    600: '#0284c7',  // Blu
    700: '#0369a1',  // Blu scuro
    800: '#075985',  // Blu molto scuro
    900: '#0c4a6e',  // Blu notte
  }
}
```

### Font
**File da modificare**: `tailwind.config.js`

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

### Animazioni
**File da modificare**: `app/globals.css`

```css
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
```

## 📧 Configurazione Form di Contatto

### Opzione 1: EmailJS (Raccomandato)
1. Vai su [emailjs.com](https://www.emailjs.com/)
2. Crea un account gratuito
3. Crea un Email Service (Gmail, Outlook, etc.)
4. Crea un Email Template
5. Installa EmailJS: `npm install @emailjs/browser`
6. Segui le istruzioni in `components/EmailJSConfig.tsx`

### Opzione 2: Formspree
1. Vai su [formspree.io](https://formspree.io/)
2. Crea un account gratuito
3. Crea un nuovo form
4. Sostituisci l'action del form in `components/Contact.tsx`

```typescript
<form action="https://formspree.io/f/TUO_FORM_ID" method="POST">
```

### Opzione 3: Netlify Forms
1. Deploy su Netlify
2. Aggiungi `data-netlify="true"` al form
3. Netlify gestirà automaticamente l'invio

## 🚀 Deployment

### GitHub Pages
1. Pusha il codice su GitHub
2. Vai su Settings > Pages
3. Source: Deploy from a branch
4. Branch: gh-pages
5. Il workflow GitHub Actions si occuperà del deploy automatico

### Vercel (Raccomandato)
1. Vai su [vercel.com](https://vercel.com)
2. Importa il repository GitHub
3. Vercel rileverà automaticamente Next.js
4. Deploy automatico ad ogni push

### Netlify
1. Vai su [netlify.com](https://netlify.com)
2. Importa il repository GitHub
3. Build command: `npm run build`
4. Publish directory: `out`

## 🔧 Configurazioni Avanzate

### SEO
**File da modificare**: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Il Tuo Nome - Portfolio',
  description: 'La tua descrizione personalizzata',
  keywords: ['portfolio', 'sviluppatore', 'il tuo nome'],
  // ... altre configurazioni
}
```

### Analytics
Aggiungi Google Analytics o altri servizi in `app/layout.tsx`:

```typescript
// Google Analytics
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `,
  }}
/>
```

### Favicon
Sostituisci i file in `public/`:
- `favicon.ico`
- `apple-touch-icon.png`
- `icon-192.png`
- `icon-512.png`

## 📱 Test Responsive

Testa il portfolio su:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

Usa gli strumenti di sviluppo del browser per testare tutte le dimensioni.

## 🎯 Checklist Finale

- [ ] Aggiornati tutti i dati personali
- [ ] Configurato username GitHub
- [ ] Aggiornato profilo LinkedIn
- [ ] Sostituito CV
- [ ] Configurato form di contatto
- [ ] Personalizzati colori (opzionale)
- [ ] Testato responsive design
- [ ] Configurato SEO
- [ ] Deployato online
- [ ] Testato form di contatto
- [ ] Verificato caricamento progetti GitHub

## 🆘 Troubleshooting

### Progetti GitHub non si caricano
- Verifica che l'username GitHub sia corretto
- Controlla che i repository abbiano una descrizione
- Verifica la connessione internet

### Form non funziona
- Controlla la configurazione EmailJS/Formspree
- Verifica che tutti i campi siano compilati
- Controlla la console del browser per errori

### Deploy fallisce
- Verifica che tutte le dipendenze siano installate
- Controlla i log di build
- Verifica la configurazione del provider di hosting

---

🎉 **Congratulazioni!** Il tuo portfolio è pronto per essere condiviso con il mondo! 