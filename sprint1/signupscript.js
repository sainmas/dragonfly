// sign up form
const name = document.getElementById("input-name");
const email = document.getElementById("input-email");
const cohortNumber = document.getElementById("input-cohort-num");
const roles = document.getElementById("input-roles");
const submit = document.getElementById("submit-btn");
const MIN = 1;
const MAX = 100;
const MIN_CHARACTERS = 50;
const MAX_CHARACTERS = 500;

function validateForm(){
    let isEmpty = name.value === null && email.value === null && cohortNumber.value === null && roles.value === null;

    if(isEmpty) {
        alert("Form is empty!");
    }

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
// email.addEventListener("input", (Event) => {
//     const emailMessage = document.getElementById("email-message");
//     const message = "Please use an @greenriver.edu email if possible";
//
//     let small = document.createElement("small");
//     small.setAttribute('id', "email-message");
//     small.innerText = message;
//
//     if (!email.value.includes("@greenriver.edu")) {
//         if(!document.contains(emailMessage)) {
//             document.getElementById("email").appendChild(small);
//         }
//     } else {
//         emailMessage.remove();
//     }
// });

function validateCohortNum() {
    return !(cohortNumber.value < MIN || cohortNumber.value > MAX);
}

// toggles cohort num message
cohortNumber.addEventListener("input", (Event) => {
    const cohortMessage = document.getElementById("cohort-num-message");
    const message = "Cohort number is invalid";

    let small = document.createElement("small");
    small.setAttribute('id', "cohort-num-message");
    small.setAttribute('class', 'warning')
    small.innerText = message;

    if(cohortNumber.value < MIN || cohortNumber.value > MAX) {
        if(!document.contains(cohortMessage)) {
            document.getElementById("cohort-num").appendChild(small);
        }
    } else {
        cohortMessage.remove();
    }
});

// validates roles input
function validateRoles() {
    return !(roles.value.length < MIN_CHARACTERS || roles.value.length > MAX_CHARACTERS);
}

submit.addEventListener("mouseover", (Event) => {
    submit.className += "-hover";

});

submit.addEventListener("mouseout", (Event) => {
    submit.className = "submit-btn";

});