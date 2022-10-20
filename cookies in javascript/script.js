//Here we learn to use cookies in javascript.

console.log(document.cookie);//This shows the cookies in the website.
document.cookie="name=Animesh Acharya";
document.cookie="name2=YoYo Acharya";
// document.cookie="name=Yoyo Acharya";

//For user input cookies value.
//Not for real life use.
let key = prompt("Enter your key");
let value = prompt("Ente your value:");
//If there is semicolon or some symbol, there can be some issue sothe cookies are encoded.
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`

console.log(document.cookie);

