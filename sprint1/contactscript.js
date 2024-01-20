// contact form
const name = document.getElementById("input-contact-name");
const email = document.getElementById("input-email");
const message = document.getElementById("input-message");
const darkModeSwitch = document.getElementById("dark-mode-switch");
const MIN_MESSAGE = 100;
const MAX_MESSAGE = 1000;

window.onload = function() {
    setupListeners();
}

function setupListeners(){
    setupEmailListener();
    setupMessageListener();
    setupDarkModeListener();
}

function validateForm(){
    return validateEmail() && validateMessage() && validateName();
}

function validateName() {
    return name.value.length !== 0;
}

// validates email
function validateEmail() {
    let re = /[^\s@]+@[^\s@]+\.[^\s@]+/;

    return !!email.value.match(re);
}

function setupEmailListener(){
    email.addEventListener("input", (Event) => {
        let invalidEmail = document.getElementById("contact-email-invalid");

        if (!validateEmail()) {
            invalidEmail.style.visibility = "visible";
        } else {
            invalidEmail.style.visibility = "hidden";
        }
    });
}

// validates message
function validateMessage() {
    return !(message.value.length < MIN_MESSAGE || message.value.length > MAX_MESSAGE);
}

function setupMessageListener(){
    message.addEventListener("input", (Event) => {
        let invalidMessage = document.getElementById("contact-message-invalid");

        if(message.value.length < MIN_MESSAGE || message.value.length > MAX_MESSAGE) {
            invalidMessage.style.visibility = "visible";
        } else {
            invalidMessage.style.visibility = "hidden";
        }
    });
}

function setupDarkModeListener(){
    let darkModeOn = false;

    darkModeSwitch.addEventListener("change", () => {
        darkModeOn ? document.body.classList.remove('dark-mode') : document.body.classList.add('dark-mode');
        darkModeOn = !darkModeOn;
    });
}