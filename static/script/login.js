// Username validation
var usernameField = document.getElementById("usernameField");
var usernameLabel = document.getElementById("usernameLabel");
var usernameError = document.getElementById("usernameError");


function validateEmail(){
    usernameLabel.style.bottom = "45px";
    
    if(!usernameField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      usernameError.innerHTML = 'Please enter a valid username';
      usernameField.style.borderBottomColor= "red";
      return false;
    }

    usernameError.innerHTML="";
    usernameField.style.borderBottomColor="green";
    usernameError.style.top="100%";
    return true;
};
