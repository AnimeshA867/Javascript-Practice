//DOM => DOCUMENT OBJECT MODEL

console.log(document.body);
console.log(window);

let choice=confirm("Do you want the background to be yellow?");
if(choice){
document.body.style.background="yellow";
}
else{
    document.body.style.background="red";
}