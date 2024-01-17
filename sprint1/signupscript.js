// sign up form
const email = document.getElementById("input-email");
const cohortNumber = document.getElementById("input-cohort-num");
const MIN = 1;
const MAX = 100;

function validateForm(){
    return validateEmail() && validateCohortNum();
}

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