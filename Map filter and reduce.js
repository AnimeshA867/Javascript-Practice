// let arr=[45,23,12];

// let a=arr.map((value,a,b)=>{

//   console.log(value,a,b);

//   return value+1;

// })

// console.log(a);

// let b=arr.filter((value,index,array)=>{

//   console.log(value,index,array);

//   return value>20;

// })

// console.log(b);

let arr3=[1,2,3,-24,5,-6,7];

let sum = arr3.reduceRight((total,value)=>{

  return total+value;

})

let sum1=arr3.reduce((total,value)=>{

  return total+value;

})

console.log(sum);

console.log(sum1);
