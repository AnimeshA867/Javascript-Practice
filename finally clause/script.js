// // try{
// //     console.log(Helloworld);
// // }
// // catch(error){
// //     console.log(error.message);
// // }
// // finally{
// //     console.log("Subscribe to my youtube channel.");
// // }

// let f = () => {
//     try {
//         console.log(Helloworld);
//         console.log("Helloworld");
//         return;
//     } catch (error) {
//         console.warn(error.message);
//     } finally {
//         console.log("Subscribe to my youtube channel.");
//     }
// };
// f();


//try syntax is used to store the block of code to be executed by default.
//When there is an error in try block, the error is then caught by catch syntax and then appropriate action is taken.
//Finally clause work in all condition. If there is an error in the program or there is no error in the program, the finally clause will work in all cases. 

try{
    console.log(Helloworld);
    console.log("Helloworld");
}
catch(error){
    console.log(error.message);
}
finally{
    console.log("Subscribe to my youtube channel.");
}

//Here error is thrown in try as the variable helloworld is not defined. Then the error message is thrown from catch syntax.
//Finally clause is executed no matter what.

//Here if we comment out the first statement in try statement. Then, the try block will work. Even though the function is working, the finally statement will still be executed.

// If we put the entire block inside a circle and return the function in try syntax. Even after returning the function, the finally clause will still be executed.
let f = () => {
    try {
        console.log(Helloworld);
        console.log("Helloworld");
        return;
    } catch (error) {
        console.warn(error.message);
    } finally {
        console.log("Subscribe to my youtube channel.");
    }
}
f();
