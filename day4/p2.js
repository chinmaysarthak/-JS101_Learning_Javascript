//Problem 2 : Given a character in lower case print the upper case character


let char="n"

let lower="abcdefghijklmnopqrstuvwxyz"
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for(let i=0;i<lower.length;i++){
 if(char==lower[i]){
   console.log(upper[i])
 }
}