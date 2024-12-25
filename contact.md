---
layout: default
title: "Contact"
---

<div class="contact-page">
  <!-- Title / Introduction -->
  <div class="contact-header">
    <h1>Get in Touch</h1>
    <p>
      I’d love to hear about your next project, collaboration, or any inquiries 
      you might have. Please fill out the form below or send an email directly to 
      <strong>info@yourdomain.com</strong>.
    </p>
  </div>

  <!-- Main content: instructions (left) + form (right) -->
  <div class="contact-content">
    <!-- Left Column: instructions -->
    <div class="contact-instructions">
      <p><strong>Press Inquiries</strong><br>
      I aim to respond within 72 hours of receipt.</p>
      
      <p><strong>Studio Visits</strong><br>
      By appointment only. I look forward to meeting you in person!</p>

      <p><em>
        If you have any urgent requests, please do not hesitate to email or call. 
        I'm excited to discuss how we can bring your vision to life!
      </em></p>
    </div>

    <!-- Right Column: form -->
    <div class="contact-form">
      <!-- Example using Formspree (replace "yourFormspreeID" with real ID) -->
      <form action="https://formspree.io/f/yourFormspreeID" method="POST">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required placeholder="Your Full Name">

        <label for="email">Email</label>
        <input type="email" id="email" name="_replyto" required placeholder="your@email.com">

        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project..."></textarea>
        
        <!-- Hidden field (optional) -->
        <input type="hidden" name="_subject" value="Portfolio Contact Form Submission" />

        <!-- Submit button -->
        <button type="submit" class="button-primary">Send Message</button>
      </form>
    </div>
  </div>
</div>
