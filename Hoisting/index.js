
//In javascript interpreter, the function declaration and variable declaration is moved to the top of the code before the execution of the code. This process can be called as hoisting.

//Hoisting only works with var.

hello();

function hello(){
    console.log("Hey jude.");
}

history();

let history =()=>{
    console.log("Hey there Delilah!");
}

//History() function doesn't work as the hoisting doesn't work with function expression and class expression.