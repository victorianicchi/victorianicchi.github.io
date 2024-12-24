---
layout: default
title: "Contact"
---

<div class="contact-container">
  <!-- Left Column: instructions -->
  <div class="contact-instructions">
    <p>Please complete the form or email directly<br>
    to <strong>info@yourdomain.com</strong></p>

    <p>Press inquiries will be returned within 72 hours of receipt.</p>
    
    <p>Studio visits by appointment.</p>
  </div>

  <!-- Right Column: form -->
  <div class="contact-form">
    <!-- 
      Option 1: Use Formspree (https://formspree.io/) 
      Action below is a placeholder; replace 'yourFormspreeID' 
      with the actual endpoint they provide 
    -->
    <form action="https://formspree.io/f/yourFormspreeID" method="POST">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Email</label>
      <input type="email" id="email" name="_replyto" required>

      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" required></textarea>
      
      <!-- This is a hidden field some email services require -->
      <input type="hidden" name="_subject" value="Contact form submission" />

      <!-- Submit button -->
      <button type="submit">Send Message</button>
    </form>
  </div>
</div>
