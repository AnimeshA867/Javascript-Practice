//Async runs the promises in parallel where while one promise is running another promise can also run at the same time.

async function func(){
let p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("27 deg");
    },5000)
})

let p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("21 deg");
    },9000)
})
    p1.then((value)=>{
        console.log(value);
    })
    p2.then((value)=>{
        console.log(value);
    })
    //Await wait for the promise to resolve for execution of the next task.
    console.log("Fetching p1 value. Please wait.");
    let p1Value= await p1;
    console.log("Fetching p2 value. Please wait.");
    let p2Value= await p2;
    return [p1Value,p2Value];

}
let a=func();
console.log(a);