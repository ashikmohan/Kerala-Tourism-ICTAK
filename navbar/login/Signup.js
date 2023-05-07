function emailvalidate() {
    var email = document.getElementById("email").value;
    var error = document.getElementById("error1");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    if (email.match(pattern)) {
        error.innerText="Email Valid"
      error.style.color = "#118A12";
      return true;
    } else {

      error.innerHTML = "Invalid email address";
      error.style.color = "red";
      return false;
    }
  }
  
  function phonevalidate() {
    var phone = document.getElementById("phone").value;
    var error = document.getElementById("error2");
    var pattern = /^\d{10}$|^(\d{3}\.){2}\d{4}$|^(\d{3}-){2}\d{4}$|^(\d{3} ){2}\d{4}$/;
  
    if (phone.match(pattern)) {
        error.innerText="Valid Number"
      error.style.color = "#118A12";
      return true;
    } else {
      
      error.innerHTML = "Invalid phone number";
      error.style.color = "red";
      return false;
    }
  }


  function passvalidate() {
    var pass = document.getElementById("pass").value;
    var error2 = document.getElementById("error3");
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (pass.match(pattern)) {
      error2.innerHTML = "Password strength: Good";
      error2.style.color = "#53C645";
      return true;
    } else {
     
      if (pass.length >= 8) {
        
        error2.innerText="Password Strength : Medium"
        error2.style.color ='orange'
      }
       else {
        
        error2.innerText="Password Strength : Poor"
        error2.style.color ='red'
      }
      
      return false;
    }
  }
  
