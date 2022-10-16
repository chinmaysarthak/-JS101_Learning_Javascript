//Problem 1 : Given a string count the number of words in that string

let str="I am Ironman"
let count=1

for(let i=0;i<str.length;i++){
  if(str[i]==" "){
    count+=1
  }
}console.log(count)