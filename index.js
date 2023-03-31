const btn = document.querySelector('.btn');
const errorMsg = document.querySelector('.errorMsg');
const errorIcon = document.querySelector('.errorIcon');
const emailInput = document.querySelector('.email')

// Email Validation matches the characters to ensure email is correct
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// Function removes the error icon and message after 2 seconds
const timeoutFunction = setInterval(() => {
    errorMsg.style.display = "none";
    errorIcon.style.display = "none";
}, 2000);

// Button Click Event for Email Validation
btn.addEventListener("click", function() {
    if(emailInput.value.length === 0 || !emailInput.value.match(emailValidation)) {
        errorMsg.style.display = "inline";
        errorIcon.style.display = "inline";
        emailInput.style.outline = "3px solid red"
        errorMsg.textContent = "Please provide a valid email address";
        return timeoutFunction;
    } else {
        errorMsg.style.display = "inline";
        errorMsg.style.color = "green"
        errorMsg.textContent = "Thank you for subscribing to our newsletter";
        return timeoutFunction;
    }
})