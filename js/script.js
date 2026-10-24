const form = document.querySelector("#sign-up-form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const passwordMessage = document.querySelector("#password-message");

function validatePasswords() {
    const passwordsAreFilled = password.value && confirmPassword.value;
    const passwordsMatch = password.value === confirmPassword.value;

    if (passwordsAreFilled && !passwordsMatch) {
        confirmPassword.setCustomValidity("Passwords do not match.");
        passwordMessage.textContent = "Passwords do not match.";
        return;
    }

    confirmPassword.setCustomValidity("");
    passwordMessage.textContent = "";
}

password.addEventListener("input", validatePasswords);
confirmPassword.addEventListener("input", validatePasswords);

form.addEventListener("submit", (event) => {
    validatePasswords();

    if (!form.checkValidity()) {
        event.preventDefault();
    }
});