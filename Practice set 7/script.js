let nav=document.getElementsByTagName("nav");

nav[0].firstElementChild.style.color="green";
nav[0].lastElementChild.style.color="green";

// let t= document.getElementsByTagName("table")[0];

// console.log(t.tBodies);

let arr =Array.from(document.getElementsByTagName("li"));
arr.forEach((element)=>{
    element.style.backgroundColor="cyan";
})