// sign up form
const name = document.getElementById("input-name");
const email = document.getElementById("input-email");
const cohortNumber = document.getElementById("input-cohort-num");
const roles = document.getElementById("input-roles");
const MIN = 1;
const MAX = 100;
const MIN_CHARACTERS = 50;
const MAX_CHARACTERS = 500;

function validateForm(){
    return validateEmail() && validateCohortNum() && validateName() && validateRoles();
}

function validateName() {
    return name.value.length !== 0;
}

// validates email
function validateEmail() {
    let re = /[^\s@]+@[^\s@]+\.[^\s@]+/;

    return !!email.value.match(re);
}

// toggles email message

email.addEventListener("input", (Event) => {
    let message = document.getElementById("email-message");

    if (!email.value.includes("@greenriver.edu")) {
        message.style.visibility = "visible";
    } else {
        message.style.visibility = "hidden";
    }
});


function validateCohortNum() {
    return !(cohortNumber.value < MIN || cohortNumber.value > MAX);
}

// toggles cohort num message
cohortNumber.addEventListener("input", (Event) => {
    let message = document.getElementById("cohort-num-message");

    if(cohortNumber.value < MIN || cohortNumber.value > MAX) {
        message.style.visibility = "visible";
    } else {
        message.style.visibility = "hidden";
    }
});

// validates roles input
function validateRoles() {
    return !(roles.value.length < MIN_CHARACTERS || roles.value.length > MAX_CHARACTERS);
}