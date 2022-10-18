const ol = document.querySelector('ol');
const olChildren = ol.children;
console.log(olChildren);
const a = ol.children[0]; //sleep
const b = ol.children[1];// Eat well
const c = ol.children[2]; //self care
const d = ol.children[3]; //learning to code
const e = ol.children[4]; //the fast

e.appendChild(a);

a.appendChild(b);

b.appendChild(c);

c.appendChild(d);


//Move the <h2> of the third section in the second one and vice-versa


const elsection = document.querySelectorAll('section');
const elsection2 = elsection[1];
const elsection3 = elsection[2];

const eldiv = document.querySelector('div');

const elh = document.querySelectorAll('h2');
const elh3 = elh[1];
const elh2 = elh[2];

eldiv.appendChild(elh3);

elsection2.appendChild(elh2);

const elp = document.querySelectorAll('p');
const elp2 = elp[3];
const elp3 = elp[4];
console.log(elp2);
const eltext = document.querySelectorAll('textnode');
const eltext2 = eltext[2];

elsection2.appendChild(elp2);


elsection3.appendChild(elp3);


elsection3.remove();






//const divremove =document.querySelectorAll('h2');
//let throwawayNode = elsection3.removeChild(d_nested);
