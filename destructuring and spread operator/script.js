let arr = [3,5,12,1,2,4,23,4,2,3,4,32];

// let [a,b,c,...arr2]= arr;


let {a,b,c} = {a:12,b:13,c:45};
console.log(a,b,c);

//Spread Operator:

let arr1 = [3,4,5,2];

let obj1 = {...arr1};
console.log(obj1); 

let obj2 = {...obj1,"0":"Animesh",2:"Hey There Delilah"};

console.log(obj2);