//Problem 2: Print Prime Numbers from 1 to given limit

let limit=29

for(let j=1;j<=limit;j++){

let count=0
for(let i=1;i<=j;i++){
  if(j%i==0){
    count++
  }
}if(count==2){
  console.log(j+" "+"is a prime number")
}
}