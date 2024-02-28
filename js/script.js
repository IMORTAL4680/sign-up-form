var username = document.getElementById("username");
var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");
var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");
var error3 = document.getElementById("error3");
var form = document.getElementById("form")

form.addEventListener('submit',e=>{
    e.preventDefault();
    if(Validate()==true){
        alert("Registration Successful!");
        location.href = "../html/welcome.html";
    }
});

function Seterror(element,message){
    element.innerHTML= message;
}

function Removeerror(element){
    element.innerHTML= "";
}

function Validate(){
    var isValid=true;
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const confirm_passwordValue = confirm_password.value.trim();
    if(usernameValue==""){
        Seterror(error1,"This field is required");
        isValid=false;
    } 
    else{
        Removeerror(error1);
    }

    if(passwordValue==""){
        Seterror(error2,"This field is required");
        isValid=false;
    } 
    else if( passwordValue.length<6){
        Seterror(error2,"Password must  be at least 6 characters long");
        isValid=false;
    }
    else{
        Removeerror(error2);
    }

    if(confirm_passwordValue==""){
        Seterror(error3,"This field is required");
        isValid=false;
    }
    else if(passwordValue!=confirm_passwordValue) {
        Seterror(error3,"Passwords do not match");
        isValid=false;
    }
    else{
        Removeerror(error3);
    }
    return isValid;
}
