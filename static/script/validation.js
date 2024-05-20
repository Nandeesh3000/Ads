function validateMailPhone() {
    var mailPhoneInput = document.getElementById("mailPhone");
    var mailPhoneValue = mailPhoneInput.value;
  
    // Regular expression to match a valid email or phone number
    var mailPhoneRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$|^\d{10}$/;
  
    if (!mailPhoneValue.match(mailPhoneRegex)) {
      document.getElementById("error").innerHTML = "Please enter a valid email or phone number.";
      return false;
    } else {
      document.getElementById("error").innerHTML = "";
      return true;
    }
  }
  
  document.getElementById("signup").addEventListener("submit", function (event) {
    if (!validateMailPhone()) {
      event.preventDefault();
    }
  });