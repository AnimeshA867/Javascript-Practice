// let button=document.getElementById("button");

// let container = document.getElementsByClassName("container")[0];

// button.onclick=function(){
//     console.log("Hey jude");
// }

// container.onmouseenter=function(){
//     console.log("Opps, there is something wrong.")
// }
// container.onmouseleave=function(){
//     console.log("Ohh great, now you're leaving me.")
// }

// button.oncontextmenu=function(){
//     console.log("Right click noticed");
// }

// // button.onmouseout=function(){
// //     button.style.transform='scale(2)';
// // }
// // button.onmouseover=function(){
// //     button.style.transform='scale(0.5)';
// // }
// button.onmousedown=function(){

//         container.append="Excuse me mister";
// }
// button.onmouseup=function(){

// container.append="Where the fish you going man?";
// }


//Javascript can be used to manipulate the document with respect to user's action.
//Browser events:
let button=document.getElementById("button");

let container = document.getElementsByClassName("container")[0];

//Function is used to define the task to be performed.

//onclick:
//When an object is clicked by user:
button.onclick=function(){
    alert("The button has been clicked.");
}

//onmouseover:
//When user hovers cursor above the content.
button.onmouseover=function(){
    alert("Hello");
}
//onerror:
//When there is an error downloading the content.
button.onerror=function(){
    alert("There was error download the content.");
}
//There are many other browser event, just too much to cover.
