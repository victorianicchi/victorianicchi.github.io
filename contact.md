---
layout: default
title: "Contact"
---

<div class="contact-page">
  <!-- Left text column -->
  <div class="contact-details">
    <p>Please complete the form or email directly<br>
    to <strong>info@yourdomain.com</strong></p>
    
    <p>Press inquiries will be returned within 72 hours of receipt.</p>
    
    <p>Studio visits by appointment.</p>
  </div>

  <!-- Right form column -->
  <div class="contact-form">
    <!-- Replace 'yourFormspreeID' with your real Formspree endpoint if you like -->
    <form action="https://formspree.io/f/yourFormspreeID" method="POST">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Email</label>
      <input type="email" id="email" name="_replyto" required>

      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" required></textarea>

      <!-- Hidden subject line for emails -->
      <input type="hidden" name="_subject" value="Contact form submission" />

      <button type="submit" class="send-btn">Send Message</button>
    </form>
  </div>
</div>
