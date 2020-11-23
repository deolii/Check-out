function validation(){
  
    var message = document.getElementById("message").value;
    var contact = document.getElementById("contact").value;
    var error_message = document.getElementById("error_message");
    var text;
  
    error_message.style.padding = "10px";
  
  
    if (isNaN(contact) || contact.length !=11){
      text = "Please Enter Valid Contact Number";
      error_message.innerHTML = text;
      return false;
    }
  
    if (message.length <= 250){
      text = "Please Enter More Than 250 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert ("Form Submitted Successfully!")
    return true;
  }