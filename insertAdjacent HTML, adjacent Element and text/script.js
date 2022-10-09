let first=document.getElementById('first');

// //Before begin: Add html element before the beginning elment having id first.
// first.insertAdjacentHTML('beforebegin',`<p> Beforebegin</p>`);
// // //After begin: Add html element after the beginning of the element having id first.
// // first.insertAdjacentHTML('afterbegin',`<p> Afterbegin</p>`);
// // //Before end: Add html element before the end of the element having id first.
// // first.insertAdjacentHTML('beforeend',`<p> Beforeend</p>`);
// //Before begin: Add html element before the end of element having id first.
// first.insertAdjacentHTML('afterend',`<p> Afterend</p>`);


// first.insertAdjacentText('beforebegin','Hey this is a string to be added before the beginning of the class with id first.')


// first.insertAdjacentElement('afterend','div');

// first.remove();



//Now for the purpose of learning 

const div=document.createElement('div class="jude"');
div.innerHTML=`hey this is used to `;

first.insertAdjacentElement('beforebegin',div);