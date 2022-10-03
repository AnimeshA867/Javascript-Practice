// alert("Hello world");
// let a=2,b=5;
// console.log(a+b);


// console.log("I'll never fall love again until I found her.")

// console.error("Hey this is an error.");


const obj ={
  a:1,
  b:2,
  c:3,
  d:4,
  e:5
}

// let arr=[1,2,3,4,5,5,6,7,8,6,7,7];
// // console.table(obj);
// // console.time("objloop");
// // for(let e in obj){
// //   console.log(e);
// // }
// // console.timeEnd("objloop");
// console.time("objloop");
// for(let e of arr){
//   console.log(e);
// }
// console.timeEnd("objloop");


for(let element in obj){
  //Here are far as we know, For-in provides us with the index where as the for-of provides us with the value.

  console.log("The value of obj "+element + " is "+obj[element]);
}