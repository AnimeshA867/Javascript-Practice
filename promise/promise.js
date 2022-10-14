let promise = new Promise(function(resolve,reject){
    console.log("Hello");
    resolve(56);
})

console.log("Hello 1");
setTimeout(function(){
    console.log("Hello in 2 second");
},2000);
console.log("My name is "+"Hello three");

console.log(promise);
//Here resolve and reject are already defined in javascript engine. When the function works, the function resolve is implemented and when thee function does not work reject is implemeented.
