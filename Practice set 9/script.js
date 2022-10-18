//q1: Write a program to load a javascript file in a browser using promises. Use. then() to display an alert when the load is complete.

// let script=document.createElement("script");

// let loadScript=(src)=>{
//     return new Promise((resolve,reject)=>{
//         script.src=src;
//         document.body.append(script);
//         script.onload=()=>{
//             resolve("The script has been loaded.");
//         }
//         script.onerror=()=>{
//             reject("There was certain error.");
//         }
//     })
// }

// let p1=loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js");

// p1.then((value)=>{
//     console.log(value);
//     console.log("The script has been loaded.");
// }).catch((error)=>{
//     console.log(error);
// })


//q2: Write the same program form previous question and use async/ await syntax.

// let script=document.createElement("script");


// async function loadScript(src){
//     return new Promise((resolve,reject)=>{
//         script.src=src;
//         document.body.append(script);
//         script.onload=()=>{
//             resolve("The script has been loaded.");
//         }
//         script.onerror=()=>{
//             reject("The script couldn't be loaded.");
//         }
//     })
// }
// let p1= loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js");
// p1.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// })

//Another way:

// function loadScript(src){
//     return new Promise((resolve,reject)=>{
//         script.src=src;
//         document.body.append(script);
//         script.onload=()=>{
//             resolve("The script has been loaded.");
//         }
//         script.onerror=()=>{
//             reject("The script couldn't be loaded.");
//         }
//     })
// }
// const main1=async ()=>{
//     console.log(new Date());
//     let p1=await loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js");
//     console.log(new Date());
//     console.log("The script was loaded with success");

// }
//     main1();

//q3: Create a promise which rejects after 3 seconds. Use an async/await to get its value. Use a try catch to handle its error.

    // let p1=()=>{
    //    return  new Promise((resolve,reject)=>{
    //     // resolve("The function is resolved until now.")/
    //     setTimeout(function(){
    //         reject(new Error("The function is rejected."))
    //     },3000);
    // })
    // }
    // let a = async()=>{
    // try{
    
    //             let c= await p1();
                
    //             console.log(c);
    //         }
            
    //         catch(error){
    //             console.warn(error.message);
    //         }
    //     }
    //     a();

//q4: Write a program using Promise.all() inside an async/await to await 3 promises. compare its result with the case where we await these promise one by one.

//Here we have to make three promises.

let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{

        resolve("P1 has been resolved.");
    },3000)
})
let p2=new Promise((resolve,reject)=>{

    setTimeout(()=>{

        resolve("P2 has been resolved.");
    },9000);
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        
        resolve("P3 has been resolved.");
        // reject("This promise has been rejected.");
    },7000);
})
let p4=new Promise((resolve,reject)=>{
    setTimeout(()=>{

        resolve("P4 has been resolved.");
    },5000);
    })

// let a = async()=>{
// console.time("run");
//     let promall=await Promise.all([p1,p2,p3,p4])
//     console.log(promall);
//     console.log("All the promise has been resolved.");
//     console.timeEnd("run");
// }
let b = async()=>{
    console.time("run");
    let promall1=await p1();
    console.log(promall1);
    let promall2=await p2();
    console.log(promall2);
    let promall3=await p3();
    console.log(promall3);
    let promall4=await p4();
    console.log(promall4);

    // console.log(promall);
    console.timeEnd("run");
    console.log("All the promise has been resolved.");
}

// a();
b();