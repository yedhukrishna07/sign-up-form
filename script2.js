function validation(){
    var message = document.getElementById('message');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    message.style.display = "none";
    if(name.length==0){
     message.innerText = "Please enter your User Name ";
     message.style.display = "block";
     return false;
 }
 
 if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test('email')===false){
     message.innerText = "Please enter a valid email";
     message.style.display = "block";
     return false;
    }
 
    if(password.length <8){
    message.innerText = "Password length must be greater than 8  ";
    message.style.display = "block";
    return false;
    }
    
     alert("Sign Up Sucsess");
     return false;
 }
 