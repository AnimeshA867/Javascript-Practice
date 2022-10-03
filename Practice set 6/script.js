//Q1 and 2: Write a program using prompt function to take input of age as a value from the use and use alert to tell if he can drive!


// let choice;

// do{

//     let n= prompt("Enter your age:");

//     n=Number.parseInt(n);
//     if(n>=18){
//         alert("You can drive.");
//     }
//     else{
//         alert("Sorry, you can't drive.");
//     }

//     choice=confirm("Do you want to see the prompt again?");
// }while(choice);

//Q3:
// let choice;

// do{

//     let n= prompt("Enter your age:");

//     n=Number.parseInt(n);
//     if(n<0){
//         console.error("The age entered cannot be negative.");
//     }
//     else if(n>=18){
//         alert("You can drive.");
//     }
//     else{
//         alert("Sorry, you can't drive.");
//     }

//     choice=confirm("Do you want to see the prompt again?");
// }while(choice);


// q4:
// let n= prompt("Enter a number.");

// if(n>4){
    
//     location.href="https://www.google.com";
// }


let color=prompt("Enter a color of the page:");

document.body.style.background=`${color}`;