//Problem 1: Print the Calendar date in the below format



for(let i=1;i<=12;i++){
  if(i==2){
    days=28
  } else if(i==1||i==3||i==5||i==7||i==8||i==10||i==12){
    days=31
  }else{
    days=30
  }
   for(let j=1;j<=days;j++){
    console.log(j+"-"+i)                                           
   }                                           
}