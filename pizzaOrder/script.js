// main
function validateForm() {
    let noErrors = true;
    //let x = document.forms["myForm"]["fname"].value;
    // if(x === "") {
    //     alert("Name must be filled out");
    //     return false;
    // }

    //alert("hello");
    validateEmail();

    if (noErrors === true) {
        document.forms.submit();
    }
}

// email
function validateEmail() {
    // FIX
    const re = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/
    
    let email = document.querySelector("input[name='Email']").value;
    console.log(email);

    if(email.includes("@greenriver.edu") && String(email)
        .toLowerCase()
        .match(re)){
        return true;
    }

    alert("Your email does not contain @greenriver.edu or is not valid")
    return false;
}

//topping validator
function validateToppings(){

}

//city/state validator

//phone/email validator

function validatePhone(){

}


