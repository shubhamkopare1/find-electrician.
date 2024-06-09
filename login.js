let signupData;

// Check if sign-up data is available in localStorage
document.addEventListener("DOMContentLoaded", function () {
    signupData = JSON.parse(localStorage.getItem("signupData"));

    if (signupData) {
        const inputUsername = document.getElementById("username");
        const inputPassword = document.getElementById("password");

        // Pre-fill login form with sign-up data
        inputUsername.value = signupData.username;
        inputPassword.value = signupData.password;
    }
});

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Here, you can perform your login logic, e.g., validate username and password
    // For now, let's assume a successful login if username and password match
    if (signupData && username === signupData.username && password === signupData.password) {
        showCursorEffect(); // Call the function to change cursor style
        redirectToNextPage(); // Redirect to the next page
    } else {
        // If login is unsuccessful, display an alert for incorrect password
        alert("Incorrect password. Please try again.");
    }
}

// Function to change cursor style and redirect to next page
function showCursorEffect() {
    const loginButton = document.querySelector(".submit");
    loginButton.style.cursor = "progress"; // Change cursor to 'progress' style

    // Optional: Add a delay to showcase the cursor change
    setTimeout(() => {
        // Reset cursor to default after a delay (you can remove this if not needed)
        loginButton.style.cursor = "default";
    }, 1000); // Change back after 3 seconds
}

function redirectToNextPage() {
    window.location.href = "main.html"; // Replace 'nextpage.html' with your actual page
}

// Attach the handleFormSubmit function to the form's submit event
const form = document.getElementById("loginForm");
form.addEventListener("submit", handleFormSubmit);
