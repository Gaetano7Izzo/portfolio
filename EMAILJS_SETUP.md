# 📧 Configurazione EmailJS per il Form di Contatto

## 🚀 Come Configurare EmailJS

### **Passo 1: Registrati su EmailJS**
1. Vai su [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea un account gratuito
3. Verifica la tua email

### **Passo 2: Configura il Service**
1. Nel dashboard EmailJS, vai su "Email Services"
2. Clicca "Add New Service"
3. Seleziona "Gmail" (o il provider che preferisci)
4. Collega il tuo account Gmail: `izzogaetanoemanuele@gmail.com`
5. **Salva il Service ID** (es: `service_abc123`)

### **Passo 3: Crea il Template Email**
1. Vai su "Email Templates"
2. Clicca "Create New Template"
3. Usa questo template:

```html
<h2>Nuovo Messaggio dal Portfolio</h2>

<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Messaggio:</strong></p>
<p>{{message}}</p>

<hr>
<p><em>Inviato dal portfolio di Gaetano Emanuele Izzo</em></p>
```

4. **Salva il Template ID** (es: `template_xyz789`)

### **Passo 4: Ottieni la Public Key**
1. Vai su "Account" → "API Keys"
2. **Copia la Public Key** (es: `user_def456`)

### **Passo 5: Aggiorna il Codice**
Sostituisci i placeholder nel file `components/Contact.tsx`:

```typescript
const result = await emailjs.send(
  'service_abc123', // Il tuo Service ID
  'template_xyz789', // Il tuo Template ID
  templateParams,
  'user_def456' // La tua Public Key
)
```

## ✅ Verifica

1. **Testa il form** sul tuo portfolio
2. **Controlla la tua email** `izzogaetanoemanuele@gmail.com`
3. **Verifica che** i messaggi arrivino correttamente

## 🔒 Sicurezza

- La Public Key è sicura da esporre nel frontend
- EmailJS gestisce l'autenticazione lato server
- I messaggi vengono inviati direttamente alla tua email

## 💡 Alternative

Se preferisci altre soluzioni:
- **Formspree**: Più semplice, ma limiti gratuiti
- **Netlify Forms**: Se usi Netlify per il deploy
- **Backend personalizzato**: Per controllo completo

## 🆘 Supporto

Se hai problemi:
1. Controlla la console del browser per errori
2. Verifica che tutti gli ID siano corretti
3. Assicurati che il service Gmail sia collegato
4. Controlla che il template sia salvato correttamente 