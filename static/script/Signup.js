function checkPassword(form) {
    var password1 = form.password.value;
    var password2 = form.passwordConfirm.value;

    // If password not entered
    if (password1 === '') {
        document.getElementById('error').innerHTML = "Please enter a password.";
        return false;
    }
          
    // If confirm password not entered
    else if (password2 === '') {
        document.getElementById('error').innerHTML = "Please enter confirm password.";
        return false;
    }
          
    // If passwords do not match
    else if (password1 !== password2) {
        document.getElementById('error').innerHTML = "Password did not match. Please try again.";
        return false;
    }

    else if (password1 == password2) {
        document.getElementById('error').innerHTML = "";
        return false;
    }
    // If passwords match
    else {
       return true;
    }
}
    

document.getElementById("checkbox").required = true;