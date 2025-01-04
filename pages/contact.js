// pages/contact.js
import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { lang } = useLanguage();

  const contactText = {
    en: {
      pageTitle: 'Contact',
      heading: 'Get in Touch',
      intro: `I’d love to hear about your next project or collaboration. Feel free to reach out via the form below.`,
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submitLabel: 'Send Message',
      placeholderName: 'Your Full Name',
      placeholderEmail: 'you@example.com',
      placeholderMessage: 'Tell me about your project...',
    },
    es: {
      pageTitle: 'Contacto',
      heading: 'Contáctame',
      intro: `Me encantaría saber sobre tu próximo proyecto o colaboración. Por favor, completa el formulario a continuación.`,
      nameLabel: 'Nombre',
      emailLabel: 'Correo',
      messageLabel: 'Mensaje',
      submitLabel: 'Enviar Mensaje',
      placeholderName: 'Tu Nombre Completo',
      placeholderEmail: 'tucorreo@ejemplo.com',
      placeholderMessage: 'Cuéntame sobre tu proyecto...',
    },
  };

  const t = contactText[lang];

  return (
    <Layout pageTitle={t.pageTitle}>
      <div
        className="contact-page"
        style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}
      >
        <h1>{t.heading}</h1>
        <p>{t.intro}</p>

        <form
          action="https://formspree.io/f/yourFormspreeID"
          method="POST"
          style={{ marginTop: '2rem' }}
        >
          <label htmlFor="name" style={{ display: 'block', margin: '1rem 0 0.5rem' }}>
            {t.nameLabel}
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder={t.placeholderName}
            style={{ width: '100%', padding: '0.75rem' }}
          />

          <label htmlFor="email" style={{ display: 'block', margin: '1rem 0 0.5rem' }}>
            {t.emailLabel}
          </label>
          <input
            id="email"
            name="_replyto"
            type="email"
            required
            placeholder={t.placeholderEmail}
            style={{ width: '100%', padding: '0.75rem' }}
          />

          <label htmlFor="message" style={{ display: 'block', margin: '1rem 0 0.5rem' }}>
            {t.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder={t.placeholderMessage}
            style={{ width: '100%', padding: '0.75rem' }}
          />

          <button
            type="submit"
            style={{
              marginTop: '1.5rem',
              padding: '0.75rem 1.5rem',
              cursor: 'pointer',
              border: 'none',
              background: '#000',
              color: '#fff',
              borderRadius: '4px',
              fontWeight: '500'
            }}
          >
            {t.submitLabel}
          </button>
        </form>
      </div>
    </Layout>
  );
}
