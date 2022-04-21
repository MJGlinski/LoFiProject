function showPassword(){
    var x = document.getElementById("password");
    if(x === "password"){
        x.type = "text";
    } else {
      x.type = "password";
    }
  }
