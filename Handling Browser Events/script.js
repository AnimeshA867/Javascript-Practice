//  let func=()=>{console.log("Hello world 1")};
 
//  let functi12on=()=>{
//    console.log("Hello world1");
//  }
//  let btn = document.getElementById("button");
//  btn.addEventListener('click',func)
//  btn.addEventListener('click',functi12on);

//  btn.removeEventListener('click',func);

// btn.addEventListener('mouseover',function(a,b){
// console.log(`The sum of ${a} and ${b} is ${Number.parseInt(a+b)}`);
// },1,2);

//addEventListener and removeEventLisener can be used to add or remove event 
 let btn = document.getElementById("button");

 //addEventListener:
//Used to add event:
//First argument is the action in which function is to be executed.
//Second argument is the function to be executed.

let func=()=>{
   console.log("Hello world");
}
let func1=()=>{
   console.log("Hello world 2");
}

btn.addEventListener('click',func);
btn.addEventListener('click',func1);
//removeEventListener:
//Used to remove event.
//The argument passed are indentical as addEventListener.

btn.removeEventListener('click',func);

//One thing to remember when using removeEventListener is the function must be declared outside.

