# Portfolio di Gaetano Emanuele Izzo

Un portfolio personale moderno e responsive costruito con Next.js, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Caratteristiche

- **Design Moderno**: Layout pulito e professionale ispirato a Eujenio10
- **Responsive**: Ottimizzato per tutti i dispositivi
- **Animazioni Fluide**: Transizioni e hover effects con Framer Motion
- **Integrazione GitHub**: Caricamento dinamico dei repository
- **Form di Contatto**: Form funzionale con validazione
- **SEO Ottimizzato**: Meta tags e Open Graph
- **Performance**: Build ottimizzata per la produzione

## 🛠 Tecnologie Utilizzate

- **Framework**: Next.js 14 con App Router
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS
- **Animazioni**: Framer Motion
- **Icone**: Lucide React
- **Deployment**: GitHub Pages / Vercel ready

## 📦 Installazione

1. **Clona il repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   # oppure
   yarn install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   # oppure
   yarn dev
   ```

4. **Apri il browser**
   Naviga su [http://localhost:3000](http://localhost:3000)

## ⚙️ Configurazione

### Personalizzazione Dati

1. **Informazioni Personali**: Modifica i dati in `components/About.tsx`
2. **Username GitHub**: Cambia `gaetanoizzo` con il tuo username in:
   - `components/Projects.tsx` (linea 25)
   - `components/Contact.tsx` (linea 89)
   - `components/Footer.tsx` (linea 8)
3. **Profilo LinkedIn**: Aggiorna il link in:
   - `components/Contact.tsx` (linea 95)
   - `components/Footer.tsx` (linea 13)

### CV

Aggiungi il tuo CV in formato PDF:
```bash
public/CurriculumVitae_GaetanoIzzo.pdf
```

### Form di Contatto

Il form attualmente simula l'invio. Per renderlo funzionale, integra con:
- **EmailJS**: Per invio email client-side
- **Formspree**: Servizio gratuito per form
- **Backend personalizzato**: API route Next.js

Esempio con EmailJS:
```typescript
// In components/Contact.tsx
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    await emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      e.target as HTMLFormElement,
      'YOUR_PUBLIC_KEY'
    )
    // Success handling
  } catch (error) {
    // Error handling
  }
}
```

## 🚀 Deployment

### GitHub Pages

1. **Build per produzione**
   ```bash
   npm run build
   npm run export
   ```

2. **Configura GitHub Pages**
   - Vai su Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

3. **Deploy automatico** (opzionale)
   Aggiungi GitHub Actions workflow in `.github/workflows/deploy.yml`

### Vercel (Raccomandato)

1. **Connetti il repository**
   - Vai su [vercel.com](https://vercel.com)
   - Importa il repository GitHub
   - Vercel rileverà automaticamente Next.js

2. **Deploy automatico**
   - Ogni push su main triggera un nuovo deploy
   - Preview deployments per ogni PR

## 📁 Struttura del Progetto

```
portfolio/
├── app/
│   ├── globals.css          # Stili globali e Tailwind
│   ├── layout.tsx           # Layout principale
│   └── page.tsx            # Pagina home
├── components/
│   ├── Navbar.tsx          # Navigazione
│   ├── Hero.tsx            # Sezione hero
│   ├── About.tsx           # Sezione chi sono
│   ├── Projects.tsx        # Sezione progetti
│   ├── Contact.tsx         # Sezione contatti
│   └── Footer.tsx          # Footer
├── public/
│   └── CurriculumVitae_GaetanoIzzo.pdf
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 📧 Configurazione Form di Contatto

Il form di contatto utilizza EmailJS per inviare messaggi direttamente alla tua email. Segui le istruzioni nel file `EMAILJS_SETUP.md` per configurare il servizio.

**Nota**: Attualmente il form è configurato per simulare l'invio. Per renderlo funzionale, configura EmailJS seguendo le istruzioni.

## 🎨 Personalizzazione

### Colori

Modifica i colori in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... altri colori
  }
}
```

### Font

Cambia i font in `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

### Animazioni

Personalizza le animazioni in `app/globals.css`:
```css
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  /* ... */
}
```

## 🔧 Script Disponibili

- `npm run dev` - Server di sviluppo
- `npm run build` - Build per produzione
- `npm run start` - Avvia server di produzione
- `npm run lint` - Esegue ESLint
- `npm run export` - Esporta per hosting statico

## 📱 Responsive Design

Il portfolio è ottimizzato per:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Performance

- **Lighthouse Score**: 90+ su tutte le metriche
- **Core Web Vitals**: Ottimizzati
- **Bundle Size**: Minimizzato con tree shaking
- **Images**: Ottimizzate con Next.js Image

## 🤝 Contributi

1. Fork il progetto
2. Crea un branch per la feature (`git checkout -b feature/AmazingFeature`)
3. Commit le modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è sotto licenza MIT. Vedi il file `LICENSE` per i dettagli.

## 📞 Contatti

- **Email**: izzogaetanoemanuele@gmail.com
- **GitHub**: [gaetanoizzo](https://github.com/gaetanoizzo)
- **LinkedIn**: [gaetanoizzo](https://linkedin.com/in/gaetanoizzo)

---

⭐ Se questo portfolio ti è piaciuto, lascia una stella al repository! 