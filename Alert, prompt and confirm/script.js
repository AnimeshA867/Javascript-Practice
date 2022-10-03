
let n= prompt("Enter the value of n");
alert("You entered :"+typeof(n));

let a = Number.parseInt(n);
alert("You entered :" +typeof(a));


let write=confirm("Do you want to write the value in the document.");
if(write){
    document.write(a);
}else{
    document.write("Please let me write in the document.");
}