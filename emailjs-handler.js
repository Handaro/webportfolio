// Initialize EmailJS
(function() {
    emailjs.init("5rTCTjYlRDWAXHRht"); 
})();

// Form Submission Handler
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Get the values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Send email via EmailJS
    emailjs.send("service_3wc5agq", "template_5d7xhmg", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        console.log("SUCCESS", response);
        alert("Your message has been sent and an autoreply has been sent to your email!");

        // Hide the form and show the "Send another message" button
        document.getElementById("contact-form").style.display = "none";
        document.getElementById("form-btn2").style.display = "block";
    }, function(error) {
        console.error("FAILED", error);  
        alert("Something went wrong. Please try again later.");
    });
});

// Show the form again when the "Send another message" button is clicked
document.getElementById("form-btn2").addEventListener("click", function() {
    document.getElementById("contact-form").reset(); 
    document.getElementById("contact-form").style.display = "block"; 
    document.getElementById("form-btn2").style.display = "none"; 
});
