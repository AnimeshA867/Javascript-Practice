let p3= new Promise((resolve,reject)=>{

    setTimeout(function(){
        resolve("Value 3");
    },3000);
});
let p2= new Promise((resolve,reject)=>{

    setTimeout(function(){
        resolve("Value 2");
    },2000);
});
let p1= new Promise((resolve,reject)=>{

    setTimeout(function(){
        // resolve("Value 1");
        reject("hehe");
    },1000);
});

//Promise.all makes array of promises. It is useful to execute some function after all the function has been resolved.
let promise_all = Promise.all([p1,p2,p3]);
promise_all.then((value)=>{
    console.log("All three promises has been resolved.");
    console.log(value);//This return the resolved value of all promises in the array.
}).catch((error)=>{//This is used to catch error in any array element.
    console.log("Error in promises.")
})

//Promise.allSettled;
//Promsie.allSettled is used to return value of all promise after all of promises in the array are resolved.
let promise_settled=Promise.allSettled([p1,p2,p3]);
promise_settled.then((value)=>{
    console.log(value);
})


//Promise.race return the value of the promise in the array that is executed at first.
let promise_race=Promise.race([p1,p2,p3]);
promise_race.then((value)=>{
    console.log(value);
})

//Promise.any return the value of the promise in the array that resolves at first.

let promise_any= Promise.any([p1,p2,p3]);

promise_any.then((value)=>{
    console.log(value);
})

//Promise.reject rejects a promise with certain value.
//Promise.resolve resolves the promise with certain value.
promise_all=Promise.resolve("Hey there");
promise_all=Promise.reject(new Error("There seems to be some problem in the array."));
promise_all.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
})