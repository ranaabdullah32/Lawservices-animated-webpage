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
        // Check for incorrect email or password
        if (email !== storedEmail) {
            document.getElementById("Emailerror").innerText = "Invalid Email";
            valid = false; // Mark as invalid
        }
        if (password !== storedPassword) {
            document.getElementById("Passworderror").innerText = "Invalid Password";
            valid = false; // Mark as invalid
        }
    }

    // If both email and password are correct
    if (email === storedEmail && password === storedPassword) {
        document.getElementById('successMessage').innerText = 'Login successful! Redirecting...';
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 200); // Delay redirection for 2 seconds to show success message
        return false; // Prevent default form submission
    }

    // Prevent form submission if there are validation errors
    if (!valid) {
        return false; // Stop form submission
    }
}
