

const article=document.querySelector("article");
var sectionEl= document.createElement( "section" );
article.appendChild( sectionEl );

var pEl= document.createElement( "p" );
sectionEl.appendChild( pEl );
var pText= document.createTextNode( "Lorem" );
pEl.appendChild( pText );
console.log( pEl.childNodes.length );
console.log( pEl.childNodes[0].nodevalue );
console.log(pEl.innerHTML);



    let r = Math.floor(Math.random() * 255); 
    let g = Math.floor(Math.random() * 255); 
    let b = Math.floor(Math.random() * 255); 
    console.log(r,g,b); 
    const randomColor=(r,g,b);
    sectionEl.style.background = 'rgb('+ r +','+ g +' , '+ b +')'; 
    if (r<125 || g<125 || b<125)
    {
    sectionEl.style.color= 'rgb(250,250,250)';
    }
    else
    {
    sectionEl.style.color='rgb(0,0,0)';
    } 





/*
const prompt = require('prompt-sync')();
let name = prompt('NAME?');
$ {name}







