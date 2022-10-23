
//Here we made a object.
let a={
    name:"Animesh",
    language:"JavaScript",
    run: ()=>{
        alert("Running in the own prototype.")
    }
}
console.log(a);
 
//This is an another object.
let p = {
    run: ()=>{
        alert("run");
    }
}
p.__proto__={
    surname:"Tom",
}

//Here we declared p as prototype of a.
a.__proto__=p;

//If the function is not present in the first object, it would search it's prototype. But if it find the function in its own object, it would executed the first found function.
a.run();
console.log(a.surname);
