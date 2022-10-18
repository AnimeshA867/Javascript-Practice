//Here with try and catch, we can create a custom error. We can throw a custom error with respect to the condition.
try{
    // let name="Animesh";
    // console.log(value);
    let age= prompt("Enter your age:");
    age=Number.parseInt(age);
    if(age<4){
        throw new ReferenceError("Age is too low.");
        
    }
    console.log(age);
// throw new ReferenceError("This is a custom error.");
}
catch(error){
    // console.log(error);
    console.log(error.name);
    console.log(error.message);
    // console.log(error.stack);
}