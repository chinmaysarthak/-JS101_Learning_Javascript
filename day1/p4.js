//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let given_username= "abcde";
let given_password= 1234;

let input_username= "abcde";
let input_password= 12234;

if(given_username==input_username){
  if(given_password==input_password){
    console.log("login");
  }else{
    console.log("wrong password");
  }
}else{
  console.log("wrong email");
}