const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");

    if (this.value.length > 11) {
        this.value = this.value.substring(0, 11);
    }
});

document.getElementById("contactForm").addEventListener("submit", function (event) {

    event.preventDefault();

    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let institute = document.getElementById("institute").value.trim();
    let domain = document.getElementById("domain").value;
    let message = document.getElementById("message").value.trim();

    if (
        fullname === "" ||
        email === "" ||
        phone === "" ||
        institute === "" ||
        domain === "" ||
        message === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    let phonePattern = /^[0-9]{11}$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number must be exactly 11 digits.");
        return;
    }

    if (message.length < 20) {
        alert("Message must contain at least 20 characters.");
        return;
    }
    
    alert("Form submitted successfully!");

    document.getElementById("contactForm").reset();

});