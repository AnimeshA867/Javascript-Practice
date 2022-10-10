// let btn1=document.getElementById('btn1');
// let btn2=document.getElementById('btn2');
// let btn3=document.getElementById('btn3');
// let btn4=document.getElementById('btn4');
// let btn5=document.getElementById('btn5');

// btn1.onclick=function(){
//     alert("You pressed button 1.");
// }

// btn2.onclick=function(){
//     alert("You pressed button 2.");
// }

// btn3.onclick=function(){
//     alert("You pressed button 3.");
// }

// btn4.onclick=function(){
//     alert("You pressed button 4.");
// }

// btn5.addEventListener('click',function(){
// alert("You pressed button 5");
// })

// let button=document.getElementsByTagName("button");


// button[0].addEventListener('click',function(){
//     window.location="https://google.com";
//     window.focus();
// })
// setInterval(function(){
//     fetch(`https://jsonplaceholder.typicode.com/todos/1`);
// },5000);

let container=document.getElementsByClassName('container')[0];
// console.log(container.classList);
setInterval(function(){
    container.classList.toggle("red");
},1000);
