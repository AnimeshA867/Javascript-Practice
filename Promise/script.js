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
