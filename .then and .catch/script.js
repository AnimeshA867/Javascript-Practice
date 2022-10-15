let promise1 = new Promise(function (resolve, reject) {
  console.log("The promise is pending.");
  setTimeout(() => {
    // console.log("This promise has been fulfilled.");
    resolve(true);
    // reject(new Error("The promise has been rejected."));
  },5000);
});
let promise2 = new Promise(function (resolve, reject) {
  console.log("The promise is pending.");
  setTimeout(() => {
    // console.log("This promise has been rejected.");
    // resolve(true);
    reject(new Error("The promise has been rejected."));
  },5000);
});


promise1.then((value)=>{
  console.log(value);
},(error)=>{
  console.log(error);
})

// promise2.then((error)=>{
//   console.log("Some error occurred in promise 2");
// })
promise2.then((value)=>{
  console.log(value);
},
  (error)=>{
  console.log(error);
})

// promise2.catch((error)=>{
//   console.log("Some error occurred in promise 2");
// })
// console.log(promise1);
// console.log(promise2);


// let script=document.createElement("script");
// let loadScript= (src,callback)=>{
//   script.src=src;
//   script.onload=()=>{
//     console.log("The script has been successfully loaded.");
//     callback(false,src);
//   }
//   script.onerror=()=>{
//     callback(new Error(`Error loading script ${src}`));
//   }
//   document.body.append(script);
// }
/*function helloWorld(error,src){
  if(error){
console.log(error);
return;
  }
  console.log(src);
}
// loadScript("www.google.com",helloWorld);

let promise=new Promise((resolve,reject)=>{
  if(resolve){
    console.log("The script has been successfully loaded.");
        callback(false,src);
  }
  else if(reject){
    script.onerror=()=>{
          callback(new Error(`Error loading script ${src}`));
        }
  }
})
*/
