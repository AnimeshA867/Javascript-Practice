//Wirt e a javascript function which resolves a promise after n seconds. The function teakes n as the parameter. Use an IIFE to execute the function with different values of n.
((n)=>{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{

        resolve("This function is resolved.");
        console.log("This function is resolved.")
    },n*1000);
})
})(5);