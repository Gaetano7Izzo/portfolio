// Esempio di configurazione EmailJS per il form di contatto
// Questo file mostra come integrare EmailJS nel componente Contact

import emailjs from '@emailjs/browser'

// Configurazione EmailJS
const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Sostituisci con il tuo Service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Sostituisci con il tuo Template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY' // Sostituisci con la tua Public Key
}

// Funzione per inviare email con EmailJS
export const sendEmail = async (formData: {
  name: string
  email: string
  message: string
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Gaetano Izzo'
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    
    return { success: true, data: response }
  } catch (error) {
    console.error('Errore EmailJS:', error)
    return { success: false, error }
  }
}

// Template per il form EmailJS
export const emailTemplate = `
  <h2>Nuovo messaggio dal portfolio</h2>
  <p><strong>Nome:</strong> {{from_name}}</p>
  <p><strong>Email:</strong> {{from_email}}</p>
  <p><strong>Messaggio:</strong></p>
  <p>{{message}}</p>
`

// Istruzioni per configurare EmailJS:
/*
1. Vai su https://www.emailjs.com/
2. Crea un account gratuito
3. Crea un nuovo Email Service (Gmail, Outlook, etc.)
4. Crea un nuovo Email Template
5. Copia i seguenti ID:
   - Service ID
   - Template ID
   - Public Key
6. Sostituisci i valori in EMAILJS_CONFIG
7. Installa EmailJS: npm install @emailjs/browser
8. Importa e usa la funzione sendEmail nel componente Contact
*/ 