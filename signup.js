document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const formData = new FormData(document.querySelector(".auth-form"));
        const signupData = Object.fromEntries(formData.entries());

        // Store sign-up data in localStorage
        localStorage.setItem("signupData", JSON.stringify(signupData));

        // Redirect to the next page
        window.location.href = "main.html"; // Replace 'nextpage.html' with your actual page
    }

    // Attach the handleFormSubmit function to the form's submit event
    const form = document.querySelector(".auth-form");
    form.addEventListener("submit", handleFormSubmit);
});