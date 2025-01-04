// pages/contact.js
import Layout from '@/components/Layout';

export default function Contact() {
  return (
    <Layout pageTitle="Contact" description="Contact Victoria Nicchi">
      <div className="contact-page">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>
            I’d love to hear about your next project, collaboration, or any inquiries 
            you might have. Please fill out the form below or send an email directly to 
            <strong> info@yourdomain.com</strong>.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-instructions">
            <p>
              <strong>Press Inquiries</strong><br />
              I aim to respond within 72 hours of receipt.
            </p>
            <p>
              <strong>Studio Visits</strong><br />
              By appointment only. I look forward to meeting you in person!
            </p>
            <p>
              <em>
                If you have any urgent requests, please do not hesitate to email or call. 
                I'm excited to discuss how we can bring your vision to life!
              </em>
            </p>
          </div>

          <div className="contact-form">
            {/* Example using Formspree (replace "yourFormspreeID" with real ID) */}
            <form action="https://formspree.io/f/yourFormspreeID" method="POST">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your Full Name" />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="_replyto" required placeholder="your@email.com" />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project..." />

              {/* Hidden field (optional) */}
              <input type="hidden" name="_subject" value="Portfolio Contact Form Submission" />

              <button type="submit" className="button-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
