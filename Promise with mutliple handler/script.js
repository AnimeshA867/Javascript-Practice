let p1 = new Promise((resolve,reject)=>{
    console.log("Hey this is being shown before the promise is resolved.");
    resolve("This promise has been resolved.");
    // reject(1);
})
p1.then((value)=>{
    console.log(value);

})

p1.then(()=>{
    // console.log("Hey there deililah");
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("Hey there delilah");
        },6000);
    })
})