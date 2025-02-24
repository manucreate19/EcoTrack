// home.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Login button functionality (for example, open a login modal or redirect)
  document.querySelector('header nav button').addEventListener('click', function () {
    alert('Login functionality to be implemented');
    // Example: Redirect to a login page or open a login modal
    // window.location.href = 'login.html';
  });
  
  // Form validation for the contact form
  const contactForm = document.querySelector('.contact-form');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
  
    if (name && email && message) {
      alert('Message sent successfully!');
      // Optionally, you can reset the form or send it to a server.
      contactForm.reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
  
  // Log details submission
  const logButton = document.querySelector('.log-button');
  logButton.addEventListener('click', function () {
    const logInput = document.querySelector('.log-input');
    const logDetails = logInput.value.trim();
  
    if (logDetails) {
      alert(`Log submitted: ${logDetails}`);
      logInput.value = '';  // Clear the input field after submission
    } else {
      alert('Please enter your log details.');
    }
  });
  