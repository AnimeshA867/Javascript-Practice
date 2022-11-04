//Write a javascript program to find hte average of numbers in an array using spread syntax.

let num =[1,2,3,4,5,4,3,4,3,4,2,32,4,2,3,4,3];

let obj={...num};

let i,sum=0;

for(i in obj){
    sum+=obj[i];

}

let av=sum/num.length;


console.log("The average of the numbers in the array is "+av); 

