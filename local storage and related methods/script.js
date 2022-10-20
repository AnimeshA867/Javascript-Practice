

// let key = prompt("Enter key you want to set:");
// let value = prompt("Enter the value you want to set:");

// localStorage.setItem(key,value);

// console.log(` The value of ${key} is ${localStorage.getItem(key)}`)


// if(key==="red"||key==="blue"){
//     localStorage.removeItem(key);
// }
// if(key==="yellow"){
//     localStorage.clear();
// }

//We can get and set values like an object.
localStorage.name="Animesh";

//We can also delete value like an object.
delete localStorage.name;

//The value with key name has been deleted.

let value1 ={
    "name":"animesh",
    "animesh":"acharya",
    fkasjflkas:"aslkfdjalsk",
    id:1,
}

localStorage.hello=JSON.stringify(value1);