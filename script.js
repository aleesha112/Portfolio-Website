document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent successfully!');
});

function toggleMenu() {
    document.querySelector('nav ul').classList.toggle('active');
  }

  function showConfirmation(event) {
    event.preventDefault(); // Prevent form submission to see the animation
    const form = event.target;

    // Show confirmation message
    document.getElementById("confirmation-message").style.display = "block";
    form.reset(); // Reset the form

    // Optional: You can also add a timeout to hide the confirmation after a few seconds
    setTimeout(() => {
        document.getElementById("confirmation-message").style.display = "none";
    }, 5000); // Hide after 5 seconds
}
document.getElementById("contact-form").onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission
    // Your AJAX logic to submit the form goes here (optional)
    
    // Show success message
    document.querySelector(".success-message").style.display = "block";
    
    // Hide form after submission (optional)
    document.getElementById("contact-form").style.display = "none";
}

  