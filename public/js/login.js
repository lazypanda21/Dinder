

$(document).ready(function() {

var newuserinfo;
  $(document).ready(function(){
    $(".btn-secondary:first").click(function(){
      $(this).button('toggle');
    });


    $("#register").click(function(){
      // createUser
      var newuser = $("#userName").val();
      var newpassword =  $("#password").val().trim();
     
      sessionStorage.setItem("firstTime", true);
      // new user info
      var newuser = {
        UserName:newuser,
        Password:newpassword,
      }
      $.post("api/Login/create",newuser).then(newuserinfo);
    });


    $("#signin").click(function(){
      // user login
      var name = $("#inputName").val();
      var password = $("#inputPassword").val().trim();
     

      // existed user info
      var data = {
        UserName : name,
        Password : password
      }
      var getlogin;


      $.post("api/Login",data).then(function(getlogin){
        // verify for the user login
        var name = getlogin.UserName;
        if (typeof(Storage) !== "undefined") {
          // store the username to display on the search page
          sessionStorage.setItem("user", name);
        }
        if (getlogin.login === true) {
          
            window.location.replace("/owner-manager.html");
          
        }
        else{
        alert ("Check your input or you just don't exist.Do you want to sign up?")
      }
      });
    });
  });
  
});