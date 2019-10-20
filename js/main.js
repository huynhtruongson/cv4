function btnSubmit(event) {
    var strEmail=document.getElementById("email");
    var strMessage=document.getElementById("message");
    var errorEmail=document.getElementById("emailError");
    var errorMessage=document.getElementById("passwordError");
    if(strEmail.value=="") {
        //var errorEmail=document.getElementById("emailError");
        errorEmail.innerHTML="pls enter your email";
        event.preventDefault();
    }
    else {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(email.value)) { 
        errorEmail.innerHTML="Email không hợp lệ !"
        event.preventDefault();
    }
    }
    if(strMessage.value=="") {
        //var errorMessage=document.getElementById("passwordError");
        errorMessage.innerHTML="pls enter your message";
        event.preventDefault();
    }
    else {
        //var s = strMessage.value;
        if(strMessage.value.length>128) {
            errorMessage.innerHTML="Your message is longer than 128 characters";
            event.preventDefault();
        }
    }
    
}

function emailClick() {
    var errorEmail=document.getElementById("emailError");
        errorEmail.innerHTML="";

}
function messageClick() {
    var errorMessage=document.getElementById("passwordError");
        errorMessage.innerHTML="";

}

 

