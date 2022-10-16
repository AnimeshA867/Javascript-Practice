// let num= [551,22,3,14,5,6,7,123];
// num.sort();
// console.log(num);

// //In javascript, sorting is done in the basis of alphabetical order. The sorting function sort the value assuming all the values as a string. 
// //Now, to sort them in alphabetical order, we use a optional function inside the sorting array.

// num.sort(function comp(a,b){
//   return a-b;
// })
// console.log(num);
// const compare = (a,b) => {
//   return b-a ;
// }

// let arr=[1,4,2,3,5,4,7,8,54,234,564];
// //Sorting on the basis of alphabetical order:
// arr.sort();
// console.log(arr);

// //Sorting on the basis of numeric ascending order:
// arr.sort(compare);
// console.log(arr);


// arr.reverse();
// console.log(arr);


//Here sorting array in Random order:

let arr=[1,2,6,3,5,7,4,67];

arr.sort(function(){
  return 0.5-Math.random();
})
         console.log(arr);
