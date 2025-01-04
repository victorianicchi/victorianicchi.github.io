// pages/contact.js
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout pageTitle="Contact">
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Get in Touch</h1>
        <p>I’d love to hear about your next project...</p>

        <form action="https://formspree.io/f/yourFormspreeID" method="POST" style={{ marginTop: '2rem' }}>
          <label htmlFor="name" style={{ display: 'block', margin: '1rem 0 0.5rem' }}>Name</label>
          <input
            id="name"
            name="name"
            required
            placeholder="Your Full Name"
            style={{ width: '100%', padding: '0.75rem' }}
          />

          <label htmlFor="email" style={{ display: 'block', margin: '1rem 0 0.5rem' }}>Email</label>
          <input
            id="email"
            name="_replyto"
            type="email"
            required
            placeholder="you@example.com"
            style={{ width: '100%', padding: '0.75rem' }}
          />

          <label htmlFor="message" style={{ display: 'block', margin: '1rem 0 0.5rem' }}>Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Tell me about your project..."
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
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
}
