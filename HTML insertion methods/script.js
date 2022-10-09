let a=document.getElementsByTagName('div')[0];
// a.innerHTML+='<h1> Hello world! </h1>'
let div=document.createElement('mono');
div.innerHTML='<h1> Hello world </h1>';
//Append the div before the end of the element.
a.append(div);
//Append the div after the beginning of the element.
// a.prepend(div);
//Append the div before the beginning of the element.
// a.before(div);
//Append the div after the end of the element.
// a.after(div);
//Replace the entire element with div.
// a.replaceWith(div);