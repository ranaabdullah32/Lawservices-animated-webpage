// Store initial user credentials in local storage
localStorage.setItem('userEmail', 'test@example.com');
localStorage.setItem('userPassword', 'password123');

function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Clear previous error messages
    document.getElementById("Emailerror").innerText = "";
    document.getElementById("Passworderror").innerText = "";
    document.getElementById('successMessage').innerText = '';

    // Retrieve stored credentials
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    let valid = true; // To track overall validity

    // Validate inputs
    if (!email || !password) {
        if (!email) {
            document.getElementById("Emailerror").innerText = "Please Enter Your Email";
            valid = false; // Mark as invalid
        }
        if (!password) {
            document.getElementById("Passworderror").innerText = "Please Enter The Password";
            valid = false; // Mark as invalid
        }
    } else {
        if (email !== storedEmail || password !== storedPassword) {
            showSnack();
            valid = false; // Mark as invalid
        }
    }

    // If both email and password are correct
    if (valid && email === storedEmail && password === storedPassword) {
        document.getElementById('successMessage').innerText = 'Login successful! Redirecting...';
        setTimeout(() => {
            window.location.href = 'index.html'; // Adjust the redirect path as needed
        }, 200); // Delay redirection for 2 seconds to show success message
    }

    // Prevent form submission if there are validation errors
    return false; // Always return false to prevent default form submission
}

// Simple email validation function
function validateEmail(email) {
    return email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.');
}

// Function to handle real-time email validation
function checkEmailFormat() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById("Emailerror");
    
    // Clear the error message initially
    emailError.innerText = "";
    
    if (emailInput.value) {
        if (!validateEmail(emailInput.value)) {
            emailError.innerText = "This is not an Email Format";
        }
    }
}

// Function to clear password error
function clearPasswordError() {
    document.getElementById("Passworderror").innerText = "";
}

// Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.className = "fa fa-eye-slash"; // Change icon to eye-slash
    } else {
        passwordInput.type = "password";
        eyeIcon.className = "fa fa-eye"; // Change icon to eye
    }
}

function showSnack() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
}
