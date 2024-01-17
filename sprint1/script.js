$(document).ready(function() {
    handleDarkModeSwitch();
});

function handleDarkModeSwitch(){
    let darkModeOn = false;
    console.log("setting up switch");
    $('#darkModeSwitch').change(function() {
        console.log("Dark Mode switch changed");
        if (darkModeOn){
            console.log("Turning OFF Dark Mode");
            $('body').removeClass("dark-mode");
        }else{
            console.log("Turning ON Dark Mode");
            $('body').addClass("dark-mode");
        }
        darkModeOn = !darkModeOn;
    });
}
