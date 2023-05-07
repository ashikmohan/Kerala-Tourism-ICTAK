function emailval() {
    var email = document.getElementById("email").value;
    var error1 = document.getElementById("error1");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    if (email.match(pattern)) {
      error1.innerHTML = "Email is valid";
      error1.style.color ='#D9F109';
      return true;
    } else {
      error1.innerHTML = "Invalid email address";
      error1.style.color='red'
      return false;
    }
  }
  

function pasval() {
    var pass = document.getElementById("pass").value;
    var error2 = document.getElementById("error2");
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (pass.match(pattern)) {
      error2.innerHTML = "Password strength: Good";
      error2.style.color = "#53C645";
      return true;
    } else {
    
      if(pass.length >=8){
        error2.innerText="Password strength: Medium"
        error2.style.color ='orange'
      } else{
        error2.innerText="Password strength: Poor"
        error2.style.color ="red"
      }
      
      return false;
    }
  }
  
  