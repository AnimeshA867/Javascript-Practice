// const hello = () =>{

//     document.write("hello");
// }

// const timout = () => {
//     document.write("Hello this is the second message from inside the setTimeout");
// }
// let a=setTimeout(hello,3000);
// setTimeout(timout,6000);
// clearTimeout(a);
// console.log(a);


// setInterval(hello,5);


//Producing result after a certain time

// let sum = (a,b,c) =>{
//     document.write("The sum of the two numbers is ",a+b+c);
// }

// setTimeout(sum,5000,1,2,3);
// setInterval(sum,5000,1,2,3);

//To know::

//setInterval:
//It is used to set certain interval between the continous execution of the tasks.
setInterval(function(){
    console.log("Hello world");
},1000);
//There first argument passed is the function to be executed and second argument passed is the time interval between the execution of the tasks.
//In certain cases, more than 1 arguments can be passed to the function in following way:

const func =(a,b)=>{
    console.log(`The sum of two number is `, a+b);
}
setInterval(func,1000,1,2);

//setTimeout 
//it is used to delay the execution of a function.
// Like for the setInterval, more than 1 arguments can be passed in to the function in similar ways.

setTimeout(func,1000,3,2);