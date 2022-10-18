// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

var registered_email = "admin@gmail.com";
var registered_password = "admin@123";

var entered_email = "admin@gmail.com";
var entered_password = "admin@123";

if(entered_email == registered_email){
  if(entered_password == registered_password){
    console.log("Login Successfull!");
  }else{
    console.log("Incorrect Password!");
  }
}else{
  console.log("Incorrect Email");
}